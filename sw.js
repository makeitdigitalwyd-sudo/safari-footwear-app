const CACHE_NAME = 'safari-pos-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Network-first strategy so live updates and Firebase sync always stay fresh
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
