self.addEventListener('install', e=> {
  console.log('Install event!');
});

self.addEventListener('activate', e=> {
  console.log('Activate event!');
  e.waitUntil(
    caches.open(cacheName)
    .then( cache => {
      return cache.addAll(resourcesToPreCache);
    });
});

self.addEventListener('fetch', e=> {
  console.log('Fetch intercepted for', e.request.url);
  e.respondWith(caches.match(e.request)
  .then(cachedResponse || fetch(e.request);
  );
});

const cacheName = 'cache-v1';
const resourcesToPreCache = [
  '/',
  'index.html',
  'styles/main.css'
  ];
  
