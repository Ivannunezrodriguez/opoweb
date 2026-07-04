(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data || !data.oposiciones || !data.oposiciones.length) return;
  const ope = data.oposiciones.find(o => o.id === 'puebla-aux-admin-2026') || data.oposiciones[0];

  ope.officialLinks = [
    {
      label: 'BOE: convocatoria BOE-A-2026-11030',
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11030'
    },
    {
      label: 'Ayuntamiento: Ofertas de Empleo Público',
      url: 'https://www.pueblademontalban.com/ofertas-de-empleo-publico.html'
    },
    {
      label: 'BOP Toledo: buscar anuncio 2026-1965 / núm. 82 de 05/05/2026',
      url: 'https://bop.diputoledo.es/'
    }
  ];

  ope.processCalendar = [
    {
      date: '05/05/2026',
      title: 'Bases publicadas en BOP Toledo núm. 82',
      note: 'Publicación de las bases de la convocatoria. Referencia indicada también en el BOE.',
      status: 'publicado'
    },
    {
      date: '12/05/2026',
      title: 'Publicación en la web municipal',
      note: 'Entrada de Ofertas de Empleo Público del Ayuntamiento con Anuncio_2026-1965.',
      status: 'publicado'
    },
    {
      date: '22/05/2026',
      title: 'Publicación en el BOE',
      note: 'BOE-A-2026-11030. Abre plazo de veinte días hábiles desde el día siguiente.',
      status: 'publicado'
    },
    {
      date: '25/05/2026 - 19/06/2026',
      title: 'Plazo estimado de presentación de solicitudes',
      note: 'Cálculo orientativo de 20 días hábiles desde el día siguiente al BOE, sin tener en cuenta posibles festivos locales/autonómicos no comprobados.',
      status: 'estimado'
    },
    {
      date: 'Pendiente',
      title: 'Lista provisional de admitidos y excluidos',
      note: 'Revisar sede, web municipal y BOP. Si apareces excluido, habrá que mirar causa y plazo de subsanación.',
      status: 'pendiente'
    },
    {
      date: 'Pendiente',
      title: 'Plazo de subsanación',
      note: 'Normalmente 10 días hábiles desde la publicación de la lista provisional, según bases.',
      status: 'pendiente'
    },
    {
      date: 'Pendiente',
      title: 'Lista definitiva, tribunal y fecha de examen',
      note: 'Hito clave para organizar simulacros finales y repaso intensivo.',
      status: 'pendiente'
    },
    {
      date: 'Pendiente',
      title: 'Plantilla, notas y bolsa',
      note: 'Revisar tras la realización de ejercicios.',
      status: 'pendiente'
    }
  ];

  const extraCases = [
    ['Lista provisional de excluidos', 'Apareces excluido provisionalmente por falta de documentación. Explica qué debes revisar, cómo subsanar y qué plazo controlar.'],
    ['Notificación electrónica rechazada', 'Un obligado electrónico no accede a una notificación puesta a disposición. Explica qué datos hay que comprobar y qué efecto puede tener.'],
    ['Registro electrónico fuera de horario', 'Una solicitud se presenta electrónicamente un sábado. Explica fecha de presentación y cómputo de plazo.'],
    ['Revisión de oficio', 'Se detecta un acto firme con posible causa de nulidad de pleno derecho. Indica qué vía corresponde y qué garantía consultiva puede ser necesaria.'],
    ['Competencia municipal', 'Un vecino presenta una solicitud sobre una materia dudosa. Explica cómo comprobar si es competencia municipal, delegada o de otra Administración.'],
    ['Personal interino', 'El Ayuntamiento necesita cubrir una vacante de forma urgente. Explica qué clase de personal puede utilizarse y qué límites generales tiene.'],
    ['Acoso por razón de sexo', 'Una empleada comunica un trato degradante vinculado a su sexo. Identifica la materia y qué principios de igualdad deben protegerse.'],
    ['Acceso a expediente con datos personales', 'Un interesado pide copia de documentos con datos de terceros. Explica cómo aplicar minimización y ponderación.'],
    ['Fraccionamiento tributario', 'Un contribuyente no puede pagar una deuda local de una vez. Explica diferencia entre aplazamiento y fraccionamiento.'],
    ['IIVTNU', 'Se transmite un inmueble urbano. Explica cuándo puede aparecer el impuesto sobre incremento de valor de terrenos de naturaleza urbana y qué sujeto pasivo habría que identificar.']
  ].map((c, i) => ({
    id: 'sp-extra-' + (i + 1),
    title: c[0],
    statement: c[1],
    guidance: 'Respuesta orientativa: identifica el tema oficial aplicable, el punto concreto del enunciado, la regla básica, el trámite y la consecuencia. No añadas materias ajenas al programa.'
  }));

  const existingIds = new Set((ope.practicalCases || []).map(c => c.id));
  extraCases.forEach(c => { if (!existingIds.has(c.id)) ope.practicalCases.push(c); });

  ope.version = '0.4.0';
  ope.changelog = [
    {
      version: '0.4.0',
      date: '2026-07-04',
      changes: ['Añadida vista Proceso y enlaces', 'Añadido calendario del proceso', 'Añadidos enlaces oficiales BOE, web municipal y BOP', 'Ampliados supuestos prácticos a 20']
    },
    {
      version: '0.3.0',
      date: '2026-07-04',
      changes: ['Temario reestructurado por títulos exactos de la convocatoria', 'Contenido ajustado a los puntos oficiales de cada tema']
    },
    {
      version: '0.2.0',
      date: '2026-07-04',
      changes: ['Temario ampliado para estudio', 'Caché actualizada']
    },
    {
      version: '0.1.0',
      date: '2026-07-04',
      changes: ['Primera versión web con temario, test, supuestos, simulacros y progreso local']
    }
  ];
})();
