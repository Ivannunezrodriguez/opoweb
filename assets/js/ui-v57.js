(() => {
  const VERSION = 'v0.57.0';

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
    const release = window.OPOWEB_DIPUTACION_V57 || {};
    return `<article class="card" id="dipV57Card">
      <div class="pill-row"><span class="badge common">Diputación v0.57</span><span class="badge">Segunda vuelta</span><span class="badge">Temas 1–18 a 30+</span></div>
      <h2>Derechos, deberes y situaciones administrativas reforzados</h2>
      <p>El tema 18 incorpora un desarrollo específico y un banco superior al mínimo previsto. La cobertura consecutiva alcanza ya los dieciocho primeros temas.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 18}</span><p class="muted">temas con 30+ preguntas reales</p></div>
        <div><span class="score">${release.addedQuestions || 19}</span><p class="muted">preguntas nuevas en v0.57</p></div>
        <div><span class="score">${release.cumulativeManualQuestions || 859}</span><p class="muted">preguntas manuales acumuladas</p></div>
      </div>
    </article>
    <article class="card compact" id="dipNextBlockV57">
      <h3>Siguiente refuerzo</h3>
      <p><strong>Tema 19:</strong> régimen disciplinario de la Ley 4/2011.</p>
      <p><strong>Después:</strong> temas 20 y 21, contrato de trabajo y Seguridad Social; posteriormente temas 23–40.</p>
      <p><strong>Tema 22:</strong> continúa bloqueado hasta verificar el Acuerdo Regulador y los Estatutos oficiales vigentes del OAPGT.</p>
    </article>`;
  }

  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const audit = ope.globalTestAudit || {};
    const item = audit.themes?.find(entry => Number(entry.number) === 18);
    return `<article class="card compact" id="dipTestStatusV57">
      <div class="pill-row"><span class="badge common">Tema 18: ${item?.content || 34}</span></div>
      <p><strong>Tema 18 reforzado:</strong> derechos individuales y colectivos, vacaciones, deberes, formación, servicio activo, servicios especiales, expectativa de destino, excedencias, suspensión y reingreso.</p>
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
