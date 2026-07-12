(() => {
  const VERSION = 'v0.76.0';
  const release = () => window.OPOWEB_UC3M_V76 || {};
  const activeOpe = () => (typeof active === 'function' ? active() : null);

  function patchAuditVersion() {
    const audit = window.OPOWEB_AUDITORIA_V72;
    if (!audit) return;
    audit.version = VERSION;
    audit.date = '2026-07-12';
    if (audit.summary) audit.summary.version = VERSION;
    window.OPOWEB_AUDITORIA_V76 = audit;
  }

  function patchVersion() {
    patchAuditVersion();
    [document.getElementById('oposicionCard'), document.getElementById('content')]
      .filter(Boolean)
      .forEach(node => {
        node.innerHTML = node.innerHTML
          .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
          .replace(/Auditoría v0\.(?:72|73|74|75)/g, 'Auditoría v0.76')
          .replace(/auditoría v0\.(?:72|73|74|75)/gi, 'auditoría v0.76');
      });
  }

  function removeOldCards() {
    document.querySelectorAll('[id^="uc3mV"], [id^="uc3mTestStatusV"], [id^="uc3mNextBlockV"]').forEach(node => node.remove());
  }

  function progressCard() {
    const info = release();
    return `<article class="card" id="uc3mV76Card">
      <div class="pill-row"><span class="badge common">UC3M v0.76</span><span class="badge">20/20 temas a 30</span><span class="badge area">600 preguntas reales</span></div>
      <h2>Cobertura cuantitativa completa del programa UC3M</h2>
      <p>Los temas 16 y 17 incorporan el marco consolidado de ordenación académica, acceso y admisión. La cobertura de preguntas queda cerrada sin confundirla con el cierre documental institucional.</p>
      <div class="grid three">
        <div><span class="score">${info.targetThemes || 20}/20</span><p class="muted">temas con 30 preguntas reales</p></div>
        <div><span class="score">${info.totalQuestions || 600}</span><p class="muted">preguntas válidas UC3M</p></div>
        <div><span class="score">88%</span><p class="muted">avance estimado UC3M</p></div>
      </div>
      <div class="progress-bar"><span style="width:88%"></span></div>
      <p><strong>Mínimo actual:</strong> ${info.minimumQuestions || 30} preguntas por tema.</p>
      <p class="muted">Quedan pendientes la normativa interna UC3M vigente, parámetros anuales, presupuesto, delegaciones y auditoría final de literalidad.</p>
    </article>
    <article class="card compact" id="uc3mNextBlockV76">
      <h3>Siguiente bloque real</h3>
      <p>Cierre documental institucional: matrícula, permanencia, evaluación, ponderaciones, cupos, presupuesto y delegaciones vigentes de la UC3M.</p>
    </article>`;
  }

  function testCard() {
    if (activeOpe()?.id !== 'uc3m-aux-admin-2026') return '';
    const info = release();
    return `<article class="card compact" id="uc3mTestStatusV76">
      <div class="pill-row"><span class="badge common">${info.totalQuestions || 600} preguntas reales</span><span class="badge">${info.targetThemes || 20}/20 temas a 30</span><span class="badge">3 simulacros 70 + 5</span></div>
      <p><strong>Mejora v0.76:</strong> temas 16 y 17 reconstruidos con 60 preguntas basadas en los Reales Decretos 822/2021 y 534/2024.</p>
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
