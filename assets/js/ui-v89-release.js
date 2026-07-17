(() => {
  const VERSION = 'v0.89.1';
  const CACHE = 'opoweb-v95';

  const config = Object.freeze({
    'puebla-aux-admin-2026': Object.freeze({
      badge: 'La Puebla 19/19',
      secondary: 'Fuente teórica principal',
      heading: 'Temario completo de La Puebla',
      description: 'Los 19 temas oficiales están desarrollados y auditados. Incluye teoría, 570 preguntas, 20 supuestos y tres simulacros.',
      note: 'El margen residual corresponde a cambios normativos o publicaciones posteriores a la revisión.',
      tone: 'common'
    }),
    'carranque-aux-admin-2026': Object.freeze({
      badge: 'Carranque 20/20',
      secondary: 'Fuente teórica principal',
      heading: 'Temario completo de Carranque',
      description: 'Los 20 temas oficiales están desarrollados y auditados. Incluye teoría, 600 preguntas, 18 supuestos y simulacros.',
      note: 'El margen residual corresponde a cambios normativos, bases presupuestarias y publicaciones posteriores.',
      tone: 'common'
    }),
    'uc3m-aux-admin-2026': Object.freeze({
      badge: 'UC3M 99 %',
      secondary: 'Temas específicos 13–20 cerrados',
      heading: 'Temario UC3M actualizado',
      description: 'El bloque específico 13–20 está desarrollado con fuentes oficiales y un mínimo de 30 preguntas por tema. El resto del programa conserva cobertura común auditada.',
      note: 'Revisar antes del examen los datos anuales de presupuesto, admisión, plazas, ponderaciones y umbrales.',
      tone: 'common'
    }),
    'diputacion-toledo-admin-2026': Object.freeze({
      badge: 'Diputación ≈96 %',
      secondary: 'Reserva OAPGT · tema 22',
      heading: 'Temario de Diputación casi completo',
      description: 'Los temas 25–40 están cerrados y el resto del programa mantiene cobertura común. Los Estatutos del OAPGT siguen bloqueados hasta disponer de una consolidación oficial completa.',
      note: 'No utilizar todavía OpoWeb como fuente única para el apartado estatutario del OAPGT.',
      tone: 'area'
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
        .replace(/OpoWeb v0\.(?:85|86)/g, 'OpoWeb v0.89')
        .replace(/Auditoría v0\.(?:85|86)/g, 'Auditoría v0.89')
        .replace(/auditoría v0\.(?:85|86)/gi, 'auditoría v0.89')
        .replace(/opoweb-v9[234]/g, CACHE);
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
    return `<article class="card" id="programmeStatusV89">
      <div class="pill-row">
        <span class="badge ${item.tone}">${esc(item.badge)}</span>
        <span class="badge ${item.tone}">${esc(item.secondary)}</span>
        <span class="badge area">Versión ${VERSION}</span>
      </div>
      <h2>${esc(item.heading)}</h2>
      <p>${esc(item.description)}</p>
      <div class="grid three">
        <div><span class="score">${ope.themes?.length || 0}</span><p class="muted">temas oficiales</p></div>
        <div><span class="score">${questions.toLocaleString('es-ES')}</span><p class="muted">preguntas disponibles</p></div>
        <div><span class="score">${practicals + simulations}</span><p class="muted">supuestos y simulacros</p></div>
      </div>
      <p class="muted">${esc(item.note)}</p>
    </article>`;
  }

  function removeLegacyProgrammeCards() {
    document.querySelectorAll('#theoryStatusV85, #pueblaTheoryStatusV86, #programmeStatusV89').forEach(node => node.remove());
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
  window.OPOWEB_RELEASE_V89 = Object.freeze({
    version: VERSION,
    cache: CACHE,
    status: 'PUBLICADA',
    editorialCoverage: 'aproximadamente 99 %',
    strictSingleSourceReadiness: 'aproximadamente 97-98 %',
    oapgtReservation: true
  });
})();