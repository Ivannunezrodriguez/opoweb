(() => {
  const VERSION = 'v0.89.3';
  const CACHE = 'opoweb-v97';

  const config = Object.freeze({
    'puebla-aux-admin-2026': Object.freeze({
      badge: 'La Puebla · 1 tema aprobado',
      secondary: '18 temas en revisión',
      heading: 'Reconstrucción manual tema a tema',
      description: 'El tema 1 está reconstruido artículo por artículo y aprobado expresamente por el usuario. Los otros 18 temas continúan clasificados como resumen y práctica hasta superar el mismo procedimiento.',
      note: 'El tema 1 puede estudiarse desde su manual aprobado. No utilices todavía toda la convocatoria como fuente teórica única.',
      tone: 'common',
      approvedThemes: 1
    }),
    'carranque-aux-admin-2026': Object.freeze({
      badge: 'Carranque · revisión abierta',
      secondary: 'Resumen y práctica',
      heading: 'Temario en revisión pedagógica',
      description: 'Los 20 epígrafes y los materiales de práctica están disponibles, pero la suficiencia normativa y la cobertura artículo por artículo deben revisarse de nuevo.',
      note: 'No se mantiene la etiqueta de fuente teórica principal mientras no concluya la nueva auditoría.',
      tone: 'area',
      approvedThemes: 0
    }),
    'uc3m-aux-admin-2026': Object.freeze({
      badge: 'UC3M · revisión abierta',
      secondary: 'Resumen y práctica',
      heading: 'Temario en revisión pedagógica',
      description: 'Los materiales específicos y comunes siguen disponibles, pero dejan de presentarse como temario completo hasta verificar cada epígrafe, norma y artículo exigible.',
      note: 'Los datos anuales y la cobertura jurídica deberán validarse antes de considerar el contenido autosuficiente.',
      tone: 'area',
      approvedThemes: 0
    }),
    'diputacion-toledo-admin-2026': Object.freeze({
      badge: 'Diputación · revisión abierta',
      secondary: 'Resumen y práctica',
      heading: 'Temario en revisión pedagógica',
      description: 'El material publicado sirve para orientación y práctica, pero no se considera manual completo. El tema 22 mantiene además la reserva documental del OAPGT.',
      note: 'No utilizar OpoWeb como fuente única hasta concluir la auditoría pedagógica y cerrar la documentación del OAPGT.',
      tone: 'area',
      approvedThemes: 0
    })
  });

  const activeOpe = () => typeof active === 'function' ? active() : null;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

  function patchVersion(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      node.nodeValue = node.nodeValue
        .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
        .replace(/OpoWeb v0\.(?:85|86|89)/g, 'OpoWeb v0.89')
        .replace(/Auditoría v0\.(?:85|86|89)/g, 'Auditoría pedagógica abierta')
        .replace(/auditoría v0\.(?:85|86|89)/gi, 'auditoría pedagógica abierta')
        .replace(/Fuente teórica autosuficiente/g, 'Resumen y práctica · no fuente única')
        .replace(/Fuente teórica principal/g, 'Resumen y práctica · no fuente única')
        .replace(/Tema autosuficiente/g, 'Tema en revisión pedagógica')
        .replace(/temas autosuficientes/g, 'epígrafes cargados')
        .replace(/Desarrollo completo del epígrafe oficial/g, 'Resumen del epígrafe · revisión pendiente')
        .replace(/Temario completo de La Puebla dentro de OpoWeb/g, 'Material de La Puebla en reconstrucción manual')
        .replace(/Temario completo para estudiar dentro de OpoWeb/g, 'Material en revisión pedagógica')
        .replace(/opoweb-v9[23456]/g, CACHE);
    }
  }

  function countQuestions(ope) {
    return Object.values(ope?.themeTests || {}).reduce((sum, bank) => sum + (bank?.length || 0), 0);
  }

  function programmeCard() {
    const ope = activeOpe();
    const item = config[ope?.id];
    if (!ope || !item) return '';
    const questions = countQuestions(ope);
    const practicals = ope.practicalCases?.length || 0;
    const simulations = ope.simulacros?.length || 0;
    const firstScore = item.approvedThemes > 0 ? item.approvedThemes : ope.themes?.length || 0;
    const firstLabel = item.approvedThemes > 0 ? 'temas aprobados por el usuario' : 'epígrafes cargados';
    return `<article class="card" id="programmeStatusV90">
      <div class="pill-row">
        <span class="badge ${item.tone}">${esc(item.badge)}</span>
        <span class="badge ${item.tone}">${esc(item.secondary)}</span>
        <span class="badge area">Versión ${VERSION}</span>
      </div>
      <h2>${esc(item.heading)}</h2>
      <p>${esc(item.description)}</p>
      <div class="grid three">
        <div><span class="score">${firstScore}</span><p class="muted">${firstLabel}</p></div>
        <div><span class="score">${questions.toLocaleString('es-ES')}</span><p class="muted">preguntas disponibles</p></div>
        <div><span class="score">${practicals + simulations}</span><p class="muted">supuestos y simulacros</p></div>
      </div>
      <p class="muted">${esc(item.note)}</p>
    </article>`;
  }

  function removeLegacyProgrammeCards() {
    document.querySelectorAll('#theoryStatusV85, #pueblaTheoryStatusV86, #programmeStatusV89, #programmeStatusV90').forEach(node => node.remove());
  }

  function insertProgrammeCard(position = 'afterbegin') {
    removeLegacyProgrammeCards();
    if (typeof content === 'undefined' || !content || state?.selectedTheme) return;
    const html = programmeCard();
    if (html) content.insertAdjacentHTML(position, html);
  }

  function finalizeView(showCard = false, position = 'afterbegin') {
    if (showCard) insertProgrammeCard(position);
    else removeLegacyProgrammeCards();
    patchVersion(document.body);
    queueMicrotask(() => patchVersion(document.body));
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(document.getElementById('oposicionCard')); };
  }
  if (typeof renderTemario === 'function') {
    const original = renderTemario;
    renderTemario = function () { original(); finalizeView(!state.selectedTheme, 'afterbegin'); };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () { original(); finalizeView(true, 'beforeend'); };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () { original(); finalizeView(true, 'beforeend'); };
  }
  if (typeof renderAll === 'function') {
    const original = renderAll;
    renderAll = function () { original(); finalizeView(state?.view === 'temario' && !state.selectedTheme); };
    try { renderAll(); } catch (_) { finalizeView(false); }
  } else finalizeView(false);

  window.addEventListener('opoweb:ready', () => finalizeView(state?.view === 'temario' && !state.selectedTheme));
  window.OPOWEB_PEDAGOGY_V90 = Object.freeze({
    version: VERSION,
    cache: CACHE,
    status: 'RESUMEN_Y_PRACTICA_NO_FUENTE_UNICA',
    completenessPercentagesWithdrawn: true,
    reviewRequiredForAllThemes: true,
    userApprovedThemes: Object.freeze({ 'puebla-aux-admin-2026': Object.freeze([1]) }),
    oapgtReservation: true
  });
})();