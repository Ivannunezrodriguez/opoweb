(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;
  const ope = data.oposiciones.find(o => o.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const getTheme = n => ope.themes.find(t => Number(t.number) === n);

  function buildQuestions(theme, defs) {
    return defs.map((q, i) => {
      const all = [q.correct, ...q.wrong];
      const shift = (Number(theme.number) + i) % 4;
      const ordered = all.slice(shift).concat(all.slice(0, shift));
      return {
        id: `${theme.id}-v35-q${i + 1}`,
        text: q.text,
        options: ordered.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[ordered.indexOf(q.correct)],
        justification: q.justification
      };
    });
  }

  function applyTheme(n, cfg) {
    const theme = getTheme(n);
    if (!theme) return;
    theme.sections = [
      sec('Resumen orientado al aprobado', [
        `Enunciado oficial: ${theme.title}`,
        `Fuente principal: ${cfg.source}.`,
        cfg.summary
      ]),
      sec('Rigor normativo', [cfg.rigor, `Estado de auditoría: ${cfg.status}.`]),
      ...cfg.blocks.map(([heading, paragraphs]) => sec(heading, paragraphs)),
      sec('Opo-Test: puntos calientes', cfg.hot),
      sec('Retención activa', cfg.recall)
    ];
    theme.reviewTable = cfg.table;
    theme.auditStatus = cfg.status;
    theme.motorCoverage = cfg.complete ? 'completo-revisado-v35' : 'base-revisada-v35';
    ope.themeTests[theme.id] = buildQuestions(theme, cfg.questions);
  }

  applyTheme(9, {
    source: 'Microsoft Word 2019, Microsoft Excel 2019, Google Drive, Docs, Sheets, Calendar y Gmail',
    status: 'desarrollo funcional completo para test de usuario; pendiente únicamente adaptar nombres exactos si la UC3M publica manual propio',
    complete: true,
    summary: 'Este tema debe prepararse como manejo operativo. El examen puede preguntar qué comando usar, qué efecto produce una opción, qué referencia cambia al copiar una fórmula o qué permiso debe asignarse al compartir un archivo.',
    rigor: 'Se mantiene la terminología funcional de Word 2019 y Excel 2019. En Google Workspace la interfaz puede cambiar, pero se conservan los conceptos estables: propietario, editor, comentarista, lector, historial, etiquetas, filtros, invitados y permisos.',
    blocks: [
      ['Word 2019: documento, edición y formato', [
        'Un documento se organiza en caracteres, palabras, párrafos, páginas y secciones. El salto de línea manual no crea un nuevo párrafo; el salto de página inicia una página nueva; el salto de sección permite cambiar configuración dentro del mismo documento.',
        'Formato de fuente: tipo, tamaño, negrita, cursiva, subrayado, color y efectos. Formato de párrafo: alineación, sangría, espaciado, interlineado, tabulaciones, bordes y listas.',
        'Los estilos aplican un conjunto coherente de formatos y facilitan esquemas, navegación, tablas de contenido y modificaciones globales.',
        'Buscar localiza texto; Reemplazar sustituye coincidencias y puede trabajar con formato. Copiar mantiene el original; Cortar lo desplaza; Pegado especial controla formato o vinculación.'
      ]],
      ['Word 2019: diseño, tablas y revisión', [
        'El diseño de página comprende márgenes, orientación, tamaño, columnas, saltos, encabezado, pie y numeración.',
        'Las tablas se componen de filas, columnas y celdas; pueden combinarse o dividirse celdas, ordenar datos y repetirse filas de encabezado.',
        'Control de cambios registra inserciones, eliminaciones y formato. Los comentarios permiten observaciones sin modificar directamente el texto.',
        'Combinar correspondencia relaciona un documento principal con una fuente de datos para generar cartas, etiquetas o mensajes personalizados.',
        'Guardar conserva el documento editable; Exportar o Guardar como PDF genera una copia de distribución. Imprimir permite seleccionar impresora, intervalo, orientación, escala y copias.'
      ]],
      ['Excel 2019: estructura y referencias', [
        'Un libro contiene hojas; una hoja contiene filas y columnas; su intersección es una celda. Un rango es un conjunto de celdas.',
        'Las fórmulas comienzan por = y pueden usar operadores, referencias y funciones. El orden de cálculo puede alterarse con paréntesis.',
        'Referencia relativa A1: cambia al copiar. Absoluta $A$1: fija columna y fila. Mixta $A1 o A$1: fija solo una parte. F4 alterna los tipos de referencia durante la edición.',
        'Errores habituales: #DIV/0!, #N/A, #NOMBRE?, #REF!, #VALOR! y #### cuando el ancho resulta insuficiente o existe una fecha/hora no representable.'
      ]],
      ['Excel 2019: funciones y datos', [
        'Funciones básicas: SUMA, PROMEDIO, MAX, MIN, CONTAR, CONTARA y SI. CONTAR cuenta números; CONTARA cuenta celdas no vacías.',
        'Ordenar reorganiza filas según uno o varios criterios. Filtrar muestra únicamente registros que cumplen condiciones sin eliminar los demás.',
        'Una tabla de Excel amplía automáticamente fórmulas y formato y facilita encabezados, filtros y referencias estructuradas.',
        'Formato condicional cambia la apariencia según reglas. Validación de datos restringe entradas y puede ofrecer listas desplegables.',
        'Un gráfico representa visualmente datos; debe seleccionarse el rango correcto y diferenciar serie, categoría, eje, título y leyenda.'
      ]],
      ['Google Drive, Docs y Sheets', [
        'Drive permite almacenar, organizar, buscar, mover, compartir y recuperar archivos desde la papelera. Compartir no equivale a enviar una copia: puede mantenerse un único archivo colaborativo.',
        'Permisos habituales: lector, comentarista y editor. El propietario conserva control superior y puede restringir descarga, copia o nueva compartición según configuración.',
        'Docs y Sheets guardan automáticamente, permiten edición simultánea, comentarios, sugerencias e historial de versiones.',
        'El historial de versiones permite identificar cambios y restaurar versiones anteriores. Restaurar no borra necesariamente el historial previo.'
      ]],
      ['Calendar, Gmail y correo electrónico', [
        'Calendar gestiona eventos, invitados, disponibilidad, recurrencia, notificaciones, ubicación y videoconferencia. Un invitado puede aceptar, rechazar o responder quizás.',
        'En correo: Para identifica destinatarios principales; CC envía copia visible; CCO oculta los destinatarios incluidos en ese campo frente a los demás receptores.',
        'Responder contesta al remitente; Responder a todos incluye al resto de destinatarios pertinentes; Reenviar crea un nuevo envío del contenido recibido.',
        'Gmail utiliza etiquetas y filtros. Una etiqueta clasifica; un filtro automatiza acciones según remitente, asunto, palabras, tamaño u otros criterios.',
        'Seguridad: verificar destinatarios, permisos y adjuntos; desconfiar de enlaces y solicitudes de credenciales; no compartir información sensible sin necesidad y autorización.'
      ]]
    ],
    hot: [
      '• Word: salto de línea, salto de página y salto de sección producen efectos distintos.',
      '• Estilos permiten cambios coherentes y tablas de contenido.',
      '• Control de cambios no es lo mismo que comentarios.',
      '• Excel: A1 relativa, $A$1 absoluta y referencias mixtas.',
      '• CONTAR cuenta números; CONTARA cuenta celdas no vacías.',
      '• Filtrar oculta temporalmente; no elimina registros.',
      '• Drive: lector, comentarista y editor.',
      '• CC es visible; CCO oculta destinatarios.',
      '• Etiqueta clasifica; filtro automatiza.',
      '• En un test práctico, identifica primero la operación solicitada y después la herramienta exacta.'
    ],
    recall: [
      '1. ¿Qué diferencia existe entre salto de página, salto de sección y salto de línea?',
      '2. ¿Cómo se comportan A1, $A$1, $A1 y A$1 al copiar una fórmula?',
      '3. ¿Qué diferencias hay entre compartir como lector, comentarista o editor y entre Para, CC y CCO?'
    ],
    table: [
      ['Concepto', 'Función', 'Diferencia clave'],
      ['Estilo Word', 'Aplica formato coherente', 'No es formato manual aislado'],
      ['Control de cambios', 'Registra modificaciones', 'Comentario solo añade observación'],
      ['Referencia absoluta', 'Fija fila y columna', '$A$1'],
      ['Filtro Excel', 'Muestra registros que cumplen', 'No elimina datos'],
      ['Lector Drive', 'Consulta', 'No edita'],
      ['CCO', 'Copia oculta', 'Los demás no ven ese destinatario'],
      ['Filtro Gmail', 'Ejecuta acciones automáticas', 'Etiqueta solo clasifica']
    ],
    questions: [
      { text:'¿Qué elemento permite cambiar orientación o márgenes solo desde un punto del documento?', correct:'Un salto de sección', wrong:['Un salto de línea','Un comentario','Una tabulación'], justification:'Las secciones permiten aplicar distinta configuración de página dentro del mismo documento.' },
      { text:'¿Qué función principal tienen los estilos de Word?', correct:'Aplicar formatos coherentes y estructurar el documento', wrong:['Eliminar todas las páginas','Convertir siempre a PDF','Bloquear el teclado'], justification:'Los estilos agrupan formato y facilitan navegación y tablas de contenido.' },
      { text:'¿Qué herramienta registra inserciones y eliminaciones realizadas en Word?', correct:'Control de cambios', wrong:['Combinar correspondencia','Autocorrección','Vista preliminar'], justification:'Control de cambios conserva las modificaciones para revisarlas y aceptarlas o rechazarlas.' },
      { text:'¿Para qué sirve combinar correspondencia?', correct:'Generar documentos personalizados desde una fuente de datos', wrong:['Calcular promedios','Crear copias ocultas de correo','Filtrar filas de Excel'], justification:'Combina documento principal y origen de datos.' },
      { text:'Al copiar una fórmula, ¿qué referencia mantiene fija fila y columna?', correct:'$A$1', wrong:['A1','$A1','A$1'], justification:'Los dos signos $ fijan la columna y la fila.' },
      { text:'¿Qué tecla alterna referencias relativas, absolutas y mixtas al editar una fórmula en Excel?', correct:'F4', wrong:['F1','F7','Esc'], justification:'F4 recorre A1, $A$1, A$1 y $A1 en la edición de referencias.' },
      { text:'¿Qué función cuenta únicamente celdas con números?', correct:'CONTAR', wrong:['CONTARA','SI','PROMEDIO'], justification:'CONTAR cuenta valores numéricos; CONTARA cuenta celdas no vacías.' },
      { text:'¿Qué hace un filtro en Excel?', correct:'Muestra solo las filas que cumplen condiciones sin eliminar las demás', wrong:['Borra definitivamente las filas ocultas','Convierte el libro en PDF','Protege todas las celdas'], justification:'El filtrado modifica la visualización, no elimina los registros.' },
      { text:'¿Qué herramienta restringe los valores permitidos en una celda?', correct:'Validación de datos', wrong:['Combinar correspondencia','Control de cambios','Historial de versiones'], justification:'La validación impone reglas de entrada y puede crear listas.' },
      { text:'¿Qué permiso de Drive permite modificar el contenido?', correct:'Editor', wrong:['Lector','Comentarista exclusivamente','Invitado sin acceso'], justification:'El editor puede modificar el archivo dentro de los límites configurados.' },
      { text:'¿Qué permite el historial de versiones de Docs o Sheets?', correct:'Consultar cambios y restaurar versiones anteriores', wrong:['Enviar siempre CCO','Eliminar automáticamente la cuenta','Cambiar el propietario sin permiso'], justification:'El historial registra versiones y autores de cambios.' },
      { text:'¿Qué campo oculta sus destinatarios frente a los demás receptores?', correct:'CCO', wrong:['Para','CC','Asunto'], justification:'CCO significa copia de carbón oculta.' },
      { text:'¿Qué diferencia hay entre etiqueta y filtro en Gmail?', correct:'La etiqueta clasifica y el filtro automatiza acciones', wrong:['No existe ninguna diferencia','La etiqueta envía correos y el filtro imprime','El filtro solo cambia el idioma'], justification:'Los filtros aplican acciones automáticas; las etiquetas organizan mensajes.' },
      { text:'¿Qué debe hacerse antes de compartir un archivo con información sensible?', correct:'Comprobar destinatarios, permisos y necesidad de acceso', wrong:['Hacerlo público por defecto','Usar siempre enlace abierto','Eliminar el asunto'], justification:'La seguridad exige mínimo acceso necesario y verificación.' },
      { text:'¿Qué respuesta de Calendar indica que la asistencia no está confirmada?', correct:'Quizás', wrong:['Aceptar','Rechazar','Eliminar'], justification:'La respuesta “Quizás” expresa asistencia incierta.' }
    ]
  });

  applyTheme(10, {
    source: 'Real Decreto Legislativo 5/2015, texto refundido de la Ley del Estatuto Básico del Empleado Público',
    status: 'desarrollo jurídico revisado por artículos 8 a 15, 52 a 54, 62 a 68 y 85 a 92',
    complete: true,
    summary: 'El tema se divide en cinco bloques: clases de personal, derechos, deberes y código de conducta, adquisición, pérdida y rehabilitación, y situaciones administrativas.',
    rigor: 'Las universidades públicas están incluidas en el ámbito del TREBEP. Debe distinguirse empleado público de funcionario y no atribuir al personal eventual funciones permanentes ordinarias.',
    blocks: [
      ['Clases de empleados públicos', [
        'Artículo 8 TREBEP. Son empleados públicos quienes desempeñan funciones retribuidas en las Administraciones Públicas al servicio de los intereses generales.',
        'Clases: funcionarios de carrera, funcionarios interinos, personal laboral —fijo, indefinido o temporal— y personal eventual.',
        'Artículo 9. El funcionario de carrera está vinculado por una relación estatutaria regulada por Derecho administrativo para servicios profesionales retribuidos de carácter permanente.',
        'Artículo 10. El interino se nombra temporalmente por razones expresamente justificadas de necesidad y urgencia en los supuestos legales.',
        'Artículo 11. El personal laboral presta servicios mediante contrato de trabajo. Artículo 12: el eventual realiza funciones expresamente calificadas de confianza o asesoramiento especial. Artículo 13: personal directivo profesional.'
      ]],
      ['Derechos', [
        'Artículo 14. Derechos individuales: inamovilidad del funcionario de carrera, desempeño efectivo, carrera y promoción, retribuciones, formación, seguridad y salud, vacaciones, conciliación, intimidad, no discriminación y defensa jurídica, entre otros.',
        'Artículo 15. Derechos individuales ejercidos colectivamente: libertad sindical, negociación colectiva, huelga, planteamiento de conflictos colectivos y reunión.',
        'La inamovilidad corresponde al funcionario de carrera, no a todas las clases de empleado público.'
      ]],
      ['Deberes y código de conducta', [
        'Artículo 52. Los empleados deben actuar con diligencia, servicio a los intereses generales, legalidad, objetividad, integridad, neutralidad, responsabilidad, imparcialidad, confidencialidad, transparencia, eficacia, honradez e igualdad.',
        'Artículo 53. Principios éticos: respeto al ordenamiento, interés general, imparcialidad, lealtad y buena fe, ausencia de discriminación, abstención en asuntos con interés personal y prohibición de aceptar ventajas indebidas.',
        'Artículo 54. Principios de conducta: trato respetuoso, desempeño diligente, obediencia a órdenes salvo infracción manifiesta, información al ciudadano, administración austera de recursos y formación actualizada.'
      ]],
      ['Adquisición, pérdida y rehabilitación', [
        'Artículo 62. Adquisición sucesiva: superar el proceso selectivo, nombramiento publicado, acatamiento de Constitución y ordenamiento, y toma de posesión dentro del plazo.',
        'Artículo 63. Pérdida: renuncia, pérdida de nacionalidad, jubilación total, separación firme del servicio e inhabilitación firme.',
        'Artículo 64. La renuncia debe formularse por escrito y aceptarse expresamente; no puede aceptarse en los supuestos legales de procedimiento penal o disciplinario. No impide un nuevo ingreso por proceso selectivo.',
        'Artículos 65 a 68. Pérdida de nacionalidad, inhabilitación, jubilación y rehabilitación en los casos previstos.'
      ]],
      ['Situaciones administrativas', [
        'Artículo 85. Servicio activo, servicios especiales, servicio en otras Administraciones Públicas, excedencia y suspensión de funciones.',
        'Artículo 86. Servicio activo: ejercicio ordinario de funciones con derechos, deberes y responsabilidades.',
        'Artículo 87. Servicios especiales: determinados cargos o funciones públicas; se perciben las retribuciones del cargo y se mantiene el cómputo de trienios, carrera y Seguridad Social en los términos legales.',
        'Artículo 88. Servicio en otras Administraciones por transferencia o provisión/movilidad, conservando la condición en la Administración de origen.',
        'Artículo 89. Excedencias: interés particular, agrupación familiar, cuidado de familiares, violencia de género o sexual y violencia terrorista.',
        'Artículo 90. Suspensión: priva temporalmente del ejercicio de funciones y derechos inherentes. Artículo 91: reingreso. Artículo 92: situaciones del personal laboral conforme a su normativa.'
      ]]
    ],
    hot: [
      '• Artículo 8: cuatro clases de empleados públicos.',
      '• Eventual: confianza o asesoramiento especial.',
      '• Inamovilidad: derecho del funcionario de carrera.',
      '• Artículos 52, 53 y 54: deberes, principios éticos y principios de conducta.',
      '• Adquisición del artículo 62 exige cuatro pasos sucesivos.',
      '• Renuncia no equivale a inhabilitación para un nuevo ingreso.',
      '• Artículo 85 enumera cinco situaciones básicas.',
      '• Excedencia por interés particular no es lo mismo que servicios especiales.',
      '• Suspensión provisional y firme producen efectos diferentes según la normativa aplicable.',
      '• Las universidades públicas están dentro del ámbito del TREBEP.'
    ],
    recall: [
      '1. ¿Cuáles son las cuatro clases del artículo 8 y qué diferencia esencial existe entre ellas?',
      '2. ¿Qué cuatro requisitos sucesivos exige el artículo 62?',
      '3. ¿Qué efectos básicos distinguen servicio activo, servicios especiales, excedencia y suspensión?'
    ],
    table: [
      ['Figura', 'Vínculo/función', 'Clave de examen'],
      ['Funcionario de carrera', 'Relación estatutaria permanente', 'Inamovilidad'],
      ['Interino', 'Nombramiento temporal', 'Necesidad y urgencia'],
      ['Laboral', 'Contrato de trabajo', 'Fijo, indefinido o temporal'],
      ['Eventual', 'Confianza o asesoramiento', 'No función ordinaria permanente'],
      ['Adquisición', 'Selección, nombramiento, acatamiento, posesión', 'Orden sucesivo'],
      ['Servicios especiales', 'Cargo o función tasada', 'Trienios y cómputos legales'],
      ['Suspensión', 'Privación temporal', 'Efectos sobre funciones y derechos']
    ],
    questions: [
      { text:'¿Qué artículo enumera las clases de empleados públicos?', correct:'El artículo 8 TREBEP', wrong:['El artículo 21','El artículo 39','El artículo 100'], justification:'El artículo 8 define empleado público y sus cuatro clases.' },
      { text:'¿Cuál NO es una clase del artículo 8?', correct:'Contratista administrativo', wrong:['Funcionario de carrera','Funcionario interino','Personal eventual'], justification:'Los contratistas no son empleados públicos por ese vínculo.' },
      { text:'¿Qué caracteriza al personal eventual?', correct:'Funciones de confianza o asesoramiento especial', wrong:['Relación estatutaria permanente','Ingreso automático como funcionario','Funciones judiciales'], justification:'Artículo 12 TREBEP.' },
      { text:'¿A quién corresponde el derecho a la inamovilidad?', correct:'Al funcionario de carrera', wrong:['A todo personal eventual','A cualquier contratista','Solo al personal directivo'], justification:'Artículo 14.a TREBEP.' },
      { text:'¿Cuál es un derecho ejercido colectivamente?', correct:'La negociación colectiva', wrong:['La toma de posesión','La jubilación','La convalidación de actos'], justification:'Artículo 15 TREBEP.' },
      { text:'¿Qué artículos contienen el código de conducta?', correct:'Los artículos 52 a 54', wrong:['Los artículos 1 a 3','Los artículos 62 a 68','Los artículos 85 a 92'], justification:'Capítulo VI del título III.' },
      { text:'¿Qué principio obliga a apartarse de intereses personales incompatibles?', correct:'Imparcialidad y abstención', wrong:['Publicidad comercial','Libre designación','Autonomía presupuestaria'], justification:'El artículo 53 exige objetividad e imparcialidad.' },
      { text:'¿Cuál es el primer requisito del artículo 62?', correct:'Superar el proceso selectivo', wrong:['Tomar posesión antes de aprobar','Renunciar al puesto anterior','Solicitar excedencia'], justification:'La adquisición comienza con la superación del proceso.' },
      { text:'¿Qué requisito debe publicarse en el diario oficial correspondiente?', correct:'El nombramiento', wrong:['La renuncia privada','La petición de vacaciones','El correo de bienvenida'], justification:'Artículo 62.1.b TREBEP.' },
      { text:'¿Cuál es una causa de pérdida de la condición de funcionario?', correct:'La separación firme del servicio', wrong:['Un cambio de unidad','Una comisión de servicios','Un permiso'], justification:'Artículo 63 TREBEP.' },
      { text:'¿La renuncia impide volver a ingresar en la Administración?', correct:'No, puede volver a ingresarse mediante proceso selectivo', wrong:['Sí, siempre','Solo permite empleo laboral privado','Impide participar durante diez años'], justification:'Artículo 64.3 TREBEP.' },
      { text:'¿Qué situación corresponde a quien presta ordinariamente servicios como funcionario?', correct:'Servicio activo', wrong:['Servicios especiales siempre','Excedencia forzosa','Inhabilitación'], justification:'Artículo 86 TREBEP.' },
      { text:'¿Cuál es una modalidad de excedencia del artículo 89?', correct:'Cuidado de familiares', wrong:['Comisión de servicios','Adscripción provisional','Libre designación'], justification:'El artículo 89 enumera sus modalidades.' },
      { text:'¿Qué situación priva temporalmente del ejercicio de funciones?', correct:'Suspensión de funciones', wrong:['Servicio activo','Servicio en otra Administración','Promoción interna'], justification:'Artículo 90 TREBEP.' },
      { text:'¿Se aplica el TREBEP a las universidades públicas?', correct:'Sí', wrong:['No, nunca','Solo a universidades privadas','Solo al alumnado'], justification:'El artículo 2 incluye expresamente a las universidades públicas.' }
    ]
  });

  applyTheme(11, {
    source: 'Real Decreto 364/1995 y Ley 53/1984 de Incompatibilidades',
    status: 'desarrollo jurídico revisado de ingreso, provisión, promoción interna e incompatibilidades',
    complete: true,
    summary: 'El tema une dos normas. El RD 364/1995 regula ingreso, provisión y promoción en la AGE; la Ley 53/1984 establece incompatibilidades del personal público. Deben estudiarse como bloques separados.',
    rigor: 'El concurso es el sistema normal de provisión y la libre designación exige convocatoria pública. La fase de concurso de una promoción interna nunca puede compensar ejercicios no superados de oposición.',
    blocks: [
      ['Ingreso y selección', [
        'El ingreso debe respetar igualdad, mérito, capacidad y publicidad. Las convocatorias y bases determinan requisitos, sistema, pruebas, programa, órgano de selección y reglas del proceso.',
        'Artículo 15 RD 364/1995. Las convocatorias, junto con sus bases, se publican en el BOE en el ámbito estatal regulado por el Reglamento.',
        'Los sistemas selectivos se ajustan a la naturaleza de las funciones y pueden incluir oposición, concurso-oposición y, excepcionalmente cuando proceda legalmente, concurso.',
        'Tras la relación de aprobados se acredita el cumplimiento de requisitos, se produce el nombramiento y la toma de posesión conforme a convocatoria y normativa.'
      ]],
      ['Provisión de puestos', [
        'Artículo 36 RD 364/1995. Los puestos se proveen por concurso, sistema normal, o libre designación cuando la relación de puestos lo determine por la naturaleza de sus funciones.',
        'El concurso valora méritos adecuados al puesto conforme al baremo de la convocatoria y es resuelto por el órgano competente con intervención de la comisión de valoración.',
        'Como regla del Reglamento, para concursar desde un destino definitivo se exige permanencia mínima de dos años, salvo excepciones previstas.',
        'La libre designación implica apreciación discrecional de la idoneidad dentro de requisitos y mediante convocatoria pública; el cese puede ser discrecional, con los efectos de adscripción previstos.'
      ]],
      ['Promoción interna', [
        'La promoción interna permite acceder a cuerpos o escalas superiores cumpliendo titulación, antigüedad y demás requisitos.',
        'Artículo 74 RD 364/1995. Se realiza por oposición o concurso-oposición con igualdad, mérito, capacidad y publicidad.',
        'La puntuación del concurso no puede utilizarse para superar ejercicios de oposición no aprobados.',
        'El TREBEP exige, con carácter general, al menos dos años de servicio activo en el subgrupo inferior para la promoción interna vertical.'
      ]],
      ['Incompatibilidades: regla general', [
        'Artículo 1 Ley 53/1984. Como regla, no puede compatibilizarse el puesto público con un segundo puesto, cargo o actividad en el sector público salvo supuestos legales.',
        'El reconocimiento de compatibilidad no puede alterar jornada u horario y queda condicionado al estricto cumplimiento de ambos puestos o actividades.',
        'La compatibilidad no es automática: cuando proceda requiere reconocimiento o autorización por el órgano competente.'
      ]],
      ['Actividades privadas y excepciones', [
        'Artículo 11 Ley 53/1984. No pueden ejercerse actividades privadas relacionadas directamente con las que desarrolla el departamento, organismo o entidad de destino.',
        'Son incompatibles las actividades que comprometan imparcialidad, independencia o cumplimiento de deberes, o impliquen intervención profesional en asuntos vinculados al puesto público.',
        'La Ley contempla actividades exceptuadas del régimen de incompatibilidades en sus términos, como determinadas actividades docentes ocasionales, creación literaria, participación en tribunales o colaboración excepcional, siempre dentro de sus límites.',
        'En examen debe diferenciarse actividad exceptuada de actividad compatible previa autorización.'
      ]]
    ],
    hot: [
      '• RD 364/1995: ingreso, provisión y promoción; Ley 53/1984: incompatibilidades.',
      '• Concurso: sistema normal de provisión.',
      '• Libre designación: convocatoria pública y apreciación discrecional de idoneidad.',
      '• Permanencia mínima general para concursar desde destino definitivo: dos años, con excepciones.',
      '• Promoción interna: oposición o concurso-oposición.',
      '• Méritos del concurso no salvan una oposición suspensa.',
      '• Segundo puesto público: prohibido como regla salvo supuestos legales.',
      '• Actividad privada relacionada directamente con el puesto: incompatible.',
      '• Compatibilidad reconocida no modifica jornada ni horario.',
      '• Actividad exceptuada y actividad autorizable no son lo mismo.'
    ],
    recall: [
      '1. ¿Qué diferencia existe entre ingreso, provisión y promoción interna?',
      '2. ¿Por qué el concurso es sistema normal y la libre designación no equivale a designación sin publicidad?',
      '3. ¿Qué comprobaciones harías antes de declarar compatible una actividad privada?'
    ],
    table: [
      ['Figura', 'Objeto', 'Clave'],
      ['Ingreso', 'Acceder a cuerpo o escala', 'Proceso selectivo'],
      ['Concurso', 'Proveer puesto', 'Sistema normal y valoración de méritos'],
      ['Libre designación', 'Proveer determinados puestos', 'Convocatoria pública e idoneidad'],
      ['Promoción interna', 'Acceder a cuerpo/escala superior', 'Igualdad, mérito y capacidad'],
      ['Compatibilidad', 'Autorizar segunda actividad', 'No altera jornada'],
      ['Actividad exceptuada', 'Fuera del régimen en supuestos legales', 'No confundir con autorización ordinaria']
    ],
    questions: [
      { text:'¿Dónde se publican las convocatorias estatales reguladas por el artículo 15 RD 364/1995?', correct:'En el Boletín Oficial del Estado', wrong:['Solo en un tablón interno','Únicamente en prensa privada','En cualquier red social'], justification:'El artículo 15 dispone publicación de convocatorias y bases en el BOE.' },
      { text:'¿Cuál es el sistema normal de provisión de puestos?', correct:'El concurso', wrong:['La libre designación en todo caso','El sorteo','La contratación menor'], justification:'Artículo 36 RD 364/1995.' },
      { text:'¿Qué caracteriza a la libre designación?', correct:'Convocatoria pública y apreciación discrecional de idoneidad', wrong:['Ausencia de requisitos','Nombramiento secreto','Acceso sin publicidad'], justification:'La discrecionalidad se ejerce dentro de convocatoria y requisitos.' },
      { text:'¿Cuál es la permanencia mínima general en destino definitivo para concursar según el Reglamento?', correct:'Dos años, salvo excepciones', wrong:['Seis meses sin excepción','Cinco años siempre','No existe ninguna permanencia'], justification:'El RD 364/1995 establece dos años como regla general con excepciones.' },
      { text:'¿Qué sistemas admite el artículo 74 para promoción interna?', correct:'Oposición o concurso-oposición', wrong:['Libre designación exclusivamente','Contrato privado','Subasta'], justification:'Artículo 74 RD 364/1995.' },
      { text:'¿Puede la puntuación de concurso compensar un ejercicio de oposición no superado?', correct:'No', wrong:['Sí, siempre','Solo en libre designación','Solo si hay vacantes'], justification:'El artículo 74 lo prohíbe expresamente.' },
      { text:'¿Qué antigüedad general exige el TREBEP para promoción interna vertical desde el subgrupo inferior?', correct:'Al menos dos años de servicio activo', wrong:['Tres meses','Diez años','Ninguna'], justification:'Artículo 18 TREBEP.' },
      { text:'¿Cuál es la regla general de la Ley 53/1984?', correct:'No compatibilizar un segundo puesto público salvo supuestos legales', wrong:['Compatibilidad automática','Prohibición solo para laborales','Libertad total de segunda actividad'], justification:'Artículo 1 Ley 53/1984.' },
      { text:'¿La compatibilidad puede modificar la jornada del puesto público?', correct:'No', wrong:['Sí, automáticamente','Solo por decisión del interesado','Siempre reduce la jornada a la mitad'], justification:'El reconocimiento se condiciona al cumplimiento de jornada y horario.' },
      { text:'¿Qué actividad privada está prohibida por el artículo 11?', correct:'La relacionada directamente con las funciones del organismo de destino', wrong:['Cualquier creación literaria','Toda actividad doméstica','Toda participación ocasional en tribunal'], justification:'El artículo 11 impide actividades privadas directamente relacionadas con el destino.' },
      { text:'¿Qué debe proteger el régimen de incompatibilidades?', correct:'Imparcialidad, independencia y cumplimiento de deberes', wrong:['La competencia comercial privada del empleado','La ausencia de publicidad','El interés particular frente al general'], justification:'La finalidad es evitar conflictos y asegurar dedicación e imparcialidad.' },
      { text:'¿Qué diferencia existe entre concurso y concurso-oposición?', correct:'El primero puede ser provisión por méritos; el segundo combina méritos y pruebas selectivas', wrong:['Son siempre idénticos','El concurso-oposición no tiene pruebas','El concurso nunca valora méritos'], justification:'Operan en contextos y con estructuras diferentes.' },
      { text:'¿Puede cesarse discrecionalmente a quien ocupa un puesto de libre designación?', correct:'Sí, con los efectos previstos legalmente', wrong:['No, nunca','Solo por sentencia penal','Solo si renuncia'], justification:'El RD 364/1995 prevé cese discrecional y adscripción posterior.' },
      { text:'¿Qué elemento debe contener una convocatoria?', correct:'Requisitos, sistema, pruebas y reglas del proceso', wrong:['Solo el nombre del órgano','Únicamente la tasa','Ningún criterio de valoración'], justification:'Las bases vinculan el proceso y deben definir sus elementos esenciales.' },
      { text:'¿Una actividad exceptuada equivale siempre a compatibilidad autorizada?', correct:'No, son categorías diferentes', wrong:['Sí, siempre','Solo en contratación','Solo para personal eventual'], justification:'Las actividades exceptuadas quedan fuera en sus términos; otras requieren autorización.' }
    ]
  });

  applyTheme(12, {
    source: 'Ley 31/1995, de Prevención de Riesgos Laborales',
    status: 'desarrollo jurídico revisado por artículos 1 a 4, 14 a 29 y 30 a 39',
    complete: true,
    summary: 'El tema se prepara como sistema preventivo: conceptos, derecho de protección, principios, evaluación y planificación, información y formación, obligaciones, organización preventiva y participación.',
    rigor: 'El derecho a protección eficaz genera un deber correlativo para el empleador y también para las Administraciones respecto de su personal. El coste preventivo no puede recaer en los trabajadores.',
    blocks: [
      ['Objeto, ámbito y definiciones', [
        'La Ley establece garantías y responsabilidades para proteger seguridad y salud frente a riesgos derivados del trabajo.',
        'Se aplica también al personal civil con relación administrativa o estatutaria al servicio de las Administraciones, con las peculiaridades legales.',
        'Artículo 4. Conceptos: prevención, riesgo laboral, daños derivados del trabajo, riesgo grave e inminente, procesos potencialmente peligrosos, equipo de trabajo, condición de trabajo y equipo de protección individual.'
      ]],
      ['Derecho de protección y principios', [
        'Artículo 14. Derecho a una protección eficaz y deber correlativo de protección. Incluye información, consulta, participación, formación, paralización ante riesgo grave e inminente y vigilancia de la salud.',
        'El coste de las medidas de seguridad y salud no puede recaer sobre los trabajadores.',
        'Artículo 15. Principios: evitar riesgos; evaluar los inevitables; combatirlos en origen; adaptar trabajo a la persona; considerar evolución técnica; sustituir lo peligroso; planificar; priorizar protección colectiva; dar instrucciones.'
      ]],
      ['Plan, evaluación y planificación', [
        'Artículo 16. La prevención se integra mediante plan de prevención, evaluación de riesgos y planificación de la actividad preventiva.',
        'La evaluación identifica y valora riesgos teniendo en cuenta actividad, puestos y personas especialmente sensibles. Debe revisarse cuando cambien condiciones o aparezcan daños.',
        'La planificación concreta medidas, responsables, recursos, plazos y prioridades y debe comprobarse su ejecución.'
      ]],
      ['Información, formación y emergencias', [
        'Artículo 18. Información sobre riesgos generales y específicos, medidas preventivas y medidas de emergencia; consulta y participación.',
        'Artículo 19. Formación teórica y práctica, suficiente y adecuada, al contratar y cuando cambien funciones, tecnologías o equipos; debe impartirse, cuando sea posible, dentro de jornada y sin coste.',
        'Artículo 20. Medidas de emergencia: primeros auxilios, lucha contra incendios, evacuación, personal encargado y coordinación externa.',
        'Artículo 21. Riesgo grave e inminente: información inmediata y posibilidad de interrumpir actividad y abandonar el lugar en los términos legales.'
      ]],
      ['Vigilancia, colectivos y obligaciones', [
        'Artículo 22. Vigilancia periódica de la salud, como regla con consentimiento, salvo excepciones legales; proporcionalidad, intimidad, confidencialidad y acceso restringido a datos médicos.',
        'Artículos 25 a 28. Protección de personas especialmente sensibles, maternidad, menores y relaciones temporales o de empresas de trabajo temporal.',
        'Artículo 29. El trabajador debe usar correctamente medios y equipos, utilizar protección, no inutilizar dispositivos, informar de riesgos y cooperar.'
      ]],
      ['Organización preventiva y participación', [
        'Artículo 30. Modalidades: trabajadores designados, servicio de prevención propio o servicio ajeno, según proceda. Deben contar con capacidad, medios y tiempo.',
        'Servicio de prevención: conjunto de medios humanos y materiales para actividades preventivas y asesoramiento.',
        'Artículos 33 a 37. Consulta previa y Delegados de Prevención como representantes especializados.',
        'Artículo 38. Comité de Seguridad y Salud: órgano paritario y colegiado; se constituye en empresas o centros con 50 o más trabajadores, con igual número de representantes de ambas partes.',
        'Se reúne trimestralmente y cuando lo solicite alguna representación. Artículo 39: participa en planes, propone mejoras, conoce documentos, daños y memoria preventiva.'
      ]]
    ],
    hot: [
      '• Artículo 14: protección eficaz y deber correlativo.',
      '• El coste preventivo nunca recae sobre el trabajador.',
      '• Artículo 15: protección colectiva antes que individual.',
      '• Evaluación identifica riesgos; planificación fija medidas, responsables y plazos.',
      '• Formación suficiente, adecuada y sin coste.',
      '• Vigilancia de la salud: consentimiento como regla y confidencialidad.',
      '• Artículo 29: obligaciones del trabajador.',
      '• Modalidades preventivas: designados, servicio propio o ajeno.',
      '• Comité de Seguridad y Salud: 50 o más trabajadores.',
      '• Comité paritario, colegiado y reunión trimestral.'
    ],
    recall: [
      '1. ¿Cuáles son los principios del artículo 15 y en qué orden lógico se aplican?',
      '2. ¿Qué diferencias existen entre evaluación de riesgos y planificación preventiva?',
      '3. ¿Cómo se componen y qué funciones tienen Delegados de Prevención y Comité de Seguridad y Salud?'
    ],
    table: [
      ['Elemento', 'Función', 'Dato clave'],
      ['Evaluación', 'Identifica y valora riesgos', 'Revisión ante cambios o daños'],
      ['Planificación', 'Fija medidas y ejecución', 'Responsables, recursos y plazos'],
      ['Formación', 'Capacita para el riesgo', 'Suficiente, adecuada y sin coste'],
      ['Vigilancia de salud', 'Control sanitario preventivo', 'Consentimiento como regla'],
      ['Delegado de Prevención', 'Representación especializada', 'Consulta y vigilancia'],
      ['Comité de Seguridad y Salud', 'Participación paritaria', '50 o más y reunión trimestral']
    ],
    questions: [
      { text:'¿Qué reconoce el artículo 14 LPRL?', correct:'El derecho a una protección eficaz', wrong:['El derecho a ignorar instrucciones','La exención de toda responsabilidad','La libre designación'], justification:'El artículo 14 reconoce protección eficaz y deber correlativo.' },
      { text:'¿Sobre quién recae el deber de protección?', correct:'Sobre el empleador y las Administraciones respecto de su personal', wrong:['Solo sobre el trabajador','Solo sobre la Inspección','Solo sobre los sindicatos'], justification:'El deber corresponde a quien organiza y dirige la actividad.' },
      { text:'¿Puede repercutirse al trabajador el coste de las medidas preventivas?', correct:'No', wrong:['Sí, siempre','Solo en formación','Solo si usa EPI'], justification:'El coste no puede recaer sobre los trabajadores.' },
      { text:'¿Cuál es el primer principio del artículo 15?', correct:'Evitar los riesgos', wrong:['Comprar EPI antes de evaluar','Sancionar al trabajador','Externalizar siempre'], justification:'La prevención comienza evitando los riesgos.' },
      { text:'¿Qué debe priorizarse?', correct:'La protección colectiva sobre la individual', wrong:['La individual sobre la colectiva','La producción sobre la seguridad','La improvisación'], justification:'Artículo 15.1.h LPRL.' },
      { text:'¿Qué instrumento identifica y valora los riesgos?', correct:'La evaluación de riesgos', wrong:['La nómina','El convenio de colaboración','La factura'], justification:'La evaluación determina riesgos y su magnitud.' },
      { text:'¿Qué debe contener la planificación preventiva?', correct:'Medidas, responsables, recursos, prioridades y plazos', wrong:['Solo una declaración genérica','Únicamente sanciones','Solo un organigrama'], justification:'La planificación convierte resultados en actuaciones ejecutables.' },
      { text:'¿Cómo debe ser la formación preventiva?', correct:'Teórica y práctica, suficiente y adecuada', wrong:['Solo voluntaria y de pago','Exclusivamente escrita','Idéntica para cualquier puesto'], justification:'Artículo 19 LPRL.' },
      { text:'¿Qué regula el artículo 20?', correct:'Medidas de emergencia', wrong:['Promoción interna','Incompatibilidades','Libre designación'], justification:'Primeros auxilios, incendios y evacuación.' },
      { text:'¿Cuál es la regla general en vigilancia de la salud?', correct:'Consentimiento del trabajador', wrong:['Publicidad total de datos','Obligatoriedad absoluta sin excepciones','Acceso libre del superior al diagnóstico'], justification:'Artículo 22, con excepciones legales.' },
      { text:'¿Quién puede conocer la información médica personal?', correct:'El personal sanitario y autoridades con acceso legal, respetando confidencialidad', wrong:['Cualquier compañero','Todo usuario de la web','Cualquier proveedor'], justification:'Los datos de salud tienen protección reforzada.' },
      { text:'¿Qué obligación tiene el trabajador?', correct:'Usar correctamente equipos y dispositivos de protección', wrong:['Inutilizar protecciones','Ocultar riesgos','Asumir el coste del EPI'], justification:'Artículo 29 LPRL.' },
      { text:'¿Qué opciones contempla el artículo 30?', correct:'Trabajadores designados, servicio propio o servicio ajeno', wrong:['Solo servicio ajeno','Solo inspección externa','Solo comité de empresa'], justification:'La organización preventiva admite varias modalidades.' },
      { text:'¿Cuándo debe constituirse Comité de Seguridad y Salud?', correct:'Con 50 o más trabajadores', wrong:['Con 5 o más','Solo con 500','Nunca en centros públicos'], justification:'Artículo 38.2 LPRL.' },
      { text:'¿Con qué periodicidad ordinaria se reúne el Comité?', correct:'Trimestralmente', wrong:['Diariamente','Una vez cada diez años','Solo tras accidente mortal'], justification:'Artículo 38.3 LPRL.' }
    ]
  });

  const links = [
    { label: 'BOE · TREBEP', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719' },
    { label: 'BOE · RD 364/1995', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-8729' },
    { label: 'BOE · Ley 53/1984', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-151' },
    { label: 'BOE · Ley 31/1995', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292' }
  ];
  ope.officialLinks ||= [];
  links.forEach(link => {
    if (!ope.officialLinks.some(x => x.url === link.url)) ope.officialLinks.push(link);
  });

  const all = Object.values(ope.themeTests).flat();
  ope.simulacros = [0, 61, 127].map((start, s) => ({
    id: `uc3m-v35-sim${s + 1}`,
    title: `Simulacro UC3M de contenido ${s + 1}`,
    questions: Array.from({ length: 70 }, (_, i) => ({
      ...all[(start + i * 23) % all.length],
      id: `uc3m-v35-sim${s + 1}-q${i + 1}`
    }))
  }));

  ope.version = '0.35.0';
  ope.status = `${(ope.status || '').replace(/ Revisión v0\.34:.*/, '')} Revisión v0.35: temas 9 a 12 revisados en profundidad con 60 preguntas nuevas de ofimática, empleo público, incompatibilidades y prevención.`;
  ope.changelog ||= [];
  if (!ope.changelog.some(item => item.version === '0.35.0')) {
    ope.changelog.unshift({
      version: '0.35.0',
      date: '2026-07-10',
      changes: [
        'Profundizados los temas 9 a 12',
        'Añadidas 60 preguntas manuales de contenido',
        'Completados TREBEP, RD 364/1995, incompatibilidades y prevención',
        'Ampliado Word, Excel y Google Workspace',
        'Regenerados simulacros de 70 preguntas'
      ]
    });
  }

  window.OPOWEB_UC3M_V35 = {
    version: 'v0.35.0',
    deepReviewed: [9,10,11,12],
    nextBatch: [13,14,16,17,20]
  };

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();