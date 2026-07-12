(() => {
  const VERSION = 'v0.81.0';
  const audit = {
    version: VERSION,
    date: '2026-07-12',
    engine: 'Playwright 1.55 · Chromium',
    viewports: [
      { name: 'Escritorio', width: 1440, height: 900 },
      { name: 'Móvil', device: 'Pixel 7' },
      { name: 'Tablet', device: 'iPad Pro 11' }
    ],
    checks: [
      'Carga de las cuatro convocatorias',
      'Navegación por todas las vistas',
      'Diseño adaptable sin desbordamiento horizontal',
      'Persistencia real del progreso tras recargar',
      'Registro del service worker y caché opoweb-v88',
      'Recarga completa sin conexión',
      'Conservación de datos locales en modo sin conexión'
    ],
    remaining: [
      'Comprobación manual en dispositivos físicos Android e iPad',
      'Comprobación manual en Safari/WebKit',
      'Prueba de instalación desde la interfaz del navegador'
    ]
  };
  window.OPOWEB_BROWSER_AUDIT_V81 = audit;

  function patchVersion() {
    [document.getElementById('oposicionCard'), document.getElementById('content')]
      .filter(Boolean)
      .forEach(node => {
        node.innerHTML = node.innerHTML
          .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
          .replace(/Auditoría v0\.(?:72|73|74|75|76|77|78|79|80)/g, 'Auditoría v0.81')
          .replace(/auditoría v0\.(?:72|73|74|75|76|77|78|79|80)/gi, 'auditoría v0.81');
      });
  }

  function card() {
    return `<article class="card" id="browserAuditV81">
      <div class="pill-row"><span class="badge common">OpoWeb v0.81</span><span class="badge area">Playwright · Chromium</span><span class="badge">PWA sin conexión</span></div>
      <h2>Validación automática de navegador</h2>
      <p>La aplicación se comprueba en escritorio, móvil y tablet mediante un navegador Chromium real. Las pruebas recorren todas las vistas, guardan progreso, recargan la aplicación y verifican el funcionamiento completo sin conexión.</p>
      <div class="grid three">
        <div><span class="score">3</span><p class="muted">formatos de pantalla</p></div>
        <div><span class="score">7</span><p class="muted">controles funcionales</p></div>
        <div><span class="score">v88</span><p class="muted">caché PWA validada</p></div>
      </div>
      <p><strong>Criterio prudente:</strong> esta validación automática no sustituye una comprobación manual en dispositivos físicos ni una prueba específica con Safari/WebKit.</p>
    </article>`;
  }

  function appendCard() {
    document.querySelectorAll('#browserAuditV81').forEach(node => node.remove());
    if (typeof content !== 'undefined' && content) content.insertAdjacentHTML('beforeend', card());
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () { original(); appendCard(); patchVersion(); };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () { original(); appendCard(); patchVersion(); };
  }
  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();
