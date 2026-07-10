(() => {
  const VERSION = 'v0.38.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function reinforcementCard() {
    const audit = active()?.testAudit;
    const reinforced = audit?.reinforcedThemes || [];
    if (!reinforced.length) return '';
    const rows = reinforced.map(item => `<tr><td>Tema ${item.number}</td><td><strong>${item.count}</strong></td><td><span class="badge common">${escapeHtml(item.state)}</span></td></tr>`).join('');
    return `<article class="card">
      <h2>Refuerzo prioritario v0.38</h2>
      <p>Los temas internos UC3M que estaban en el mínimo operativo se han ampliado con preguntas manuales de segundo nivel.</p>
      <div class="table-wrap"><table><thead><tr><th>Tema</th><th>Preguntas válidas</th><th>Estado</th></tr></thead><tbody>${rows}</tbody></table></div>
      <p class="muted">El siguiente objetivo general sigue siendo alcanzar 30–40 preguntas de calidad por tema.</p>
    </article>`;
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () {
      original();
      patchVersion();
    };
  }

  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () {
      original();
      if (active()?.id === 'uc3m-aux-admin-2026') {
        content.insertAdjacentHTML('afterbegin', reinforcementCard());
      }
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      const audit = active()?.testAudit;
      if (audit?.reinforcedThemes?.length) {
        content.insertAdjacentHTML('beforeend', `<article class="card"><h2>Refuerzo v0.38</h2><p><strong>${audit.reinforcedThemes.length} temas prioritarios</strong> han alcanzado al menos ${audit.reinforcedTarget} preguntas válidas.</p></article>`);
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