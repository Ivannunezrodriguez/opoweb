(() => {
  const VERSION = 'v0.67.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function removeUc3mHistoricalCards() {
    document.querySelectorAll('[id^="uc3mV"], [id^="uc3mTestStatusV"], [id^="uc3mNextBlockV"]').forEach(node => node.remove());
  }

  function progressCard() {
    const ope = active();
    const audit = ope?.testAudit || {};
    const release = window.OPOWEB_UC3M_V67 || {};
    return `<article class="card" id="uc3mV67Card">
      <div class="pill-row"><span class="badge common">UC3M v0.67</span><span class="badge">Estatutos integrados</span><span class="badge">20 temas a 30+</span></div>
      <h2>Normativa institucional incorporada</h2>
      <p>El tema 15 queda desarrollado con el texto refundido oficial de los Estatutos. También se incorpora la capa estatutaria de contratación y el inventario oficial de administración electrónica, seguridad, órganos y delegaciones.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 20}/20</span><p class="muted">temas con 30+ preguntas</p></div>
        <div><span class="score">${release.totalQuestions || audit.totalQuestions || 615}</span><p class="muted">preguntas válidas</p></div>
        <div><span class="score">84%</span><p class="muted">avance global estimado UC3M</p></div>
      </div>
      <div class="progress-bar"><span style="width:84%"></span></div>
      <p class="muted">El 84% es una estimación de preparación del contenido, no una probabilidad de aprobar.</p>
    </article>
    <article class="card compact" id="uc3mNextBlockV67">
      <h3>Documentación ya cerrada</h3>
      <p><strong>Estatutos:</strong> Defensor Universitario, servicios, régimen económico-financiero, contratación estatutaria y reforma.</p>
      <p><strong>Organización:</strong> portal de órganos, delegaciones de competencia y firma.</p>
      <p><strong>Administración electrónica:</strong> reglamento modificado en 2025, gestión documental 2024, seguridad 2025 y normativa TIC.</p>
      <h3>Pendiente real</h3>
      <p>Presupuesto vigente y bases de ejecución; matrícula, permanencia y evaluación; reglas anuales de admisión; extracción literal completa de la delegación de contratación; auditoría transversal final.</p>
    </article>`;
  }

  function testCard() {
    const ope = active();
    if (ope?.id !== 'uc3m-aux-admin-2026') return '';
    const release = window.OPOWEB_UC3M_V67 || {};
    return `<article class="card compact" id="uc3mTestStatusV67">
      <div class="pill-row"><span class="badge common">Tema 15 estatutario cerrado</span><span class="badge">Tema 20 con capa UC3M</span><span class="badge">70 + 5 reserva</span></div>
      <p><strong>Refuerzo v0.67:</strong> preguntas específicas sobre Defensor, servicios, presupuesto estatutario, reforma, órgano de contratación, mesa y Consejo Social. Total actual: ${release.totalQuestions || 615} preguntas.</p>
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
      removeUc3mHistoricalCards();
      if (active()?.id === 'uc3m-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard());
      patchVersion();
    };
  }
  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () {
      original();
      removeUc3mHistoricalCards();
      const html = testCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      removeUc3mHistoricalCards();
      if (active()?.id === 'uc3m-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard());
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