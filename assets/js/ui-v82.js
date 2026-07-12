(() => {
  const VERSION = 'v0.82.0';
  const storage = window.OPOWEB_STORAGE;
  if (!storage || typeof state === 'undefined') return;

  state.progress = storage.load();

  saveProgress = function () {
    state.progress = storage.save(state.progress);
  };
  loadProgress = function () {
    return storage.load();
  };

  function patchText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      node.nodeValue = node.nodeValue
        .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
        .replace(/OpoWeb v0\.81/g, 'OpoWeb v0.82')
        .replace(/Auditoría v0\.81/g, 'Auditoría v0.82')
        .replace(/auditoría v0\.81/gi, 'auditoría v0.82');
    });
  }

  function patchVersion() {
    patchText(document.getElementById('oposicionCard'));
    patchText(document.getElementById('content'));
  }

  function downloadProgress() {
    const payload = storage.exportPayload(state.progress);
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `opoweb-progreso-v2-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  function importProgressFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        state.progress = storage.importText(String(reader.result || ''), state.progress);
        renderAll();
        alert('Progreso importado y copia anterior conservada.');
      } catch (error) {
        alert(`Archivo de progreso no válido: ${error.message}`);
      } finally {
        event.target.value = '';
      }
    };
    reader.onerror = () => alert('No se ha podido leer el archivo de progreso.');
    reader.readAsText(file);
  }

  exportProgress = downloadProgress;
  importProgress = importProgressFile;

  function rebindControls() {
    const oldExport = document.getElementById('exportProgress');
    if (oldExport) {
      const freshExport = oldExport.cloneNode(true);
      oldExport.replaceWith(freshExport);
      freshExport.addEventListener('click', downloadProgress);
    }
    const oldImport = document.getElementById('importProgress');
    if (oldImport) {
      const freshImport = oldImport.cloneNode(true);
      oldImport.replaceWith(freshImport);
      freshImport.addEventListener('change', importProgressFile);
    }
  }

  function storageCard() {
    const status = storage.status();
    const meta = status.meta || {};
    const recovery = status.lastRecovery;
    const recoveryText = recovery?.recovered
      ? `<p class="result-box good"><strong>Copia recuperada.</strong> Se restauró automáticamente el último progreso válido.</p>`
      : recovery
        ? `<p class="result-box bad"><strong>Sin copia recuperable.</strong> ${escapeHtml(recovery.reason || '')}</p>`
        : '';
    return `<article class="card" id="storageAuditV82">
      <div class="pill-row"><span class="badge common">Formato v${storage.FORMAT_VERSION}</span><span class="badge area">Copia automática</span><span class="badge">Importación validada</span></div>
      <h2>Protección del progreso</h2>
      <p>OpoWeb conserva la clave histórica <code>opowebProgress</code>, valida cada bloque y guarda una copia anterior antes de sobrescribir datos.</p>
      <div class="grid three">
        <div><span class="score">${meta.entries ?? Object.keys(state.progress).length}</span><p class="muted">bloques guardados</p></div>
        <div><span class="score">${status.backupPresent ? 'SÍ' : 'NO'}</span><p class="muted">copia recuperable</p></div>
        <div><span class="score">v${storage.FORMAT_VERSION}</span><p class="muted">formato de exportación</p></div>
      </div>
      <p class="muted">Integridad: ${escapeHtml(meta.checksum || storage.checksum(state.progress))}. Los archivos antiguos sin envoltorio siguen siendo compatibles.</p>
      ${recoveryText}
    </article>`;
  }

  function appendStorageCard() {
    document.querySelectorAll('#storageAuditV82').forEach(node => node.remove());
    content.insertAdjacentHTML('beforeend', storageCard());
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () { original(); appendStorageCard(); patchVersion(); };
  }
  if (typeof renderAll === 'function') {
    const original = renderAll;
    renderAll = function () { original(); patchVersion(); };
  }

  rebindControls();
  window.OPOWEB_STORAGE_AUDIT_V82 = {
    version: VERSION,
    formatVersion: storage.FORMAT_VERSION,
    primaryKey: storage.PRIMARY_KEY,
    backupKey: storage.BACKUP_KEY,
    checks: ['legacy', 'backup', 'recovery', 'checksum', 'import', 'export']
  };
  try { renderAll(); } catch (_) { patchVersion(); }
})();
