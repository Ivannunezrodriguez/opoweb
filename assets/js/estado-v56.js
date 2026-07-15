(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones) return;

  const retiredIds = new Set([
    'ventas-aux-admin-2026',
    'ventas-pena-aguilera-aux-admin-2026'
  ]);

  data.oposiciones = data.oposiciones.filter(ope => !retiredIds.has(ope.id));

  const diputacion = data.oposiciones.find(ope => ope.id === 'diputacion-toledo-admin-2026');
  if (diputacion) {
    diputacion.status = 'Plazo de solicitud abierto del 6 al 31 de julio de 2026. Oposición libre: DAM permite participar, pero no añade puntos. Tasa general: 26 €. Prioridad actual: presentar la solicitud y preparar test y práctico.';
    diputacion.processCalendar = [
      { date: '24/06/2026', title: 'Decreto de Presidencia nº 1080/2026', note: 'Aprobación de la convocatoria y de las bases de las plazas incluidas.', status: 'publicado' },
      { date: '25/06/2026', title: 'Bases en BOP Toledo nº 118', note: 'Incluye 2 plazas de Administrativo/a C1, escala de Administración General, por oposición libre.', status: 'publicado' },
      { date: '06/07/2026 - 31/07/2026', title: 'Presentación de solicitudes', note: 'Plazo abierto. Tasa general de 26 €. La solicitud debe completarse dentro del plazo oficial.', status: 'abierto' },
      { date: 'Después del 31/07/2026', title: 'Lista provisional y subsanación', note: 'Pendiente de publicación en los canales oficiales de la Diputación.', status: 'pendiente' },
      { date: 'Pendiente', title: 'Tribunal, fecha del primer ejercicio y llamamiento', note: 'Se publicarán conforme a las bases.', status: 'pendiente' }
    ];
  }

  window.OPOWEB_STATE_V56 = {
    retiredOpeIds: Array.from(retiredIds),
    activeOpeIds: data.oposiciones.map(ope => ope.id),
    diputacionApplicationWindow: '06/07/2026 - 31/07/2026'
  };
})();
