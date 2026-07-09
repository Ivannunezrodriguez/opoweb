(() => {
  const VERSION = 'v0.16.0';
  function patchVersionLabels() {
    document.querySelectorAll('.muted, .oposicion-card').forEach(el => {
      if (el.innerHTML && el.innerHTML.includes('Versión OpoWeb v0.15.0')) {
        el.innerHTML = el.innerHTML.replaceAll('Versión OpoWeb v0.15.0', `Versión OpoWeb ${VERSION}`);
      }
    });
  }
  patchVersionLabels();
  const observer = new MutationObserver(() => patchVersionLabels());
  observer.observe(document.body, { childList: true, subtree: true });
})();
