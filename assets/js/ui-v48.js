(() => {
  const VERSION = 'v0.48.0';

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
    return `<article class="card" id="dipV48Card">
      <div class="pill-row"><span class="badge common">Diputación v0.48</span><span class="badge">29 temas profundos</span></div>
      <h2>Windows 11, Edge, GroupWise, Writer y Calc</h2>
      <p>Ya están desarrollados en profundidad los temas 5–9, 12–21 y 23–36. El nuevo bloque incorpora gestión de archivos y unidades, navegación, correo, calendario, impresión, escaneado, documentos de texto y hojas de cálculo.</p>
      <div class="grid three">
        <div><span class="score">29/40</span><p class="muted">temas desarrollados</p></div>
        <div><span class="score">435</span><p class="muted">preguntas manuales añadidas</p></div>
        <div><span class="score">${audit.targetThemes || 0}</span><p class="muted">temas con 30+ preguntas reales</p></div>
      </div>
      <p class="muted">Fuentes: documentación oficial de Microsoft Windows 11 y Edge, OpenText GroupWise 24 y ayuda oficial de LibreOffice Writer y Calc.</p>
    </article>`;
  }

  function simulationCoverageCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const sim = ope.simulacros?.find(item => item.id === state.selectedSim) || ope.simulacros?.[0];
    const covered = sim?.audit?.coveredThemes ?? 0;
    const main = sim?.audit?.main ?? sim?.questions?.length ?? 0;
    const reserve = sim?.audit?.reserve ?? sim?.reserveQuestions?.length ?? 0;
    return `<article class="card compact" id="dipSimulationCoverageV48">
      <div class="pill-row"><span class="badge common">Solo preguntas reales</span><span class="badge area">${covered} temas representados</span><span class="badge">${main} + ${reserve}</span></div>
      <p>Los simulacros se regeneran con los veintinueve temas desarrollados y mantienen fuera las preguntas de plantilla.</p>
    </article>`;
  }

  function nextBlockCard() {
    if (active()?.id !== 'diputacion-toledo-admin-2026') return '';
    return `<article class="card compact" id="dipNextBlockV48">
      <h3>Siguiente bloque</h3>
      <p><strong>Temas 37–40:</strong> LibreOffice Base, LibreOffice Impress, componentes del ordenador y periféricos.</p>
      <p><strong>Después:</strong> temas 1–4, 10 y 11; tema 22 cuando existan fuentes internas oficiales; y supuestos prácticos completos.</p>
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
      ['dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipV47Card', 'dipV48Card', 'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46', 'dipNextBlockV47', 'dipNextBlockV48'].forEach(id => document.getElementById(id)?.remove());
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () {
      original();
      ['dipSimulationCoverageV43', 'dipSimulationCoverageV44', 'dipSimulationCoverageV45', 'dipSimulationCoverageV46', 'dipSimulationCoverageV47', 'dipSimulationCoverageV48'].forEach(id => document.getElementById(id)?.remove());
      const html = simulationCoverageCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      ['dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipV47Card', 'dipV48Card', 'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46', 'dipNextBlockV47', 'dipNextBlockV48'].forEach(id => document.getElementById(id)?.remove());
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();