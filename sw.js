// IBIZOU : permet d'installer l'appli sur Android. Ne garde rien en cache (toujours la dernière version).
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request))}});
