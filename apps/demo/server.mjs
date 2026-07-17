import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml'};
export const server=createServer(async(req,res)=>{try{const raw=decodeURIComponent((req.url||'/').split('?')[0]);const rel=raw==='/'?'index.html':raw.replace(/^\/+/, '');const path=normalize(join(root,rel));if(!path.startsWith(root))throw new Error('forbidden');const s=await stat(path);if(!s.isFile())throw new Error('not file');res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream','Cache-Control':'no-store'});res.end(await readFile(path));}catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not found');}});
if(process.env.NODE_ENV!=='test')server.listen(Number(process.env.PORT||4173),'127.0.0.1',()=>console.log('Hamseen demo: http://127.0.0.1:4173'));
