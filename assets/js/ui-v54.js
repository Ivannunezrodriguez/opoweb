(() => {
  const VERSION = 'v0.54.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function removePhaseCards() {
    [
      'dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipV47Card', 'dipV48Card', 'dipV49Card', 'dipV50Card', 'dipV51Card', 'dipV52Card', 'dipV53Card', 'dipV54Card',
      'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46', 'dipNextBlockV47', 'dipNextBlockV48', 'dipNextBlockV49', 'dipNextBlockV50', 'dipNextBlockV51', 'dipNextBlockV52', 'dipNextBlockV53', 'dipNextBlockV54'
    ].forEach(id => document.getElementById(id)?.remove());
  }

  function phaseCards() {
    const audit = active()?.globalTestAudit || {};
    return `<article class="card" id="dipV54Card">
      <div class="pill-row"><span class="badge common">Diputación v0.54</span><span class="badge">Segunda vuelta</span><span class="badge">Temas 1–9 a 30+</span></div>
      <h2>Bloque de procedimiento reforzado</h2>
      <p>Los temas 5–9 ya alcanzan el objetivo mínimo de 30 preguntas reales. Junto con los temas 1–4, quedan nueve temas consecutivos en segunda vuelta.</p>
      <div class="grid three">
        <div><span class="score">9</span><p class="muted">temas reforzados a 30+</p></div>
        <div><span class="score">75</span><p class="muted">preguntas nuevas en v0.54</p></div>
        <div><span class="score">${audit.targetThemes || 0}</span><p class="muted">temas totales con 30+ reales</p></div>
      </div>
    </article>
    <article class="card compact" id="dipNextBlockV54">
      <h3>Siguiente refuerzo</h3>
      <p><strong>Temas 10–16:</strong> responsabilidad patrimonial, procedimiento local, régimen local, municipio, provincia, otras entidades y contratación.</p>
      <p><strong>Objetivo:</strong> elevar cada tema a 30–40 preguntas reales con justificación normativa y sin duplicados.</p>
      <p><strong>Tema 22:</strong> continúa bloqueado hasta verificar sus fuentes internas oficiales.</p>
    </article>`;
  }

  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const audit = ope.globalTestAudit || {};
    const badges = [5, 6, 7, 8, 9].map(number => {
      const item = audit.themes?.find(entry => Number(entry.number) === number);
      return `<span class="badge common">Tema ${number}: ${item?.content || 0}</span>`;
    }).join('');
    return `<article class="card compact" id="dipTestStatusV54">
      <div class="pill-row">${badges}</div>
      <p><strong>Temas 5–9 reforzados:</strong> interesados y plazos, procedimiento común, acto administrativo, revisión y recursos, y administración electrónica.</p>
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
      ['dipTestStatusV53', 'dipTestStatusV54'].forEach(id => document.getElementById(id)?.remove());
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