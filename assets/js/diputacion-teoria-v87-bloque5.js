(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-16';
  const sources = {
    edge: { label: 'Ayuda y aprendizaje de Microsoft Edge', reference: 'MS-EDGE-SUPPORT', url: 'https://support.microsoft.com/es-es/microsoft-edge' },
    edgePrivacy: { label: 'Privacidad y seguridad en Microsoft Edge', reference: 'MS-EDGE-PRIVACY', url: 'https://support.microsoft.com/es-es/microsoft-edge/privacidad-y-seguridad-en-microsoft-edge' },
    groupwise: { label: 'OpenText GroupWise', reference: 'OPENTEXT-GROUPWISE', url: 'https://www.opentext.com/products/groupwise' },
    groupwiseDocs: { label: 'Documentación oficial de GroupWise 24', reference: 'OPENTEXT-GW24-DOCS', url: 'https://www.microfocus.com/documentation/groupwise/groupwise-24/' },
    printers: { label: 'Instalar una impresora en Windows', reference: 'MS-W11-PRINTER', url: 'https://support.microsoft.com/es-es/windows/instalar-una-impresora-en-windows-cc0724cf-793e-3542-d1ff-727e4978638b' },
    scanner: { label: 'Instalar y usar un escáner en Windows', reference: 'MS-W11-SCANNER', url: 'https://support.microsoft.com/es-es/windows/instalar-y-usar-un-esc%C3%A1ner-en-windows-10-a97f2de3-271a-4a44-8f20-13f3e849ac6a' },
    printQueue: { label: 'Ver y cancelar trabajos de impresión en Windows', reference: 'MS-W11-PRINTQUEUE', url: 'https://support.microsoft.com/es-es/windows/ver-y-cancelar-trabajos-de-impresi%C3%B3n-en-windows-a40c5b6b-59a1-4e2a-b56d-4a05ff1a4c4f' }
  };

  const THEORY = {
    33: {
      sources: [sources.edge, sources.edgePrivacy, sources.groupwise, sources.groupwiseDocs],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema 33 combina dos herramientas distintas: Microsoft Edge como navegador web y GroupWise como plataforma corporativa de correo, calendario, contactos y tareas. En examen conviene separar ambos bloques y no confundir funciones del navegador con funciones del cliente de mensajería. Edge permite acceder a páginas, administrar pestañas, favoritos, historial, descargas, perfiles, permisos y privacidad. GroupWise organiza mensajes y elementos de colaboración dentro de un buzón corporativo, con carpetas, libreta de direcciones, calendario, reglas, firmas, adjuntos y opciones de seguimiento.',
          'La regla práctica es identificar siempre dónde se encuentra la información. Una página web se abre mediante una dirección URL en Edge. Un mensaje recibido se encuentra en el buzón de GroupWise. Un favorito guarda una referencia a una página, mientras que una carpeta de correo clasifica mensajes. El historial registra navegación; la carpeta Elementos enviados conserva mensajes remitidos. Las descargas son archivos guardados desde Internet y los adjuntos son archivos incorporados a un mensaje.'
        ]},
        { heading: 'Rigor técnico y terminológico', paragraphs: [
          'Edge utiliza una interfaz basada en pestañas. Cada pestaña mantiene una página y puede abrirse, duplicarse, fijarse, silenciarse, agruparse o cerrarse. La barra de direcciones sirve para introducir una URL o una búsqueda. Los botones Atrás, Adelante y Actualizar actúan sobre el historial de la pestaña. Una ventana privada InPrivate reduce el almacenamiento local de historial, cookies y datos de formularios al cerrar la sesión, pero no convierte la navegación en anónima frente al proveedor de red, la organización, el sitio visitado o los servicios de seguridad.',
          'GroupWise es una solución de mensajería y colaboración empresarial. El cliente puede mostrar buzón, elementos enviados, calendario, contactos, tareas, notas y carpetas personales o compartidas. Un elemento puede ser correo, cita, tarea, nota o mensaje telefónico según la configuración. Las operaciones disponibles dependen de la versión, de las políticas de la organización y de los derechos concedidos por el administrador. Por ello, una respuesta de examen debe distinguir una función estándar del producto de una opción condicionada por permisos.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Para navegar con Edge se introduce una dirección en la barra y se confirma. HTTPS indica que la comunicación entre navegador y sitio está cifrada mediante TLS, pero no garantiza por sí solo que el contenido sea legítimo. Debe comprobarse el dominio, el certificado cuando proceda, la ausencia de redirecciones sospechosas y la coherencia del sitio. Los avisos del navegador sobre certificados, descargas o reputación no deben ignorarse de forma automática. En un entorno administrativo se evita introducir credenciales o datos personales en páginas no autorizadas.',
          'Los favoritos permiten conservar enlaces y organizarlos en carpetas. Pueden importarse, exportarse o sincronizarse mediante un perfil cuando la política corporativa lo permita. El historial facilita recuperar páginas visitadas y puede borrarse total o parcialmente. Las descargas se gestionan desde su panel específico, desde donde puede abrirse la carpeta de destino, pausar, reanudar, eliminar del listado o borrar el archivo. Eliminar una entrada del historial de descargas no equivale necesariamente a borrar el archivo almacenado.',
          'Los perfiles separan favoritos, contraseñas, historial, extensiones y otros datos. En equipos corporativos puede existir un perfil de trabajo administrado. La sincronización transmite determinados datos entre dispositivos asociados a la misma cuenta, pero puede estar limitada por la organización. Las contraseñas guardadas requieren protección del perfil y del sistema operativo. No deben almacenarse credenciales institucionales en perfiles personales ni compartirse sesiones abiertas.',
          'Las cookies conservan información de sesión, preferencias o seguimiento. Los permisos del sitio controlan cámara, micrófono, ubicación, notificaciones, ventanas emergentes y descargas automáticas. Edge permite revisar y revocar estos permisos. El bloqueo de rastreadores y la eliminación de datos de navegación mejoran la privacidad, pero pueden cerrar sesiones o alterar el funcionamiento de servicios. Las extensiones añaden funciones al navegador y deben instalarse únicamente desde fuentes autorizadas, con revisión de permisos y necesidad real.',
          'En GroupWise, el buzón muestra los elementos recibidos y pendientes. Para redactar un correo se seleccionan destinatarios, asunto y cuerpo, se incorporan adjuntos cuando proceda y se envía. Los campos Para, CC y CCO tienen finalidades diferentes: Para identifica destinatarios principales; CC informa de forma visible a otros destinatarios; CCO oculta esas direcciones al resto. En comunicaciones masivas o con ciudadanos debe aplicarse la política de protección de datos y evitar exponer direcciones innecesariamente.',
          'Responder dirige una contestación al remitente; Responder a todos incluye a los destinatarios definidos por el sistema; Reenviar crea un nuevo envío basado en el mensaje recibido. Antes de usar Responder a todos debe comprobarse la necesidad de incluir a cada persona. Los adjuntos deben abrirse con cautela, especialmente si son ejecutables, documentos con macros o archivos inesperados. El correo corporativo no sustituye al registro administrativo cuando una norma exige presentación formal, asiento, sello de tiempo o constancia específica.',
          'GroupWise permite organizar mensajes mediante carpetas, categorías, reglas, búsqueda y vistas. Una regla puede mover, reenviar, responder, marcar o clasificar elementos cuando se cumplen condiciones. Debe diseñarse con prudencia para no ocultar comunicaciones relevantes. El archivado desplaza o conserva elementos según la configuración y no equivale necesariamente a una copia de seguridad. Vaciar la papelera puede impedir la recuperación ordinaria, sin perjuicio de políticas de retención del servidor.',
          'El calendario gestiona citas, reuniones, eventos de día completo y recordatorios. Una cita enviada puede requerir aceptación, rechazo o propuesta alternativa. La disponibilidad permite localizar franjas libres cuando el sistema y los permisos lo permiten. Las tareas incorporan fecha de inicio, vencimiento, prioridad y estado. Los contactos y grupos simplifican destinatarios frecuentes, pero deben mantenerse actualizados para evitar envíos erróneos.',
          'Las firmas pueden añadirse automáticamente a mensajes nuevos o respuestas. En un entorno público deben ajustarse a la identidad institucional y no incluir datos innecesarios. Las confirmaciones de entrega o lectura dependen del sistema y no siempre prueban que el destinatario haya comprendido el mensaje. Las delegaciones o accesos proxy permiten actuar sobre otro buzón con permisos expresos; nunca deben confundirse con compartir contraseña.',
          'En un supuesto práctico, ante un mensaje sospechoso se comprueba remitente real, dominio, enlaces, urgencia artificial y adjuntos. No se responde ni se habilita contenido. Se comunica por el canal de seguridad establecido. Ante un envío erróneo con datos personales, se detiene la difusión cuando sea posible y se informa al responsable conforme al procedimiento interno. La eficiencia nunca prevalece sobre la confidencialidad, integridad y trazabilidad.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Edge: URL, pestañas, favoritos, historial, descargas, perfiles, cookies, permisos, extensiones e InPrivate. GroupWise: buzón, enviados, carpetas, búsqueda, reglas, destinatarios, adjuntos, calendario, tareas, contactos, firmas y delegación. Diferencias clave: favorito no es archivo; historial no es caché; CCO oculta destinatarios; borrar del listado de descargas no siempre borra el archivo; correo corporativo no sustituye automáticamente al registro administrativo.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Funciones de barra de direcciones; HTTPS; diferencia entre pestaña y ventana; favoritos, historial y descargas; límites de InPrivate; permisos de sitio; perfiles; Para, CC y CCO; responder, responder a todos y reenviar; reglas y carpetas; cita frente a tarea; adjuntos sospechosos; firmas; confirmaciones; acceso proxy y diferencia entre correo y registro.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué datos deja de conservar Edge al cerrar InPrivate y qué información sigue siendo visible para terceros? ¿Qué diferencia operativa existe entre CC y CCO? ¿Por qué un mensaje enviado por GroupWise no acredita por sí solo un asiento registral administrativo?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Descarta respuestas absolutas como que InPrivate garantiza anonimato, que HTTPS acredita la legitimidad del contenido o que eliminar una descarga del historial borra siempre el archivo. En GroupWise, identifica primero el tipo de elemento y después la acción. En preguntas de seguridad, prioriza verificar, limitar destinatarios, proteger credenciales y usar canales institucionales.'
        ]}
      ],
      tree: 'Microsoft Edge y GroupWise\n├─ Edge\n│  ├─ URL, búsqueda y pestañas\n│  ├─ Favoritos, historial y descargas\n│  ├─ Perfiles y sincronización\n│  ├─ Cookies, permisos y extensiones\n│  └─ HTTPS, InPrivate y seguridad\n└─ GroupWise 24+\n   ├─ Buzón, enviados y carpetas\n   ├─ Para, CC, CCO y adjuntos\n   ├─ Responder, reenviar y reglas\n   ├─ Calendario, citas y tareas\n   ├─ Contactos, firmas y búsqueda\n   └─ Proxy, trazabilidad y seguridad',
      reviewTable: [
        ['Barra de direcciones', 'Introduce URL o búsqueda', 'Edge'],
        ['Favorito', 'Guarda una referencia a una página', 'No guarda necesariamente su contenido'],
        ['InPrivate', 'Reduce datos locales al cerrar', 'No garantiza anonimato'],
        ['HTTPS', 'Cifra la comunicación', 'No acredita por sí solo la legitimidad'],
        ['CCO', 'Oculta destinatarios al resto', 'Útil con criterio de minimización'],
        ['Responder a todos', 'Incluye destinatarios definidos', 'Debe revisarse antes de enviar'],
        ['Regla', 'Automatiza acciones sobre mensajes', 'Puede ocultar elementos si se configura mal'],
        ['Cita', 'Reserva o propone tiempo', 'Puede requerir respuesta'],
        ['Tarea', 'Trabajo con vencimiento y estado', 'No equivale a una cita'],
        ['Proxy', 'Acceso delegado autorizado', 'No implica compartir contraseña']
      ]
    },
    34: {
      sources: [sources.printers, sources.scanner, sources.printQueue],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema 34 estudia la salida en papel y la digitalización desde Windows 11. Imprimir transforma un documento digital en una salida física o en un archivo mediante una impresora física o virtual. Escanear transforma una imagen o documento físico en un archivo digital. Ambos procesos necesitan dispositivo, controlador, conexión, configuración y permisos adecuados. El examen suele preguntar por instalación, impresora predeterminada, cola, orientación, tamaño, calidad, doble cara, cancelación, resolución, formato y destino del escaneo.',
          'La respuesta práctica debe seguir un diagnóstico ordenado: comprobar alimentación y conexión; verificar que Windows detecta el dispositivo; seleccionar el equipo correcto; revisar papel, tinta, tóner o alimentador; examinar la cola; validar configuración; probar con una página o vista previa; y solo después reinstalar o actualizar el controlador.'
        ]},
        { heading: 'Rigor técnico y terminológico', paragraphs: [
          'Una impresora local puede conectarse por USB; una impresora de red se identifica mediante nombre, dirección o servicio de descubrimiento; una impresora compartida depende de otro equipo o servidor. El controlador traduce las órdenes del sistema al lenguaje del dispositivo. La cola de impresión conserva trabajos pendientes y el servicio de impresión los administra. Una impresora predeterminada es la seleccionada por defecto, aunque cada aplicación permite elegir otra.',
          'Un escáner plano captura documentos colocados sobre cristal; un alimentador automático procesa varias hojas; un equipo multifunción integra impresión y escaneo. La resolución se expresa habitualmente en puntos por pulgada. Aumentarla puede mejorar detalle, pero también eleva tamaño y tiempo. El color, escala de grises o blanco y negro debe elegirse según el original y la finalidad. PDF es adecuado para documentos multipágina; JPEG para fotografías; PNG para imágenes sin pérdidas y gráficos; TIFF puede emplearse en conservación o flujos especializados.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Windows 11 administra impresoras y escáneres desde Configuración, Bluetooth y dispositivos, Impresoras y escáneres. El sistema puede detectar automáticamente equipos conectados o permitir agregarlos manualmente. En redes corporativas la instalación puede depender de políticas, servidor de impresión o credenciales. La presencia del dispositivo en la lista no garantiza que esté disponible: puede estar sin conexión, pausado, con error, sin consumibles o con un trabajo bloqueado.',
          'Al imprimir desde una aplicación se eligen impresora, intervalo de páginas, número de copias, orientación, tamaño de papel, escala, color, calidad, bandeja y doble cara cuando el dispositivo lo admite. La vista previa ayuda a detectar márgenes, cortes, páginas en blanco o una escala incorrecta. Imprimir a PDF crea un archivo y no una copia física. El nombre y la ubicación de ese archivo deben seleccionarse expresamente.',
          'La orientación vertical sitúa el lado largo en sentido vertical; la horizontal resulta útil para tablas anchas. La impresión a doble cara puede ser automática o manual. Voltear por borde largo y por borde corto produce resultados diferentes y depende de la orientación. Intercalar ordena juegos completos cuando se imprimen varias copias. La escala Ajustar evita recortes, pero puede reducir legibilidad. El tamaño configurado debe coincidir con el papel cargado.',
          'La cola muestra documentos pendientes, su propietario, estado, tamaño y orden. Desde ella puede pausarse, reanudarse o cancelarse un trabajo. Cancelar no siempre detiene inmediatamente las páginas ya transferidas al dispositivo. Si un trabajo bloquea la cola, primero se intenta cancelarlo y reiniciar impresora y aplicación. En entornos administrados, reiniciar el servicio de cola o eliminar archivos del sistema requiere permisos y procedimiento técnico; no debe hacerse de forma improvisada.',
          'Los problemas habituales son dispositivo sin conexión, papel atascado, bandeja vacía, puerta abierta, falta de tinta o tóner, controlador incompatible, dirección de red cambiada, credenciales caducadas, cola pausada o impresora equivocada. Una página de prueba permite separar problemas del dispositivo y del documento. Si otras aplicaciones imprimen, el fallo puede estar en la aplicación o archivo. Si nadie imprime, debe revisarse red, servidor o equipo.',
          'Para escanear, Windows necesita detectar el escáner y disponer del controlador. Puede utilizarse la aplicación Escáner de Windows o el software autorizado del fabricante. Se selecciona origen —cristal o alimentador—, tipo de archivo, color, resolución, tamaño, destino y nombre. La vista previa permite recortar y alinear. Antes de aceptar el resultado se comprueba nitidez, orientación, integridad de todas las páginas y ausencia de información ajena.',
          'En documentos administrativos multipágina conviene mantener un orden estable, comprobar anversos y reversos y evitar páginas omitidas por doble alimentación. El reconocimiento óptico de caracteres convierte una imagen en texto buscable, pero puede cometer errores y no sustituye la verificación. Un PDF generado por escaneo puede ser solo imagen. Para accesibilidad, búsqueda o copia de texto puede requerirse OCR y revisión posterior.',
          'La resolución debe ser proporcional al uso. Para texto ordinario suele bastar una resolución moderada; sellos pequeños, planos o fotografías requieren más detalle. Escanear siempre a máxima resolución genera archivos innecesariamente grandes. La compresión reduce tamaño, pero una compresión excesiva degrada lectura. Debe respetarse el límite de la sede electrónica y conservarse legibilidad, integridad y orientación.',
          'La digitalización administrativa exige proteger datos personales. Los archivos temporales no deben dejarse en carpetas compartidas, escritorios públicos o memorias no autorizadas. El nombre del archivo debe ser descriptivo sin exponer más datos de los necesarios. Debe verificarse el destino antes de guardar o enviar. Si se digitaliza para incorporar a un expediente, deben aplicarse las reglas internas sobre metadatos, autenticidad, copia, formato y conservación.',
          'En un supuesto de impresión confidencial, se comprueba destinatario, impresora y ubicación física antes de enviar. Se recoge inmediatamente el documento y se destruyen borradores conforme a la política aplicable. En un escaneo, se revisa que no se hayan incluido hojas de otro expediente. La rapidez no justifica abandonar documentos en bandejas ni almacenar copias duplicadas sin control.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Impresión: instalación, controlador, impresora predeterminada, vista previa, páginas, copias, orientación, tamaño, escala, color, doble cara y cola. Escaneo: dispositivo, origen, resolución, color, formato, vista previa, OCR, nombre y destino. Diagnóstico: conexión, estado, consumibles, cola, configuración, prueba y controlador. Seguridad: minimizar copias, verificar destino y retirar documentos.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Impresora local, de red y compartida; controlador; cola; impresora predeterminada; imprimir a PDF; borde largo y corto; orientación; escala; intercalado; página de prueba; cristal y alimentador; resolución; PDF, JPEG, PNG y TIFF; OCR; doble alimentación; tamaño de archivo; confidencialidad y carpetas temporales.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué diferencia existe entre cancelar un trabajo y eliminar una impresora? ¿Qué factores determinan la resolución y el formato de un escaneo? ¿Qué comprobaciones deben realizarse antes de imprimir o guardar documentación confidencial?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Ante un fallo, elige la opción que sigue un diagnóstico gradual y evita reinstalar sin comprobar conexión, estado y cola. No confundas imprimir a PDF con escanear. En preguntas de resolución, descarta que más puntos por pulgada sean siempre mejores. En seguridad, la respuesta correcta suele incluir verificar impresora o carpeta de destino y retirar o proteger el resultado.'
        ]}
      ],
      tree: 'Impresión y escaneado en Windows 11\n├─ Impresión\n│  ├─ Instalación y controlador\n│  ├─ Local, red y compartida\n│  ├─ Predeterminada y propiedades\n│  ├─ Páginas, copias, escala y color\n│  ├─ Doble cara, bandeja e intercalado\n│  └─ Cola, pausa, cancelación y diagnóstico\n└─ Escaneado\n   ├─ Cristal y alimentador\n   ├─ Resolución, color y recorte\n   ├─ PDF, JPEG, PNG y TIFF\n   ├─ OCR y documento buscable\n   ├─ Nombre, carpeta y tamaño\n   └─ Revisión, protección y expediente',
      reviewTable: [
        ['Controlador', 'Comunica Windows con el dispositivo', 'Puede ser específico del fabricante'],
        ['Cola', 'Gestiona trabajos pendientes', 'Permite pausar o cancelar'],
        ['Predeterminada', 'Se elige por defecto', 'Puede cambiarse en cada impresión'],
        ['Imprimir a PDF', 'Genera un archivo', 'No produce papel'],
        ['Borde largo', 'Encuadernación habitual tipo libro', 'Depende de orientación'],
        ['Página de prueba', 'Ayuda a aislar el fallo', 'No valida el documento original'],
        ['ADF', 'Alimentador automático', 'Puede sufrir doble alimentación'],
        ['Resolución', 'Determina detalle de captura', 'Más resolución implica más tamaño'],
        ['OCR', 'Convierte imagen en texto reconocible', 'Requiere revisión'],
        ['PDF', 'Adecuado para multipágina', 'Puede contener imagen o texto']
      ]
    }
  };

  function wordCount(theme) {
    return [...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]), theme.tree || '', ...(theme.reviewTable || []).flat()].join(' ').trim().split(/\s+/).filter(Boolean).length;
  }

  for (const [numberText, theory] of Object.entries(THEORY)) {
    const number = Number(numberText);
    const theme = ope.themes?.find(item => Number(item.number) === number);
    if (!theme) continue;
    theme.sections = theory.sections;
    theme.tree = theory.tree;
    theme.reviewTable = theory.reviewTable;
    theme.officialSources = theory.sources;
    theme.theoryStatus = {
      autonomous: true,
      programmeLiteral: true,
      reviewedAt: REVIEW_DATE,
      words: wordCount(theory),
      sourcePolicy: 'Documentación oficial de Microsoft y OpenText/Micro Focus'
    };
  }

  const completed = Array.from({ length: 10 }, (_, index) => index + 25);
  const pending = Array.from({ length: 6 }, (_, index) => index + 35);
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
    block: 5,
    completedThemes: completed,
    pendingThemes: pending,
    reviewedAt: REVIEW_DATE,
    numberingCheck: { edgeGroupWiseTheme: 33, printScanTheme: 34 }
  };
})();