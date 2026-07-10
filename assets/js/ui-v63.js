(() => {
  const VERSION = 'v0.63.0';

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
    const release = window.OPOWEB_DIPUTACION_V63 || {};
    const secondPassPct = Math.round((30 / 39) * 100);
    return `<article class="card" id="dipV63Card">
      <div class="pill-row"><span class="badge common">Diputación v0.63</span><span class="badge">Segunda vuelta</span><span class="badge">30 temas a 30+</span></div>
      <h2>Bloque económico, datos y confianza digital reforzado</h2>
      <p>Los temas 27 a 31 incorporan presupuesto local, protección de datos, transparencia, buen gobierno, IBI, IAE, IVTM, IIVTNU, tasas y servicios electrónicos de confianza.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 30}</span><p class="muted">temas con 30+ preguntas reales</p></div>
        <div><span class="score">${release.addedQuestions || 75}</span><p class="muted">preguntas nuevas en v0.63</p></div>
        <div><span class="score">${release.cumulativeManualQuestions || 1102}</span><p class="muted">preguntas manuales acumuladas</p></div>
      </div>
      <div class="progress-bar"><span style="width:${secondPassPct}%"></span></div>
      <p><strong>${secondPassPct}%</strong> de la segunda vuelta de Diputación completada sobre los 39 temas auditables. Estimación global de Diputación: <strong>92%</strong>.</p>
    </article>
    <article class="card compact" id="dipNextBlockV63">
      <h3>Siguiente refuerzo</h3>
      <p><strong>Temas 32–40:</strong> Windows 11, Edge, GroupWise 24, impresión y escaneado, Writer, Calc, Base, Impress, ordenador personal y periféricos.</p>
      <p><strong>Tema 22:</strong> continúa condicionado a las fuentes internas oficiales de Diputación y OAPGT.</p>
    </article>`;
  }

  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const audit = ope.globalTestAudit || {};
    const counts = [27, 28, 29, 30, 31].map(number => audit.themes?.find(entry => Number(entry.number) === number)?.content || 0);
    return `<article class="card compact" id="dipTestStatusV63">
      <div class="pill-row">${counts.map((count, index) => `<span class="badge common">T${index + 27}: ${count}</span>`).join('')}</div>
      <p><strong>Bloque reforzado:</strong> presupuesto, datos, transparencia, buen gobierno, impuestos locales, tasas, firma electrónica, certificados y prestadores de confianza.</p>
    </article>`;
  }

  if (typeof renderSidebar === 'function') { const original = renderSidebar; renderSidebar = function () { original(); patchVersion(); }; }
  if (typeof renderProceso === 'function') { const original = renderProceso; renderProceso = function () { original(); removeHistoricalCards(); if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards()); patchVersion(); }; }
  if (typeof renderTests === 'function') { const original = renderTests; renderTests = function () { original(); removeHistoricalCards(); const html = testStatusCard(); if (html) content.insertAdjacentHTML('afterbegin', html); patchVersion(); }; }
  if (typeof renderProgreso === 'function') { const original = renderProgreso; renderProgreso = function () { original(); removeHistoricalCards(); if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards()); patchVersion(); }; }
  if (typeof renderSimulacros === 'function') { const original = renderSimulacros; renderSimulacros = function () { original(); patchVersion(); }; }
  if (typeof renderAll === 'function') { try { renderAll(); } catch (_) { patchVersion(); } } else patchVersion();
})();
