(() => {
  const VERSION = 'v0.87.0';
  const CACHE = 'opoweb-v95';
  const DIPUTACION_ID = 'diputacion-toledo-admin-2026';
  const html = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

  function activeOpe() { return typeof active === 'function' ? active() : null; }

  function patchText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      node.nodeValue = node.nodeValue
        .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
        .replace(/OpoWeb v0\.86/g, 'OpoWeb v0.87')
        .replace(/Auditoría v0\.86/g, 'Auditoría v0.87')
        .replace(/auditoría v0\.86/gi, 'auditoría v0.87')
        .replace(/opoweb-v94/g, CACHE)
        .replace(/\bv94\b/g, 'v95');
    }
  }

  function wordCount(theme) {
    return [
      ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
      theme.tree || '',
      ...(theme.reviewTable || []).flat()
    ].join(' ').trim().split(/\s+/).filter(Boolean).length;
  }

  function statusCard() {
    const ope = activeOpe();
    const programme = ope?.theoryProgramme?.v87;
    if (!ope || ope.id !== DIPUTACION_ID || !programme) return '';
    const completed = programme.completedThemes || [];
    const minimum = completed.length
      ? Math.min(...completed.map(number => wordCount(ope.themes.find(theme => Number(theme.number) === number) || {})))
      : 0;
    return `<article class="card" id="diputacionTheoryStatusV87">
      <div class="pill-row"><span class="badge common">Diputación · bloque tributario</span><span class="badge common">${completed.length}/${programme.totalThemes} temas cerrados</span><span class="badge area">Revisión 15-07-2026</span></div>
      <h2>Fuente editorial única: temas 25 y 26 completados</h2>
      <p>Se han reconstruido íntegramente la obligación tributaria, los tributos locales, la gestión y revisión tributaria, y la recaudación voluntaria y ejecutiva. El desarrollo parte de la Constitución, la Ley General Tributaria, el texto refundido de Haciendas Locales y el Reglamento General de Recaudación.</p>
      <div class="grid three">
        <div><span class="score">${completed.length}</span><p class="muted">temas autosuficientes del bloque 25–40</p></div>
        <div><span class="score">${minimum.toLocaleString('es-ES')}</span><p class="muted">palabras mínimas por tema</p></div>
        <div><span class="score">${programme.pendingThemes.length}</span><p class="muted">temas pendientes del bloque</p></div>
      </div>
      <p><strong>Siguiente objetivo:</strong> tema 27, presupuesto general de las entidades locales y bases de ejecución; después, protección de datos y transparencia.</p>
    </article>`;
  }

  function sourceCard(theme) {
    if (activeOpe()?.id !== DIPUTACION_ID || theme?.theoryStatus?.autonomous !== true || ![25, 26].includes(Number(theme.number))) return '';
    const sources = (theme.officialSources || []).map(source => `<li><a href="${html(source.url)}" target="_blank" rel="noopener">${html(source.label)}</a> <span class="muted">${html(source.reference)}</span></li>`).join('');
    return `<article class="card compact" id="diputacionThemeSourcesV87">
      <div class="pill-row"><span class="badge common">Tema autosuficiente</span><span class="badge area">${wordCount(theme).toLocaleString('es-ES')} palabras</span><span class="badge">Fuente oficial</span></div>
      <h3>Fuentes oficiales y control editorial</h3>
      <ul>${sources}</ul>
      <p class="muted">Revisión: ${html(theme.theoryStatus.reviewedAt)}. El epígrafe conserva la literalidad del programa de Diputación y el contenido evita datos no respaldados por norma oficial.</p>
    </article>`;
  }

  function appendStatus(position = 'beforeend') {
    document.querySelectorAll('#diputacionTheoryStatusV87').forEach(node => node.remove());
    if (typeof content !== 'undefined' && content && activeOpe()?.id === DIPUTACION_ID) content.insertAdjacentHTML(position, statusCard());
  }

  if (typeof themeDetail === 'function') {
    const original = themeDetail;
    themeDetail = function (theme) {
      const rendered = original(theme);
      const card = sourceCard(theme);
      return card ? rendered.replace('<article class="card">', `${card}<article class="card">`) : rendered;
    };
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchText(document.getElementById('oposicionCard')); };
  }
  if (typeof renderTemario === 'function') {
    const original = renderTemario;
    renderTemario = function () {
      original();
      if (!state.selectedTheme) appendStatus('afterbegin');
      patchText(document.getElementById('content'));
    };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () { original(); appendStatus('beforeend'); patchText(document.getElementById('content')); };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () { original(); appendStatus('beforeend'); patchText(document.getElementById('content')); };
  }
  if (typeof renderAll === 'function') {
    const original = renderAll;
    renderAll = function () { original(); patchText(document.body); };
    try { renderAll(); } catch (_) { patchText(document.body); }
  } else patchText(document.body);

  window.addEventListener('opoweb:ready', () => patchText(document.body));
  window.OPOWEB_UI_V87 = {
    version: VERSION,
    cache: CACHE,
    label: 'Diputación temas 25 y 26',
    completedThemes: [25, 26],
    status: 'EN_PROGRESO'
  };
})();
