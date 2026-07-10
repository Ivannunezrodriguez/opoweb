(() => {
  const VERSION = 'v0.61.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function removeHistoricalCards() {
    document.querySelectorAll('[id^="dipV"], [id^="dipNextBlockV"], [id^="dipTestStatusV"]').forEach(node => node.remove());
  }

  function phaseCards() {
    const audit = active()?.globalTestAudit || {};
    const release = window.OPOWEB_DIPUTACION_V61 || {};
    const secondPassPct = Math.round((22 / 39) * 100);
    return `<article class="card" id="dipV61Card">
      <div class="pill-row"><span class="badge common">Diputación v0.61</span><span class="badge">Segunda vuelta</span><span class="badge">22 temas a 30+</span></div>
      <h2>Prevención de riesgos laborales reforzada</h2>
      <p>El tema 23 incorpora protección eficaz, principios preventivos, información, formación, emergencias, vigilancia de la salud, obligaciones, servicios de prevención y órganos de participación.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 22}</span><p class="muted">temas con 30+ preguntas reales</p></div>
        <div><span class="score">${release.addedQuestions || 22}</span><p class="muted">preguntas nuevas en v0.61</p></div>
        <div><span class="score">${release.cumulativeManualQuestions || 965}</span><p class="muted">preguntas manuales acumuladas</p></div>
      </div>
      <div class="progress-bar"><span style="width:${secondPassPct}%"></span></div>
      <p><strong>${secondPassPct}%</strong> de la segunda vuelta de Diputación completada sobre los 39 temas auditables. Estimación global de Diputación: <strong>84%</strong>.</p>
    </article>
    <article class="card compact" id="dipNextBlockV61">
      <h3>Siguiente refuerzo</h3>
      <p><strong>Tema 24:</strong> igualdad entre mujeres y hombres en Castilla-La Mancha y normativa estatal.</p>
      <p><strong>Después:</strong> bloque tributario, presupuestario, transparencia y protección de datos.</p>
      <p><strong>Tema 22:</strong> continúa bloqueado hasta verificar el Acuerdo Regulador y los Estatutos oficiales vigentes del OAPGT.</p>
    </article>`;
  }

  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const item = ope.globalTestAudit?.themes?.find(entry => Number(entry.number) === 23);
    return `<article class="card compact" id="dipTestStatusV61">
      <div class="pill-row"><span class="badge common">Tema 23: ${item?.content || 37}</span></div>
      <p><strong>Tema 23 reforzado:</strong> derechos y obligaciones, principios preventivos, formación, emergencias, vigilancia de la salud, servicios de prevención, Delegados de Prevención y Comité de Seguridad y Salud.</p>
    </article>`;
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () { original(); removeHistoricalCards(); if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards()); patchVersion(); };
  }
  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () { original(); removeHistoricalCards(); const html = testStatusCard(); if (html) content.insertAdjacentHTML('afterbegin', html); patchVersion(); };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () { original(); removeHistoricalCards(); if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards()); patchVersion(); };
  }
  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () { original(); patchVersion(); };
  }
  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();
