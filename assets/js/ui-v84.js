(() => {
  const VERSION = 'v0.84.0';
  const release = () => window.OPOWEB_MUNICIPALES_V84 || {};
  const activeOpe = () => (typeof active === 'function' ? active() : null);

  function patchText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      node.nodeValue = node.nodeValue
        .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
        .replace(/OpoWeb v0\.83/g, 'OpoWeb v0.84')
        .replace(/Auditoría v0\.83/g, 'Auditoría v0.84')
        .replace(/auditoría v0\.83/gi, 'auditoría v0.84')
        .replace(/opoweb-v90/g, 'opoweb-v91')
        .replace(/\bv90\b/g, 'v91');
    });
  }

  function patchVersion() {
    patchText(document.getElementById('oposicionCard'));
    patchText(document.getElementById('content'));
  }

  function auditForCurrent() {
    const ope = activeOpe();
    if (ope?.id === 'puebla-aux-admin-2026') return { name: 'La Puebla', audit: release().puebla, process: ope.selectionProcess };
    if (ope?.id === 'carranque-aux-admin-2026') return { name: 'Carranque', audit: release().carranque, process: ope.selectionProcess };
    return null;
  }

  function card() {
    const current = auditForCurrent();
    if (!current) return '';
    const { name, audit, process } = current;
    const first = process?.firstExercise || {};
    const practicalScope = name === 'Carranque' ? 'temas 3 a 20' : 'los 19 temas';
    const progress = Number(audit?.estimatedProgress || 95);
    const badgeClass = audit?.status === 'APTO' ? 'common' : '';
    const pendingText = progress === 99
      ? 'El 1 % restante se reserva para anuncios posteriores, fecha definitiva, posibles correcciones de bases y comprobación manual final.'
      : 'Existen controles pendientes. Consulta el informe de auditoría antes de considerar cerrado este bloque.';
    return `<article class="card" id="municipalAuditV84">
      <div class="pill-row"><span class="badge common">${name} v0.84</span><span class="badge ${badgeClass}">Auditoría ${audit?.status || 'pendiente'}</span><span class="badge area">${progress} % estimado</span></div>
      <h2>Programa y examen contrastados con las bases oficiales</h2>
      <p>Los títulos de los temas se muestran con la redacción literal de las bases. El banco se controla por duplicados, opciones, respuesta, trazabilidad, dificultad y equilibrio de letras.</p>
      <div class="grid three">
        <div><span class="score">${audit?.totalQuestions || 0}</span><p class="muted">preguntas auditadas</p></div>
        <div><span class="score">${audit?.literalThemes || 0}/${audit?.themes?.length || 0}</span><p class="muted">títulos literales</p></div>
        <div><span class="score">${audit?.practicalCases || 0}</span><p class="muted">supuestos prácticos</p></div>
      </div>
      <p><strong>Primer ejercicio:</strong> ${first.main || '—'} + ${first.reserve || 0} reservas, ${first.minutes || '—'} minutos, +${first.correct ?? '—'} por acierto y ${first.wrong ?? '—'} por error.</p>
      <p><strong>Práctico:</strong> cobertura de ${practicalScope}. La legislación exigible es la vigente en la fecha del examen.</p>
      <p class="muted">${pendingText}</p>
    </article>`;
  }

  function appendCard() {
    document.querySelectorAll('#municipalAuditV84').forEach(node => node.remove());
    const html = card();
    if (html && typeof content !== 'undefined' && content) content.insertAdjacentHTML('beforeend', html);
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () { original(); appendCard(); patchVersion(); };
  }
  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () { original(); appendCard(); patchVersion(); };
  }
  if (typeof renderSupuestos === 'function') {
    const original = renderSupuestos;
    renderSupuestos = function () { original(); appendCard(); patchVersion(); };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () { original(); appendCard(); patchVersion(); };
  }
  if (typeof renderAll === 'function') {
    const original = renderAll;
    renderAll = function () { original(); patchVersion(); };
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();

  window.addEventListener('opoweb:ready', () => {
    patchVersion();
    queueMicrotask(patchVersion);
  }, { once: true });
})();
