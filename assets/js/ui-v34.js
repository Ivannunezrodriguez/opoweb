(() => {
  const VERSION = 'v0.34.0';

  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(o => o.id === 'uc3m-aux-admin-2026');
  const entry = ope?.changelog?.find(item => item.version === '0.34.0');
  if (entry?.changes) {
    entry.changes = entry.changes.map(text => text.replace('88 preguntas', '85 preguntas'));
  }

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
        const pending = theme.auditStatus.includes('pendiente');
        const label = pending ? 'documento específico pendiente' : 'revisado en profundidad';
        html = html.replace('</div></article>', `<span class="badge ${pending ? '' : 'common'}">${label}</span></div></article>`);
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