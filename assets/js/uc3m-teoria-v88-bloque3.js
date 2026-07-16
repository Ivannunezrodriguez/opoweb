(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  if (!ope) return;
  const REVIEW_DATE = '2026-07-16';

  const commonHeadings = [
    'Resumen orientado al aprobado',
    'Rigor normativo',
    'Desarrollo completo del epígrafe oficial',
    'Síntesis de repaso rápido',
    'Opo-Test: puntos calientes',
    'Tres preguntas de retención activa',
    'Estrategia de examen'
  ];

  function install(number, sources, paragraphs, tree, table, sourcePolicy) {
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) return;
    const sections = commonHeadings.map((heading, index) => ({ heading, paragraphs: paragraphs[index] }));
    const words = [...sections.flatMap(section => [section.heading, ...section.paragraphs]), tree, ...table.flat()]
      .join(' ').trim().split(/\s+/).filter(Boolean).length;
    theme.sections = sections;
    theme.tree = tree;
    theme.reviewTable = table;
    theme.officialSources = sources;
    theme.theoryStatus = {
      autonomous: true,
      programmeLiteral: true,
      reviewedAt: REVIEW_DATE,
      words,
      sourcePolicy
    };
  }

  install(16,
    [
      { label: 'Real Decreto 822/2021, organización de las enseñanzas universitarias y calidad', reference: 'BOE-A-2021-15781', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-15781' },
      { label: 'UC3M · Normas de matrícula de Grado', reference: 'UC3M-MATRICULA-GRADO', url: 'https://www.uc3m.es/grado/informacion-practica/normativa-academica/normativa-matricula' },
      { label: 'UC3M · Normas de permanencia de Grado', reference: 'UC3M-PERMANENCIA-GRADO', url: 'https://www.uc3m.es/grado/informacion-practica/normativa-academica/normas-permanencia' },
      { label: 'UC3M · Normas de evaluación', reference: 'UC3M-EVALUACION-GRADO', url: 'https://www.uc3m.es/grado/informacion-practica/normativa-academica/normas-evaluacion' },
      { label: 'UC3M · Revisión de exámenes', reference: 'UC3M-REVISION-EXAMENES', url: 'https://www.uc3m.es/grado/revision-examenes' }
    ],
    [
      [
        'El tema 16 reúne dos niveles normativos. El Real Decreto 822/2021 establece la organización general de las enseñanzas universitarias oficiales y el procedimiento de aseguramiento de su calidad. Sobre esa base, la Universidad Carlos III de Madrid concreta matrícula, permanencia, evaluación y revisión de calificaciones. Para aprobar no basta con conocer conceptos generales de Grado, Máster y Doctorado: hay que distinguir qué regla procede del Estado y cuál pertenece a la normativa interna de la UC3M.',
        'La estructura correcta de estudio es: enseñanzas y créditos; verificación, modificación y extinción de planes; matrícula; permanencia; convocatorias; evaluación continua y final; publicación de calificaciones; revisión y reclamación. Los datos puramente anuales, como fechas concretas de matrícula o calendarios de exámenes, deben consultarse en la publicación del curso correspondiente y no confundirse con reglas estables.'
      ],
      [
        'El Real Decreto 822/2021 regula las enseñanzas oficiales de Grado, Máster Universitario y Doctorado y utiliza el crédito ECTS como unidad académica. Los planes de estudio deben definir resultados de aprendizaje, actividades formativas, sistemas de evaluación, estructura temporal y mecanismos de calidad. Su implantación exige verificación y autorización conforme al reparto de competencias entre universidad, comunidad autónoma y órganos de evaluación.',
        'Las páginas institucionales de la UC3M son fuente primaria para su normativa académica. Los resúmenes informativos ayudan a estudiar, pero cuando enlazan un acuerdo o norma descargable debe prevalecer el texto aprobado. Las reglas pueden diferenciar entre Grado, Máster, titulaciones conjuntas o asignaturas especiales. En examen hay que evitar convertir una regla de un programa concreto en norma general.'
      ],
      [
        'Las enseñanzas de Grado proporcionan formación general orientada al ejercicio profesional y normalmente se estructuran en 240 créditos ECTS, sin perjuicio de titulaciones con duración distinta prevista por la normativa. El plan incluye formación básica, obligatoria, optativa, prácticas externas cuando proceda y trabajo de fin de Grado. El Máster Universitario ofrece formación avanzada y el Doctorado se centra en investigación. Los títulos propios no son títulos universitarios oficiales y siguen un régimen diferente.',
        'La memoria del título describe competencias, resultados de aprendizaje, acceso, planificación, profesorado, recursos y sistema de calidad. La modificación sustancial exige el procedimiento correspondiente; la modificación no sustancial sigue el cauce previsto por el sistema de calidad. La universidad debe informar al estudiantado y garantizar que los cambios no lesionen sus derechos. La extinción de un plan requiere medidas para que quienes ya están matriculados puedan finalizar en condiciones razonables.',
        'La matrícula formaliza la relación académica para un curso y unas asignaturas. Debe efectuarse dentro de los períodos, plazos y procedimientos publicados por la Universidad. El estudiante ha de comprobar asignaturas, grupo, idioma, créditos, precios, exenciones y documentación. Una matrícula provisional o condicionada puede quedar sin efecto si no se acredita el requisito pendiente. La anulación de matrícula no implica automáticamente devolución de precios; depende de la causa, el momento y la normativa aplicable.',
        'La matrícula puede estar condicionada por prerrequisitos, incompatibilidades, límites de plazas, progresión del plan o normativa de permanencia. La modificación de matrícula requiere causa y plazo admitidos. No presentar una solicitud dentro del plazo o no aportar documentos puede impedir el cambio, aunque el estudiante considere que existía una razón académica. Las comunicaciones deben realizarse por los canales oficiales y conservar justificante.',
        'La permanencia establece el rendimiento mínimo y el número máximo de oportunidades para superar asignaturas. La información oficial de UC3M exige, con carácter general, aprobar al menos doce créditos en el primer año y superar el primer curso completo dentro de dos años académicos consecutivos, ampliados a tres en titulaciones de ingeniería. También fija un número máximo de convocatorias, con particularidades para ingeniería y para asignaturas optativas.',
        'La convocatoria se consume según las reglas de la Universidad y la calificación obtenida. La figura de No Presentado depende de no acudir al examen final o de no completar la evaluación continua cuando no existe examen final. Las dispensas pueden ser libres o justificadas y deben solicitarse en la forma y plazo previstos. Una dispensa no equivale a aprobar ni elimina todas las obligaciones académicas; únicamente produce los efectos reconocidos por la norma.',
        'La evaluación continua debe representar al menos el cuarenta por ciento de la calificación final en las asignaturas sujetas al régimen general. El coordinador puede aumentar ese porcentaje, pero no reducirlo. El profesorado debe publicar las calificaciones de evaluación continua antes del examen final. El estudiante que no siga la evaluación continua debe disponer en convocatoria ordinaria de un examen final con el valor previsto por la norma, ordinariamente hasta el sesenta por ciento.',
        'En convocatoria extraordinaria se conserva la calificación de evaluación continua cuando el estudiante la hubiera seguido. Si no la siguió, tiene derecho a una prueba que permita alcanzar el cien por cien de la calificación. Existen asignaturas especiales de carácter aplicado que pueden exigir participación continua, no reservar examen final o carecer de convocatoria extraordinaria. Esa excepción debe estar aprobada y publicada, no puede presumirse por decisión informal.',
        'Los criterios de evaluación deben figurar en la guía docente o documentación académica aplicable. Deben ser objetivos, públicos y coherentes con los resultados de aprendizaje. Cambiar sustancialmente el sistema una vez iniciado el curso puede vulnerar seguridad jurídica y derechos del estudiantado. La identidad del estudiante, la custodia de pruebas y la protección de datos deben garantizarse durante evaluación y publicación.',
        'La revisión permite conocer cómo se aplicaron los criterios y solicitar corrección de errores. Debe distinguirse revisión ante el profesorado, reclamación ante el órgano académico y recurso administrativo cuando proceda. El estudiante debe actuar dentro del plazo publicado y concretar los motivos. La revisión no es un nuevo examen ni autoriza a modificar criterios después de conocer los resultados.',
        'Las actas contienen las calificaciones oficiales. Una nota publicada en Aula Global puede ser informativa hasta su incorporación al acta. La rectificación de errores materiales sigue un cauce distinto de la impugnación académica. La Universidad debe conservar evidencias de evaluación durante el período establecido y facilitar revisión sin comprometer datos de otros estudiantes.',
        'En gestión administrativa, el expediente de matrícula debe reflejar solicitudes, pagos, exenciones, reconocimientos, anulaciones y resoluciones. La respuesta correcta a una incidencia requiere identificar titulación, curso, norma aplicable, plazo y órgano competente. No debe prometerse una devolución, dispensa o convocatoria adicional sin comprobar la regulación exacta.'
      ],
      [
        'Tema 16: RD 822/2021 para la arquitectura de títulos y calidad; normativa UC3M para matrícula, permanencia, evaluación y revisión. Matrícula dentro de plazo y con requisitos; permanencia ligada a créditos y convocatorias; evaluación continua mínima del 40 % en el régimen general; extraordinaria con conservación de continua o prueba hasta el 100 % si no se siguió; revisión dentro de plazo y conforme a criterios publicados.'
      ],
      [
        'Diferencia entre título oficial y propio; Grado, Máster y Doctorado; ECTS; memoria y verificación; matrícula y anulación; devolución de precios; doce créditos del primer año; plazo para superar primero; convocatorias; dispensa; No Presentado; evaluación continua mínima; examen ordinario y extraordinario; asignaturas especiales; guía docente; acta, revisión y reclamación.'
      ],
      [
        '¿Qué parte regula el RD 822/2021 y qué parte corresponde a normativa UC3M? ¿Qué diferencia existe entre no presentarse, solicitar dispensa y agotar una convocatoria? ¿Cómo se calcula la nota cuando se ha seguido o no la evaluación continua en convocatoria ordinaria y extraordinaria?'
      ],
      [
        'Desconfía de respuestas absolutas: toda anulación devuelve precios, toda asignatura tiene extraordinaria, la continua vale siempre exactamente 40 %, o la nota de Aula Global es necesariamente el acta definitiva. Identifica primero si la pregunta trata organización estatal de enseñanzas o procedimiento interno UC3M y después aplica regla, excepción y órgano.'
      ]
    ],
    'Tema 16 · Enseñanzas y normativa académica UC3M\n├─ RD 822/2021\n│  ├─ Grado, Máster y Doctorado\n│  ├─ ECTS, planes y resultados\n│  ├─ Verificación y modificación\n│  └─ Calidad y extinción\n├─ Matrícula\n│  ├─ Plazos, requisitos y precios\n│  ├─ Modificación y anulación\n│  └─ Documentación y efectos\n├─ Permanencia\n│  ├─ Rendimiento mínimo\n│  ├─ Primer curso\n│  ├─ Convocatorias\n│  └─ Dispensas y No Presentado\n└─ Evaluación\n   ├─ Continua y examen final\n   ├─ Ordinaria y extraordinaria\n   ├─ Asignaturas especiales\n   └─ Revisión, reclamación y actas',
    [
      ['RD 822/2021', 'Organiza títulos oficiales y calidad', 'No sustituye la normativa académica interna'],
      ['ECTS', 'Unidad de carga académica', 'No equivale solo a horas de clase'],
      ['Matrícula', 'Formaliza asignaturas y curso', 'Sujeta a plazos y requisitos'],
      ['Anulación', 'Deja sin efecto total o parcialmente', 'No garantiza devolución'],
      ['Permanencia', 'Exige rendimiento y limita convocatorias', 'Tiene particularidades por titulación'],
      ['Primer año', 'Regla UC3M de créditos mínimos', 'Debe leerse con excepciones'],
      ['Dispensa', 'Produce efectos académicos tasados', 'No equivale a aprobado'],
      ['No Presentado', 'Depende de examen o continua', 'No es una nota numérica'],
      ['Evaluación continua', 'Mínimo general del 40 %', 'Puede aumentarse'],
      ['Extraordinaria', 'Conserva continua si se siguió', 'Sin continua permite alcanzar 100 %'],
      ['Revisión', 'Comprueba aplicación de criterios', 'No es un nuevo examen'],
      ['Acta', 'Calificación oficial', 'Distinta de publicaciones provisionales']
    ],
    'BOE y normativa académica oficial publicada por la Universidad Carlos III de Madrid'
  );

  install(17,
    [
      { label: 'Real Decreto 534/2024, acceso, prueba y admisión a Grado, texto actualizado', reference: 'BOE-A-2024-11858', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-11858' },
      { label: 'UC3M · Solicitud de plaza y normativa de admisión', reference: 'UC3M-ADMISION-GRADO', url: 'https://www.uc3m.es/grado/admision/solicitud' },
      { label: 'UC3M · Normativa de la PAU', reference: 'UC3M-NORMATIVA-PAU', url: 'https://www.uc3m.es/pruebasacceso/normativa-evau' },
      { label: 'UC3M · Cambios de titulación', reference: 'UC3M-CAMBIO-TITULACION', url: 'https://www.uc3m.es/grado/admision/solicitud/traslado/uc3m' }
    ],
    [
      [
        'El tema 17 distingue acceso y admisión. Acceso es cumplir los requisitos legales para cursar un Grado; admisión es la adjudicación de una plaza concreta entre quienes ya pueden acceder. El Real Decreto 534/2024 regula las vías de acceso, las características básicas de la prueba para Bachillerato y las bases de los procedimientos de admisión. La UC3M y el distrito universitario de Madrid publican cada curso acuerdos, calendarios, ponderaciones, plazas y procedimientos.',
        'La norma ha sido modificada y el texto consolidado del BOE señala una actualización publicada el 2 de julio de 2026. Por ello, cualquier dato sobre materias, estructura de la PAU, reclamaciones o admisión debe comprobarse en la redacción vigente y en los acuerdos oficiales del curso 2026/2027. OpoWeb separa las reglas estables de los datos anuales.'
      ],
      [
        'El Real Decreto 534/2024 tiene carácter básico. Define acceso, admisión y procedimiento de admisión, exige igualdad, mérito y capacidad y ordena medidas de accesibilidad y no discriminación. La regulación estatal no adjudica por sí sola las plazas de la UC3M: las universidades públicas madrileñas coordinan la preinscripción y publican acuerdos del distrito único.',
        'Las páginas de admisión UC3M enlazan el acuerdo aplicable al curso. Las notas de corte son resultados del último admitido de un proceso anterior y no garantizan plaza futura. Las ponderaciones, cupos, plazos y documentación pueden variar. Deben consultarse en la convocatoria vigente y no memorizarse como reglas permanentes.'
      ],
      [
        'Quienes poseen título de Bachiller o equivalente acceden tras superar la prueba de acceso prevista legalmente. La calificación de acceso combina Bachillerato y prueba según la normativa vigente. La fase o componente de admisión permite mejorar la nota mediante materias ponderadas según el Grado solicitado. La estructura exacta, materias y criterios se concretan cada curso dentro de las bases estatales y autonómicas.',
        'Quienes tienen título de Técnico Superior de Formación Profesional, Artes Plásticas y Diseño o Técnico Deportivo Superior pueden acceder sin realizar la prueba general de acceso. Su nota de acceso deriva del título, aunque pueden participar en pruebas o materias para mejorar la admisión cuando la normativa lo permita. Esta vía es especialmente relevante para tu perfil DAM: el título permite acceso universitario, pero no concede automáticamente una plaza en cualquier Grado.',
        'También acceden titulados universitarios, personas con estudios universitarios parciales, mayores de 25, 40 o 45 años en los supuestos regulados y estudiantes de sistemas educativos extranjeros conforme a su régimen. Cada vía tiene documentación, cupo y procedimiento. No deben mezclarse los requisitos de homologación, acreditación o prueba de unas vías con otras.',
        'La prueba para Bachillerato debe valorar madurez académica, conocimientos y capacidad para seguir estudios universitarios. Se organiza con criterios comunes, garantías de objetividad y medidas de adaptación. La revisión de ejercicios sigue un procedimiento específico. Solicitar revisión puede implicar nueva corrección conforme a las reglas publicadas; no debe confundirse con una simple consulta informal.',
        'La admisión adjudica plazas cuando la demanda supera la oferta. La nota de admisión incorpora la nota de acceso y, en su caso, ponderaciones. Los parámetros de ponderación dependen de la relación entre materias y estudios y se publican antes del proceso. La nota de corte no la fija anticipadamente la Universidad: resulta de la última plaza adjudicada.',
        'La preinscripción en las universidades públicas madrileñas se realiza mediante el procedimiento coordinado del distrito único. El solicitante ordena titulaciones por preferencia. Ese orden es decisivo: la adjudicación busca la primera opción posible según nota y plazas. Cambiar el orden fuera de plazo o no confirmar actuaciones puede afectar la solicitud. Deben conservarse resguardo, credenciales y documentación.',
        'Las listas de espera permiten cubrir vacantes posteriores. Permanecer en lista no garantiza plaza. La persona admitida debe matricularse dentro del plazo; no hacerlo puede interpretarse como renuncia. Los llamamientos y sistemas de permanencia en lista se rigen por la publicación anual, por lo que deben verificarse expresamente.',
        'Existen cupos de reserva para determinados colectivos: personas con discapacidad, titulados, deportistas de alto nivel o rendimiento y otras vías previstas. Cumplir los requisitos del cupo no elimina la necesidad de acceso ni asegura plaza. La documentación debe acreditarse en plazo y la plaza no cubierta puede redistribuirse conforme a la norma.',
        'Los estudiantes con estudios universitarios parciales españoles pueden acceder por reconocimiento de créditos cuando la universidad de destino reconozca al menos el mínimo exigido por la norma, habitualmente treinta ECTS para esta vía directa. Si no se alcanza, deben acudir al procedimiento general. Para continuar en el mismo centro tras una interrupción, el Real Decreto contempla supuestos de reanudación con al menos seis ECTS superados, sin perjuicio de permanencia.',
        'El cambio interno de titulación en UC3M es un procedimiento propio y no equivale a preinscripción general. La información de 2026 exige estar cursando un Grado, solicitar dentro del plazo, prever al menos treinta créditos reconocibles y no incumplir permanencia. La puntuación y plazas se fijan por el procedimiento interno. Los datos de fechas concretas deben actualizarse cada curso.',
        'La admisión de estudiantes extranjeros depende del sistema educativo de procedencia, equivalencias, acreditaciones y, en su caso, homologación. La documentación debe ser oficial y, cuando proceda, legalizada y traducida. No puede presumirse que una credencial extranjera tenga la misma nota o efectos sin conversión y comprobación.',
        'En un expediente administrativo de admisión deben registrarse solicitud, preferencias, vía, calificación, documentos, subsanaciones, adjudicación y matrícula. La protección de datos exige publicar resultados con identificación proporcionada y limitar el acceso a información académica. Las reclamaciones deben presentarse ante el órgano y en el plazo publicados.',
        'Para resolver un test, identifica siempre la fase: requisito de acceso, cálculo de nota, participación en admisión, adjudicación, lista de espera o matrícula. Muchas opciones incorrectas son ciertas en otra fase. Por ejemplo, poseer DAM permite acceder, pero la plaza se adjudica por el procedimiento de admisión y la nota correspondiente.'
      ],
      [
        'Tema 17: acceso no es admisión. Bachillerato requiere la prueba; Técnico Superior accede sin la prueba general, aunque puede mejorar admisión; titulados y otras vías tienen procedimientos propios. La preinscripción madrileña ordena preferencias y adjudica por nota y plazas. Las notas de corte son resultados, no requisitos fijados de antemano. Los acuerdos 2026/2027, ponderaciones y calendarios se consultan en la publicación anual.'
      ],
      [
        'Definiciones de acceso y admisión; igualdad, mérito y capacidad; Bachillerato y PAU; Técnico Superior; sistemas extranjeros; titulados; mayores; nota de acceso y nota de admisión; ponderaciones; nota de corte; distrito único; orden de preferencias; listas de espera; cupos; matrícula tras adjudicación; cambio interno; treinta ECTS reconocidos; reanudación con seis ECTS; reclamaciones y datos anuales.'
      ],
      [
        '¿Por qué tener un título de Técnico Superior permite acceder pero no garantiza admisión? ¿Qué diferencia existe entre nota de acceso, nota de admisión y nota de corte? ¿Cuándo se aplica la preinscripción general y cuándo un procedimiento de cambio de estudios con reconocimiento de créditos?'
      ],
      [
        'Busca el verbo del enunciado: acceder, admitir, adjudicar, matricular o reclamar. Rechaza que la nota de corte se establezca previamente, que el Técnico Superior deba superar obligatoriamente la prueba general o que ordenar preferencias sea irrelevante. En datos de 2026/2027, exige siempre acuerdo o calendario oficial vigente.'
      ]
    ],
    'Tema 17 · Acceso y admisión a Grado\n├─ Conceptos\n│  ├─ Acceso\n│  ├─ Admisión\n│  └─ Procedimiento de adjudicación\n├─ Vías de acceso\n│  ├─ Bachillerato y PAU\n│  ├─ Técnico Superior\n│  ├─ Titulados y estudios parciales\n│  ├─ Sistemas extranjeros\n│  └─ Mayores de 25, 40 y 45\n├─ Admisión\n│  ├─ Nota de acceso y admisión\n│  ├─ Ponderaciones\n│  ├─ Preferencias y distrito único\n│  ├─ Cupos y listas de espera\n│  └─ Matrícula\n└─ UC3M\n   ├─ Acuerdo anual 2026/2027\n   ├─ Cambio interno de titulación\n   ├─ Reconocimiento de créditos\n   └─ Reclamaciones y protección de datos',
    [
      ['Acceso', 'Cumplimiento de requisitos legales', 'Es previo a la admisión'],
      ['Admisión', 'Adjudicación de plazas', 'Depende de demanda, nota y cupos'],
      ['Bachillerato', 'Acceso mediante PAU', 'Según RD 534/2024'],
      ['Técnico Superior', 'Acceso sin prueba general', 'Puede mejorar nota de admisión'],
      ['Nota de acceso', 'Calificación que habilita para competir', 'No es nota de corte'],
      ['Nota de admisión', 'Incluye ponderaciones aplicables', 'Puede variar por Grado'],
      ['Nota de corte', 'Nota del último admitido', 'Es resultado, no garantía'],
      ['Preferencias', 'Ordenan solicitudes', 'El orden afecta a la adjudicación'],
      ['Lista de espera', 'Permite cubrir vacantes', 'No garantiza plaza'],
      ['Cupo', 'Reserva para determinados colectivos', 'Exige acreditación'],
      ['Cambio interno', 'Procedimiento UC3M distinto', 'Requiere créditos reconocibles'],
      ['Datos anuales', 'Plazos, ponderaciones y plazas', 'Se actualizan cada curso']
    ],
    'BOE actualizado y publicaciones oficiales de admisión y normativa de la Universidad Carlos III de Madrid'
  );

  ope.theoryProgramme = ope.theoryProgramme || {};
  ope.theoryProgramme.v88 = {
    status: 'EN_PROGRESO',
    scope: 'Temas específicos 13 a 20 de UC3M',
    completedThemes: [13, 14, 15, 16, 17],
    pendingThemes: [18, 19, 20],
    autonomousThemes: 5,
    totalThemes: 8,
    reviewedAt: REVIEW_DATE,
    editorialPolicy: 'Fuentes oficiales BOE y UC3M; los datos anuales se separan de la normativa estable.'
  };

  window.OPOWEB_UC3M_THEORY_V88 = {
    status: 'EN_PROGRESO',
    block: 3,
    completedThemes: [13, 14, 15, 16, 17],
    pendingThemes: [18, 19, 20],
    reviewedAt: REVIEW_DATE
  };
})();
