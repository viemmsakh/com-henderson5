self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('henderson5-pwa-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        // Add any other assets you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});