if(!self.define){let n,c={};const e=(e,l)=>(e=new URL(e+".js",l).href,c[e]||new Promise((c=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=c,document.head.appendChild(n)}else n=e,importScripts(e),c()})).then((()=>{let n=c[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(l,i)=>{const o=n||("document"in self?document.currentScript.src:"")||location.href;if(c[o])return;let s={};const r=n=>e(n,o),f={module:{uri:o},exports:s,require:r};c[o]=Promise.all(l.map((n=>f[n]||r(n)))).then((n=>(i(...n),s)))}}define(["./workbox-b81e226a"],(function(n){"use strict";n.setCacheNameDetails({prefix:"calc"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/Calc/css/app.31d6cfe0.css",revision:null},{url:"/Calc/css/vendor.8ab0ee70.css",revision:null},{url:"/Calc/favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"/Calc/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"/Calc/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"/Calc/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"/Calc/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"/Calc/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"/Calc/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"/Calc/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"/Calc/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"/Calc/icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"/Calc/icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"/Calc/icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"/Calc/icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"/Calc/icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"/Calc/icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"/Calc/icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"/Calc/icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"/Calc/icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"/Calc/icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"/Calc/icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"/Calc/icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"/Calc/icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"/Calc/icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"/Calc/icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"/Calc/index.html",revision:"ba3acb0be7e75d25551e0c5705fe8307"},{url:"/Calc/js/862.9c6c9ba9.js",revision:null},{url:"/Calc/js/969.e5615eaa.js",revision:null},{url:"/Calc/js/972.196b35e5.js",revision:null},{url:"/Calc/js/app.d2738cfb.js",revision:null},{url:"/Calc/js/vendor.7220e8b5.js",revision:null},{url:"/Calc/manifest.json",revision:"719bd647c2835e8509f37c27b3456f16"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/Calc/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
