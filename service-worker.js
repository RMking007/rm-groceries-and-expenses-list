const CACHE_NAME = 'grocery-v1';
const ASSETS = [
  './grocery_app.html',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});
