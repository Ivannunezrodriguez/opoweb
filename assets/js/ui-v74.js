(() => {
  const VERSION = 'v0.74.0';
  const release = () => window.OPOWEB_UC3M_V74 || {};
  const activeOpe = () => (typeof active === 'function' ? active() : null);

  function patchAuditVersion() {
    const audit = window.OPOWEB_AUDITORIA_V72;
    if (!audit) return;
    audit.version = VERSION;
    audit.date = '2026-07-12';
    if (audit.summary) audit.summary.version = VERSION;
    window.OPOWEB_AUDITORIA_V74 = audit;
  }

  function patchVersion() {
    patchAuditVersion();
    [document.getElementById('oposicionCard'), document.getElementById('content')]
      .filter(Boolean)
      .forEach(node => {
        node.innerHTML = node.innerHTML
          .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
          .replace(/Auditoría v0\.(?:72|73)/g, 'Auditoría v0.74')
          .replace(/auditoría v0\.(?:72|73)/gi, 'auditoría v0.74');
      });
  }

  function removeOldCards() {
    document.querySelectorAll('[id^="uc3mV"], [id^="uc3mTestStatusV"], [id^="uc3mNextBlockV"]').forEach(node => node.remove());
  }

  function progressCard() {
    const info = release();
    return `<article class="card" id="uc3mV74Card">
      <div class="pill-row"><span class="badge common">UC3M v0.74</span><span class="badge">LOSU I y II cerrados</span><span class="badge area">60 preguntas verificadas</span></div>
      <h2>Temas 13 y 14 completados</h2>
      <p>La LOSU queda integrada en funciones, autonomía, enseñanzas, investigación, estudiantado, financiación, PDI y PTGAS.</p>
      <div class="grid three">
        <div><span class="score">${info.targetThemes || 17}/20</span><p class="muted">temas con 30 preguntas reales</p></div>
        <div><span class="score">${info.totalQuestions || 540}</span><p class="muted">preguntas válidas UC3M</p></div>
        <div><span class="score">76%</span><p class="muted">avance estimado UC3M</p></div>
      </div>
      <div class="progress-bar"><span style="width:76%"></span></div>
      <p><strong>Mínimo actual:</strong> ${info.minimumQuestions || 10} preguntas. Solo quedan incompletos los temas 15, 16 y 17.</p>
      <p class="muted">El porcentaje mide contenido verificable, fuentes y pruebas; no representa probabilidad de aprobar.</p>
    </article>
    <article class="card compact" id="uc3mNextBlockV74">
      <h3>Siguiente bloque real</h3>
      <p>Completar el tema 15 de Estatutos UC3M y después los temas 16 y 17 de normativa académica y admisión.</p>
    </article>`;
  }

  function testCard() {
    if (activeOpe()?.id !== 'uc3m-aux-admin-2026') return '';
    const info = release();
    return `<article class="card compact" id="uc3mTestStatusV74">
      <div class="pill-row"><span class="badge common">${info.totalQuestions || 540} preguntas reales</span><span class="badge">${info.targetThemes || 17}/20 temas a 30</span><span class="badge">3 simulacros 70 + 5</span></div>
      <p><strong>Mejora v0.74:</strong> temas 13 y 14 reconstruidos con 60 preguntas basadas en la LOSU consolidada.</p>
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
