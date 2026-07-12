(() => {
  const VERSION = 'v0.77.0';
  const release = () => window.OPOWEB_UC3M_V77 || {};
  const activeOpe = () => (typeof active === 'function' ? active() : null);

  function patchAuditVersion() {
    const audit = window.OPOWEB_AUDITORIA_V72;
    if (!audit) return;
    audit.version = VERSION;
    audit.date = '2026-07-12';
    if (audit.summary) audit.summary.version = VERSION;
    window.OPOWEB_AUDITORIA_V77 = audit;
  }

  function patchVersion() {
    patchAuditVersion();
    [document.getElementById('oposicionCard'), document.getElementById('content')]
      .filter(Boolean)
      .forEach(node => {
        node.innerHTML = node.innerHTML
          .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
          .replace(/Auditoría v0\.(?:72|73|74|75|76)/g, 'Auditoría v0.77')
          .replace(/auditoría v0\.(?:72|73|74|75|76)/gi, 'auditoría v0.77');
      });
  }

  function removeOldCards() {
    document.querySelectorAll('[id^="uc3mV"], [id^="uc3mTestStatusV"], [id^="uc3mNextBlockV"]').forEach(node => node.remove());
  }

  function progressCard() {
    const info = release();
    return `<article class="card" id="uc3mV77Card">
      <div class="pill-row"><span class="badge common">UC3M v0.77</span><span class="badge">Normativa interna integrada</span><span class="badge area">30 preguntas institucionales</span></div>
      <h2>Permanencia, matrícula y evaluación UC3M</h2>
      <p>El tema 16 combina ahora el marco estatal con las reglas internas de permanencia, dispensa, matrícula, evaluación continua y revisión de calificaciones.</p>
      <div class="grid three">
        <div><span class="score">${info.totalQuestions || 630}</span><p class="muted">preguntas válidas UC3M</p></div>
        <div><span class="score">60</span><p class="muted">preguntas en el tema 16</p></div>
        <div><span class="score">93%</span><p class="muted">avance estimado UC3M</p></div>
      </div>
      <div class="progress-bar"><span style="width:93%"></span></div>
      <p><strong>Cobertura:</strong> ${info.targetThemes || 20}/20 temas con al menos 30 preguntas; mínimo global ${info.minimumQuestions || 30}.</p>
      <p class="muted">Quedan parámetros anuales, presupuesto, delegaciones y auditoría final; la cobertura cuantitativa no equivale al cierre documental total.</p>
    </article>
    <article class="card compact" id="uc3mNextBlockV77">
      <h3>Siguiente bloque real</h3>
      <p>Presupuesto y bases de ejecución vigentes de la UC3M, seguido de delegaciones internas de contratación y parámetros anuales de admisión.</p>
    </article>`;
  }

  function testCard() {
    if (activeOpe()?.id !== 'uc3m-aux-admin-2026') return '';
    const info = release();
    return `<article class="card compact" id="uc3mTestStatusV77">
      <div class="pill-row"><span class="badge common">${info.totalQuestions || 630} preguntas reales</span><span class="badge">30 internas UC3M</span><span class="badge">3 simulacros 70 + 5</span></div>
      <p><strong>Mejora v0.77:</strong> el tema 16 pasa de 30 preguntas estatales a 60 combinando normativa estatal e institucional.</p>
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
