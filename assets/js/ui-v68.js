(() => {
  const VERSION = 'v0.68.0';

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
    const release = window.OPOWEB_CARRANQUE_V68 || {};
    const completed = release.targetThemes || 10;
    const pct = Math.round((completed / 20) * 100);
    return `<article class="card" id="carranqueV68Card">
      <div class="pill-row"><span class="badge common">Carranque v0.68</span><span class="badge">Temas 1–10</span><span class="badge">Práctico 3–20</span></div>
      <h2>Primera mitad del programa reforzada</h2>
      <p>Los diez primeros temas disponen de banco específico. Se han desarrollado especialmente intervención local, licencias, servicios públicos, ordenanzas y reglamentos.</p>
      <div class="grid three">
        <div><span class="score">${completed}</span><p class="muted">temas con 30 preguntas</p></div>
        <div><span class="score">${audit.totalReal || release.totalReal || 300}</span><p class="muted">preguntas reales detectadas</p></div>
        <div><span class="score">${release.practicalCases || 8}</span><p class="muted">supuestos temas 3–10</p></div>
      </div>
      <div class="progress-bar"><span style="width:${pct}%"></span></div>
      <p><strong>${pct}%</strong> del objetivo mínimo de banco por temas. Estimación global de Carranque: <strong>52%</strong>.</p>
    </article>
    <article class="card compact" id="carranqueNextBlockV68">
      <h3>Siguiente bloque de Carranque</h3>
      <p><strong>Temas 11–20:</strong> función pública local, bienes, contratación, registro, órganos, hacienda, presupuesto, estabilidad y modernización electrónica.</p>
      <p>Después se generarán simulacros oficiales de 80 preguntas + 5 reservas.</p>
    </article>`;
  }

  function testCard() {
    const ope = active();
    if (ope?.id !== 'carranque-aux-admin-2026') return '';
    return `<article class="card compact" id="carranqueTestStatusV68">
      <div class="pill-row"><span class="badge common">10/20 temas a 30</span><span class="badge">8 supuestos</span></div>
      <p><strong>Bloque reforzado:</strong> Constitución, fuentes, Leyes 39/2015 y 40/2015, revisión, responsabilidad, sancionador, actividad local, municipio y ordenanzas.</p>
    </article>`;
  }

  if (typeof renderSidebar === 'function') { const original = renderSidebar; renderSidebar = function () { original(); patchVersion(); }; }
  if (typeof renderProceso === 'function') { const original = renderProceso; renderProceso = function () { original(); removeHistoricalCards(); if (active()?.id === 'carranque-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard()); patchVersion(); }; }
  if (typeof renderTests === 'function') { const original = renderTests; renderTests = function () { original(); removeHistoricalCards(); const html = testCard(); if (html) content.insertAdjacentHTML('afterbegin', html); patchVersion(); }; }
  if (typeof renderProgreso === 'function') { const original = renderProgreso; renderProgreso = function () { original(); removeHistoricalCards(); if (active()?.id === 'carranque-aux-admin-2026') content.insertAdjacentHTML('beforeend', progressCard()); patchVersion(); }; }
  if (typeof renderSimulacros === 'function') { const original = renderSimulacros; renderSimulacros = function () { original(); patchVersion(); }; }
  if (typeof renderAll === 'function') { try { renderAll(); } catch (_) { patchVersion(); } } else patchVersion();
})();
