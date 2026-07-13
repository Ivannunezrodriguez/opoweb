(() => {
  const VERSION = 'v0.85.0';
  const CACHE = 'opoweb-v92';
  const CARRANQUE_ID = 'carranque-aux-admin-2026';

  function patchText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      node.nodeValue = node.nodeValue
        .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
        .replace(/OpoWeb v0\.84/g, 'OpoWeb v0.85')
        .replace(/Auditoría v0\.84/g, 'Auditoría v0.85')
        .replace(/auditoría v0\.84/gi, 'auditoría v0.85')
        .replace(/opoweb-v91/g, CACHE)
        .replace(/\bv91\b/g, 'v92');
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
    const text = [
      ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
      theme.tree || '',
      ...(theme.reviewTable || []).flat()
    ].join(' ');
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  function programmeCard() {
    const ope = activeOpe();
    if (!ope) return '';
    if (ope.id !== CARRANQUE_ID) {
      return `<article class="card" id="theoryStatusV85">
        <div class="pill-row"><span class="badge">Teoría en reconstrucción</span><span class="badge area">No usar todavía como fuente única</span></div>
        <h2>Estado del temario teórico</h2>
        <p>Los test, supuestos y simulacros permanecen disponibles, pero el desarrollo teórico de esta convocatoria todavía no ha superado el estándar autosuficiente de OpoWeb v0.85.</p>
        <p class="muted">Hasta completar su reconstrucción, utiliza estos temas como resumen y repaso, no como manual exclusivo.</p>
      </article>`;
    }

    const programme = ope.theoryProgramme?.v85 || {};
    const complete = programme.completedThemes?.length || 0;
    const totalWords = (ope.themes || []).reduce((sum, theme) => sum + themeWordCount(theme), 0);
    const sources = new Set((ope.themes || []).flatMap(theme => (theme.officialSources || []).map(source => source.reference))).size;
    return `<article class="card" id="theoryStatusV85">
      <div class="pill-row"><span class="badge common">Carranque 20/20</span><span class="badge common">Fuente teórica autosuficiente</span><span class="badge area">Revisión 13-07-2026</span></div>
      <h2>Temario completo para estudiar dentro de OpoWeb</h2>
      <p>Los veinte temas oficiales han sido reconstruidos con desarrollo normativo, cobertura por artículos, resumen, puntos de examen, retención activa, estrategia, esquema y tabla de repaso.</p>
      <div class="grid three">
        <div><span class="score">${complete}/20</span><p class="muted">temas autosuficientes</p></div>
        <div><span class="score">${totalWords.toLocaleString('es-ES')}</span><p class="muted">palabras de teoría</p></div>
        <div><span class="score">${sources}</span><p class="muted">normas oficiales distintas</p></div>
      </div>
      <p><strong>Uso previsto:</strong> Carranque ya puede estudiarse como fuente teórica principal dentro de OpoWeb, junto con sus 600 preguntas, 18 supuestos y simulacros.</p>
      <p class="muted">El 1 % pendiente corresponde a publicaciones futuras del proceso y datos dinámicos: fecha, tribunal, posibles correcciones, bases presupuestarias vigentes y cambios normativos anteriores al examen.</p>
    </article>`;
  }

  function appendProgrammeCard(position = 'beforeend') {
    document.querySelectorAll('#theoryStatusV85').forEach(node => node.remove());
    if (typeof content !== 'undefined' && content) content.insertAdjacentHTML(position, programmeCard());
  }

  function sourceCard(theme) {
    if (activeOpe()?.id !== CARRANQUE_ID || theme?.theoryStatus?.autonomous !== true) return '';
    const sources = (theme.officialSources || []).map(source => `<li><a href="${escapeAttr(source.url)}" target="_blank" rel="noopener">${escapeHtml(source.label)}</a> <span class="muted">${escapeHtml(source.reference)}</span></li>`).join('');
    return `<article class="card compact" id="themeSourcesV85">
      <div class="pill-row"><span class="badge common">Tema autosuficiente</span><span class="badge area">${themeWordCount(theme).toLocaleString('es-ES')} palabras</span><span class="badge">30 preguntas</span></div>
      <h3>Fuentes oficiales y control de vigencia</h3>
      <ul>${sources}</ul>
      <p class="muted">Revisión jurídica: ${escapeHtml(theme.theoryStatus.reviewedAt)}. Antes del examen se comprobarán las modificaciones posteriores y los datos dinámicos señalados en el tema.</p>
    </article>`;
  }

  if (typeof themeDetail === 'function') {
    const original = themeDetail;
    themeDetail = function (theme) {
      const html = original(theme);
      const card = sourceCard(theme);
      return card ? `${html.replace('<article class="card">', card + '<article class="card">')}` : html;
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

  window.OPOWEB_THEORY_AUDIT_V85 = {
    version: VERSION,
    cache: CACHE,
    carranque: {
      status: 'APTO',
      autonomousThemes: 20,
      totalThemes: 20,
      questions: 600
    },
    remaining: ['puebla-aux-admin-2026', 'diputacion-toledo-admin-2026', 'uc3m-aux-admin-2026']
  };

  window.addEventListener('opoweb:ready', () => {
    patchVersion();
    queueMicrotask(patchVersion);
  }, { once: true });
})();
