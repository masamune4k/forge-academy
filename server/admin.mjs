import {ApiError, digest, recoveryCode, hashPassword, verifyPassword} from './auth.mjs';

export function createAdmin({db, ownerId, now, first, all, limit, body, json, publicUser}) {
  const audit = (actor, action, target, detail = {}) => db.prepare('INSERT INTO admin_audit(id,actor_id,action,target_id,detail,created_at) VALUES(?,?,?,?,?,?)').bind(crypto.randomUUID(), actor.id, action, target, JSON.stringify(detail), now());
  const inviteView = x => ({id:x.id, label:x.label, maxUses:x.max_uses, uses:x.uses, expiresAt:x.expires_at, revoked:!!x.revoked, createdAt:x.created_at});
  return async function handle(request, user, parts, url) {
    if (!ownerId || user.id !== ownerId || user.must_change_password) throw new ApiError(403, 'Acesso exclusivo do administrador.');
    const method = request.method;
    if (parts.length === 2 && parts[1] === 'users' && method === 'GET') {
      const page = Number(url.searchParams.get('page') || 1), q = (url.searchParams.get('q') || '').trim().slice(0, 64);
      if (!Number.isSafeInteger(page) || page < 1 || page > 10000) throw new ApiError(400, 'Página inválida.');
      const search = '%' + q.replace(/[\\%_]/g, x => '\\' + x) + '%';
      const where = "WHERE login LIKE ? ESCAPE '\\' OR display_name LIKE ? ESCAPE '\\'";
      const [count, rows] = await Promise.all([
        first('SELECT count(*) AS total FROM users ' + where, search, search),
        all('SELECT id,login,display_name,class_id,status,must_change_password,created_at,updated_at FROM users ' + where + ' ORDER BY created_at DESC,id LIMIT 20 OFFSET ?', search, search, (page - 1) * 20),
      ]);
      return json({users:rows.map(x => ({...publicUser(x), status:x.status, createdAt:x.created_at, updatedAt:x.updated_at})), total:count.total, page, pageSize:20});
    }
    if (parts.length === 2 && parts[1] === 'audit' && method === 'GET') {
      return json({events:await all('SELECT action,target_id,detail,created_at FROM admin_audit ORDER BY created_at DESC,id DESC LIMIT 100')});
    }
    if (parts.length === 2 && parts[1] === 'invites' && method === 'GET') {
      return json({invites:(await all('SELECT id,label,max_uses,uses,expires_at,revoked,created_at FROM registration_invites ORDER BY created_at DESC,id DESC LIMIT 100')).map(inviteView)});
    }
    if (parts.length === 2 && parts[1] === 'invites' && method === 'POST') {
      await limit('admin-invites:' + user.id, 100, 3600);
      const data = await body(request), label = typeof data.label === 'string' ? data.label.trim() : '';
      const uses = data.maxUses ?? 1, days = data.days ?? 7;
      if (!label || label.length > 64 || /[\x00-\x1f\x7f]/.test(label)) throw new ApiError(400, 'Dê ao convite um nome de até 64 caracteres.');
      if (!Number.isInteger(uses) || uses < 1 || uses > 100 || !Number.isInteger(days) || days < 1 || days > 30) throw new ApiError(400, 'Use de 1 a 100 cadastros e validade de 1 a 30 dias.');
      const id = crypto.randomUUID(), code = recoveryCode(), created = now(), expires = created + days * 86400000;
      await db.batch([
        db.prepare('INSERT INTO registration_invites(id,code_hash,label,max_uses,expires_at,created_by,created_at) VALUES(?,?,?,?,?,?,?)').bind(id, digest(code), label, uses, expires, user.id, created),
        audit(user, 'invite.created', id, {label, maxUses:uses, days}),
      ]);
      return json({code, invite:{id, label, maxUses:uses, uses:0, expiresAt:expires, revoked:false, createdAt:created}}, 201);
    }
    if (parts.length === 4 && parts[1] === 'invites' && parts[3] === 'revoke' && method === 'POST') {
      const invite = await first('SELECT id,revoked FROM registration_invites WHERE id=?', parts[2]);
      if (!invite) throw new ApiError(404, 'Convite não encontrado.');
      if (invite.revoked) return json({ok:true});
      await db.batch([db.prepare('UPDATE registration_invites SET revoked=1 WHERE id=?').bind(invite.id), audit(user, 'invite.revoked', invite.id)]);
      return json({ok:true});
    }
    if (parts[1] === 'users' && (parts.length === 3 && method === 'PUT' || parts.length === 4 && parts[3] === 'password' && method === 'POST')) {
      const target = await first('SELECT id,status FROM users WHERE id=?', parts[2]);
      if (!target) throw new ApiError(404, 'Conta não encontrada.');
      if (target.id === ownerId) throw new ApiError(400, 'Sua conta administrativa é protegida. Altere sua própria senha em Minha conta.');
      await limit('admin-credentials:' + user.id, 30, 900);
      const data = await body(request), actor = await first('SELECT password FROM users WHERE id=?', user.id);
      if (!await verifyPassword(data.adminPassword, actor?.password || '')) throw new ApiError(401, 'A senha do administrador não confere.', 'ADMIN_PASSWORD');
      const guard = "EXISTS(SELECT 1 FROM users WHERE id=? AND password=? AND status='active' AND must_change_password=0)";
      let statement, action;
      if (parts[3] === 'password') {
        const password = await hashPassword(data.newPassword);
        statement = db.prepare('UPDATE users SET password=?,recovery_hash=?,must_change_password=1,updated_at=? WHERE id=? AND ' + guard).bind(password, digest(recoveryCode()), now(), target.id, user.id, actor.password);
        action = 'user.password_reset';
      } else {
        if (!['active', 'blocked'].includes(data.status)) throw new ApiError(400, 'Estado da conta inválido.');
        statement = db.prepare('UPDATE users SET status=?,updated_at=? WHERE id=? AND ' + guard).bind(data.status, now(), target.id, user.id, actor.password);
        action = data.status === 'blocked' ? 'user.blocked' : 'user.unblocked';
      }
      const statements = [statement,
        db.prepare('DELETE FROM sessions WHERE user_id=? AND ' + guard).bind(target.id, user.id, actor.password),
        db.prepare('INSERT INTO admin_audit(id,actor_id,action,target_id,detail,created_at) SELECT ?,?,?,?,?,? WHERE ' + guard).bind(crypto.randomUUID(), user.id, action, target.id, '{}', now(), user.id, actor.password),
      ];
      const result = await db.batch(statements);
      if (!result[0]?.meta?.changes) throw new ApiError(409, 'Sua credencial administrativa mudou. Entre novamente antes de continuar.');
      return json({ok:true, mustChangePassword:parts[3] === 'password'});
    }
    throw new ApiError(404, 'Rota administrativa não encontrada.');
  };
}
