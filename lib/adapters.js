// Change these adapters only after receiving the backend's actual response schema.
export function record(item,kind){
 const fields=kind==='listings'?['id','title','city','type','price','area','image','description']:kind==='events'?['id','title','category','dateLabel','location','description']:['id','name','role','specialty'];
 if(!item||fields.some(key=>item[key]===undefined||item[key]===null))throw new Error(`Invalid ${kind} response. Configure lib/adapters.js for the backend fields.`);
 if(kind==='listings'&&(!Number.isFinite(item.price)||!Number.isFinite(item.area)))throw new Error('Price and area must be numbers.');
 return item;
}
export function collection(payload,kind){if(!Array.isArray(payload))throw new Error(`Expected ${kind} array. Configure lib/adapters.js for your response envelope.`);return payload.map(item=>record(item,kind));}
