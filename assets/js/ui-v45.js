(() => {
  const VERSION = 'v0.45.0';

  const dipOpe = window.OPOSICIONES_DATA?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  const theme18 = dipOpe?.themes?.find(item => Number(item.number) === 18);
  theme18?.sections?.forEach(section => {
    section.paragraphs = (section.paragraphs || []).map(text => String(text).replace('violencia de género o sexual', 'violencia de género'));
  });

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
    return `<article class="card" id="dipV45Card">
      <div class="pill-row"><span class="badge common">Diputación v0.45</span><span class="badge">15 temas profundos</span></div>
      <h2>Empleo público, régimen disciplinario y contratación laboral</h2>
      <p>Ya están desarrollados en profundidad los temas 5–9, 12–21. El nuevo bloque incorpora acceso y pérdida de la relación de servicio, derechos, deberes y situaciones, disciplina, contrato de trabajo y Seguridad Social.</p>
      <div class="grid three">
        <div><span class="score">15/40</span><p class="muted">temas desarrollados</p></div>
        <div><span class="score">225</span><p class="muted">preguntas manuales añadidas</p></div>
        <div><span class="score">${audit.targetThemes || 0}</span><p class="muted">temas con 30+ preguntas reales</p></div>
      </div>
      <p class="muted">Fuentes de este bloque: Ley 4/2011 de Empleo Público de Castilla-La Mancha, TREBEP, Estatuto de los Trabajadores y Ley General de la Seguridad Social.</p>
    </article>`;
  }

  function simulationCoverageCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const sim = ope.simulacros?.find(item => item.id === state.selectedSim) || ope.simulacros?.[0];
    const covered = sim?.audit?.coveredThemes ?? 0;
    const main = sim?.audit?.main ?? sim?.questions?.length ?? 0;
    const reserve = sim?.audit?.reserve ?? sim?.reserveQuestions?.length ?? 0;
    return `<article class="card compact" id="dipSimulationCoverageV45">
      <div class="pill-row"><span class="badge common">Solo preguntas reales</span><span class="badge area">${covered} temas representados</span><span class="badge">${main} + ${reserve}</span></div>
      <p>Los simulacros se regeneran con los quince temas desarrollados y sin rellenar huecos mediante preguntas de plantilla.</p>
    </article>`;
  }

  function nextBlockCard() {
    if (active()?.id !== 'diputacion-toledo-admin-2026') return '';
    return `<article class="card compact" id="dipNextBlockV45">
      <h3>Siguiente bloque</h3>
      <p><strong>Tema 22:</strong> permanece pendiente hasta disponer del Acuerdo Regulador vigente y de los Estatutos oficiales vigentes del OAPGT.</p>
      <p><strong>Temas 23–27:</strong> prevención de riesgos, igualdad, obligación tributaria, recaudación y presupuesto local.</p>
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
      ['dipV43Card', 'dipV44Card', 'dipV45Card', 'dipNextBlockV44', 'dipNextBlockV45'].forEach(id => document.getElementById(id)?.remove());
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () {
      original();
      ['dipSimulationCoverageV43', 'dipSimulationCoverageV44', 'dipSimulationCoverageV45'].forEach(id => document.getElementById(id)?.remove());
      const html = simulationCoverageCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      ['dipV43Card', 'dipV44Card', 'dipV45Card', 'dipNextBlockV44', 'dipNextBlockV45'].forEach(id => document.getElementById(id)?.remove());
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();