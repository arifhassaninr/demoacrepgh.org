import {endpoints} from './endpoints.js';
import {collection,record} from './adapters.js';
import {demoListings,demoEvents,demoMembers} from '../mocks/data.js';
export const isDemo=process.env.NEXT_PUBLIC_USE_MOCKS!=='false';
export class ApiError extends Error{constructor(message,status=0){super(message);this.name='ApiError';this.status=status;}}
async function read(kind,args=[],signal){
 if(isDemo){
  const state=process.env.NEXT_PUBLIC_DEMO_STATE;
  if(state==='loading')await new Promise((resolve,reject)=>{const timer=setTimeout(resolve,4000);signal?.addEventListener('abort',()=>{clearTimeout(timer);reject(new DOMException('Aborted','AbortError'))},{once:true})});
  if(state==='error')throw new ApiError('Demo error: data service unavailable.');
  if(state==='empty')return kind==='property'?null:[];
  return kind==='property'?demoListings.find(p=>p.id===args[0])??null:{listings:demoListings,events:demoEvents,members:demoMembers}[kind];
 }
 const base=process.env.NEXT_PUBLIC_API_URL;
 if(!base||typeof endpoints[kind]!=='function')throw new ApiError(`Backend integration pending: configure ${kind} in lib/endpoints.js and NEXT_PUBLIC_API_URL.`);
 const origin=new URL(base.endsWith('/')?base:base+'/');
 if(!['http:','https:'].includes(origin.protocol))throw new ApiError('API URL must use HTTP or HTTPS.');
 const url=new URL(endpoints[kind](...args),origin);
 if(url.origin!==origin.origin)throw new ApiError('Endpoint must use the configured API origin.');
 const controller=new AbortController(),abort=()=>controller.abort();
 if(signal?.aborted)abort();signal?.addEventListener('abort',abort,{once:true});
 const timer=setTimeout(abort,12000);
 try{const response=await fetch(url,{headers:{Accept:'application/json'},cache:'no-store',signal:controller.signal,credentials:'omit'});
  if(kind==='property'&&response.status===404)return null;
  if(!response.ok)throw new ApiError(`Unable to load ${kind} (HTTP ${response.status}).`,response.status);
  const data=await response.json();return kind==='property'?record(data,'listings'):collection(data,kind);
 }catch(error){if(signal?.aborted)throw error;if(error.name==='AbortError')throw new ApiError('The request timed out. Please try again.');throw error;}
 finally{clearTimeout(timer);signal?.removeEventListener('abort',abort);}
}
export const getListings=signal=>read('listings',[],signal);
export const getProperty=(id,signal)=>read('property',[id],signal);
export const getEvents=signal=>read('events',[],signal);
export const getMembers=signal=>read('members',[],signal);
