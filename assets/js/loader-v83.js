(() => {
  const manifest = globalThis.OPOWEB_ASSET_MANIFEST_V83;
  const content = document.getElementById('content');
  const boot = {
    version: manifest?.applicationVersion || 'v0.83.0',
    status: 'loading',
    startedAt: new Date().toISOString(),
    completedAt: null,
    loaded: [],
    failed: null,
    total: manifest?.scripts?.length || 0
  };
  window.OPOWEB_BOOT_V83 = boot;

  function renderLoading() {
    if (!content) return;
    content.innerHTML = `<article class="card" id="bootStatusV83">
      <h2>Cargando OpoWeb</h2>
      <p>Inicializando temarios, preguntas, simulacros y controles de progreso.</p>
      <p class="muted" id="bootCounterV83">0 de ${boot.total} módulos</p>
    </article>`;
  }

  function updateCounter() {
    const counter = document.getElementById('bootCounterV83');
    if (counter) counter.textContent = `${boot.loaded.length} de ${boot.total} módulos`;
  }

  function renderFailure(error) {
    if (!content) return;
    const failed = boot.failed || 'módulo desconocido';
    content.innerHTML = `<article class="card">
      <div class="pill-row"><span class="badge">Error de carga</span></div>
      <h2>OpoWeb no ha podido iniciarse</h2>
      <p>Ha fallado el recurso <code>${failed}</code>.</p>
      <p class="muted">Comprueba la conexión y recarga. Si el problema continúa, borra únicamente la caché de la aplicación; el progreso se conserva en almacenamiento local y puede exportarse cuando la aplicación vuelva a abrir.</p>
      <pre class="tree">${String(error?.message || error || 'Error desconocido')}</pre>
    </article>`;
  }

  function loadScript(source) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = source;
      script.async = false;
      script.dataset.opowebManaged = 'v83';
      script.addEventListener('load', () => {
        boot.loaded.push(source);
        updateCounter();
        resolve();
      }, { once: true });
      script.addEventListener('error', () => {
        boot.failed = source;
        reject(new Error(`No se pudo cargar ${source}`));
      }, { once: true });
      document.body.appendChild(script);
    });
  }

  async function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return null;
    try {
      return await navigator.serviceWorker.register('./sw.js');
    } catch (error) {
      boot.serviceWorkerError = String(error?.message || error);
      return null;
    }
  }

  async function start() {
    if (!manifest || !Array.isArray(manifest.scripts) || !manifest.scripts.length) {
      boot.status = 'failed';
      boot.failed = './assets/js/asset-manifest-v83.js';
      renderFailure(new Error('El manifiesto de módulos está vacío o no es válido.'));
      return;
    }

    renderLoading();
    try {
      for (const source of manifest.scripts) await loadScript(source);
      boot.status = 'ready';
      boot.completedAt = new Date().toISOString();
      boot.durationMs = Date.parse(boot.completedAt) - Date.parse(boot.startedAt);
      await registerServiceWorker();
      window.dispatchEvent(new CustomEvent('opoweb:ready', { detail: { ...boot } }));
    } catch (error) {
      boot.status = 'failed';
      boot.completedAt = new Date().toISOString();
      renderFailure(error);
      window.dispatchEvent(new CustomEvent('opoweb:failed', { detail: { ...boot } }));
    }
  }

  start();
})();
