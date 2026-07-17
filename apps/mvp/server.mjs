import {createServer} from 'node:http';
import {readFile,stat,mkdir} from 'node:fs/promises';
import {join,normalize,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {createCore} from './core.mjs';
import {loadCommunityConfig} from './config.mjs';

const root=fileURLToPath(new URL('.',import.meta.url));
const pub=join(root,'public'),data=join(root,'data');
await mkdir(data,{recursive:true});
const config=loadCommunityConfig();
if(process.env.NODE_ENV==='production'&&process.env.ALLOW_INSECURE_DEMO_AUTH!=='true')throw new Error('The constrained MVP uses demo-header auth and is intentionally blocked in production. Build the documented OTP/MFA session layer first.');
const core=createCore(join(data,'hamseen.sqlite'));core.seed();
const buckets=new Map();
const securityHeaders={
 'Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'",
 'Referrer-Policy':'no-referrer','X-Content-Type-Options':'nosniff','X-Frame-Options':'DENY','Permissions-Policy':'camera=(), microphone=(), geolocation=()'
};
const json=(res,status,payload,requestId)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Request-ID':requestId,...securityHeaders});res.end(JSON.stringify(payload))};
const body=async req=>{let raw='';for await(const chunk of req){raw+=chunk;if(raw.length>1e6)throw Object.assign(new Error('Payload exceeds 1 MB'),{status:413,code:'PAYLOAD_TOO_LARGE'})}try{return raw?JSON.parse(raw):{}}catch{throw Object.assign(new Error('Malformed JSON'),{status:400,code:'VALIDATION_FAILED'})}};
const requestId=req=>String(req.headers['x-request-id']||randomUUID()).slice(0,128);
const rateLimit=req=>{const key=req.socket.remoteAddress||'local',now=Date.now(),window=60_000,limit=180;const b=buckets.get(key)||{start:now,count:0};if(now-b.start>window){b.start=now;b.count=0}b.count++;buckets.set(key,b);if(b.count>limit)throw Object.assign(new Error('Rate limit exceeded'),{status:429,code:'RATE_LIMITED'})};
const ctx=(req,id)=>core.context(req.headers['x-demo-user']||'resident-1',id);
async function api(req,res,url,id){
 const p=url.pathname,method=req.method;
 if(method==='GET'&&p==='/api/v1/health')return json(res,200,{data:{status:'ok',service:'hamseen-constrained-mvp'}},id);
 if(method==='GET'&&p==='/api/v1/ready'){core.db.prepare('SELECT 1').get();return json(res,200,{data:{status:'ready',config_status:config.profile.status}},id)}
 if(method==='GET'&&p==='/api/v1/hub')return json(res,200,{data:core.hub(ctx(req,id))},id);
 if(method==='POST'&&p==='/api/v1/guest-invites')return json(res,201,{data:core.createGuest(ctx(req,id),await body(req))},id);
 let m=p.match(/^\/api\/v1\/guest-invites\/([^/]+)\/transition$/);
 if(method==='POST'&&m){const b=await body(req);return json(res,200,{data:core.transitionGuest(ctx(req,id),m[1],b.status,b.expected_version)},id)}
 if(method==='POST'&&p==='/api/v1/tickets')return json(res,201,{data:core.createTicket(ctx(req,id),await body(req))},id);
 m=p.match(/^\/api\/v1\/tickets\/([^/]+)\/transition$/);if(method==='POST'&&m)return json(res,200,{data:core.transitionTicket(ctx(req,id),m[1],await body(req))},id);
 if(method==='POST'&&p==='/api/v1/bookings')return json(res,201,{data:core.createBooking(ctx(req,id),await body(req))},id);
 if(method==='POST'&&p==='/api/v1/receipts')return json(res,201,{data:core.submitReceipt(ctx(req,id),await body(req))},id);
 m=p.match(/^\/api\/v1\/receipts\/([^/]+)\/review$/);if(method==='POST'&&m){const b=await body(req);return json(res,200,{data:core.reviewReceipt(ctx(req,id),m[1],b.status)},id)}
 if(method==='POST'&&p==='/api/v1/packages')return json(res,201,{data:core.receivePackage(ctx(req,id),await body(req))},id);
 m=p.match(/^\/api\/v1\/packages\/([^/]+)\/collect$/);if(method==='POST'&&m)return json(res,200,{data:core.collectPackage(ctx(req,id),m[1])},id);
 if(method==='POST'&&p==='/api/v1/notices')return json(res,201,{data:core.createNotice(ctx(req,id),await body(req))},id);
 m=p.match(/^\/api\/v1\/notices\/([^/]+)\/publish$/);if(method==='POST'&&m){const b=await body(req);return json(res,200,{data:core.publishNotice(ctx(req,id),m[1],b.expected_version)},id)}
 if(method==='POST'&&p==='/api/v1/ai/interactions'){const b=await body(req);return json(res,200,{data:core.assistant(ctx(req,id),b.question)},id)}
 if(method==='GET'&&p==='/api/v1/audit')return json(res,200,{data:core.auditLog(ctx(req,id))},id);
 return json(res,404,{error:{code:'NOT_FOUND',message:'Not found',request_id:id}},id);
}
export const server=createServer(async(req,res)=>{const id=requestId(req);try{rateLimit(req);const url=new URL(req.url,'http://local');if(url.pathname.startsWith('/api/'))return await api(req,res,url,id);const rel=url.pathname==='/'?'index.html':url.pathname.replace(/^\//,'');const path=normalize(join(pub,rel));if(!path.startsWith(pub))throw Object.assign(new Error('Forbidden'),{status:403,code:'FORBIDDEN'});if(!(await stat(path)).isFile())throw Object.assign(new Error('Not found'),{status:404,code:'NOT_FOUND'});const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream',...securityHeaders});res.end(await readFile(path))}catch(e){json(res,e.status||500,{error:{code:e.code||'INTERNAL_ERROR',message:e.message||'Error',request_id:id}},id)}});
if(process.env.NODE_ENV!=='test'){
 const port=Number(process.env.PORT||4180),host=process.env.HOST||'127.0.0.1';server.listen(port,host,()=>console.log(`Hamseen MVP: http://${host}:${port} (${config.profile.status} configuration)`));
 const stop=signal=>server.close(()=>{console.log(`Stopped after ${signal}`);process.exit(0)});process.on('SIGTERM',()=>stop('SIGTERM'));process.on('SIGINT',()=>stop('SIGINT'));
}
