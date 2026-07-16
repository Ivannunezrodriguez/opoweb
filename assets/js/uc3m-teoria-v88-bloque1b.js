(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 14);
  if (!ope || !theme) return;

  const REVIEW_DATE = '2026-07-16';
  const sources = [
    { label: 'Ley Orgánica 2/2023, de 22 de marzo, del Sistema Universitario', reference: 'BOE-A-2023-7500', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-7500' },
    { label: 'Real Decreto 1791/2010, Estatuto del Estudiante Universitario', reference: 'BOE-A-2010-20147', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-20147' },
    { label: 'Real Decreto Legislativo 5/2015, texto refundido del Estatuto Básico del Empleado Público', reference: 'BOE-A-2015-11719', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719' },
    { label: 'Ley 14/2011, de la Ciencia, la Tecnología y la Innovación', reference: 'BOE-A-2011-9617', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-9617' }
  ];

  const sections = [
    {
      heading: 'Resumen orientado al aprobado',
      paragraphs: [
        'El segundo bloque de la LOSU reúne cuatro materias diferenciadas: derechos, deberes y participación del estudiantado; régimen económico y financiero de las universidades públicas; personal docente e investigador; y personal técnico, de gestión y de administración y servicios. El método más seguro es estudiar cada materia con su propio mapa de conceptos, porque los órganos, principios y procedimientos cambian. En test son frecuentes las mezclas entre Consejo de Gobierno, Consejo Social, Rector, Gerencia, ANECA y órganos de selección.',
        'La idea transversal es que la Universidad es una organización pública autónoma sometida a derechos, transparencia, planificación, sostenibilidad financiera y principios de empleo público. La autonomía no elimina el control presupuestario ni permite seleccionar personal sin publicidad. Los derechos del estudiantado no se limitan al aula; alcanzan información previa, evaluación, revisión, participación, accesibilidad, convivencia, orientación y protección frente a discriminación. El personal universitario se divide en PDI y PTGAS, con regímenes distintos pero principios comunes de profesionalidad, igualdad, mérito, capacidad y servicio público.'
      ]
    },
    {
      heading: 'Estudiantado: acceso, becas y derechos',
      paragraphs: [
        'Las Administraciones y universidades deben garantizar igualdad de oportunidades y condiciones en el acceso a los estudios universitarios, sin discriminación. El Gobierno establece las normas básicas de acceso y admisión mediante real decreto, con los informes previstos en la LOSU. Las universidades aplican los procedimientos y criterios publicados para sus títulos. Los límites de plazas y criterios de admisión deben ser objetivos, transparentes y conocidos con antelación.',
        'Las becas y ayudas al estudio se configuran como derecho subjetivo cuando se cumplen los requisitos establecidos. El Estado mantiene el sistema general con cargo a sus presupuestos, sin perjuicio de competencias autonómicas y ayudas universitarias. El criterio socioeconómico tiene carácter prioritario y fundamental, sin excluir requisitos académicos proporcionados. Las universidades públicas pueden establecer exenciones totales o parciales de precios públicos con cargo a sus presupuestos dentro de la normativa.',
        'Antes de matricularse, el estudiantado tiene derecho a conocer planes docentes, lengua de impartición, modalidad presencial, virtual o híbrida, sistemas de evaluación, horarios y requisitos. La información debe ser suficiente para tomar decisiones. Cambios posteriores relevantes requieren justificación y respeto al marco académico. La Universidad no debe trasladar al estudiante consecuencias negativas por falta de publicidad o contradicciones internas.',
        'El derecho a una evaluación objetiva implica criterios públicos, aplicación imparcial, acceso a calificaciones, revisión y mecanismos de reclamación. No significa derecho a aprobar ni a elegir el criterio después de realizar la prueba. La revisión debe permitir conocer cómo se aplicaron los criterios y corregir errores. La normativa universitaria concreta plazos, órganos y procedimientos.',
        'La accesibilidad universal se extiende a edificios, entornos virtuales, servicios, procedimientos, información, materiales, docencia y evaluación. Las universidades deben realizar ajustes razonables y evitar barreras. Igualdad no significa aplicar siempre una solución idéntica, sino garantizar participación efectiva sin reducir injustificadamente resultados de aprendizaje esenciales.',
        'El estudiantado tiene derecho a orientación académica y profesional, tutoría, participación en actividades, reconocimiento de autoría, protección de datos, libertad de expresión y asociación, servicios universitarios y convivencia segura. También tiene deberes: estudiar, participar responsablemente, respetar normas, bienes y personas, actuar con honestidad académica, evitar fraude y contribuir a la convivencia.',
        'El Estatuto del Estudiante Universitario complementa la LOSU en derechos de Grado, Máster, Doctorado, formación continua, movilidad, participación y representación. Debe utilizarse como apoyo, pero ante conflicto prevalece la normativa posterior y de mayor rango. La normativa propia de UC3M concreta evaluación, permanencia, matrícula y convivencia.'
      ]
    },
    {
      heading: 'Participación y representación estudiantil',
      paragraphs: [
        'Las universidades deben garantizar participación activa, libre y significativa del estudiantado en diseño, implantación y evaluación de políticas universitarias. La participación no se agota en encuestas. Incluye representación en órganos de gobierno, consejos de estudiantes, comisiones académicas, procesos de calidad y elaboración de planes de estudio.',
        'Los representantes ejercen derechos de información, asistencia y participación en los términos de la normativa. Deben recibir apoyo y formación para desempeñar sus funciones y no sufrir perjuicio académico injustificado. A cambio, deben actuar con responsabilidad, confidencialidad cuando proceda y rendición de cuentas a sus representados.',
        'La Universidad debe fomentar asociacionismo y participación democrática. La libertad de asociación no permite utilizar recursos públicos para fines contrarios a la ley ni excluir a otros miembros. Las decisiones de órganos colegiados se adoptan conforme a composición, convocatoria, quórum y reglas de votación.'
      ]
    },
    {
      heading: 'Régimen económico y financiero',
      paragraphs: [
        'Las universidades públicas disponen de autonomía económica y financiera dentro de la legislación. Su financiación debe ser suficiente, estable y previsible. La LOSU establece un objetivo de gasto público universitario equivalente, como mínimo, al uno por ciento del producto interior bruto, a alcanzar de acuerdo con planificación y disponibilidad presupuestaria. Este objetivo no significa que cada universidad reciba automáticamente un uno por ciento del PIB.',
        'La financiación puede incorporar una parte estructural básica, financiación por necesidades específicas y financiación por objetivos. Debe tener en cuenta funciones, dimensión, singularidades, costes, calidad, cohesión territorial, investigación e igualdad. Los modelos deben ser transparentes y permitir planificación plurianual. La financiación por objetivos no puede utilizarse para desconocer necesidades estructurales.',
        'El presupuesto universitario es público, único, equilibrado y comprende todos los ingresos y gastos del ejercicio. Debe elaborarse conforme a clasificación y normas aplicables, incluir relación de puestos u otra documentación exigida y acompañarse de información suficiente. El equilibrio no excluye modificaciones presupuestarias durante el ejercicio, pero toda modificación requiere competencia, crédito y procedimiento.',
        'Los ingresos proceden de transferencias públicas, precios públicos, rendimientos patrimoniales, contratos y convenios, investigación, donaciones, operaciones autorizadas y otros recursos legales. Los precios públicos de estudios oficiales se fijan dentro del marco legal. Los títulos propios y servicios pueden tener precios aprobados por el órgano competente. Toda recaudación debe registrarse y aplicarse al presupuesto.',
        'El presupuesto debe reservar al menos el porcentaje legal para programas propios de investigación. La aplicación exacta debe comprobarse en la redacción vigente de la LOSU y en el presupuesto anual. No debe confundirse el objetivo general de financiación pública del sistema con una partida individual de cada universidad.',
        'La ejecución del gasto exige crédito adecuado y suficiente, competencia, autorización, compromiso, reconocimiento de obligación y ordenación del pago conforme a las bases de ejecución. Los contratos, subvenciones y convenios siguen su normativa específica. Un órgano académico no puede comprometer gasto sin atribución o delegación.',
        'El Consejo Social participa en aprobación del presupuesto y supervisión económica. El Consejo de Gobierno propone o aprueba actuaciones internas según Estatutos y la Gerencia prepara y ejecuta la gestión bajo la dirección correspondiente. El Rector representa a la Universidad y ejerce competencias presupuestarias y contractuales propias o delegadas. La distribución exacta se completa con Estatutos, presupuesto y delegaciones UC3M.',
        'La Universidad debe rendir cuentas, someterse a control interno y externo y publicar información económica. Las cuentas anuales reflejan situación patrimonial, resultado económico y ejecución presupuestaria. Un remanente negativo exige medidas de corrección. Transparencia presupuestaria no permite publicar datos personales o secretos protegidos sin ponderación.',
        'La planificación plurianual relaciona objetivos académicos y científicos con recursos. La sostenibilidad financiera exige valorar costes recurrentes antes de crear estructuras, títulos o compromisos de personal. Un ingreso finalista debe utilizarse conforme a su finalidad y condiciones; no puede destinarse libremente a cualquier necesidad.'
      ]
    },
    {
      heading: 'Personal docente e investigador: estructura y principios',
      paragraphs: [
        'El personal docente e investigador de universidades públicas se compone del profesorado de cuerpos docentes universitarios y del profesorado laboral. Los cuerpos docentes son Catedráticos y Profesores Titulares de Universidad, con plena capacidad docente e investigadora. El profesorado funcionario debe ser mayoritario en equivalencias a tiempo completo, conforme a las reglas de cómputo de la LOSU.',
        'El profesorado con contrato laboral temporal no puede superar, con carácter general, el ocho por ciento de efectivos de la plantilla de PDI. No se computan para ese límite el profesorado asociado de Ciencias de la Salud y el profesorado ayudante doctor. El porcentaje no significa que toda modalidad temporal sea ilícita; obliga a controlar estructura global y exclusiones legales.',
        'Todos los puestos se adscriben a ámbitos de conocimiento establecidos reglamentariamente. La selección debe respetar igualdad, mérito, capacidad, publicidad y concurrencia, además de objetividad, imparcialidad, neutralidad, transparencia y cualificación de comisiones. Pueden adoptarse medidas de acción positiva para corregir infrarrepresentación, dentro de la ley.',
        'La movilidad temporal es un derecho y puede producirse entre universidades, organismos de investigación y entidades autorizadas. La persona mantiene su adscripción en los términos aplicables y los periodos pueden computar para antigüedad y carrera. La movilidad necesita financiación, autorización y compatibilidad con las obligaciones de origen.',
        'Las universidades garantizan formación docente inicial y continua y planes de desarrollo profesional. La actividad del PDI comprende docencia, investigación, transferencia, innovación y, en su caso, gestión. Los planes de dedicación deben respetar desarrollo profesional, conciliación e igualdad.',
        'El acceso a cuerpos docentes exige título de Doctor y acreditación previa de ANECA. La acreditación no adjudica una plaza: habilita para concurrir. El concurso posterior lo convoca la universidad. Debe diferenciarse acreditación nacional, concurso de acceso y nombramiento.',
        'El profesorado laboral se contrata mediante modalidades legales. Entre ellas figuran ayudante doctor, asociado, sustituto, emérito, permanente laboral, visitante y distinguido, cada una con finalidad, duración y dedicación específicas. No deben intercambiarse reglas entre figuras. Por ejemplo, el profesorado sustituto cubre una ausencia o puesto temporal y su contrato dura lo que la causa justificativa.',
        'El profesorado ayudante doctor requiere título de Doctor, tiene contrato temporal a tiempo completo y finalidad de desarrollo docente e investigador. La ley fija duración y evaluación orientativa. El profesorado permanente laboral tiene contrato fijo e indefinido y requiere acreditación. El asociado aporta experiencia profesional externa y mantiene actividad principal fuera del ámbito académico, salvo especialidades sanitarias.',
        'La retribución del PDI funcionario se determina por normativa estatal y puede incluir complementos evaluados. El PDI laboral se rige por LOSU, legislación laboral, convenios y normativa autonómica. Los complementos individuales deben asignarse mediante procedimiento transparente y evaluación cuando proceda.'
      ]
    },
    {
      heading: 'Personal técnico, de gestión y de administración y servicios',
      paragraphs: [
        'El PTGAS desarrolla funciones técnicas, económicas, administrativas, de apoyo, asesoramiento y gestión necesarias para docencia, investigación, transferencia y gobierno universitario. Puede ser funcionario o laboral. La denominación actual sustituye al concepto tradicional de personal de administración y servicios, pero los Estatutos y normas anteriores pueden mantener referencias que deben interpretarse conforme al régimen vigente.',
        'Las universidades establecen su organización, relaciones de puestos, escalas y sistemas de provisión dentro de legislación estatal y autonómica. El PTGAS funcionario se rige por la LOSU, TREBEP, normativa autonómica, Estatutos y acuerdos. El laboral se rige además por legislación laboral y convenio colectivo.',
        'La selección se realiza mediante convocatorias públicas y respeta igualdad, mérito, capacidad, publicidad, transparencia y libre concurrencia. Las convocatorias deben publicarse en los diarios oficiales exigidos y contener bases, requisitos, sistema, pruebas, tribunal y recursos. La Universidad no puede sustituir una convocatoria pública por una selección discrecional salvo figuras excepcionales previstas legalmente.',
        'Oferta de empleo público, convocatoria y proceso selectivo son fases diferentes. La oferta autoriza necesidades de personal; la convocatoria abre el procedimiento concreto; las pruebas y valoración determinan aspirantes; el nombramiento o contrato perfecciona la relación. La existencia de una plaza presupuestada no atribuye derecho a ocuparla.',
        'La provisión de puestos entre personal ya vinculado se distingue del ingreso. Concurso y libre designación son sistemas de provisión, con requisitos y límites. La movilidad puede ser interna o interuniversitaria. La carrera profesional reconoce progresión, formación, desempeño y promoción conforme a normativa y negociación.',
        'El PTGAS tiene derechos individuales y colectivos, formación, carrera, negociación, seguridad y salud, conciliación y participación. Debe actuar con objetividad, integridad, neutralidad, diligencia, confidencialidad, servicio a la ciudadanía y respeto al código de conducta. El acceso a información por razón del puesto no autoriza uso personal ni difusión.',
        'La Universidad debe dimensionar plantillas y prevenir temporalidad abusiva. Las necesidades estructurales deben cubrirse mediante instrumentos estables y procesos públicos. Los nombramientos interinos o contratos temporales exigen causa y duración legal. La urgencia administrativa no elimina los principios de selección.',
        'La Gerencia dirige la administración y servicios en los términos estatutarios y de delegación. Las unidades académicas formulan necesidades, pero no siempre tienen competencia para nombrar, contratar o modificar puestos. En un supuesto debe localizarse el órgano competente en Estatutos, relación de puestos y resoluciones de delegación.'
      ]
    },
    {
      heading: 'Diferencias esenciales entre PDI y PTGAS',
      paragraphs: [
        'El PDI tiene como núcleo docencia e investigación; el PTGAS presta apoyo técnico, administrativo y de gestión. Ambos pueden ser funcionarios o laborales, pero sus cuerpos, escalas, modalidades de contratación, acreditación y carrera son diferentes. ANECA interviene en acreditación de profesorado, no en la selección ordinaria de auxiliares administrativos.',
        'La libertad de cátedra pertenece al ámbito académico del PDI. El PTGAS actúa conforme a legalidad, jerarquía, competencia y servicio público. La participación en órganos universitarios puede corresponder a ambos colectivos según Estatutos. Ninguno está exento de incompatibilidades, prevención de riesgos, protección de datos o responsabilidad disciplinaria.',
        'En preguntas de examen, debe identificarse primero el colectivo y después la fase: acreditación, selección, provisión, contratación, carrera, retribución o movilidad. Muchos distractores trasladan una regla de PDI a PTGAS o una regla de personal funcionario al laboral.'
      ]
    },
    {
      heading: 'Síntesis de repaso rápido',
      paragraphs: [
        'Estudiantado: igualdad, información previa, evaluación objetiva, revisión, accesibilidad, participación y deberes de convivencia e integridad. Becas: derecho subjetivo si se cumplen requisitos; prioridad socioeconómica. Economía: autonomía financiera, presupuesto público, único y equilibrado, rendición de cuentas y control. PDI: cuerpos docentes y laborales; funcionariado mayoritario y temporalidad laboral general limitada al ocho por ciento con exclusiones. Cuerpos: Catedráticos y Titulares. PTGAS: funcionario o laboral; acceso público por igualdad, mérito y capacidad; selección distinta de provisión.'
      ]
    },
    {
      heading: 'Opo-Test: puntos calientes',
      paragraphs: [
        'Becas como derecho subjetivo; información antes de matrícula; evaluación objetiva y revisión; accesibilidad universal; participación significativa; objetivo de financiación pública; presupuesto público, único y equilibrado; Consejo Social y control económico; PDI funcionario mayoritario; límite general del ocho por ciento al profesorado laboral temporal y exclusiones; cuerpos docentes; acreditación ANECA frente a concurso; figuras laborales; PTGAS funcionario o laboral; oferta, convocatoria, selección, nombramiento, provisión y carrera.'
      ]
    },
    {
      heading: 'Tres preguntas de retención activa',
      paragraphs: [
        '¿Qué derechos debe conocer el estudiante antes de matricularse y cómo se protege la objetividad de la evaluación? ¿Qué órganos intervienen en elaboración, aprobación, ejecución y control del presupuesto universitario? ¿Qué diferencias existen entre acreditación del PDI, selección de nuevo ingreso del PTGAS y provisión de puestos ya existentes?'
      ]
    },
    {
      heading: 'Estrategia de examen',
      paragraphs: [
        'Cuando una opción convierta una ayuda en discrecional pese a cumplirse requisitos, revise la configuración del derecho subjetivo. En presupuesto, descarte respuestas que permitan gastos sin crédito o competencia. En personal, identifique colectivo y vínculo antes de aplicar una regla. Recuerde que acreditación no equivale a plaza, oferta de empleo no equivale a convocatoria y protección de hoja o confidencialidad funcional no sustituyen controles jurídicos. Los porcentajes deben memorizarse con sus exclusiones y base de cálculo.'
      ]
    }
  ];

  const tree = `LOSU II · Comunidad universitaria y recursos\n├─ Estudiantado\n│  ├─ Acceso y admisión\n│  ├─ Becas y precios públicos\n│  ├─ Información previa y matrícula\n│  ├─ Evaluación, revisión y reclamación\n│  ├─ Accesibilidad y ajustes\n│  └─ Participación, representación y deberes\n├─ Régimen económico-financiero\n│  ├─ Autonomía y suficiencia\n│  ├─ Financiación estructural y por objetivos\n│  ├─ Presupuesto público, único y equilibrado\n│  ├─ Ingresos y gastos\n│  ├─ Ejecución, control y cuentas\n│  └─ Planificación y sostenibilidad\n├─ Personal docente e investigador\n│  ├─ Cuerpos docentes y personal laboral\n│  ├─ Mayoría funcionarial y temporalidad\n│  ├─ Acreditación y concursos\n│  ├─ Movilidad, formación y dedicación\n│  ├─ Figuras laborales\n│  └─ Retribuciones y evaluación\n└─ PTGAS\n   ├─ Funcionario y laboral\n   ├─ Escalas, puestos y organización\n   ├─ Oferta, selección y nombramiento\n   ├─ Provisión y movilidad\n   ├─ Carrera, formación y negociación\n   └─ Código de conducta y responsabilidad`;

  const reviewTable = [
    ['Acceso', 'Igualdad de oportunidades y no discriminación', 'Art. 31 LOSU'],
    ['Becas', 'Derecho subjetivo si se cumplen requisitos', 'Art. 32'],
    ['Criterio prioritario', 'Situación socioeconómica', 'Art. 32'],
    ['Información previa', 'Plan docente, lengua, modalidad y evaluación', 'Art. 33'],
    ['Evaluación', 'Objetividad, publicidad, revisión y reclamación', 'Art. 33'],
    ['Accesibilidad', 'Entornos físicos, virtuales, servicios y evaluación', 'Art. 33'],
    ['Participación', 'Activa, libre y significativa', 'Arts. 34–37'],
    ['Financiación', 'Suficiente, estable y previsible', 'Título IX'],
    ['Presupuesto', 'Público, único, equilibrado y completo', 'LOSU'],
    ['Control', 'Rendición de cuentas y control interno y externo', 'LOSU'],
    ['PDI', 'Cuerpos docentes y profesorado laboral', 'Art. 64'],
    ['Temporalidad PDI', 'Máximo general 8 %, con exclusiones legales', 'Art. 64'],
    ['Cuerpos docentes', 'Catedráticos y Titulares de Universidad', 'Art. 68'],
    ['Acreditación', 'ANECA antes del acceso a cuerpos docentes', 'Art. 69'],
    ['PTGAS', 'Personal funcionario o laboral', 'Arts. 89–94'],
    ['Selección PTGAS', 'Igualdad, mérito, capacidad, publicidad y transparencia', 'LOSU y TREBEP'],
    ['Provisión', 'Cobertura de puestos por personal ya vinculado', 'TREBEP y normativa UC3M'],
    ['Gerencia', 'Dirección administrativa en términos estatutarios', 'Estatutos UC3M']
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
    completedThemes: [13, 14],
    pendingThemes: [15, 16, 17, 18, 19, 20],
    autonomousThemes: 2,
    totalSpecificThemes: 8,
    reviewedAt: REVIEW_DATE,
    sourcePolicy: 'Fuentes oficiales BOE, UC3M y Comunidad de Madrid.'
  };

  window.OPOWEB_UC3M_THEORY_V88 = {
    status: 'EN_PROGRESO',
    block: 1,
    completedThemes: [13, 14],
    pendingThemes: [15, 16, 17, 18, 19, 20],
    reviewedAt: REVIEW_DATE
  };
})();
