(() => {
  const VERSION = 'v0.39.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
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
      const ope = active();
      if (ope?.id === 'uc3m-aux-admin-2026' && ope.testAudit?.solidThemes === 20) {
        content.insertAdjacentHTML('afterbegin', `<article class="card compact"><h2>Cobertura v0.39</h2><p><strong>Los 20 temas tienen al menos 20 preguntas válidas.</strong> El banco ya supera el mínimo operativo y entra en fase de ampliación hacia 30–40 preguntas por tema.</p><p class="muted">La auditoría mantiene control de duplicados, cuatro opciones distintas, respuesta válida, justificación y reparto A/B/C/D.</p></article>`);
      }
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      const audit = active()?.testAudit;
      if (audit?.solidThemes === 20) {
        content.insertAdjacentHTML('beforeend', `<article class="card"><h2>Banco UC3M v0.39</h2><p><strong>${audit.totalQuestions} preguntas válidas</strong> · 20 temas con banco sólido · mínimo ${audit.minimumQuestions} por tema.</p><p>Objetivo siguiente: 30 preguntas por tema, priorizando preguntas de supuesto práctico y literalidad UC3M.</p></article>`);
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