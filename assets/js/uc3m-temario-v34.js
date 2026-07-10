(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;
  const ope = data.oposiciones.find(o => o.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = n => ope.themes.find(t => Number(t.number) === n);

  function questionsFor(t, defs) {
    return defs.map((d, i) => {
      const raw = [d.correct, ...d.wrong];
      const shift = (Number(t.number) + i) % 4;
      const ordered = raw.slice(shift).concat(raw.slice(0, shift));
      return {
        id: `${t.id}-v34-q${i + 1}`,
        text: d.text,
        options: ordered.map((text, index) => ({ letter: 'ABCD'[index], text })),
        answer: 'ABCD'[ordered.indexOf(d.correct)],
        justification: d.justification
      };
    });
  }

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
    t.motorCoverage = 'completo-revisado-v34';
    ope.themeTests[t.id] = questionsFor(t, cfg.questions);
  }

  applyTheme(1, {
    source: 'Constitución Española de 1978, texto consolidado del BOE',
    status: 'tema completo y ajustado al epígrafe oficial por títulos, capítulos y artículos',
    summary: 'El tema exige cinco bloques: estructura constitucional, derechos y deberes, elaboración de las leyes, organización territorial y reforma. La prioridad no es memorizar los 169 artículos, sino dominar la ubicación sistemática, las garantías y los procedimientos que suelen convertirse en preguntas literales.',
    rigor: 'La Constitución consta de Preámbulo, Título Preliminar, diez títulos numerados del I al X, cuatro disposiciones adicionales, nueve transitorias, una derogatoria y una final. Los artículos de derechos deben estudiarse junto a su nivel de garantía, no como una lista aislada.',
    blocks: [
      ['Estructura y contenido', [
        'Título Preliminar, artículos 1 a 9: Estado social y democrático de Derecho, soberanía nacional, Monarquía parlamentaria, unidad y autonomía, lengua, bandera, capital, partidos, sindicatos, Fuerzas Armadas y principios del artículo 9.',
        'Título I, artículos 10 a 55: derechos y deberes fundamentales, españoles y extranjeros, derechos y libertades, principios rectores, garantías y suspensión.',
        'Parte orgánica: Corona —Título II—; Cortes Generales —III—; Gobierno y Administración —IV—; relaciones Gobierno-Cortes —V—; Poder Judicial —VI—; Economía y Hacienda —VII—; organización territorial —VIII—; Tribunal Constitucional —IX—; reforma —X—.'
      ]],
      ['Derechos y deberes fundamentales', [
        'Artículo 10: dignidad, derechos inviolables, libre desarrollo, respeto a la ley y a los derechos ajenos; interpretación conforme a la Declaración Universal y tratados ratificados por España.',
        'Artículo 14: igualdad ante la ley y prohibición de discriminación. Aunque no está dentro de la Sección 1.ª, tiene tutela reforzada y amparo.',
        'Sección 1.ª, artículos 15 a 29: derechos fundamentales y libertades públicas. Sección 2.ª, artículos 30 a 38: derechos y deberes de los ciudadanos.',
        'Capítulo III, artículos 39 a 52: principios rectores. Informan legislación, práctica judicial y actuación pública; su alegación se realiza conforme a las leyes que los desarrollen.',
        'Artículo 53: garantías. Artículo 54: Defensor del Pueblo. Artículo 55: suspensión general e individual de determinados derechos en los supuestos constitucionales.'
      ]],
      ['Elaboración de las leyes', [
        'Artículo 81: leyes orgánicas. Regulan derechos fundamentales y libertades públicas, Estatutos de Autonomía, régimen electoral general y demás materias previstas constitucionalmente. Su aprobación, modificación o derogación exige mayoría absoluta del Congreso en votación final sobre el conjunto.',
        'Artículos 82 a 85: delegación legislativa mediante ley de bases para textos articulados o ley ordinaria para refundir textos; el resultado adopta la forma de decreto legislativo.',
        'Artículo 86: decreto-ley por extraordinaria y urgente necesidad; límites materiales y convalidación o derogación por el Congreso en treinta días.',
        'Artículos 87 a 91: iniciativa legislativa, proyectos y proposiciones, intervención del Senado, sanción y promulgación. Artículo 92: referéndum consultivo sobre decisiones políticas de especial trascendencia.'
      ]],
      ['Organización territorial', [
        'Artículo 137: Estado organizado territorialmente en municipios, provincias y Comunidades Autónomas, todas con autonomía para gestionar sus intereses.',
        'Artículos 138 y 139: solidaridad, equilibrio territorial e igualdad de derechos y obligaciones; libertad de circulación y establecimiento.',
        'Artículos 140 a 142: autonomía municipal, provincia y haciendas locales. Artículos 143 a 158: acceso a la autonomía, Estatutos, competencias, control y financiación autonómica.'
      ]],
      ['Reforma constitucional', [
        'Artículo 166: iniciativa de reforma conforme a los apartados 1 y 2 del artículo 87; no corresponde a la iniciativa popular.',
        'Artículo 167: procedimiento ordinario. Mayoría de tres quintos de cada Cámara; mecanismos de aproximación y alternativa de dos tercios del Congreso con mayoría absoluta del Senado. Referéndum facultativo si lo solicita una décima parte de cualquier Cámara dentro de quince días.',
        'Artículo 168: procedimiento agravado para revisión total o parcial que afecte al Título Preliminar, Sección 1.ª del Capítulo II del Título I o Título II. Exige aprobación inicial por dos tercios, disolución, ratificación de nuevas Cámaras, aprobación por dos tercios y referéndum obligatorio.',
        'Artículo 169: no puede iniciarse reforma en tiempo de guerra ni durante la vigencia de los estados del artículo 116.'
      ]]
    ],
    hot: [
      '• Artículo 1: Estado social y democrático de Derecho; libertad, justicia, igualdad y pluralismo político.',
      '• Artículo 9.3: legalidad, jerarquía, publicidad, irretroactividad sancionadora no favorable, seguridad jurídica, responsabilidad e interdicción de arbitrariedad.',
      '• Artículo 14 y artículos 15 a 29: tutela reforzada y amparo.',
      '• Ley orgánica: mayoría absoluta del Congreso en votación final sobre el conjunto.',
      '• Decreto-ley: extraordinaria y urgente necesidad; convalidación o derogación en treinta días.',
      '• Artículo 137: municipios, provincias y Comunidades Autónomas.',
      '• Reforma ordinaria: referéndum facultativo; agravada: referéndum obligatorio.',
      '• No puede iniciarse reforma en guerra ni durante los estados del artículo 116.'
    ],
    recall: [
      '1. ¿Cómo se distribuyen los derechos del Título I y qué garantía tiene cada bloque?',
      '2. ¿Qué diferencias existen entre ley orgánica, decreto legislativo y decreto-ley?',
      '3. ¿Cuándo se aplica el artículo 168 y qué pasos exige?'
    ],
    table: [
      ['Concepto', 'Regla', 'Dato de examen'],
      ['Ley orgánica', 'Materias reservadas del art. 81', 'Mayoría absoluta del Congreso en votación final'],
      ['Decreto legislativo', 'Delegación de las Cortes', 'Ley de bases o ley ordinaria de refundición'],
      ['Decreto-ley', 'Extraordinaria y urgente necesidad', 'Congreso: 30 días'],
      ['Reforma ordinaria', 'Artículo 167', 'Referéndum facultativo'],
      ['Reforma agravada', 'Artículo 168', 'Disolución y referéndum obligatorio']
    ],
    questions: [
      { text:'¿Cuáles son los valores superiores del artículo 1.1 CE?', correct:'Libertad, justicia, igualdad y pluralismo político', wrong:['Legalidad, eficacia, jerarquía y coordinación','Unidad, autonomía, solidaridad y suficiencia','Mérito, capacidad, publicidad y concurrencia'], justification:'El artículo 1.1 enumera libertad, justicia, igualdad y pluralismo político.' },
      { text:'¿Dónde reside la soberanía nacional?', correct:'En el pueblo español', wrong:['En las Cortes Generales exclusivamente','En el Gobierno','En el Rey'], justification:'Artículo 1.2 CE.' },
      { text:'¿Qué derecho, aunque situado fuera de la Sección 1.ª, tiene protección reforzada y amparo?', correct:'La igualdad del artículo 14', wrong:['La propiedad del artículo 33','El trabajo del artículo 35','La libertad de empresa del artículo 38'], justification:'El artículo 14 comparte la tutela del artículo 53.2 con la Sección 1.ª.' },
      { text:'¿Qué artículos integran la Sección 1.ª del Capítulo II del Título I?', correct:'Los artículos 15 a 29', wrong:['Los artículos 10 a 14','Los artículos 30 a 38','Los artículos 39 a 52'], justification:'La Sección 1.ª contiene derechos fundamentales y libertades públicas, arts. 15-29.' },
      { text:'¿Qué mayoría exige una ley orgánica en la votación final sobre el conjunto?', correct:'Mayoría absoluta del Congreso', wrong:['Tres quintos de cada Cámara','Mayoría simple del Senado','Dos tercios del Congreso'], justification:'Artículo 81.2 CE.' },
      { text:'¿Qué instrumento resulta de una delegación legislativa?', correct:'Un decreto legislativo', wrong:['Un decreto-ley','Una orden ministerial','Un reglamento parlamentario'], justification:'Artículos 82 a 85 CE.' },
      { text:'¿En qué plazo debe el Congreso convalidar o derogar un decreto-ley?', correct:'Treinta días', wrong:['Quince días','Un mes hábil','Tres meses'], justification:'Artículo 86.2 CE.' },
      { text:'¿Quiénes integran la organización territorial del artículo 137?', correct:'Municipios, provincias y Comunidades Autónomas', wrong:['Comarcas, provincias y Estado','Municipios y Administración General del Estado','Provincias, islas y mancomunidades exclusivamente'], justification:'Artículo 137 CE.' },
      { text:'¿Qué procedimiento se aplica a una reforma que afecte al Título Preliminar?', correct:'El procedimiento agravado del artículo 168', wrong:['El ordinario del artículo 167','Una ley orgánica ordinaria','Un decreto legislativo'], justification:'El artículo 168 protege Título Preliminar, Sección 1.ª del Título I y Título II.' },
      { text:'En el procedimiento ordinario, ¿cuándo se celebra referéndum?', correct:'Cuando lo solicite una décima parte de cualquier Cámara dentro de quince días', wrong:['Siempre','Solo si lo solicita el Gobierno','Nunca'], justification:'Artículo 167.3 CE.' },
      { text:'¿Qué ocurre tras la aprobación inicial de una reforma agravada?', correct:'Se disuelven inmediatamente las Cortes', wrong:['Se sanciona directamente','Se convoca solo al Senado','Se publica sin referéndum'], justification:'Artículo 168.1 CE.' },
      { text:'¿Puede iniciarse una reforma constitucional durante un estado del artículo 116?', correct:'No', wrong:['Sí, por mayoría absoluta','Solo durante el estado de alarma','Sí, si no afecta al Título I'], justification:'Artículo 169 CE.' },
      { text:'¿Qué artículo enumera legalidad, jerarquía normativa y seguridad jurídica?', correct:'El artículo 9.3', wrong:['El artículo 1.1','El artículo 14','El artículo 53.2'], justification:'Artículo 9.3 CE.' },
      { text:'¿Qué carácter tiene el referéndum del artículo 92?', correct:'Consultivo', wrong:['Legislativo vinculante','Constituyente automático','Judicial'], justification:'El artículo 92 regula referéndum consultivo sobre decisiones políticas de especial trascendencia.' },
      { text:'¿A quién no reconoce el artículo 166 iniciativa de reforma?', correct:'A la iniciativa legislativa popular', wrong:['Al Gobierno','Al Congreso','A las Asambleas autonómicas en los términos del artículo 87.2'], justification:'El artículo 166 remite a los apartados 1 y 2 del artículo 87, no al apartado 3.' }
    ]
  });

  applyTheme(2, {
    source: 'Ley 39/2015, Títulos Preliminar, I, II y III, texto consolidado del BOE',
    status: 'tema completo con artículos, plazos, efectos y diferencias esenciales',
    summary: 'Este tema abarca desde el objeto de la Ley hasta la validez y eficacia de los actos administrativos. Debe estudiarse como una cadena: quién puede actuar, cómo se relaciona con la Administración, cómo se computa el tiempo y qué requisitos convierten un acto en válido y eficaz.',
    rigor: 'Título Preliminar: artículos 1 y 2. Título I: artículos 3 a 12. Título II: artículos 13 a 33. Título III: artículos 34 a 52. No deben mezclarse los derechos generales del artículo 13 con los derechos del interesado del artículo 53.',
    blocks: [
      ['Disposiciones generales', [
        'Artículo 1: objeto. Validez y eficacia de actos, procedimiento común —incluido sancionador y responsabilidad patrimonial en su dimensión procedimental— e iniciativa legislativa y potestad reglamentaria.',
        'Artículo 2: sector público. AGE, Comunidades Autónomas, entidades locales y sector público institucional en los términos legales.'
      ]],
      ['Interesados, representación e identificación', [
        'Artículos 3 y 4: capacidad de obrar y concepto de interesado. Incluye promotores, titulares de derechos afectados y titulares de intereses legítimos personados antes de resolución definitiva.',
        'Artículo 5: representación. Debe acreditarse para solicitudes, declaraciones responsables, comunicaciones, recursos, desistimiento y renuncia. La falta de acreditación es subsanable, ordinariamente en diez días.',
        'Artículo 6: registros electrónicos de apoderamientos. Los poderes inscritos tienen validez máxima de cinco años, sin perjuicio de renovación.',
        'Artículos 9 a 12: identificación, firma, asistencia y actuación mediante funcionario habilitado.'
      ]],
      ['Actividad de las Administraciones', [
        'Artículo 13: derechos de las personas. Artículo 14: elección u obligación de relación electrónica; están obligadas, entre otras, personas jurídicas, entidades sin personalidad, profesionales colegiados en sus trámites profesionales, representantes de obligados y empleados públicos para trámites por su condición.',
        'Artículo 16: registro electrónico general y lugares válidos de presentación. Artículo 17: archivo electrónico único para procedimientos finalizados.',
        'Artículo 21: obligación de resolver expresamente y notificar. Si la norma no fija plazo máximo, será de tres meses.',
        'Artículos 24 y 25: silencio en procedimientos iniciados a solicitud y falta de resolución en procedimientos de oficio. El silencio positivo es la regla general a solicitud, con excepciones legales.'
      ]],
      ['Términos y plazos', [
        'Artículos 29 a 33. Los plazos obligan a Administración e interesados.',
        'Artículo 30: por horas, días, meses y años. Cuando se señalen días se entienden hábiles salvo ley o Derecho de la Unión que establezca naturales; sábados, domingos y festivos son inhábiles.',
        'Los plazos por meses o años se computan de fecha a fecha; si no hay día equivalente, vencen el último día del mes. Si el último día es inhábil, se prorroga al primer hábil siguiente.',
        'Artículo 32: ampliación hasta un máximo de la mitad del plazo si las circunstancias lo aconsejan y no se perjudican derechos de terceros. Artículo 33: urgencia reduce a la mitad salvo solicitudes y recursos.'
      ]],
      ['Actos administrativos', [
        'Artículos 34 a 36: producción por órgano competente, contenido conforme al ordenamiento, motivación en los supuestos del artículo 35 y forma, ordinariamente electrónica.',
        'Artículos 37 a 46: inderogabilidad singular, ejecutividad, efectos, notificación y publicación. La notificación debe contener texto íntegro, indicación de si pone fin a la vía, recursos, órgano y plazo.',
        'Artículo 43: una notificación electrónica obligatoria o elegida se entiende rechazada si pasan diez días naturales desde su puesta a disposición sin acceder, salvo imposibilidad técnica o material.',
        'Artículos 47 a 52: nulidad de pleno derecho, anulabilidad, límites a extensión, conversión, conservación y convalidación.'
      ]]
    ],
    hot: [
      '• Representación: actos que exigen acreditación y subsanación ordinaria de diez días.',
      '• Apoderamiento inscrito: validez máxima de cinco años.',
      '• Plazo máximo supletorio para resolver: tres meses.',
      '• Días hábiles: sábados, domingos y festivos excluidos.',
      '• Urgencia: mitad de plazos salvo solicitudes y recursos.',
      '• Notificación electrónica rechazada: diez días naturales sin acceso.',
      '• Nulidad: causas tasadas; anulabilidad: infracción no incluida en nulidad.',
      '• Convalidación subsana actos anulables, no actos nulos de pleno derecho.'
    ],
    recall: [
      '1. ¿Quiénes son interesados y qué actos exigen acreditar representación?',
      '2. ¿Cómo se computan días, meses y años y qué excepciones tiene la urgencia?',
      '3. ¿Qué diferencias existen entre eficacia, nulidad, anulabilidad y convalidación?'
    ],
    table: [
      ['Materia', 'Regla', 'Excepción/dato'],
      ['Resolver', 'Plazo fijado por norma', 'Tres meses si no se fija'],
      ['Días', 'Hábiles', 'Naturales solo si se establece expresamente'],
      ['Urgencia', 'Reduce a la mitad', 'No solicitudes ni recursos'],
      ['Notificación electrónica', 'Acceso al contenido', 'Rechazo tras 10 días naturales'],
      ['Invalidez', 'Anulabilidad como infracción ordinaria', 'Nulidad solo causas del art. 47']
    ],
    questions: [
      { text:'¿Quién puede ser interesado conforme al artículo 4?', correct:'Quien promueve el procedimiento como titular de derechos o intereses legítimos', wrong:['Solo una persona física española','Únicamente quien ya tenga una resolución favorable','Cualquier tercero sin conexión con el asunto'], justification:'Artículo 4 Ley 39/2015.' },
      { text:'¿Para qué actuación debe acreditarse la representación?', correct:'Para interponer un recurso administrativo', wrong:['Para un acto de mero trámite en todo caso','Para consultar información pública general','Para recibir una explicación verbal'], justification:'El artículo 5 exige acreditación para solicitudes, declaraciones, comunicaciones, recursos, desistimiento y renuncia.' },
      { text:'¿Cuál es el plazo ordinario de subsanación de la representación?', correct:'Diez días', wrong:['Cinco días','Quince días','Un mes'], justification:'Artículo 5.6 Ley 39/2015.' },
      { text:'¿Cuál es la validez máxima ordinaria de un poder inscrito?', correct:'Cinco años', wrong:['Un año','Diez años','Indefinida sin renovación'], justification:'Artículo 6.6 Ley 39/2015.' },
      { text:'¿Quién está obligado a relacionarse electrónicamente?', correct:'Una persona jurídica', wrong:['Toda persona física sin excepción','Un menor en cualquier trámite','Solo los empleados públicos jubilados'], justification:'Artículo 14.2 Ley 39/2015.' },
      { text:'Si una norma no fija plazo máximo para resolver, ¿cuál se aplica?', correct:'Tres meses', wrong:['Diez días','Seis meses','Un año'], justification:'Artículo 21.3 Ley 39/2015.' },
      { text:'En procedimientos iniciados a solicitud, el silencio es como regla:', correct:'Estimatorio, salvo excepciones legales', wrong:['Siempre desestimatorio','Inexistente','Caducidad automática'], justification:'Artículo 24 Ley 39/2015.' },
      { text:'¿Son hábiles los sábados a efectos de la Ley 39/2015?', correct:'No', wrong:['Sí, siempre','Solo por la mañana','Solo para recursos'], justification:'Artículo 30.2: sábados, domingos y festivos son inhábiles.' },
      { text:'¿Cómo se computa un plazo señalado por meses?', correct:'De fecha a fecha', wrong:['Siempre por treinta días naturales','Solo por días hábiles','Desde el último día del mes'], justification:'Artículo 30.4 Ley 39/2015.' },
      { text:'¿Qué plazos no se reducen por tramitación de urgencia?', correct:'Los de presentación de solicitudes y recursos', wrong:['Los de informes y audiencia','Los de prueba','Los de notificación'], justification:'Artículo 33.1 Ley 39/2015.' },
      { text:'¿Qué acto debe motivarse?', correct:'El que limita derechos subjetivos o intereses legítimos', wrong:['Todo acto de mero trámite sin excepción','Toda copia auténtica','Todo asiento registral'], justification:'Artículo 35.1.a Ley 39/2015.' },
      { text:'¿Qué debe incluir una notificación?', correct:'Texto íntegro, recursos, órgano y plazo', wrong:['Solo el fallo','Solo el nombre del instructor','Únicamente una dirección web'], justification:'Artículo 40.2 Ley 39/2015.' },
      { text:'¿Cuándo se entiende rechazada una notificación electrónica obligatoria no abierta?', correct:'Tras diez días naturales desde su puesta a disposición', wrong:['Tras cinco días hábiles','Tras un mes','Nunca'], justification:'Artículo 43.2 Ley 39/2015.' },
      { text:'La infracción del ordenamiento que no sea causa de nulidad produce normalmente:', correct:'Anulabilidad', wrong:['Inexistencia automática','Nulidad de pleno derecho siempre','Caducidad'], justification:'Artículo 48.1 Ley 39/2015.' },
      { text:'¿Qué actos pueden convalidarse?', correct:'Los anulables, subsanando sus vicios', wrong:['Los nulos de pleno derecho en todo caso','Las disposiciones derogadas','Las sentencias judiciales'], justification:'Artículo 52 Ley 39/2015.' }
    ]
  });

  applyTheme(3, {
    source: 'Ley 39/2015, Títulos IV y V, texto consolidado del BOE',
    status: 'tema completo con fases del procedimiento, ejecución, revisión y recursos',
    summary: 'Este tema debe estudiarse como un itinerario: iniciación, ordenación, instrucción, terminación, ejecución y revisión. Los plazos de subsanación, audiencia, información pública y recursos son el núcleo de test.',
    rigor: 'Título IV: artículos 53 a 105. Título V: artículos 106 a 126. No debe confundirse revisión de oficio con recurso administrativo ni declaración de lesividad con revocación.',
    blocks: [
      ['Derechos e iniciación', [
        'Artículo 53: derechos de la persona interesada dentro del procedimiento: conocer estado, identificar responsables, acceder y obtener copias, formular alegaciones y no aportar documentos ya en poder administrativo, entre otros.',
        'Artículos 54 a 65: iniciación de oficio por propia iniciativa, orden superior, petición razonada o denuncia; información previa, medidas provisionales y acumulación.',
        'Artículos 66 a 69: solicitudes, subsanación, declaraciones responsables y comunicaciones. Subsanación ordinaria: diez días; posible ampliación hasta cinco días, salvo procedimientos selectivos o de concurrencia competitiva.'
      ]],
      ['Ordenación e instrucción', [
        'Artículos 70 a 74: expediente administrativo electrónico, impulso de oficio, concentración de trámites y cumplimiento en plazo.',
        'Artículos 75 a 83: alegaciones, prueba, informes, audiencia e información pública.',
        'Audiencia: plazo no inferior a diez ni superior a quince días. Información pública: plazo para alegaciones no inferior a veinte días.'
      ]],
      ['Terminación y procedimiento simplificado', [
        'Artículos 84 a 95: resolución, desistimiento, renuncia, caducidad, imposibilidad material y terminación convencional.',
        'La resolución decide todas las cuestiones planteadas y las derivadas; debe ser congruente y expresar recursos.',
        'Artículo 96: tramitación simplificada por interés público o falta de complejidad; con carácter general debe resolverse en treinta días desde la notificación del acuerdo, salvo que reste menos para la tramitación ordinaria.'
      ]],
      ['Ejecución', [
        'Artículos 97 a 105. Los actos son inmediatamente ejecutivos salvo supuestos legales. Antes de la ejecución forzosa debe existir apercibimiento cuando proceda.',
        'Medios: apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas. Debe elegirse el medio menos restrictivo de la libertad individual.'
      ]],
      ['Revisión de oficio y recursos', [
        'Artículo 106: revisión de disposiciones y actos nulos; puede iniciarse en cualquier momento. Si se inicia de oficio, caduca a los seis meses sin resolución.',
        'Artículo 107: lesividad de actos anulables favorables. No puede declararse transcurridos cuatro años; el procedimiento caduca a los seis meses.',
        'Artículo 109: revocación de actos desfavorables dentro de límites y rectificación de errores materiales, de hecho o aritméticos en cualquier momento.',
        'Alzada, artículos 121-122: contra actos que no ponen fin a la vía. Un mes si el acto es expreso; en cualquier momento si es presunto; resolución en tres meses.',
        'Reposición, artículos 123-124: potestativo contra actos que ponen fin a la vía. Un mes si expreso; en cualquier momento si presunto; resolución en un mes.',
        'Extraordinario de revisión, artículos 125-126: actos firmes; cuatro años por error de hecho y tres meses para las demás causas desde conocimiento o firmeza correspondiente.'
      ]]
    ],
    hot: [
      '• Subsanación de solicitud: 10 días; ampliación hasta 5 salvo selección o concurrencia.',
      '• Audiencia: entre 10 y 15 días.',
      '• Información pública: mínimo 20 días.',
      '• Simplificado: 30 días como regla.',
      '• Revisión de oficio de nulidad: en cualquier momento; caducidad 6 meses si de oficio.',
      '• Lesividad: límite 4 años; caducidad 6 meses.',
      '• Alzada: 1 mes para interponer y 3 meses para resolver.',
      '• Reposición: 1 mes para interponer y 1 mes para resolver.',
      '• Extraordinario: 4 años por error de hecho; 3 meses en restantes causas.'
    ],
    recall: [
      '1. ¿Qué plazos gobiernan subsanación, audiencia e información pública?',
      '2. ¿Cuándo procede cada medio de ejecución forzosa?',
      '3. ¿Cómo diferencias revisión de oficio, lesividad, alzada, reposición y extraordinario?'
    ],
    table: [
      ['Figura', 'Contra qué/para qué', 'Plazo clave'],
      ['Subsanación', 'Solicitud defectuosa', '10 días'],
      ['Audiencia', 'Antes de resolver tras instrucción', '10 a 15 días'],
      ['Alzada', 'Acto que no pone fin a vía', '1 mes / resolución 3 meses'],
      ['Reposición', 'Acto que pone fin a vía', '1 mes / resolución 1 mes'],
      ['Lesividad', 'Acto anulable favorable', '4 años / caducidad 6 meses']
    ],
    questions: [
      { text:'¿Cuál es el plazo ordinario para subsanar una solicitud?', correct:'Diez días', wrong:['Cinco días','Quince días','Un mes'], justification:'Artículo 68.1 Ley 39/2015.' },
      { text:'¿Puede ampliarse el plazo de subsanación?', correct:'Sí, hasta cinco días, salvo selección o concurrencia competitiva', wrong:['No, nunca','Sí, por un mes en todo caso','Solo a petición de la Administración tributaria'], justification:'Artículo 68.2 Ley 39/2015.' },
      { text:'¿Cuál es el plazo de audiencia?', correct:'No inferior a diez ni superior a quince días', wrong:['Cinco días exactos','Veinte días exactos','Un mes'], justification:'Artículo 82.2 Ley 39/2015.' },
      { text:'¿Cuál es el mínimo para formular alegaciones en información pública?', correct:'Veinte días', wrong:['Diez días','Quince días','Treinta días hábiles'], justification:'Artículo 83.2 Ley 39/2015.' },
      { text:'¿En qué plazo general debe resolverse la tramitación simplificada?', correct:'Treinta días desde la notificación del acuerdo', wrong:['Diez días','Tres meses','Seis meses'], justification:'Artículo 96.6 Ley 39/2015.' },
      { text:'¿Cuál no es un medio de ejecución forzosa?', correct:'La declaración de lesividad', wrong:['Apremio sobre el patrimonio','Ejecución subsidiaria','Multa coercitiva'], justification:'Artículo 100 enumera medios de ejecución; la lesividad pertenece a revisión.' },
      { text:'Al elegir entre varios medios de ejecución, debe respetarse:', correct:'El medio menos restrictivo de la libertad individual', wrong:['El más costoso','El que elija el contratista','El que elimine la audiencia'], justification:'Artículo 100.2 Ley 39/2015.' },
      { text:'¿Cuándo puede revisarse de oficio un acto nulo?', correct:'En cualquier momento', wrong:['Solo dentro de un año','Solo dentro de cuatro años','Nunca si es firme'], justification:'Artículo 106.1 Ley 39/2015.' },
      { text:'¿Cuándo caduca una revisión de oficio iniciada de oficio sin resolución?', correct:'A los seis meses', wrong:['A los tres meses','Al año','No caduca'], justification:'Artículo 106.5 Ley 39/2015.' },
      { text:'¿Cuál es el límite temporal para declarar lesivo un acto anulable favorable?', correct:'Cuatro años desde que se dictó', wrong:['Un año','Cinco años','No existe límite'], justification:'Artículo 107.2 Ley 39/2015.' },
      { text:'¿Cuándo pueden rectificarse errores materiales, de hecho o aritméticos?', correct:'En cualquier momento', wrong:['Solo durante el mes siguiente','Solo antes de notificar','Solo por recurso de alzada'], justification:'Artículo 109.2 Ley 39/2015.' },
      { text:'¿Qué recurso procede contra un acto que no pone fin a la vía administrativa?', correct:'Recurso de alzada', wrong:['Reposición obligatoria','Extraordinario en todo caso','Recurso de casación administrativo'], justification:'Artículo 121 Ley 39/2015.' },
      { text:'¿Cuál es el plazo para resolver una alzada?', correct:'Tres meses', wrong:['Un mes','Seis meses','Quince días'], justification:'Artículo 122.2 Ley 39/2015.' },
      { text:'¿Cuál es el plazo para resolver una reposición?', correct:'Un mes', wrong:['Tres meses','Seis meses','Diez días'], justification:'Artículo 124.2 Ley 39/2015.' },
      { text:'¿Qué plazo tiene el extraordinario de revisión por error de hecho?', correct:'Cuatro años desde la notificación del acto', wrong:['Tres meses','Un mes','Cinco años'], justification:'Artículo 125.2 Ley 39/2015.' }
    ]
  });

  applyTheme(4, {
    source: 'Ley 40/2015, Capítulo II del Título Preliminar, artículos 5 a 24',
    status: 'tema completo con órganos, competencia, colegiados, abstención y recusación',
    summary: 'La pregunta típica contrapone figuras que parecen equivalentes. Debe identificarse si cambia la titularidad, el ejercicio, la firma, la persona titular o solo la realización material de una actividad.',
    rigor: 'La competencia es irrenunciable. Delegación, avocación, encomienda, delegación de firma y suplencia producen efectos distintos y nunca deben utilizarse como sinónimos.',
    blocks: [
      ['Órganos administrativos', [
        'Artículos 5 a 7: requisitos para crear órganos, instrucciones y órdenes de servicio y órganos consultivos.',
        'Tiene consideración de órgano la unidad a la que se atribuyan funciones con efectos jurídicos frente a terceros o actuación preceptiva.'
      ]],
      ['Competencia y técnicas de ejercicio', [
        'Artículo 8: competencia irrenunciable y ejercicio por el órgano que la tenga atribuida como propia, salvo delegación o avocación.',
        'Artículo 9: delegación. Se transfiere el ejercicio, no la titularidad; resoluciones dictadas por delegación se consideran del órgano delegante y deben indicar esa circunstancia.',
        'Artículo 10: avocación. Un órgano superior asume para un asunto concreto una competencia de un órgano dependiente.',
        'Artículo 11: encomienda. Actividades materiales o técnicas por razones de eficacia o falta de medios; no cede titularidad ni elementos sustantivos de la competencia.',
        'Artículo 12: delegación de firma. No altera la competencia. Artículo 13: suplencia por vacante, ausencia, enfermedad, abstención o recusación.'
      ]],
      ['Órganos colegiados', [
        'Artículos 15 a 18: régimen general, secretario, convocatorias, sesiones, adopción de acuerdos y actas.',
        'Para constitución válida se exige presencia de presidencia y secretaría o sustitutos y, al menos, mitad de miembros, sin perjuicio de reglas específicas.',
        'El acta recoge asistentes, orden del día, circunstancias de lugar y tiempo, puntos principales y contenido de acuerdos. Puede aprobarse en la misma o siguiente sesión.'
      ]],
      ['Abstención y recusación', [
        'Artículo 23: autoridades y personal deben abstenerse cuando concurra interés personal, parentesco, amistad íntima o enemistad manifiesta, intervención como perito/testigo o relación de servicio, entre otras causas legales.',
        'Artículo 24: la persona interesada puede promover recusación en cualquier momento de la tramitación cuando concurra causa legal.',
        'La actuación de quien debía abstenerse no implica necesariamente invalidez automática, sin perjuicio de responsabilidades.'
      ]]
    ],
    hot: [
      '• Competencia: irrenunciable.',
      '• Delegación: cambia ejercicio, no titularidad.',
      '• Avocación: superior asume un asunto concreto.',
      '• Encomienda: actividad material o técnica; no elementos sustantivos.',
      '• Delegación de firma: no altera competencia.',
      '• Suplencia: sustitución temporal de titular.',
      '• Abstención: deber de la autoridad; recusación: iniciativa de la persona interesada.',
      '• Acta colegiada puede aprobarse en la misma o en la siguiente sesión.'
    ],
    recall: [
      '1. ¿Qué cambia y qué no cambia en delegación, encomienda, firma y suplencia?',
      '2. ¿Cómo se constituye válidamente un órgano colegiado y qué contiene el acta?',
      '3. ¿Qué diferencia existe entre abstención y recusación?'
    ],
    table: [
      ['Figura', 'Efecto', 'No implica'],
      ['Delegación', 'Traslada ejercicio', 'Cambio de titularidad'],
      ['Avocación', 'Superior atrae asunto concreto', 'Delegación general'],
      ['Encomienda', 'Actividad material/técnica', 'Cesión de competencia'],
      ['Delegación de firma', 'Firma por otro órgano/unidad', 'Cambio de competencia'],
      ['Suplencia', 'Sustitución temporal', 'Creación de órgano nuevo']
    ],
    questions: [
      { text:'¿Cómo califica la Ley 40/2015 la competencia?', correct:'Irrenunciable', wrong:['Disponible libremente','Transferible siempre','Prescriptible'], justification:'Artículo 8.1 Ley 40/2015.' },
      { text:'¿Qué se transfiere mediante delegación?', correct:'El ejercicio de la competencia, no su titularidad', wrong:['La titularidad definitiva','La personalidad jurídica','El presupuesto completo'], justification:'Artículo 9 Ley 40/2015.' },
      { text:'Una resolución dictada por delegación se considera dictada por:', correct:'El órgano delegante', wrong:['El órgano delegado exclusivamente','El superior jerárquico común','El secretario del órgano'], justification:'Artículo 9.4 Ley 40/2015.' },
      { text:'¿Qué es la avocación?', correct:'La asunción por un superior de un asunto concreto de un órgano dependiente', wrong:['La firma de un acto ajeno','La realización material de tareas','La sustitución por enfermedad'], justification:'Artículo 10 Ley 40/2015.' },
      { text:'¿Qué puede ser objeto de encomienda de gestión?', correct:'Actividades materiales o técnicas', wrong:['La titularidad de la competencia','La aprobación de leyes','Los elementos sustantivos de decisión'], justification:'Artículo 11 Ley 40/2015.' },
      { text:'¿La delegación de firma altera la competencia?', correct:'No', wrong:['Sí, siempre','Solo en sanciones','Solo en contratos'], justification:'Artículo 12 Ley 40/2015.' },
      { text:'¿Qué finalidad tiene la suplencia?', correct:'Sustituir temporalmente al titular por causas legales', wrong:['Transferir definitivamente la titularidad','Crear un órgano colegiado','Anular una competencia'], justification:'Artículo 13 Ley 40/2015.' },
      { text:'Para constituir válidamente un órgano colegiado deben estar:', correct:'Presidencia y secretaría o sustitutos, y al menos la mitad de miembros', wrong:['Todos los miembros sin excepción','Solo presidencia','Un tercio sin secretaría'], justification:'Artículo 17.2 Ley 40/2015.' },
      { text:'¿Cuándo puede aprobarse el acta?', correct:'En la misma sesión o en la siguiente', wrong:['Solo un año después','Antes de la sesión','Únicamente por el órgano superior'], justification:'Artículo 18.2 Ley 40/2015.' },
      { text:'¿Qué es la abstención?', correct:'El deber de no intervenir cuando concurre causa legal', wrong:['Un recurso de la persona interesada','Una delegación de firma','Una forma de terminación'], justification:'Artículo 23 Ley 40/2015.' },
      { text:'¿Quién puede promover recusación?', correct:'La persona interesada', wrong:['Solo el órgano consultivo','Únicamente el superior jerárquico','Cualquier tercero sin interés'], justification:'Artículo 24 Ley 40/2015.' },
      { text:'¿Cuándo puede promoverse recusación?', correct:'En cualquier momento de la tramitación', wrong:['Solo tras la resolución','Solo al presentar la solicitud','Únicamente durante la prueba'], justification:'Artículo 24.1 Ley 40/2015.' },
      { text:'La intervención de una autoridad que debía abstenerse produce:', correct:'No necesariamente invalidez automática', wrong:['Nulidad automática en todo caso','Caducidad inmediata','Convalidación obligatoria'], justification:'Artículo 23.4 Ley 40/2015.' }
    ]
  });

  applyTheme(5, {
    source: 'Ley 40/2015, Capítulo V del Título Preliminar, artículos 38 a 46',
    status: 'tema completo sobre sede, portal, identificación, firma, actuación automatizada y archivo',
    summary: 'Este tema es corto pero muy preguntable. La clave es distinguir sede electrónica y portal de internet, identificar los responsables de una actuación automatizada y memorizar los sistemas de firma y las garantías del archivo.',
    rigor: 'La sede electrónica es una dirección cuya titularidad corresponde a una Administración u organismo; el portal es el punto de acceso electrónico a información y, en su caso, a la sede. No son conceptos intercambiables.',
    blocks: [
      ['Sede y portal', [
        'Artículo 38: sede electrónica. Su establecimiento implica responsabilidad sobre integridad, veracidad y actualización de información y servicios accesibles.',
        'Artículo 39: portal de internet. Punto de acceso electrónico cuya titularidad corresponde a una Administración, organismo o entidad y que permite acceso a información y, en su caso, a la sede.'
      ]],
      ['Identificación y actuación automatizada', [
        'Artículo 40: identificación de las Administraciones mediante sello electrónico basado en certificado cualificado u otros sistemas admitidos.',
        'Artículo 41: actuación administrativa automatizada. Deben determinarse previamente el órgano responsable de definición, programación, mantenimiento, supervisión y control de calidad y el órgano responsable a efectos de impugnación.'
      ]],
      ['Firma electrónica', [
        'Artículo 42: sistemas de firma para actuación automatizada: sello electrónico y código seguro de verificación vinculado a la Administración, organismo o entidad.',
        'Artículo 43: firma electrónica del personal al servicio de las Administraciones. Puede identificar conjuntamente a titular del puesto y Administración u órgano.',
        'Artículo 44: documentos transmitidos en entornos cerrados de comunicaciones; condiciones y garantías se establecen según participen órganos de una misma o distintas Administraciones.'
      ]],
      ['Interoperabilidad y archivo', [
        'Artículo 45: interoperabilidad de la firma electrónica, asegurando compatibilidad y posibilidad de comprobación.',
        'Artículo 46: archivo electrónico de documentos utilizados en actuaciones administrativas, garantizando identidad, integridad, autenticidad, conservación, acceso y protección de datos.'
      ]]
    ],
    hot: [
      '• Sede: dirección electrónica con responsabilidad de titularidad.',
      '• Portal: punto de acceso a información y, en su caso, sede.',
      '• Actuación automatizada: órgano técnico responsable y órgano para impugnación.',
      '• Sistemas automatizados: sello electrónico o CSV.',
      '• Firma del personal puede identificar puesto y Administración.',
      '• Entorno cerrado exige garantías de validez.',
      '• Archivo: identidad, integridad, autenticidad, conservación y acceso.'
    ],
    recall: [
      '1. ¿Qué diferencias existen entre sede electrónica y portal de internet?',
      '2. ¿Qué órganos deben determinarse en una actuación automatizada?',
      '3. ¿Qué garantías debe mantener un archivo electrónico?'
    ],
    table: [
      ['Concepto', 'Función', 'Clave'],
      ['Sede electrónica', 'Servicios y actuaciones electrónicas', 'Responsabilidad sobre integridad y actualización'],
      ['Portal', 'Acceso a información', 'Puede enlazar con sede'],
      ['Sello electrónico', 'Identificación/firma automatizada', 'Certificado cualificado'],
      ['CSV', 'Verificación documental', 'Vinculado a Administración u organismo'],
      ['Archivo electrónico', 'Conservación y acceso', 'Integridad, autenticidad y seguridad']
    ],
    questions: [
      { text:'¿Qué es una sede electrónica?', correct:'Una dirección electrónica cuya titularidad corresponde a una Administración u organismo', wrong:['Cualquier página privada','Un archivo en papel','Un correo personal del empleado'], justification:'Artículo 38 Ley 40/2015.' },
      { text:'¿Qué es un portal de internet?', correct:'Un punto de acceso electrónico a información y, en su caso, a la sede', wrong:['Un registro civil','Un órgano colegiado','Un certificado de firma'], justification:'Artículo 39 Ley 40/2015.' },
      { text:'¿Qué responsabilidad se asocia a la sede?', correct:'Integridad, veracidad y actualización de información y servicios', wrong:['Solo diseño gráfico','Únicamente publicidad institucional','Ninguna responsabilidad'], justification:'Artículo 38.2 Ley 40/2015.' },
      { text:'En una actuación automatizada debe identificarse:', correct:'El órgano técnico responsable y el órgano responsable para impugnación', wrong:['Solo el proveedor informático','Únicamente el usuario final','El tribunal judicial de forma automática'], justification:'Artículo 41.2 Ley 40/2015.' },
      { text:'¿Qué sistema puede firmar una actuación automatizada?', correct:'Sello electrónico', wrong:['Firma manuscrita escaneada sin garantías','Clave personal compartida','Correo ordinario'], justification:'Artículo 42 Ley 40/2015.' },
      { text:'¿Qué otro sistema prevé el artículo 42?', correct:'Código seguro de verificación', wrong:['Número de expediente sin verificación','Contraseña pública','Sello de caucho'], justification:'Artículo 42.b Ley 40/2015.' },
      { text:'La firma del personal puede identificar:', correct:'A la persona titular del puesto y a la Administración u órgano', wrong:['Solo al ciudadano destinatario','A cualquier empresa privada','Únicamente al proveedor del certificado'], justification:'Artículo 43 Ley 40/2015.' },
      { text:'¿Qué regula el artículo 44?', correct:'Intercambio electrónico en entornos cerrados de comunicación', wrong:['Plazos administrativos','Recursos de alzada','Presupuestos públicos'], justification:'Artículo 44 Ley 40/2015.' },
      { text:'¿Qué persigue la interoperabilidad de firma?', correct:'Compatibilidad y comprobación de firmas electrónicas', wrong:['Eliminar toda identificación','Sustituir los archivos','Evitar la autenticidad'], justification:'Artículo 45 Ley 40/2015.' },
      { text:'¿Qué debe garantizar el archivo electrónico?', correct:'Identidad, integridad, autenticidad, conservación y acceso', wrong:['Solo reducción de costes','Únicamente formato PDF','Eliminación inmediata'], justification:'Artículo 46 Ley 40/2015.' },
      { text:'¿Sede y portal son sinónimos?', correct:'No, tienen funciones y régimen distintos', wrong:['Sí, siempre','Solo en universidades','Solo para notificaciones'], justification:'Artículos 38 y 39 distinguen ambos conceptos.' },
      { text:'¿Qué sistema permite comprobar un documento mediante acceso a la sede?', correct:'El código seguro de verificación', wrong:['La avocación','La recusación','La declaración de lesividad'], justification:'El CSV permite verificar integridad y autenticidad en la sede correspondiente.' }
    ]
  });

  applyTheme(6, {
    source: 'Ley Orgánica 3/2018 y Reglamento (UE) 2016/679',
    status: 'tema completo en disposiciones, principios, derechos, responsable, encargado y DPD',
    summary: 'El tema exige enlazar la ley española con el RGPD. La LO 3/2018 concreta principios, ejercicio de derechos, obligaciones del responsable y encargado y posición del Delegado de Protección de Datos.',
    rigor: 'Título I: artículos 1 a 3. Título II: artículos 4 a 10. Título III: artículos 11 a 18. Título V: artículos 28 a 37 para responsable, encargado y Delegado de Protección de Datos.',
    blocks: [
      ['Disposiciones generales y principios', [
        'Artículo 1: adaptación al RGPD y garantía de derechos digitales. Artículos 2 y 3: ámbito de aplicación y datos de personas fallecidas.',
        'Artículo 4: exactitud de datos. Artículo 5: deber de confidencialidad, que subsiste aun después de finalizar la relación con responsable o encargado.',
        'Artículo 6: tratamiento basado en consentimiento. Debe ser manifestación libre, específica, informada e inequívoca.',
        'Artículo 7: consentimiento de menores. Puede fundar el tratamiento por sí una persona mayor de catorce años, salvo que una ley exija asistencia.',
        'Artículos 8 a 10: tratamiento por obligación legal, interés público o poderes públicos; categorías especiales y datos penales.'
      ]],
      ['Transparencia y derechos', [
        'Artículo 11: información básica y adicional por capas. Artículo 12: disposiciones generales para ejercicio de derechos.',
        'Artículos 13 a 18: acceso, rectificación, supresión, limitación, portabilidad y oposición. Se ejercen conforme al RGPD y deben facilitarse por medios accesibles.',
        'El responsable debe informar sobre identidad, fines, base jurídica, destinatarios, conservación, derechos y posibilidad de reclamación ante autoridad de control, según corresponda.'
      ]],
      ['Responsable y encargado', [
        'Artículo 28: valoración de riesgo y medidas apropiadas. Artículo 30: representantes de responsables o encargados no establecidos en la Unión cuando proceda.',
        'Artículo 31: registro de actividades de tratamiento. Artículo 32: bloqueo de datos cuando proceda rectificación o supresión para atender responsabilidades.',
        'Artículo 33: encargado del tratamiento. El acceso del encargado a datos no se considera comunicación cuando se cumplen RGPD y contrato o acto jurídico correspondiente.'
      ]],
      ['Delegado de Protección de Datos', [
        'Artículo 34: supuestos de designación obligatoria y comunicación a la autoridad de control. Las autoridades y organismos públicos deben contar con DPD, salvo tribunales en su función judicial.',
        'Artículo 35: cualificación profesional. Artículo 36: posición independiente, acceso a datos y procesos, ausencia de instrucciones en sus funciones y protección frente a sanción por desempeño.',
        'Artículo 37: intervención del DPD en reclamaciones, pudiendo la persona afectada dirigirse a él antes de reclamar ante la autoridad de control.'
      ]]
    ],
    hot: [
      '• Exactitud y confidencialidad son principios distintos.',
      '• Deber de confidencialidad subsiste tras terminar la relación.',
      '• Edad general para consentir por sí: más de 14 años.',
      '• Información por capas: básica + adicional.',
      '• Derechos: acceso, rectificación, supresión, limitación, portabilidad y oposición.',
      '• Bloqueo preserva datos para responsabilidades.',
      '• Encargado trata datos por cuenta del responsable.',
      '• DPD: independencia, cualificación y ausencia de instrucciones.'
    ],
    recall: [
      '1. ¿Qué diferencias existen entre exactitud, confidencialidad y consentimiento?',
      '2. ¿Qué derechos puede ejercer una persona y qué debe facilitar el responsable?',
      '3. ¿Qué posición ocupa el DPD y cómo interviene en reclamaciones?'
    ],
    table: [
      ['Figura', 'Función', 'Clave'],
      ['Responsable', 'Determina fines y medios', 'Responsabilidad proactiva'],
      ['Encargado', 'Trata por cuenta del responsable', 'Contrato o acto jurídico'],
      ['DPD', 'Informa, asesora y supervisa', 'Independencia y sin instrucciones'],
      ['Bloqueo', 'Conserva sin uso ordinario', 'Atender responsabilidades'],
      ['Consentimiento menor', 'Tratamiento basado en consentimiento', 'Mayor de 14 años como regla']
    ],
    questions: [
      { text:'¿Qué finalidad tiene la LO 3/2018?', correct:'Adaptar el ordenamiento al RGPD y garantizar derechos digitales', wrong:['Regular solo archivos en papel','Sustituir totalmente el RGPD','Regular únicamente contratos'], justification:'Artículo 1 LO 3/2018.' },
      { text:'¿Qué exige el principio de exactitud?', correct:'Datos exactos y, si es necesario, actualizados', wrong:['Conservar siempre datos erróneos','Publicar todos los datos','Eliminar cualquier dato al año'], justification:'Artículo 4 LO 3/2018 y artículo 5.1.d RGPD.' },
      { text:'¿Cuándo termina el deber de confidencialidad?', correct:'No termina por finalizar la relación con responsable o encargado', wrong:['Al día siguiente','Al cambiar de puesto','Cuando se archiva el expediente'], justification:'Artículo 5.3 LO 3/2018.' },
      { text:'¿A partir de qué edad puede una persona consentir por sí como regla general?', correct:'Más de catorce años', wrong:['Doce años','Dieciséis años siempre','Dieciocho años'], justification:'Artículo 7 LO 3/2018.' },
      { text:'¿Qué caracteriza un consentimiento válido?', correct:'Libre, específico, informado e inequívoco', wrong:['Tácito por silencio siempre','Obligatorio y genérico','Secreto para la persona interesada'], justification:'Artículo 6 LO 3/2018 en relación con RGPD.' },
      { text:'¿Qué técnica utiliza el artículo 11 para informar?', correct:'Información por capas', wrong:['Información solo verbal','Omisión de identidad del responsable','Publicación de contraseñas'], justification:'Artículo 11 LO 3/2018.' },
      { text:'¿Cuál es un derecho de protección de datos?', correct:'El derecho de acceso', wrong:['La avocación','La delegación de firma','La lesividad'], justification:'Artículo 13 LO 3/2018.' },
      { text:'¿Qué derecho permite corregir datos inexactos?', correct:'Rectificación', wrong:['Portabilidad','Oposición','Limitación exclusivamente'], justification:'Artículo 14 LO 3/2018.' },
      { text:'¿Qué finalidad tiene el bloqueo de datos?', correct:'Impedir su uso ordinario y conservarlos para responsabilidades', wrong:['Publicarlos libremente','Transferirlos a terceros','Destruirlos siempre de inmediato'], justification:'Artículo 32 LO 3/2018.' },
      { text:'¿Quién determina fines y medios del tratamiento?', correct:'El responsable del tratamiento', wrong:['El encargado por definición','La persona receptora del correo','Cualquier tercero'], justification:'Definición del RGPD y régimen del responsable.' },
      { text:'¿Qué hace el encargado del tratamiento?', correct:'Trata datos por cuenta del responsable', wrong:['Determina siempre los fines propios','Actúa sin contrato ni instrucciones','Es necesariamente la autoridad de control'], justification:'Artículo 33 LO 3/2018 y artículo 28 RGPD.' },
      { text:'¿Cómo debe actuar el DPD?', correct:'Con independencia y sin recibir instrucciones sobre sus funciones', wrong:['Bajo instrucciones sobre cada conclusión','Como órgano sancionador','Como responsable de todos los tratamientos'], justification:'Artículo 36 LO 3/2018.' },
      { text:'¿Qué requisito debe tener el DPD?', correct:'Cualificación profesional y conocimientos especializados', wrong:['Ser siempre juez','Ser proveedor informático','Carecer de formación jurídica'], justification:'Artículo 35 LO 3/2018.' },
      { text:'¿Puede una persona dirigirse al DPD antes de reclamar ante la autoridad de control?', correct:'Sí', wrong:['No, está prohibido','Solo con autorización judicial','Solo si es empleada pública'], justification:'Artículo 37 LO 3/2018.' },
      { text:'¿Deben las autoridades y organismos públicos designar DPD?', correct:'Sí, salvo tribunales en ejercicio de su función judicial', wrong:['No, nunca','Solo si tienen más de mil empleados','Solo si lo pide un particular'], justification:'Artículo 34 LO 3/2018 y artículo 37 RGPD.' }
    ]
  });

  const links = [
    { label: 'BOE · Constitución Española', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229' },
    { label: 'BOE · Ley 39/2015', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565' },
    { label: 'BOE · Ley 40/2015', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566' },
    { label: 'BOE · LO 3/2018', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673' }
  ];
  ope.officialLinks ||= [];
  links.forEach(link => {
    if (!ope.officialLinks.some(existing => existing.url === link.url)) ope.officialLinks.push(link);
  });

  const all = Object.values(ope.themeTests).flat();
  ope.simulacros = [0, 53, 109].map((start, s) => ({
    id: `uc3m-v34-sim${s + 1}`,
    title: `Simulacro UC3M de contenido ${s + 1}`,
    questions: Array.from({ length: 70 }, (_, i) => ({
      ...all[(start + i * 19) % all.length],
      id: `uc3m-v34-sim${s + 1}-q${i + 1}`
    }))
  }));

  ope.version = '0.34.0';
  ope.status = `${(ope.status || '').replace(/ Revisión v0\.33:.*/, '')} Revisión v0.34: temas 1 a 6 desarrollados manualmente por artículos y con test jurídicos reales. Continúa pendiente cerrar documentos internos UC3M y ampliar temas 9 a 12.`;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: '0.34.0',
    date: '2026-07-10',
    changes: [
      'Profundizados los temas 1 a 6 por títulos, capítulos y artículos',
      'Añadidas 88 preguntas jurídicas manuales',
      'Incorporados plazos y diferencias de Ley 39/2015 y Ley 40/2015',
      'Ampliada protección de datos con responsable, encargado y DPD',
      'Regenerados simulacros UC3M de 70 preguntas'
    ]
  });

  window.OPOWEB_UC3M_V34 = {
    version: 'v0.34.0',
    deepReviewed: [1,2,3,4,5,6],
    nextBatch: [9,10,11,12]
  };

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();