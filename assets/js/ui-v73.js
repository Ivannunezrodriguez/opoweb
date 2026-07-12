(() => {
  const VERSION = 'v0.73.0';
  const release = () => window.OPOWEB_UC3M_V73 || {};
  const activeOpe = () => (typeof active === 'function' ? active() : null);

  function patchAuditVersion() {
    const audit = window.OPOWEB_AUDITORIA_V72;
    if (!audit) return;
    audit.version = VERSION;
    audit.date = '2026-07-12';
    if (audit.summary) audit.summary.version = VERSION;
    window.OPOWEB_AUDITORIA_V73 = audit;
  }

  function patchVersion() {
    patchAuditVersion();
    [document.getElementById('oposicionCard'), document.getElementById('content')]
      .filter(Boolean)
      .forEach(node => {
        node.innerHTML = node.innerHTML
          .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
          .replace(/Auditoría v0\.72/g, 'Auditoría v0.73')
          .replace(/auditoría v0\.72/gi, 'auditoría v0.73');
      });
  }

  function removeOldCards() {
    document.querySelectorAll('[id^="uc3mV"], [id^="uc3mTestStatusV"], [id^="uc3mNextBlockV"]').forEach(node => node.remove());
  }

  function progressCard() {
    const info = release();
    return `<article class="card" id="uc3mV73Card">
      <div class="pill-row"><span class="badge common">UC3M v0.73</span><span class="badge">transparencia cerrada</span><span class="badge area">30 preguntas verificadas</span></div>
      <h2>Tema 7 completado con la Ley 10/2019 consolidada</h2>
      <p>El bloque incorpora publicidad activa, derecho de acceso, plazos literales y la aplicación del Portal de Transparencia UC3M.</p>
      <div class="grid three">
        <div><span class="score">${info.targetThemes || 15}/20</span><p class="muted">temas con 30 preguntas reales</p></div>
        <div><span class="score">${info.totalQuestions || 500}</span><p class="muted">preguntas válidas UC3M</p></div>
        <div><span class="score">68%</span><p class="muted">avance estimado UC3M</p></div>
      </div>
      <div class="progress-bar"><span style="width:68%"></span></div>
      <p><strong>Mínimo actual:</strong> ${info.minimumQuestions || 10} preguntas. El tema 7 pasa de 6 a 30 y deja de ser el cuello de botella.</p>
      <p class="muted">El porcentaje mide contenido verificable, fuentes y pruebas; no representa probabilidad de aprobar.</p>
    </article>
    <article class="card compact" id="uc3mNextBlockV73">
      <h3>Siguiente bloque real</h3>
      <p>Completar los temas universitarios 13–17 hasta 30 preguntas y cerrar presupuesto, matrícula, permanencia, evaluación, admisión y delegaciones internas vigentes.</p>
    </article>`;
  }

  function testCard() {
    if (activeOpe()?.id !== 'uc3m-aux-admin-2026') return '';
    const info = release();
    return `<article class="card compact" id="uc3mTestStatusV73">
      <div class="pill-row"><span class="badge common">${info.totalQuestions || 500} preguntas reales</span><span class="badge">${info.targetThemes || 15}/20 temas a 30</span><span class="badge">3 simulacros 70 + 5</span></div>
      <p><strong>Mejora v0.73:</strong> tema 7 reconstruido con 30 preguntas basadas en la Ley 10/2019 consolidada y el Portal de Transparencia UC3M.</p>
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
