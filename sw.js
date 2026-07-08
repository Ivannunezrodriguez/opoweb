const CACHE = 'opoweb-v15';
const ASSETS = [
  './',
  './index.html',
  './assets/css/styles.css',
  './assets/js/app.js',
  './assets/js/estudio-avanzado.js',
  './assets/js/temario-profundo.js',
  './assets/js/temario-editorial.js',
  './assets/js/ofimatica-detalle.js',
  './assets/js/metodo-opotest.js',
  './assets/js/temario-academia.js',
  './assets/js/ajustes-v15.js',
  './data/oposiciones.js',
  './data/proceso.js',
  './data/formacion_usuario.json',
  './manifest.webmanifest',
  './assets/icons/icon.svg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)));
});
