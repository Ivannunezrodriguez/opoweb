(() => {
  const VERSION = 'v0.86.0';
  const CACHE = 'opoweb-v93';
  const PUEBLA_ID = 'puebla-aux-admin-2026';
  const CARRANQUE_ID = 'carranque-aux-admin-2026';

  function patchText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      node.nodeValue = node.nodeValue
        .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
        .replace(/OpoWeb v0\.85/g, 'OpoWeb v0.86')
        .replace(/Auditoría v0\.85/g, 'Auditoría v0.86')
        .replace(/auditoría v0\.85/gi, 'auditoría v0.86')
        .replace(/opoweb-v92/g, CACHE)
        .replace(/\bv92\b/g, 'v93');
    });
  }

  function patchVersion() {
    patchText(document.getElementById('oposicionCard'));
    patchText(document.getElementById('content'));
  }

  function activeOpe() {
    return typeof active === 'function' ? active() : null;
  }

  function themeWordCount(theme) {
    return [
      ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
      theme.tree || '',
      ...(theme.reviewTable || []).flat()
    ].join(' ').trim().split(/\s+/).filter(Boolean).length;
  }

  function autonomousConfig(ope) {
    if (ope?.id === PUEBLA_ID) return {
      label: 'La Puebla 19/19',
      total: 19,
      programme: ope.theoryProgramme?.v86 || {},
      review: '14-07-2026',
      questions: 570,
      practicals: 20,
      description: 'Los diecinueve temas oficiales han sido reconstruidos con desarrollo jurídico y ofimático completo, cobertura normativa o funcional, fuentes oficiales, esquemas, tablas y entrenamiento activo.',
      dynamic: 'El 1 % pendiente corresponde a publicaciones del proceso, cambios normativos, ordenanzas o calendarios tributarios vigentes y versiones de software que el Tribunal concrete.'
    };
    if (ope?.id === CARRANQUE_ID) return {
      label: 'Carranque 20/20',
      total: 20,
      programme: ope.theoryProgramme?.v85 || {},
      review: '13-07-2026',
      questions: 600,
      practicals: 18,
      description: 'Los veinte temas oficiales permanecen reconstruidos con desarrollo normativo, cobertura por artículos, fuentes, esquemas, tablas y entrenamiento activo.',
      dynamic: 'El 1 % pendiente corresponde a publicaciones futuras, bases presupuestarias vigentes, objetivos fiscales y cambios normativos anteriores al examen.'
    };
    return null;
  }

  function programmeCard() {
    const ope = activeOpe();
    if (!ope) return '';
    const config = autonomousConfig(ope);
    if (!config) {
      return `<article class="card" id="theoryStatusV86">
        <div class="pill-row"><span class="badge">Teoría en reconstrucción</span><span class="badge area">No usar todavía como fuente única</span></div>
        <h2>Estado del temario teórico</h2>
        <p>Los bancos de preguntas y simulacros permanecen disponibles, pero esta convocatoria todavía no ha superado el estándar de fuente teórica autosuficiente de OpoWeb v0.86.</p>
        <p class="muted">Utiliza sus temas como resumen y repaso hasta terminar la reconstrucción literal y normativa.</p>
      </article>`;
    }

    const complete = config.programme.completedThemes?.length || 0;
    const totalWords = (ope.themes || []).reduce((sum, theme) => sum + themeWordCount(theme), 0);
    const sources = new Set((ope.themes || []).flatMap(theme => (theme.officialSources || []).map(source => source.reference))).size;
    return `<article class="card" id="theoryStatusV86">
      <div class="pill-row"><span class="badge common">${config.label}</span><span class="badge common">Fuente teórica autosuficiente</span><span class="badge area">Revisión ${config.review}</span></div>
      <h2>Temario completo para estudiar dentro de OpoWeb</h2>
      <p>${config.description}</p>
      <div class="grid three">
        <div><span class="score">${complete}/${config.total}</span><p class="muted">temas autosuficientes</p></div>
        <div><span class="score">${totalWords.toLocaleString('es-ES')}</span><p class="muted">palabras de teoría</p></div>
        <div><span class="score">${sources}</span><p class="muted">fuentes oficiales distintas</p></div>
      </div>
      <p><strong>Uso previsto:</strong> esta convocatoria puede estudiarse como fuente teórica principal dentro de OpoWeb, junto con ${config.questions} preguntas, ${config.practicals} supuestos y sus simulacros oficiales.</p>
      <p class="muted">${config.dynamic}</p>
    </article>`;
  }

  function appendProgrammeCard(position = 'beforeend') {
    document.querySelectorAll('#theoryStatusV85, #theoryStatusV86').forEach(node => node.remove());
    if (typeof content !== 'undefined' && content) content.insertAdjacentHTML(position, programmeCard());
  }

  function sourceCard(theme) {
    if (activeOpe()?.id !== PUEBLA_ID || theme?.theoryStatus?.version !== 'v0.86.0' || theme?.theoryStatus?.autonomous !== true) return '';
    const sources = (theme.officialSources || []).map(source => `<li><a href="${escapeAttr(source.url)}" target="_blank" rel="noopener">${escapeHtml(source.label)}</a> <span class="muted">${escapeHtml(source.reference)}</span></li>`).join('');
    const coverage = (theme.articleCoverage || []).map(item => `<li><strong>${escapeHtml(item.range)}</strong>: ${escapeHtml(item.focus)}</li>`).join('');
    return `<article class="card compact" id="themeSourcesV86">
      <div class="pill-row"><span class="badge common">Tema autosuficiente</span><span class="badge area">${themeWordCount(theme).toLocaleString('es-ES')} palabras</span><span class="badge">30 preguntas</span></div>
      <h3>Fuentes oficiales y control de vigencia</h3>
      <ul>${sources}</ul>
      <h3>Cobertura normativa o funcional</h3>
      <ul>${coverage}</ul>
      <p class="muted">Revisión: ${escapeHtml(theme.theoryStatus.reviewedAt)}. Antes del examen se comprobarán las modificaciones posteriores, las publicaciones del proceso y los datos dinámicos señalados.</p>
    </article>`;
  }

  if (typeof themeDetail === 'function') {
    const original = themeDetail;
    themeDetail = function (theme) {
      const html = original(theme);
      const card = sourceCard(theme);
      if (!card || html.includes('id="themeSourcesV86"')) return html;
      return html.replace('<article class="card">', card + '<article class="card">');
    };
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () { original(); appendProgrammeCard('beforeend'); patchVersion(); };
  }
  if (typeof renderTemario === 'function') {
    const original = renderTemario;
    renderTemario = function () {
      original();
      if (!state.selectedTheme) appendProgrammeCard('afterbegin');
      patchVersion();
    };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () { original(); appendProgrammeCard('beforeend'); patchVersion(); };
  }
  if (typeof renderAll === 'function') {
    const original = renderAll;
    renderAll = function () { original(); patchVersion(); };
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();

  window.OPOWEB_THEORY_AUDIT_V86 = {
    version: VERSION,
    cache: CACHE,
    puebla: { status: 'APTO', autonomousThemes: 19, totalThemes: 19, questions: 570, practicalCases: 20 },
    carranque: { status: 'APTO', autonomousThemes: 20, totalThemes: 20, questions: 600, practicalCases: 18 },
    remaining: ['diputacion-toledo-admin-2026', 'uc3m-aux-admin-2026']
  };

  window.addEventListener('opoweb:ready', () => {
    patchVersion();
    queueMicrotask(patchVersion);
  }, { once: true });
})();
