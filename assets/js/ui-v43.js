(() => {
  const VERSION = 'v0.43.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function phaseCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const audit = ope.globalTestAudit || {};
    return `<article class="card" id="dipV43Card">
      <div class="pill-row"><span class="badge common">Fase Diputación v0.43 completada</span><span class="badge">Temas 5–9</span></div>
      <h2>Procedimiento administrativo y administración electrónica</h2>
      <p>Se han desarrollado en profundidad los temas 5, 6, 7, 8 y 9 y se han añadido 75 preguntas manuales. Las preguntas de plantilla de estos cinco temas han sido retiradas.</p>
      <div class="grid three">
        <div><span class="score">5</span><p class="muted">temas revisados</p></div>
        <div><span class="score">75</span><p class="muted">preguntas manuales nuevas</p></div>
        <div><span class="score">${audit.targetThemes || 0}</span><p class="muted">temas totales con 30+</p></div>
      </div>
      <p class="muted">Fuentes: textos consolidados del BOE de las Leyes 39/2015 y 40/2015. Siguiente bloque: régimen local, municipio, provincia y contratación.</p>
    </article>`;
  }

  function simulationCoverageCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const sim = ope.simulacros?.find(item => item.id === state.selectedSim) || ope.simulacros?.[0];
    const covered = sim?.audit?.coveredThemes ?? 0;
    return `<article class="card compact" id="dipSimulationCoverageV43">
      <div class="pill-row"><span class="badge common">Preguntas reales únicamente</span><span class="badge area">${covered} temas representados</span></div>
      <p>Este simulacro excluye las preguntas de plantilla. La representación temática aumentará a medida que se cierre cada bloque de Diputación.</p>
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
      document.getElementById('dipV43Card')?.remove();
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html);
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () {
      original();
      document.getElementById('dipSimulationCoverageV43')?.remove();
      const html = simulationCoverageCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      document.getElementById('dipV43Card')?.remove();
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html);
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();