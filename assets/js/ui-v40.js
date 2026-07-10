(() => {
  const VERSION = 'v0.40.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function removeLegacyCards(headings) {
    document.querySelectorAll('#content article.card h2').forEach(heading => {
      if (headings.includes(heading.textContent.trim())) heading.closest('article.card')?.remove();
    });
  }

  function priorityCard(audit) {
    if (!audit?.priorityThemes?.length) return '';
    const rows = audit.priorityThemes.map(item =>
      `<tr><td>Tema ${item.number}</td><td>${escapeHtml(item.title)}</td><td><strong>${item.count}</strong></td><td>${item.difficulty?.baja || 0} baja · ${item.difficulty?.media || 0} media · ${item.difficulty?.alta || 0} alta</td></tr>`
    ).join('');
    return `<article class="card">
      <h2>Temas prioritarios a 30+</h2>
      <p><strong>${audit.targetThemes} temas</strong> han alcanzado ya el objetivo de 30 preguntas o más. Los demás mantienen como mínimo 20 preguntas válidas.</p>
      <details class="section"><summary><strong>Ver los nueve bloques reforzados</strong></summary>
        <div class="table-wrap"><table><thead><tr><th>Tema</th><th>Contenido</th><th>Preguntas</th><th>Dificultad</th></tr></thead><tbody>${rows}</tbody></table></div>
      </details>
    </article>`;
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }

  if (typeof themeItem === 'function') {
    const original = themeItem;
    themeItem = function (theme) {
      let html = original(theme);
      html = html.replace(/<span class="badge[^"]*">(?:\d+ preguntas[^<]*|documento[^<]*|revisado[^<]*|capa UC3M[^<]*)<\/span>/g, '');
      const audit = theme.testAudit;
      if (audit) {
        const cls = audit.count >= 30 ? 'common' : '';
        html = html.replace('</div></article>', `<span class="badge ${cls}">${audit.count} preguntas · ${escapeHtml(audit.state)}</span></div></article>`);
      }
      return html;
    };
  }

  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () {
      original();
      removeLegacyCards(['Auditoría del banco de preguntas', 'Refuerzo prioritario v0.38', 'Cobertura v0.39']);
      const audit = active()?.testAudit;
      if (audit?.version === 'v0.40.0') content.insertAdjacentHTML('afterbegin', priorityCard(audit));
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      removeLegacyCards(['Cobertura del banco', 'Refuerzo v0.38', 'Banco UC3M v0.39']);
      const audit = active()?.testAudit;
      if (audit?.version === 'v0.40.0') {
        content.insertAdjacentHTML('beforeend', `<article class="card"><h2>Banco UC3M v0.40</h2><p><strong>${audit.totalQuestions} preguntas válidas</strong>.</p><p>${audit.targetThemes} temas con 30 o más preguntas y 20 temas con al menos ${audit.minimumQuestions}.</p><p class="muted">Siguiente objetivo: elevar los once temas restantes hasta 30 y sustituir las preguntas generales de los temas internos por literalidad UC3M cuando se incorporen los documentos oficiales.</p></article>`);
      }
      patchVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () {
      original();
      const ope = active();
      if (ope?.id === 'uc3m-aux-admin-2026') setTitle('Simulacros UC3M', '70 preguntas, 20 temas y penalización oficial de un tercio por error.');
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();