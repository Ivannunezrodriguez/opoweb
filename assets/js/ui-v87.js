(() => {
  const VERSION = 'v0.87.0';
  const CACHE = 'opoweb-v95';
  const DIPUTACION_ID = 'diputacion-toledo-admin-2026';

  function patchText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      node.nodeValue = node.nodeValue
        .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
        .replace(/OpoWeb v0\.86/g, 'OpoWeb v0.87')
        .replace(/Auditoría v0\.86/g, 'Auditoría v0.87')
        .replace(/auditoría v0\.86/gi, 'auditoría v0.87')
        .replace(/opoweb-v94/g, CACHE)
        .replace(/\bv94\b/g, 'v95');
    });
  }

  function activeOpe() { return typeof active === 'function' ? active() : null; }

  function wordCount(theme) {
    return [
      ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
      theme.tree || '',
      ...(theme.reviewTable || []).flat()
    ].join(' ').trim().split(/\s+/).filter(Boolean).length;
  }

  function diputacionCard() {
    const ope = activeOpe();
    if (!ope || ope.id !== DIPUTACION_ID) return '';
    const programme = ope.theoryProgramme?.v87;
    if (!programme) return '';
    const completed = programme.completedThemes || [];
    const completedThemes = (ope.themes || []).filter(theme => completed.includes(Number(theme.number)));
    const totalWords = completedThemes.reduce((sum, theme) => sum + wordCount(theme), 0);
    const sources = new Set(completedThemes.flatMap(theme => (theme.officialSources || []).map(item => item.reference))).size;
    const questionTotal = Object.values(ope.themeTests || {}).reduce((sum, bank) => sum + bank.length, 0);
    const oapgt = window.OPOWEB_OAPGT_FUENTES_V87?.statutes;
    return `<article class="card" id="diputacionTheoryStatusV87">
      <div class="pill-row"><span class="badge common">Diputación 7/40</span><span class="badge area">Reconstrucción en curso</span><span class="badge">Revisión 15-07-2026</span></div>
      <h2>Avance editorial verificado de Diputación</h2>
      <p>Los temas 25 a 31 ya tienen desarrollo autosuficiente, títulos oficiales literales, fuentes primarias, esquema, tabla, retención activa y estrategia de examen.</p>
      <div class="grid three">
        <div><span class="score">${completed.length}/40</span><p class="muted">temas autosuficientes</p></div>
        <div><span class="score">${totalWords.toLocaleString('es-ES')}</span><p class="muted">palabras auditadas</p></div>
        <div><span class="score">${questionTotal.toLocaleString('es-ES')}</span><p class="muted">preguntas de Diputación</p></div>
      </div>
      <p><strong>Uso actual:</strong> los temas 25 a 31 pueden estudiarse como fuente teórica principal. El temario completo de Diputación todavía no debe utilizarse como fuente única.</p>
      <p class="muted">Fuentes oficiales distintas en este bloque: ${sources}. Quedan pendientes los temas 1 a 24 y 32 a 40.</p>
      <div class="notice warning"><strong>OAPGT:</strong> ${oapgt?.allowedForTheory === false ? 'contenido estatutario bloqueado' : 'revisión pendiente'}. No se atribuyen órganos, competencias, composición ni quórums sin el texto oficial vigente y su cadena de modificaciones.</div>
    </article>`;
  }

  function appendDiputacionCard(position = 'beforeend') {
    document.querySelectorAll('#diputacionTheoryStatusV87').forEach(node => node.remove());
    if (typeof content !== 'undefined' && content && activeOpe()?.id === DIPUTACION_ID) content.insertAdjacentHTML(position, diputacionCard());
  }

  function sourceCard(theme) {
    if (activeOpe()?.id !== DIPUTACION_ID || theme?.theoryStatus?.version !== 'v0.87.0' || theme?.theoryStatus?.autonomous !== true) return '';
    const sources = (theme.officialSources || []).map(item => `<li><a href="${escapeAttr(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.label)}</a> <span class="muted">${escapeHtml(item.reference)}</span></li>`).join('');
    const bank = activeOpe()?.themeTests?.[theme.id] || [];
    return `<article class="card compact" id="diputacionThemeSourcesV87">
      <div class="pill-row"><span class="badge common">Tema autosuficiente</span><span class="badge area">${wordCount(theme).toLocaleString('es-ES')} palabras</span><span class="badge">${bank.length} preguntas</span></div>
      <h3>Fuentes oficiales y control de vigencia</h3>
      <ul>${sources}</ul>
      <p class="muted">Revisión del tema: ${escapeHtml(theme.theoryStatus.reviewedAt)}. Los datos anuales, ordenanzas locales y modificaciones posteriores deben comprobarse antes del examen.</p>
    </article>`;
  }

  if (typeof themeDetail === 'function') {
    const original = themeDetail;
    themeDetail = function (theme) {
      const html = original(theme);
      const card = sourceCard(theme);
      return card ? html.replace('<article class="card">', `${card}<article class="card">`) : html;
    };
  }

  function applyCurrentVersion() {
    patchText(document.body);
    queueMicrotask(() => patchText(document.body));
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchText(document.getElementById('oposicionCard')); };
  }
  if (typeof renderTemario === 'function') {
    const original = renderTemario;
    renderTemario = function () {
      original();
      if (!state.selectedTheme) appendDiputacionCard('afterbegin');
      patchText(document.getElementById('content'));
    };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () { original(); appendDiputacionCard('beforeend'); patchText(document.getElementById('content')); };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () { original(); appendDiputacionCard('beforeend'); patchText(document.getElementById('content')); };
  }
  if (typeof renderAll === 'function') {
    const original = renderAll;
    renderAll = function () { original(); applyCurrentVersion(); };
    try { renderAll(); } catch (_) { applyCurrentVersion(); }
  } else applyCurrentVersion();

  window.addEventListener('opoweb:ready', applyCurrentVersion);
  window.OPOWEB_UI_V87 = {
    version: VERSION,
    cache: CACHE,
    status: 'EN_PROGRESO',
    diputacionAutonomousThemes: 7,
    diputacionTotalThemes: 40,
    diputacionQuestions: 1406,
    globalQuestions: 3266,
    oapgtStatutesVerified: false
  };
})();
