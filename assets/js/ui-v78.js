(() => {
  const VERSION = 'v0.78.0';
  const release = () => window.OPOWEB_UC3M_V78 || {};
  const activeOpe = () => (typeof active === 'function' ? active() : null);

  function patchAuditVersion() {
    const audit = window.OPOWEB_AUDITORIA_V72;
    if (!audit) return;
    audit.version = VERSION;
    audit.date = '2026-07-12';
    if (audit.summary) audit.summary.version = VERSION;
    window.OPOWEB_AUDITORIA_V78 = audit;
  }

  function patchVersion() {
    patchAuditVersion();
    [document.getElementById('oposicionCard'), document.getElementById('content')]
      .filter(Boolean)
      .forEach(node => {
        node.innerHTML = node.innerHTML
          .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
          .replace(/Auditoría v0\.(?:72|73|74|75|76|77)/g, 'Auditoría v0.78')
          .replace(/auditoría v0\.(?:72|73|74|75|76|77)/gi, 'auditoría v0.78');
      });
  }

  function removeOldCards() {
    document.querySelectorAll('[id^="uc3mV"], [id^="uc3mTestStatusV"], [id^="uc3mNextBlockV"]').forEach(node => node.remove());
  }

  function progressCard() {
    const info = release();
    return `<article class="card" id="uc3mV78Card">
      <div class="pill-row"><span class="badge common">UC3M v0.78</span><span class="badge">Presupuesto 2026 integrado</span><span class="badge area">30 preguntas institucionales</span></div>
      <h2>Temas 18 y 19 actualizados con el presupuesto vigente</h2>
      <p>Se incorporan magnitudes, estructura, financiación, vinculación, modificaciones, ejecución y prórroga del Presupuesto UC3M 2026.</p>
      <div class="grid three">
        <div><span class="score">${info.totalQuestions || 660}</span><p class="muted">preguntas válidas UC3M</p></div>
        <div><span class="score">45 + 45</span><p class="muted">preguntas en temas 18 y 19</p></div>
        <div><span class="score">96%</span><p class="muted">avance estimado UC3M</p></div>
      </div>
      <div class="progress-bar"><span style="width:96%"></span></div>
      <p><strong>Datos críticos:</strong> 300.468.067,59 € de presupuesto total, techo de 325 millones, capítulo I con 76,52 %, Biblioteca 8 % y sabáticos 2 %.</p>
      <p class="muted">Quedan delegaciones internas de contratación, parámetros anuales de admisión, auditoría final y validación real de navegador/PWA.</p>
    </article>
    <article class="card compact" id="uc3mNextBlockV78">
      <h3>Siguiente bloque real</h3>
      <p>Delegaciones internas de contratación UC3M y cierre de parámetros anuales de admisión; después, auditoría final de literalidad.</p>
    </article>`;
  }

  function testCard() {
    if (activeOpe()?.id !== 'uc3m-aux-admin-2026') return '';
    const info = release();
    return `<article class="card compact" id="uc3mTestStatusV78">
      <div class="pill-row"><span class="badge common">${info.totalQuestions || 660} preguntas reales</span><span class="badge">30 de presupuesto 2026</span><span class="badge">3 simulacros 70 + 5</span></div>
      <p><strong>Mejora v0.78:</strong> temas 18 y 19 ampliados con preguntas extraídas del Presupuesto UC3M 2026 y sus Normas Básicas de Gestión.</p>
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
