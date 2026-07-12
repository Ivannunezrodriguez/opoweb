(() => {
  const VERSION = 'v0.80.0';
  const release = () => window.OPOWEB_UC3M_V80 || {};
  const activeOpe = () => (typeof active === 'function' ? active() : null);

  function patchAuditVersion() {
    const audit = window.OPOWEB_AUDITORIA_V72;
    if (!audit) return;
    audit.version = VERSION;
    audit.date = '2026-07-12';
    if (audit.summary) audit.summary.version = VERSION;
    window.OPOWEB_AUDITORIA_V80 = audit;
  }

  function patchVersion() {
    patchAuditVersion();
    [document.getElementById('oposicionCard'), document.getElementById('content')]
      .filter(Boolean)
      .forEach(node => {
        node.innerHTML = node.innerHTML
          .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
          .replace(/Auditoría v0\.(?:72|73|74|75|76|77|78|79)/g, 'Auditoría v0.80')
          .replace(/auditoría v0\.(?:72|73|74|75|76|77|78|79)/gi, 'auditoría v0.80');
      });
  }

  function removeOldCards() {
    document.querySelectorAll('[id^="uc3mV"], [id^="uc3mTestStatusV"], [id^="uc3mNextBlockV"]').forEach(node => node.remove());
  }

  function progressCard() {
    const info = release();
    const status = info.status || 'PENDIENTE';
    return `<article class="card" id="uc3mV80Card">
      <div class="pill-row"><span class="badge common">UC3M v0.80</span><span class="badge">Auditoría final ${status}</span><span class="badge area">690 preguntas</span></div>
      <h2>Cierre documental y control de calidad</h2>
      <p>El banco UC3M se somete a control final de estructura, trazabilidad, duplicados, fuentes, equilibrio de respuestas y cobertura de los veinte temas.</p>
      <div class="grid three">
        <div><span class="score">${info.totalQuestions || 690}</span><p class="muted">preguntas válidas UC3M</p></div>
        <div><span class="score">${info.targetThemes || 20}/20</span><p class="muted">temas con 30 o más</p></div>
        <div><span class="score">99%</span><p class="muted">avance estimado UC3M</p></div>
      </div>
      <div class="progress-bar"><span style="width:99%"></span></div>
      <p><strong>Admisión:</strong> los parámetros anuales no se mezclan con la normativa estable. El artículo 23.2 del Real Decreto 534/2024 debe revisarse desde el 22 de julio de 2026.</p>
      <p class="muted">El 1 % restante corresponde a pruebas reales de navegador, móvil, tablet y funcionamiento sin conexión, además de futuras actualizaciones anuales oficiales.</p>
    </article>
    <article class="card compact" id="uc3mNextBlockV80">
      <h3>Siguiente bloque real</h3>
      <p>Validación funcional real de la PWA y, después, cierre técnico de Diputación y auditoría literal de La Puebla y Carranque.</p>
    </article>`;
  }

  function testCard() {
    if (activeOpe()?.id !== 'uc3m-aux-admin-2026') return '';
    const info = release();
    return `<article class="card compact" id="uc3mTestStatusV80">
      <div class="pill-row"><span class="badge common">${info.totalQuestions || 690} preguntas reales</span><span class="badge">${info.status || 'Auditoría final'}</span><span class="badge">3 simulacros 70 + 5</span></div>
      <p><strong>Mejora v0.80:</strong> auditoría final del banco UC3M y separación expresa entre normativa estable y datos anuales de admisión.</p>
    </article>`;
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () {
      original(); removeOldCards();
      if (activeOpe()?.id === 'uc3m-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard());
      patchVersion();
    };
  }
  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () {
      original(); removeOldCards();
      const html = testCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original(); removeOldCards();
      if (activeOpe()?.id === 'uc3m-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard());
      patchVersion();
    };
  }
  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () { original(); patchVersion(); };
  }
  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();
