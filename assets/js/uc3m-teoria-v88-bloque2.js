(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 15);
  if (!ope || !theme) return;

  const REVIEW_DATE = '2026-07-16';
  const sources = [
    {
      label: 'Texto refundido de los Estatutos de la Universidad Carlos III de Madrid',
      reference: 'UC3M-ESTATUTOS-CONSOLIDADO',
      url: 'https://www.uc3m.es/conocenos/normativa/estatutos-uc3m'
    },
    {
      label: 'Decreto 1/2003, de 9 de enero, por el que se aprueban los Estatutos UC3M',
      reference: 'BOE-A-2003-17782',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2003-17782'
    },
    {
      label: 'Decreto 95/2009, de 12 de noviembre, de modificación de los Estatutos UC3M',
      reference: 'UC3M-DECRETO-95-2009',
      url: 'https://e-archivo.uc3m.es/entities/publication/9256b134-63f2-4062-a2a6-b07b7057904f'
    },
    {
      label: 'Resolución UC3M de 8 de mayo de 2026 que confirma la referencia estatutaria vigente',
      reference: 'BOE-A-2026-10800',
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10800'
    }
  ];

  const sections = [
    {
      heading: 'Resumen orientado al aprobado',
      paragraphs: [
        'El tema 15 no exige memorizar todos los Estatutos de la Universidad Carlos III de Madrid, sino cuatro bloques concretos: Defensor Universitario, servicios universitarios, régimen económico-financiero y reforma de los Estatutos. La preparación debe centrarse en artículos, órganos, mayorías, duración de mandatos, secuencias de aprobación y competencias. El banco de preguntas ya cubre estas literalidades; la teoría debe explicar cómo encajan y evitar confundirlas con la regulación general de la Ley Orgánica 2/2023.',
        'El texto oficial aplicable es el aprobado por Decreto 1/2003 y modificado por Decreto 95/2009. La propia UC3M publica un texto refundido y resoluciones oficiales de 2026 siguen citando ambos decretos como Estatutos vigentes. No debe suponerse que la LOSU de 2023 derogó automáticamente todos los preceptos estatutarios. Las normas estatutarias anteriores continúan aplicándose en cuanto no contradigan la legislación posterior y deben interpretarse conforme a la terminología y estructura vigentes.',
        'En examen, los errores más probables son atribuir al Consejo Social funciones del Consejo de Gobierno, confundir la mayoría de elección del Defensor con la de designación del Adjunto, invertir las fases del presupuesto, atribuir la contratación a la Gerencia en lugar del Rector o reducir la reforma estatutaria a una única votación. La estrategia correcta es memorizar cada procedimiento como una cadena de órgano, actuación, mayoría y resultado.'
      ]
    },
    {
      heading: 'Vigencia, estructura y terminología',
      paragraphs: [
        'Los Estatutos fueron aprobados por Decreto 1/2003, de 9 de enero, y modificados por Decreto 95/2009, de 12 de noviembre. La página oficial de normativa de la UC3M enlaza el decreto original, la modificación y un texto refundido. Además, convocatorias y convenios oficiales publicados en 2026 continúan identificando expresamente esos dos decretos como base estatutaria de la Universidad. Esta comprobación permite utilizar el texto refundido como material de estudio, sin presentarlo como una norma nueva independiente.',
        'El texto se organiza en un título preliminar, siete títulos, disposiciones adicionales, transitorias, derogatoria y final. El Defensor Universitario se regula en el capítulo IV del título III, artículos 127 a 132. Los servicios universitarios ocupan el título V, artículos 157 a 165. El régimen económico-financiero se encuentra en el título VI, artículos 166 a 177. La reforma estatutaria se regula en el título VII, artículos 178 a 180.',
        'Los Estatutos emplean la expresión personal de administración y servicios porque fueron redactados bajo la legislación universitaria anterior. La LOSU utiliza personal técnico, de gestión y de administración y servicios, PTGAS. Para estudiar literalmente un artículo debe conservarse la expresión estatutaria, pero su aplicación actual se interpreta de acuerdo con la LOSU. El cambio terminológico no permite alterar por cuenta propia composiciones, mayorías o competencias estatutarias.',
        'También aparecen referencias históricas a la Ley Orgánica de Universidades, a títulos de primer y segundo ciclo o a límites contractuales de una normativa anterior. Cuando el tema exige un precepto literal, se aprende la regla estatutaria; cuando se resuelve una situación actual, se integra con la LOSU, la legislación presupuestaria, contractual y de empleo público. Esta distinción evita presentar como vigente una regla material desplazada por una norma posterior de rango superior.'
      ]
    },
    {
      heading: 'Defensor Universitario: elección y cese',
      paragraphs: [
        'El Defensor Universitario es una figura de garantía de derechos dentro de la comunidad universitaria. El artículo 127 establece un procedimiento específico. El Rector propone un candidato después de oír a los representantes del estudiantado, del personal de administración y servicios y del profesorado. No lo nombra directamente. La elección corresponde al Claustro Universitario.',
        'Para resultar elegido, el candidato debe obtener los votos de la mitad más uno de los miembros del Claustro. La referencia se hace a los miembros del órgano, no solo a quienes estén presentes en una determinada votación. Por eso no debe sustituirse por mayoría simple. La propuesta rectoral incorpora audiencia previa a los sectores, pero la decisión final es claustral.',
        'El cese puede producirse a petición propia o por acuerdo del Claustro. Cuando responde a incumplimiento de obligaciones o actuaciones que causen lesión de derechos, el acuerdo requiere la misma mayoría exigida para la elección. No basta una decisión unilateral del Rector, del Consejo de Gobierno o de la Gerencia.',
        'La institución debe entenderse desde su función garantista: recibe y analiza actuaciones relacionadas con derechos de miembros de la comunidad y formula actuaciones conforme a su Reglamento. No es un órgano jurisdiccional, no sustituye los recursos administrativos ni anula actos por sí mismo. Su intervención tampoco suspende automáticamente plazos para recurrir.'
      ]
    },
    {
      heading: 'Mandato, Adjunto, memoria y medios del Defensor',
      paragraphs: [
        'El mandato del Defensor dura tres años y admite una sola reelección. La iniciativa de reelección corresponde al Rector o a un grupo de miembros del Claustro que represente al menos una quinta parte de sus integrantes. Deben distinguirse la duración del mandato, la posibilidad de una única reelección y quién puede iniciar la propuesta.',
        'El candidato propone una persona Adjunta de su confianza. El Claustro la designa en la misma sesión que al Defensor, por mayoría simple. Esta mayoría no coincide con la mitad más uno de todos los miembros exigida para elegir al Defensor. El Estatuto equipara, a efectos de complementos retributivos, al Defensor con Vicerrector y al Adjunto con Vicedecano.',
        'Al principio de cada curso académico, el Defensor presenta al Claustro una memoria de las actividades desarrolladas durante el curso anterior. Además, por iniciativa propia o de una quinta parte del Claustro, informa ante este órgano sobre asuntos que se consideren convenientes. La memoria no se presenta al Consejo Social ni se limita al final del mandato.',
        'El Rector debe proporcionar, de acuerdo con el Defensor, apoyo administrativo y medios económicos necesarios. Las autoridades académicas y servicios universitarios están obligados a prestarle apoyo. El Defensor se elige entre profesorado y personal de administración y servicios de la propia Universidad. Compatibiliza la función con sus tareas, que pueden reducirse hasta un máximo del cincuenta por ciento.',
        'El Reglamento de organización y funcionamiento se aprueba por el Consejo de Gobierno a propuesta del Rector, oído el Defensor. En sus actuaciones, el Defensor debe oír a los representantes del sector afectado cuando corresponda. Se constituye además un órgano de participación y asesoramiento integrado por dos estudiantes, dos miembros del personal de administración y servicios y dos miembros del personal docente e investigador.'
      ]
    },
    {
      heading: 'Servicios universitarios: finalidad y formas de gestión',
      paragraphs: [
        'El artículo 157 ordena a la Universidad organizar los servicios necesarios para apoyar la docencia, el estudio, la investigación y la colaboración con la sociedad, de acuerdo con sus disponibilidades presupuestarias. La función de los servicios es instrumental respecto de las actividades universitarias. No constituyen fines separados ni pueden crearse ignorando la disponibilidad de recursos.',
        'Los servicios pueden prestarse y gestionarse directamente por la Universidad o por otras personas o entidades mediante convenios o contratos aprobados por el Rector. La gestión indirecta no elimina responsabilidad, control de calidad, protección de datos ni cumplimiento de la legislación contractual. Un convenio solo procede cuando su objeto y naturaleza son realmente convencionales; no puede utilizarse para eludir una licitación.',
        'La creación y supresión de servicios, así como la aprobación de sus reglamentos de organización y funcionamiento, corresponde al Consejo de Gobierno a propuesta del Rector. El acuerdo de creación debe identificar la dependencia orgánica y los medios personales y materiales asignados. Esta exigencia impide crear formalmente un servicio sin determinar cómo se integra y con qué recursos opera.',
        'Los reglamentos deben establecer cauces para la participación de usuarios. En servicios prestados indirectamente puede constituirse un órgano de control de calidad con representación de usuarios y de distintos sectores de la comunidad universitaria. La participación no convierte a los usuarios en órgano gestor, pero permite evaluación y mejora del servicio.'
      ]
    },
    {
      heading: 'Dirección y servicios estatutariamente singularizados',
      paragraphs: [
        'En cada servicio puede existir una dirección responsable de gestión y funcionamiento. La persona debe reunir profesionalidad y experiencia y es nombrada por el Rector. Para atender adecuadamente a Facultades, Escuela y otros centros pueden constituirse unidades de gestión. La dirección del servicio no se confunde con la dependencia orgánica ni con el órgano que aprobó su creación.',
        'El texto refundido incorpora la Unidad de Igualdad. El Rector nombra a quien la dirige. Entre sus competencias figuran elaborar, implantar, seguir y evaluar planes de igualdad; informar y asesorar a órganos; elaborar memoria anual; y promover estudios y conocimiento del principio de igualdad. La regulación debe hoy interpretarse junto con la LOSU y la normativa vigente de igualdad y convivencia.',
        'La Oficina de Transferencia de Resultados de la Investigación aparece como servicio técnico-administrativo centralizado, sin personalidad distinta de la Universidad, destinado a gestionar actividad investigadora y fondos generados. Depende orgánicamente del Rector o Vicerrector en quien delegue y actúa con autonomía funcional bajo su dirección. Sus funciones incluyen identificar oferta científico-técnica, relacionarse con demandantes, gestionar transferencia y mantener información de investigación.',
        'Los Estatutos regulan también biblioteca, informática, residencia, medios de comunicación y otros servicios de asistencia. Cada uno se completa con su reglamento y con normativa posterior. Para el tema oficial, lo esencial es dominar el régimen común de los artículos 157 a 159 y reconocer que determinados servicios poseen reglas específicas adicionales.'
      ]
    },
    {
      heading: 'Autonomía económica, patrimonio e inventario',
      paragraphs: [
        'El artículo 166 declara que la Universidad goza de autonomía económica y financiera de acuerdo con las leyes. La cláusula final es esencial: la autonomía se ejerce dentro de la legislación universitaria, presupuestaria, patrimonial, contractual y de estabilidad aplicable. No existe inmunidad frente a control interno, Consejo Social, Comunidad de Madrid, Cámara de Cuentas u otros órganos competentes.',
        'El patrimonio está formado por bienes, derechos y acciones de titularidad universitaria y los que adquiera o le atribuya el ordenamiento. Se incorporan donaciones y material inventariable o bibliográfico adquirido con fondos de investigación, salvo que un convenio disponga su adscripción a otra entidad. Toda la comunidad universitaria tiene deber de conservación y uso correcto.',
        'La Universidad asume la titularidad de bienes de dominio público afectos a sus fines y de los destinados a ellos por otras Administraciones. El Consejo de Gobierno gestiona los bienes demaniales y dispone de inmuebles patrimoniales previa autorización del Consejo Social, conforme a su régimen. Gestión y disposición no son conceptos equivalentes.',
        'El Gerente elabora el inventario general y lo actualiza anualmente. Se deposita en la Secretaría General para consulta de interesados. El Secretario General inscribe en registros públicos los bienes y derechos de titularidad universitaria. Esta distribución entre Gerente y Secretario General es un punto clásico de test.'
      ]
    },
    {
      heading: 'Presupuesto, memoria económica y control',
      paragraphs: [
        'El presupuesto de la UC3M es anual, único, público y equilibrado e incluye todos los ingresos y gastos del año natural. Anual se refiere al ejercicio; único, a integración de la actividad; público, a transparencia; equilibrado, a correspondencia presupuestaria; y completo, a inclusión de ingresos y gastos. Los fondos de convenios o contratos se contabilizan separadamente, pero deben constar en el presupuesto.',
        'La secuencia del artículo 170 es precisa. El Gerente confecciona el anteproyecto atendiendo a las necesidades comunicadas por los órganos. El Rector lo presenta al Consejo de Gobierno. Aprobado por este, se somete al Consejo Social. No se debe invertir Consejo de Gobierno y Consejo Social ni atribuir al Gerente la aprobación definitiva.',
        'La memoria económica anual rinde cuentas de ejecución ante órganos competentes y comunidad universitaria. La elabora el Gerente bajo dirección del Rector; el Rector la somete al Consejo de Gobierno y, tras su aprobación, se presenta al Consejo Social para aprobación definitiva y se hace pública. Incluye liquidación definitiva del presupuesto, informe de situación patrimonial e informe de gestión de recursos.',
        'Los Estatutos distribuyen competencias sobre transferencias de crédito de acuerdo con su naturaleza e importe y remiten a normas de ejecución de la Comunidad de Madrid. Las reglas estatutarias deben interpretarse con límites contractuales y presupuestarios vigentes; no se memoriza como cantidad estable una referencia monetaria vinculada al contrato menor de obras sin comprobar la normativa actual.',
        'Los remanentes específicos pueden generar crédito en el ejercicio siguiente cuando proceden de centros, departamentos, doctorados, institutos o convenios específicos y existe financiación suficiente. La calificación específica responde a finalidad y origen; no todo saldo disponible puede utilizarse libremente.',
        'El control interno corresponde a la Gerencia, que puede emplear técnicas de intervención selectiva. Anualmente se realiza auditoría financiera externa por profesionales independientes. El auditor se nombra por un periodo no superior a cinco años y sus resultados se comunican al Consejo Social, Claustro y Consejo de Gobierno. Este último establece su difusión a la comunidad universitaria.'
      ]
    },
    {
      heading: 'Contratación universitaria',
      paragraphs: [
        'El artículo 175 establece que el Rector es el órgano de contratación de la Universidad y puede suscribir, en nombre y representación de esta, los contratos en los que intervenga. Esta regla estatutaria convive con resoluciones de delegación. Una delegación permite que otro órgano ejerza determinadas competencias, pero no transforma la titularidad originaria ni autoriza actuaciones fuera de sus límites.',
        'En los supuestos de contratación mediante concurso previstos en el texto estatutario se constituye una mesa cuyos miembros nombra el órgano de contratación conforme a la normativa, garantizando al menos un representante de departamentos, centros o servicios afectados. La terminología debe hoy leerse conforme a la Ley 9/2017: procedimiento y mesa se rigen por la legislación contractual vigente.',
        'En contrataciones indirectas de servicios que impliquen sucesión de empresa, la mesa debe oír a representantes de trabajadores de la Universidad antes de formular propuesta de adjudicación respecto de continuidad laboral. Este precepto no sustituye la normativa laboral ni atribuye a dichos representantes decisión sobre adjudicación.',
        'Es preceptivo el acuerdo del Consejo Social para contratos relativos a inversiones de duración superior a un año que comprometan fondos públicos de ejercicios futuros. Deben concurrir conjuntamente duración, naturaleza inversora y compromiso plurianual en los términos estatutarios. Para la gestión cotidiana se estudian además presupuesto anual, bases de ejecución y resoluciones de delegación.'
      ]
    },
    {
      heading: 'Reforma de los Estatutos',
      paragraphs: [
        'La iniciativa de reforma total o parcial corresponde al Consejo de Gobierno o al Claustro Universitario a propuesta de una quinta parte de sus miembros. Se presenta ante la Mesa del Claustro e incluye el texto articulado o, al menos, las materias y preceptos cuya reforma se pretende. No corresponde en exclusiva al Rector, Consejo Social o Comunidad de Madrid.',
        'La toma en consideración se debate en un Pleno del Claustro convocado en sesión extraordinaria y requiere mayoría absoluta de los claustrales presentes. Aprobada la toma en consideración, en la misma sesión se elige una comisión de estudio con representación proporcional de todos los sectores de la comunidad universitaria.',
        'El dictamen de la comisión sirve de base al debate del Pleno conforme a su reglamento. La aprobación final de la reforma exige mayoría absoluta de los miembros del Claustro, no solo de los presentes. Por tanto, existen dos mayorías absolutas con bases distintas: presentes para toma en consideración y miembros totales para aprobación final.',
        'Aprobada por el Claustro, la reforma se eleva a la Administración competente para aprobación y publicación. La Universidad no puede otorgar por sí sola eficacia normativa definitiva. Además, no pueden presentarse propuestas en los tres meses anteriores a la finalización del mandato del Claustro.',
        'El procedimiento debe memorizarse completo: iniciativa, presentación a Mesa, toma en consideración extraordinaria, comisión, dictamen, debate, aprobación final, elevación, aprobación y publicación. Un distractor puede describir correctamente una fase pero omitir las posteriores.'
      ]
    },
    {
      heading: 'Adaptación a la LOSU y lectura actual',
      paragraphs: [
        'La LOSU obliga a adaptar Estatutos universitarios, pero mientras no se publique una reforma integral, el texto existente se aplica en cuanto sea compatible con la legislación posterior. Las resoluciones oficiales UC3M de 2026 siguen citando Decreto 1/2003 y Decreto 95/2009. Esto confirma la referencia formal vigente, pero no convierte en materialmente aplicable cualquier expresión histórica que contradiga una norma superior posterior.',
        'Las referencias a PAS se entienden hoy en el marco del PTGAS; las figuras académicas, órganos nacionales y procedimientos presupuestarios se interpretan según LOSU y normativa vigente. En examen debe atenderse al enunciado: si pregunta qué dicen los Estatutos, se responde literalmente; si plantea una actuación actual, se integra la norma superior.',
        'No debe confundirse texto refundido con texto legal aprobado por un nuevo decreto. El refundido publicado por la UC3M es una herramienta oficial de consulta que integra modificación de 2009. La trazabilidad se conserva citando decreto original y modificador. Ante futuras reformas, OpoWeb deberá actualizar artículos, preguntas y resúmenes.'
      ]
    },
    {
      heading: 'Síntesis de repaso rápido',
      paragraphs: [
        'Defensor: propone Rector tras oír sectores; elige Claustro por mitad más uno de sus miembros; mandato de tres años; una reelección; Adjunto por mayoría simple; memoria al comienzo del curso. Servicios: Consejo de Gobierno crea, suprime y aprueba reglamentos a propuesta del Rector; dirección nombrada por Rector; participación de usuarios. Patrimonio: inventario del Gerente y registro del Secretario General. Presupuesto: anteproyecto del Gerente, presentación del Rector, aprobación del Consejo de Gobierno y sometimiento al Consejo Social. Contratación: Rector como órgano originario. Reforma: iniciativa del Consejo de Gobierno o quinta parte del Claustro; toma en consideración por mayoría absoluta de presentes; aprobación final por mayoría absoluta de miembros; elevación a Administración competente.'
      ]
    },
    {
      heading: 'Opo-Test: puntos calientes',
      paragraphs: [
        'Artículos 127–132, 157–159, 166–177 y 178–180. Mitad más uno de miembros para elegir al Defensor; mayoría simple para Adjunto; mandato tres años y una reelección; una quinta parte del Claustro; memoria al principio de curso; reducción máxima de tareas del cincuenta por ciento; Consejo de Gobierno a propuesta del Rector para servicios; inventario del Gerente; inscripción del Secretario General; presupuesto anual, único, público y equilibrado; secuencia Gerente–Rector–Consejo de Gobierno–Consejo Social; auditoría externa anual; Rector como órgano de contratación; Consejo Social en inversiones plurianuales; mayorías diferentes en reforma y prohibición de propuestas en los tres meses finales.'
      ]
    },
    {
      heading: 'Tres preguntas de retención activa',
      paragraphs: [
        '¿Qué órgano propone, elige, dota de medios y aprueba el Reglamento del Defensor, y con qué mayorías? ¿Cuál es la secuencia completa de elaboración, aprobación y rendición de cuentas del presupuesto universitario? ¿Qué diferencia existe entre la mayoría de toma en consideración y la mayoría de aprobación final de una reforma estatutaria?'
      ]
    },
    {
      heading: 'Estrategia de examen',
      paragraphs: [
        'Construye cuatro cadenas: Defensor, servicios, presupuesto y reforma. Cuando aparezca una mayoría, identifica su base: miembros totales, presentes o mayoría simple. En presupuesto, descarta cualquier orden que sitúe al Consejo Social antes del Consejo de Gobierno. En patrimonio, asocia Gerente con inventario y Secretario General con registros públicos. En contratación, distingue titularidad del Rector y delegaciones posteriores. Si una opción usa terminología antigua, no la rechaces automáticamente cuando reproduce literalmente el Estatuto, pero comprueba compatibilidad con LOSU para situaciones actuales.'
      ]
    }
  ];

  const tree = `Estatutos UC3M · Tema 15\n├─ Vigencia\n│  ├─ Decreto 1/2003\n│  ├─ Modificación Decreto 95/2009\n│  ├─ Texto refundido oficial UC3M\n│  └─ Interpretación conforme a LOSU\n├─ Defensor Universitario · arts. 127–132\n│  ├─ Propuesta del Rector y audiencia de sectores\n│  ├─ Elección por Claustro: mitad más uno\n│  ├─ Mandato de 3 años y una reelección\n│  ├─ Adjunto: mayoría simple\n│  ├─ Memoria anual y medios\n│  └─ Reglamento y órgano asesor\n├─ Servicios universitarios · arts. 157–165\n│  ├─ Apoyo a docencia, estudio, investigación y sociedad\n│  ├─ Gestión directa o indirecta\n│  ├─ Creación y reglamento: Consejo de Gobierno\n│  ├─ Dependencia, medios y participación\n│  ├─ Dirección nombrada por Rector\n│  └─ Servicios específicos\n├─ Régimen económico-financiero · arts. 166–177\n│  ├─ Autonomía económica\n│  ├─ Patrimonio e inventario\n│  ├─ Presupuesto anual, único, público y equilibrado\n│  ├─ Memoria económica\n│  ├─ Transferencias, remanentes y control\n│  ├─ Auditoría externa anual\n│  └─ Contratación y Consejo Social\n└─ Reforma · arts. 178–180\n   ├─ Iniciativa\n   ├─ Mesa y toma en consideración\n   ├─ Comisión y dictamen\n   ├─ Aprobación por Claustro\n   ├─ Administración competente y publicación\n   └─ Límite de los 3 meses finales`;

  const reviewTable = [
    ['Vigencia', 'Decreto 1/2003 modificado por Decreto 95/2009', 'Página oficial UC3M y BOE 2026'],
    ['Propuesta Defensor', 'Rector, oídos estudiantes, PAS/PTGAS y profesorado', 'Art. 127'],
    ['Elección Defensor', 'Claustro: mitad más uno de sus miembros', 'Art. 127'],
    ['Cese Defensor', 'Petición propia o Claustro con la misma mayoría', 'Art. 127'],
    ['Mandato', 'Tres años; una sola reelección', 'Art. 128'],
    ['Adjunto', 'Propuesto por candidato; mayoría simple del Claustro', 'Art. 128'],
    ['Memoria', 'Principio de cada curso ante el Claustro', 'Art. 128'],
    ['Medios', 'Rector de acuerdo con el Defensor', 'Art. 129'],
    ['Reglamento Defensor', 'Consejo de Gobierno a propuesta del Rector, oído el Defensor', 'Art. 132'],
    ['Finalidad servicios', 'Docencia, estudio, investigación y sociedad', 'Art. 157'],
    ['Creación servicios', 'Consejo de Gobierno a propuesta del Rector', 'Art. 158'],
    ['Director servicio', 'Nombrado por el Rector', 'Art. 159'],
    ['Patrimonio', 'Bienes, derechos y acciones de titularidad universitaria', 'Art. 167'],
    ['Inventario', 'Gerente; actualización anual; depósito en Secretaría General', 'Art. 169'],
    ['Registros públicos', 'Secretario General', 'Art. 169'],
    ['Presupuesto', 'Anual, único, público y equilibrado', 'Art. 170'],
    ['Anteproyecto', 'Gerente', 'Art. 170'],
    ['Aprobación presupuesto', 'Rector → Consejo de Gobierno → Consejo Social', 'Art. 170'],
    ['Memoria económica', 'Gerente bajo dirección del Rector; Consejo de Gobierno y Consejo Social', 'Art. 171'],
    ['Auditoría', 'Financiera externa anual; auditor máximo cinco años', 'Art. 174'],
    ['Órgano de contratación', 'Rector', 'Art. 175'],
    ['Mesa', 'Representante mínimo de unidades afectadas', 'Art. 176'],
    ['Inversiones plurianuales', 'Acuerdo preceptivo del Consejo Social', 'Art. 177'],
    ['Iniciativa reforma', 'Consejo de Gobierno o quinta parte del Claustro', 'Art. 178'],
    ['Toma en consideración', 'Mayoría absoluta de claustrales presentes', 'Art. 178'],
    ['Aprobación final', 'Mayoría absoluta de miembros del Claustro', 'Art. 179'],
    ['Eficacia reforma', 'Elevación a Administración competente, aprobación y publicación', 'Art. 179'],
    ['Límite temporal', 'No presentar en los tres meses anteriores al fin del mandato', 'Art. 180']
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
    sourcePolicy: 'Texto refundido oficial UC3M, decretos de aprobación y modificación y confirmación de vigencia en BOE 2026.'
  };
  theme.auditStatus = 'banco real 30+ · teoría autosuficiente v0.88 · vigencia estatutaria confirmada en fuentes oficiales 2026';

  ope.uc3mTheoryProgramme ||= {};
  ope.uc3mTheoryProgramme.v88 = {
    status: 'EN_PROGRESO',
    completedThemes: [13, 14, 15],
    pendingThemes: [16, 17, 18, 19, 20],
    autonomousThemes: 3,
    totalSpecificThemes: 8,
    reviewedAt: REVIEW_DATE,
    sourcePolicy: 'Fuentes oficiales BOE, UC3M y Comunidad de Madrid.'
  };

  window.OPOWEB_UC3M_THEORY_V88 = {
    status: 'EN_PROGRESO',
    block: 2,
    completedThemes: [13, 14, 15],
    pendingThemes: [16, 17, 18, 19, 20],
    reviewedAt: REVIEW_DATE,
    statutes: {
      original: 'Decreto 1/2003',
      amendment: 'Decreto 95/2009',
      currentReferenceConfirmed: true
    }
  };
})();
