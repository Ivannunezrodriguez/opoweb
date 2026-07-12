(() => {
  const VERSION = 'v0.81.0';
  const audit = {
    version: VERSION,
    date: '2026-07-12',
    engine: 'Playwright 1.55 · Chromium',
    viewports: [
      { name: 'Escritorio', width: 1440, height: 900 },
      { name: 'Móvil', device: 'Pixel 7' },
      { name: 'Tablet', device: 'iPad Pro 11' }
    ],
    checks: [
      'Carga de las cuatro convocatorias',
      'Navegación por todas las vistas',
      'Diseño adaptable sin desbordamiento horizontal',
      'Persistencia real del progreso tras recargar',
      'Registro del service worker y caché opoweb-v88',
      'Recarga completa sin conexión',
      'Conservación de datos locales en modo sin conexión'
    ],
    remaining: [
      'Comprobación manual en dispositivos físicos Android e iPad',
      'Comprobación manual en Safari/WebKit',
      'Prueba de instalación desde la interfaz del navegador'
    ]
  };
  window.OPOWEB_BROWSER_AUDIT_V81 = audit;

  function patchText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      node.nodeValue = node.nodeValue
        .replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`)
        .replace(/Auditoría v0\.(?:72|73|74|75|76|77|78|79|80)/g, 'Auditoría v0.81')
        .replace(/auditoría v0\.(?:72|73|74|75|76|77|78|79|80)/gi, 'auditoría v0.81');
    });
  }

  function patchVersion() {
    patchText(document.getElementById('oposicionCard'));
    patchText(document.getElementById('content'));
  }

  function card() {
    return `<article class="card" id="browserAuditV81">
      <div class="pill-row"><span class="badge common">OpoWeb v0.81</span><span class="badge area">Playwright · Chromium</span><span class="badge">PWA sin conexión</span></div>
      <h2>Validación automática de navegador</h2>
      <p>La aplicación se comprueba en escritorio, móvil y tablet mediante un navegador Chromium real. Las pruebas recorren todas las vistas, guardan progreso, recargan la aplicación y verifican el funcionamiento completo sin conexión.</p>
      <div class="grid three">
        <div><span class="score">3</span><p class="muted">formatos de pantalla</p></div>
        <div><span class="score">7</span><p class="muted">controles funcionales</p></div>
        <div><span class="score">v88</span><p class="muted">caché PWA validada</p></div>
      </div>
      <p><strong>Criterio prudente:</strong> esta validación automática no sustituye una comprobación manual en dispositivos físicos ni una prueba específica con Safari/WebKit.</p>
    </article>`;
  }

  function appendCard() {
    document.querySelectorAll('#browserAuditV81').forEach(node => node.remove());
    if (typeof content !== 'undefined' && content) content.insertAdjacentHTML('beforeend', card());
  }

  function currentQuestionSet() {
    if (typeof active !== 'function' || typeof state === 'undefined' || typeof progressKey !== 'function') return null;
    const ope = active();
    if (state.view === 'tests') {
      const setId = state.selectedTestTheme || ope?.themes?.[0]?.id;
      return setId ? { kind: 'test', setId, questions: ope?.themeTests?.[setId] || [], scoring: ope?.scoring } : null;
    }
    if (state.view === 'simulacros') {
      const setId = state.selectedSim || ope?.simulacros?.[0]?.id;
      const simulation = ope?.simulacros?.find(item => item.id === setId);
      return simulation ? { kind: 'sim', setId, questions: simulation.questions || [], scoring: ope?.scoring } : null;
    }
    return null;
  }

  function installContentDelegation() {
    const root = document.getElementById('content');
    if (!root || root.dataset.v81Delegation === 'true') return;
    root.dataset.v81Delegation = 'true';

    root.addEventListener('change', event => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      if (target.id === 'testTheme') {
        event.stopImmediatePropagation();
        state.selectedTestTheme = target.value;
        renderTests();
        return;
      }
      if (target.id === 'simSelect') {
        event.stopImmediatePropagation();
        state.selectedSim = target.value;
        renderSimulacros();
        return;
      }
      if (target.matches('input[type="radio"]')) {
        const set = currentQuestionSet();
        if (!set) return;
        event.stopImmediatePropagation();
        const key = progressKey(set.kind, set.setId);
        state.progress[key] ||= { answers: {}, corrected: false, score: null };
        state.progress[key].answers[target.name] = target.value;
        state.progress[key].corrected = false;
        state.progress[key].score = null;
        saveProgress();
      }
    }, true);

    root.addEventListener('click', event => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const theme = target.closest('[data-theme]');
      if (theme) {
        event.preventDefault();
        event.stopImmediatePropagation();
        state.selectedTheme = theme.dataset.theme;
        renderTemario();
        return;
      }
      if (target.closest('#backThemes')) {
        event.preventDefault();
        event.stopImmediatePropagation();
        state.selectedTheme = null;
        renderTemario();
        return;
      }

      const norma = target.closest('[data-norma]');
      if (norma) {
        event.preventDefault();
        event.stopImmediatePropagation();
        state.selectedNorma = norma.dataset.norma;
        renderNormas();
        return;
      }
      if (target.closest('#backNormas')) {
        event.preventDefault();
        event.stopImmediatePropagation();
        state.selectedNorma = null;
        renderNormas();
        return;
      }

      const solution = target.closest('.show-solution');
      if (solution) {
        event.preventDefault();
        event.stopImmediatePropagation();
        document.getElementById(`sol-${solution.dataset.case}`)?.classList.toggle('open');
        return;
      }

      if (target.closest('#correctSet')) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const set = currentQuestionSet();
        if (!set?.questions.length || !set.scoring) return;
        const key = progressKey(set.kind, set.setId);
        state.progress[key] ||= { answers: {}, corrected: false, score: null };
        const saved = state.progress[key];
        saved.corrected = true;
        saved.score = calculate(set.questions, saved.answers, set.scoring);
        saveProgress();
        if (typeof applyQuestionResults === 'function') applyQuestionResults(set.questions, saved);
        patchVersion();
        return;
      }

      if (target.closest('#resetSet')) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const set = currentQuestionSet();
        if (!set) return;
        delete state.progress[progressKey(set.kind, set.setId)];
        saveProgress();
        if (set.kind === 'test') renderTests(); else renderSimulacros();
      }
    }, true);
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }
  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () { original(); appendCard(); patchVersion(); };
  }
  if (typeof renderTemario === 'function') {
    const original = renderTemario;
    renderTemario = function () { original(); patchVersion(); };
  }
  if (typeof renderNormas === 'function') {
    const original = renderNormas;
    renderNormas = function () { original(); patchVersion(); };
  }
  if (typeof renderTests === 'function') {
    const original = renderTests;
    renderTests = function () { original(); patchVersion(); };
  }
  if (typeof renderSupuestos === 'function') {
    const original = renderSupuestos;
    renderSupuestos = function () { original(); patchVersion(); };
  }
  if (typeof renderSimulacros === 'function') {
    const original = renderSimulacros;
    renderSimulacros = function () { original(); patchVersion(); };
  }
  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () { original(); appendCard(); patchVersion(); };
  }
  if (typeof renderAll === 'function') {
    const original = renderAll;
    renderAll = function () { original(); patchVersion(); };
    installContentDelegation();
    try { renderAll(); } catch (_) { patchVersion(); }
  } else {
    installContentDelegation();
    patchVersion();
  }
})();
