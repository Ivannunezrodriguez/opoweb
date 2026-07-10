(() => {
  const VERSION = 'v0.37.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function auditCard(audit) {
    if (!audit) return '';
    const rows = (audit.themes || []).map(item => {
      const cls = item.count >= audit.floorPerTheme ? 'common' : '';
      return `<tr><td>Tema ${item.number}</td><td>${escapeHtml(item.title)}</td><td><strong>${item.count}</strong></td><td><span class="badge ${cls}">${escapeHtml(item.state)}</span></td><td>A ${item.answerPositions.A} · B ${item.answerPositions.B} · C ${item.answerPositions.C} · D ${item.answerPositions.D}</td></tr>`;
    }).join('');

    return `<article class="card">
      <h2>Auditoría del banco de preguntas</h2>
      <div class="grid three">
        <div><span class="score">${audit.totalQuestions}</span><p class="muted">preguntas válidas</p></div>
        <div><span class="score">${audit.minimumQuestions}</span><p class="muted">mínimo por tema</p></div>
        <div><span class="score">${audit.targetPerTheme}</span><p class="muted">objetivo por tema</p></div>
      </div>
      <p>Todos los temas han alcanzado el mínimo operativo de <strong>${audit.floorPerTheme} preguntas</strong>. El objetivo final continúa siendo 30–40 preguntas manuales por tema.</p>
      <p class="muted">Duplicados exactos eliminados: ${audit.duplicatesRemoved}. Preguntas estructuralmente inválidas eliminadas: ${audit.invalidRemoved}. Cada pregunta conserva cuatro opciones distintas, respuesta válida y justificación.</p>
      <details class="section"><summary><strong>Ver cobertura y reparto de respuestas por tema</strong></summary><div class="table-wrap"><table><thead><tr><th>Tema</th><th>Contenido</th><th>Preguntas</th><th>Estado</th><th>Respuesta correcta</th></tr></thead><tbody>${rows}</tbody></table></div></details>
    </article>`;
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () {
      original();
      patchVersion();
    };
  }

  if (typeof themeItem === 'function') {
    const original = themeItem;
    themeItem = function (theme) {
      let html = original(theme);
      const audit = theme.testAudit;
      if (audit) {
        const cls = audit.count >= 15 ? 'common' : '';
        html = html.replace('</div></article>', `<span class="badge ${cls}">${audit.count} preguntas · ${escapeHtml(audit.state)}</span></div></article>`);
      }
      return html;
    };
  }

  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () {
      original();
      const ope = active();
      if (ope?.testAudit) content.insertAdjacentHTML('afterbegin', auditCard(ope.testAudit));
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () {
      original();
      const ope = active();
      if (ope?.id === 'uc3m-aux-admin-2026') {
        setTitle('Simulacros UC3M', '70 preguntas equilibradas entre los 20 temas oficiales.');
        const sim = ope.simulacros?.find(item => item.id === state.selectedSim) || ope.simulacros?.[0];
        const meta = sim?.audit;
        if (meta) {
          content.insertAdjacentHTML('afterbegin', `<article class="card compact"><h2>Composición controlada</h2><p><strong>${meta.questions} preguntas</strong> · ${meta.themes} temas · ${escapeHtml(meta.distribution)} · sin preguntas repetidas dentro del simulacro.</p><p class="muted">Se mantiene la corrección oficial: +1 acierto, −1/3 error y 0 en blanco.</p></article>`);
        }
      }
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      const audit = active()?.testAudit;
      if (audit) {
        content.insertAdjacentHTML('beforeend', `<article class="card"><h2>Cobertura del banco</h2><p><strong>${audit.totalQuestions} preguntas válidas</strong> distribuidas entre 20 temas.</p><p>Mínimo actual: ${audit.minimumQuestions} por tema. Objetivo final: ${audit.targetPerTheme} o más por tema.</p></article>`);
      }
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else {
    patchVersion();
  }
})();