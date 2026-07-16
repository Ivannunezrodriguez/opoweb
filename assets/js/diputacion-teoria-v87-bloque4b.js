(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;
  const REVIEW_DATE = '2026-07-16';
  const theory = {
    sources: [{ label: "Microsoft Learn: copy en Windows 11", reference: "MS-LEARN-W11-COPY", url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/copy" }, { label: "Microsoft Learn: move en Windows 11", reference: "MS-LEARN-W11-MOVE", url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/move" }, { label: "Microsoft Learn: del en Windows 11", reference: "MS-LEARN-W11-DEL", url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/del" }, { label: "Microsoft Learn: mkdir en Windows 11", reference: "MS-LEARN-W11-MKDIR", url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/mkdir" }, { label: "Microsoft Learn: dir en Windows 11", reference: "MS-LEARN-W11-DIR", url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/dir" }, { label: "Microsoft Learn: Robocopy en Windows 11", reference: "MS-LEARN-W11-ROBOCOPY", url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy" }],
    sections: [
      { heading: "Resumen orientado al aprobado", paragraphs: ["El tema 32 trata la gestión cotidiana de archivos y carpetas en Microsoft Windows 11 Pro y la diferencia entre unidades locales y unidades de red. El núcleo práctico es saber localizar un documento, interpretar su ruta, crear una estructura ordenada, copiar, mover, renombrar y borrar sin perder información ni vulnerar permisos. En examen conviene pensar siempre en tres elementos: objeto seleccionado, origen y destino. La mayoría de errores se producen por no distinguir copia de movimiento, archivo de acceso directo, carpeta local de recurso compartido o eliminación recuperable de eliminación permanente.",
          "El Explorador de archivos es la herramienta gráfica principal para recorrer el sistema de archivos. Puede abrirse desde su icono, desde Inicio o mediante Windows+E. La interfaz puede cambiar ligeramente con actualizaciones, pero conserva elementos estables: panel de navegación, zona de contenido, barra de direcciones, cuadro de búsqueda y comandos para crear, copiar, cortar, pegar, cambiar nombre, compartir, ordenar, mostrar propiedades o eliminar. La barra de direcciones muestra la ubicación actual y permite entender la jerarquía. El panel de navegación facilita saltar entre Inicio, carpetas conocidas, Este equipo, unidades y ubicaciones de red."] },
      { heading: "Rigor normativo", paragraphs: ["Un archivo es una unidad de información almacenada con nombre y, normalmente, extensión. La extensión ayuda a Windows a asociarlo con una aplicación, pero no garantiza su contenido real. Una carpeta o directorio organiza archivos y otras carpetas. La ruta identifica la ubicación: puede ser absoluta, como C:\\Usuarios\\Nombre\\Documentos\\Informe.odt, o relativa respecto de una carpeta de trabajo. En una ruta de Windows la letra seguida de dos puntos identifica una unidad y la barra inversa separa niveles. En recursos de red es frecuente la ruta UNC, como \\\\servidor\\recurso\\expedientes.",
          "Los nombres deben ser descriptivos, breves y coherentes. No conviene ocultar las extensiones durante tareas de control, porque Informe.pdf.exe no es lo mismo que Informe.pdf. Windows impide ciertos caracteres reservados y nombres especiales. Dos archivos con el mismo nombre y extensión no pueden coexistir en una misma carpeta, aunque sí en carpetas distintas. Al renombrar debe evitarse alterar accidentalmente la extensión. Cambiar una extensión no convierte el contenido: renombrar un .docx como .pdf no realiza una conversión.",
          "Para crear una carpeta puede utilizarse el comando Nuevo, el menú contextual o Ctrl+Mayús+N. La nueva carpeta debe situarse en la ubicación correcta antes de nombrarla. Una estructura administrativa útil separa ejercicio, procedimiento y fase, por ejemplo Expedientes\\2026\\Contratación\\En_tramitación. No debe multiplicarse innecesariamente la profundidad ni utilizar nombres ambiguos como “varios”, “nuevo” o “definitivo2”. La documentación oficial de Microsoft confirma que mkdir crea directorios y subdirectorios, y puede generar de una vez los niveles intermedios de una ruta cuando están habilitadas las extensiones de comandos."] },
      { heading: "Desarrollo completo del epígrafe oficial", paragraphs: ["Seleccionar correctamente es previo a cualquier operación. Un clic selecciona un elemento; Ctrl permite seleccionar elementos no contiguos; Mayús selecciona un intervalo; Ctrl+A selecciona todo el contenido de la vista. Antes de borrar o mover en bloque conviene revisar la barra de estado, el número de elementos y el destino. La búsqueda no equivale a la ubicación física: un resultado puede proceder de otra carpeta, de una unidad de red o de almacenamiento sincronizado. Es recomendable abrir la ubicación del archivo antes de ejecutar una operación irreversible.",
          "Copiar crea una segunda instancia en el destino y conserva el original. Puede hacerse con Copiar y Pegar, Ctrl+C y Ctrl+V, arrastre cuando el sistema lo interpreta como copia, o herramientas de línea de comandos. Microsoft define copy como la copia de uno o varios archivos desde una ubicación a otra. Deben comprobarse espacio disponible, permisos de lectura en origen y escritura en destino, nombre, extensión y fecha. Si ya existe un archivo con el mismo nombre, Windows puede pedir reemplazar, omitir o conservar ambos con nombre distinto. Reemplazar puede destruir la versión anterior.",
          "Mover cambia la ubicación lógica del elemento. Mediante Cortar y Pegar o Ctrl+X y Ctrl+V, el archivo desaparece del origen cuando la operación concluye correctamente. Microsoft define move como el traslado de uno o varios archivos entre directorios y también permite renombrar directorios. Dentro de una misma unidad, el sistema puede actualizar principalmente referencias del sistema de archivos; entre unidades diferentes suele realizar una copia seguida de eliminación. Para el usuario, lo importante es no dar por finalizado el traslado hasta comprobar el destino, especialmente en red o con archivos grandes.",
          "El arrastre con ratón puede copiar, mover o crear un acceso directo según origen, destino y teclas modificadoras. Por ello, en una prueba práctica es más seguro usar comandos explícitos de copiar o cortar. Un acceso directo no es el archivo original: contiene una referencia a otra ubicación. Borrar el acceso directo no borra normalmente el original, y mover el original puede dejar el acceso sin destino. La flecha del icono y las propiedades ayudan a distinguirlo.",
          "Eliminar desde el Explorador suele enviar el elemento a la Papelera de reciclaje cuando la unidad y la configuración lo permiten. Desde allí puede restaurarse o vaciarse. Mayús+Supr solicita una eliminación que omite la Papelera. Los archivos eliminados desde determinadas unidades de red, soportes extraíbles, aplicaciones o tamaños pueden no pasar por ella. Microsoft advierte que el comando del elimina archivos sin posibilidad de recuperación mediante ese mecanismo. Antes de una eliminación masiva deben comprobarse selección, ruta, copias de seguridad y obligaciones de conservación documental.",
          "La Papelera no es una copia de seguridad. Tiene capacidad limitada, puede vaciarse y no preserva todas las ubicaciones. Tampoco sustituye un sistema de gestión documental, control de versiones o archivo electrónico. En expedientes administrativos debe respetarse la política de conservación y no eliminar documentos por mera duplicidad aparente. Una copia local de trabajo puede no ser el original registrado. La decisión de borrar exige saber cuál es la versión oficial, quién tiene competencia y si existe bloqueo legal o técnico.",
          "Las propiedades muestran tipo, tamaño, ubicación, fechas y atributos. Los atributos de solo lectura, oculto, sistema o archivo no son equivalentes a permisos. “Solo lectura” puede dificultar modificaciones, pero no concede por sí mismo confidencialidad. Los permisos NTFS controlan lectura, escritura, modificación y control total para usuarios o grupos. En una carpeta compartida intervienen además permisos del recurso compartido y políticas de red. El resultado efectivo depende de la combinación aplicable y del principio de mínimo privilegio.",
          "Una unidad local está gestionada directamente por el equipo o conectada físicamente a él y suele representarse por una letra, como C: o D:. Puede ser disco interno, partición, memoria USB o disco externo. La letra no indica por sí sola el tipo ni la seguridad. “Este equipo” permite ver unidades, capacidad y espacio libre. Antes de copiar grandes volúmenes debe verificarse que el sistema de archivos admite el tamaño y que existe espacio. La extracción de soportes removibles debe realizarse de forma segura cuando haya operaciones pendientes.",
          "Una ubicación de red reside en otro equipo, servidor o dispositivo accesible mediante la red. Puede abrirse con una ruta UNC, como \\\\servidor\\recurso, o asignarse a una letra para que aparezca como unidad. La unidad asignada es una referencia al recurso remoto, no una copia local. Requiere conectividad, nombre de servidor resoluble, recurso disponible y credenciales o permisos. Desconectar la unidad asignada elimina la asociación local, pero no borra los archivos del servidor.",
          "En una unidad de red las operaciones pueden ser más lentas y sensibles a interrupciones. No debe cerrarse la ventana ni apagar el equipo hasta confirmar que la copia terminó. Las aplicaciones pueden bloquear archivos abiertos por otros usuarios. La ausencia de un archivo puede deberse a filtros, falta de permisos, caché, sincronización o ruta equivocada. Robocopy, documentado por Microsoft para Windows 11, permite copias robustas, reanudables y con registro, pero opciones como /mir o /purge pueden borrar elementos del destino y solo deben usarse con conocimiento y pruebas previas.",
          "Las rutas de red y las letras asignadas no son universales. Un usuario puede tener Z: asociada a \\\\servidor\\común y otro no tenerla o usar otra letra. Para instrucciones reproducibles es preferible indicar la ruta UNC y, en su caso, la letra asignada. Las credenciales no deben incrustarse en archivos públicos ni compartirse. Si el usuario carece de acceso, debe solicitar autorización; copiar datos a una ubicación local para evitar permisos puede vulnerar seguridad y protección de datos.",
          "La búsqueda del Explorador puede utilizar nombre, parte del nombre, extensión y otros criterios disponibles. Ordenar cambia la presentación, no la ubicación. Agrupar tampoco mueve archivos. Mostrar elementos ocultos revela archivos con ese atributo, pero no otorga acceso a contenido protegido. La vista Detalles es útil para comparar nombre, fecha, tipo y tamaño. El comando dir, aplicable a Windows 11 según Microsoft, lista archivos y subdirectorios y permite filtrar por atributos, ordenar y recorrer subcarpetas; sirve como apoyo para verificar una estructura o una selección antes de borrar.",
          "En conflictos de nombres debe decidirse con criterio. Reemplazar sobrescribe el destino; omitir conserva el existente; cambiar nombre conserva ambas versiones. La fecha “modificado” no siempre basta para decidir cuál es correcta, porque una copia, descarga o conversión puede cambiar metadatos. Debe abrirse el documento o comprobarse versión, tamaño, autor y contenido. En expedientes compartidos es preferible una convención de nombres y control de versiones a acumular archivos “final”, “final2” y “final definitivo”.",
          "Método práctico: primero identifica la ubicación exacta; segundo comprueba si es local, extraíble o red; tercero selecciona los elementos; cuarto decide crear, copiar, mover, renombrar o eliminar; quinto verifica permisos, espacio y conflicto de nombres; sexto ejecuta con comando explícito; séptimo comprueba el resultado y conserva justificante o registro cuando proceda. Las preguntas trampa suelen confundir cortar con copiar, ordenar con mover, acceso directo con original, atributo con permiso, unidad asignada con disco local y Papelera con copia de seguridad."] },
      { heading: "Síntesis de repaso rápido", paragraphs: ["Archivo y carpeta se localizan mediante una ruta. Copiar conserva el original; mover cambia de ubicación; renombrar no convierte formatos; eliminar puede pasar por Papelera o ser permanente. Una unidad local pertenece o está conectada al equipo; una unidad de red referencia un recurso remoto mediante ruta UNC o letra asignada. Los permisos, el espacio, la conectividad y los conflictos de nombre deben comprobarse antes de operar."] },
      { heading: "Opo-Test: puntos calientes", paragraphs: ["Windows+E; ruta absoluta y UNC; extensión y tipo real; Ctrl, Mayús y Ctrl+A; Ctrl+C, Ctrl+X y Ctrl+V; Ctrl+Mayús+N; copia frente a movimiento; acceso directo frente a original; Papelera frente a eliminación permanente; atributos frente a permisos; unidad local, extraíble y de red; letra asignada; conflicto de nombres; espacio disponible; archivos bloqueados; Robocopy y riesgo de /mir o /purge."] },
      { heading: "Tres preguntas de retención activa", paragraphs: ["¿Qué diferencia práctica existe entre copiar, mover y crear un acceso directo? ¿Qué ocurre al desconectar una unidad de red asignada? ¿Por qué la Papelera de reciclaje no puede considerarse una copia de seguridad ni un sistema de archivo administrativo?"] },
      { heading: "Estrategia de examen", paragraphs: ["Antes de ejecutar una orden, verbaliza: qué objeto está seleccionado, dónde está, cuál es el destino y qué resultado se espera. Utiliza copiar o cortar de forma explícita en lugar de confiar en el arrastre. Tras la operación, abre el destino, cuenta los elementos y comprueba nombre, extensión, tamaño y permisos."] }
    ],
    tree: "Windows 11 Pro: archivos, carpetas y unidades\n├─ Explorador de archivos\n│  ├─ Panel de navegación\n│  ├─ Barra de direcciones\n│  ├─ Búsqueda y vistas\n│  └─ Selección de elementos\n├─ Estructura\n│  ├─ Archivo, extensión y tipo\n│  ├─ Carpeta y subcarpeta\n│  ├─ Ruta absoluta\n│  └─ Ruta UNC\n├─ Operaciones\n│  ├─ Crear y renombrar\n│  ├─ Copiar y pegar\n│  ├─ Cortar y mover\n│  └─ Eliminar y restaurar\n├─ Control\n│  ├─ Conflictos de nombres\n│  ├─ Atributos y permisos\n│  ├─ Espacio y bloqueos\n│  └─ Comprobación del resultado\n├─ Unidades\n│  ├─ Local interna\n│  ├─ Extraíble\n│  ├─ Recurso de red\n│  └─ Unidad de red asignada\n└─ Seguridad administrativa\n   ├─ Conservación documental\n   ├─ Copia de seguridad\n   ├─ Mínimo privilegio\n   └─ Registro y trazabilidad",
    reviewTable: [["Operación", "Resultado", "Control"],
        ["Crear carpeta", "Añade un directorio en la ubicación elegida", "Ruta y nombre"],
        ["Copiar", "Conserva origen y crea copia en destino", "Espacio, permisos y conflicto"],
        ["Mover", "Cambia la ubicación y desaparece del origen al concluir", "Destino y cierre correcto"],
        ["Renombrar", "Cambia el nombre, no el formato", "No alterar extensión por error"],
        ["Eliminar", "Puede pasar por Papelera o ser permanente", "Unidad y configuración"],
        ["Acceso directo", "Referencia al original", "No confundir con el archivo"],
        ["Unidad local", "Almacenamiento gestionado o conectado al equipo", "Letra, capacidad y sistema"],
        ["Ruta UNC", "Acceso directo a un recurso de red", "Servidor, recurso y permisos"],
        ["Unidad asignada", "Letra asociada a recurso remoto", "No es una copia local"],
        ["Atributos", "Solo lectura, oculto, sistema, archivo", "No equivalen a permisos"],
        ["Robocopy", "Copia robusta y reanudable", "Cuidado con /mir y /purge"]]
  };
  const theme = ope.themes?.find(item => Number(item.number) === 32);
  if (!theme) return;
  theme.sections = theory.sections;
  theme.tree = theory.tree;
  theme.reviewTable = theory.reviewTable;
  theme.officialSources = theory.sources;
  theme.theoryStatus = {
    autonomous: true,
    programmeLiteral: true,
    reviewedAt: REVIEW_DATE,
    words: [...theory.sections.flatMap(section => [section.heading, ...section.paragraphs]), theory.tree, ...theory.reviewTable.flat()].join(' ').trim().split(/\s+/).filter(Boolean).length,
    sourcePolicy: 'Documentación técnica oficial de Microsoft aplicable a Windows 11.'
  };

  const completed = [25, 26, 27, 28, 29, 30, 31, 32];
  const pending = Array.from({ length: 8 }, (_, index) => index + 33);
  ope.theoryProgramme = ope.theoryProgramme || {};
  ope.theoryProgramme.v87 = {
    status: 'EN_PROGRESO',
    scope: 'Temas 25 a 40 de Diputación de Toledo',
    completedThemes: completed,
    pendingThemes: pending,
    autonomousThemes: completed.length,
    totalThemes: 16,
    reviewedAt: REVIEW_DATE,
    editorialPolicy: 'OpoWeb como fuente teórica principal; fuentes oficiales para vigencia y trazabilidad.'
  };

  window.OPOWEB_DIPUTACION_THEORY_V87 = {
    status: 'EN_PROGRESO',
    block: 4,
    completedThemes: completed,
    pendingThemes: pending,
    minimumWords: Math.min(...[31, 32].map(number => ope.themes.find(item => Number(item.number) === number)?.theoryStatus?.words || 0)),
    reviewedAt: REVIEW_DATE,
    numberingCheck: {
      oapgtTheme: 22,
      ibiIaeTheme: 29,
      ivtmIivtnuTasasTheme: 30,
      electronicTrustTheme: 31,
      windowsFilesTheme: 32
    }
  };
  window.OPOWEB_DIPUTACION_THEORY_V87_B4B = {
    theme: 32,
    words: theme.theoryStatus.words,
    reviewedAt: REVIEW_DATE
  };
})();
