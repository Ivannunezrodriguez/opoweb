const CACHE = 'opoweb-v21';
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
  './assets/js/ajustes-v16.js',
  './assets/js/temario-modular.js',
  './data/oposiciones.js',
  './data/proceso.js',
  './data/uc3m.js',
  './data/normas/constitucion.js',
  './data/normas/ley-39-2015.js',
  './data/normas/ley-39-2015-procedimiento.js',
  './data/normas/ley-40-2015.js',
  './data/normas/regimen-local.js',
  './data/normas/informatica.js',
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
