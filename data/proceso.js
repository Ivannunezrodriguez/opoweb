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
    { heading: 'Qué dominar', paragraphs: ['Definición, órgano competente, procedimiento, requisitos, plazos, efectos, excepciones y ejemplo municipal o provincial.', 'En supuestos, estructura siempre por norma aplicable, trámite, plazo y consecuencia.'] },
    { heading: 'Cuadro para test y supuesto práctico', paragraphs: ['Para test: localiza la palabra clave del enunciado, descarta respuestas absolutas y comprueba plazo, órgano y efecto jurídico.', 'Para supuesto: identifica hechos relevantes, norma aplicable, órgano competente, trámite, plazo, documentación y consecuencia.'] }
  ];

  function themes(prefix, raw) {
    return raw.map((r, i) => ({
      id: `${prefix}-t${i + 1}`,
      number: i + 1,
      title: r[0],
      area: r[1],
      commonPotential: true,
      sections: sections(),
      tree: [`Tema ${i + 1}`, '- Documento base', '- Qué dominar', '- Cuadro para test y supuesto práctico'].join('\n'),
      reviewTable: [['Punto', 'Qué comprobar'], ['Concepto', 'Definición y alcance'], ['Procedimiento', 'Trámite, órgano y plazo'], ['Examen', 'Regla, excepción y consecuencia']]
    }));
  }

  function questions(t) {
    const out = [];
    for (let i = 0; i < 12; i++) {
      const shift = (t.number + i) % 4;
      const o = opt.slice(shift).concat(opt.slice(0, shift));
      out.push({
        id: `${t.id}-q${i + 1}`,
        text: `Tema ${t.number}. ¿Cuál es el enfoque correcto para preparar ${t.area}?`,
        options: o.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[o.indexOf(opt[0])],
        justification: 'El examen exige partir del programa oficial y aplicar la regla al caso práctico municipal o provincial.'
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

  function cases(prefix, custom) {
    const base = custom || ['Solicitud incompleta', 'Registro electrónico', 'Notificación', 'Recurso administrativo', 'Expediente con datos personales', 'Órgano colegiado', 'Padrón municipal', 'Licencia municipal', 'Contrato menor', 'Presupuesto y crédito', 'Tributo local', 'Apremio', 'Bien municipal', 'Igualdad', 'Prevención', 'Certificado electrónico', 'Archivo', 'Silencio administrativo', 'Responsabilidad patrimonial', 'Bolsa de trabajo'];
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

  function ope(prefix, name, shortName, places, exam, status, scoring, raw, links, calendar, customCases) {
    const ts = themes(prefix, raw);
    const tm = testMap(ts);
    return {
      id: prefix,
      name,
      shortName,
      places,
      exam,
      status,
      scoring,
      themes: ts,
      themeTests: tm,
      practicalCases: cases(prefix, customCases),
      simulacros: simulacros(prefix, tm),
      officialLinks: links,
      processCalendar: calendar,
      version: '0.12.0',
      changelog: [{ version: '0.12.0', date: '2026-07-07', changes: ['Añadida OPE Diputación de Toledo Administrativo C1', 'Incluido temario oficial de 40 temas', 'Añadidos tests, supuestos, simulacros, calendario y estado de solicitud'] }]
    };
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

  const diputacionTemas = [
    ['La Constitución española de 1978: significado y estructura, principios generales y valor normativo. El Tribunal Constitucional. La reforma constitucional.', 'Constitucional'],
    ['Derechos y deberes fundamentales de los españoles. Garantía y suspensión. Las fuentes del derecho administrativo: La Ley, el Reglamento.', 'Constitucional y fuentes'],
    ['La organización del Estado en la Constitución: Organización institucional y organización territorial. La Jefatura del Estado: La Corona. Las Cortes Generales: Referencia al Defensor del Pueblo y al Tribunal de Cuentas.', 'Organización del Estado'],
    ['Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público. La Administración Pública. Los órganos de las Administraciones Públicas. La competencia administrativa. Las relaciones administrativas.', 'Régimen jurídico'],
    ['Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas: Disposiciones Generales. Los interesados en el procedimiento. Actividad de las Administraciones Públicas: Normas generales de actuación. Términos y plazos.', 'Procedimiento'],
    ['La Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas. El procedimiento administrativo común: Derechos del interesado; Iniciación; Ordenación; Instrucción Finalización y Ejecución. Especialidades en los procedimientos de naturaleza sancionadora y de responsabilidad patrimonial. Tramitación simplificada del procedimiento administrativo común.', 'Procedimiento'],
    ['El acto administrativo: concepto, clases y elementos. Requisitos. Eficacia. Nulidad y anulabilidad.', 'Acto administrativo'],
    ['Revisión de los actos administrativos en vía administrativa. Los recursos administrativos. La revisión de oficio.', 'Recursos'],
    ['La administración electrónica: finalidad y principios. Derechos de los ciudadanos a relacionarse con las administraciones públicas por medios electrónicos. La sede electrónica. Utilización de medios electrónicos en la tramitación del procedimiento.', 'Administración electrónica'],
    ['La responsabilidad patrimonial de la Administración Pública. Responsabilidad de las autoridades y funcionarios al servicio de las administraciones públicas.', 'Responsabilidad patrimonial'],
    ['Especialidades del procedimiento administrativo local. El Registro de Entrada y de Salida de documentos. Requisitos en la presentación de documentos. Comunicaciones y notificaciones.', 'Procedimiento local'],
    ['El Régimen Local Español: principios constitucionales y regulación jurídica. Concepto de la Administración Local.', 'Régimen local'],
    ['El municipio: Concepto y elementos. El término municipal. La población: Referencia al empadronamiento. Organización municipal. Competencias. El presupuesto de las entidades locales.', 'Municipio'],
    ['La provincia. Organización provincial. Competencias. La Diputación Provincial de Toledo: organización, funcionamiento y competencias. El Régimen electoral de las Entidades Locales.', 'Provincia y Diputación'],
    ['Otras Entidades Locales. Mancomunidades. Comarcas. Áreas Metropolitanas. Entidades de ámbito territorial inferior al municipio.', 'Entidades locales'],
    ['Los contratos administrativos en la esfera local. Selección del contratista. Garantías y responsabilidad en la contratación. Ejecución, modificación y suspensión. Revisión de precios. Invalidez y extinción de los contratos.', 'Contratación'],
    ['Ley 4/2011, de 10 de marzo, de empleo público de Castilla-La Mancha: El Personal al servicio de las Administraciones Públicas de Castilla-La Mancha. Acceso al empleo público y pérdida de la relación de servicio.', 'Empleo público'],
    ['Ley 4/2011, de 10 de marzo, de empleo público de Castilla-La Mancha: Derechos y deberes. Situaciones administrativas.', 'Empleo público'],
    ['Ley 4/2011, de 10 de marzo, de empleo público de Castilla-La Mancha: Régimen disciplinario.', 'Régimen disciplinario'],
    ['El contrato de trabajo: contenido y régimen jurídico. Modificación, suspensión y extinción.', 'Laboral'],
    ['El contrato de trabajo: modalidades. El Régimen General de la Seguridad Social: afiliación, altas y bajas. Cotización y recaudación.', 'Laboral y Seguridad Social'],
    ['El Acuerdo Regulador de las Condiciones de Trabajo de los Empleados Públicos de la Diputación de Toledo y sus Organismos Autónomos. El Organismo Autónomo Provincial de Gestión Tributaria de Toledo: organización, funcionamiento y competencias. Especial referencia a sus Estatutos.', 'Diputación y OAPGT'],
    ['La Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos laborales: Derechos y obligaciones. Servicios de Prevención. Consulta y participación de los trabajadores.', 'Prevención'],
    ['La Ley 12/2010, de 18 de noviembre, de Igualdad entre Mujeres y Hombres de Castilla-La Mancha. La Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres.', 'Igualdad'],
    ['La obligación tributaria: nacimiento, sujetos, elementos cuantitativos y extinción. Los tributos locales. Normas generales. Principios de tributación local. Delegación. Colaboración. Beneficios fiscales y compensación. Los procedimientos de gestión tributaria. La extinción de la deuda. Los procedimientos tributarios de revisión.', 'Tributario local'],
    ['La recaudación de los tributos locales. La recaudación en periodo voluntario. El aplazamiento, fraccionamiento y compensación de las deudas tributarias. La devolución de ingresos. La recaudación ejecutiva. La revisión en vía administrativa de los actos y actuaciones de aplicación de los tributos.', 'Recaudación'],
    ['El presupuesto general de las Entidades Locales: concepto y contenido. Especial referencia a las bases de ejecución del presupuesto. La elaboración y aprobación del presupuesto general. La prórroga presupuestaria.', 'Presupuesto'],
    ['La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales. Ficheros y datos. Funciones de la Agencia Española de Protección de Datos de carácter personal. La transparencia y buen gobierno. Obligación de suministrar información. Principios del buen gobierno.', 'Protección de datos y transparencia'],
    ['El Impuesto sobre Bienes Inmuebles. Naturaleza. Hecho imponible. Sujeto pasivo. Exenciones y bonificaciones. Base Imponible. Base liquidable. Cuota, devengo y periodo impositivo. El Impuesto sobre Actividades Económicas. Naturaleza. Hecho imponible. Sujeto pasivo. Cuota: las tarifas. Devengo y periodo impositivo.', 'Tributos locales'],
    ['Impuesto sobre vehículos de tracción mecánica. Naturaleza. Hecho imponible. Sujeto pasivo. Base imponible, cuota y devengo. Gestión. El Impuesto sobre el Incremento del valor de los terrenos de naturaleza urbana. Naturaleza y hecho imponible. Las Tasas. Concepto. Hecho imponible. Sujetos pasivos. Devengo. Base imponible.', 'Tributos locales'],
    ['Ley 6/2020, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza. Firma electrónica y certificados electrónicos. Usos del Certificado electrónico en la administración electrónica. Tipos y soportes del certificado electrónico. Autoridades certificadoras y servicios que prestan.', 'Certificación electrónica'],
    ['Microsoft Windows 11 Pro I. Creación, copiado y borrado de archivos y carpetas. Las unidades de discos locales y de red.', 'Ofimática'],
    ['Microsoft Windows 11 Pro II. Navegación por Internet con Microsoft Edge. Uso del correo electrónico con Microfocus GroupWise 24 y posteriores.', 'Ofimática'],
    ['Microsoft Windows 11 Pro III. Impresión y escaneado de documentos desde Microsoft Windows 11.', 'Ofimática'],
    ['LibreOffice 24 I. Elaboración y uso de documentos de texto con LibreOffice 24 Writer.', 'Ofimática'],
    ['LibreOffice 24 II. Elaboración y uso de hojas de cálculo con LibreOffice 24 Calc.', 'Ofimática'],
    ['LibreOffice 24 III. Elaboración y uso de bases de datos con LibreOffice 24 Base.', 'Ofimática'],
    ['LibreOffice 24 IV. Elaboración y uso de presentaciones con LibreOffice 24 Impress.', 'Ofimática'],
    ['Conceptos Generales del ordenador personal I. El ordenador personal y sus componentes más comunes.', 'Informática básica'],
    ['Conceptos Generales del ordenador personal II. Periféricos del ordenador personal. Impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD, y memorias USB.', 'Informática básica']
  ];

  const diputacionCases = [
    'Solicitud presentada fuera de plazo',
    'Registro presencial y registro electrónico',
    'Notificación electrónica rechazada',
    'Cómputo de plazos en procedimiento administrativo',
    'Recurso de alzada frente a acto que no pone fin a la vía administrativa',
    'Recurso de reposición frente a acto que pone fin a la vía administrativa',
    'Nulidad y anulabilidad de un acto administrativo',
    'Responsabilidad patrimonial por funcionamiento de servicio público',
    'Expediente con datos personales y acceso a información pública',
    'Contratación local y garantías del contratista',
    'Presupuesto provincial y bases de ejecución',
    'Gestión tributaria local: IBI, IAE, IVTM, IIVTNU y tasas',
    'Recaudación voluntaria y ejecutiva',
    'Alta, baja y cotización en Seguridad Social',
    'Acuerdo regulador de empleados públicos de Diputación',
    'OAPGT: organización y competencias',
    'Administración electrónica y sede electrónica',
    'Firma electrónica y certificados',
    'LibreOffice Writer y Calc en una tarea administrativa',
    'Windows 11, carpetas, unidades de red, impresión y escaneado'
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

  add(ope('diputacion-toledo-admin-2026', 'Administrativo - Diputación Provincial de Toledo', 'Diputación Toledo - Administrativo C1', '2 plazas', 'Oposición libre: test de 50 preguntas + 5 reserva, 60 minutos, y segundo ejercicio práctico. Ambos eliminatorios.', 'Pendiente de solicitud. Puedes presentarte con DAM como titulación superior al Bachillerato/equivalente exigido. No hay fase de concurso ni baremo: aquí cuentan los dos ejercicios. Hay que esperar o confirmar el extracto en BOE para que empiece el plazo de 20 días hábiles.', { correct: 0.20, wrong: -0.05, blank: 0 }, diputacionTemas, [
    { label: 'BOP Toledo', url: 'https://bop.diputoledo.es/' },
    { label: 'Diputación Provincial de Toledo', url: 'https://www.diputoledo.es/' },
    { label: 'Sede electrónica Diputación', url: 'https://sede.diputoledo.es/' },
    { label: 'BOE', url: 'https://www.boe.es/' }
  ], [
    { date: '24/06/2026', title: 'Decreto de Presidencia nº 1080/2026', note: 'Aprueba convocatoria y bases de plazas OEP 2026 y vacantes resultantes de OEP 2025.', status: 'publicado' },
    { date: '25/06/2026', title: 'Bases en BOP Toledo nº 118', note: 'Incluye 2 plazas de Administrativo/a C1, escala Administración General, oposición libre.', status: 'publicado' },
    { date: 'Pendiente BOE', title: 'Apertura del plazo de solicitudes', note: 'El plazo será de 20 días hábiles desde el día siguiente al extracto en BOE.', status: 'pendiente' },
    { date: 'Pendiente', title: 'Solicitud y autoliquidación', note: 'Tasa C1: 26 €. Reducciones posibles si se acreditan los requisitos: demandante de empleo, discapacidad o familia numerosa. Confirmar declaración responsable de rentas.', status: 'pendiente' },
    { date: 'Pendiente', title: 'Listas, tribunal y examen', note: 'Se publicará en BOP Toledo, página web y tablón de Diputación.', status: 'pendiente' }
  ], diputacionCases));
})();
