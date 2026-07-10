(() => {
  const VERSION = 'v0.49.0';

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
    return `<article class="card" id="dipV49Card">
      <div class="pill-row"><span class="badge common">Diputación v0.49</span><span class="badge">33 temas profundos</span></div>
      <h2>Base, Impress, componentes y periféricos</h2>
      <p>Queda completado el primer desarrollo de los temas 32–40. La convocatoria alcanza 33 de 40 temas desarrollados en profundidad y mantiene bloqueado el tema 22 hasta disponer de sus fuentes internas oficiales.</p>
      <div class="grid three">
        <div><span class="score">33/40</span><p class="muted">temas desarrollados</p></div>
        <div><span class="score">495</span><p class="muted">preguntas manuales añadidas</p></div>
        <div><span class="score">${audit.targetThemes || 0}</span><p class="muted">temas con 30+ preguntas reales</p></div>
      </div>
      <p class="muted">Fuentes del bloque: ayuda oficial de LibreOffice Base e Impress y fundamentos técnicos estables de arquitectura y periféricos de ordenador personal.</p>
    </article>`;
  }

  function simulationCoverageCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const sim = ope.simulacros?.find(item => item.id === state.selectedSim) || ope.simulacros?.[0];
    const covered = sim?.audit?.coveredThemes ?? 0;
    const main = sim?.audit?.main ?? sim?.questions?.length ?? 0;
    const reserve = sim?.audit?.reserve ?? sim?.reserveQuestions?.length ?? 0;
    return `<article class="card compact" id="dipSimulationCoverageV49">
      <div class="pill-row"><span class="badge common">Solo preguntas reales</span><span class="badge area">${covered} temas representados</span><span class="badge">${main} + ${reserve}</span></div>
      <p>Los simulacros se regeneran con los treinta y tres temas desarrollados y excluyen preguntas de plantilla.</p>
    </article>`;
  }

  function nextBlockCard() {
    if (active()?.id !== 'diputacion-toledo-admin-2026') return '';
    return `<article class="card compact" id="dipNextBlockV49">
      <h3>Siguiente bloque</h3>
      <p><strong>Temas 1–4:</strong> Constitución, Corona, Cortes, Gobierno, Poder Judicial y organización territorial.</p>
      <p><strong>Temas 10–11:</strong> responsabilidad patrimonial, potestad sancionadora y procedimiento administrativo local.</p>
      <p><strong>Tema 22:</strong> pendiente de Acuerdo Regulador y Estatutos oficiales vigentes del OAPGT.</p>
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
      ['dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipV47Card', 'dipV48Card', 'dipV49Card', 'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46', 'dipNextBlockV47', 'dipNextBlockV48', 'dipNextBlockV49'].forEach(id => document.getElementById(id)?.remove());
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () {
      original();
      ['dipSimulationCoverageV43', 'dipSimulationCoverageV44', 'dipSimulationCoverageV45', 'dipSimulationCoverageV46', 'dipSimulationCoverageV47', 'dipSimulationCoverageV48', 'dipSimulationCoverageV49'].forEach(id => document.getElementById(id)?.remove());
      const html = simulationCoverageCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      ['dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipV47Card', 'dipV48Card', 'dipV49Card', 'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46', 'dipNextBlockV47', 'dipNextBlockV48', 'dipNextBlockV49'].forEach(id => document.getElementById(id)?.remove());
      const html = phaseCard();
      if (html) content.insertAdjacentHTML('beforeend', html + nextBlockCard());
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();