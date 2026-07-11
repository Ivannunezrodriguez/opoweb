const CACHE = 'opoweb-v76';
const ASSETS = [
  './', './index.html', './assets/css/styles.css',
  './assets/js/app.js', './assets/js/metodo-opotest.js', './assets/js/motor-temario.js', './assets/js/auditoria-temas.js',
  './assets/js/uc3m-temario-v30.js', './assets/js/ui-v29.js', './assets/js/uc3m-temario-v31.js', './assets/js/ui-v31.js', './assets/js/uc3m-temario-v32.js', './assets/js/ui-v32.js', './assets/js/uc3m-temario-v33.js', './assets/js/ui-v33.js', './assets/js/uc3m-temario-v34.js', './assets/js/ui-v34.js', './assets/js/uc3m-temario-v35.js', './assets/js/ui-v35.js', './assets/js/uc3m-temario-v36.js', './assets/js/ui-v36.js',
  './assets/js/auditoria-test-v37.js', './assets/js/ui-v37.js', './assets/js/refuerzo-test-v38.js', './assets/js/ui-v38.js', './assets/js/refuerzo-test-v39.js', './assets/js/ui-v39.js', './assets/js/refuerzo-test-v40.js', './assets/js/correcciones-test-v40.js', './assets/js/ui-v40.js', './assets/js/ui-v41.js', './assets/js/perfeccion-v42.js', './assets/js/uc3m-v66.js', './assets/js/uc3m-v67.js',
  './assets/js/diputacion-v43.js', './assets/js/diputacion-v44.js', './assets/js/diputacion-v45.js', './assets/js/diputacion-v46.js', './assets/js/diputacion-v47.js', './assets/js/diputacion-v48.js', './assets/js/diputacion-v49.js', './assets/js/diputacion-v50.js', './assets/js/diputacion-v51.js', './assets/js/diputacion-v52.js', './assets/js/diputacion-v53.js', './assets/js/diputacion-v54.js', './assets/js/diputacion-v55.js', './assets/js/diputacion-v56.js', './assets/js/diputacion-v57.js', './assets/js/diputacion-v58.js', './assets/js/diputacion-v59.js', './assets/js/diputacion-v60.js', './assets/js/diputacion-v61.js', './assets/js/diputacion-v62.js', './assets/js/diputacion-v63.js', './assets/js/diputacion-v64.js', './assets/js/diputacion-v65.js', './assets/js/puebla-v68.js', './assets/js/carranque-v69.js', './assets/js/carranque-v69-fix.js',
  './assets/js/ui-v42.js', './assets/js/ui-v43.js', './assets/js/ui-v44.js', './assets/js/ui-v45.js', './assets/js/ui-v46.js', './assets/js/ui-v47.js', './assets/js/ui-v48.js', './assets/js/ui-v49.js', './assets/js/ui-v50.js', './assets/js/ui-v51.js', './assets/js/ui-v52.js', './assets/js/ui-v53.js', './assets/js/ui-v54.js', './assets/js/ui-v55.js', './assets/js/ui-v56.js', './assets/js/ui-v57.js', './assets/js/ui-v58.js', './assets/js/ui-v59.js', './assets/js/ui-v60.js', './assets/js/ui-v61.js', './assets/js/ui-v62.js', './assets/js/ui-v63.js', './assets/js/ui-v64.js', './assets/js/ui-v65.js', './assets/js/ui-v66.js', './assets/js/ui-v67.js', './assets/js/ui-puebla-v68.js', './assets/js/ui-carranque-v69.js',
  './assets/js/estado-v56.js', './data/oposiciones.js', './data/proceso.js', './data/uc3m.js', './data/ope-audit-v41.js',
  './data/normas/constitucion.js', './data/normas/ley-39-2015.js', './data/normas/ley-39-2015-procedimiento.js', './data/normas/ley-40-2015.js', './data/normas/regimen-local.js', './data/normas/hacienda-local.js', './data/normas/contratos-publicos.js', './data/normas/empleo-publico.js', './data/normas/transversales.js', './data/normas/informatica.js',
  './data/formacion_usuario.json', './manifest.webmanifest', './assets/icons/icon.svg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)));
});
