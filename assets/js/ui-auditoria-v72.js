(() => {
  const VERSION = 'v0.72.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function auditCard() {
    const ope = active();
    const audit = ope?.qualityAudit;
    const global = window.OPOWEB_AUDITORIA_V72;
    if (!audit || !global) return '';
    const hard = audit.invalidAnswers + audit.invalidOptions + audit.duplicateIds + audit.missingJustifications + audit.genericQuestions + audit.themeDuplicates;
    const balance = audit.answerBalance?.counts || {};
    return `<article class="card" id="qualityAuditV72">
      <div class="pill-row"><span class="badge common">Auditoría v0.72</span><span class="badge">${audit.questions} preguntas</span><span class="badge area">${hard === 0 ? 'sin errores estructurales' : `${hard} incidencias`}</span></div>
      <h2>Control transversal de calidad</h2>
      <div class="grid three">
        <div><span class="score">${hard}</span><p class="muted">errores estructurales</p></div>
        <div><span class="score">${audit.themeDuplicates}</span><p class="muted">duplicados dentro del tema</p></div>
        <div><span class="score">${audit.shortJustifications}</span><p class="muted">justificaciones breves</p></div>
      </div>
      <p><strong>Distribución de respuestas:</strong> A ${balance.A || 0} · B ${balance.B || 0} · C ${balance.C || 0} · D ${balance.D || 0}.</p>
      <p class="muted">Los duplicados entre temas se registran como reutilización transversal y no como error automático. La auditoría global revisa ${global.totalQuestions} preguntas de las cuatro convocatorias.</p>
    </article>`;
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      document.getElementById('qualityAuditV72')?.remove();
      const html = auditCard();
      if (html) content.insertAdjacentHTML('beforeend', html);
      patchVersion();
    };
  }

  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () { original(); patchVersion(); };
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();
