(() => {
  const VERSION = 'v0.46.0';

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
    return `<article class="card" id="dipV46Card">
      <div class="pill-row"><span class="badge common">Diputación v0.46</span><span class="badge">20 temas profundos</span></div>
      <h2>Prevención, igualdad, tributación, recaudación y presupuesto</h2>
      <p>Ya están desarrollados en profundidad los temas 5–9, 12–21 y 23–27. El tema 22 continúa bloqueado hasta disponer de sus fuentes internas oficiales.</p>
      <div class="grid three">
        <div><span class="score">20/40</span><p class="muted">temas desarrollados</p></div>
        <div><span class="score">300</span><p class="muted">preguntas manuales añadidas</p></div>
        <div><span class="score">${audit.targetThemes || 0}</span><p class="muted">temas con 30+ preguntas reales</p></div>
      </div>
      <p class="muted">Fuentes de este bloque: Ley 31/1995, Ley Orgánica 3/2007, Ley 12/2010 de Castilla-La Mancha, Ley General Tributaria, TRLRHL, Reglamento General de Recaudación y Real Decreto 500/1990.</p>
    </article>`;
  }

  function simulationCoverageCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const sim = ope.simulacros?.find(item => item.id === state.selectedSim) || ope.simulacros?.[0];
    const covered = sim?.audit?.coveredThemes ?? 0;
    const main = sim?.audit?.main ?? sim?.questions?.length ?? 0;
    const reserve = sim?.audit?.reserve ?? sim?.reserveQuestions?.length ?? 0;
    return `<article class="card compact" id="dipSimulationCoverageV46">
      <div class="pill-row"><span class="badge common">Solo preguntas reales</span><span class="badge area">${covered} temas representados</span><span class="badge">${main} + ${reserve}</span></div>
      <p>Los simulacros se regeneran con los veinte temas desarrollados y mantienen fuera las preguntas de plantilla.</p>
    </article>`;
  }

  function nextBlockCard() {
    if (active()?.id !== 'diputacion-toledo-admin-2026') return '';
    return `<article class="card compact" id="dipNextBlockV46">
      <h3>Siguiente bloque</h3>
      <p><strong>Temas 28–31:</strong> protección de datos y transparencia, IBI e IAE, IVTM e IIVTNU, tasas y firma electrónica.</p>
      <p><strong>Tema 22:</strong> seguirá pendiente hasta obtener Acuerdo Regulador y Estatutos oficiales vigentes del OAPGT.</p>
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
      ['dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46'].forEach(id => document.getElementById(id)?.remove());
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () {
      original();
      ['dipSimulationCoverageV43', 'dipSimulationCoverageV44', 'dipSimulationCoverageV45', 'dipSimulationCoverageV46'].forEach(id => document.getElementById(id)?.remove());
      const html = simulationCoverageCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      ['dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46'].forEach(id => document.getElementById(id)?.remove());
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();