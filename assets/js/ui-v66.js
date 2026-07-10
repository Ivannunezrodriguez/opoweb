(() => {
  const VERSION = 'v0.66.0';

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
    const release = window.OPOWEB_UC3M_V66 || {};
    return `<article class="card" id="uc3mV66Card">
      <div class="pill-row"><span class="badge common">UC3M v0.66</span><span class="badge">20 temas a 30+</span><span class="badge">Simulacros 70 + 5</span></div>
      <h2>Banco mínimo completo en los 20 temas</h2>
      <p>Se han reforzado once temas que permanecían en 20 preguntas y se han regenerado los simulacros con 70 preguntas y 5 reservas.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 20}</span><p class="muted">temas con 30+ preguntas</p></div>
        <div><span class="score">${release.addedQuestions || 110}</span><p class="muted">preguntas nuevas</p></div>
        <div><span class="score">${release.totalQuestions || 600}</span><p class="muted">preguntas válidas acumuladas</p></div>
      </div>
      <div class="progress-bar"><span style="width:100%"></span></div>
      <p><strong>100%</strong> de cobertura cuantitativa mínima. Estimación global de UC3M: <strong>78%</strong>, pendiente de cerrar literalidad interna, presupuesto, normativa académica y auditoría final.</p>
    </article>
    <article class="card compact" id="uc3mNextBlockV66">
      <h3>Cierre pendiente de UC3M</h3>
      <p>Estatutos, presupuesto y bases de ejecución, normativa de matrícula y permanencia, evaluación, admisión propia, contratación interna y revisión transversal de literalidad.</p>
    </article>`;
  }

  function testCard() {
    const ope = active();
    if (ope?.id !== 'uc3m-aux-admin-2026') return '';
    return `<article class="card compact" id="uc3mTestStatusV66">
      <div class="pill-row"><span class="badge common">20/20 temas a 30+</span><span class="badge">70 + 5 reserva</span></div>
      <p><strong>Refuerzo v0.66:</strong> Constitución, organización pública, administración electrónica, protección de datos, personal, prevención, LOSU, enseñanzas, admisión y contratación.</p>
    </article>`;
  }

  if (typeof renderSidebar === 'function') { const original = renderSidebar; renderSidebar = function () { original(); patchVersion(); }; }
  if (typeof renderProceso === 'function') { const original = renderProceso; renderProceso = function () { original(); removeUc3mHistoricalCards(); if (active()?.id === 'uc3m-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard()); patchVersion(); }; }
  if (typeof renderTests === 'function') { const original = renderTests; renderTests = function () { original(); removeUc3mHistoricalCards(); const html = testCard(); if (html) content.insertAdjacentHTML('afterbegin', html); patchVersion(); }; }
  if (typeof renderProgreso === 'function') { const original = renderProgreso; renderProgreso = function () { original(); removeUc3mHistoricalCards(); if (active()?.id === 'uc3m-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard()); patchVersion(); }; }
  if (typeof renderSimulacros === 'function') { const original = renderSimulacros; renderSimulacros = function () { original(); patchVersion(); }; }
  if (typeof renderAll === 'function') { try { renderAll(); } catch (_) { patchVersion(); } } else patchVersion();
})();
