(() => {
  const VERSION = 'v0.64.0';

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
    const release = window.OPOWEB_DIPUTACION_V64 || {};
    return `<article class="card" id="dipV64Card">
      <div class="pill-row"><span class="badge common">Diputación v0.64</span><span class="badge">Segunda vuelta auditable completa</span><span class="badge">39 temas a 30+</span></div>
      <h2>Bloque informático y ofimático reforzado</h2>
      <p>Los temas 32 a 40 incorporan operaciones reales de Windows 11, Edge, GroupWise, impresión, digitalización, Writer, Calc, Base, Impress, hardware y periféricos.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 39}</span><p class="muted">temas auditables con 30+ preguntas</p></div>
        <div><span class="score">${release.addedQuestions || 135}</span><p class="muted">preguntas nuevas en v0.64</p></div>
        <div><span class="score">${release.cumulativeManualQuestions || 1237}</span><p class="muted">preguntas manuales acumuladas</p></div>
      </div>
      <div class="progress-bar"><span style="width:100%"></span></div>
      <p><strong>100%</strong> de la segunda vuelta de los 39 temas auditables. La convocatoria completa se mantiene en <strong>96%</strong> porque falta el tema 22 y la auditoría técnica final.</p>
    </article>
    <article class="card compact" id="dipNextBlockV64">
      <h3>Bloque pendiente para cerrar Diputación</h3>
      <p><strong>Tema 22:</strong> Acuerdo Regulador de condiciones de trabajo y Estatutos, organización y competencias del OAPGT.</p>
      <p><strong>Cierre técnico:</strong> auditoría transversal, pruebas de navegador y consolidación de capas históricas.</p>
    </article>`;
  }

  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const audit = ope.globalTestAudit || {};
    const counts = Array.from({ length: 9 }, (_, index) => index + 32).map(number => audit.themes?.find(entry => Number(entry.number) === number)?.content || 0);
    return `<article class="card compact" id="dipTestStatusV64">
      <div class="pill-row">${counts.map((count, index) => `<span class="badge common">T${index + 32}: ${count}</span>`).join('')}</div>
      <p><strong>Informática completada:</strong> todos los temas 32–40 alcanzan al menos 30 preguntas específicas y justificadas.</p>
    </article>`;
  }

  if (typeof renderSidebar === 'function') { const original = renderSidebar; renderSidebar = function () { original(); patchVersion(); }; }
  if (typeof renderProceso === 'function') { const original = renderProceso; renderProceso = function () { original(); removeHistoricalCards(); if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards()); patchVersion(); }; }
  if (typeof renderTests === 'function') { const original = renderTests; renderTests = function () { original(); removeHistoricalCards(); const html = testStatusCard(); if (html) content.insertAdjacentHTML('afterbegin', html); patchVersion(); }; }
  if (typeof renderProgreso === 'function') { const original = renderProgreso; renderProgreso = function () { original(); removeHistoricalCards(); if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards()); patchVersion(); }; }
  if (typeof renderSimulacros === 'function') { const original = renderSimulacros; renderSimulacros = function () { original(); patchVersion(); }; }
  if (typeof renderAll === 'function') { try { renderAll(); } catch (_) { patchVersion(); } } else patchVersion();
})();
