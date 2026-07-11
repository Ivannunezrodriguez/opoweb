(() => {
  const VERSION = 'v0.71.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function solutionHtml(item) {
    const solution = item.solution;
    if (!solution) return `<strong>Solución orientativa</strong><p>${escapeHtml(item.guidance || '')}</p>`;
    return `<strong>Solución orientativa desarrollada</strong>
      <p><strong>Base jurídica:</strong> ${solution.legalBasis.map(escapeHtml).join(' · ')}</p>
      <h3>Secuencia de resolución</h3>
      <ol>${solution.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
      <h3>Errores frecuentes</h3>
      <ul>${solution.commonErrors.map(error => `<li>${escapeHtml(error)}</li>`).join('')}</ul>
      <p><strong>Conclusión modelo:</strong> ${escapeHtml(solution.conclusion)}</p>
      ${item.rubric?.length ? `<h3>Rúbrica</h3><ul>${item.rubric.map(row => `<li>${escapeHtml(row)}</li>`).join('')}</ul>` : ''}`;
  }

  if (typeof renderSupuestos === 'function') {
    renderSupuestos = function () {
      const ope = active();
      setTitle('Supuestos prácticos', 'Redacta tu respuesta y compárala con la solución estructurada, la base jurídica y los errores frecuentes.');
      content.innerHTML = (ope.practicalCases || []).map((item, index) => `<article class="card">
        <div class="pill-row"><span class="badge common">Supuesto ${index + 1}</span>${item.themes?.length ? `<span class="badge">Tema ${item.themes.join(', ')}</span>` : ''}${item.solution ? '<span class="badge area">solución desarrollada</span>' : ''}</div>
        <h2>${escapeHtml(item.title)}</h2>
        <p>${escapeHtml(item.statement)}</p>
        <textarea class="textarea" placeholder="Escribe aquí tu respuesta razonada..."></textarea>
        <div class="toolbar" style="margin-top:12px"><button class="btn ghost show-solution" data-case="${escapeAttr(item.id)}">Mostrar solución</button></div>
        <div class="case-solution" id="sol-${escapeAttr(item.id)}">${solutionHtml(item)}</div>
      </article>`).join('');
      document.querySelectorAll('.show-solution').forEach(button => button.addEventListener('click', () => {
        const target = $('sol-' + button.dataset.case);
        target?.classList.toggle('open');
        button.textContent = target?.classList.contains('open') ? 'Ocultar solución' : 'Mostrar solución';
      }));
      patchVersion();
    };
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }
  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();
