(() => {
  const VERSION = 'v0.83.0';
  const manifest = window.OPOWEB_ASSET_MANIFEST_V83;

  function patchText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      node.nodeValue = node.nodeValue
        .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
        .replace(/OpoWeb v0\.82/g, 'OpoWeb v0.83')
        .replace(/Auditoría v0\.82/g, 'Auditoría v0.83')
        .replace(/auditoría v0\.82/gi, 'auditoría v0.83')
        .replace(/opoweb-v89/g, 'opoweb-v90')
        .replace(/\bv89\b/g, 'v90');
    });
  }

  function patchVersion() {
    patchText(document.getElementById('oposicionCard'));
    patchText(document.getElementById('content'));
  }

  function bootCard() {
    const boot = window.OPOWEB_BOOT_V83 || {};
    const ready = boot.status === 'ready';
    const statusLabel = ready ? 'LISTO' : String(boot.status || 'cargando').toUpperCase();
    const statusClass = ready ? 'common' : '';
    const duration = Number.isFinite(boot.durationMs) ? `${boot.durationMs} ms` : 'pendiente';
    return `<article class="card" id="loaderAuditV83">
      <div class="pill-row"><span class="badge ${statusClass}">${statusLabel}</span><span class="badge area">Manifiesto único</span><span class="badge">Caché v90</span></div>
      <h2>Arranque centralizado</h2>
      <p>El orden de todos los módulos se define una sola vez y se reutiliza tanto en la página como en el service worker.</p>
      <div class="grid three">
        <div><span class="score">${boot.loaded?.length || 0}</span><p class="muted">módulos cargados</p></div>
        <div><span class="score">${manifest?.scripts?.length || 0}</span><p class="muted">módulos declarados</p></div>
        <div><span class="score">${duration}</span><p class="muted">duración de arranque</p></div>
      </div>
      <p class="muted">Una ausencia o fallo de carga identifica el archivo concreto y bloquea el arranque antes de mostrar datos incompletos.</p>
    </article>`;
  }

  function appendBootCard() {
    document.querySelectorAll('#loaderAuditV83').forEach(node => node.remove());
    if (typeof content !== 'undefined' && content) content.insertAdjacentHTML('beforeend', bootCard());
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () { original(); appendBootCard(); patchVersion(); };
  }
  if (typeof renderAll === 'function') {
    const original = renderAll;
    renderAll = function () { original(); patchVersion(); };
  }

  window.OPOWEB_LOADER_AUDIT_V83 = {
    version: VERSION,
    cacheName: manifest?.cacheName || 'opoweb-v90',
    declaredScripts: manifest?.scripts?.length || 0,
    duplicateScripts: manifest ? manifest.scripts.length - new Set(manifest.scripts).size : 0,
    checks: ['manifest', 'order', 'duplicates', 'load-errors', 'service-worker-parity']
  };

  window.addEventListener('opoweb:ready', () => {
    patchVersion();
    if (typeof state !== 'undefined' && state.view === 'progreso' && typeof renderProgreso === 'function') renderProgreso();
  }, { once: true });

  patchVersion();
})();
