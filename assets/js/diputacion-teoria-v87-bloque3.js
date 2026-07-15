(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = 'v0.87.0';
  const REVIEW_DATE = '2026-07-15';
  const BOP = {
    label: 'BOP Toledo núm. 118, de 25 de junio de 2026, convocatoria Administrativo/a C1',
    reference: 'BOP-TO-118-2026-2934',
    url: 'https://bop.diputoledo.es/',
    reviewedAt: REVIEW_DATE
  };
  const MICROSOFT_FILES = {
    label: 'Microsoft Support: File Explorer in Windows',
    reference: 'MS-SUPPORT-FILE-EXPLORER',
    url: 'https://support.microsoft.com/en-US/Windows/Experience/FileExplorer/file-explorer-in-windows',
    reviewedAt: REVIEW_DATE
  };
  const MICROSOFT_NETWORK = {
    label: 'Microsoft Support: map a network drive in Windows',
    reference: 'MS-SUPPORT-NETWORK-DRIVE',
    url: 'https://support.microsoft.com/en-us/windows/map-a-network-drive-in-windows-29ce55d1-34e3-a7f2-66f0-1e609b8a8bcb',
    reviewedAt: REVIEW_DATE
  };
  const MICROSOFT_EDGE_HISTORY = {
    label: 'Microsoft Support: view and delete browser history in Microsoft Edge',
    reference: 'MS-SUPPORT-EDGE-HISTORY',
    url: 'https://support.microsoft.com/en-US/edge/view-and-delete-browser-history-in-microsoft-edge',
    reviewedAt: REVIEW_DATE
  };
  const MICROSOFT_EDGE_PRIVATE = {
    label: 'Microsoft Support: browse InPrivate in Microsoft Edge',
    reference: 'MS-SUPPORT-EDGE-INPRIVATE',
    url: 'https://support.microsoft.com/en-US/edge/browse-inprivate-in-microsoft-edge',
    reviewedAt: REVIEW_DATE
  };
  const GROUPWISE = {
    label: 'OpenText/Novell: GroupWise 24 documentation and Client User Guide',
    reference: 'OPENTEXT-GROUPWISE-24',
    url: 'https://www.novell.com/documentation/groupwise24/',
    reviewedAt: REVIEW_DATE
  };
  const MICROSOFT_PRINT = {
    label: 'Microsoft Support: printing and scanning in Windows',
    reference: 'MS-SUPPORT-WINDOWS-PRINT-SCAN',
    url: 'https://support.microsoft.com/windows',
    reviewedAt: REVIEW_DATE
  };

  const THEORY = {
    32: {
      title: 'Microsoft Windows 11 Pro I. Creación, copiado y borrado de archivos y carpetas. Las unidades de discos locales y de red.',
      sources: [BOP, MICROSOFT_FILES, MICROSOFT_NETWORK],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'Este tema exige dominar la gestión ordinaria de la información en Windows 11 Pro: qué es un archivo, qué es una carpeta, cómo se identifican por nombre, extensión, ruta y ubicación, y qué efectos producen crear, copiar, mover, renombrar y borrar. No basta con reconocer iconos. En un test o supuesto se debe distinguir si la operación conserva el original, cambia su ubicación, altera solamente el nombre o elimina el elemento.',
          'El segundo bloque diferencia unidades locales y unidades de red. Una unidad local pertenece o está conectada directamente al equipo; una ubicación de red reside en un recurso compartido accesible mediante la red y sujeto a conectividad, autenticación y permisos. Una carpeta de red puede abrirse mediante una ruta UNC o asignarse a una letra de unidad. La letra facilita el acceso, pero no convierte el recurso remoto en almacenamiento local.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El título se reproduce literalmente del programa del BOP de Toledo núm. 118, de 25 de junio de 2026. La explicación funcional se apoya en la documentación oficial de Microsoft para el Explorador de archivos de Windows 11 y para la conexión de unidades de red. Las denominaciones de botones pueden variar por actualización, idioma, configuración corporativa o directiva de la organización; por ello se estudian las operaciones y sus efectos, no una posición visual inmutable.',
          'En la práctica administrativa, gestionar archivos implica además respetar la Ley Orgánica 3/2018, el Reglamento General de Protección de Datos, las reglas de seguridad del organismo y el expediente electrónico. El sistema operativo permite realizar una acción, pero la autorización para ejecutarla depende de la competencia, los permisos y la finalidad del tratamiento. Copiar un expediente a un dispositivo personal o borrar documentación sin procedimiento puede ser técnicamente posible y jurídicamente incorrecto.',
          'La documentación oficial de Microsoft indica que el Explorador permite encontrar, abrir, organizar y administrar archivos y carpetas; ofrece acciones de cortar, copiar, pegar, renombrar y eliminar, muestra ubicaciones del equipo y de red y permite visualizar extensiones. Estas funciones constituyen la base verificable del tema.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Un archivo es una unidad lógica de información almacenada con un nombre. Puede contener texto, datos, imágenes, audio, vídeo, código o una combinación de elementos. Una carpeta es un contenedor lógico que organiza archivos y otras carpetas. La carpeta no equivale al contenido: mover o eliminar una carpeta afecta a los elementos que contiene conforme a la operación realizada y a los permisos disponibles.',
          'El nombre identifica el elemento dentro de una ubicación. La extensión, normalmente situada después del último punto, orienta sobre el formato y la aplicación asociada: .pdf, .docx, .odt, .xlsx, .ods, .jpg o .zip. La extensión no garantiza por sí sola el contenido real y no debe cambiarse para convertir formatos. Windows puede ocultar extensiones conocidas; para trabajar con seguridad conviene saber mostrarlas y comprobar el tipo efectivo antes de abrir un adjunto.',
          'La ruta describe la ubicación. Una ruta local puede comenzar por una letra de unidad, como C:\\, seguida de carpetas y subcarpetas. Una ruta de red UNC adopta la forma \\\\servidor\\recurso\\carpeta. La ruta completa incluye la jerarquía hasta el archivo. Dos archivos pueden tener el mismo nombre si están en carpetas distintas, pero no pueden coexistir con idéntico nombre en una misma carpeta cuando el sistema de archivos no distingue otro atributo que los diferencie.',
          'Crear una carpeta genera un contenedor vacío en la ubicación seleccionada. Crear un archivo puede hacerse desde una aplicación o, para determinados tipos, desde el menú contextual. Antes de guardar se debe elegir ubicación, nombre y formato. En un entorno administrativo son útiles convenciones de nombre que incluyan expediente, fecha o versión sin incorporar datos personales innecesarios.',
          'Copiar crea otro ejemplar en una ubicación de destino y conserva el original. Cortar y pegar, o mover, traslada el elemento: tras completarse correctamente, deja de estar en la ubicación de origen y aparece en la de destino. Arrastrar puede copiar o mover según origen, destino y teclas modificadoras, por lo que en examen no debe asumirse un efecto universal del arrastre. La operación debe verificarse por el resultado, no solo por la animación.',
          'Renombrar modifica el nombre, no el contenido ni necesariamente el formato. Cambiar únicamente la extensión puede hacer que la aplicación asociada no reconozca el archivo, sin transformar su estructura interna. Guardar como crea normalmente un documento con otro nombre, ubicación o formato, mientras Guardar actualiza el archivo abierto. En documentos oficiales debe evitarse sobrescribir accidentalmente la versión firmada o definitiva.',
          'Eliminar en una unidad local suele enviar el elemento a la Papelera de reciclaje, desde donde puede restaurarse mientras no se vacíe y exista soporte para esa operación. La eliminación con combinación permanente, desde ciertas unidades externas o desde recursos de red puede no pasar por la Papelera. Por ello no es correcto afirmar que todo archivo borrado es siempre recuperable ni que todo borrado es inmediatamente irreversible.',
          'La Papelera es un mecanismo de recuperación, no un sistema de archivo ni una copia de seguridad. Restaurar devuelve el elemento a su ubicación original si esta continúa disponible. Vaciar la Papelera libera referencias y espacio, pero la política de destrucción segura puede exigir procedimientos adicionales. La conservación documental se rige por las reglas del expediente y no por la permanencia casual en la Papelera.',
          'Las unidades locales comprenden volúmenes internos o conectados al equipo, como SSD, HDD o dispositivos extraíbles. Se representan normalmente mediante letras y contienen un sistema de archivos. La unidad del sistema suele alojar Windows y los perfiles de usuario. El espacio libre, el sistema de archivos, el cifrado y los permisos condicionan las operaciones. Un dispositivo USB es local mientras está conectado, pero su movilidad incrementa riesgos de pérdida, malware y fuga de información.',
          'Una unidad de red representa un recurso compartido en un servidor u otro dispositivo. Puede accederse directamente por UNC o mapearse a una letra. Para usarla se necesita conectividad y, normalmente, credenciales o una sesión de dominio. El usuario solo puede leer, crear, modificar o eliminar conforme a los permisos del recurso compartido y del sistema de archivos. Tener acceso visual a una carpeta no implica permiso para modificar todo su contenido.',
          'Mapear una unidad asigna una letra a una ruta de red para facilitar su uso. Puede configurarse la reconexión al iniciar sesión si la política lo permite. Desconectar la unidad elimina la asignación, no borra los datos del servidor. Si la red, el servidor o la autenticación fallan, la letra puede aparecer desconectada aunque el almacenamiento siga existiendo.',
          'Copiar entre local y red transfiere datos y puede tardar, fallar o producir una versión incompleta si se interrumpe. Antes de repetir la operación se debe comprobar tamaño, fecha, destino y existencia del archivo. En documentos compartidos existe riesgo de sobreescritura y conflicto de versiones. Las organizaciones pueden usar bloqueo, control de versiones o repositorios documentales; el Explorador no sustituye esas reglas.',
          'Los permisos deben interpretarse con precisión. Lectura permite consultar; escritura o modificación permite crear o cambiar; control total añade facultades amplias, incluida gestión según configuración. Los permisos efectivos pueden resultar de grupos, herencia y restricciones. Ante una denegación de acceso, el auxiliar no debe intentar eludirla, sino comprobar la ruta, credenciales y autorización y comunicar la incidencia.',
          'El Explorador permite ordenar y agrupar por nombre, fecha, tipo o tamaño, buscar, cambiar la vista, mostrar elementos ocultos y extensiones y fijar carpetas en Acceso rápido. Ordenar no cambia el contenido; filtrar o buscar reduce lo visible; ocultar no cifra ni protege. Un archivo oculto sigue existiendo y puede ser accesible por otros medios.',
          'Las operaciones deben terminar con control de calidad: verificar que el documento correcto está en el expediente o carpeta autorizada, que puede abrirse, que conserva todas las páginas, que el nombre es coherente y que no se ha dejado una copia innecesaria en Descargas, Escritorio, USB o correo. La trazabilidad vale más que acumular duplicados sin control.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Archivo contiene información; carpeta organiza. Copiar conserva el original y crea otro ejemplar; mover cambia la ubicación; renombrar cambia la denominación; borrar puede enviar a Papelera o ser directo según soporte y operación. La extensión orienta sobre formato, pero no convierte el archivo al modificarla. Ruta local y ruta UNC no son equivalentes.',
          'Unidad local depende del equipo o dispositivo conectado. Unidad de red depende de red, servidor, credenciales y permisos. Mapear asigna una letra; desconectar el mapa no elimina el contenido remoto. Mostrar u ocultar archivos cambia su visualización, no su protección. La Papelera no es archivo ni copia de seguridad.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Copiar no elimina el origen. Cortar y pegar equivale normalmente a mover cuando finaliza. Renombrar una extensión no convierte el formato. Una ruta UNC comienza por servidor y recurso compartido. Desconectar una unidad de red no borra sus datos. El acceso se limita por permisos. Los archivos borrados de red pueden no pasar por Papelera. Oculto no significa cifrado. Ordenar no altera los datos. Acceso rápido es una vista de acceso, no una ubicación física nueva.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica qué ocurre con origen y destino al copiar, mover, renombrar y eliminar un archivo.',
          '2. Distingue ruta local, ruta UNC y unidad de red mapeada, indicando qué ocurre al desconectar esta última.',
          '3. Formula un protocolo para incorporar un documento descargado a una carpeta administrativa evitando duplicados, pérdida de versiones y exposición de datos.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Resuelve cada pregunta identificando primero el verbo: crear, copiar, mover, renombrar, eliminar, restaurar, mapear o desconectar. Después determina ubicación local o remota y comprueba si la afirmación usa absolutos como siempre, nunca o automáticamente. En supuestos, añade permisos, verificación del destino y protección de datos. No memorices una posición concreta de menú como si fuera permanente.'
        ]}
      ],
      tree: 'Tema 32 · Windows 11 Pro I\n├─ Archivo y carpeta\n│  ├─ Nombre, extensión, tipo y ruta\n│  ├─ Crear y guardar\n│  ├─ Copiar: conserva origen\n│  ├─ Mover: cambia ubicación\n│  ├─ Renombrar: cambia nombre\n│  └─ Borrar y Papelera\n├─ Unidades locales\n│  ├─ SSD/HDD y extraíbles\n│  ├─ Letras y sistema de archivos\n│  └─ Espacio, permisos y cifrado\n└─ Unidades de red\n   ├─ Ruta UNC\n   ├─ Mapeo a letra\n   ├─ Credenciales y conectividad\n   ├─ Permisos efectivos\n   └─ Versiones y control de calidad',
      reviewTable: [
        ['Concepto', 'Regla que debe dominarse'],
        ['Archivo', 'Unidad lógica de información identificada por nombre y ubicación'],
        ['Carpeta', 'Contenedor lógico de archivos y subcarpetas'],
        ['Copiar', 'Crea ejemplar en destino y conserva origen'],
        ['Mover', 'Traslada al destino y deja de estar en origen al completar'],
        ['Renombrar', 'Cambia nombre, no convierte el formato'],
        ['Eliminar', 'Puede pasar por Papelera o ser directo'],
        ['Ruta local', 'Letra de unidad y jerarquía local'],
        ['Ruta UNC', 'Servidor, recurso compartido y ruta remota'],
        ['Unidad mapeada', 'Letra asociada a ruta de red'],
        ['Permisos', 'Determinan lectura, escritura, modificación o control'],
        ['Control final', 'Abrir, verificar destino, versión, integridad y copias residuales']
      ],
      coverage: ['archivo', 'carpeta', 'extensión', 'ruta', 'crear', 'copiar', 'mover', 'renombrar', 'borrar', 'Papelera', 'unidad local', 'unidad de red', 'UNC', 'mapeo', 'permisos']
    },
    33: {
      title: 'Microsoft Windows 11 Pro II. Navegación por Internet con Microsoft Edge. Uso del correo electrónico con Microfocus GroupWise 24 y posteriores.',
      sources: [BOP, MICROSOFT_EDGE_HISTORY, MICROSOFT_EDGE_PRIVATE, GROUPWISE],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El tema combina dos herramientas de trabajo: Microsoft Edge para acceder a sitios y aplicaciones web, y GroupWise para correo, calendario, tareas, contactos y colaboración. En Edge deben dominarse dirección y búsqueda, pestañas, favoritos, historial, descargas, cookies, caché, permisos del sitio, navegación InPrivate, certificados y tratamiento seguro de formularios y ficheros.',
          'En GroupWise deben distinguirse buzón, elementos enviados, borradores, papelera, carpetas, destinatarios Para-CC-CCO, adjuntos, respuesta y reenvío, calendario, citas, reuniones, tareas, notas, contactos, libreta de direcciones, reglas, archivo y delegación. El examen puede preguntar tanto por la finalidad de cada elemento como por la conducta correcta en una oficina pública.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El programa oficial cita literalmente Microsoft Edge y Microfocus GroupWise 24 y posteriores. OpenText es la organización actual vinculada al producto y mantiene la documentación oficial de GroupWise 24; la propia portada describe funciones de correo electrónico, programación, mensajería, tareas, contactos y documentos. Para Edge se usan páginas oficiales de Microsoft sobre historial y navegación InPrivate.',
          'Las interfaces evolucionan. Los nombres exactos de botones, iconos o rutas pueden variar por versión, idioma, perfil y políticas corporativas. Se estudian conceptos y resultados verificables. No se afirma que una función esté disponible con idéntica configuración en toda instalación, porque el administrador puede limitar sincronización, extensiones, descarga, archivo, proxy, delegación o acceso externo.',
          'La navegación privada no convierte al usuario en anónimo frente a la organización, proveedor, sitio web o sistemas de seguridad. El correo corporativo tampoco es un canal personal. En ambos casos se aplican políticas de seguridad, protección de datos, secreto profesional, conservación y uso aceptable.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Microsoft Edge es un navegador web. La barra de direcciones admite direcciones URL y búsquedas según configuración. Una URL identifica un recurso e incluye elementos como esquema, dominio, ruta y parámetros. HTTPS indica que la comunicación utiliza cifrado y un certificado para autenticar el sitio en los términos del protocolo, pero no garantiza que el contenido sea verdadero, que el trámite sea oficial o que el usuario esté autorizado.',
          'Las pestañas permiten mantener varios recursos abiertos en una ventana. Cerrar una pestaña no cierra necesariamente la sesión del sitio en otras pestañas. La recarga solicita de nuevo el recurso; atrás y adelante recorren el historial de navegación de la pestaña. Duplicar o fijar pestañas facilita el trabajo, pero demasiadas sesiones abiertas aumentan riesgo de error entre expedientes o perfiles.',
          'Los favoritos guardan referencias a páginas para acceder después. No guardan una copia jurídica del contenido ni acreditan que una dirección siga siendo oficial. Para sedes y diarios oficiales se debe comprobar dominio, certificado y vigencia. La página de inicio, nueva pestaña y motor de búsqueda son configurables y no deben confundirse con la URL real del sitio visitado.',
          'El historial registra páginas visitadas conforme a la configuración y puede almacenarse en el dispositivo, sincronizarse entre dispositivos o asociarse a la nube. Microsoft permite verlo y borrar categorías de datos. Borrar historial local no elimina necesariamente registros del servidor web, de la red corporativa o de otros sistemas. La sincronización condiciona si el borrado se propaga a otros dispositivos.',
          'Las descargas son archivos recibidos desde web. Deben comprobarse origen, nombre, extensión, firma o procedencia, tamaño y destino. El panel de descargas permite localizar, abrir o eliminar la referencia, pero borrar la entrada del panel no siempre elimina el archivo almacenado. Abrir ejecutables, archivos con macros o adjuntos inesperados puede comprometer el equipo.',
          'La caché conserva temporalmente recursos para acelerar cargas. Las cookies y otros datos mantienen sesión, preferencias u otras funciones. Borrar caché puede corregir visualización desactualizada; borrar cookies puede cerrar sesiones. No debe hacerse indiscriminadamente en un equipo gestionado sin valorar las consecuencias. Las credenciales guardadas y la autofinalización requieren especial cautela en puestos compartidos.',
          'InPrivate separa una sesión y, al cerrar todas sus ventanas, elimina del dispositivo determinados datos locales de navegación, como historial, cookies y datos del sitio en los términos explicados por Microsoft. No evita que sitios, empleador, centro educativo o proveedor de Internet puedan observar actividad. Los favoritos creados y archivos descargados pueden permanecer. Por tanto, InPrivate no sustituye cerrar sesión, borrar un documento descargado ni cumplir las políticas.',
          'Los permisos de sitio controlan cámara, micrófono, ubicación, notificaciones, ventanas emergentes y otros recursos. Deben concederse solo cuando la función y el dominio lo justifican. Las extensiones amplían el navegador, pero pueden acceder a datos; en un entorno corporativo deben instalarse únicamente si están autorizadas. Las advertencias de certificado o descarga no deben ignorarse para completar rápidamente un trámite.',
          'GroupWise organiza los elementos en el buzón y carpetas. El buzón reúne correo recibido y otros elementos según vista. Elementos enviados conserva referencia de lo remitido; Borradores guarda elementos no enviados; Papelera contiene elementos eliminados hasta vaciado o política. El archivo puede trasladar elementos fuera del buzón activo conforme a configuración, pero no equivale a una copia de seguridad universal.',
          'Al redactar un correo, Para identifica destinatarios principales; CC comunica con copia visible; CCO oculta esos destinatarios al resto. El asunto debe resumir el contenido y el cuerpo debe ser claro. Antes de enviar se verifican destinatarios, adjuntos, versión, datos personales y necesidad de cifrado o canal alternativo. La función recuperar o estado de entrega depende del sistema y no garantiza que el destinatario no haya leído o conservado el mensaje.',
          'Responder dirige la contestación al remitente; responder a todos incluye a los participantes indicados por el sistema y exige revisar si todos necesitan la información. Reenviar crea un nuevo envío con contenido previo y puede revelar cadenas, direcciones o adjuntos. Un error frecuente es confiar en el nombre mostrado sin comprobar la dirección real o responder con datos de un expediente a una lista completa.',
          'Los adjuntos deben incorporarse después de comprobar formato, tamaño, versión y contenido. El correo no sustituye el registro ni el expediente cuando la actuación exige constancia formal. Guardar un adjunto crea una copia local; abrirlo puede usar una ubicación temporal. Tras incorporarlo al gestor autorizado, deben eliminarse copias innecesarias conforme a política.',
          'El calendario gestiona citas, reuniones y eventos. Una cita puede reservar tiempo propio; una reunión se envía a participantes y admite aceptación, rechazo o propuesta según función. La disponibilidad ayuda a planificar, pero no autoriza a divulgar detalles privados. Recurrencia repite eventos y debe revisarse antes de modificar una sola aparición o toda la serie.',
          'Las tareas representan acciones pendientes con fechas, prioridad y estado. Las notas o recordatorios no equivalen a una notificación administrativa. Los contactos y la libreta de direcciones permiten localizar personas, grupos y recursos. Deben distinguirse contactos personales, direcciones del sistema y listas de distribución para evitar envíos masivos indebidos.',
          'Las reglas automatizan acciones al recibirse o enviarse elementos: mover, marcar, reenviar o responder conforme a condiciones. Una regla mal diseñada puede ocultar mensajes, duplicarlos o comunicar datos a destinatarios incorrectos. La delegación o acceso proxy permite actuar sobre buzón o calendario ajeno con derechos concedidos; no entrega automáticamente la contraseña ni autoriza todo tipo de actuación.',
          'La búsqueda localiza elementos por texto, remitente, fecha, carpeta u otros criterios. Encontrar un mensaje no prueba que sea la versión vigente de un documento. El usuario debe cotejarlo con expediente, registro o repositorio oficial. Al terminar, se cierran sesiones y se bloquea el equipo, especialmente cuando se ha usado certificado, buzón delegado o información personal.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Edge: URL, pestañas, favoritos, historial, descargas, caché, cookies, permisos e InPrivate. HTTPS protege la conexión, no valida por sí solo la legitimidad material. Borrar una entrada de descarga no equivale necesariamente a borrar el archivo. InPrivate reduce rastros locales al cerrar, pero no garantiza anonimato y no elimina favoritos o descargas.',
          'GroupWise: correo, calendario, tareas, contactos y colaboración. Para-CC-CCO tienen distinta visibilidad. Responder, responder a todos y reenviar producen destinatarios y riesgos distintos. Calendario no es registro; archivo no es copia de seguridad universal; proxy o delegación funciona mediante permisos, no compartiendo contraseña.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Favorito guarda enlace, no copia oficial. Historial puede estar local, sincronizado o en nube. Caché y cookies no son sinónimos. InPrivate no oculta actividad al empleador o proveedor y conserva descargas. CCO oculta sus destinatarios al resto. Responder a todos exige revisar necesidad. Reenviar puede revelar cadena y adjuntos. Reunión no equivale a cita privada. Regla automatiza acciones. Proxy es acceso delegado por derechos, no cesión de contraseña.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica qué datos reduce InPrivate y qué rastros o visibilidad pueden permanecer.',
          '2. Diferencia Para, CC y CCO y formula un criterio para enviar información administrativa a varios destinatarios.',
          '3. Describe el ciclo seguro desde descargar un adjunto en Edge hasta incorporarlo al expediente y eliminar copias residuales.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Divide el tema en Edge y GroupWise. En Edge pregunta siempre qué se guarda, dónde y qué ocurre al borrar o cerrar. En GroupWise identifica tipo de elemento, destinatarios, carpeta y efecto. Desconfía de afirmaciones absolutas sobre privacidad, recuperación o anonimato. En un supuesto añade comprobación del dominio, dirección real, destinatarios, adjuntos y expediente oficial.'
        ]}
      ],
      tree: 'Tema 33 · Windows 11 Pro II\n├─ Microsoft Edge\n│  ├─ URL, dominio y HTTPS\n│  ├─ Pestañas y navegación\n│  ├─ Favoritos e historial\n│  ├─ Descargas\n│  ├─ Caché y cookies\n│  ├─ Permisos y extensiones\n│  └─ InPrivate y sus límites\n└─ GroupWise 24+\n   ├─ Buzón y carpetas\n   ├─ Para, CC y CCO\n   ├─ Responder y reenviar\n   ├─ Adjuntos\n   ├─ Calendario y reuniones\n   ├─ Tareas y contactos\n   ├─ Reglas\n   └─ Proxy o delegación',
      reviewTable: [
        ['Elemento', 'Función', 'Precaución'],
        ['URL', 'Identifica recurso', 'Comprobar dominio y ruta'],
        ['Favorito', 'Guarda acceso', 'No acredita vigencia'],
        ['Historial', 'Registra navegación', 'Puede sincronizarse'],
        ['Descarga', 'Guarda archivo recibido', 'Verificar origen y extensión'],
        ['Caché', 'Acelera carga', 'Puede mostrar contenido anterior'],
        ['Cookie', 'Mantiene sesión o preferencia', 'Puede contener identificadores'],
        ['InPrivate', 'Reduce datos locales al cerrar', 'No proporciona anonimato'],
        ['CCO', 'Destinatario no visible al resto', 'Revisar necesidad y base jurídica'],
        ['Reenviar', 'Nuevo envío de contenido previo', 'Puede revelar cadena y adjuntos'],
        ['Calendario', 'Gestiona tiempo y reuniones', 'No sustituye registro'],
        ['Regla', 'Automatiza acciones', 'Puede ocultar o divulgar mensajes'],
        ['Proxy', 'Acceso delegado', 'Solo derechos expresamente concedidos']
      ],
      coverage: ['Edge', 'URL', 'HTTPS', 'pestañas', 'favoritos', 'historial', 'descargas', 'cookies', 'caché', 'InPrivate', 'GroupWise', 'correo', 'calendario', 'tareas', 'contactos', 'reglas', 'proxy']
    },
    34: {
      title: 'Microsoft Windows 11 Pro III. Impresión y escaneado de documentos desde Microsoft Windows 11.',
      sources: [BOP, MICROSOFT_PRINT, MICROSOFT_FILES],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'Imprimir convierte un documento digital en salida física o en otra salida configurada, como PDF. Escanear captura un original físico para crear un archivo digital. El examen suele valorar la selección de dispositivo, cola, páginas, copias, tamaño, orientación, color, doble cara, calidad, formato y destino, junto con la resolución de incidencias básicas.',
          'En administración, la operación no termina al pulsar Imprimir o Escanear. Hay que verificar que se usa el documento correcto, que no faltan páginas, que el resultado es legible, que el orden y orientación son adecuados, que el archivo se incorpora al expediente autorizado y que las copias físicas o digitales residuales se retiran y protegen.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El título literal procede del BOP de Toledo núm. 118. Las funciones se explican conforme al soporte oficial de Windows y a conceptos estables de impresión y digitalización. La ubicación exacta de opciones puede cambiar según controlador, modelo, aplicación, versión y políticas. Un cuadro de impresión puede mostrar funciones que la impresora no admite, o esconder opciones gestionadas por el controlador.',
          'Digitalizar no crea por sí solo una copia auténtica administrativa. La validez de una copia electrónica depende de la normativa, del procedimiento de digitalización, del órgano competente, de los metadatos y, cuando corresponda, de firma, sello o código de verificación. Tampoco OCR y escaneado son sinónimos: escanear produce una imagen; OCR intenta reconocer caracteres y puede introducir errores.',
          'La protección de datos exige evitar impresiones abandonadas, bandejas compartidas con documentación sensible, escaneos a carpetas personales o envío automático a destinatarios incorrectos. El usuario debe seguir las instrucciones de seguridad y conservación de la Diputación.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Una impresora puede conectarse por USB, red cableada, Wi-Fi o servidor de impresión. Windows mantiene dispositivos instalados y puede elegir una impresora predeterminada. Predeterminada significa selección inicial habitual, no obligación: el usuario puede escoger otra autorizada. En entornos corporativos la instalación y las preferencias pueden distribuirse mediante administración central.',
          'Antes de imprimir se seleccionan impresora y propiedades. Las opciones habituales son intervalo de páginas, número de copias, intercalación, tamaño de papel, orientación vertical u horizontal, color o escala de grises, calidad, una o dos caras, páginas por hoja y bandeja. No todas existen en todos los dispositivos. El tamaño configurado debe coincidir con el papel real para evitar recortes o escalados inesperados.',
          'Imprimir todas las páginas, página actual, selección o intervalo produce resultados distintos. Un intervalo puede expresarse mediante páginas individuales y rangos según aplicación. Antes de enviar un expediente voluminoso conviene usar vista previa para comprobar saltos, márgenes, encabezados, pie, páginas en blanco y orientación. La vista previa reduce consumo y errores, pero no sustituye revisar el resultado físico.',
          'Doble cara puede ser automática si el equipo incorpora dúplex o manual si requiere reintroducir hojas. Borde largo y borde corto determinan la dirección de giro. Elegirla mal produce reversos invertidos. Intercalar ordena juegos completos cuando se imprimen varias copias; sin intercalación pueden agruparse páginas iguales. Este contraste es típico de test.',
          'La cola de impresión muestra trabajos pendientes o en curso. Permite pausar, reanudar o cancelar si el usuario tiene permiso. Cancelar en la aplicación después de enviarlo no siempre retira inmediatamente el trabajo del dispositivo. Un trabajo bloqueado puede detener los siguientes. Antes de borrar toda la cola se debe identificar propietario y efecto sobre otros usuarios.',
          'Estado sin conexión puede deberse a equipo apagado, cable, red, cambio de dirección, servidor, cola pausada, papel, consumible, atasco o controlador. La actuación básica es comprobar dispositivo correcto, encendido, conexión, mensajes, papel y cola, sin modificar configuraciones corporativas no autorizadas. Reiniciar indiscriminadamente un servidor de impresión puede afectar a más usuarios.',
          'El controlador traduce instrucciones del sistema al dispositivo y expone sus capacidades. Un controlador incorrecto puede limitar bandejas, color, dúplex o formatos. Actualizar o instalar controladores suele requerir permisos. El auxiliar debe registrar la incidencia con datos útiles: impresora, ubicación, hora, mensaje, documento afectado y comprobaciones realizadas, evitando adjuntar información sensible innecesaria.',
          'Microsoft Print to PDF u otra impresora virtual produce un archivo en lugar de papel. El usuario elige nombre y ubicación. Imprimir a PDF no es exactamente igual que exportar desde la aplicación: pueden variar marcadores, enlaces, accesibilidad, capas, campos o calidad. Para documentos oficiales conviene usar el método previsto por la aplicación y comprobar el PDF final.',
          'Un escáner puede ser plano, alimentador automático o parte de un equipo multifunción. El plano es útil para originales delicados o encuadernados; el alimentador procesa varias hojas y puede admitir doble cara. Antes de escanear se retiran grapas, se ordenan páginas y se comprueba el estado del original. Forzar documentos dañados puede atascar o destruir información.',
          'La resolución se expresa normalmente en puntos por pulgada. Mayor resolución captura más detalle, pero aumenta tamaño y tiempo. Para texto administrativo se busca equilibrio entre legibilidad y peso; fotografías o detalles pueden exigir más. Color conserva información cromática; escala de grises reduce tamaño manteniendo matices; blanco y negro puede ser suficiente para texto limpio, pero puede perder sellos o anotaciones tenues.',
          'El formato depende del uso. PDF es habitual para documentos multipágina y distribución; PDF con OCR añade una capa de texto reconocida si la herramienta lo realiza. TIFF puede conservar imágenes con calidad y varias páginas según variante; JPEG comprime fotografías y no es apropiado como contenedor multipágina ordinario; PNG preserva imagen sin pérdida típica para páginas individuales. La elección debe seguir el gestor documental.',
          'Escanear varias páginas exige decidir si se genera un único archivo multipágina o archivos separados. Un expediente debe conservar orden, integridad y asociación correcta. Después de capturar se revisan todas las páginas, anversos y reversos, orientación, márgenes, sombras, cortes, páginas dobles, blancos y legibilidad de firmas, sellos y códigos. Una miniatura no basta para validar letra pequeña.',
          'OCR reconoce caracteres de una imagen y facilita búsqueda o copia de texto. No garantiza fidelidad: puede confundir cifras, letras, fechas o nombres. El original visual sigue siendo la referencia y debe revisarse cuando el contenido reconocido se utilice para tramitar. OCR no convierte automáticamente una imagen en documento editable jurídicamente equivalente.',
          'El destino puede ser carpeta local, de red, correo o aplicación, según dispositivo. La ruta debe seleccionarse antes de iniciar y comprobarse después. Escanear a una carpeta genérica o al correo equivocado expone datos. Los nombres automáticos como Scan0001 dificultan trazabilidad; deben reemplazarse conforme a convención sin alterar el original ni incluir datos excesivos.',
          'La digitalización administrativa puede requerir copia auténtica, metadatos, firma o sello y asiento en registro o expediente. El auxiliar debe usar la aplicación corporativa cuando esté disponible, porque escanear con una utilidad doméstica solo genera un fichero. El papel se conserva, devuelve o elimina conforme al procedimiento; nunca se destruye solo porque exista un PDF.',
          'Al finalizar se comprueba que el archivo abre, tiene el número correcto de páginas, orientación y calidad, y que está en el expediente adecuado. Se retiran originales y copias de bandejas, se eliminan archivos temporales o duplicados cuando proceda y se bloquea el equipo. En impresión sensible puede utilizarse liberación segura mediante código o tarjeta si la infraestructura lo ofrece.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Impresión: dispositivo, páginas, copias, intercalación, papel, orientación, color, dúplex, bandeja, vista previa y cola. Predeterminada es selección inicial; cola gestiona trabajos; controlador comunica capacidades. Imprimir a PDF crea archivo, pero puede diferir de exportar.',
          'Escaneado: preparar originales, elegir alimentador o plano, resolución, color, formato, una o varias páginas y destino; revisar integridad y legibilidad. OCR reconoce texto, no garantiza exactitud. Escanear no crea automáticamente copia auténtica. El control final y la protección de datos forman parte de la operación.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Intercalar ordena juegos completos. Dúplex por borde largo y corto cambia el giro. Cancelar aplicación y cancelar cola no siempre coinciden. Predeterminada no significa única. Mayor DPI aumenta detalle y tamaño. PDF es adecuado para multipágina. JPEG no es formato multipágina administrativo ordinario. OCR puede equivocarse. Escaneo no equivale a copia auténtica. Imprimir a PDF y exportar a PDF pueden producir resultados distintos.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica la diferencia entre impresora predeterminada, cola de impresión, controlador y servidor de impresión.',
          '2. Diseña una comprobación completa de un expediente de veinte páginas escaneado a PDF multipágina.',
          '3. Distingue escaneado, OCR, copia electrónica y copia auténtica, indicando por qué no son sinónimos.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En impresión sigue la cadena documento-dispositivo-opciones-cola-resultado. En escaneo sigue original-captura-parámetros-formato-destino-verificación. Cuando una respuesta afirme que una operación es automática o siempre válida, busca la condición omitida: capacidad del equipo, permisos, controlador, calidad, procedimiento o autenticidad. En supuesto incluye retirada de originales y copias.'
        ]}
      ],
      tree: 'Tema 34 · Windows 11 Pro III\n├─ Impresión\n│  ├─ Impresora local, de red o virtual\n│  ├─ Predeterminada y controlador\n│  ├─ Páginas, copias e intercalación\n│  ├─ Papel, orientación y color\n│  ├─ Dúplex y borde de giro\n│  ├─ Cola y cancelación\n│  ├─ Incidencias\n│  └─ PDF y control final\n└─ Escaneado\n   ├─ Plano o alimentador\n   ├─ Resolución y color\n   ├─ PDF, TIFF, JPEG o PNG\n   ├─ Multipágina\n   ├─ OCR y sus límites\n   ├─ Destino y nombre\n   ├─ Copia auténtica\n   └─ Calidad, expediente y privacidad',
      reviewTable: [
        ['Elemento', 'Qué controla'],
        ['Predeterminada', 'Selección inicial de impresora'],
        ['Cola', 'Trabajos pendientes y en curso'],
        ['Controlador', 'Comunicación y capacidades del dispositivo'],
        ['Intercalar', 'Orden de juegos de varias copias'],
        ['Dúplex', 'Impresión por ambas caras y borde de giro'],
        ['Vista previa', 'Páginas, márgenes y orientación antes de enviar'],
        ['DPI', 'Detalle frente a tamaño de archivo'],
        ['PDF', 'Documento multipágina de distribución'],
        ['OCR', 'Reconoce texto con posible error'],
        ['Copia auténtica', 'Requiere procedimiento y garantías, no solo escaneo'],
        ['Control final', 'Páginas, legibilidad, orden, destino y retirada de copias']
      ],
      coverage: ['impresora', 'predeterminada', 'controlador', 'cola', 'páginas', 'copias', 'intercalar', 'dúplex', 'PDF', 'escáner', 'DPI', 'color', 'multipágina', 'OCR', 'copia auténtica', 'protección de datos']
    }
  };

  for (const [numberText, definition] of Object.entries(THEORY)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    theme.title = definition.title;
    theme.officialTitle = definition.title;
    theme.sections = definition.sections;
    theme.tree = definition.tree;
    theme.reviewTable = definition.reviewTable;
    theme.officialSources = definition.sources;
    theme.articleCoverage = definition.coverage.map(item => ({ block: item, status: 'desarrollado con documentación oficial del fabricante y programa BOP' }));
    theme.retentionQuestions = definition.sections.find(section => section.heading === 'Tres preguntas de retención activa')?.paragraphs || [];
    theme.studyWarnings = [
      'Las rutas y nombres de botones pueden cambiar por actualización, idioma, controlador o política corporativa; memoriza operación, efecto y control.',
      'No presupongas permisos, privacidad, autenticidad documental ni configuración institucional que no consten en el supuesto.'
    ];
    theme.theoryStatus = {
      version: VERSION,
      reviewedAt: REVIEW_DATE,
      autonomous: true,
      programmeLiteral: true,
      fixedStudyStructure: true,
      articleByArticle: false,
      featureByFeature: true,
      noOffSyllabusFiller: true,
      sourcePolicy: 'BOP oficial y documentación primaria del fabricante'
    };
  }

  const previous = ope.theoryProgramme?.v87 || {};
  const completedThemes = Array.from(new Set([...(previous.completedThemes || []), 32, 33, 34])).sort((a, b) => a - b);
  const allNumbers = ope.themes.map(theme => Number(theme.number)).filter(Number.isFinite).sort((a, b) => a - b);
  ope.theoryProgramme ||= {};
  ope.theoryProgramme.v87 = {
    ...previous,
    version: VERSION,
    reviewedAt: REVIEW_DATE,
    status: 'EN_PROGRESO',
    totalThemes: allNumbers.length,
    autonomousThemes: completedThemes.length,
    completedThemes,
    pendingThemes: allNumbers.filter(number => !completedThemes.includes(number)),
    sourcePolicy: 'BOP/BOE y documentación primaria oficial; sin completar por inferencia',
    dynamicChecks: Array.from(new Set([
      ...(previous.dynamicChecks || []),
      'Revisar cambios de interfaz de Windows 11 y Microsoft Edge anteriores al examen.',
      'Revisar documentación y versión institucional de GroupWise instalada por la Diputación.',
      'Comprobar controladores, políticas de impresión, escaneado y almacenamiento corporativo aplicables al puesto.'
    ]))
  };

  window.OPOWEB_DIPUTACION_TEORIA_V87_BLOQUE3 = {
    version: VERSION,
    reviewedAt: REVIEW_DATE,
    themes: [32, 33, 34],
    completedThemes,
    pendingThemes: ope.theoryProgramme.v87.pendingThemes,
    autonomous: true,
    officialProgramme: 'BOP Toledo núm. 118, 25 de junio de 2026, código 2026.00002934',
    primarySources: ['Microsoft Support', 'OpenText/Novell GroupWise 24 documentation']
  };
})();
