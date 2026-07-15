(() => {
  const ope = window.OPOSICIONES_DATA?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const clone = value => JSON.parse(JSON.stringify(value));
  const themeTests = clone(ope.themeTests || {});
  const simulacros = clone(ope.simulacros || []);
  const totalQuestions = Object.values(themeTests).reduce((sum, bank) => sum + bank.length, 0);

  window.OPOWEB_DIPUTACION_SNAPSHOT_V87 = Object.freeze({
    version: 'v0.87.0',
    capturedAfter: 'diputacion-v65',
    totalQuestions,
    themeTests,
    simulacros
  });
})();
