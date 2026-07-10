(() => {
  const VERSION = 'v0.44.0';

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
    return `<article class="card" id="dipV44Card">
      <div class="pill-row"><span class="badge common">Diputación v0.44</span><span class="badge">10 temas profundos</span></div>
      <h2>Procedimiento, régimen local y contratación</h2>
      <p>Ya están desarrollados en profundidad los temas 5–9 y 12–16. El segundo bloque incorpora régimen local, municipio, provincia, Diputación, entidades supramunicipales y contratación pública local.</p>
      <div class="grid three">
        <div><span class="score">10/40</span><p class="muted">temas desarrollados</p></div>
        <div><span class="score">150</span><p class="muted">preguntas manuales añadidas</p></div>
        <div><span class="score">${audit.targetThemes || 0}</span><p class="muted">temas con 30+ preguntas reales</p></div>
      </div>
      <p class="muted">Fuentes: Constitución, Ley 7/1985, TRLRHL, LOREG, Ley 39/2015, Ley 40/2015 y Ley 9/2017, revisadas en sus textos consolidados vigentes en julio de 2026.</p>
    </article>`;
  }

  function simulationCoverageCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const sim = ope.simulacros?.find(item => item.id === state.selectedSim) || ope.simulacros?.[0];
    const covered = sim?.audit?.coveredThemes ?? 0;
    const main = sim?.audit?.main ?? sim?.questions?.length ?? 0;
    const reserve = sim?.audit?.reserve ?? sim?.reserveQuestions?.length ?? 0;
    return `<article class="card compact" id="dipSimulationCoverageV44">
      <div class="pill-row"><span class="badge common">Solo preguntas reales</span><span class="badge area">${covered} temas representados</span><span class="badge">${main} + ${reserve}</span></div>
      <p>Los simulacros de Diputación ya se nutren de los diez temas cerrados. La representación crecerá al desarrollar empleo público, OAPGT, tributación, presupuesto y ofimática específica.</p>
    </article>`;
  }

  function nextBlockCard() {
    if (active()?.id !== 'diputacion-toledo-admin-2026') return '';
    return `<article class="card compact" id="dipNextBlockV44">
      <h3>Siguiente bloque</h3>
      <p><strong>Temas 17–22:</strong> empleo público de Castilla-La Mancha, derechos y situaciones, régimen disciplinario, contrato de trabajo, Seguridad Social, Acuerdo Regulador de Diputación y OAPGT.</p>
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
      document.getElementById('dipV44Card')?.remove();
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () {
      original();
      document.getElementById('dipSimulationCoverageV43')?.remove();
      document.getElementById('dipSimulationCoverageV44')?.remove();
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
      document.getElementById('dipV44Card')?.remove();
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();