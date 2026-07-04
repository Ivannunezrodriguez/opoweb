(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const opt = [
    'Es el enfoque correcto: estudiar el enunciado oficial, regla, excepción y aplicación práctica municipal.',
    'Es contenido ajeno al programa y no debe mezclarse salvo indicación expresa del tribunal.',
    'Basta con una opinión personal sin citar trámite, plazo ni consecuencia.',
    'Conviene sustituir la norma vigente por apuntes de otra convocatoria sin comprobar equivalencias.'
  ];

  const sections = () => [
    { heading: 'Documento base', paragraphs: ['Estudia el bloque legal del enunciado oficial. Prioriza artículos, conceptos y diferencias que puedan aparecer en test o supuesto práctico.'] },
    { heading: 'Qué dominar', paragraphs: ['Definición, órgano competente, procedimiento, requisitos, plazos, efectos, excepciones y ejemplo municipal.', 'En supuestos, estructura siempre por norma aplicable, trámite, plazo y consecuencia.'] },
    { heading: 'Trampas habituales', paragraphs: ['Confundir días hábiles y naturales, alzada y reposición, nulidad y anulabilidad, competencia y órgano, o Administración Local y Administración General del Estado.'] }
  ];

  function themes(prefix, raw) {
    return raw.map((r, i) => ({
      id: `${prefix}-t${i + 1}`,
      number: i + 1,
      title: r[0],
      area: r[1],
      commonPotential: true,
      sections: sections(),
      tree: [`Tema ${i + 1}`, '- Documento base', '- Qué dominar', '- Trampas habituales'].join('\n'),
      reviewTable: [['Punto', 'Qué comprobar'], ['Concepto', 'Definición y alcance'], ['Procedimiento', 'Trámite, órgano y plazo'], ['Examen', 'Regla, excepción y consecuencia']]
    }));
  }

  function questions(t) {
    const out = [];
    for (let i = 0; i < 12; i++) {
      const o = opt.slice((t.number + i) % 4).concat(opt.slice(0, (t.number + i) % 4));
      out.push({
        id: `${t.id}-q${i + 1}`,
        text: `Tema ${t.number}. ¿Cuál es el enfoque correcto para preparar ${t.area}?`,
        options: o.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[o.indexOf(opt[0])],
        justification: 'El examen exige partir del programa oficial y aplicar la regla al caso práctico municipal.'
      });
    }
    return out;
  }

  function testMap(ts) { return Object.fromEntries(ts.map(t => [t.id, questions(t)])); }

  function simulacros(prefix, map) {
    const all = Object.values(map).flat();
    return [0, 17, 43].map((start, s) => ({
      id: `${prefix}-sim${s + 1}`,
      title: `Simulacro transversal ${s + 1}`,
      questions: Array.from({ length: 50 }, (_, i) => ({ ...all[(start + i * 7) % all.length], id: `${prefix}-sim${s + 1}-q${i + 1}` }))
    }));
  }

  function cases(prefix) {
    const base = ['Solicitud incompleta', 'Registro electrónico', 'Notificación', 'Recurso administrativo', 'Expediente con datos personales', 'Órgano colegiado', 'Padrón municipal', 'Licencia municipal', 'Contrato menor', 'Presupuesto y crédito', 'Tributo local', 'Apremio', 'Bien municipal', 'Igualdad', 'Prevención', 'Certificado electrónico', 'Archivo', 'Silencio administrativo', 'Responsabilidad patrimonial', 'Bolsa de trabajo'];
    return base.map((title, i) => ({
      id: `${prefix}-sp${i + 1}`,
      title,
      statement: `Caso práctico sobre ${title.toLowerCase()}. Indica norma aplicable, trámite, plazo, órgano competente y consecuencia administrativa.`,
      guidance: 'Respuesta orientativa: identifica la norma, concreta el trámite, señala el plazo y termina con la consecuencia. Evita respuestas genéricas.'
    }));
  }

  function add(ope) {
    const i = data.oposiciones.findIndex(o => o.id === ope.id);
    if (i >= 0) data.oposiciones[i] = ope; else data.oposiciones.push(ope);
  }

  function ope(prefix, name, shortName, places, exam, status, scoring, raw, links, calendar) {
    const ts = themes(prefix, raw);
    const tm = testMap(ts);
    return { id: prefix, name, shortName, places, exam, status, scoring, themes: ts, themeTests: tm, practicalCases: cases(prefix), simulacros: simulacros(prefix, tm), officialLinks: links, processCalendar: calendar, version: '0.6.0', changelog: [{ version: '0.6.0', date: '2026-07-04', changes: ['Añadidas Carranque y Las Ventas', 'Añadidos temarios, tests, supuestos, simulacros y calendarios', 'Añadida estructura de chats y plantilla de formación'] }] };
  }

  const puebla = data.oposiciones.find(o => o.id === 'puebla-aux-admin-2026') || data.oposiciones[0];
  puebla.status = 'Inscrito. Prioridad alta por 4 plazas y bolsa. Baremo conservador: DAM probablemente no suma en estas bases; experiencia pública C2 confirmada = 0.';
  puebla.officialLinks = [
    { label: 'BOE La Puebla', url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-11030' },
    { label: 'Ayuntamiento La Puebla', url: 'https://www.pueblademontalban.com/ofertas-de-empleo-publico.html' },
    { label: 'BOP Toledo', url: 'https://bop.diputoledo.es/' }
  ];
  puebla.processCalendar = [
    { date: '05/05/2026', title: 'Bases en BOP Toledo nº 82', note: '4 plazas de Auxiliar Administrativo y constitución de bolsa.', status: 'publicado' },
    { date: '22/05/2026', title: 'Publicación BOE', note: 'Abrió plazo de 20 días hábiles desde el día siguiente.', status: 'publicado' },
    { date: '28/05/2026', title: 'Inscripción registrada', note: 'Recibo aportado. No subir justificantes personales al repositorio público.', status: 'publicado' },
    { date: 'Pendiente', title: 'Listas, tribunal, examen y bolsa', note: 'Revisar sede municipal y BOP.', status: 'pendiente' }
  ];

  const carranqueTemas = [
    ['Constitución, Tribunal Constitucional, Defensor del Pueblo, Cortes, Gobierno y Poder Judicial', 'Constitucional'],
    ['Principios de actuación administrativa y fuentes del Derecho', 'Administrativo'],
    ['Ley 39/2015: interesados, actividad administrativa y reglamentos', 'Procedimiento'],
    ['Ley 39/2015: actos administrativos y procedimiento común', 'Procedimiento'],
    ['Revisión de actos, revisión de oficio y recursos administrativos', 'Procedimiento'],
    ['Responsabilidad patrimonial de las Administraciones Públicas', 'Responsabilidad'],
    ['Ley 40/2015 y procedimiento sancionador', 'Régimen jurídico'],
    ['Fomento, policía, servicio público y licencias', 'Actividad local'],
    ['Municipio, población, padrón, competencias y otras entidades locales', 'Régimen local'],
    ['Ordenanzas y reglamentos locales', 'Régimen local'],
    ['Función pública local y situaciones administrativas', 'Empleo público'],
    ['Bienes de las entidades locales', 'Bienes locales'],
    ['Contratos administrativos locales y selección del contratista', 'Contratación'],
    ['Registro de entrada y salida, comunicaciones y notificaciones', 'Procedimiento local'],
    ['Órganos municipales, competencias, actas y certificados', 'Organización municipal'],
    ['Haciendas locales, ingresos, tributos y ordenanzas fiscales', 'Hacienda local'],
    ['Presupuesto local, gasto, modificaciones y cuenta general', 'Presupuesto'],
    ['Estructura presupuestaria de gastos e ingresos', 'Presupuesto'],
    ['Liquidación, remanente, resultado, estabilidad y regla de gasto', 'Presupuesto'],
    ['Modernización administrativa, tramitación electrónica, facturas y morosidad', 'Administración electrónica']
  ];

  const ventasTemas = [
    ['Constitución: estructura, derechos, garantías, modelo económico, TC y reforma', 'Constitucional'],
    ['Corona, Cortes, Defensor del Pueblo, Tribunal de Cuentas, Poder Judicial y CGPJ', 'Organización del Estado'],
    ['Gobierno, AGE, Comunidades Autónomas, Administración Local y autonomía local', 'Organización administrativa'],
    ['Fuentes del Derecho administrativo, leyes, reglamentos y jerarquía normativa', 'Administrativo'],
    ['Ley 39/2015: interesados, actividad, actos, nulidad, plazos, silencio y obligación de resolver', 'Procedimiento'],
    ['Ley 39/2015: iniciación, ordenación, instrucción, finalización, ejecución, simplificado y recursos', 'Procedimiento'],
    ['Ley 39/2015: capacidad, representación, apoderamientos, identificación y firma', 'Procedimiento'],
    ['Ley 40/2015: órganos, delegación, avocación, encomienda, suplencia, abstención y convenios', 'Régimen jurídico'],
    ['Ley 40/2015: funcionamiento electrónico, responsabilidad, sancionador y relaciones interadministrativas', 'Régimen jurídico'],
    ['TREBEP: código de conducta, derechos, deberes y representación', 'Empleo público'],
    ['Función pública local, FHN, funcionarios propios, OEP, RPT, retribuciones e indemnizaciones', 'Función pública local'],
    ['Personal al servicio de las Administraciones, provisión, situaciones, incompatibilidades y disciplina', 'Empleo público'],
    ['Municipio, término, población, servicios mínimos, organización y competencias', 'Régimen local'],
    ['Órganos colegiados locales, convocatoria, orden del día, actas y certificados', 'Régimen local'],
    ['Provincia, organización provincial, competencias, mancomunidades y comarcas', 'Régimen local'],
    ['Hacienda local, presupuesto, ingresos, gastos, tasas, contribuciones, precios e impuestos', 'Hacienda local'],
    ['Ordenanzas, reglamentos y bandos municipales', 'Régimen local'],
    ['Bienes locales: dominio público y patrimoniales', 'Bienes locales'],
    ['Acción administrativa local: fomento, policía, licencias, servicios públicos y concesión', 'Actividad local'],
    ['Igualdad efectiva de mujeres y hombres e igualdad en el empleo público', 'Igualdad'],
    ['Prevención de Riesgos Laborales: derechos, obligaciones, consulta y participación', 'Prevención'],
    ['Contratos del sector público, atención al público y transparencia', 'Contratación y transparencia'],
    ['Administración electrónica, servicios telemáticos, quejas, sugerencias y peticiones', 'Administración electrónica'],
    ['Documento, registro, archivo, expediente, comunicaciones y notificaciones', 'Registro y archivo']
  ];

  add(ope('carranque-aux-admin-2026', 'Auxiliar Administrativo - Carranque', 'Carranque - Aux. Administrativo', '1 plaza + bolsa', 'Test de 80 preguntas + 5 reserva y práctico sobre temas 3 a 20.', 'Inscrito. Baremo conservador: DAM como FP Superior = 0,75 si fue aportado; experiencia pública administrativa confirmada = 0; formación solo si fue aportada en plazo.', { correct: 0.25, wrong: -0.08, blank: 0 }, carranqueTemas, [
    { label: 'BOE Carranque', url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-1136' },
    { label: 'Sede Carranque', url: 'https://carranque.sedipualba.es/' },
    { label: 'BOP Toledo', url: 'https://bop.diputoledo.es/' }
  ], [
    { date: '05/01/2026', title: 'Bases en BOP Toledo nº 1', note: '1 plaza de Auxiliar Administrativo por concurso-oposición libre.', status: 'publicado' },
    { date: '19/01/2026', title: 'Publicación BOE', note: 'Abrió plazo de 20 días hábiles.', status: 'publicado' },
    { date: 'Inscrito', title: 'Estado personal', note: 'El usuario indica que está apuntado.', status: 'publicado' },
    { date: 'Pendiente', title: 'Listas, tribunal y examen', note: 'Revisar sede de Carranque y BOP.', status: 'pendiente' }
  ]));

  add(ope('ventas-pena-aguilera-aux-admin-2026', 'Auxiliar Administrativo - Las Ventas con Peña Aguilera', 'Las Ventas - Aux. Administrativo', '1 plaza', 'Test de 60 preguntas y dos supuestos prácticos. Concurso-oposición: 80 oposición + 20 concurso.', 'Pendiente de solicitud/seguimiento. Baremo conservador: Técnico Superior DAM = 2 puntos si se acredita; experiencia = 0; formación y ejercicios aprobados solo con certificados válidos.', { correct: 0.6667, wrong: -0.25, blank: 0 }, ventasTemas, [
    { label: 'BOE Las Ventas', url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-14274' },
    { label: 'Sede Las Ventas', url: 'https://ventasconpenaaguilera.sedelectronica.es/info.0' },
    { label: 'BOP Toledo', url: 'https://bop.diputoledo.es/' }
  ], [
    { date: '14/05/2026', title: 'Bases en BOP Toledo nº 89', note: '1 plaza de Auxiliar Administrativo por concurso-oposición libre.', status: 'publicado' },
    { date: '01/07/2026', title: 'Publicación BOE', note: 'Abre plazo de 20 días naturales desde el día siguiente.', status: 'publicado' },
    { date: '02/07/2026 - 21/07/2026', title: 'Plazo estimado de solicitud', note: 'Cómputo orientativo; confirmar sede municipal.', status: 'estimado' },
    { date: 'No antes del 15/10/2026', title: 'Fase de oposición', note: 'Las bases indican que la oposición no será antes de esa fecha.', status: 'publicado' },
    { date: 'Pendiente', title: 'Listas, tribunal y fecha concreta', note: 'Revisar BOP, tablón y sede electrónica.', status: 'pendiente' }
  ]));
})();
