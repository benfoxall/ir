if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,d)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}})).then(e=>{const s=d(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"__snowpack__/env.js",revision:"303f8e8516cdfb0a447e7a9dc7c57a3b"},{url:"_dist_/App.js",revision:"82503412cc01d48d0b0567872a15e6b7"},{url:"_dist_/data.js",revision:"5fecc02a28c84054b68177f89d34d854"},{url:"_dist_/index.js",revision:"d18dfda41ede44a1f22737e1d4d2508d"},{url:"_dist_/lib/pronto.js",revision:"77b5de3025ec041dc0caa39f6ae93648"},{url:"_dist_/puck.js",revision:"52733bd40a9373275ba5c7dd1b1e6dce"},{url:"_dist_/PuckSocket.js",revision:"888493a0be67048741f6e7ee6d0e4a6e"},{url:"_dist_/react-puck.js",revision:"34ab557076285f2a5d1196ad6efe9e01"},{url:"index.html",revision:"a56c432230a7fbbf77e6aba2157a6504"},{url:"web_modules/common/index-e66f0a38.js",revision:"ee270837be8919fda4983b1daa884888"},{url:"web_modules/import-map.json",revision:"047bf1284780f83cb4918c8bc421d682"},{url:"web_modules/react-dom.js",revision:"048dfd07c3966f28523e43e149ff2445"},{url:"web_modules/react.js",revision:"186fe81ed7aedf741566ec2e9033c069"}],{})}));
//# sourceMappingURL=sw.js.map
