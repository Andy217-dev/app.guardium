var c=Object.defineProperty;var a=(n,e,r)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var t=(n,e,r)=>a(n,typeof e!="symbol"?e+"":e,r);import{f as o,g as i}from"./index-NBfXeSsy.js";class u{constructor(){t(this,"register",({token:e,...r})=>o.post(i.vpnService.register(),r,{headers:{token:e}}).then(s=>Promise.resolve(s)).catch(s=>Promise.reject(this.formatError(s))));t(this,"getServersAndPorts",()=>o.get(i.vpnService.getServersAndPorts()).then(e=>Promise.resolve(e)).catch(e=>Promise.reject(this.formatError(e))));t(this,"getConfigFile",(e,r)=>o.get(i.vpnService.configExport(e,r)).then(s=>Promise.resolve(s)).catch(s=>Promise.reject(this.formatError(s))));t(this,"requestVPN",e=>o.post(i.vpnService.requestVPN(),e).then(r=>Promise.resolve(r)).catch(r=>Promise.reject(this.formatError(r))));t(this,"getWireGuardConfigFile",e=>o.get(i.vpnService.WireGuardConfigExport(e)).then(r=>Promise.resolve(r)).catch(r=>Promise.reject(this.formatError(r))));t(this,"changePassword",e=>o.get(i.vpnService.changePassword(e)).then(r=>Promise.resolve(r.data)).catch(r=>Promise.reject(this.formatError(r))));t(this,"formatError",e=>{var r;return((r=e==null?void 0:e.response)==null?void 0:r.status)===401?(window.dispatchEvent(new Event("Logout")),null):e.response})}}const m=new u;export{m as V};
