(() => {
  const VERSION = 'v0.50.0';

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
    return `<article class="card" id="dipV50Card">
      <div class="pill-row"><span class="badge common">Diputación v0.50</span><span class="badge">39 temas profundos</span></div>
      <h2>Primera vuelta prácticamente completa</h2>
      <p>Ya están desarrollados en profundidad todos los temas salvo el 22. El nuevo bloque cierra Constitución, derechos y fuentes, organización del Estado, Ley 40/2015, responsabilidad patrimonial y procedimiento administrativo local.</p>
      <div class="grid three">
        <div><span class="score">39/40</span><p class="muted">temas desarrollados</p></div>
        <div><span class="score">585</span><p class="muted">preguntas manuales añadidas</p></div>
        <div><span class="score">${audit.targetThemes || 0}</span><p class="muted">temas con 30+ preguntas reales</p></div>
      </div>
      <p class="muted">El tema 22 sigue expresamente excluido de los simulacros hasta disponer del Acuerdo Regulador y de los Estatutos oficiales vigentes del OAPGT.</p>
    </article>`;
  }

  function simulationCoverageCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const sim = ope.simulacros?.find(item => item.id === state.selectedSim) || ope.simulacros?.[0];
    const covered = sim?.audit?.coveredThemes ?? 0;
    const main = sim?.audit?.main ?? sim?.questions?.length ?? 0;
    const reserve = sim?.audit?.reserve ?? sim?.reserveQuestions?.length ?? 0;
    return `<article class="card compact" id="dipSimulationCoverageV50">
      <div class="pill-row"><span class="badge common">Solo preguntas reales</span><span class="badge area">${covered} temas representados</span><span class="badge">${main} + ${reserve}</span></div>
      <p>Los simulacros utilizan los 39 temas cerrados y excluyen el tema 22 y cualquier pregunta de plantilla.</p>
    </article>`;
  }

  function nextBlockCard() {
    if (active()?.id !== 'diputacion-toledo-admin-2026') return '';
    return `<article class="card compact" id="dipNextBlockV50">
      <h3>Siguiente fase de perfeccionamiento</h3>
      <p><strong>Banco:</strong> elevar progresivamente cada tema de 15–20 a 30–40 preguntas reales.</p>
      <p><strong>Práctico:</strong> redactar y resolver 20 supuestos completos con órgano, trámite, plazo, norma y consecuencia.</p>
      <p><strong>Tema 22:</strong> cerrar únicamente cuando estén verificadas las fuentes internas oficiales.</p>
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
      ['dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipV47Card', 'dipV48Card', 'dipV49Card', 'dipV50Card', 'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46', 'dipNextBlockV47', 'dipNextBlockV48', 'dipNextBlockV49', 'dipNextBlockV50'].forEach(id => document.getElementById(id)?.remove());
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () {
      original();
      ['dipSimulationCoverageV43', 'dipSimulationCoverageV44', 'dipSimulationCoverageV45', 'dipSimulationCoverageV46', 'dipSimulationCoverageV47', 'dipSimulationCoverageV48', 'dipSimulationCoverageV49', 'dipSimulationCoverageV50'].forEach(id => document.getElementById(id)?.remove());
      const html = simulationCoverageCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      ['dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipV47Card', 'dipV48Card', 'dipV49Card', 'dipV50Card', 'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46', 'dipNextBlockV47', 'dipNextBlockV48', 'dipNextBlockV49', 'dipNextBlockV50'].forEach(id => document.getElementById(id)?.remove());
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();