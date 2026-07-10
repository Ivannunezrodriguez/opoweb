(() => {
  const VERSION = 'v0.53.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function removePhaseCards() {
    [
      'dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipV47Card', 'dipV48Card', 'dipV49Card', 'dipV50Card', 'dipV51Card', 'dipV52Card', 'dipV53Card',
      'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46', 'dipNextBlockV47', 'dipNextBlockV48', 'dipNextBlockV49', 'dipNextBlockV50', 'dipNextBlockV51', 'dipNextBlockV52', 'dipNextBlockV53'
    ].forEach(id => document.getElementById(id)?.remove());
  }

  function phaseCards() {
    const audit = active()?.globalTestAudit || {};
    return `<article class="card" id="dipV53Card">
      <div class="pill-row"><span class="badge common">Diputación v0.53</span><span class="badge">Segunda vuelta</span><span class="badge">Temas 1–4 reforzados</span></div>
      <h2>El temario aún no se considera perfecto</h2>
      <p>La primera vuelta está cerrada en 39 de 40 temas. La segunda vuelta comienza elevando los temas 1–4 a 30 preguntas reales y mantiene el tema 22 pendiente de documentación interna oficial.</p>
      <div class="grid three">
        <div><span class="score">39/40</span><p class="muted">primera vuelta profunda</p></div>
        <div><span class="score">${audit.targetThemes || 0}</span><p class="muted">temas con 30+ preguntas</p></div>
        <div><span class="score">60</span><p class="muted">preguntas añadidas en v0.53</p></div>
      </div>
    </article>
    <article class="card compact" id="dipNextBlockV53">
      <h3>Siguiente refuerzo</h3>
      <p><strong>Temas 5–9:</strong> procedimiento administrativo, acto, revisión, recursos y administración electrónica.</p>
      <p><strong>Objetivo:</strong> 30–40 preguntas reales por cada tema, sin plantillas y con justificación normativa.</p>
      <p><strong>Tema 22:</strong> no se cerrará ni entrará en simulacros hasta verificar Acuerdo Regulador y Estatutos del OAPGT.</p>
    </article>`;
  }

  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const audit = ope.globalTestAudit || {};
    const reinforced = [1, 2, 3, 4].map(number => {
      const item = audit.themes?.find(entry => Number(entry.number) === number);
      return `<span class="badge common">Tema ${number}: ${item?.content || 0}</span>`;
    }).join('');
    return `<article class="card compact" id="dipTestStatusV53">
      <div class="pill-row">${reinforced}</div>
      <p><strong>Segunda vuelta iniciada:</strong> los temas 1–4 ya alcanzan el objetivo mínimo de 30 preguntas reales. El resto se reforzará por bloques.</p>
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
      document.getElementById('dipTestStatusV53')?.remove();
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