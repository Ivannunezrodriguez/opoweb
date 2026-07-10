(() => {
  const VERSION = 'v0.60.0';

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
    const release = window.OPOWEB_DIPUTACION_V60 || {};
    const secondPassPct = Math.round((21 / 39) * 100);
    return `<article class="card" id="dipV60Card">
      <div class="pill-row"><span class="badge common">Diputación v0.60</span><span class="badge">Segunda vuelta</span><span class="badge">Temas 1–21 a 30+</span></div>
      <h2>Modalidades contractuales y Seguridad Social</h2>
      <p>El tema 21 incorpora contratos formativos, duración determinada, fijo-discontinuo, estructura del sistema, afiliación, cotización, acción protectora y accidente de trabajo.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 21}</span><p class="muted">temas con 30+ preguntas reales</p></div>
        <div><span class="score">${release.addedQuestions || 36}</span><p class="muted">preguntas nuevas en v0.60</p></div>
        <div><span class="score">${release.cumulativeManualQuestions || 943}</span><p class="muted">preguntas manuales acumuladas</p></div>
      </div>
      <div class="progress-bar"><span style="width:${secondPassPct}%"></span></div>
      <p><strong>${secondPassPct}%</strong> de la segunda vuelta de Diputación completada sobre los 39 temas auditables. Estimación global de Diputación: <strong>83%</strong>.</p>
    </article>
    <article class="card compact" id="dipNextBlockV60">
      <h3>Siguiente refuerzo</h3>
      <p><strong>Temas 23–31:</strong> continuación del bloque jurídico y administrativo posterior al tema interno pendiente.</p>
      <p><strong>Después:</strong> bloque informático y ofimático 32–40.</p>
      <p><strong>Tema 22:</strong> continúa bloqueado hasta verificar el Acuerdo Regulador y los Estatutos oficiales vigentes del OAPGT.</p>
    </article>`;
  }

  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const item = ope.globalTestAudit?.themes?.find(entry => Number(entry.number) === 21);
    return `<article class="card compact" id="dipTestStatusV60">
      <div class="pill-row"><span class="badge common">Tema 21: ${item?.content || 51}</span></div>
      <p><strong>Tema 21 reforzado:</strong> formación en alternancia, práctica profesional, contratos temporales, sustitución, fijo-discontinuo, afiliación, altas, cotización, acción protectora y contingencias profesionales.</p>
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
