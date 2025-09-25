self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', (e) => {
  // Default: just let the browser handle it
});
