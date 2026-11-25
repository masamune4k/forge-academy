import test from 'node:test';
import assert from 'node:assert/strict';
import {fixture,ownerPassword} from './helpers/api-fixture.mjs';
import {digest} from '../server/auth.mjs';

const children=['sessions','course_progress','course_documents','assessment_results','assessment_attempts','project_submissions'];
function seed(f,id){
 f.sql.prepare("INSERT INTO course_progress(user_id,course_id,state,revision,write_token,updated_at) VALUES(?,'go','{}',1,'test',0)").run(id);
 for(const kind of ['notes','drafts','answers','projectNotes','tools'])f.sql.prepare("INSERT INTO course_documents(user_id,course_id,kind,document_id,content,updated_at) VALUES(?,'go',?,'1','Private',0)").run(id,kind);
 f.sql.prepare("INSERT INTO assessment_results(user_id,course_id,assessment_id,result,updated_at) VALUES(?,'go','combo-1','{}',0)").run(id);
 f.sql.prepare("INSERT INTO assessment_attempts(id,user_id,course_id,assessment_id,result,created_at) VALUES(?,?,'go','combo-1','{}',0)").run(crypto.randomUUID(),id);
 f.sql.prepare("INSERT INTO project_submissions(user_id,course_id,submission,updated_at) VALUES(?,'go','{}',0)").run(id);
}
const confirmation=login=>({adminPassword:ownerPassword,confirmLogin:login,confirmDelete:true});

test('exclusão remove conta, sessões e todos os dados privados; preserva outro aluno e auditoria',async t=>{
 const f=await fixture(t),a=await f.register('student_a'),b=await f.register('student_b');
 const id=a.data.user.id,other=b.data.user.id;seed(f,id);seed(f,other);
 const snapshot=children.map(table=>f.sql.prepare('SELECT count(*) AS n FROM '+table+' WHERE user_id=?').get(other).n);
 const key=digest('auth-account:student_a');f.sql.prepare('INSERT INTO rate_limits(key,window,count) VALUES(?,0,5) ON CONFLICT(key) DO UPDATE SET window=0,count=5').run(key);
 const response=await f.request('admin/users/'+id+'/delete',{method:'POST',data:confirmation('student_a')});
 assert.equal(response.status,200);assert.equal(response.data.deletedUserId,id);
 assert.equal(f.sql.prepare('SELECT id FROM users WHERE id=?').get(id),undefined);
 for(let n=0;n<children.length;n++){
  assert.equal(f.sql.prepare('SELECT count(*) AS n FROM '+children[n]+' WHERE user_id=?').get(id).n,0,children[n]);
  assert.equal(f.sql.prepare('SELECT count(*) AS n FROM '+children[n]+' WHERE user_id=?').get(other).n,snapshot[n],children[n]);
 }
 assert.equal(f.sql.prepare('SELECT key FROM rate_limits WHERE key=?').get(key),undefined);
 assert.equal((await f.request('auth/me',{cookie:a.cookie})).data.user,null);
 assert.equal((await f.request('progress/go',{cookie:b.cookie})).status,200);
 assert.equal((await f.request('auth/login',{method:'POST',cookie:null,data:{login:'student_a',password:'Senha aluno 9!'}})).status,401);
 assert.equal((await f.request('auth/recover',{method:'POST',cookie:null,data:{login:'student_a',recoveryCode:a.data.recoveryCode,newPassword:'Another pass 9!'}})).status,401);
 const audit=f.sql.prepare("SELECT * FROM admin_audit WHERE action='user.deleted'").get();
 assert.equal(audit.actor_id,f.ownerId);assert.equal(audit.target_id,id);assert.equal(audit.detail,'{}');
 assert.equal((await f.request('admin/users/'+id+'/delete',{method:'POST',data:confirmation('student_a')})).status,404);
});

test('confirmação exata, senha correta, origem e privilégio são obrigatórios; administrador protegido',async t=>{
 const f=await fixture(t),a=await f.register(),path='admin/users/'+a.data.user.id+'/delete';
 for(const data of [{...confirmation('student'),confirmDelete:false},{...confirmation('student'),confirmDelete:undefined},confirmation('someone_else')])assert.equal((await f.request(path,{method:'POST',data})).status,400);
 assert.equal((await f.request(path,{method:'POST',data:{...confirmation('student'),adminPassword:'Wrong password 9!'}})).data.code,'ADMIN_PASSWORD');
 assert.equal((await f.request(path,{method:'POST',data:confirmation('student'),cookie:null})).status,401);
 assert.equal((await f.request(path,{method:'POST',data:confirmation('student'),cookie:a.cookie})).status,403);
 assert.equal((await f.request(path,{method:'POST',data:confirmation('student'),origin:'https://evil.test'})).status,403);
 assert.equal((await f.request('admin/users/'+f.ownerId+'/delete',{method:'POST',data:confirmation('fixture_owner')})).status,400);
 assert.ok(f.sql.prepare('SELECT id FROM users WHERE id=?').get(a.data.user.id));
 assert.ok(f.sql.prepare('SELECT id FROM users WHERE id=?').get(f.ownerId));
 assert.equal(f.sql.prepare("SELECT count(*) AS n FROM admin_audit WHERE action='user.deleted'").get().n,0);
});

test('falha transacional ou alteração concorrente da senha administrativa não apaga dados',async t=>{
 const f=await fixture(t),a=await f.register();seed(f,a.data.user.id);
 const path='admin/users/'+a.data.user.id+'/delete';
 f.sql.exec("CREATE TRIGGER refuse_delete BEFORE DELETE ON users BEGIN SELECT RAISE(ABORT,'Temporary failure'); END;");
 assert.equal((await f.request(path,{method:'POST',data:confirmation('student')})).status,500);
 assert.ok(f.sql.prepare('SELECT id FROM users WHERE id=?').get(a.data.user.id));
 assert.ok(f.sql.prepare('SELECT content FROM course_documents WHERE user_id=?').get(a.data.user.id));
 assert.equal(f.sql.prepare("SELECT count(*) AS n FROM admin_audit WHERE action='user.deleted'").get().n,0);
 f.sql.exec('DROP TRIGGER refuse_delete;');
 f.beforeBatch=statements=>{if(statements.some(x=>x.query.startsWith('DELETE FROM users WHERE'))){f.sql.prepare("UPDATE users SET password='changed' WHERE id=?").run(f.ownerId);f.beforeBatch=null;}};
 assert.equal((await f.request(path,{method:'POST',data:confirmation('student')})).status,409);
 assert.ok(f.sql.prepare('SELECT id FROM users WHERE id=?').get(a.data.user.id));
 assert.equal(f.sql.prepare("SELECT count(*) AS n FROM admin_audit WHERE action='user.deleted'").get().n,0);
});

test('conta com autoria de registros administrativos não é apagada em cascata',async t=>{
 const f=await fixture(t),a=await f.register();
 f.sql.prepare("INSERT INTO admin_audit(id,actor_id,action,target_id,detail,created_at) VALUES(?,?,'legacy.action',?,'{}',0)").run(crypto.randomUUID(),a.data.user.id,a.data.user.id);
 assert.equal((await f.request('admin/users/'+a.data.user.id+'/delete',{method:'POST',data:confirmation('student')})).status,409);
 assert.ok(f.sql.prepare('SELECT id FROM users WHERE id=?').get(a.data.user.id));
});
