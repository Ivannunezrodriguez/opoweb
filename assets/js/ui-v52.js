(() => {
  const VERSION = 'v0.52.0';
  const previousRenderSupuestos = renderSupuestos;

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function removeOldPhaseCards() {
    [
      'dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipV47Card', 'dipV48Card', 'dipV49Card', 'dipV50Card', 'dipV51Card', 'dipV52Card',
      'dipNextBlockV44', 'dipNextBlockV45', 'dipNextBlockV46', 'dipNextBlockV47', 'dipNextBlockV48', 'dipNextBlockV49', 'dipNextBlockV50', 'dipNextBlockV51', 'dipNextBlockV52'
    ].forEach(id => document.getElementById(id)?.remove());
  }

  function phaseCards() {
    return `<article class="card" id="dipV52Card">
      <div class="pill-row"><span class="badge common">Diputación v0.52</span><span class="badge">20 casos</span><span class="badge">40 variantes</span><span class="badge">3 simulacros prácticos</span></div>
      <h2>Autoevaluación práctica completa</h2>
      <p>Cada supuesto dispone de dos variantes y una rúbrica sobre 10 puntos. Se añaden tres simulacros prácticos de entrenamiento; su duración es una recomendación interna y no se presenta como formato oficial.</p>
    </article>
    <article class="card compact" id="dipNextBlockV52">
      <h3>Siguiente fase</h3>
      <p><strong>Test:</strong> elevar los bancos de los 39 temas cerrados hasta 30–40 preguntas reales.</p>
      <p><strong>Práctico:</strong> usar los resultados de las rúbricas para detectar bloques débiles y crear nuevas variantes.</p>
      <p><strong>Tema 22:</strong> mantener bloqueado hasta verificar sus fuentes internas oficiales.</p>
    </article>`;
  }

  function caseKey(item) {
    return progressKey('case', item.id);
  }

  function mockKey(item) {
    return progressKey('practicalMock', item.id);
  }

  function getCaseState(item) {
    const key = caseKey(item);
    state.progress[key] ||= {};
    Object.assign(state.progress[key], {
      answer: state.progress[key].answer || '',
      reviewed: Boolean(state.progress[key].reviewed),
      solutionOpen: Boolean(state.progress[key].solutionOpen),
      selectedVariant: state.progress[key].selectedVariant || 'base',
      rubric: state.progress[key].rubric || {}
    });
    return state.progress[key];
  }

  function rubricScore(item, rubricState = {}) {
    return Number((item.rubric || []).reduce((sum, criterion) => sum + (rubricState[criterion.id] ? criterion.points : 0), 0).toFixed(1));
  }

  function rubricHtml(item, saved, prefix = 'case') {
    const score = rubricScore(item, saved.rubric || {});
    const rows = (item.rubric || []).map(criterion => `
      <label class="option">
        <input type="checkbox" class="rubric-check" data-prefix="${escapeAttr(prefix)}" data-criterion="${escapeAttr(criterion.id)}" ${saved.rubric?.[criterion.id] ? 'checked' : ''}>
        <span>${escapeHtml(criterion.label)} <strong>(${criterion.points} p)</strong></span>
      </label>`).join('');
    return `<section class="section rubric-panel">
      <h3>Rúbrica de autoevaluación</h3>
      <p><strong>Puntuación marcada: <span id="rubricScore-${escapeAttr(prefix)}">${score}</span> / ${item.maxScore || 10}</strong></p>
      ${rows}
      <p class="muted">La puntuación es una autoevaluación de entrenamiento, no una calificación oficial del tribunal.</p>
    </section>`;
  }

  function solutionHtml(item, saved, prefix = 'case') {
    if (!saved.solutionOpen) return '';
    const sections = (item.solution || []).map(section => `<section class="section"><h3>${escapeHtml(section.heading)}</h3>${(section.paragraphs || []).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}</section>`).join('');
    const basis = (item.legalBasis || []).map(source => `<li>${escapeHtml(source)}</li>`).join('');
    const checklist = (item.checklist || []).map(point => `<li>${escapeHtml(point)}</li>`).join('');
    return `<div class="case-solution open">
      <h2>Solución orientativa</h2>
      ${sections}
      <section class="section"><h3>Base normativa o técnica</h3><ul>${basis}</ul></section>
      <section class="section"><h3>Lista de autocorrección</h3><ul>${checklist}</ul></section>
      ${rubricHtml(item, saved, prefix)}
    </div>`;
  }

  function modeToolbar(mode) {
    return `<article class="card compact"><div class="toolbar" style="margin-bottom:0">
      <button class="btn ${mode === 'cases' ? '' : 'ghost'}" id="caseModeButton">Casos individuales</button>
      <button class="btn ${mode === 'mocks' ? '' : 'ghost'}" id="mockModeButton">Simulacros prácticos</button>
    </div></article>`;
  }

  function bindModeButtons() {
    document.getElementById('caseModeButton')?.addEventListener('click', () => {
      state.practicalMode = 'cases';
      renderSupuestos();
    });
    document.getElementById('mockModeButton')?.addEventListener('click', () => {
      state.practicalMode = 'mocks';
      renderSupuestos();
    });
  }

  function renderCaseMode(ope) {
    const cases = ope.practicalCases || [];
    if (!state.selectedPracticalCase || !cases.some(item => item.id === state.selectedPracticalCase)) state.selectedPracticalCase = cases[0].id;
    const index = Math.max(0, cases.findIndex(item => item.id === state.selectedPracticalCase));
    const item = cases[index];
    const saved = getCaseState(item);
    const reviewed = cases.filter(caseEntry => state.progress[caseKey(caseEntry)]?.reviewed).length;
    const variant = item.variants?.find(entry => entry.id === saved.selectedVariant);
    const statement = variant ? `${item.statement} VARIANTE: ${variant.text}` : item.statement;
    const tasks = (item.tasks || []).map((task, taskIndex) => `<li><strong>${taskIndex + 1}.</strong> ${escapeHtml(task)}</li>`).join('');
    const variantOptions = [`<option value="base" ${saved.selectedVariant === 'base' ? 'selected' : ''}>Caso base</option>`, ...(item.variants || []).map(entry => `<option value="${escapeAttr(entry.id)}" ${saved.selectedVariant === entry.id ? 'selected' : ''}>${escapeHtml(entry.title)}</option>`)].join('');

    content.innerHTML = `${modeToolbar('cases')}
      <article class="card compact">
        <div class="grid three">
          <div><span class="score">${cases.length}</span><p class="muted">casos completos</p></div>
          <div><span class="score">${reviewed}</span><p class="muted">revisados</p></div>
          <div><span class="score">${Math.round(reviewed / cases.length * 100)}%</span><p class="muted">avance práctico</p></div>
        </div>
        <div class="toolbar">
          <button class="btn ghost" id="previousCase" ${index === 0 ? 'disabled' : ''}>← Anterior</button>
          <label>Supuesto <select id="practicalCaseSelect" class="select" style="max-width:620px">${cases.map((entry, entryIndex) => `<option value="${escapeAttr(entry.id)}" ${entry.id === item.id ? 'selected' : ''}>${entryIndex + 1}. ${escapeHtml(entry.title)}</option>`).join('')}</select></label>
          <button class="btn ghost" id="nextCase" ${index === cases.length - 1 ? 'disabled' : ''}>Siguiente →</button>
        </div>
      </article>
      <article class="card">
        <div class="pill-row"><span class="badge area">${escapeHtml(item.area)}</span><span class="badge">Temas ${(item.themes || []).join(', ')}</span><span class="badge">${escapeHtml(item.difficulty)}</span><span class="badge">${item.minutes} min</span>${saved.reviewed ? '<span class="badge common">revisado</span>' : ''}</div>
        <h2>Supuesto ${index + 1} de ${cases.length}. ${escapeHtml(item.title)}</h2>
        <label><strong>Versión del caso</strong><select id="caseVariantSelect" class="select" style="max-width:420px">${variantOptions}</select></label>
        <section class="section"><h3>Enunciado</h3><p>${escapeHtml(statement)}</p></section>
        <section class="section"><h3>Cuestiones que debes resolver</h3><ol>${tasks}</ol></section>
        <label for="caseAnswer"><strong>Tu respuesta</strong></label>
        <textarea id="caseAnswer" class="textarea" rows="14" placeholder="Estructura la respuesta por hechos, norma, órgano, trámite, plazo y consecuencia.">${escapeHtml(saved.answer)}</textarea>
        <p class="muted" id="caseSaveState">La respuesta se guarda automáticamente en este navegador.</p>
        <div class="toolbar">
          <button class="btn" id="toggleCaseSolution">${saved.solutionOpen ? 'Ocultar solución' : 'Mostrar solución y rúbrica'}</button>
          <button class="btn ghost" id="markCaseReviewed">${saved.reviewed ? 'Marcar como pendiente' : 'Marcar como revisado'}</button>
          <button class="btn ghost" id="resetCaseAnswer">Reiniciar caso</button>
        </div>
        ${solutionHtml(item, saved, 'case')}
      </article>`;

    bindModeButtons();
    document.getElementById('practicalCaseSelect')?.addEventListener('change', event => { state.selectedPracticalCase = event.target.value; renderSupuestos(); });
    document.getElementById('caseVariantSelect')?.addEventListener('change', event => { saved.selectedVariant = event.target.value; saveProgress(); renderSupuestos(); });
    document.getElementById('previousCase')?.addEventListener('click', () => { if (index > 0) { state.selectedPracticalCase = cases[index - 1].id; renderSupuestos(); } });
    document.getElementById('nextCase')?.addEventListener('click', () => { if (index < cases.length - 1) { state.selectedPracticalCase = cases[index + 1].id; renderSupuestos(); } });
    document.getElementById('caseAnswer')?.addEventListener('input', event => { saved.answer = event.target.value; saveProgress(); const note = document.getElementById('caseSaveState'); if (note) note.textContent = 'Respuesta guardada.'; });
    document.getElementById('toggleCaseSolution')?.addEventListener('click', () => { saved.solutionOpen = !saved.solutionOpen; saveProgress(); renderSupuestos(); });
    document.getElementById('markCaseReviewed')?.addEventListener('click', () => { saved.reviewed = !saved.reviewed; saveProgress(); renderSupuestos(); });
    document.getElementById('resetCaseAnswer')?.addEventListener('click', () => { Object.assign(saved, { answer: '', reviewed: false, solutionOpen: false, selectedVariant: 'base', rubric: {} }); saveProgress(); renderSupuestos(); });
    document.querySelectorAll('.rubric-check[data-prefix="case"]').forEach(input => input.addEventListener('change', event => {
      saved.rubric[event.target.dataset.criterion] = event.target.checked;
      saveProgress();
      const box = document.getElementById('rubricScore-case');
      if (box) box.textContent = rubricScore(item, saved.rubric);
    }));
  }

  function getMockState(mock) {
    const key = mockKey(mock);
    state.progress[key] ||= { answers: {}, solutionOpen: false, completed: false, rubrics: {} };
    state.progress[key].answers ||= {};
    state.progress[key].rubrics ||= {};
    return state.progress[key];
  }

  function renderMockMode(ope) {
    const mocks = ope.practicalMocks || [];
    if (!mocks.length) {
      content.innerHTML = `${modeToolbar('mocks')}<article class="card"><p class="muted">No hay simulacros prácticos configurados.</p></article>`;
      bindModeButtons();
      return;
    }
    if (!state.selectedPracticalMock || !mocks.some(item => item.id === state.selectedPracticalMock)) state.selectedPracticalMock = mocks[0].id;
    const mock = mocks.find(item => item.id === state.selectedPracticalMock);
    const saved = getMockState(mock);
    const caseMap = new Map((ope.practicalCases || []).map(item => [item.id, item]));
    const cases = mock.caseIds.map(id => caseMap.get(id)).filter(Boolean);
    const extension = caseMap.get(mock.extensionCaseId);
    const completed = mocks.filter(item => state.progress[mockKey(item)]?.completed).length;

    const caseBlocks = cases.map((item, index) => {
      const tasks = (item.tasks || []).map((task, taskIndex) => `<li><strong>${taskIndex + 1}.</strong> ${escapeHtml(task)}</li>`).join('');
      const localSaved = { solutionOpen: saved.solutionOpen, rubric: saved.rubrics[item.id] || {} };
      return `<article class="card">
        <div class="pill-row"><span class="badge area">Caso obligatorio ${index + 1}</span><span class="badge">Temas ${(item.themes || []).join(', ')}</span><span class="badge">10 puntos</span></div>
        <h2>${escapeHtml(item.title)}</h2>
        <p>${escapeHtml(item.statement)}</p>
        <ol>${tasks}</ol>
        <textarea class="textarea mock-answer" rows="12" data-case-id="${escapeAttr(item.id)}" placeholder="Desarrolla el caso sin consultar la solución.">${escapeHtml(saved.answers[item.id] || '')}</textarea>
        ${solutionHtml(item, localSaved, `mock-${index}`)}
      </article>`;
    }).join('');

    const totalScore = cases.reduce((sum, item) => sum + rubricScore(item, saved.rubrics[item.id] || {}), 0);
    content.innerHTML = `${modeToolbar('mocks')}
      <article class="card compact">
        <div class="grid three">
          <div><span class="score">${mocks.length}</span><p class="muted">simulacros de entrenamiento</p></div>
          <div><span class="score">${completed}</span><p class="muted">completados</p></div>
          <div><span class="score">${totalScore}/20</span><p class="muted">autoevaluación actual</p></div>
        </div>
        <label>Simulacro <select id="practicalMockSelect" class="select">${mocks.map(entry => `<option value="${escapeAttr(entry.id)}" ${entry.id === mock.id ? 'selected' : ''}>${escapeHtml(entry.title)}</option>`).join('')}</select></label>
      </article>
      <article class="card">
        <div class="pill-row"><span class="badge common">Entrenamiento interno</span><span class="badge">${mock.recommendedMinutes} min recomendados</span>${saved.completed ? '<span class="badge common">completado</span>' : ''}</div>
        <h2>${escapeHtml(mock.title)}</h2>
        <p>${escapeHtml(mock.instructions)}</p>
        <p class="muted"><strong>No es una reproducción del formato oficial:</strong> la convocatoria confirma un ejercicio práctico, pero esta duración y distribución son una herramienta interna de entrenamiento.</p>
        ${extension ? `<p><strong>Extensión opcional:</strong> ${escapeHtml(extension.title)}.</p>` : ''}
        <div class="toolbar">
          <button class="btn" id="toggleMockSolutions">${saved.solutionOpen ? 'Ocultar soluciones' : 'Finalizar y mostrar soluciones'}</button>
          <button class="btn ghost" id="markMockCompleted">${saved.completed ? 'Marcar como pendiente' : 'Marcar como completado'}</button>
          <button class="btn ghost" id="resetMock">Reiniciar simulacro</button>
        </div>
      </article>
      ${caseBlocks}`;

    bindModeButtons();
    document.getElementById('practicalMockSelect')?.addEventListener('change', event => { state.selectedPracticalMock = event.target.value; renderSupuestos(); });
    document.querySelectorAll('.mock-answer').forEach(textarea => textarea.addEventListener('input', event => { saved.answers[event.target.dataset.caseId] = event.target.value; saveProgress(); }));
    document.getElementById('toggleMockSolutions')?.addEventListener('click', () => { saved.solutionOpen = !saved.solutionOpen; saveProgress(); renderSupuestos(); });
    document.getElementById('markMockCompleted')?.addEventListener('click', () => { saved.completed = !saved.completed; saveProgress(); renderSupuestos(); });
    document.getElementById('resetMock')?.addEventListener('click', () => { Object.assign(saved, { answers: {}, solutionOpen: false, completed: false, rubrics: {} }); saveProgress(); renderSupuestos(); });
    cases.forEach((item, index) => {
      saved.rubrics[item.id] ||= {};
      document.querySelectorAll(`.rubric-check[data-prefix="mock-${index}"]`).forEach(input => input.addEventListener('change', event => {
        saved.rubrics[item.id][event.target.dataset.criterion] = event.target.checked;
        saveProgress();
        renderSupuestos();
      }));
    });
  }

  renderSupuestos = function () {
    const ope = active();
    if (ope?.id !== 'diputacion-toledo-admin-2026') return previousRenderSupuestos();
    setTitle('Supuestos prácticos', 'Casos individuales, variantes, rúbricas y simulacros prácticos de entrenamiento.');
    state.practicalMode ||= 'cases';
    if (state.practicalMode === 'mocks') renderMockMode(ope); else renderCaseMode(ope);
    patchVersion();
  };

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }

  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () {
      original();
      removeOldPhaseCards();
      if (active()?.id === 'diputacion-toledo-admin-2026') content.insertAdjacentHTML('beforeend', phaseCards());
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      removeOldPhaseCards();
      ['caseProgressV51', 'caseProgressV52'].forEach(id => document.getElementById(id)?.remove());
      const ope = active();
      if (ope?.id === 'diputacion-toledo-admin-2026') {
        const cases = ope.practicalCases || [];
        const mocks = ope.practicalMocks || [];
        const reviewed = cases.filter(item => state.progress[caseKey(item)]?.reviewed).length;
        const completed = mocks.filter(item => state.progress[mockKey(item)]?.completed).length;
        content.insertAdjacentHTML('beforeend', phaseCards());
        content.insertAdjacentHTML('beforeend', `<article class="card" id="caseProgressV52">
          <h2>Progreso práctico</h2>
          <div class="grid two">
            <div><div class="progress-bar"><span style="width:${cases.length ? Math.round(reviewed / cases.length * 100) : 0}%"></span></div><p><strong>${reviewed} de ${cases.length}</strong> casos revisados.</p></div>
            <div><div class="progress-bar"><span style="width:${mocks.length ? Math.round(completed / mocks.length * 100) : 0}%"></span></div><p><strong>${completed} de ${mocks.length}</strong> simulacros prácticos completados.</p></div>
          </div>
        </article>`);
      }
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();