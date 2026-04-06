const CACHE_NAME='kraft-td-v1';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(c=>{if(c)return c;return fetch(e.request).then(r=>{if(e.request.url.includes('fonts.g')){const cl=r.clone();caches.open(CACHE_NAME).then(ca=>ca.put(e.request,cl));}return r;}).catch(()=>c);}));});
