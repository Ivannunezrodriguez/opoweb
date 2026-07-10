(() => {
  const VERSION = 'v0.58.0';

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
    const release = window.OPOWEB_DIPUTACION_V58 || {};
    const secondPassPct = Math.round((19 / 39) * 100);
    return `<article class="card" id="dipV58Card">
      <div class="pill-row"><span class="badge common">Diputación v0.58</span><span class="badge">Segunda vuelta</span><span class="badge">Temas 1–19 a 30+</span></div>
      <h2>Régimen disciplinario reforzado</h2>
      <p>El tema 19 incorpora principios, faltas, sanciones, responsabilidad, prescripción y procedimiento disciplinario. La cobertura consecutiva alcanza los diecinueve primeros temas.</p>
      <div class="grid three">
        <div><span class="score">${audit.targetThemes || 19}</span><p class="muted">temas con 30+ preguntas reales</p></div>
        <div><span class="score">${release.addedQuestions || 18}</span><p class="muted">preguntas nuevas en v0.58</p></div>
        <div><span class="score">${release.cumulativeManualQuestions || 877}</span><p class="muted">preguntas manuales acumuladas</p></div>
      </div>
      <div class="progress-bar"><span style="width:${secondPassPct}%"></span></div>
      <p><strong>${secondPassPct}%</strong> de la segunda vuelta de Diputación completada sobre los 39 temas actualmente auditables.</p>
    </article>
    <article class="card compact" id="dipNextBlockV58">
      <h3>Siguiente refuerzo</h3>
      <p><strong>Tema 20:</strong> contrato de trabajo: concepto, elementos, capacidad, forma, duración, periodo de prueba, derechos y deberes.</p>
      <p><strong>Después:</strong> tema 21, modalidades contractuales y Seguridad Social; posteriormente temas 23–40.</p>
      <p><strong>Tema 22:</strong> continúa bloqueado hasta verificar el Acuerdo Regulador y los Estatutos oficiales vigentes del OAPGT.</p>
    </article>`;
  }

  function testStatusCard() {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return '';
    const audit = ope.globalTestAudit || {};
    const item = audit.themes?.find(entry => Number(entry.number) === 19);
    return `<article class="card compact" id="dipTestStatusV58">
      <div class="pill-row"><span class="badge common">Tema 19: ${item?.content || 33}</span></div>
      <p><strong>Tema 19 reforzado:</strong> legalidad, tipicidad, irretroactividad, proporcionalidad, culpabilidad, clases de faltas, sanciones, responsables, prescripción, cancelación, procedimiento y medidas cautelares.</p>
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
