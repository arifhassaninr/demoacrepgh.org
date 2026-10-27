import test from 'node:test';
import assert from 'node:assert/strict';
import {endpoints} from '../lib/endpoints.js';
import {record,collection} from '../lib/adapters.js';
const load=async(tag)=>import(`../lib/api.js?test=${tag}`);
test('integration boundaries and demo states',async t=>{
 await t.test('demo data and detail not found',async()=>{process.env.NEXT_PUBLIC_USE_MOCKS='true';process.env.NEXT_PUBLIC_DEMO_STATE='ready';const api=await load('demo');assert.equal((await api.getListings()).length,4);assert.equal((await api.getProperty('demo-corner')).type,'Retail');assert.equal(await api.getProperty('missing'),null);});
 await t.test('empty and failure states are explicit',async()=>{const api=await load('states');process.env.NEXT_PUBLIC_DEMO_STATE='empty';assert.deepEqual(await api.getMembers(),[]);process.env.NEXT_PUBLIC_DEMO_STATE='error';await assert.rejects(api.getEvents(),/Demo error/);process.env.NEXT_PUBLIC_DEMO_STATE='ready';});
 await t.test('live mode with no endpoints never fetches or returns mocks',async()=>{process.env.NEXT_PUBLIC_USE_MOCKS='false';const api=await load('live');await assert.rejects(api.getListings(),/integration pending/);});
 await t.test('live status, JSON validation, 404 and cancellation',async()=>{process.env.NEXT_PUBLIC_API_URL='https://backend.invalid/';const api=await load('transport'),saved=globalThis.fetch;endpoints.listings=()=>'/test-only';endpoints.property=id=>`/test-only/${encodeURIComponent(id)}`;
 try{globalThis.fetch=async()=>new Response('{}',{status:503});await assert.rejects(api.getListings(),/503/);globalThis.fetch=async()=>new Response('{}',{status:200});await assert.rejects(api.getListings(),/Expected listings array/);globalThis.fetch=async()=>new Response(null,{status:404});assert.equal(await api.getProperty('x'),null);globalThis.fetch=async()=>new Response('[]',{status:200});assert.deepEqual(await api.getListings(),[]);
 globalThis.fetch=async(url,options)=>{assert.equal(options.credentials,'omit');assert.equal(options.signal.aborted,true);throw new DOMException('Aborted','AbortError')};const c=new AbortController();c.abort();await assert.rejects(api.getListings(c.signal),{name:'AbortError'});
 }finally{globalThis.fetch=saved;endpoints.listings=null;endpoints.property=null;}});
 await t.test('view model rejects invalid schema',()=>{assert.throws(()=>record({id:1},'listings'),/Invalid/);assert.throws(()=>collection({data:[]},'events'),/Expected/);});
});
