(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;
  const ope = data.oposiciones.find(o => o.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = n => ope.themes.find(t => Number(t.number) === n);

  function applyTheme(n, cfg) {
    const t = theme(n);
    if (!t) return;

    t.sections = [
      sec('Resumen orientado al aprobado', [
        `Enunciado oficial: ${t.title}`,
        `Fuente principal: ${cfg.source}.`,
        cfg.summary
      ]),
      sec('Rigor normativo', [
        cfg.rigor,
        `Estado de auditoría: ${cfg.status}.`
      ]),
      ...cfg.blocks.map(([heading, paragraphs]) => sec(heading, paragraphs)),
      sec('Opo-Test: puntos calientes', cfg.hot),
      sec('Retención activa', cfg.recall)
    ];

    t.reviewTable = cfg.table;
    t.auditStatus = cfg.status;
    t.motorCoverage = cfg.complete ? 'completo-revisado-v33' : 'base-tecnica-revisada-documento-interno-pendiente';
    ope.themeTests[t.id] = cfg.questions.map((q, index) => ({
      id: `${t.id}-v33-q${index + 1}`,
      text: q.text,
      options: q.options.map((text, i) => ({ letter: 'ABCD'[i], text })),
      answer: q.answer,
      justification: q.justification
    }));
  }

  applyTheme(15, {
    source: 'Estatutos UC3M aprobados por Decreto 1/2003, de 9 de enero, y modificados por Decreto 95/2009, de 12 de noviembre',
    status: 'base estatutaria ordenada por el epígrafe oficial; pendiente incorporar el texto consolidado literal y la numeración completa de artículos',
    complete: false,
    summary: 'Este tema no exige estudiar todos los Estatutos. Debe limitarse a cuatro bloques: Defensor Universitario, servicios universitarios, régimen económico-financiero y reforma estatutaria.',
    rigor: 'La propia convocatoria identifica como norma aplicable los Estatutos aprobados por Decreto 1/2003 y modificados por Decreto 95/2009. No se atribuyen mayorías, mandatos o plazos concretos sin disponer del texto consolidado oficial.',
    blocks: [
      ['Norma estatutaria aplicable', [
        'Los Estatutos son la norma institucional básica de la Universidad dentro del marco de la Constitución, la legislación universitaria y las normas de la Comunidad de Madrid.',
        'Para el proceso selectivo se citan expresamente el Decreto 1/2003, de 9 de enero, y su modificación por Decreto 95/2009, de 12 de noviembre.',
        'En examen debe distinguirse la norma estatal universitaria —LOSU— de la regulación interna contenida en los Estatutos UC3M.'
      ]],
      ['Defensor Universitario', [
        'Es la institución universitaria destinada a velar por el respeto de los derechos y libertades de los miembros de la comunidad universitaria.',
        'Su actuación debe caracterizarse por independencia, imparcialidad, confidencialidad y ausencia de mandato imperativo en el ámbito de sus funciones.',
        'Puede recibir quejas y consultas, recabar información, formular recomendaciones, promover mediación y presentar información o memoria de su actividad conforme a la normativa aplicable.',
        'No sustituye a los órganos administrativos ni anula resoluciones: su función es garantista, supervisora, mediadora y recomendatoria.'
      ]],
      ['Servicios universitarios', [
        'Los servicios universitarios apoyan la docencia, la investigación, la transferencia, la gestión y la atención a la comunidad universitaria.',
        'Pueden organizarse con alcance general o por campus y actuar de forma centralizada o desconcentrada según la estructura aprobada por la Universidad.',
        'Su creación, modificación, supresión, organización y funcionamiento se someten a los Estatutos, a los acuerdos de los órganos competentes y a sus reglamentos específicos.',
        'En un test debe diferenciarse servicio universitario de centro, departamento, instituto universitario y órgano de gobierno.'
      ]],
      ['Régimen económico y financiero', [
        'La Universidad dispone de autonomía económica y financiera dentro de la legislación aplicable y debe elaborar, aprobar, ejecutar y liquidar su presupuesto.',
        'El régimen económico comprende patrimonio, presupuesto, ingresos, gastos, contratación, tesorería, contabilidad, control y rendición de cuentas.',
        'El presupuesto expresa los derechos que se prevé liquidar y las obligaciones que pueden reconocerse durante el ejercicio, con las limitaciones y vinculaciones de los créditos.',
        'La gestión debe respetar legalidad, eficiencia, sostenibilidad, transparencia, control y rendición de cuentas.'
      ]],
      ['Reforma de los Estatutos', [
        'La reforma estatutaria debe tramitarse por los órganos universitarios competentes y someterse al control de legalidad y aprobación que establezca la legislación autonómica.',
        'En el tema deben memorizarse, una vez incorporado el texto consolidado: quién puede iniciar la reforma, órgano que la aprueba, mayorías exigidas, procedimiento de remisión y publicación.',
        'No debe confundirse reforma de Estatutos con modificación de un reglamento interno o con la aprobación de una norma académica.'
      ]]
    ],
    hot: [
      '• Norma aplicable: Decreto 1/2003, modificado por Decreto 95/2009.',
      '• El Defensor protege derechos y libertades de la comunidad universitaria.',
      '• El Defensor formula recomendaciones, pero no sustituye ni anula resoluciones administrativas.',
      '• Los servicios universitarios apoyan docencia, investigación, transferencia, gestión y comunidad universitaria.',
      '• Autonomía económica no significa ausencia de control.',
      '• Presupuesto, patrimonio, tesorería, contabilidad y rendición de cuentas forman el régimen económico-financiero.',
      '• Reforma estatutaria y modificación de reglamento son procedimientos distintos.',
      '• Las mayorías y artículos exactos quedan pendientes del texto consolidado oficial.'
    ],
    recall: [
      '1. ¿Qué cuatro bloques exactos exige el tema 15 de la convocatoria?',
      '2. ¿Qué puede hacer el Defensor Universitario y qué no puede hacer?',
      '3. ¿Qué datos literales deben extraerse del texto consolidado para cerrar la reforma de Estatutos?'
    ],
    table: [
      ['Bloque', 'Qué debes dominar', 'No confundir con'],
      ['Defensor Universitario', 'Protección, supervisión, mediación y recomendaciones', 'Recurso administrativo o tribunal'],
      ['Servicios universitarios', 'Apoyo a funciones universitarias y regulación interna', 'Centro, departamento u órgano de gobierno'],
      ['Régimen económico', 'Patrimonio, presupuesto, gestión, control y cuentas', 'Solo elaboración del presupuesto'],
      ['Reforma estatutaria', 'Iniciativa, aprobación, mayoría, control y publicación', 'Modificación de reglamento interno']
    ],
    questions: [
      { text:'¿Qué normas aprueban y modifican los Estatutos UC3M citados en la convocatoria?', options:['Decreto 1/2003 y Decreto 95/2009','Ley 39/2015 y Ley 40/2015','RD 822/2021 y RD 534/2024','LO 3/2007 y LO 3/2018'], answer:'A', justification:'La convocatoria identifica los Estatutos aprobados por Decreto 1/2003 y modificados por Decreto 95/2009.' },
      { text:'¿Cuál es la función principal del Defensor Universitario?', options:['Velar por los derechos y libertades de la comunidad universitaria','Aprobar el presupuesto anual','Adjudicar contratos públicos','Expedir títulos oficiales'], answer:'A', justification:'Su función es garantista respecto de los derechos y libertades universitarios.' },
      { text:'¿Puede el Defensor Universitario anular por sí mismo una resolución administrativa?', options:['No, puede supervisar y formular recomendaciones','Sí, siempre','Solo si la resolución es presupuestaria','Solo mediante contrato'], answer:'A', justification:'No sustituye a los órganos resolutores ni a los recursos administrativos.' },
      { text:'¿Qué principio debe presidir la actuación del Defensor?', options:['Independencia e imparcialidad','Dependencia jerárquica de cualquier reclamante','Publicidad de datos personales','Interés económico del servicio'], answer:'A', justification:'La función garantista exige independencia, imparcialidad y confidencialidad.' },
      { text:'¿Para qué sirven los servicios universitarios?', options:['Para apoyar docencia, investigación, transferencia, gestión y atención universitaria','Para sustituir al Claustro','Para dictar leyes autonómicas','Para resolver recursos judiciales'], answer:'A', justification:'Son estructuras de apoyo a las funciones universitarias.' },
      { text:'¿Qué diferencia existe entre servicio universitario y órgano de gobierno?', options:['El servicio presta apoyo funcional; el órgano adopta decisiones dentro de sus competencias','No existe diferencia','El servicio siempre aprueba Estatutos','El órgano solo realiza tareas materiales'], answer:'A', justification:'Servicio y órgano de gobierno tienen naturaleza y funciones diferentes.' },
      { text:'La autonomía económica de la Universidad implica:', options:['Capacidad de gestionar presupuesto y patrimonio con sujeción a legalidad y control','Ausencia de controles','Libertad para gastar sin crédito','Exención de rendir cuentas'], answer:'A', justification:'Autonomía económica coexiste con legalidad, control y rendición de cuentas.' },
      { text:'¿Qué materia forma parte del régimen económico-financiero?', options:['Presupuesto, patrimonio, tesorería, contabilidad y control','Solo planes de estudio','Solo admisión de estudiantes','Únicamente elecciones universitarias'], answer:'A', justification:'El régimen económico es más amplio que la mera elaboración presupuestaria.' },
      { text:'¿Quién debe tramitar la reforma de los Estatutos?', options:['Los órganos universitarios competentes conforme al procedimiento estatutario y legal','Cualquier servicio sin acuerdo','Una empresa contratista','El Defensor mediante recomendación vinculante'], answer:'A', justification:'La reforma requiere procedimiento y órganos formalmente competentes.' },
      { text:'¿Qué dato no debe inventarse sin el texto consolidado?', options:['La mayoría exacta exigida para reformar los Estatutos','La denominación Universidad Carlos III','La existencia del tema 15','La condición de universidad pública'], answer:'A', justification:'Mayorías, artículos y plazos deben extraerse literalmente del texto oficial.' },
      { text:'¿Qué opción describe mejor una recomendación del Defensor?', options:['Una actuación no equivalente a una resolución administrativa ejecutiva','Una sentencia judicial','Una modificación presupuestaria','Una adjudicación contractual'], answer:'A', justification:'Las recomendaciones no sustituyen actos administrativos o sentencias.' },
      { text:'¿Qué debe memorizarse para cerrar el bloque de reforma?', options:['Iniciativa, órgano, mayoría, control y publicación','Solo el nombre del Rector','Únicamente la fecha de examen','Solo el número de plazas'], answer:'A', justification:'Esos elementos estructuran el procedimiento de reforma estatutaria.' }
    ]
  });

  applyTheme(18, {
    source: 'Presupuesto y bases de ejecución de la UC3M vigentes; marco general de la LOSU y normativa presupuestaria pública',
    status: 'desarrollo técnico del epígrafe completado; pendientes cifras, aplicaciones y reglas internas del presupuesto UC3M exigible',
    complete: false,
    summary: 'El tema 18 estudia la arquitectura del presupuesto: características, estructura, ingresos, gastos, financiación de créditos iniciales, modificaciones y ejecución general de ingresos.',
    rigor: 'No se incluyen importes, porcentajes, niveles de vinculación ni competencias internas no comprobados. Esos datos deben extraerse del presupuesto UC3M vigente en la fecha de la lista definitiva.',
    blocks: [
      ['Características presupuestarias', [
        'El presupuesto universitario es anual, público, único y equilibrado y debe integrar la totalidad de ingresos y gastos de la Universidad.',
        'Los créditos de gasto son limitativos y se destinan a la finalidad para la que fueron autorizados, con el nivel de vinculación que determinen las bases de ejecución.',
        'Principios clave: anualidad, especialidad cualitativa y cuantitativa, estabilidad, sostenibilidad, transparencia y control.'
      ]],
      ['Estructura', [
        'La estructura del presupuesto permite clasificar los créditos y previsiones por naturaleza económica, finalidad o programa y unidad orgánica o centro gestor.',
        'Clasificación económica de gastos: personal, bienes corrientes y servicios, gastos financieros, transferencias corrientes, inversiones reales, transferencias de capital, activos y pasivos financieros.',
        'Clasificación económica de ingresos: tasas y precios, transferencias corrientes, ingresos patrimoniales, enajenación de inversiones, transferencias de capital, activos y pasivos financieros.'
      ]],
      ['Créditos iniciales y financiación', [
        'Los créditos iniciales son los autorizados en el presupuesto aprobado al comienzo del ejercicio.',
        'Su financiación procede de las previsiones de ingresos y de los recursos legalmente disponibles.',
        'Debe comprobarse la correspondencia entre aplicación presupuestaria, centro gestor, finalidad, disponibilidad y vinculación.'
      ]],
      ['Modificaciones presupuestarias', [
        'Crédito extraordinario: habilita crédito para un gasto específico que no dispone de crédito inicial.',
        'Suplemento de crédito: incrementa un crédito existente que resulta insuficiente.',
        'Transferencia de crédito: desplaza dotación entre aplicaciones dentro de los límites legales y de las bases.',
        'Generación de crédito: incorpora crédito como consecuencia de determinados ingresos efectivamente obtenidos o comprometidos en los supuestos previstos.',
        'Incorporación de remanentes: traslada determinados créditos no utilizados al ejercicio siguiente cuando la normativa lo permite.'
      ]],
      ['Ejecución general de ingresos', [
        'La gestión del ingreso comprende previsión, reconocimiento y liquidación del derecho, recaudación o cobro, devolución cuando proceda y control contable.',
        'El reconocimiento del derecho identifica una cantidad líquida exigible a favor de la Universidad.',
        'La recaudación materializa el cobro y extingue total o parcialmente el derecho reconocido.',
        'Debe distinguirse ingreso presupuestario, ingreso no presupuestario, derecho pendiente de cobro y devolución de ingresos.'
      ]]
    ],
    hot: [
      '• Presupuesto universitario: anual, público, único y equilibrado.',
      '• Crédito inicial: autorizado al aprobarse el presupuesto.',
      '• Crédito extraordinario: no existía crédito; suplemento: crédito existente insuficiente.',
      '• Transferencia: movimiento entre aplicaciones.',
      '• Generación: crédito asociado a determinados ingresos.',
      '• Incorporación: traslado permitido de remanentes al ejercicio siguiente.',
      '• Reconocimiento del derecho y cobro son fases distintas.',
      '• El nivel de vinculación y las competencias concretas deben copiarse de las bases UC3M vigentes.'
    ],
    recall: [
      '1. ¿Qué diferencias hay entre crédito extraordinario, suplemento, transferencia, generación e incorporación?',
      '2. ¿Cómo se clasifican económicamente ingresos y gastos?',
      '3. ¿Qué diferencia existe entre reconocer un derecho y recaudarlo?'
    ],
    table: [
      ['Figura', 'Finalidad', 'Dato clave'],
      ['Crédito extraordinario', 'Crear crédito inexistente', 'No había dotación inicial'],
      ['Suplemento', 'Aumentar crédito insuficiente', 'Ya existía aplicación'],
      ['Transferencia', 'Mover crédito', 'Entre aplicaciones y con límites'],
      ['Generación', 'Crear o aumentar por ingresos', 'Supuesto habilitante'],
      ['Incorporación', 'Pasar remanentes', 'Solo créditos incorporables'],
      ['Reconocimiento del derecho', 'Registrar derecho exigible', 'Anterior o distinto del cobro']
    ],
    questions: [
      { text:'¿Qué característica corresponde al presupuesto universitario?', options:['Anual, público, único y equilibrado','Secreto y plurianual en todo caso','Ilimitado','Exento de control'], answer:'A', justification:'El presupuesto universitario se configura como anual, público, único y equilibrado.' },
      { text:'¿Qué es un crédito inicial?', options:['El autorizado al aprobarse el presupuesto','Un ingreso ya cobrado','Una deuda anulada','Un contrato formalizado'], answer:'A', justification:'Es la dotación autorizada al inicio del ejercicio.' },
      { text:'Si no existe crédito para un gasto específico, la figura adecuada es:', options:['Crédito extraordinario','Suplemento de crédito','Reconocimiento de derecho','Reintegro'], answer:'A', justification:'El crédito extraordinario habilita crédito inexistente.' },
      { text:'Si existe crédito pero es insuficiente, procede estudiar:', options:['Suplemento de crédito','Crédito extraordinario necesariamente','Anulación del presupuesto','Ingreso no presupuestario'], answer:'A', justification:'El suplemento incrementa una dotación ya existente.' },
      { text:'¿Qué es una transferencia de crédito?', options:['Desplazamiento de dotación entre aplicaciones','Cobro de una tasa','Pago material','Reconocimiento de una obligación'], answer:'A', justification:'La transferencia mueve crédito con los límites legales y de las bases.' },
      { text:'¿Qué caracteriza a la generación de crédito?', options:['Se vincula a determinados ingresos previstos legalmente','Siempre reduce ingresos','Elimina una aplicación','Sustituye la liquidación'], answer:'A', justification:'La generación habilita o amplía crédito por ingresos en supuestos autorizados.' },
      { text:'¿Qué es una incorporación de remanentes?', options:['Traslado al ejercicio siguiente de créditos legalmente incorporables','Creación de una tasa','Pago de una factura','Cierre de tesorería'], answer:'A', justification:'Solo ciertos remanentes pueden incorporarse.' },
      { text:'¿Qué fase identifica un importe líquido exigible a favor de la Universidad?', options:['Reconocimiento del derecho','Autorización del gasto','Disposición del gasto','Ordenación del pago'], answer:'A', justification:'El reconocimiento registra el derecho de cobro.' },
      { text:'¿Qué diferencia hay entre reconocimiento y recaudación?', options:['El primero registra el derecho; la segunda materializa el cobro','Son exactamente lo mismo','La recaudación siempre es anterior','Ambos son fases de gasto'], answer:'A', justification:'Derecho reconocido y cobro son momentos distintos.' },
      { text:'¿Qué clasificación agrupa capítulos por naturaleza del ingreso o gasto?', options:['Clasificación económica','Clasificación alfabética','Clasificación electoral','Clasificación académica'], answer:'A', justification:'La clasificación económica atiende a la naturaleza de las operaciones.' },
      { text:'¿Qué dato debe tomarse de las bases UC3M vigentes?', options:['Nivel de vinculación y competencias internas','La definición general de transferencia','El nombre de la Universidad','La existencia del presupuesto'], answer:'A', justification:'Vinculación, límites y competencias son datos internos del ejercicio.' },
      { text:'¿Qué principio impide utilizar libremente un crédito para cualquier finalidad?', options:['Especialidad cualitativa','Publicidad activa','Libertad de cátedra','Autonomía académica'], answer:'A', justification:'La especialidad cualitativa vincula el crédito a su finalidad.' }
    ]
  });

  applyTheme(19, {
    source: 'Presupuesto y bases de ejecución de la UC3M vigentes; normativa pública de gestión presupuestaria y contable',
    status: 'desarrollo técnico del epígrafe completado; pendientes límites, órganos, documentos y fechas internas UC3M',
    complete: false,
    summary: 'El tema 19 se centra en ejecutar el gasto: fases, competencia, compras, transferencias, inversiones, documentos contables, ordenación del pago, liquidación y cierre.',
    rigor: 'Las fases y documentos se estudian como marco técnico. Los importes, delegaciones, umbrales, fechas de cierre y procedimientos internos deben copiarse de las bases de ejecución UC3M exigibles.',
    blocks: [
      ['Fases de ejecución del gasto', [
        'Retención de crédito —RC—: reserva crédito disponible para una finalidad o expediente.',
        'Autorización —A—: acto por el que se acuerda realizar un gasto por cuantía cierta o aproximada, reservando crédito.',
        'Disposición o compromiso —D—: acto que vincula a la Universidad frente a un tercero por importe y condiciones determinadas.',
        'Reconocimiento de la obligación —O—: declara la existencia de una deuda exigible tras acreditarse la prestación o el derecho del acreedor.',
        'Ordenación del pago y pago material —P—: propuesta u orden dirigida a Tesorería y salida efectiva de fondos.'
      ]],
      ['Documentos contables', [
        'Documentos simples: RC, A, D, O y P o equivalente según el sistema contable utilizado.',
        'Documentos mixtos: AD, ADO y otros que acumulen fases cuando el procedimiento lo permita.',
        'Documentos inversos: anulan total o parcialmente operaciones previas y deben conservar la trazabilidad.',
        'El documento contable registra la operación, pero no sustituye el expediente administrativo, la competencia ni la documentación justificativa.'
      ]],
      ['Compra de bienes y servicios', [
        'La adquisición debe apoyarse en necesidad, crédito adecuado y suficiente, procedimiento de contratación o gasto aplicable, conformidad, factura y reconocimiento de obligación.',
        'Debe distinguirse gasto contractual, gasto menor, indemnización, encargo, subvención o transferencia: cada figura tiene expediente y justificación diferentes.',
        'La factura no basta por sí sola: debe existir conformidad de la prestación y aprobación por órgano competente.'
      ]],
      ['Transferencias e inversiones', [
        'Transferencia corriente: entrega sin contraprestación directa destinada a financiar operaciones corrientes.',
        'Transferencia de capital: entrega sin contraprestación directa destinada a financiar inversiones u operaciones de capital.',
        'Inversión real: adquisición, construcción o mejora de bienes de capital y otros activos no financieros imputables al capítulo correspondiente.',
        'No debe confundirse transferencia de crédito —modificación— con transferencia corriente o de capital —naturaleza del gasto—.'
      ]],
      ['Ordenación del gasto y del pago', [
        'La ordenación del gasto comprende las decisiones de autorización, compromiso y reconocimiento por los órganos competentes.',
        'La ordenación del pago es una función diferente: convierte obligaciones reconocidas en órdenes de pago conforme al plan y disponibilidad de Tesorería.',
        'La segregación de funciones y el control previo o posterior reducen errores y conflictos de interés.'
      ]],
      ['Liquidación y cierre', [
        'El cierre limita temporalmente la tramitación y contabilización de operaciones del ejercicio conforme al calendario aprobado.',
        'La liquidación determina la ejecución definitiva de ingresos y gastos, derechos pendientes de cobro, obligaciones pendientes de pago, resultado presupuestario y remanentes.',
        'Las operaciones pendientes deben clasificarse y justificarse: anulaciones, compromisos futuros, acreedores, deudores, periodificación y conciliación.',
        'Las fechas exactas y documentos exigidos en UC3M deben obtenerse del calendario y de las instrucciones de cierre vigentes.'
      ]]
    ],
    hot: [
      '• Secuencia básica del gasto: RC, A, D, O, ordenación y pago.',
      '• A reserva/autoriza; D compromete frente a tercero; O reconoce deuda exigible.',
      '• AD y ADO acumulan fases cuando el procedimiento lo permite.',
      '• Documento contable no sustituye expediente ni competencia.',
      '• Factura requiere conformidad y aprobación para reconocer obligación.',
      '• Transferencia de crédito no es transferencia corriente o de capital.',
      '• Ordenador del gasto y ordenador del pago cumplen funciones diferentes.',
      '• Fechas de cierre, límites y delegaciones deben copiarse de las instrucciones UC3M vigentes.'
    ],
    recall: [
      '1. ¿Qué efecto produce cada fase RC, A, D, O y P?',
      '2. ¿Qué diferencia existe entre transferencia de crédito, corriente y de capital?',
      '3. ¿Qué información produce la liquidación y qué datos dependen del cierre UC3M?'
    ],
    table: [
      ['Fase/documento', 'Qué hace', 'Dato de examen'],
      ['RC', 'Retiene crédito', 'No compromete todavía con tercero'],
      ['A', 'Autoriza el gasto', 'Reserva para una finalidad'],
      ['D', 'Compromete', 'Vínculo con tercero'],
      ['O', 'Reconoce obligación', 'Deuda exigible acreditada'],
      ['P', 'Ordena/materializa pago', 'Interviene Tesorería'],
      ['AD/ADO', 'Acumula fases', 'Solo cuando el procedimiento lo permite']
    ],
    questions: [
      { text:'¿Qué función cumple un documento RC?', options:['Retener crédito disponible','Reconocer una obligación','Ordenar un pago','Liquidar ingresos'], answer:'A', justification:'RC reserva crédito para una finalidad o expediente.' },
      { text:'¿Qué fase autoriza realizar el gasto?', options:['A','D','O','P'], answer:'A', justification:'La autorización es la fase A.' },
      { text:'¿Qué fase vincula a la Universidad frente a un tercero?', options:['D','RC','A exclusivamente','Liquidación'], answer:'A', justification:'La disposición o compromiso D concreta el vínculo con tercero.' },
      { text:'¿Qué fase declara una deuda exigible?', options:['O','A','RC','Previsión de ingreso'], answer:'A', justification:'El reconocimiento de obligación acredita la deuda tras la prestación.' },
      { text:'¿Qué documento puede acumular autorización, disposición y obligación?', options:['ADO','RC','P exclusivamente','Documento de ingreso'], answer:'A', justification:'ADO acumula tres fases cuando procede.' },
      { text:'¿Un documento contable sustituye el expediente administrativo?', options:['No','Sí, siempre','Solo en inversiones','Solo en transferencias'], answer:'A', justification:'El documento registra, pero no sustituye competencia, expediente y justificantes.' },
      { text:'¿Qué se necesita además de la factura para reconocer una obligación?', options:['Conformidad de la prestación y aprobación competente','Solo una llamada telefónica','Únicamente presupuesto inicial','Ningún documento'], answer:'A', justification:'Debe acreditarse la prestación y aprobarse el reconocimiento.' },
      { text:'¿Qué es una transferencia corriente?', options:['Entrega sin contraprestación para operaciones corrientes','Movimiento de crédito entre aplicaciones','Compra de inmovilizado','Pago de nómina necesariamente'], answer:'A', justification:'Es una naturaleza de gasto distinta de la modificación por transferencia.' },
      { text:'¿Qué es una transferencia de capital?', options:['Entrega sin contraprestación para financiar inversión u operaciones de capital','Movimiento entre partidas de personal','Pago de una factura ordinaria','Ingreso tributario'], answer:'A', justification:'Financia operaciones de capital sin contraprestación directa.' },
      { text:'¿Qué diferencia existe entre ordenar el gasto y ordenar el pago?', options:['La primera aprueba fases del gasto; la segunda emite órdenes sobre obligaciones reconocidas','Son siempre la misma función','El pago es anterior al gasto','La ordenación del gasto solo afecta a ingresos'], answer:'A', justification:'Son funciones diferenciadas y pueden corresponder a órganos distintos.' },
      { text:'¿Qué información surge de la liquidación?', options:['Ejecución, derechos y obligaciones pendientes, resultado y remanentes','Solo el número de estudiantes','Únicamente contratos menores','Solo inventario de biblioteca'], answer:'A', justification:'La liquidación refleja el cierre económico y presupuestario del ejercicio.' },
      { text:'¿Qué dato debe verificarse en instrucciones UC3M?', options:['Fechas límite de cierre y órganos delegados','La definición general de obligación','La existencia de Tesorería','El nombre del tema'], answer:'A', justification:'Fechas, límites, documentos y competencias internas varían por ejercicio.' }
    ]
  });

  const all = Object.values(ope.themeTests).flat();
  ope.simulacros = [0, 53, 109].map((start, s) => ({
    id: `uc3m-v33-sim${s + 1}`,
    title: `Simulacro UC3M de contenido ${s + 1}`,
    questions: Array.from({ length: 70 }, (_, i) => ({ ...all[(start + i * 19) % all.length], id: `uc3m-v33-sim${s + 1}-q${i + 1}` }))
  }));

  ope.version = '0.33.0';
  ope.coverage = {
    developed: [1,2,3,4,5,6,8,9,10,11,12,13,14,16,17,20],
    developedWithInternalDocumentPending: [7,15,18,19]
  };
  ope.status = `${(ope.status || '').replace(/ Revisión v0\.32:.*/, '')} Revisión v0.33: desarrollados los temas 15, 18 y 19 sin inventar mayorías, importes, límites ni fechas internas. Quedan pendientes los textos consolidados y bases UC3M para cerrar la literalidad.`;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: '0.33.0',
    date: '2026-07-10',
    changes: [
      'Desarrollado el tema 15 por sus cuatro bloques oficiales',
      'Desarrollado el tema 18: estructura, créditos, modificaciones e ingresos',
      'Desarrollado el tema 19: fases de gasto, documentos, pagos y cierre',
      'Añadidas 36 preguntas específicas',
      'Mantenida señalización de datos internos pendientes para evitar falsa precisión'
    ]
  });

  window.OPOWEB_UC3M_V33 = {
    version: 'v0.33.0',
    developed: [15,18,19],
    pendingLiteralSources: ['Estatutos UC3M consolidados','Presupuesto y bases de ejecución UC3M vigentes']
  };

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();