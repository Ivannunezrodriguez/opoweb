(() => {
  const VERSION = 'v0.79.0';
  const release = () => window.OPOWEB_UC3M_V79 || {};
  const activeOpe = () => (typeof active === 'function' ? active() : null);

  function patchAuditVersion() {
    const audit = window.OPOWEB_AUDITORIA_V72;
    if (!audit) return;
    audit.version = VERSION;
    audit.date = '2026-07-12';
    if (audit.summary) audit.summary.version = VERSION;
    window.OPOWEB_AUDITORIA_V79 = audit;
  }

  function patchVersion() {
    patchAuditVersion();
    [document.getElementById('oposicionCard'), document.getElementById('content')]
      .filter(Boolean)
      .forEach(node => {
        node.innerHTML = node.innerHTML
          .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
          .replace(/Auditoría v0\.(?:72|73|74|75|76|77|78)/g, 'Auditoría v0.79')
          .replace(/auditoría v0\.(?:72|73|74|75|76|77|78)/gi, 'auditoría v0.79');
      });
  }

  function removeOldCards() {
    document.querySelectorAll('[id^="uc3mV"], [id^="uc3mTestStatusV"], [id^="uc3mNextBlockV"]').forEach(node => node.remove());
  }

  function progressCard() {
    const info = release();
    return `<article class="card" id="uc3mV79Card">
      <div class="pill-row"><span class="badge common">UC3M v0.79</span><span class="badge">Contratación interna cerrada</span><span class="badge area">30 preguntas institucionales</span></div>
      <h2>Tema 20 ampliado con procedimiento interno UC3M</h2>
      <p>Se integran órgano de contratación, delegaciones, Mesa, contratos menores, negociado sin publicidad y procedimiento abierto.</p>
      <div class="grid three">
        <div><span class="score">${info.totalQuestions || 690}</span><p class="muted">preguntas válidas UC3M</p></div>
        <div><span class="score">60</span><p class="muted">preguntas en el tema 20</p></div>
        <div><span class="score">98%</span><p class="muted">avance estimado UC3M</p></div>
      </div>
      <div class="progress-bar"><span style="width:98%"></span></div>
      <p><strong>Datos críticos:</strong> Rector como órgano de contratación, Gerente hasta un millón de euros, límites 40.000/15.000/50.000 y excepción de tres ofertas hasta 5.000 euros sin IVA.</p>
      <p class="muted">Quedan parámetros anuales de admisión, auditoría final y validación real en navegador y PWA.</p>
    </article>
    <article class="card compact" id="uc3mNextBlockV79">
      <h3>Siguiente bloque real</h3>
      <p>Parámetros anuales de admisión UC3M y auditoría final de literalidad, dificultad y funcionamiento real.</p>
    </article>`;
  }

  function testCard() {
    if (activeOpe()?.id !== 'uc3m-aux-admin-2026') return '';
    const info = release();
    return `<article class="card compact" id="uc3mTestStatusV79">
      <div class="pill-row"><span class="badge common">${info.totalQuestions || 690} preguntas reales</span><span class="badge">30 de contratación interna</span><span class="badge">3 simulacros 70 + 5</span></div>
      <p><strong>Mejora v0.79:</strong> el tema 20 pasa de 30 a 60 preguntas combinando la LCSP con el procedimiento interno UC3M 2026.</p>
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
