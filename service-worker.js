const CACHE_NAME = 'phoenix-fleet-calculator-v1';
const FILES_TO_CACHE = ['./index.html', './manifest.json', './icons/icon.svg'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
