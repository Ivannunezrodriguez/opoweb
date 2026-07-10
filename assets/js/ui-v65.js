(() => {
  const VERSION = 'v0.65.0';
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
    const release = window.OPOWEB_DIPUTACION_V65 || {};
    return `<article class="card" id="dipV65Card">
      <div class="pill-row"><span class="badge common">Diputación v0.65</span><span class="badge">40 temas a 30+</span><span class="badge warning">1 brecha documental</span></div>
      <h2>Tema 22 incorporado con control de fuentes</h2>
      <p>Se integran el Acuerdo Regulador, sus modificaciones de 2026 y el funcionamiento electrónico oficial del OAPGT. La literalidad de los Estatutos vigentes continúa señalada como brecha documental.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 40}</span><p class="muted">temas con 30+ preguntas</p></div>
        <div><span class="score">${release.addedQuestions || 32}</span><p class="muted">preguntas nuevas en v0.65</p></div>
        <div><span class="score">${release.cumulativeManualQuestions || 1269}</span><p class="muted">preguntas manuales acumuladas</p></div>
      </div>
      <div class="progress-bar"><span style="width:100%"></span></div>
      <p><strong>100%</strong> de cobertura cuantitativa del programa. Diputación se mantiene en <strong>98%</strong> hasta verificar los Estatutos del OAPGT y cerrar la auditoría técnica.</p>
    </article>
    <article class="card compact" id="dipNextBlockV65">
      <h3>Cierre pendiente</h3>
      <p><strong>Documental:</strong> publicación oficial vigente de los Estatutos del OAPGT.</p>
      <p><strong>Técnico:</strong> auditoría transversal, pruebas de navegador, validación visual y consolidación de módulos históricos.</p>
    </article>`;
  }
  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const item = ope.globalTestAudit?.themes?.find(entry => Number(entry.number) === 22);
    return `<article class="card compact" id="dipTestStatusV65">
      <div class="pill-row"><span class="badge common">Tema 22: ${item?.content || 32}</span><span class="badge warning">Estatutos OAPGT pendientes</span></div>
      <p><strong>Cobertura verificada:</strong> Acuerdo Regulador, vigencia, derechos, Comisión de Seguimiento, clasificación, jornada, modificaciones de 2026, sede y registro electrónico del OAPGT.</p>
    </article>`;
  }
  if (typeof renderSidebar === 'function') { const original = renderSidebar; renderSidebar = function () { original(); patchVersion(); }; }
  if (typeof renderProceso === 'function') { const original = renderProceso; renderProceso = function () { original(); removeHistoricalCards(); if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards()); patchVersion(); }; }
  if (typeof renderTests === 'function') { const original = renderTests; renderTests = function () { original(); removeHistoricalCards(); const html = testStatusCard(); if (html) content.insertAdjacentHTML('afterbegin', html); patchVersion(); }; }
  if (typeof renderProgreso === 'function') { const original = renderProgreso; renderProgreso = function () { original(); removeHistoricalCards(); if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards()); patchVersion(); }; }
  if (typeof renderSimulacros === 'function') { const original = renderSimulacros; renderSimulacros = function () { original(); patchVersion(); }; }
  if (typeof renderAll === 'function') { try { renderAll(); } catch (_) { patchVersion(); } } else patchVersion();
})();
