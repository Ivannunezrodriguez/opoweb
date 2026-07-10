(() => {
  const VERSION = 'v0.56.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function removeHistoricalCards() {
    document.querySelectorAll('[id^="dipV"], [id^="dipNextBlockV"], [id^="dipTestStatusV"]').forEach(node => node.remove());
  }

  function phaseCards() {
    const audit = active()?.globalTestAudit || {};
    const real = window.OPOWEB_DIPUTACION_V56 || {};
    return `<article class="card" id="dipV56Card">
      <div class="pill-row"><span class="badge common">Diputación v0.56</span><span class="badge">Segunda vuelta</span><span class="badge">Temas 1–17 a 30+</span></div>
      <h2>Acceso al empleo público reforzado</h2>
      <p>El tema 17 ya cuenta con desarrollo específico y un mínimo de 30 preguntas reales. El banco cubre consecutivamente los diecisiete primeros temas, salvo que una auditoría posterior detecte una incidencia.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 17}</span><p class="muted">temas con 30+ preguntas reales</p></div>
        <div><span class="score">${real.addedQuestions || 15}</span><p class="muted">preguntas nuevas en v0.56</p></div>
        <div><span class="score">${real.cumulativeManualQuestions || 840}</span><p class="muted">preguntas manuales acumuladas</p></div>
      </div>
    </article>
    <article class="card compact" id="dipNextBlockV56">
      <h3>Siguiente refuerzo</h3>
      <p><strong>Temas 18–21:</strong> derechos y situaciones administrativas, régimen disciplinario, contrato de trabajo, modalidades contractuales y Seguridad Social.</p>
      <p><strong>Después:</strong> temas 23–31 y bloque informático y ofimático 32–40.</p>
      <p><strong>Tema 22:</strong> continúa bloqueado hasta verificar el Acuerdo Regulador y los Estatutos oficiales vigentes del OAPGT.</p>
    </article>`;
  }

  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const audit = ope.globalTestAudit || {};
    const item = audit.themes?.find(entry => Number(entry.number) === 17);
    return `<article class="card compact" id="dipTestStatusV56">
      <div class="pill-row"><span class="badge common">Tema 17: ${item?.content || 30}</span></div>
      <p><strong>Tema 17 reforzado:</strong> clases de personal, funciones reservadas, requisitos de acceso, sistemas selectivos, adquisición y pérdida de la condición funcionarial.</p>
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
      removeHistoricalCards();
      if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards());
      patchVersion();
    };
  }

  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () {
      original();
      removeHistoricalCards();
      const html = testStatusCard();
      if (html) content.insertAdjacentHTML('afterbegin', html);
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      removeHistoricalCards();
      if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards());
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () { original(); patchVersion(); };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();
