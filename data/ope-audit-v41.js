(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const VERSION = '0.41.0';
  const inactiveIds = new Set([
    'ventas-aux-admin-2026',
    'ventas-pena-aguilera-aux-admin-2026'
  ]);

  // Las Ventas con Peña Aguilera fue retirada de la planificación activa por decisión del usuario.
  data.oposiciones = data.oposiciones.filter(ope => !inactiveIds.has(ope.id));

  const get = id => data.oposiciones.find(ope => ope.id === id);
  const countQuestions = ope => Object.values(ope?.themeTests || {}).reduce((total, bank) => total + bank.length, 0);

  const puebla = get('puebla-aux-admin-2026');
  if (puebla) {
    puebla.exam = 'Concurso-oposición: test de 50 preguntas + 5 de reserva, 60 minutos, y segundo ejercicio práctico que puede adoptar formato de desarrollo, test u otro acordado por el Tribunal.';
    puebla.simulationSize = 50;
    puebla.audit = {
      level: 'revisión necesaria',
      score: 45,
      summary: 'El programa oficial de 19 temas y el formato del examen están cargados, pero el banco de preguntas sigue siendo mayoritariamente genérico y el desarrollo no alcanza todavía el nivel artículo por artículo solicitado.',
      current: `${puebla.themes.length} temas · ${countQuestions(puebla)} preguntas · ${puebla.practicalCases.length} supuestos · ${puebla.simulacros.length} simulacros`,
      needs: [
        'Sustituir las 12 preguntas genéricas de cada tema por preguntas reales de contenido y elevar el banco a 30–40 por tema.',
        'Completar los 19 temas con definiciones, artículos, plazos, órganos, excepciones y aplicación municipal.',
        'Ampliar los supuestos hasta al menos 20 y redactar soluciones completas, no solo pautas genéricas.',
        'Verificar periódicamente listas de admitidos, tribunal y fecha de examen en la sede municipal.'
      ]
    };
  }

  const carranque = get('carranque-aux-admin-2026');
  if (carranque) {
    carranque.simulationSize = 80;
    carranque.audit = {
      level: 'revisión prioritaria',
      score: 30,
      summary: 'Los 20 títulos oficiales y el formato 80+5 con práctico están identificados, pero las fichas, preguntas y soluciones siguen siendo plantillas generales. El práctico oficial se limita a los temas 3 a 20 y debe reflejarse en los casos.',
      current: `${carranque.themes.length} temas · ${countQuestions(carranque)} preguntas · ${carranque.practicalCases.length} supuestos · simulacros actuales de 50 preguntas`,
      needs: [
        'Desarrollar cada uno de los 20 temas con el título oficial literal y contenido normativo completo.',
        'Reemplazar las 240 preguntas de enfoque genérico por 30–40 preguntas reales por tema.',
        'Cambiar los simulacros de 50 a 80 preguntas y añadir 5 de reserva para reproducir el primer ejercicio.',
        'Rehacer los supuestos para que trabajen exclusivamente los temas 3 a 20 y tengan solución razonada.',
        'Confirmar en la sede cualquier lista, baremación, tribunal o convocatoria de examen antes de actualizar el calendario.'
      ]
    };
  }

  const diputacion = get('diputacion-toledo-admin-2026');
  if (diputacion) {
    diputacion.status = 'Plazo de solicitud abierto del 06/07/2026 al 31/07/2026. Oposición libre: no hay fase de concurso. DAM permite el acceso, pero no aporta puntos. Tasa general C1: 26 €, con reducciones o exenciones solo si se acreditan los requisitos; la falta de justificante de pago determina exclusión no subsanable.';
    diputacion.officialLinks = [
      { label: 'Solicitud Administrativo/a C1', url: 'https://www.diputoledo.es/global/50/1961/7080/rrhh-seleccion-convocatoria/1' },
      { label: 'Bases y temarios OPE 2026', url: 'https://www.diputoledo.es/global/50/1960/7078' },
      { label: 'Sede electrónica Diputación', url: 'https://sede.diputoledo.es/' },
      { label: 'BOP Toledo', url: 'https://bop.diputoledo.es/' }
    ];
    diputacion.processCalendar = [
      { date: '25/06/2026', title: 'Bases en BOP Toledo nº 118', note: 'Incluye 2 plazas de Administrativo/a C1, escala de Administración General, oposición libre.', status: 'publicado' },
      { date: '04/07/2026', title: 'Publicación del extracto en BOE', note: 'La Diputación identifica esta fecha como publicación en BOE de la primera convocatoria OPE 2026.', status: 'publicado' },
      { date: '06/07/2026 - 31/07/2026', title: 'Plazo de solicitudes', note: 'Solicitud, firma, registro y justificante de tasa o documentación de reducción/exención.', status: 'abierto' },
      { date: 'Pendiente', title: 'Lista provisional, tribunal y examen', note: 'Seguir la página de Empleo Público, BOP y tablón de la Diputación.', status: 'pendiente' }
    ];
    diputacion.simulationSize = 50;
    diputacion.audit = {
      level: 'revisión prioritaria',
      score: 25,
      summary: 'El temario oficial de 40 temas y el formato de dos ejercicios están cargados, pero el contenido es todavía una plantilla común. Además, el estado de solicitud estaba desactualizado y se ha corregido a plazo abierto.',
      current: `${diputacion.themes.length} temas · ${countQuestions(diputacion)} preguntas · ${diputacion.practicalCases.length} supuestos · ${diputacion.simulacros.length} simulacros`,
      needs: [
        'Presentar la solicitud antes del 31/07/2026 y conservar solicitud registrada y justificante de tasa.',
        'Desarrollar los 40 temas artículo por artículo y separar claramente los bloques comunes de los específicos de Diputación.',
        'Priorizar Acuerdo Regulador, OAPGT y sus Estatutos, organización de la Diputación, bases de ejecución y normativa tributaria local.',
        'Crear contenido operativo específico de Windows 11, Edge, GroupWise 24, LibreOffice 24 Writer, Calc, Base e Impress.',
        'Sustituir las 480 preguntas genéricas por bancos reales y redactar soluciones completas para los 20 supuestos.'
      ]
    };
  }

  const uc3m = get('uc3m-aux-admin-2026');
  if (uc3m) {
    uc3m.audit = {
      level: 'avance alto',
      score: 80,
      summary: 'Es la OPE más desarrollada de OpoWeb: los 20 temas tienen al menos 20 preguntas y nueve temas alcanzan 30 o más. La carencia principal ya no es el marco estatal, sino la literalidad interna UC3M.',
      current: `${uc3m.themes.length} temas · ${countQuestions(uc3m)} preguntas válidas auditadas · ${uc3m.practicalCases.length} casos de estudio · ${uc3m.simulacros.length} simulacros de 70 preguntas`,
      needs: [
        'Presentar la solicitud antes del 05/08/2026 y comprobar pago o exención dentro del plazo.',
        'Incorporar Ley 10/2019 consolidada con plazos exactos al tema 7.',
        'Cerrar Estatutos UC3M, presupuesto, bases de ejecución, matrícula, permanencia, evaluación, admisión y contratación interna con documentos vigentes.',
        'Elevar los once temas que permanecen en 20 preguntas hasta 30–40 preguntas reales.',
        'Sustituir progresivamente las preguntas conceptuales de los temas internos por literalidad UC3M comprobada.'
      ]
    };
  }

  const order = ['puebla-aux-admin-2026', 'carranque-aux-admin-2026', 'diputacion-toledo-admin-2026', 'uc3m-aux-admin-2026'];
  data.oposiciones.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  data.oposiciones.forEach(ope => { ope.auditVersion = VERSION; });

  window.OPOWEB_OPE_AUDIT_V41 = {
    version: VERSION,
    activeIds: data.oposiciones.map(ope => ope.id),
    removedIds: [...inactiveIds]
  };
})();