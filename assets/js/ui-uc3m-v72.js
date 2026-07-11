(() => {
  const VERSION = 'v0.72.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function removeHistoricalCards() {
    document.querySelectorAll('[id^="uc3mV"], [id^="uc3mTestStatusV"], [id^="uc3mNextBlockV"]').forEach(node => node.remove());
  }

  function progressCard() {
    const ope = active();
    const release = window.OPOWEB_UC3M_V72 || {};
    return `<article class="card" id="uc3mV72Card">
      <div class="pill-row"><span class="badge common">UC3M v0.72</span><span class="badge">banco depurado</span><span class="badge area">0 plantillas genéricas</span></div>
      <h2>Auditoría real del banco UC3M</h2>
      <p>Se han retirado las preguntas de método que inflaban artificialmente el recuento y se ha reconstruido el banco mediante contenido específico y reutilización normativa controlada.</p>
      <div class="grid three">
        <div><span class="score">${release.targetThemes || 14}/20</span><p class="muted">temas con 30 preguntas reales</p></div>
        <div><span class="score">${release.totalQuestions || 476}</span><p class="muted">preguntas válidas</p></div>
        <div><span class="score">64%</span><p class="muted">avance estimado UC3M</p></div>
      </div>
      <div class="progress-bar"><span style="width:64%"></span></div>
      <p><strong>Mínimo actual:</strong> ${release.minimumQuestions || 6} preguntas en el tema 7. Los temas 13–17 conservan al menos diez preguntas institucionales específicas.</p>
      <p class="muted">El porcentaje mide desarrollo verificable del contenido y no probabilidad de aprobar.</p>
    </article>
    <article class="card compact" id="uc3mNextBlockV72">
      <h3>Pendiente real de UC3M</h3>
      <p>Ampliar el tema 7 de transparencia y los temas universitarios 13–17; incorporar presupuesto y bases de ejecución, matrícula, permanencia, evaluación, admisión y delegaciones internas vigentes.</p>
    </article>`;
  }

  function testCard() {
    if (active()?.id !== 'uc3m-aux-admin-2026') return '';
    const release = window.OPOWEB_UC3M_V72 || {};
    return `<article class="card compact" id="uc3mTestStatusV72">
      <div class="pill-row"><span class="badge common">${release.totalQuestions || 476} preguntas reales</span><span class="badge">${release.targetThemes || 14}/20 temas a 30</span><span class="badge">3 simulacros 70 + 5</span></div>
      <p><strong>Corrección v0.72:</strong> eliminadas 218 preguntas genéricas y 198 repeticiones internas originadas por las plantillas iniciales.</p>
    </article>`;
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () {
      original(); removeHistoricalCards();
      if (active()?.id === 'uc3m-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard());
      patchVersion();
    };
  }
  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () {
      original(); removeHistoricalCards();
      const html = testCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original(); removeHistoricalCards();
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
