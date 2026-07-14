(() => {
  const VERSION = 'v0.86.0';
  const CACHE = 'opoweb-v94';
  const PUEBLA_ID = 'puebla-aux-admin-2026';

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
        .replace(/opoweb-v9[23]/g, CACHE)
        .replace(/\bv9[23]\b/g, 'v94');
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

  function pueblaCard() {
    const ope = activeOpe();
    if (!ope || ope.id !== PUEBLA_ID) return '';
    const programme = ope.theoryProgramme?.v86;
    if (!programme) return '';
    const totalWords = (ope.themes || []).reduce((sum, theme) => sum + wordCount(theme), 0);
    const sources = new Set((ope.themes || []).flatMap(theme => (theme.officialSources || []).map(item => item.reference))).size;
    return `<article class="card" id="pueblaTheoryStatusV86">
      <div class="pill-row"><span class="badge common">La Puebla 19/19</span><span class="badge common">Fuente teórica autosuficiente</span><span class="badge area">Revisión 14-07-2026</span></div>
      <h2>Temario completo de La Puebla dentro de OpoWeb</h2>
      <p>Los diecinueve temas literales del Anexo I han sido reconstruidos con normativa y documentación oficial, desarrollo completo, resumen, puntos calientes, retención activa, estrategia, esquema y tabla de repaso.</p>
      <div class="grid three">
        <div><span class="score">${programme.autonomousThemes}/${programme.totalThemes}</span><p class="muted">temas autosuficientes</p></div>
        <div><span class="score">${totalWords.toLocaleString('es-ES')}</span><p class="muted">palabras de teoría</p></div>
        <div><span class="score">${sources}</span><p class="muted">fuentes oficiales distintas</p></div>
      </div>
      <p><strong>Uso previsto:</strong> La Puebla ya puede estudiarse como fuente teórica principal dentro de OpoWeb, junto con sus 570 preguntas, 20 supuestos y tres simulacros.</p>
      <p class="muted">El 1 % reservado corresponde a cambios posteriores a la revisión: modificaciones normativas, actualizaciones de interfaz de programas y publicaciones futuras del proceso selectivo.</p>
    </article>`;
  }

  function appendPueblaCard(position = 'beforeend') {
    document.querySelectorAll('#pueblaTheoryStatusV86').forEach(node => node.remove());
    if (typeof content !== 'undefined' && content && activeOpe()?.id === PUEBLA_ID) content.insertAdjacentHTML(position, pueblaCard());
  }

  function sourceCard(theme) {
    if (activeOpe()?.id !== PUEBLA_ID || theme?.theoryStatus?.autonomous !== true) return '';
    const sources = (theme.officialSources || []).map(item => `<li><a href="${escapeAttr(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.label)}</a> <span class="muted">${escapeHtml(item.reference)}</span></li>`).join('');
    return `<article class="card compact" id="pueblaThemeSourcesV86">
      <div class="pill-row"><span class="badge common">Tema autosuficiente</span><span class="badge area">${wordCount(theme).toLocaleString('es-ES')} palabras</span><span class="badge">30 preguntas</span></div>
      <h3>Fuentes oficiales y control de vigencia</h3>
      <ul>${sources}</ul>
      <p class="muted">Revisión del tema: ${escapeHtml(theme.theoryStatus.reviewedAt)}. El título se conserva literalmente según el BOP Toledo núm. 82 de 5 de mayo de 2026.</p>
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
      if (!state.selectedTheme) appendPueblaCard('afterbegin');
      patchText(document.getElementById('content'));
    };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () { original(); appendPueblaCard('beforeend'); patchText(document.getElementById('content')); };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () { original(); appendPueblaCard('beforeend'); patchText(document.getElementById('content')); };
  }
  if (typeof renderAll === 'function') {
    const original = renderAll;
    renderAll = function () { original(); applyCurrentVersion(); };
    try { renderAll(); } catch (_) { applyCurrentVersion(); }
  } else applyCurrentVersion();

  window.addEventListener('opoweb:ready', applyCurrentVersion);
  window.OPOWEB_UI_V86 = {
    version: VERSION,
    cache: CACHE,
    label: 'La Puebla 19/19',
    pueblaAutonomousThemes: 19,
    pueblaTotalThemes: 19,
    status: 'APTO'
  };
})();
