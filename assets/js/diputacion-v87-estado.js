(() => {
  const ope = window.OPOSICIONES_DATA?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope?.theoryProgramme?.v87) return;
  const programme = ope.theoryProgramme.v87;
  programme.version = 'v0.87.0';
  programme.reviewedAt = '2026-07-15';
  programme.status = 'EN_PROGRESO';
  programme.totalThemes = 40;
  programme.autonomousThemes = 16;
  programme.completedThemes = Array.from({ length: 16 }, (_, index) => index + 25);
  programme.pendingThemes = Array.from({ length: 24 }, (_, index) => index + 1);
  programme.note = 'Temas 25 a 40 reconstruidos como teoría autosuficiente. Pendientes los temas 1 a 24 y la literalidad estatutaria del OAPGT, que permanece bloqueada hasta localizar el texto oficial vigente y su cadena de modificaciones.';
  programme.sourcePolicy = 'BOP/BOE y documentación primaria oficial; sin completar por inferencia';

  const questions = Object.values(ope.themeTests || {}).reduce((sum, bank) => sum + bank.length, 0);
  window.OPOWEB_DIPUTACION_ESTADO_V87 = Object.freeze({
    version: 'v0.87.0',
    reviewedAt: '2026-07-15',
    status: 'EN_PROGRESO',
    autonomousThemes: 16,
    totalThemes: 40,
    completedThemes: Object.freeze([...programme.completedThemes]),
    pendingThemes: Object.freeze([...programme.pendingThemes]),
    questions,
    oapgtStatutesVerified: false
  });
})();
