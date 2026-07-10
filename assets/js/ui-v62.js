(() => {
  const VERSION = 'v0.62.0';

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
    const release = window.OPOWEB_DIPUTACION_V62 || {};
    const secondPassPct = Math.round((25 / 39) * 100);
    return `<article class="card" id="dipV62Card">
      <div class="pill-row"><span class="badge common">Diputación v0.62</span><span class="badge">Segunda vuelta</span><span class="badge">25 temas a 30+</span></div>
      <h2>Igualdad y bloque tributario reforzados</h2>
      <p>Los temas 24 a 26 incorporan igualdad estatal y autonómica, obligación tributaria, sujetos, gestión, extinción, recaudación, aplazamiento, apremio y revisión.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 25}</span><p class="muted">temas con 30+ preguntas reales</p></div>
        <div><span class="score">${release.addedQuestions || 62}</span><p class="muted">preguntas nuevas en v0.62</p></div>
        <div><span class="score">${release.cumulativeManualQuestions || 1027}</span><p class="muted">preguntas manuales acumuladas</p></div>
      </div>
      <div class="progress-bar"><span style="width:${secondPassPct}%"></span></div>
      <p><strong>${secondPassPct}%</strong> de la segunda vuelta de Diputación completada sobre los 39 temas auditables. Estimación global de Diputación: <strong>87%</strong>.</p>
    </article>
    <article class="card compact" id="dipNextBlockV62">
      <h3>Siguiente refuerzo</h3>
      <p><strong>Temas 27–31:</strong> presupuesto local, protección de datos y transparencia, impuestos locales y servicios electrónicos de confianza.</p>
      <p><strong>Después:</strong> bloque Windows 11, GroupWise, LibreOffice 24 e informática básica.</p>
      <p><strong>Tema 22:</strong> continúa bloqueado hasta verificar el Acuerdo Regulador y los Estatutos oficiales vigentes del OAPGT.</p>
    </article>`;
  }

  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const audit = ope.globalTestAudit || {};
    const counts = [24, 25, 26].map(number => audit.themes?.find(entry => Number(entry.number) === number)?.content || 0);
    return `<article class="card compact" id="dipTestStatusV62">
      <div class="pill-row"><span class="badge common">Tema 24: ${counts[0]}</span><span class="badge common">Tema 25: ${counts[1]}</span><span class="badge common">Tema 26: ${counts[2]}</span></div>
      <p><strong>Bloque reforzado:</strong> igualdad de trato, transversalidad, planes de igualdad, obligaciones y sujetos tributarios, gestión, prescripción, recaudación, apremio y revisión.</p>
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
