import test from 'node:test';
import assert from 'node:assert/strict';
import {fixture,ownerPassword} from './helpers/api-fixture.mjs';
import {applyOwnerPasswordReset} from '../server/owner-maintenance.mjs';
import {hashPassword,digest} from '../server/auth.mjs';

async function setup(t){
 const f=await fixture(t),now=Date.now(),passwordHash=await hashPassword('Temporaria de teste 8!');
 const config={requestId:crypto.randomUUID(),userId:f.ownerId,login:'fixture_owner',issuedAt:now,expiresAt:now+900000,passwordHash,recoveryHash:digest(crypto.randomUUID())};
 const apply=(overrides={},options={})=>applyOwnerPasswordReset({db:f.db,ownerId:f.ownerId,configuration:JSON.stringify({...config,...overrides}),now,...options});
 return{...f,config,apply,now};
}

test('recuperação do proprietário encerra sessões, libera limite da conta e exige senha pessoal',async t=>{
 const f=await setup(t);
 f.sql.prepare('INSERT INTO rate_limits(key,window,count) VALUES(?,0,99)').run(digest('auth-account:fixture_owner'));
 assert.equal(await f.apply(),'applied');
 assert.equal((await f.request('auth/me')).data.user,null);
 assert.equal(f.sql.prepare('SELECT count(*) AS n FROM rate_limits WHERE key=?').get(digest('auth-account:fixture_owner')).n,0);
 const login=await f.request('auth/login',{method:'POST',cookie:null,data:{login:'fixture_owner',password:'Temporaria de teste 8!'}});
 assert.equal(login.status,200);assert.equal(login.data.user.isAdmin,true);assert.equal(login.data.user.mustChangePassword,true);
 assert.equal((await f.request('admin/users',{cookie:login.cookie})).data.code,'PASSWORD_CHANGE_REQUIRED');
 const changed=await f.request('auth/password',{method:'POST',cookie:login.cookie,data:{currentPassword:'Temporaria de teste 8!',newPassword:'Nova senha pessoal 9!'}});
 assert.equal(changed.status,200);assert.ok(changed.data.recoveryCode);
 assert.equal((await f.request('admin/users',{cookie:changed.cookie})).status,200);
 const hash=f.sql.prepare('SELECT password FROM users WHERE id=?').get(f.ownerId).password;
 assert.equal(await f.apply(),'already_applied');
 assert.equal(f.sql.prepare('SELECT password FROM users WHERE id=?').get(f.ownerId).password,hash);
 assert.equal((await f.request('admin/users',{cookie:changed.cookie})).status,200);
 assert.equal(f.sql.prepare("SELECT count(*) AS n FROM admin_audit WHERE id LIKE 'owner-password-reset:%'").get().n,1);
});

test('configuração ausente, expirada ou adulterada não altera contas ou privilégios',async t=>{
 const f=await setup(t),original=f.sql.prepare('SELECT password FROM users WHERE id=?').get(f.ownerId).password;
 assert.equal(await f.apply({}, {configuration:undefined}),'disabled');
 assert.equal(await f.apply({}, {now:f.config.expiresAt}),'expired');
 for(const changes of [{userId:'another-user'},{passwordHash:'plaintext'},{expiresAt:f.now+900001},{requestId:'bad'},{recoveryHash:'not-a-hash'}])assert.equal(await f.apply(changes),'invalid');
 assert.equal(await f.apply({login:'someone_else'}),'target_unavailable');
 assert.equal(f.sql.prepare('SELECT password FROM users WHERE id=?').get(f.ownerId).password,original);
 assert.equal((await f.request('auth/me')).data.user.isAdmin,true);
 assert.equal((await f.request('auth/login',{method:'POST',cookie:null,data:{login:'fixture_owner',password:ownerPassword}})).status,200);
});

test('erro no lote de manutenção desfaz senha, encerramento de sessões e auditoria',async t=>{
 const f=await setup(t),original=f.sql.prepare('SELECT password FROM users WHERE id=?').get(f.ownerId).password;
 f.sql.exec("CREATE TRIGGER reject_owner_audit BEFORE INSERT ON admin_audit BEGIN SELECT RAISE(ABORT,'Audit unavailable'); END;");
 await assert.rejects(()=>f.apply());
 assert.equal(f.sql.prepare('SELECT password FROM users WHERE id=?').get(f.ownerId).password,original);
 assert.equal((await f.request('auth/me')).data.user.isAdmin,true);
});
