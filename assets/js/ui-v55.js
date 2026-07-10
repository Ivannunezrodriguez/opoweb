(() => {
  const VERSION = 'v0.55.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function removePhaseCards() {
    [
      'dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipV47Card', 'dipV48Card', 'dipV49Card', 'dipV50Card', 'dipV51Card', 'dipV52Card', 'dipV53Card', 'dipV54Card', 'dipV55Card',
      'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46', 'dipNextBlockV47', 'dipNextBlockV48', 'dipNextBlockV49', 'dipNextBlockV50', 'dipNextBlockV51', 'dipNextBlockV52', 'dipNextBlockV53', 'dipNextBlockV54', 'dipNextBlockV55'
    ].forEach(id => document.getElementById(id)?.remove());
  }

  function phaseCards() {
    const audit = active()?.globalTestAudit || {};
    return `<article class="card" id="dipV55Card">
      <div class="pill-row"><span class="badge common">Diputación v0.55</span><span class="badge">Segunda vuelta</span><span class="badge">Temas 1–16 a 30+</span></div>
      <h2>Régimen local y contratación reforzados</h2>
      <p>Los temas 10–16 ya alcanzan el objetivo mínimo de 30 preguntas reales. La segunda vuelta cubre ahora de forma consecutiva los dieciséis primeros temas del programa.</p>
      <div class="grid three">
        <div><span class="score">16</span><p class="muted">temas reforzados a 30+</p></div>
        <div><span class="score">105</span><p class="muted">preguntas nuevas en v0.55</p></div>
        <div><span class="score">${audit.targetThemes || 0}</span><p class="muted">temas totales con 30+ reales</p></div>
      </div>
    </article>
    <article class="card compact" id="dipNextBlockV55">
      <h3>Siguiente refuerzo</h3>
      <p><strong>Temas 17–21:</strong> empleo público de Castilla-La Mancha, derechos y deberes, situaciones, disciplina, contrato de trabajo y Seguridad Social.</p>
      <p><strong>Después:</strong> temas 23–31 y bloque informático 32–40.</p>
      <p><strong>Tema 22:</strong> continúa bloqueado hasta verificar Acuerdo Regulador y Estatutos oficiales del OAPGT.</p>
    </article>`;
  }

  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const audit = ope.globalTestAudit || {};
    const badges = [10, 11, 12, 13, 14, 15, 16].map(number => {
      const item = audit.themes?.find(entry => Number(entry.number) === number);
      return `<span class="badge common">Tema ${number}: ${item?.content || 0}</span>`;
    }).join('');
    return `<article class="card compact" id="dipTestStatusV55">
      <div class="pill-row">${badges}</div>
      <p><strong>Temas 10–16 reforzados:</strong> responsabilidad patrimonial, procedimiento local, régimen local, municipio, provincia, entidades supramunicipales y contratación pública.</p>
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
      removePhaseCards();
      if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards());
      patchVersion();
    };
  }

  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () {
      original();
      ['dipTestStatusV53', 'dipTestStatusV54', 'dipTestStatusV55'].forEach(id => document.getElementById(id)?.remove());
      const html = testStatusCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      removePhaseCards();
      if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards());
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () {
      original();
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();