(() => {
  const VERSION = 'v0.70.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function removeHistoricalCards() {
    document.querySelectorAll('[id^="carranqueV"], [id^="carranqueTestStatusV"], [id^="carranqueNextBlockV"]').forEach(node => node.remove());
  }

  function progressCard() {
    const ope = active();
    const audit = ope?.testAudit || {};
    const release = window.OPOWEB_CARRANQUE_V70 || {};
    return `<article class="card" id="carranqueV70Card">
      <div class="pill-row"><span class="badge common">Carranque v0.70</span><span class="badge">20 temas a 30+</span><span class="badge">80 + 5 reserva</span></div>
      <h2>Cobertura cuantitativa completa del programa</h2>
      <p>Los veinte temas disponen de banco específico. Se completan bienes locales, función pública, contratación, registro, órganos, hacienda, presupuesto, estabilidad y factura electrónica.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 20}</span><p class="muted">temas con 30+ preguntas</p></div>
        <div><span class="score">${release.totalReal || audit.totalReal || 600}</span><p class="muted">preguntas específicas</p></div>
        <div><span class="score">${release.practicalCases || 18}</span><p class="muted">supuestos temas 3–20</p></div>
      </div>
      <div class="progress-bar"><span style="width:100%"></span></div>
      <p><strong>100%</strong> de cobertura cuantitativa mínima. Estimación global de Carranque: <strong>79%</strong>, pendiente de soluciones desarrolladas, auditoría literal y validación visual.</p>
    </article>
    <article class="card compact" id="carranqueNextBlockV70">
      <h3>Cierre pendiente de Carranque</h3>
      <p>Desarrollar las soluciones de los 18 supuestos, revisar artículos y plazos, equilibrar dificultad y probar navegador, móvil, tablet y modo sin conexión.</p>
    </article>`;
  }

  function testCard() {
    const ope = active();
    if (ope?.id !== 'carranque-aux-admin-2026') return '';
    return `<article class="card compact" id="carranqueTestStatusV70">
      <div class="pill-row"><span class="badge common">20/20 temas a 30+</span><span class="badge">${ope.testAudit?.totalReal || 600} preguntas</span><span class="badge">3 simulacros 80 + 5</span></div>
      <p><strong>Segunda mitad completada:</strong> función pública local, bienes, contratos, registro, órganos municipales, hacienda, presupuesto, estabilidad, factura electrónica y morosidad.</p>
    </article>`;
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () {
      original();
      removeHistoricalCards();
      if (active()?.id === 'carranque-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard());
      patchVersion();
    };
  }
  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () {
      original();
      removeHistoricalCards();
      const html = testCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      removeHistoricalCards();
      if (active()?.id === 'carranque-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard());
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
