(() => {
  const VERSION = 'v0.30.0';

  function patchVisibleVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);

    const content = document.getElementById('content');
    if (content) content.innerHTML = content.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  if (typeof renderSidebar === 'function') {
    const baseRenderSidebar = renderSidebar;
    renderSidebar = function () {
      baseRenderSidebar();
      patchVisibleVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const baseRenderProgreso = renderProgreso;
    renderProgreso = function () {
      baseRenderProgreso();
      patchVisibleVersion();
    };
  }

  if (typeof renderSimulacros === 'function') {
    const baseRenderSimulacros = renderSimulacros;
    renderSimulacros = function () {
      baseRenderSimulacros();
      try {
        const ope = active();
        const selected = state.selectedSim || ope.simulacros?.[0]?.id;
        const sim = ope.simulacros?.find(s => s.id === selected) || ope.simulacros?.[0];
        const total = sim?.questions?.length || 0;
        setTitle('Simulacros transversales', `Simulacro de ${total} preguntas adaptado a la convocatoria activa.`);
      } catch (_) {}
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVisibleVersion(); }
  } else {
    patchVisibleVersion();
  }
})();
