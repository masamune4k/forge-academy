import http from 'node:http';
import {readFile, realpath} from 'node:fs/promises';
import {resolve, extname, sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../public/learn/', import.meta.url));
const types = {'.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.md':'text/markdown; charset=utf-8', '.svg':'image/svg+xml'};
const csp = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'";
const maxBody = 700000;

function origin(value, label) {
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error(`${label} deve ser uma origem HTTP(S), sem caminho ou credenciais.`);
  return url.origin;
}
function apiMethods(path) {
  if (['/api/health', '/api/auth/me'].includes(path)) return ['GET'];
  if (/^\/api\/auth\/(register|login|logout|recover|password)$/.test(path)) return ['POST'];
  if (path === '/api/profile') return ['PUT'];
  if (/^\/api\/progress\/[a-z][a-z0-9-]*$/.test(path)) return ['GET', 'PUT'];
  if (/^\/api\/assessments\/[a-z][a-z0-9-]*$/.test(path)) return ['GET'];
  if (/^\/api\/assessments\/[a-z][a-z0-9-]*\/[a-z0-9-]+$/.test(path)) return ['POST'];
  return null;
}
function json(res, status, data) {
  res.writeHead(status, {'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store'});
  res.end(JSON.stringify(data));
}
async function body(req) {
  if (!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type'] || '')) throw {status:415, message:'Envie os dados no formato JSON.'};
  if (Number(req.headers['content-length']) > maxBody) throw {status:413, message:'A alteração ultrapassa 700 KB.'};
  let length = 0;
  const chunks = [];
  for await (const chunk of req) {
    length += chunk.length;
    if (length > maxBody) throw {status:413, message:'A alteração ultrapassa 700 KB.'};
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

// A API e o D1 existentes continuam responsáveis por autenticação e autorização.
// Este processo serve a interface e mantém as chamadas privadas na mesma origem.
export function createMvpServer({
  upstreamOrigin = process.env.UPSTREAM_ORIGIN,
  publicOrigin = process.env.PUBLIC_ORIGIN || process.env.RENDER_EXTERNAL_URL,
  fetchImpl = globalThis.fetch,
  timeoutMs = 15000,
} = {}) {
  const upstream = origin(upstreamOrigin, 'UPSTREAM_ORIGIN');
  const publicUrl = origin(publicOrigin, 'PUBLIC_ORIGIN/RENDER_EXTERNAL_URL');
  if (upstream === publicUrl) throw new Error('A API de origem não pode apontar para este serviço.');
  const server = http.createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'same-origin');
    res.setHeader('Content-Security-Policy', csp);
    try {
      const raw = req.url || '/';
      if (raw.length > 8192) return json(res, 414, {error:'Endereço muito longo.'});
      if (!raw.startsWith('/') || raw.startsWith('//') || /[\\\u0000-\u001f]/.test(raw)) return json(res, 400, {error:'Endereço inválido.'});
      const rawPath = decodeURIComponent(raw.split('?')[0]);
      if (rawPath.split('/').some(part => part.startsWith('.')) || rawPath.includes('\\')) return json(res, 404, {error:'Arquivo não encontrado.'});
      const url = new URL(raw, publicUrl);
      if (url.pathname === '/healthz' && req.method === 'GET') return json(res, 200, {ok:true, service:'forge-academy-mvp'});
      if (url.pathname.startsWith('/api/')) {
        const methods = apiMethods(url.pathname);
        if (!methods) return json(res, 404, {error:'Rota não encontrada.'});
        if (!methods.includes(req.method)) {res.setHeader('Allow', methods.join(', ')); return json(res, 405, {error:'Método não permitido.'});}
        const mutation = req.method !== 'GET';
        // Nunca confiar em Host, X-Forwarded-Host ou Origin enviados pelo cliente
        // para definir quais sites podem alterar dados nesta instalação.
        if ((mutation && req.headers.origin !== publicUrl) || (req.headers.origin && req.headers.origin !== publicUrl) || req.headers['sec-fetch-site'] === 'cross-site') return json(res, 403, {error:'Origem da solicitação inválida.'});
        const headers = {'Accept':'application/json'};
        // Só o cookie da aplicação cruza a fronteira; nenhum cabeçalho de
        // identidade, autorização de hospedagem ou IP do cliente é repassado.
        const cookie = (req.headers.cookie || '').split(';').map(x => x.trim()).filter(x => x.startsWith('__Host-forge_session=')).join('; ');
        if (cookie) headers.Cookie = cookie;
        if (req.headers['x-forge-account']) headers['X-Forge-Account'] = req.headers['x-forge-account'];
        let payload;
        if (mutation) {payload = await body(req); headers['Content-Type'] = 'application/json'; headers.Origin = upstream;}
        const response = await fetchImpl(upstream + url.pathname + url.search, {
          method:req.method, headers, body:payload, redirect:'manual', signal:AbortSignal.timeout(timeoutMs),
        });
        if (response.status >= 300 && response.status < 400 || !/^application\/json(?:\s*;|$)/i.test(response.headers.get('content-type') || '')) throw new Error('Unexpected upstream response');
        const data = await response.text();
        JSON.parse(data); // Não encaminhar páginas de erro HTML ou JSON inválido.
        const cookies = response.headers.getSetCookie().filter(x => x.startsWith('__Host-forge_session='));
        if (cookies.length) res.setHeader('Set-Cookie', cookies);
        const retry = response.headers.get('retry-after');
        if (retry) res.setHeader('Retry-After', retry);
        res.writeHead(response.status, {'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store'});
        return res.end(data);
      }
      if (!['GET', 'HEAD'].includes(req.method)) return json(res, 405, {error:'Método não permitido.'});
      const relative = url.pathname === '/' ? 'index.html' : url.pathname.startsWith('/learn/') ? decodeURIComponent(url.pathname.slice(7)) : '';
      if (!relative || !types[extname(relative)]) return json(res, 404, {error:'Arquivo não encontrado.'});
      const file = await realpath(resolve(root, relative));
      if (!file.startsWith(root + (root.endsWith(sep) ? '' : sep))) return json(res, 404, {error:'Arquivo não encontrado.'});
      const data = await readFile(file);
      res.writeHead(200, {'Content-Type':types[extname(file)], 'Cache-Control':extname(file) === '.html' ? 'no-store' : 'public, max-age=0, must-revalidate', 'Content-Length':data.length});
      res.end(req.method === 'HEAD' ? undefined : data);
    } catch (error) {
      if (res.headersSent) {res.destroy(); return;}
      const status = error.status || (['ENOENT', 'ENOTDIR'].includes(error.code) ? 404 : error instanceof URIError ? 400 : 502);
      json(res, status, {error:error.status ? error.message : status === 404 ? 'Arquivo não encontrado.' : 'Não foi possível conectar à plataforma agora. Tente novamente em instantes.'});
    }
  });
  server.requestTimeout = 30000;
  server.headersTimeout = 10000;
  return server;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const server = createMvpServer();
  const port = Number(process.env.PORT || 10000);
  server.listen(port, '0.0.0.0', () => console.log(`Forge Academy MVP ouvindo na porta ${port}`));
  const shutdown = () => {server.close(() => process.exit(0)); setTimeout(() => process.exit(1), 10000).unref();};
  process.once('SIGTERM', shutdown);
  process.once('SIGINT', shutdown);
}
