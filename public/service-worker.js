// Is this step necessary for the budget app?
const FILES_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
];

// Install and pre-cache static files
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(FILES_TO_CACHE)
        .then((cache) => cache.addAll(FILES_TO_CACHE))
    );

    // Activate service worker immediately once it has finished installing
    self.skipWaiting();
});