import test from 'node:test';
import assert from 'node:assert/strict';
import {once} from 'node:events';
import {readFileSync, readdirSync} from 'node:fs';
import {DatabaseSync} from 'node:sqlite';
import {createMvpServer} from '../server/mvp-server.mjs';
import {digest} from '../server/auth.mjs';
import {createApi} from '../server/api.mjs';

const upstream = 'https://api.academy.test';
const publicOrigin = 'https://academy.onrender.test';
async function setup(t, fetchImpl) {
  const server = createMvpServer({upstreamOrigin:upstream, publicOrigin, fetchImpl, timeoutMs:25});
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise(resolve => {server.closeAllConnections(); server.close(resolve);}));
  const base = `http://127.0.0.1:${server.address().port}`;
  return (path, options = {}) => fetch(base + path, {...options, redirect:'manual'});
}
const ok = () => Response.json({ok:true});
const write = (data, extra = {}) => ({method:'POST', body:JSON.stringify(data), headers:{Origin:publicOrigin, 'Content-Type':'application/json', ...extra}});

test('serve os 25 cursos e todos os recursos da página sem expor o repositório', async t => {
  const request = await setup(t, () => {throw new Error('Static files must not call API');});
  const home = await request('/');
  assert.equal(home.status, 200);
  assert.match(home.headers.get('content-security-policy'), /connect-src 'self'/);
  const html = await home.text();
  const assets = [...html.matchAll(/(?:src|href)="(\/learn\/[^"#]+)"/g)].map(x => x[1]);
  assert.equal(assets.filter(x => x.includes('/courses/')).length + 1, 25);
  for (const asset of assets) assert.equal((await request(asset)).status, 200, asset);
  for (const path of ['/package.json', '/.env', '/server/auth.mjs', '/learn/%2e%2e%2fserver/auth.mjs', '/learn/%2eopenai/hosting.json', '/api/dev/session', '/api/auth/unknown']) assert.equal((await request(path)).status, 404, path);
  assert.equal((await request('/learn/style.css', {method:'HEAD'})).status, 200);
  assert.deepEqual(await (await request('/healthz')).json(), {ok:true, service:'forge-academy-mvp'});
});

test('rejeita CSRF, métodos e corpos grandes antes de contactar a API', async t => {
  let calls = 0;
  const request = await setup(t, () => {calls++; return ok();});
  for (const Origin of ['https://evil.test', 'null', '']) {
    const response = await request('/api/auth/login', write({}, {Origin, 'X-Forwarded-Host':'academy.onrender.test'}));
    assert.equal(response.status, 403);
  }
  assert.equal((await request('/api/auth/login', write({}, {'Sec-Fetch-Site':'cross-site'}))).status, 403);
  assert.equal((await request('/api/auth/me', {headers:{Origin:'https://evil.test'}})).status, 403);
  assert.equal((await request('/api/auth/login', {method:'GET'})).status, 405);
  assert.equal((await request('/api/auth/login', write({}, {'Content-Type':'text/plain'}))).status, 415);
  assert.equal((await request('/api/auth/login', write({text:'x'.repeat(700000)}))).status, 413);
  assert.equal(calls, 0);
});

test('encaminha apenas a sessão da aplicação e preserva cookies seguros e erros da API', async t => {
  const request = await setup(t, async (url, options) => {
    assert.equal(url, upstream + '/api/auth/login');
    assert.equal(options.headers.Origin, upstream);
    assert.equal(options.headers.Cookie, '__Host-forge_session=opaque');
    assert.equal(options.headers['X-Forge-Account'], 'user-a');
    for (const name of ['Authorization', 'CF-Connecting-IP', 'X-Forwarded-For', 'OAI-Sites-Authorization']) assert.equal(options.headers[name], undefined);
    assert.equal(options.redirect, 'manual');
    return Response.json({error:'Aguarde.'}, {status:429, headers:{'Retry-After':'5', 'Set-Cookie':'__Host-forge_session=new; Path=/; HttpOnly; Secure; SameSite=Lax'}});
  });
  const response = await request('/api/auth/login', write({}, {Cookie:'other=private; __Host-forge_session=opaque', 'X-Forge-Account':'user-a', Authorization:'Bearer untrusted', 'CF-Connecting-IP':'1.2.3.4', 'X-Forwarded-For':'1.2.3.4'}));
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('retry-after'), '5');
  assert.match(response.headers.get('set-cookie'), /HttpOnly; Secure; SameSite=Lax/);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(response.headers.get('access-control-allow-origin'), null);
});

test('falha de forma fechada em redirecionamento, HTML, JSON inválido e timeout', async t => {
  const responses = [() => new Response(null, {status:302, headers:{Location:'https://login.test'}}), () => new Response('<html>login</html>'), () => new Response('bad', {headers:{'Content-Type':'application/json'}}), async (url, {signal}) => {await new Promise((resolve, reject) => signal.addEventListener('abort', () => reject(signal.reason)));}];
  for (const fetchImpl of responses) {
    const request = await setup(t, fetchImpl);
    const response = await request('/api/auth/me');
    assert.equal(response.status, 502);
    assert.equal(response.headers.get('location'), null);
    assert.match((await response.json()).error, /conectar/);
  }
});

test('cadastro, login, duas contas, salvamento, conflito, senha e logout através do gateway real', async t => {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  db.exec('PRAGMA foreign_keys=ON;');
  const folder = new URL('../drizzle/', import.meta.url);
  for (const file of readdirSync(folder).filter(x => x.endsWith('.sql')).sort()) db.exec(readFileSync(new URL(file, folder), 'utf8'));
  db.prepare("INSERT INTO users(id,login,display_name,password,recovery_hash,class_id,created_at,updated_at) VALUES('fixture-admin','fixture-admin','Fixture','disabled','disabled','artifice',0,0)").run();
  db.prepare("INSERT INTO registration_invites(id,code_hash,label,max_uses,expires_at,created_by,created_at) VALUES('fixture',?,'Fixture',1000,?,'fixture-admin',0)").run(digest('11111111-11111111-11111111-11111111-11111111'),Date.now()+86400000);
  const prepare = sql => ({bind(...params) {
    const statement = db.prepare(sql);
    const execute = () => {
      const hasRows = statement.columns().length > 0;
      const results = hasRows ? statement.all(...params) : [];
      return {results, meta:{changes:Number(hasRows ? db.prepare('SELECT changes() AS n').get().n : statement.run(...params).changes)}};
    };
    return {first:async () => statement.get(...params) || null, all:async () => execute(), run:async () => execute(), execute};
  }});
  const api = createApi({db:{prepare, batch:async statements => {
    db.exec('BEGIN');
    try {const results = statements.map(x => x.execute()); db.exec('COMMIT'); return results;}
    catch (error) {db.exec('ROLLBACK'); throw error;}
  }}, courses:JSON.parse(readFileSync(new URL('../server/course-index.json', import.meta.url))), assessments:JSON.parse(readFileSync(new URL('../server/assessments.json', import.meta.url)))});
  const request = await setup(t, (url, options) => api(new Request(url, options)));
  assert.equal((await request('/api/auth/me')).status, 200);
  assert.equal((await request('/api/auth/register', write({login:'short', displayName:'Aluno', password:'1234567'}))).status, 400);
  const password = 'Uma senha de teste 8';
  const register = async login => {
    const response = await request('/api/auth/register', write({login, displayName:login, password, inviteCode:'11111111-11111111-11111111-11111111-11111111'}));
    assert.equal(response.status, 201);
    return {cookie:response.headers.get('set-cookie').split(';')[0], data:await response.json()};
  };
  const a = await register('aluno_gateway_a');
  const b = await register('aluno_gateway_b');
  assert.equal((await request('/api/progress/go')).status, 401);
  const state = {schema:1, courseId:'go', read:{1:true}};
  const save = (revision, note) => ({method:'PUT', headers:{Origin:publicOrigin, 'Content-Type':'application/json', Cookie:a.cookie, 'X-Forge-Account':a.data.user.id}, body:JSON.stringify({revision, state, documents:[{kind:'notes', id:'1', content:note}]})});
  assert.equal((await request('/api/progress/go', save(0, 'Meu rascunho privado'))).status, 200);
  assert.equal((await request('/api/progress/go', save(0, 'Edição atrasada'))).status, 409);
  const own = await (await request('/api/progress/go', {headers:{Cookie:a.cookie}})).json();
  assert.equal(own.state.notes[1], 'Meu rascunho privado');
  const other = await (await request('/api/progress/go?userId=' + a.data.user.id, {headers:{Cookie:b.cookie}})).json();
  assert.deepEqual(other.state.notes, {});
  assert.equal((await request('/api/progress/go', {headers:{Cookie:b.cookie, 'X-Forge-Account':a.data.user.id}})).status, 401);
  assert.equal((await request('/api/assessments/go/final', write({answers:[]}, {Cookie:a.cookie}))).status, 403);
  const login = await request('/api/auth/login', write({login:a.data.user.login, password}));
  assert.equal(login.status, 200);
  const cookie = login.headers.get('set-cookie').split(';')[0];
  assert.equal((await request('/api/auth/password', write({currentPassword:password, newPassword:'Outra senha longa 9'}, {Cookie:cookie}))).status, 200);
  assert.equal((await (await request('/api/auth/me', {headers:{Cookie:cookie}})).json()).user, null);
  const logout = await request('/api/auth/logout', write({}, {Cookie:b.cookie}));
  assert.equal(logout.status, 200);
  assert.match(logout.headers.get('set-cookie'), /Max-Age=0/);
});

test('configuração não aceita loop, credenciais ou origens com caminho', () => {
  for (const config of [{upstreamOrigin:publicOrigin, publicOrigin}, {upstreamOrigin:upstream + '/api', publicOrigin}, {upstreamOrigin:'https://secret:pass@api.test', publicOrigin}]) assert.throws(() => createMvpServer(config));
});

test('rotas administrativas no gateway preservam autorização e convites obrigatórios', async t => {
  const {fixture} = await import('./helpers/api-fixture.mjs');
  const f = await fixture(t);
  const student = await f.register();
  const request = await setup(t, (url, options) => f.handler(new Request(url, options)));
  assert.equal((await request('/api/admin/users')).status, 401);
  assert.equal((await request('/api/admin/users', {headers:{Cookie:student.cookie}})).status, 403);
  assert.equal((await request('/api/admin/users', {headers:{Cookie:f.ownerCookie}})).status, 200);
  const invite = await request('/api/admin/invites', write({label:'Gateway', maxUses:1, days:7}, {Cookie:f.ownerCookie}));
  assert.equal(invite.status, 201);
  const {code, invite:record} = await invite.json();
  assert.equal((await request('/api/admin/invites/' + record.id + '/revoke', write({}, {Cookie:f.ownerCookie}))).status, 200);
  assert.equal((await f.register('revoked_gateway', code)).status, 400);
  assert.equal((await request('/api/admin/users/' + student.data.user.id + '/password', write({newPassword:'Invalid role 8!'}, {Cookie:student.cookie}))).status, 403);
});
