import {digest} from './auth.mjs';
// Operação do proprietário da hospedagem, ativada exclusivamente por um segredo
// de runtime de curta duração. Não há rota de reset nem credencial no cliente.
// O registro transacional impede reaplicação, inclusive depois da troca pessoal.
export async function applyOwnerPasswordReset({db, ownerId, configuration, now=Date.now()}) {
  if (!configuration) return 'disabled';
  let config, password;
  try {config=JSON.parse(configuration); password=JSON.parse(config.passwordHash);} catch {return 'invalid';}
  if (!ownerId || config.userId !== ownerId || !/^[a-f0-9-]{36}$/.test(config.requestId || '') || !/^[a-z0-9][a-z0-9_.-]{2,31}$/.test(config.login || '')) return 'invalid';
  if (!Number.isSafeInteger(config.issuedAt) || !Number.isSafeInteger(config.expiresAt) || config.expiresAt-config.issuedAt<=0 || config.expiresAt-config.issuedAt>900000 || config.issuedAt>now+60000) return 'invalid';
  if (now>=config.expiresAt) return 'expired';
  if (password?.v!==1 || password.algorithm!=='scrypt' || password.N!==32768 || password.r!==8 || password.p!==3 || !/^[A-Za-z0-9_-]{22}$/.test(password.salt || '') || !/^[A-Za-z0-9_-]{86}$/.test(password.hash || '') || !/^[a-f0-9]{64}$/.test(config.recoveryHash || '')) return 'invalid';
  const event='owner-password-reset:'+config.requestId;
  const guard="id=? AND login=? AND status='active' AND NOT EXISTS(SELECT 1 FROM admin_audit WHERE id=?)";
  const changed=await db.batch([
    db.prepare('UPDATE users SET password=?,recovery_hash=?,must_change_password=1,updated_at=? WHERE '+guard).bind(config.passwordHash,config.recoveryHash,now,ownerId,config.login,event),
    db.prepare('DELETE FROM sessions WHERE user_id=? AND EXISTS(SELECT 1 FROM users WHERE '+guard+' AND password=?)').bind(ownerId,ownerId,config.login,event,config.passwordHash),
    db.prepare('DELETE FROM rate_limits WHERE key IN (?,?,?) AND EXISTS(SELECT 1 FROM users WHERE '+guard+' AND password=?)').bind(digest('auth-account:'+config.login),digest('recover:'+config.login),digest('password:'+ownerId),ownerId,config.login,event,config.passwordHash),
    db.prepare('INSERT INTO admin_audit(id,actor_id,action,target_id,detail,created_at) SELECT ?,?,?,?,?,? FROM users WHERE '+guard+' AND password=?').bind(event,ownerId,'user.password_reset',ownerId,'{}',now,ownerId,config.login,event,config.passwordHash),
  ]);
  if(changed[0]?.meta?.changes) return 'applied';
  return (await db.prepare('SELECT id FROM admin_audit WHERE id=?').bind(event).first()) ? 'already_applied' : 'target_unavailable';
}
