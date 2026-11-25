import test from 'node:test';
import assert from 'node:assert/strict';
import {fixture,ownerPassword,defaultInvite} from './helpers/api-fixture.mjs';

test('admin depende do ID configurado; aluno, anônimo e perfil adulterado não ganham acesso',async t=>{
 const f=await fixture(t),student=await f.register();assert.equal(student.status,201);
 assert.equal((await f.request('auth/me')).data.user.isAdmin,true);
 for(const path of ['admin/users','admin/invites','admin/audit']){
  assert.equal((await f.request(path,{cookie:null})).status,401);
  assert.equal((await f.request(path,{cookie:student.cookie})).status,403);
 }
 assert.equal((await f.request('profile',{method:'PUT',cookie:student.cookie,data:{displayName:'Admin',classId:'artifice',isAdmin:true}})).data.user.isAdmin,false);
 assert.equal((await f.request('admin/invites',{method:'POST',data:{label:'x'},cookie:student.cookie})).status,403);
 assert.equal((await f.request('admin/invites',{method:'POST',data:{label:'x'},origin:'https://evil.test'})).status,403);
 const other=await fixture(t,{configured:false});assert.equal((await other.request('admin/users')).status,403);
 const list=await f.request('admin/users?q=student');assert.equal(list.data.total,1);
 assert.deepEqual(Object.keys(list.data.users[0]).sort(),['classId','createdAt','displayName','id','isAdmin','login','mustChangePassword','status','updatedAt'].sort());
 assert.equal((await f.request('admin/users?page=-1')).status,400);
});

test('cadastro exige convite e aplica uso único, validade, revogação e rollback de duplicidade',async t=>{
 const f=await fixture(t);
 assert.equal((await f.register('without','')).status,400);
 const created=await f.invite();assert.equal(created.status,201);
 const stored=f.sql.prepare('SELECT * FROM registration_invites WHERE id=?').get(created.data.invite.id);
 assert.notEqual(stored.code_hash,created.data.code);
 assert.equal((await f.register('first',created.data.code)).status,201);
 assert.equal((await f.register('second',created.data.code)).status,400);
 const second=await f.invite();
 assert.equal((await f.register('first',second.data.code)).status,409);
 assert.equal(f.sql.prepare('SELECT uses FROM registration_invites WHERE id=?').get(second.data.invite.id).uses,0);
 assert.equal((await f.register('third',second.data.code)).status,201);
 const revoked=await f.invite();await f.request('admin/invites/'+revoked.data.invite.id+'/revoke',{method:'POST',data:{}});
 assert.equal((await f.register('revoked',revoked.data.code)).status,400);
 const expired=await f.invite({days:1});f.advance(86400001);
 assert.equal((await f.register('expired',expired.data.code)).status,400);
 const text=JSON.stringify((await f.request('admin/invites')).data);
 assert.equal(text.includes(created.data.code),false);assert.equal(text.includes(stored.code_hash),false);
});

test('consumo ou revogação concorrente entre conferência e gravação não cria conta extra',async t=>{
 const f=await fixture(t),created=await f.invite();
 f.beforeBatch=statements=>{if(statements.some(x=>x.query.startsWith('UPDATE registration_invites SET uses='))){f.sql.prepare('UPDATE registration_invites SET uses=max_uses WHERE id=?').run(created.data.invite.id);f.beforeBatch=null;}};
 assert.equal((await f.register('race_loser',created.data.code)).status,400);
 assert.equal(f.sql.prepare("SELECT count(*) AS n FROM users WHERE login='race_loser'").get().n,0);
 const revoked=await f.invite();
 f.beforeBatch=statements=>{if(statements.some(x=>x.query.startsWith('UPDATE registration_invites SET uses='))){f.sql.prepare('UPDATE registration_invites SET revoked=1 WHERE id=?').run(revoked.data.invite.id);f.beforeBatch=null;}};
 assert.equal((await f.register('race_revoked',revoked.data.code)).status,400);
});

test('reset exige senha do admin, revoga sessões/recuperação antiga e obriga senha pessoal',async t=>{
 const f=await fixture(t),student=await f.register(),id=student.data.user.id;
 const path='admin/users/'+id+'/password';
 assert.equal((await f.request(path,{method:'POST',data:{adminPassword:'wrong',newPassword:'Temporaria 9!'}})).data.code,'ADMIN_PASSWORD');
 assert.equal((await f.request(path,{method:'POST',data:{adminPassword:ownerPassword,newPassword:'1234567'}})).status,400);
 await f.request('progress/go',{method:'PUT',cookie:student.cookie,data:{revision:0,state:{schema:1,courseId:'go'},documents:[{kind:'notes',id:'1',content:'Preservar rascunho'}]}});
 const reset=await f.request(path,{method:'POST',data:{adminPassword:ownerPassword,newPassword:'Temporaria 9!'}});assert.equal(reset.status,200);
 assert.equal((await f.request('auth/me',{cookie:student.cookie})).data.user,null);
 assert.equal((await f.request('auth/recover',{method:'POST',cookie:null,data:{login:'student',recoveryCode:student.data.recoveryCode,newPassword:'Tentativa antiga 9'}})).status,401);
 const login=await f.request('auth/login',{method:'POST',cookie:null,data:{login:'student',password:'Temporaria 9!'}});assert.equal(login.status,200);assert.equal(login.data.user.mustChangePassword,true);
 assert.deepEqual((await f.request('auth/me',{cookie:login.cookie})).data.progress,{});
 assert.equal((await f.request('progress/go',{cookie:login.cookie})).data.code,'PASSWORD_CHANGE_REQUIRED');
 assert.equal((await f.request('profile',{method:'PUT',cookie:login.cookie,data:{displayName:'x',classId:'artifice'}})).status,403);
 assert.equal((await f.request('auth/password',{method:'POST',cookie:login.cookie,data:{currentPassword:'Temporaria 9!',newPassword:'Temporaria 9!'}})).status,400);
 const changed=await f.request('auth/password',{method:'POST',cookie:login.cookie,data:{currentPassword:'Temporaria 9!',newPassword:'Pessoal definitiva 8!'}});assert.equal(changed.status,200);assert.ok(changed.data.recoveryCode);
 assert.equal((await f.request('auth/me',{cookie:changed.cookie})).data.user.mustChangePassword,false);
 assert.equal((await f.request('progress/go',{cookie:changed.cookie})).data.state.notes[1],'Preservar rascunho');
 const audit=JSON.stringify((await f.request('admin/audit')).data);assert.match(audit,/user.password_reset/);assert.equal(audit.includes('Temporaria'),false);assert.equal(audit.includes(ownerPassword),false);
});

test('bloqueio encerra sessão e impede login/recuperação; desbloqueio preserva senha; admin protegido',async t=>{
 const f=await fixture(t),student=await f.register(),id=student.data.user.id;
 assert.equal((await f.request('admin/users/'+f.ownerId,{method:'PUT',data:{status:'blocked',adminPassword:ownerPassword}})).status,400);
 assert.equal((await f.request('admin/users/'+f.ownerId+'/password',{method:'POST',data:{newPassword:'Changed 9!',adminPassword:ownerPassword}})).status,400);
 assert.equal((await f.request('admin/users/'+id,{method:'PUT',data:{status:'blocked',adminPassword:ownerPassword}})).status,200);
 assert.equal((await f.request('progress/go',{cookie:student.cookie})).status,401);
 assert.equal((await f.request('auth/login',{method:'POST',cookie:null,data:{login:'student',password:'Senha aluno 9!'}})).status,401);
 assert.equal((await f.request('auth/recover',{method:'POST',cookie:null,data:{login:'student',recoveryCode:student.data.recoveryCode,newPassword:'Another pass 9!'}})).status,401);
 await f.request('admin/users/'+id,{method:'PUT',data:{status:'active',adminPassword:ownerPassword}});
 assert.equal((await f.request('auth/login',{method:'POST',cookie:null,data:{login:'student',password:'Senha aluno 9!'}})).status,200);
 assert.equal((await f.request('admin/invites',{method:'POST',data:{label:'Bad',maxUses:0,days:7}})).status,400);
 assert.equal((await f.request('admin/invites',{method:'POST',data:{label:'Bad',maxUses:1,days:31}})).status,400);
});
