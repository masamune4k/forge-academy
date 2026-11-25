import {DatabaseSync} from 'node:sqlite';
import {readFileSync,readdirSync} from 'node:fs';
import {createApi} from '../../server/api.mjs';
import {digest,hashPassword} from '../../server/auth.mjs';

export const ownerId='00000000-0000-4000-8000-000000000001';
export const ownerPassword='Senha do admin 8!';
export const defaultInvite='aaaaaaaa-aaaaaaaa-aaaaaaaa-aaaaaaaa-aaaaaaaa';
export async function fixture(t,{configured=true}={}){
 const sql=new DatabaseSync(':memory:');t.after(()=>sql.close());sql.exec('PRAGMA foreign_keys=ON;');
 const folder=new URL('../../drizzle/',import.meta.url);
 for(const file of readdirSync(folder).filter(x=>x.endsWith('.sql')).sort())sql.exec(readFileSync(new URL(file,folder),'utf8'));
 let time=Date.now();
 sql.prepare('INSERT INTO users(id,login,display_name,password,recovery_hash,class_id,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?)').run(ownerId,'fixture_owner','Administrador',await hashPassword(ownerPassword),'disabled','artifice',time,time);
 const value='o'.repeat(43),ownerCookie='__Host-forge_session='+value;
 sql.prepare('INSERT INTO sessions(token_hash,user_id,expires_at,created_at) VALUES(?,?,?,?)').run(digest(value),ownerId,time+86400000,time);
 sql.prepare('INSERT INTO registration_invites(id,code_hash,label,max_uses,expires_at,created_by,created_at) VALUES(?,?,?,?,?,?,?)').run('fixture-invite',digest(defaultInvite),'Fixture',100,time+86400000,ownerId,time);
 const f={sql,ownerCookie,ownerId,beforeBatch:null,advance(ms){time+=ms;}};
 const prepare=query=>({bind(...params){
  const stmt=sql.prepare(query),execute=()=>{const rows=stmt.columns().length>0;const results=rows?stmt.all(...params):[];return{results,meta:{changes:Number(rows?sql.prepare('SELECT changes() AS n').get().n:stmt.run(...params).changes)}};};
  return{query,first:async()=>stmt.get(...params)||null,all:async()=>execute(),run:async()=>execute(),execute};
 }});
 const api=createApi({db:{prepare,batch:async statements=>{if(f.beforeBatch)f.beforeBatch(statements);sql.exec('BEGIN');try{const r=statements.map(x=>x.execute());sql.exec('COMMIT');return r;}catch(error){sql.exec('ROLLBACK');throw error;}}},courses:JSON.parse(readFileSync(new URL('../../server/course-index.json',import.meta.url))),assessments:JSON.parse(readFileSync(new URL('../../server/assessments.json',import.meta.url))),ownerId:configured?ownerId:null,now:()=>time});
 f.request=async(path,{method='GET',data,cookie=ownerCookie,origin='https://academy.test'}={})=>{
  const r=await api(new Request('https://academy.test/api/'+path,{method,headers:{...(cookie?{Cookie:cookie}:{}),...(method==='GET'?{}:{Origin:origin,'Content-Type':'application/json'})},...(data===undefined?{}:{body:JSON.stringify(data)})}));
  return{status:r.status,data:await r.json(),cookie:r.headers.get('set-cookie')?.split(';')[0]};
 };
 f.register=async(login='student',inviteCode=defaultInvite)=>f.request('auth/register',{method:'POST',cookie:null,data:{login,displayName:login,password:'Senha aluno 9!',inviteCode}});
 f.invite=async(data={})=>f.request('admin/invites',{method:'POST',data:{label:'Turma',maxUses:1,days:7,...data}});
 f.handler=api;
 return f;
}
