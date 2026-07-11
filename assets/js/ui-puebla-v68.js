(() => {
  const VERSION = 'v0.68.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function removeHistoricalCards() {
    document.querySelectorAll('[id^="pueblaV"], [id^="pueblaTestStatusV"], [id^="pueblaNextBlockV"]').forEach(node => node.remove());
  }

  function progressCard() {
    const ope = active();
    const audit = ope?.testAudit || {};
    const release = window.OPOWEB_PUEBLA_V68 || {};
    return `<article class="card" id="pueblaV68Card">
      <div class="pill-row"><span class="badge common">La Puebla v0.68</span><span class="badge">19 temas a 30</span><span class="badge">50 + 5 reserva</span></div>
      <h2>Banco genérico sustituido por contenido específico</h2>
      <p>Los diecinueve temas disponen de preguntas reutilizadas de bloques normativos y ofimáticos auditados, filtrando referencias ajenas a la convocatoria.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 19}</span><p class="muted">temas con 30 preguntas</p></div>
        <div><span class="score">${release.totalQuestions || 570}</span><p class="muted">preguntas específicas</p></div>
        <div><span class="score">${release.practicalCases || 20}</span><p class="muted">supuestos prácticos</p></div>
      </div>
      <div class="progress-bar"><span style="width:74%"></span></div>
      <p><strong>74%</strong> de avance estimado de La Puebla. La cobertura cuantitativa mínima está completa; quedan literalidad, soluciones prácticas extensas y auditoría final.</p>
    </article>
    <article class="card compact" id="pueblaNextBlockV68">
      <h3>Cierre pendiente de La Puebla</h3>
      <p>Revisión artículo por artículo, soluciones desarrolladas de los 20 supuestos, equilibrio de dificultad y validación en navegador y móvil.</p>
    </article>`;
  }

  function testCard() {
    const ope = active();
    if (ope?.id !== 'puebla-aux-admin-2026') return '';
    return `<article class="card compact" id="pueblaTestStatusV68">
      <div class="pill-row"><span class="badge common">19/19 temas a 30</span><span class="badge">570 preguntas</span><span class="badge">3 simulacros 50 + 5</span></div>
      <p><strong>Banco común reutilizado:</strong> Constitución, procedimiento, régimen local, empleo público, prevención, igualdad, datos, tributación, administración electrónica e informática.</p>
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
      if (active()?.id === 'puebla-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard());
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
      if (active()?.id === 'puebla-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard());
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
