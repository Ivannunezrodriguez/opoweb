(() => {
  const VERSION = 'v0.31.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const content = document.getElementById('content');
    if (content) content.innerHTML = content.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () {
      original();
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      patchVersion();
    };
  }

  if (typeof themeItem === 'function') {
    const original = themeItem;
    themeItem = function (theme) {
      let html = original(theme);
      if (theme.auditStatus) {
        const label = theme.auditStatus.includes('pendiente') ? 'documento UC3M pendiente' : 'revisado v31';
        html = html.replace('</div></article>', `<span class="badge ${theme.auditStatus.includes('pendiente') ? '' : 'common'}">${label}</span></div></article>`);
      }
      return html;
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else {
    patchVersion();
  }
})();