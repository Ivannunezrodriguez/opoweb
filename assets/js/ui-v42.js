(() => {
  const VERSION = 'v0.42.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function qualityClass(item) {
    if ((item?.content || 0) >= 30) return 'common';
    if ((item?.content || 0) >= 20) return 'area';
    return '';
  }

  function examSpecCard(ope) {
    const spec = ope?.examSpec;
    if (!spec) return '';
    return `<article class="card compact" id="examSpecV42">
      <div class="pill-row"><span class="badge common">Formato oficial verificado</span><span class="badge">${escapeHtml(spec.source)}</span></div>
      <div class="grid three">
        <div><span class="score">${spec.main} + ${spec.reserve}</span><p class="muted">preguntas y reservas</p></div>
        <div><span class="score">${spec.minutes ?? '—'}</span><p class="muted">minutos</p></div>
        <div><span class="score">${escapeHtml(spec.verified)}</span><p class="muted">última comprobación</p></div>
      </div>
      <p><strong>Segundo ejercicio o casos:</strong> ${escapeHtml(spec.practical)}</p>
    </article>`;
  }

  function themeQualityCard(ope, themeId) {
    const theme = ope?.themes?.find(item => item.id === themeId);
    const audit = theme?.globalAuditV42;
    if (!audit) return '';
    const note = audit.generic
      ? `${audit.generic} preguntas de plantilla siguen pendientes de sustitución.`
      : 'Este banco no contiene preguntas de plantilla detectadas.';
    return `<article class="card compact" id="themeQualityV42">
      <div class="pill-row"><span class="badge ${qualityClass(audit)}">${audit.content} preguntas reales</span><span class="badge">Objetivo: 30–40</span></div>
      <p><strong>${escapeHtml(audit.state)}</strong>. ${escapeHtml(note)}</p>
      ${theme.sharedBankV42 ? `<p class="muted">Banco común reutilizado desde UC3M únicamente por coincidencia de norma y alcance. No se ha reutilizado contenido universitario específico.</p>` : ''}
    </article>`;
  }

  function globalQualityCard() {
    const opes = window.OPOSICIONES_DATA?.oposiciones || [];
    const rows = opes.map(ope => {
      const audit = ope.globalTestAudit || {};
      return `<tr>
        <td>${escapeHtml(ope.shortName)}</td>
        <td>${audit.content || 0}</td>
        <td>${audit.generic || 0}</td>
        <td>${audit.readyThemes || 0}/${ope.themes?.length || 0}</td>
        <td>${audit.targetThemes || 0}/${ope.themes?.length || 0}</td>
      </tr>`;
    }).join('');
    const reuse = window.OPOWEB_PERFECCION_V42 || {};
    return `<article class="card" id="globalQualityV42">
      <h2>Control de perfeccionamiento v0.42</h2>
      <p>Se han sustituido <strong>${reuse.replacedBanks || 0} bancos de plantilla</strong> mediante reutilización normativa segura, incorporando <strong>${reuse.reusedQuestions || 0} preguntas reales</strong>. La meta no es inflar cifras: cada tema debe alcanzar 30–40 preguntas válidas y contenido suficiente para estudiar sin depender de resúmenes externos.</p>
      <div class="table-wrap"><table><thead><tr><th>OPE</th><th>Reales</th><th>Plantilla</th><th>Temas con 20+</th><th>Temas con 30+</th></tr></thead><tbody>${rows}</tbody></table></div>
    </article>`;
  }

  function renderQuestionV42(question, label, saved) {
    const chosen = saved.answers?.[question.id] || '';
    const corrected = Boolean(saved.corrected);
    const options = (question.options || []).map(option => {
      let cls = 'option';
      if (corrected && option.letter === question.answer) cls += ' correct';
      if (corrected && chosen === option.letter && chosen !== question.answer) cls += ' wrong';
      return `<label class="${cls}"><input type="radio" name="${escapeAttr(question.id)}" value="${option.letter}" ${chosen === option.letter ? 'checked' : ''}> <span><strong>${option.letter})</strong> ${escapeHtml(option.text)}</span></label>`;
    }).join('');
    return `<section class="question" data-qid="${escapeAttr(question.id)}"><h3>${escapeHtml(label)} ${escapeHtml(question.text)}</h3>${options}${corrected ? resultHtml(question, chosen) : ''}</section>`;
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }

  if (typeof themeItem === 'function') {
    const original = themeItem;
    themeItem = function (theme) {
      let html = original(theme);
      html = html.replace(/<span class="badge[^\"]*">\d+ preguntas[^<]*<\/span>/g, '');
      const audit = theme.globalAuditV42;
      if (!audit) return html;
      const quality = `<span class="badge ${qualityClass(audit)}">${audit.content} reales${audit.generic ? ` · ${audit.generic} plantilla` : ''}</span>`;
      return html.replace('</div></article>', `${quality}</div></article>`);
    };
  }

  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () {
      original();
      document.getElementById('examSpecV42')?.remove();
      content.insertAdjacentHTML('afterbegin', examSpecCard(active()));
      patchVersion();
    };
  }

  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () {
      original();
      document.getElementById('themeQualityV42')?.remove();
      const ope = active();
      content.insertAdjacentHTML('afterbegin', themeQualityCard(ope, state.selectedTestTheme || ope.themes?.[0]?.id));
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    renderSimulacros = function () {
      const ope = active();
      const spec = ope.examSpec || { main: 50, reserve: 0, minutes: null };
      setTitle('Simulacros oficiales', `${spec.main} preguntas, ${spec.reserve} de reserva y ${spec.minutes ?? '—'} minutos.`);
      const selected = state.selectedSim || ope.simulacros?.[0]?.id;
      state.selectedSim = selected;
      const sim = ope.simulacros.find(item => item.id === selected) || ope.simulacros[0];
      if (!sim) {
        content.innerHTML = '<div class="card"><p class="muted">Todavía no hay simulacros disponibles.</p></div>';
        return;
      }
      const mainQuestions = sim.questions || [];
      const reserves = sim.reserveQuestions || [];
      const key = progressKey('sim', selected);
      state.progress[key] ||= { answers: {}, corrected: false, score: null };
      const saved = state.progress[key];
      const scoreText = saved.score ? formatScore(saved.score) : '';

      content.innerHTML = `${examSpecCard(ope)}
        <div class="card compact toolbar"><label>Simulacro <select id="simSelect" class="select" style="max-width:620px">${ope.simulacros.map(item => `<option value="${item.id}" ${item.id === selected ? 'selected' : ''}>${escapeHtml(item.title)}</option>`).join('')}</select></label></div>
        <article class="card"><div class="toolbar"><button class="btn" id="correctSet">Corregir</button><button class="btn ghost" id="resetSet">Reiniciar</button><span id="scoreBox" class="score">${escapeHtml(scoreText)}</span></div>
          <h2>Preguntas puntuables</h2>
          <p class="muted">La nota se calcula solo con estas ${mainQuestions.length} preguntas.</p>
          ${mainQuestions.map((question, index) => renderQuestionV42(question, `${index + 1}.`, saved)).join('')}
          ${reserves.length ? `<h2>Preguntas de reserva</h2><p class="muted">Se corrigen para entrenamiento, pero no alteran la nota mientras no sustituyan una pregunta anulada.</p>${reserves.map((question, index) => renderQuestionV42(question, `R${index + 1}.`, saved)).join('')}` : ''}
        </article>`;

      document.getElementById('simSelect')?.addEventListener('change', event => {
        state.selectedSim = event.target.value;
        renderSimulacros();
      });
      document.querySelectorAll('input[type=radio]').forEach(input => input.addEventListener('change', event => {
        state.progress[key].answers[event.target.name] = event.target.value;
        state.progress[key].corrected = false;
        state.progress[key].score = null;
        saveProgress();
      }));
      document.getElementById('correctSet')?.addEventListener('click', () => {
        const result = calculate(mainQuestions, state.progress[key].answers, ope.scoring);
        state.progress[key].corrected = true;
        state.progress[key].score = result;
        saveProgress();
        renderSimulacros();
      });
      document.getElementById('resetSet')?.addEventListener('click', () => {
        delete state.progress[key];
        saveProgress();
        renderSimulacros();
      });
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      document.getElementById('globalQualityV42')?.remove();
      content.insertAdjacentHTML('beforeend', globalQualityCard());
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();