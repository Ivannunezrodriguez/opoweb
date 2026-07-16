(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 13);
  if (!ope || !theme) return;

  const REVIEW_DATE = '2026-07-16';
  const sources = [
    { label: 'Ley Orgánica 2/2023, de 22 de marzo, del Sistema Universitario', reference: 'BOE-A-2023-7500', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500' },
    { label: 'Constitución Española, artículo 27.10', reference: 'BOE-A-1978-31229', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229' },
    { label: 'Real Decreto 640/2021, creación y reconocimiento de universidades y centros', reference: 'BOE-A-2021-12613', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-12613' },
    { label: 'Real Decreto 822/2021, organización de las enseñanzas universitarias y calidad', reference: 'BOE-A-2021-15781', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781' }
  ];

  const sections = [
    {
      heading: 'Resumen orientado al aprobado',
      paragraphs: [
        'La Ley Orgánica 2/2023, del Sistema Universitario, regula el sistema universitario español, sus funciones, la autonomía de las universidades, la creación y reconocimiento de universidades, la organización de las enseñanzas, la investigación, la transferencia, la cooperación con la sociedad y la internacionalización. Este primer bloque debe estudiarse como una cadena lógica: qué instituciones forman el sistema, qué servicio público prestan, qué comprende la autonomía, cómo nace y comienza a funcionar una universidad, cómo se estructuran las enseñanzas oficiales y propias y qué obligaciones acompañan a la investigación y a la proyección social e internacional.',
        'El punto central es que la autonomía universitaria no significa independencia frente al ordenamiento. La Universidad puede elaborar Estatutos, organizar estructuras, aprobar planes de estudio, seleccionar personal y administrar recursos dentro de la Constitución y las leyes. Esa autonomía se acompaña de transparencia, rendición de cuentas, evaluación y garantía de calidad. En test suelen aparecer como distractores fórmulas absolutas: inmunidad frente a controles, potestad legislativa, libertad para crear títulos sin verificación o ausencia de responsabilidad presupuestaria. Todas son incorrectas.'
      ]
    },
    {
      heading: 'Rigor normativo y sistema universitario',
      paragraphs: [
        'El objeto de la LOSU es regular el sistema universitario y los mecanismos de coordinación, cooperación y colaboración entre las Administraciones Públicas con competencias universitarias. El sistema comprende universidades públicas y privadas y los centros y estructuras que sirven al desarrollo de sus funciones. Una universidad desarrolla las funciones centrales de docencia, investigación y transferencia e intercambio del conocimiento, ofrece títulos oficiales de Grado, Máster Universitario y Doctorado en la mayoría de ramas y puede realizar otras actividades formativas.',
        'La educación superior universitaria es un servicio público que se presta mediante docencia, investigación y transferencia. La ley añade funciones culturales, sociales, económicas y territoriales: generar y difundir conocimiento, preparar para actividades profesionales, promover innovación, contribuir al bienestar, proteger valores democráticos, combatir desigualdades y colaborar con el entorno. Las universidades públicas prestan directamente el servicio público; las privadas participan de acuerdo con la legislación y sus normas de organización.',
        'Los derechos humanos y fundamentales, la memoria democrática, la igualdad y equidad, la sostenibilidad, la lucha contra el cambio climático y los Objetivos de Desarrollo Sostenible orientan las funciones universitarias. No son una simple declaración ornamental: inciden en planes, investigación, transferencia, formación, participación y evaluación institucional. La Universidad debe respetar libertad académica, pluralismo, accesibilidad y no discriminación.'
      ]
    },
    {
      heading: 'Autonomía universitaria',
      paragraphs: [
        'La autonomía universitaria se fundamenta en el artículo 27.10 de la Constitución y se desarrolla en la LOSU. Comprende la elaboración de Estatutos en las universidades públicas y de normas de organización y funcionamiento en las privadas; la elección y designación de órganos de gobierno y representación; la creación de estructuras; la elaboración y aprobación de planes de estudio; la expedición de títulos; la selección, formación y promoción del personal; la admisión, régimen de permanencia y verificación de conocimientos; la elaboración y gestión del presupuesto; la administración de bienes; el establecimiento de relaciones con otras entidades y cualquier otra competencia necesaria para sus fines.',
        'La autonomía incluye dimensión académica, organizativa, de personal, económica y financiera. No autoriza a incumplir normas básicas, legislación autonómica o reglas presupuestarias. La Universidad debe actuar con transparencia y rendir cuentas a la sociedad. Las Administraciones competentes deben garantizar suficiencia y estabilidad financiera a las universidades públicas, pero pueden ejercer sus competencias de planificación, financiación, evaluación y control.',
        'La libertad de cátedra protege al profesorado en docencia, investigación y estudio dentro del marco constitucional y de la organización académica. No equivale a poder ignorar planes de estudio, sistemas de evaluación aprobados, obligaciones docentes, derechos del estudiantado o reglas éticas. La autonomía institucional y la libertad académica deben coexistir con calidad, responsabilidad y respeto a derechos.'
      ]
    },
    {
      heading: 'Creación, reconocimiento y comienzo de actividades',
      paragraphs: [
        'Las universidades públicas se crean y las privadas se reconocen por ley de la Asamblea Legislativa de la Comunidad Autónoma donde vayan a ubicarse, previo informe preceptivo de la Conferencia General de Política Universitaria. Las universidades públicas de especiales características y ámbito estatal se crean por ley de las Cortes Generales, a propuesta del Gobierno, de acuerdo con la Comunidad Autónoma afectada y con el informe preceptivo correspondiente.',
        'El reconocimiento de una universidad privada tiene carácter constitutivo. Crear o reconocer una universidad no implica que pueda comenzar inmediatamente sus actividades. El órgano competente de la Comunidad Autónoma debe autorizar el inicio tras comprobar el cumplimiento de requisitos. El Gobierno fija por real decreto las condiciones básicas de creación, reconocimiento y autorización, actualmente desarrolladas por el Real Decreto 640/2021, actualizado en 2025.',
        'Entre los requisitos se encuentran una oferta académica suficiente, medios personales y materiales, sistemas internos de garantía de calidad, investigación, infraestructuras, viabilidad económica y medidas de igualdad, accesibilidad y prevención de discriminación, violencia y acoso. El incumplimiento puede provocar requerimientos, suspensión de actividades o revocación conforme al procedimiento aplicable. En examen debe diferenciarse la ley de creación o reconocimiento de la autorización administrativa de inicio.',
        'Las denominaciones Universidad y centro universitario están protegidas. No pueden utilizarse de manera que induzcan a confusión entidades no reconocidas. Los centros pueden ser propios o adscritos. La adscripción se formaliza mediante convenio y autorización y no convierte al centro en universidad independiente. Las universidades pueden crear centros en el extranjero o participar en alianzas dentro de los requisitos nacionales e internacionales.'
      ]
    },
    {
      heading: 'Calidad y agencias de evaluación',
      paragraphs: [
        'La calidad universitaria se garantiza mediante evaluación, certificación y acreditación. La Agencia Nacional de Evaluación de la Calidad y Acreditación y las agencias autonómicas inscritas en el registro europeo EQAR ejercen funciones dentro de sus competencias. La evaluación puede afectar a títulos, centros, instituciones, profesorado y programas. Debe atender criterios públicos, imparciales, transparentes y comparables.',
        'La acreditación institucional de centros permite evaluar globalmente el funcionamiento de un centro y su sistema interno de garantía de calidad. No elimina la obligación de seguimiento ni la responsabilidad universitaria. El Real Decreto 640/2021 regula requisitos institucionales y el Real Decreto 822/2021 organiza la verificación, seguimiento, modificación y renovación de la acreditación de títulos oficiales.',
        'En test se debe distinguir agencia de calidad, Consejo de Universidades, Conferencia General de Política Universitaria, Comunidad Autónoma y universidad. La agencia evalúa; el Consejo de Universidades interviene en verificación y acreditación según el procedimiento; la Comunidad Autónoma autoriza implantación y ejerce competencias territoriales; la universidad diseña y propone el título.'
      ]
    },
    {
      heading: 'Enseñanzas universitarias',
      paragraphs: [
        'La docencia universitaria puede ser presencial, virtual o híbrida, siendo presencial la modalidad preferente según la LOSU. La modalidad debe constar en la memoria del título y comunicarse con claridad. La Universidad garantiza calidad, accesibilidad, participación estudiantil y adecuación de recursos. No puede modificarse de hecho una modalidad sin respetar el procedimiento académico y de calidad.',
        'Las enseñanzas oficiales se estructuran en Grado, Máster Universitario y Doctorado. Conducen a títulos oficiales con validez en todo el territorio nacional. La Universidad también puede impartir títulos propios y formación permanente. Debe evitarse confundir un Máster Universitario oficial con un título propio denominado máster de formación permanente. Solo los títulos oficiales siguen el procedimiento de verificación, autorización, inscripción y acreditación establecido para el sistema oficial.',
        'La Universidad diseña los planes de estudio, que deben verificarse conforme al procedimiento de calidad. La Comunidad Autónoma autoriza su implantación y el Consejo de Ministros establece el carácter oficial del título. La inscripción en el Registro de Universidades, Centros y Títulos tiene efecto constitutivo respecto de la creación del título oficial. La supresión o modificación también exige procedimiento.',
        'Los planes se expresan en créditos ECTS y deben incluir resultados de aprendizaje, actividades formativas y sistemas de evaluación. El estudiantado participa en elaboración y actualización. La formación permanente puede incorporar microcredenciales, micromódulos y otros programas breves, pero su denominación y certificación no pueden inducir a confusión con títulos oficiales.',
        'El Rector expide los títulos oficiales en nombre del Rey. El reconocimiento y transferencia de créditos permiten incorporar aprendizajes previos conforme a la normativa. Convalidación, homologación, equivalencia y reconocimiento son figuras diferentes: no deben usarse como sinónimos. El Gobierno establece el marco general y las universidades resuelven en los términos aplicables.'
      ]
    },
    {
      heading: 'Investigación, transferencia e intercambio del conocimiento',
      paragraphs: [
        'La investigación es función esencial y, para el personal docente e investigador, derecho y deber. Las universidades promueven investigación básica y aplicada, interdisciplinaridad, innovación, transferencia y colaboración con administraciones, empresas y sociedad. Deben asegurar libertad científica, integridad, ética, igualdad, seguridad, protección de datos y uso responsable de recursos.',
        'La ciencia abierta impulsa acceso a resultados financiados públicamente. El personal debe depositar en repositorios institucionales o temáticos de acceso abierto una copia de la versión final aceptada y los datos asociados, simultáneamente a la publicación, respetando derechos, confidencialidad, protección de datos, seguridad y propiedad intelectual. Depositar no significa necesariamente publicar sin límites cualquier dato sensible.',
        'La transferencia comprende difusión, valorización y aplicación del conocimiento. Puede realizarse mediante contratos, convenios, licencias, creación de empresas basadas en conocimiento y colaboración institucional. Deben gestionarse conflictos de interés, titularidad de resultados, incompatibilidades y retorno social. La Universidad no pierde su función pública por colaborar con entidades privadas.',
        'Las universidades fomentan formación investigadora, doctorado, movilidad, infraestructuras científicas y reconocimiento del personal técnico. Deben evitar precariedad, discriminación y malas prácticas. La integridad científica exige honestidad en diseño, obtención, análisis y comunicación de resultados, así como prevención de plagio, fabricación o manipulación de datos.'
      ]
    },
    {
      heading: 'Cooperación con la sociedad y cohesión territorial',
      paragraphs: [
        'La Universidad coopera con administraciones, entidades sociales, tejido productivo y ciudadanía. La extensión universitaria, cultura, divulgación, aprendizaje a lo largo de la vida, voluntariado y ciencia ciudadana son instrumentos de relación social. La transferencia no se reduce a patentes: incluye conocimiento social, humanístico, jurídico, artístico y organizativo.',
        'Las universidades contribuyen al desarrollo sostenible, cohesión social y territorial, igualdad y revitalización de entornos. Deben prestar atención a territorios rurales, reto demográfico y acceso equitativo. La colaboración puede articularse mediante convenios, contratos y estructuras mixtas, siempre con competencia, procedimiento, transparencia y control económico.',
        'La cooperación universitaria al desarrollo se integra en las funciones institucionales y debe alinearse con derechos humanos y sostenibilidad. La Universidad también puede participar en redes, consorcios y alianzas. Cada instrumento tiene régimen jurídico propio y no debe utilizarse un convenio para eludir la legislación contractual.'
      ]
    },
    {
      heading: 'Internacionalización',
      paragraphs: [
        'La internacionalización abarca movilidad de estudiantes y personal, programas conjuntos, alianzas europeas, cooperación académica, investigación internacional, atracción de talento y enseñanza en diferentes lenguas. Debe promover inclusión y evitar segregación por motivos económicos. La movilidad exige reconocimiento académico, información previa, apoyo y protección de derechos.',
        'La estrategia internacional debe respetar calidad, transparencia y sostenibilidad. Puede incluir titulaciones conjuntas y dobles, cotutelas doctorales, campus internacionales y cooperación con instituciones extranjeras. La validez de títulos y reconocimiento de periodos de estudio se rige por normativa y convenios aplicables; no surge automáticamente por existir un acuerdo informal.',
        'Las universidades deben facilitar participación en el Espacio Europeo de Educación Superior y en el Espacio Europeo de Investigación. La internacionalización no autoriza a rebajar requisitos académicos ni a excluir a estudiantes con menos recursos. Las políticas lingüísticas deben comunicarse antes de matrícula y respetar la memoria del título.'
      ]
    },
    {
      heading: 'Síntesis de repaso rápido',
      paragraphs: [
        'Sistema universitario: universidades públicas y privadas, centros y estructuras. Funciones: docencia, investigación, transferencia y servicio a la sociedad. Autonomía: Estatutos, organización, planes, personal, admisión, presupuesto y relaciones, siempre dentro de la ley y con rendición de cuentas. Creación pública y reconocimiento privado: ley e informe preceptivo; inicio de actividad: autorización autonómica. Enseñanzas oficiales: Grado, Máster y Doctorado; títulos propios y formación permanente son distintos. Investigación: derecho y deber, ciencia abierta, integridad y transferencia. Internacionalización: movilidad y cooperación sin segregación económica.'
      ]
    },
    {
      heading: 'Opo-Test: puntos calientes',
      paragraphs: [
        'Artículo 27.10 de la Constitución; contenido y límites de la autonomía; Estatutos frente a normas de organización privadas; ley de creación o reconocimiento y autorización de inicio; informe preceptivo de la Conferencia General de Política Universitaria; ANECA y agencias EQAR; modalidad presencial preferente; Grado, Máster y Doctorado; RUCT y efecto constitutivo; Rector como expedidor en nombre del Rey; reconocimiento frente a homologación; investigación como derecho y deber; depósito abierto simultáneo; transferencia, cooperación e internacionalización inclusiva.'
      ]
    },
    {
      heading: 'Tres preguntas de retención activa',
      paragraphs: [
        '¿Qué materias comprende la autonomía universitaria y qué obligaciones la limitan? ¿Qué diferencia existe entre crear o reconocer una universidad y autorizar su inicio de actividades? ¿Qué fases convierten una propuesta de plan de estudios en un título universitario oficial inscrito en el RUCT?'
      ]
    },
    {
      heading: 'Estrategia de examen',
      paragraphs: [
        'Ante preguntas sobre autonomía, descarta respuestas que atribuyan inmunidad, potestad legislativa o ausencia de control. En creación de universidades, separa ley, informe preceptivo y autorización de inicio. En enseñanzas, identifica si se habla de título oficial, título propio o formación permanente. En investigación abierta, recuerda que el depósito debe convivir con confidencialidad, datos personales, seguridad y propiedad intelectual. Cuando aparezcan varios órganos, asigna a cada uno su función: universidad diseña, agencia evalúa, Comunidad Autónoma autoriza y el Estado reconoce el carácter oficial conforme al procedimiento.'
      ]
    }
  ];

  const tree = `LOSU I · Sistema universitario\n├─ Objeto y sistema\n│  ├─ Universidades públicas y privadas\n│  ├─ Centros y estructuras\n│  └─ Servicio público universitario\n├─ Funciones\n│  ├─ Docencia\n│  ├─ Investigación\n│  ├─ Transferencia e intercambio\n│  └─ Cooperación social y territorial\n├─ Autonomía universitaria\n│  ├─ Estatutos y organización\n│  ├─ Planes de estudio y títulos\n│  ├─ Personal y estudiantes\n│  ├─ Presupuesto y patrimonio\n│  └─ Transparencia y rendición de cuentas\n├─ Creación y reconocimiento\n│  ├─ Ley autonómica o estatal\n│  ├─ Informe preceptivo\n│  ├─ Requisitos básicos\n│  └─ Autorización de inicio\n├─ Enseñanzas\n│  ├─ Grado, Máster y Doctorado\n│  ├─ Títulos propios\n│  ├─ Verificación, autorización y RUCT\n│  └─ Formación permanente y microcredenciales\n├─ Investigación y transferencia\n│  ├─ Derecho y deber\n│  ├─ Ciencia abierta e integridad\n│  ├─ Repositorios y datos\n│  └─ Colaboración y valorización\n└─ Internacionalización\n   ├─ Movilidad y reconocimiento\n   ├─ Programas conjuntos\n   ├─ EEES y Espacio Europeo de Investigación\n   └─ Inclusión y no segregación económica`;

  const reviewTable = [
    ['Sistema universitario', 'Universidades públicas y privadas, centros y estructuras', 'Art. 1 LOSU'],
    ['Funciones', 'Docencia, investigación, transferencia y servicio social', 'Art. 2'],
    ['Autonomía', 'Académica, organizativa, personal, económica y financiera', 'Art. 3'],
    ['Límite de autonomía', 'Constitución, leyes, transparencia y rendición de cuentas', 'Art. 3'],
    ['Universidad pública autonómica', 'Ley de la Asamblea Legislativa', 'Art. 4'],
    ['Universidad estatal especial', 'Ley de Cortes Generales', 'Art. 4'],
    ['Inicio de actividades', 'Autorización del órgano autonómico competente', 'LOSU y RD 640/2021'],
    ['Calidad', 'ANECA y agencias autonómicas EQAR', 'Art. 5'],
    ['Modalidad preferente', 'Presencial, sin excluir virtual o híbrida', 'Art. 6'],
    ['Enseñanzas oficiales', 'Grado, Máster Universitario y Doctorado', 'Arts. 7–9'],
    ['RUCT', 'Inscripción con efecto constitutivo del título oficial', 'Art. 7'],
    ['Expedición', 'Rector en nombre del Rey', 'Art. 8'],
    ['Investigación', 'Derecho y deber del PDI', 'Art. 11'],
    ['Ciencia abierta', 'Depósito de versión final aceptada y datos asociados', 'Art. 12'],
    ['Transferencia', 'Aplicación y difusión social del conocimiento', 'LOSU'],
    ['Internacionalización', 'Movilidad, alianzas e inclusión', 'Título VI LOSU']
  ];

  const words = [
    ...sections.flatMap(section => [section.heading, ...(section.paragraphs || [])]),
    tree,
    ...reviewTable.flat()
  ].join(' ').trim().split(/\s+/).filter(Boolean).length;

  theme.sections = sections;
  theme.tree = tree;
  theme.reviewTable = reviewTable;
  theme.officialSources = sources;
  theme.theoryStatus = {
    autonomous: true,
    programmeLiteral: true,
    reviewedAt: REVIEW_DATE,
    words,
    sourcePolicy: 'BOE y normativa estatal oficial vigente; sin fuentes editoriales secundarias.'
  };
  theme.auditStatus = `${theme.auditStatus || 'banco real 30+'} · teoría autosuficiente v0.88`;

  ope.uc3mTheoryProgramme ||= {};
  ope.uc3mTheoryProgramme.v88 = {
    status: 'EN_PROGRESO',
    completedThemes: [13],
    pendingThemes: [14, 15, 16, 17, 18, 19, 20],
    reviewedAt: REVIEW_DATE,
    sourcePolicy: 'Fuentes oficiales BOE, UC3M y Comunidad de Madrid.'
  };
})();
