(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = 'v0.87.0';
  const REVIEW_DATE = '2026-07-15';
  const BOP = { label: 'BOP Toledo núm. 118, de 25 de junio de 2026, programa Administrativo/a C1', reference: 'BOP-TO-118-2026-2934', url: 'https://bop.diputoledo.es/', reviewedAt: REVIEW_DATE };
  const WINDOWS = { label: 'Microsoft Support: ayuda oficial de Windows y dispositivos', reference: 'MS-SUPPORT-WINDOWS-DEVICES', url: 'https://support.microsoft.com/windows', reviewedAt: REVIEW_DATE };
  const INTEL = { label: 'Intel: documentación oficial de procesadores y plataforma', reference: 'INTEL-PROCESSOR-DOCS', url: 'https://www.intel.com/content/www/us/en/products/details/processors.html', reviewedAt: REVIEW_DATE };
  const USBIF = { label: 'USB Implementers Forum: especificaciones y uso de USB', reference: 'USB-IF-OFFICIAL', url: 'https://www.usb.org/', reviewedAt: REVIEW_DATE };

  const THEORY = {
    39: {
      title: 'Conceptos Generales del ordenador personal I. El ordenador personal y sus componentes más comunes.',
      sources: [BOP, WINDOWS, INTEL],
      coverage: ['ordenador personal', 'hardware', 'software', 'placa base', 'CPU', 'núcleo', 'frecuencia', 'caché', 'RAM', 'almacenamiento', 'HDD', 'SSD', 'GPU', 'fuente de alimentación', 'refrigeración', 'firmware', 'BIOS/UEFI', 'tarjeta de red', 'puertos', 'buses', 'controladores', 'sistema operativo', 'bits y bytes', 'rendimiento', 'seguridad'],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'Un ordenador personal es un sistema electrónico programable que recibe datos, ejecuta instrucciones, almacena información y produce resultados. Combina hardware —componentes físicos— y software —programas, sistema operativo, controladores y datos—. Sus componentes habituales son placa base, procesador, memoria RAM, almacenamiento, sistema gráfico, red, fuente de alimentación, refrigeración, puertos y dispositivos de entrada y salida.',
          'Para el examen deben diferenciarse CPU, RAM y almacenamiento; memoria volátil y no volátil; HDD y SSD; placa base y procesador; GPU y monitor; firmware y sistema operativo; puerto y protocolo; bit y byte; capacidad y velocidad; núcleo, hilo y frecuencia; y copia de seguridad, sincronización y redundancia.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El título se conserva literalmente del programa del BOP. La explicación usa conceptos estables de arquitectura personal y documentación primaria de Microsoft e Intel. No se incluyen modelos, generaciones, capacidades mínimas ni marcas como reglas permanentes, porque cambian y no figuran en el epígrafe oficial.',
          'Las denominaciones comerciales no definen por sí solas rendimiento o compatibilidad. Dos procesadores de una misma familia pueden diferir en arquitectura, núcleos, consumo y fecha. Un número mayor de gigahercios no garantiza por sí solo que todo programa sea más rápido. OpoWeb explica funciones y relaciones, no rankings de productos.',
          'En un puesto administrativo, manipular hardware, cambiar firmware, instalar controladores o abrir el equipo puede estar restringido. El conocimiento permite identificar incidencias y comunicar datos, pero no autoriza a eludir políticas, cifrado, inventario, soporte o protección de datos.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Hardware son los elementos físicos: circuitos, carcasa, pantalla, teclado, discos y cables. Software son instrucciones y datos: sistema operativo, aplicaciones, controladores y documentos. El firmware es software almacenado en memoria no volátil que inicia o controla dispositivos. Ninguna capa funciona aislada: una impresora física necesita conexión, controlador, sistema y aplicación.',
          'La placa base conecta procesador, memoria, almacenamiento, tarjetas y puertos. Incluye zócalos, ranuras, buses, controladores y firmware. Determina compatibilidad eléctrica y física. No es la memoria principal ni el disco. Sustituirla puede afectar licencias, cifrado, arranque y configuración.',
          'La CPU o procesador ejecuta instrucciones y coordina operaciones. Integra unidades de control, cálculo, registros, cachés y uno o más núcleos. Un núcleo puede ejecutar flujos de instrucciones; los hilos lógicos dependen de la arquitectura. El rendimiento combina arquitectura, frecuencia, núcleos, caché, memoria, consumo y carga de trabajo.',
          'La frecuencia expresa ciclos por unidad de tiempo, normalmente GHz, pero no equivale directamente a instrucciones útiles ni permite comparar sin contexto arquitecturas diferentes. La CPU puede variar frecuencia por carga, temperatura y energía. Un equipo lento puede estar limitado por memoria, disco, red, software, cifrado o servidor, no solo por procesador.',
          'La caché del procesador es memoria pequeña y rápida que conserva datos e instrucciones de uso probable para reducir accesos a RAM. Existen niveles según arquitectura. No debe confundirse con caché del navegador, memoria RAM ni espacio de almacenamiento. Una mayor cifra aislada no determina el rendimiento total.',
          'La RAM mantiene temporalmente datos y programas en uso y normalmente es volátil: pierde su contenido operativo al apagar. Más RAM permite mantener más trabajo sin recurrir tanto a memoria virtual, pero no sustituye el almacenamiento. Si se agota, el sistema puede usar disco, con menor rendimiento, o cerrar procesos.',
          'La capacidad se mide en bytes y múltiplos. Un bit representa un valor binario; ocho bits forman un byte. Las unidades comerciales y las mostradas por el sistema pueden diferir por criterios decimales o binarios y por espacio reservado. Capacidad no es velocidad: un disco de mayor tamaño no tiene por ello mayor rendimiento.',
          'El almacenamiento conserva datos de forma no volátil. HDD utiliza platos magnéticos y partes mecánicas; SSD usa memoria de estado sólido. El SSD suele ofrecer menor latencia y mayor resistencia a movimientos, pero ambos pueden fallar. El tipo de interfaz, memoria, controlador y carga condiciona velocidad. Ninguno sustituye una copia de seguridad.',
          'Partición y volumen son divisiones lógicas del almacenamiento. El sistema de archivos organiza nombres, carpetas, permisos y metadatos. Formatear prepara un volumen y puede destruir el acceso a datos anteriores. No debe hacerse en un equipo corporativo sin autorización y copia verificada.',
          'La GPU procesa gráficos y operaciones paralelas. Puede estar integrada en el procesador o plataforma o ser una tarjeta independiente. El monitor muestra la salida, pero no es la GPU. Para tareas administrativas ordinarias, la claridad de pantalla y controladores puede ser más relevante que prestaciones gráficas avanzadas.',
          'La fuente de alimentación convierte y distribuye energía. Debe suministrar potencia y conexiones compatibles. La batería cumple función de alimentación en portátiles y puede degradarse. Una fuente inadecuada provoca inestabilidad o daño. El usuario no debe abrirla: puede conservar energía peligrosa incluso desconectada.',
          'La refrigeración extrae calor mediante disipadores, ventiladores u otros sistemas. Polvo, bloqueo de rejillas o ventiladores defectuosos elevan temperatura y pueden reducir rendimiento o causar apagados. No debe colocarse un portátil sobre superficies que obstruyan ventilación. El ruido anómalo y el calentamiento se comunican a soporte.',
          'BIOS o UEFI es firmware de plataforma que inicializa hardware y entrega el control al cargador del sistema. Permite configurar arranque, dispositivos y seguridad. Cambiar orden de arranque, desactivar arranque seguro o modificar opciones sin autorización puede comprometer el equipo. Una contraseña de firmware no sustituye la de usuario ni el cifrado.',
          'El sistema operativo administra procesos, memoria, archivos, dispositivos, usuarios y seguridad y ofrece servicios a aplicaciones. Los controladores permiten al sistema comunicarse con hardware concreto. Un dispositivo puede estar conectado y no funcionar por controlador, permisos, servicio, cable o configuración.',
          'La tarjeta o adaptador de red conecta el equipo por Ethernet, Wi-Fi u otra tecnología. Dirección IP, puerta de enlace, DNS y autenticación pertenecen a la configuración de red. Tener enlace físico no garantiza acceso al servidor o Internet. Las luces de un conector solo aportan indicios, no diagnóstico completo.',
          'Los buses transportan datos, direcciones y control entre componentes. PCI Express conecta tarjetas y dispositivos internos; SATA o interfaces similares enlazan almacenamiento; USB conecta periféricos externos. Un conector físico no siempre determina todas las funciones: el protocolo, versión, cable y dispositivo deben ser compatibles.',
          'Los puertos externos incluyen USB, red, audio y vídeo según equipo. HDMI, DisplayPort u otros transportan imagen y sonido en condiciones concretas. Conectar un adaptador no crea funciones que el puerto no soporte. Forzar conectores puede dañar equipo. Los puertos corporativos pueden estar bloqueados por política.',
          'El arranque sigue una cadena: alimentación, prueba e inicialización de firmware, selección del dispositivo, cargador y sistema operativo. Un fallo antes del sistema se distingue de un error de inicio de sesión o aplicación. Registrar mensajes, luces, pitidos y momento del fallo ayuda al soporte.',
          'La memoria virtual usa almacenamiento para ampliar el espacio de memoria gestionado. No es RAM física ni aumenta mágicamente la capacidad del equipo. Puede evitar cierres, pero es más lenta. El usuario no debe alterar su configuración sin criterio técnico.',
          'Rendimiento se evalúa por carga y cuello de botella. CPU alta puede indicar cálculo; RAM saturada, presión de memoria; disco al cien por cien, espera de entrada/salida; red lenta, transferencia o servidor. El Administrador de tareas ayuda a observar, pero cerrar procesos del sistema o seguridad puede causar pérdida o incumplimiento.',
          'La seguridad física y lógica incluye inventario, bloqueo de pantalla, cuentas individuales, actualizaciones, antivirus, cifrado, arranque seguro, copias y control de dispositivos. Reiniciar puede resolver estados temporales, pero antes se guardan documentos y se comprueba que no haya actualizaciones o procesos críticos.',
          'Para describir un equipo en una incidencia se indican identificador patrimonial, modelo, sistema, usuario afectado, conexión, mensaje, hora, aplicación y comprobaciones. No se envían contraseñas ni datos personales innecesarios. Diagnosticar consiste en aislar componentes y condiciones, no en cambiar varias cosas a la vez.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'CPU ejecuta; RAM mantiene temporalmente; almacenamiento conserva; placa base conecta; GPU procesa gráficos; fuente alimenta; refrigeración disipa calor; firmware inicia; sistema operativo administra; controlador comunica con dispositivo. Bit y byte no son iguales. Capacidad y velocidad tampoco.',
          'RAM es normalmente volátil; HDD y SSD son no volátiles. Monitor no es GPU. Copiar a otro disco del mismo equipo no siempre es copia segura. Más GHz no garantiza mayor rendimiento global. Puerto físico, protocolo, versión y cable deben ser compatibles.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'CPU frente a placa; RAM frente a SSD; caché CPU frente a caché web; HDD frente a SSD; GPU frente a monitor; firmware frente a sistema; controlador frente a aplicación; bit frente a byte; capacidad frente a rendimiento; partición frente a disco; enlace de red frente a acceso; conector frente a protocolo; copia frente a sincronización.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Describe la cadena completa desde pulsar el botón de encendido hasta abrir una aplicación.',
          '2. Explica por qué añadir RAM, cambiar a SSD o sustituir CPU resuelve problemas distintos.',
          '3. Redacta los datos mínimos de una incidencia en la que el equipo se ralentiza al acceder a un expediente de red.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Asocia cada componente con una función y evita respuestas absolutas sobre velocidad. Si el supuesto describe un fallo, sitúalo en alimentación, firmware, sistema, almacenamiento, red, aplicación o servicio remoto. Añade seguridad y autorización cuando se proponga cambiar hardware, configuración o controladores.'
        ]}
      ],
      tree: 'Tema 39 · Ordenador personal I\n├─ Sistema\n│  ├─ Hardware, software y firmware\n│  ├─ Sistema operativo\n│  └─ Controladores\n├─ Procesamiento\n│  ├─ Placa base y buses\n│  ├─ CPU, núcleos y frecuencia\n│  ├─ Caché\n│  └─ GPU\n├─ Memoria y datos\n│  ├─ RAM\n│  ├─ Bits, bytes y capacidad\n│  ├─ HDD y SSD\n│  ├─ Particiones y sistema de archivos\n│  └─ Memoria virtual\n├─ Plataforma\n│  ├─ Fuente y batería\n│  ├─ Refrigeración\n│  ├─ BIOS/UEFI\n│  ├─ Red\n│  └─ Puertos\n└─ Operación segura\n   ├─ Arranque\n   ├─ Rendimiento y cuellos de botella\n   ├─ Seguridad\n   └─ Registro de incidencias',
      reviewTable: [['Componente','Función principal'],['Placa base','Conecta y coordina componentes'],['CPU','Ejecuta instrucciones'],['Caché','Memoria rápida próxima al procesador'],['RAM','Datos temporales en uso'],['HDD/SSD','Almacenamiento no volátil'],['GPU','Procesamiento gráfico'],['Fuente','Convierte y distribuye energía'],['Refrigeración','Extrae calor'],['BIOS/UEFI','Inicializa plataforma y arranque'],['Sistema operativo','Administra recursos y servicios'],['Controlador','Comunica sistema con dispositivo'],['Red','Conecta con otros sistemas'],['Puerto/bus','Interfaz física y lógica de comunicación'],['Copia de seguridad','Protege frente a pérdida; no equivale a simple duplicado casual']]
    },
    40: {
      title: 'Conceptos Generales del ordenador personal II. Periféricos del ordenador personal. Impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD, y memorias USB.',
      sources: [BOP, WINDOWS, USBIF],
      coverage: ['periférico', 'entrada', 'salida', 'entrada/salida', 'controlador', 'impresora', 'láser', 'inyección', 'multifunción', 'cola', 'escáner', 'resolución', 'OCR', 'disco externo', 'HDD externo', 'SSD externo', 'CD', 'DVD', 'lector', 'grabador', 'memoria USB', 'USB', 'capacidad', 'velocidad', 'sistema de archivos', 'expulsión segura', 'cifrado', 'malware', 'copia de seguridad', 'protección de datos'],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'Un periférico es un dispositivo que amplía la entrada, salida, almacenamiento o comunicación del ordenador. Teclado y escáner introducen datos; monitor e impresora producen salida; pantalla táctil, equipo multifunción y almacenamiento externo pueden combinar entrada y salida. La clasificación depende de la función, no solo de la posición física.',
          'El epígrafe exige impresoras, escáneres, discos externos, lectores y grabadores de CD/DVD y memorias USB. Deben dominarse conexión, controlador, capacidad, formato, calidad, velocidad, riesgos, retirada segura, soporte físico, consumibles, cola, digitalización, OCR, lectura, grabación, conservación y protección de datos.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El título se reproduce literalmente. Microsoft documenta la gestión de dispositivos, impresión y escaneado en Windows; USB-IF mantiene especificaciones USB. No se incluyen velocidades máximas comerciales ni se identifica USB-C con una velocidad concreta: USB-C describe un tipo de conector, mientras la versión, modo y cable determinan funciones y rendimiento.',
          'Las capacidades dependen de modelo, controlador, consumible, soporte, cable y política. Que un equipo muestre una opción no garantiza que el dispositivo la admita. En administración, conectar un dispositivo extraíble o grabar soportes puede estar prohibido o controlado. El conocimiento técnico no reemplaza la autorización.',
          'Digitalizar, imprimir, copiar o grabar documentos no altera por sí solo su naturaleza jurídica. La copia auténtica, destrucción del original, registro y conservación exigen procedimiento. Cifrar un dispositivo protege confidencialidad si se gestiona correctamente, pero no sustituye copia de seguridad ni control de acceso.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Los periféricos de entrada capturan información: teclado, ratón, escáner, cámara o micrófono. Los de salida presentan resultados: monitor, impresora o altavoz. Los mixtos intercambian datos, como almacenamiento, pantalla táctil o interfaz de red. Un dispositivo puede pertenecer a varias categorías según función.',
          'La conexión puede ser USB, red, inalámbrica u otra. El sistema identifica el dispositivo y carga un controlador. Plug and Play facilita detección, pero no garantiza que exista controlador compatible ni permiso. Un dispositivo desconocido puede requerir soporte; instalar controladores desde páginas no oficiales aumenta riesgo.',
          'La impresora transforma una salida digital en papel u otro soporte. Las impresoras láser usan tóner y un proceso electrofotográfico; las de inyección depositan tinta; las térmicas aplican calor a soporte o transferencia según tipo. El examen debe relacionar consumible y tecnología sin concluir que una sea siempre mejor.',
          'Una multifunción combina impresión, escaneado y, a veces, copia u otras funciones. Copiar directamente en el equipo puede no crear archivo; escanear sí genera una representación digital. Enviar desde el panel a correo o carpeta depende de configuración y puede exponer documentos si se elige un destino incorrecto.',
          'La resolución de impresión se expresa en puntos por pulgada y la velocidad puede medirse en páginas por minuto, pero la calidad real depende de documento, modo y dispositivo. Borrador, color, doble cara, bandeja, tamaño, gramaje y orientación afectan salida. No se introduce papel o etiquetas no admitidos.',
          'La cola conserva trabajos enviados. Pausar detiene temporalmente; reanudar continúa; cancelar solicita retirar un trabajo. Puede existir cola local, de servidor y memoria en impresora. Un trabajo cancelado puede haber empezado. Las bandejas se retiran de inmediato cuando contienen datos personales.',
          'Incidencias de impresión incluyen sin papel, atasco, consumible, tapa abierta, sin conexión, cola pausada, servidor, controlador o formato. Se comprueba equipo seleccionado, estado y mensajes sin abrir zonas calientes ni manipular mecanismos prohibidos. Un atasco se retira siguiendo instrucciones y sentido indicado.',
          'El escáner convierte luz reflejada por un original en imagen digital. Puede ser plano, alimentador o integrado. El alimentador automatiza lotes y puede admitir doble cara; el plano es adecuado para libros, originales delicados o tamaños no admitidos. Antes de usar el alimentador se retiran grapas y se ordena.',
          'Resolución de escaneado se expresa en píxeles o puntos por pulgada según contexto. Más resolución aumenta detalle, tamaño y tiempo. Color, escala de grises y blanco/negro producen información y tamaños diferentes. Para documentos se busca legibilidad suficiente, no el valor máximo indiscriminado.',
          'PDF permite varias páginas; JPEG comprime imágenes individuales; PNG conserva imagen sin pérdida típica; TIFF se usa en flujos documentales. OCR intenta reconocer texto para buscar o editar, pero puede confundir letras, números, sellos y columnas. El archivo visual debe revisarse página a página.',
          'Un disco duro externo contiene HDD o SSD en carcasa con interfaz. Se usa para transportar o respaldar datos, pero puede fallar, perderse o sufrir golpes. HDD tiene partes mecánicas; SSD no. Alimentación puede proceder del puerto o adaptador. Desconectar durante escritura puede corromper datos.',
          'El sistema de archivos determina compatibilidad, tamaño máximo, permisos y otras funciones. Formatear prepara el volumen y puede borrar acceso a datos. La elección depende del entorno y política. Un dispositivo compatible con varios sistemas puede perder funciones avanzadas de permisos o cifrado.',
          'La expulsión segura solicita al sistema finalizar escrituras y desmontar el volumen. Si Windows indica que está en uso, se cierran archivos y aplicaciones y se vuelve a intentar. Retirar sin expulsar puede no causar daño cada vez, pero aumenta riesgo. Apagar un disco con alimentación propia sigue las instrucciones del fabricante.',
          'CD y DVD son soportes ópticos. Un lector lee formatos compatibles; un grabador puede escribir soportes admitidos. CD y DVD no tienen la misma capacidad y el soporte puede ser grabable una vez o regrabable según designación. Un lector de CD no lee automáticamente DVD y un grabador no admite cualquier soporte.',
          'Grabar crea una sesión o estructura en el disco. Cerrar o finalizar puede mejorar compatibilidad, pero impedir nuevas escrituras según formato. El sistema puede ofrecer uso similar a memoria o grabación para reproductores. La longevidad depende de calidad, almacenamiento, luz, calor, rayas y compatibilidad futura.',
          'Las memorias USB usan almacenamiento flash y controlador en un dispositivo portátil. Capacidad anunciada y disponible pueden diferir. La velocidad depende de memoria, controlador, versión USB, puerto, cable y archivos. Muchos archivos pequeños pueden transferirse más lento que uno grande. El conector no garantiza versión.',
          'USB permite datos y, según especificación y dispositivo, alimentación u otros modos. USB-A y USB-C describen formas de conector; USB 2.0, USB 3.x o USB4 describen generaciones o capacidades. Un adaptador cambia forma física, no garantiza compatibilidad funcional, potencia o velocidad.',
          'Los dispositivos extraíbles son un vector de malware y fuga. No se conectan soportes desconocidos. Se mantiene protección activa, se evita ejecutar archivos y se analiza según política. La reproducción automática no debe considerarse segura. Una memoria encontrada no se usa para identificar al dueño.',
          'El cifrado protege datos si la clave se gestiona. Perder contraseña puede hacerlos irrecuperables. Una memoria cifrada no sustituye autorización para copiar. El etiquetado físico no debe exponer datos. Los soportes defectuosos o retirados se destruyen mediante procedimiento, no en basura ordinaria.',
          'Una copia de seguridad debe ser planificada, verificable, separada del origen y restaurable. Copiar a un disco que permanece junto al equipo no protege frente a robo, incendio o ransomware conectado. Sincronizar puede propagar borrados. La política define frecuencia, versiones, cifrado y custodia.',
          'Para transferir un expediente se comprueba soporte autorizado, espacio, sistema de archivos, cifrado, origen, destino y hash o verificación cuando proceda. Tras copiar, se abren archivos de muestra, se compara cantidad y se expulsa. Las copias temporales se eliminan de forma autorizada.',
          'La resolución de incidencias sigue una secuencia: identificar dispositivo y conexión, comprobar alimentación y estado, probar puerto o cable autorizado, revisar cola o administrador de dispositivos, registrar mensaje y escalar. No se formatea, actualiza firmware ni desmonta un equipo institucional sin autorización.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Entrada captura; salida presenta; mixto intercambia. Impresora usa controlador, cola y consumible. Escáner crea imagen; OCR reconoce texto con error posible. Disco externo y memoria USB conservan datos, pero requieren expulsión, cifrado y control. CD/DVD son ópticos y lector no equivale a grabador.',
          'USB-C es conector, no velocidad. Formatear no es copiar. Expulsar finaliza operaciones pendientes. Ocultar o borrar no equivale a destrucción segura. Copia aislada no es necesariamente respaldo completo. Dispositivo autorizado y soporte técnico son requisitos en oficina pública.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Entrada, salida y mixto; tinta frente a tóner; impresora frente a multifunción; cola frente a memoria física; escanear frente a OCR; DPI frente a tamaño; HDD externo frente a SSD; lector frente a grabador; CD frente a DVD; grabable frente a regrabable; USB-A/C frente a versión USB; expulsión frente a desconexión; cifrado frente a copia; sincronización frente a respaldo.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Diseña el proceso seguro para escanear un expediente en papel, comprobarlo e incorporarlo al gestor documental.',
          '2. Explica por qué una memoria USB-C no garantiza una velocidad concreta ni que funcione en cualquier modo.',
          '3. Compara disco externo, memoria USB y DVD para copia y transporte considerando capacidad, riesgo, cifrado y conservación.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Clasifica primero función, soporte y conexión. En impresora o escáner sigue dispositivo-controlador-opciones-cola/archivo-verificación. En almacenamiento sigue autorización-formato-copia-comprobación-expulsión-custodia. Desconfía de respuestas que equiparan conector con velocidad, escaneo con autenticidad o duplicado con copia de seguridad.'
        ]}
      ],
      tree: 'Tema 40 · Ordenador personal II\n├─ Periféricos\n│  ├─ Entrada\n│  ├─ Salida\n│  ├─ Entrada/salida\n│  ├─ Conexión y controlador\n│  └─ Seguridad\n├─ Impresoras\n│  ├─ Láser, inyección y térmica\n│  ├─ Multifunción\n│  ├─ Calidad, consumibles y papel\n│  ├─ Cola y servidor\n│  └─ Incidencias\n├─ Escáneres\n│  ├─ Plano y alimentador\n│  ├─ Resolución y color\n│  ├─ Formatos y multipágina\n│  └─ OCR y control de calidad\n├─ Almacenamiento externo\n│  ├─ HDD y SSD\n│  ├─ Sistema de archivos\n│  ├─ Expulsión segura\n│  ├─ Cifrado\n│  └─ Copia y restauración\n├─ CD y DVD\n│  ├─ Lectura y grabación\n│  ├─ Grabable y regrabable\n│  └─ Conservación\n└─ Memorias USB\n   ├─ Flash y capacidad\n   ├─ Conector frente a versión\n   ├─ Malware y fuga\n   └─ Autorización y custodia',
      reviewTable: [['Elemento','Qué debe recordarse'],['Periférico de entrada','Introduce datos'],['Periférico de salida','Presenta resultados'],['Impresora láser','Usa tóner'],['Inyección','Usa tinta'],['Cola','Gestiona trabajos enviados'],['Escáner','Captura imagen digital'],['OCR','Reconoce texto con errores posibles'],['HDD externo','Almacenamiento magnético con partes móviles'],['SSD externo','Almacenamiento de estado sólido'],['CD/DVD','Soporte óptico; lector y grabador no son iguales'],['Memoria USB','Almacenamiento flash portátil'],['USB-C','Forma de conector, no velocidad garantizada'],['Expulsión','Finaliza escrituras y desmonta'],['Cifrado','Protege confidencialidad; exige gestión de clave'],['Respaldo','Debe ser verificable, separado y restaurable']]
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
    theme.articleCoverage = definition.coverage.map(item => ({ block: item, status: 'desarrollado con programa BOP y documentación oficial de fabricantes/estándares' }));
    theme.retentionQuestions = definition.sections.find(section => section.heading === 'Tres preguntas de retención activa')?.paragraphs || [];
    theme.studyWarnings = ['No memorizar marcas, generaciones o cifras comerciales como reglas universales.', 'En equipos institucionales, instalación, formateo, cifrado, firmware y conexión de dispositivos requieren autorización y política de seguridad.'];
    theme.theoryStatus = { version: VERSION, reviewedAt: REVIEW_DATE, autonomous: true, programmeLiteral: true, fixedStudyStructure: true, articleByArticle: false, featureByFeature: true, noOffSyllabusFiller: true, sourcePolicy: 'BOP oficial y documentación primaria de Microsoft, Intel y USB-IF' };
  }

  const previous = ope.theoryProgramme?.v87 || {};
  const completedThemes = Array.from(new Set([...(previous.completedThemes || []), 39, 40])).sort((a, b) => a - b);
  const allNumbers = ope.themes.map(theme => Number(theme.number)).filter(Number.isFinite).sort((a, b) => a - b);
  ope.theoryProgramme ||= {};
  ope.theoryProgramme.v87 = { ...previous, version: VERSION, reviewedAt: REVIEW_DATE, status: 'EN_PROGRESO', totalThemes: allNumbers.length, autonomousThemes: completedThemes.length, completedThemes, pendingThemes: allNumbers.filter(number => !completedThemes.includes(number)), sourcePolicy: 'BOP/BOE y documentación primaria oficial; sin completar por inferencia', dynamicChecks: Array.from(new Set([...(previous.dynamicChecks || []), 'Comprobar el hardware, controladores, puertos y políticas de dispositivos de los equipos de examen o de la Diputación.', 'No convertir velocidades, capacidades, marcas o generaciones comerciales en contenido fijo del temario.'])) };

  window.OPOWEB_DIPUTACION_TEORIA_V87_BLOQUE5 = { version: VERSION, reviewedAt: REVIEW_DATE, themes: [39, 40], completedThemes, pendingThemes: ope.theoryProgramme.v87.pendingThemes, autonomous: true, officialProgramme: 'BOP Toledo núm. 118, 25 de junio de 2026, código 2026.00002934', primarySources: ['Microsoft Support', 'Intel', 'USB Implementers Forum'] };
})();
