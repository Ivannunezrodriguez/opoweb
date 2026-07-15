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
    diputacion.status = 'Inscrito el 15/07/2026. Solicitud registrada y tasa general de 26 € abonada. Oposición libre: DAM permite participar, pero no añade puntos. Prioridad actual: preparar el test y el segundo ejercicio práctico y vigilar la lista provisional.';
    diputacion.applicationStatus = {
      registered: true,
      registeredAt: '15/07/2026 12:46',
      feePaid: true,
      feeAmount: 26,
      evidence: 'Justificantes verificados y conservados fuera del repositorio público.'
    };
    diputacion.processCalendar = [
      { date: '24/06/2026', title: 'Decreto de Presidencia nº 1080/2026', note: 'Aprobación de la convocatoria y de las bases de las plazas incluidas.', status: 'publicado' },
      { date: '25/06/2026', title: 'Bases en BOP Toledo nº 118', note: 'Incluye 2 plazas de Administrativo/a C1, escala de Administración General, por oposición libre.', status: 'publicado' },
      { date: '04/07/2026', title: 'Publicación del extracto en BOE', note: 'Abre el plazo oficial de presentación de solicitudes.', status: 'publicado' },
      { date: '06/07/2026 - 31/07/2026', title: 'Presentación de solicitudes', note: 'Plazo oficial. Tasa general de 26 €.', status: 'abierto' },
      { date: '15/07/2026', title: 'Inscripción registrada', note: 'Solicitud, instancia firmada y justificante de pago presentados. Los documentos personales no se almacenan en el repositorio público.', status: 'publicado' },
      { date: 'Después del 31/07/2026', title: 'Lista provisional y subsanación', note: 'Pendiente de publicación en los canales oficiales de la Diputación.', status: 'pendiente' },
      { date: 'Pendiente', title: 'Tribunal, fecha del primer ejercicio y llamamiento', note: 'Se publicarán conforme a las bases.', status: 'pendiente' }
    ];
  }

  const uc3m = data.oposiciones.find(ope => ope.id === 'uc3m-aux-admin-2026');
  if (uc3m) {
    uc3m.status = 'Inscrito el 15/07/2026. Solicitud registrada por turno libre y cupo general, con pago de la tasa acreditado. Fecha previsible del ejercicio: 21/11/2026 a las 10:00, pendiente de confirmación definitiva. Baremo prudente: inglés 0, experiencia pública 0 y formación pendiente de validación documental.';
    uc3m.applicationStatus = {
      registered: true,
      registeredAt: '15/07/2026 12:18',
      feePaid: true,
      access: 'Turno libre · cupo general',
      evidence: 'Justificante verificado y conservado fuera del repositorio público.'
    };
    const registrationEntry = {
      date: '15/07/2026',
      title: 'Inscripción registrada',
      note: 'Solicitud telemática presentada por turno libre y cupo general, con documentación de identidad y pago aportada.',
      status: 'publicado'
    };
    const calendar = Array.isArray(uc3m.processCalendar) ? uc3m.processCalendar.filter(item => item.title !== registrationEntry.title) : [];
    const applicationIndex = calendar.findIndex(item => item.title === 'Solicitud telemática');
    if (applicationIndex >= 0) calendar.splice(applicationIndex + 1, 0, registrationEntry);
    else calendar.unshift(registrationEntry);
    uc3m.processCalendar = calendar;
  }

  window.OPOWEB_STATE_V56 = {
    retiredOpeIds: Array.from(retiredIds),
    activeOpeIds: data.oposiciones.map(ope => ope.id),
    registeredOpeIds: data.oposiciones.filter(ope => ope.applicationStatus?.registered).map(ope => ope.id),
    diputacionApplicationWindow: '06/07/2026 - 31/07/2026',
    updatedAt: '15/07/2026'
  };
})();
