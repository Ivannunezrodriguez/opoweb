(() => {
  const VERSION = 'v0.86.0';
  const CACHE = 'opoweb-v93';
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
        .replace(/opoweb-v92/g, CACHE)
        .replace(/\bv92\b/g, 'v93');
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
    const totalWords = (ope.themes || [])
      .filter(theme => theme.theoryStatus?.version === VERSION)
      .reduce((sum, theme) => sum + wordCount(theme), 0);
    return `<article class="card" id="pueblaTheoryStatusV86">
      <div class="pill-row"><span class="badge common">La Puebla ${programme.autonomousThemes}/${programme.totalThemes}</span><span class="badge area">Bloque 1 autosuficiente</span><span class="badge">Revisión 13-07-2026</span></div>
      <h2>Reconstrucción teórica de La Puebla en curso</h2>
      <p>Los temas 1 a 5 ya están desarrollados con estructura de fuente teórica: resumen, rigor normativo, desarrollo completo del epígrafe, síntesis, puntos calientes, retención activa, estrategia, esquema, tabla y fuentes oficiales.</p>
      <div class="grid three">
        <div><span class="score">${programme.autonomousThemes}/${programme.totalThemes}</span><p class="muted">temas autosuficientes</p></div>
        <div><span class="score">${totalWords.toLocaleString('es-ES')}</span><p class="muted">palabras nuevas</p></div>
        <div><span class="score">570</span><p class="muted">preguntas conservadas</p></div>
      </div>
      <p><strong>Uso realista:</strong> estudia ya dentro de OpoWeb los temas 1 a 5 de La Puebla. Los temas 6 a 19 siguen como resumen y test, no todavía como manual único.</p>
    </article>`;
  }

  function appendPueblaCard(position = 'beforeend') {
    document.querySelectorAll('#pueblaTheoryStatusV86').forEach(node => node.remove());
    if (typeof content !== 'undefined' && content && activeOpe()?.id === PUEBLA_ID) content.insertAdjacentHTML(position, pueblaCard());
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
    renderAll = function () { original(); patchText(document.body); };
    try { renderAll(); } catch (_) { patchText(document.body); }
  } else patchText(document.body);

  window.OPOWEB_UI_V86 = { version: VERSION, cache: CACHE, pueblaAutonomousThemes: 5, pueblaTotalThemes: 19 };
})();
