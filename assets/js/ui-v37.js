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
    const floorPerTheme = Number(audit.floorPerTheme ?? 10);
    const targetPerTheme = Number(audit.targetPerTheme ?? 30);
    const rows = (audit.themes || []).map(item => {
      const count = Number(item.count || 0);
      const cls = count >= floorPerTheme ? 'common' : '';
      const positions = item.answerPositions || item.answerBalance || { A: 0, B: 0, C: 0, D: 0 };
      const state = item.state || (count >= targetPerTheme ? 'objetivo alcanzado' : count >= floorPerTheme ? 'mínimo operativo' : 'en desarrollo');
      return `<tr><td>Tema ${item.number}</td><td>${escapeHtml(item.title || '')}</td><td><strong>${count}</strong></td><td><span class="badge ${cls}">${escapeHtml(state)}</span></td><td>A ${positions.A || 0} · B ${positions.B || 0} · C ${positions.C || 0} · D ${positions.D || 0}</td></tr>`;
    }).join('');
    const minimumQuestions = Number(audit.minimumQuestions || 0);
    const floorMessage = minimumQuestions >= floorPerTheme
      ? `Todos los temas han alcanzado el mínimo operativo de <strong>${floorPerTheme} preguntas</strong>.`
      : `Todavía existen temas por debajo del mínimo operativo de <strong>${floorPerTheme} preguntas</strong>.`;

    return `<article class="card">
      <h2>Auditoría del banco de preguntas</h2>
      <div class="grid three">
        <div><span class="score">${audit.totalQuestions || 0}</span><p class="muted">preguntas válidas</p></div>
        <div><span class="score">${minimumQuestions}</span><p class="muted">mínimo por tema</p></div>
        <div><span class="score">${targetPerTheme}</span><p class="muted">objetivo por tema</p></div>
      </div>
      <p>${floorMessage} El objetivo final continúa siendo 30–40 preguntas manuales por tema.</p>
      <p class="muted">Duplicados exactos eliminados: ${audit.duplicatesRemoved || 0}. Preguntas estructuralmente inválidas eliminadas: ${audit.invalidRemoved || 0}. Cada pregunta conserva cuatro opciones distintas, respuesta válida y justificación.</p>
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
        html = html.replace('</div></article>', `<span class="badge ${cls}">${audit.count} preguntas · ${escapeHtml(audit.state || 'auditado')}</span></div></article>`);
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
        content.insertAdjacentHTML('beforeend', `<article class="card"><h2>Cobertura del banco</h2><p><strong>${audit.totalQuestions} preguntas válidas</strong> distribuidas entre ${audit.themes?.length || 0} temas.</p><p>Mínimo actual: ${audit.minimumQuestions} por tema. Objetivo final: ${audit.targetPerTheme || 30} o más por tema.</p></article>`);
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
