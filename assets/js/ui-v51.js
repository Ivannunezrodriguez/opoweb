(() => {
  const VERSION = 'v0.51.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function caseKey(item) {
    return progressKey('case', item.id);
  }

  function savedCase(item) {
    const key = caseKey(item);
    state.progress[key] ||= { answer: '', reviewed: false, solutionOpen: false };
    return state.progress[key];
  }

  function solutionHtml(item, saved) {
    const sections = (item.solution || []).map(section => `
      <section class="section">
        <h3>${escapeHtml(section.heading)}</h3>
        ${(section.paragraphs || []).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}
      </section>`).join('');
    const basis = (item.legalBasis || []).map(source => `<li>${escapeHtml(source)}</li>`).join('');
    const checklist = (item.checklist || []).map(point => `<li>${escapeHtml(point)}</li>`).join('');
    return `<div class="case-solution ${saved.solutionOpen ? 'open' : ''}" id="sol-${escapeAttr(item.id)}">
      <h2>Solución orientativa</h2>
      ${sections || `<p>${escapeHtml(item.guidance || '')}</p>`}
      <section class="section"><h3>Base normativa o técnica</h3><ul>${basis}</ul></section>
      <section class="section"><h3>Lista de autocorrección</h3><ul>${checklist}</ul></section>
    </div>`;
  }

  function caseCard(item, index, total) {
    const saved = savedCase(item);
    const tasks = (item.tasks || []).map((task, taskIndex) => `<li><strong>${taskIndex + 1}.</strong> ${escapeHtml(task)}</li>`).join('');
    return `<article class="card" id="activePracticalCase">
      <div class="pill-row">
        <span class="badge area">${escapeHtml(item.area || 'Supuesto práctico')}</span>
        <span class="badge">Temas ${(item.themes || []).join(', ')}</span>
        <span class="badge">${escapeHtml(item.difficulty || 'media')}</span>
        <span class="badge">${escapeHtml(item.minutes || 20)} min</span>
        ${saved.reviewed ? '<span class="badge common">revisado</span>' : ''}
      </div>
      <h2>Supuesto ${index + 1} de ${total}. ${escapeHtml(item.title)}</h2>
      <section class="section"><h3>Enunciado</h3><p>${escapeHtml(item.statement)}</p></section>
      <section class="section"><h3>Cuestiones que debes resolver</h3><ol>${tasks}</ol></section>
      <label for="caseAnswer"><strong>Tu respuesta</strong></label>
      <textarea id="caseAnswer" class="textarea" rows="14" placeholder="Estructura la respuesta por hechos, norma, órgano, trámite, plazo y consecuencia.">${escapeHtml(saved.answer || '')}</textarea>
      <p class="muted" id="caseSaveState">La respuesta se guarda automáticamente en este navegador.</p>
      <div class="toolbar" style="margin-top:12px">
        <button class="btn" id="toggleCaseSolution">${saved.solutionOpen ? 'Ocultar solución' : 'Mostrar solución'}</button>
        <button class="btn ghost" id="markCaseReviewed">${saved.reviewed ? 'Marcar como pendiente' : 'Marcar como revisado'}</button>
        <button class="btn ghost" id="resetCaseAnswer">Borrar respuesta</button>
      </div>
      ${solutionHtml(item, saved)}
    </article>`;
  }

  renderSupuestos = function () {
    const o = active();
    setTitle('Supuestos prácticos', 'Resuelve un caso, guarda tu respuesta y compárala con la solución estructurada.');
    const cases = o.practicalCases || [];
    if (!cases.length) {
      content.innerHTML = '<div class="card"><p class="muted">Esta convocatoria todavía no tiene supuestos prácticos.</p></div>';
      return;
    }

    if (!state.selectedPracticalCase || !cases.some(item => item.id === state.selectedPracticalCase)) {
      state.selectedPracticalCase = cases[0].id;
    }
    const index = Math.max(0, cases.findIndex(item => item.id === state.selectedPracticalCase));
    const item = cases[index];
    const reviewed = cases.filter(caseEntry => state.progress[caseKey(caseEntry)]?.reviewed).length;

    content.innerHTML = `
      <article class="card compact">
        <div class="grid three">
          <div><span class="score">${cases.length}</span><p class="muted">supuestos completos</p></div>
          <div><span class="score">${reviewed}</span><p class="muted">revisados</p></div>
          <div><span class="score">${Math.round(reviewed / cases.length * 100)}%</span><p class="muted">avance práctico</p></div>
        </div>
        <div class="toolbar">
          <button class="btn ghost" id="previousCase" ${index === 0 ? 'disabled' : ''}>← Anterior</button>
          <label>Supuesto <select id="practicalCaseSelect" class="select" style="max-width:680px">${cases.map((entry, entryIndex) => `<option value="${escapeAttr(entry.id)}" ${entry.id === item.id ? 'selected' : ''}>${entryIndex + 1}. ${escapeHtml(entry.title)}</option>`).join('')}</select></label>
          <button class="btn ghost" id="nextCase" ${index === cases.length - 1 ? 'disabled' : ''}>Siguiente →</button>
        </div>
      </article>
      ${caseCard(item, index, cases.length)}`;

    const select = document.getElementById('practicalCaseSelect');
    select?.addEventListener('change', event => {
      state.selectedPracticalCase = event.target.value;
      renderSupuestos();
    });
    document.getElementById('previousCase')?.addEventListener('click', () => {
      if (index > 0) {
        state.selectedPracticalCase = cases[index - 1].id;
        renderSupuestos();
      }
    });
    document.getElementById('nextCase')?.addEventListener('click', () => {
      if (index < cases.length - 1) {
        state.selectedPracticalCase = cases[index + 1].id;
        renderSupuestos();
      }
    });

    const key = caseKey(item);
    const answer = document.getElementById('caseAnswer');
    answer?.addEventListener('input', event => {
      state.progress[key].answer = event.target.value;
      saveProgress();
      const note = document.getElementById('caseSaveState');
      if (note) note.textContent = 'Respuesta guardada.';
    });

    document.getElementById('toggleCaseSolution')?.addEventListener('click', () => {
      state.progress[key].solutionOpen = !state.progress[key].solutionOpen;
      saveProgress();
      renderSupuestos();
    });
    document.getElementById('markCaseReviewed')?.addEventListener('click', () => {
      state.progress[key].reviewed = !state.progress[key].reviewed;
      saveProgress();
      renderSupuestos();
    });
    document.getElementById('resetCaseAnswer')?.addEventListener('click', () => {
      state.progress[key].answer = '';
      state.progress[key].reviewed = false;
      state.progress[key].solutionOpen = false;
      saveProgress();
      renderSupuestos();
    });
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
      ['dipV43Card', 'dipV44Card', 'dipV45Card', 'dipV46Card', 'dipV47Card', 'dipV48Card', 'dipV49Card', 'dipV50Card', 'dipV51Card'].forEach(id => document.getElementById(id)?.remove());
      if (active()?.id === 'diputacion-toledo-admin-2026') {
        content.insertAdjacentHTML('beforeend', `<article class="card" id="dipV51Card">
          <div class="pill-row"><span class="badge common">Diputación v0.51</span><span class="badge">20 supuestos completos</span></div>
          <h2>Fase práctica activada</h2>
          <p>Los supuestos genéricos se han sustituido por veinte casos completos con cuestiones, solución por fases, base normativa o técnica y lista de autocorrección.</p>
        </article>`);
      }
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      document.getElementById('caseProgressV51')?.remove();
      const o = active();
      if (o?.id === 'diputacion-toledo-admin-2026') {
        const cases = o.practicalCases || [];
        const reviewed = cases.filter(item => state.progress[caseKey(item)]?.reviewed).length;
        content.insertAdjacentHTML('beforeend', `<article class="card" id="caseProgressV51">
          <h2>Progreso en supuestos</h2>
          <div class="progress-bar"><span style="width:${cases.length ? Math.round(reviewed / cases.length * 100) : 0}%"></span></div>
          <p><strong>${reviewed} de ${cases.length}</strong> supuestos marcados como revisados.</p>
        </article>`);
      }
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();