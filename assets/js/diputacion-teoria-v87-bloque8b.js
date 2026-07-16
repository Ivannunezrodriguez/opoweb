(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 40);
  if (!ope || !theme) return;

  const REVIEW_DATE = '2026-07-16';
  const theory = {
    sources: [
      { label: 'Microsoft Support · Install a printer in Windows', reference: 'MS-PRINTER-W11', url: 'https://support.microsoft.com/windows/install-a-printer-in-windows-cc0724cf-cc94-ca6f-5a6d-a57b379e3c17' },
      { label: 'Microsoft Support · Install and use a scanner in Windows', reference: 'MS-SCANNER-W11', url: 'https://support.microsoft.com/windows/install-and-use-a-scanner-in-windows-10f5d29a-8a30-4c3d-9f3e-0373e52d0c93' },
      { label: 'USB-IF · Official document library', reference: 'USBIF-DOCS', url: 'https://www.usb.org/documents' },
      { label: 'Ecma International · ECMA-130 CD-ROM', reference: 'ECMA-130', url: 'https://ecma-international.org/publications-and-standards/standards/ecma-130/' },
      { label: 'Ecma International · ECMA-267 DVD-ROM', reference: 'ECMA-267', url: 'https://ecma-international.org/publications-and-standards/standards/ecma-267/' }
    ],
    sections: [
      {
        heading: 'Resumen orientado al aprobado',
        paragraphs: [
          'Un periférico es un dispositivo que permite introducir, obtener, almacenar o comunicar información con el ordenador. Puede ser de entrada, salida, entrada y salida, almacenamiento o comunicación. El tema exige dominar especialmente impresoras, escáneres, discos duros externos, lectores y grabadores de CD y DVD y memorias USB. Para cada dispositivo deben distinguirse función, conexión, soporte físico, controlador, parámetros de uso, riesgos y mantenimiento.',
          'La conexión física no determina por sí sola todas las prestaciones. USB-A y USB-C describen conectores; USB 2.0, USB 3.2 o USB4 describen generaciones o capacidades; un cable puede transportar datos, alimentación, vídeo u otras funciones según dispositivos y especificación. Del mismo modo, una impresora puede conectarse por USB, red o Wi-Fi y seguir necesitando controlador, cola y permisos. En examen hay que separar conector, interfaz, protocolo, dispositivo y soporte.'
        ]
      },
      {
        heading: 'Rigor técnico y terminológico',
        paragraphs: [
          'Un dispositivo de entrada convierte acciones o señales en datos para el equipo; uno de salida presenta resultados; uno de entrada y salida realiza ambas funciones. Teclado, ratón y escáner son entrada; monitor, altavoz e impresora son salida; pantalla táctil, adaptador de red y almacenamiento son bidireccionales en sentido funcional. Clasificar un dispositivo depende de la función analizada, no solo de su aspecto.',
          'El controlador o driver permite que el sistema operativo utilice el periférico. La aplicación envía una operación al sistema, el sistema usa el controlador y este comunica con el dispositivo. Firmware es software interno del periférico. Un fallo puede proceder del cable, puerto, alimentación, controlador, cola, servicio, red, permisos, consumible o hardware; por ello el diagnóstico debe ser progresivo.'
        ]
      },
      {
        heading: 'Desarrollo completo del epígrafe oficial',
        paragraphs: [
          'Las impresoras producen una salida física. Las tecnologías más habituales son inyección de tinta, láser o LED, térmica, matricial y dispositivos especializados. La inyección expulsa gotas de tinta; la láser utiliza tóner, tambor y proceso electrofotográfico; la térmica aplica calor a papel sensible o transferencia; la matricial golpea una cinta. Cada tecnología presenta diferencias de calidad, coste, velocidad, mantenimiento y uso recomendado.',
          'La resolución de impresión suele expresarse en puntos por pulgada o dpi, pero no debe confundirse con velocidad. La velocidad puede expresarse en páginas por minuto y depende de contenido, calidad, doble cara, color y procesamiento. El ciclo de trabajo orienta sobre volumen previsto, mientras que la capacidad de bandejas y consumibles afecta la operación. Una cifra aislada no garantiza calidad real.',
          'Una impresora local puede conectarse directamente al equipo; una impresora de red dispone de dirección o se comparte mediante servidor. En Windows se agrega desde Configuración, se detecta automáticamente o se introduce manualmente. Puede establecerse como predeterminada, abrirse la cola, pausar, cancelar o reanudar trabajos. El puerto configurado debe corresponder al dispositivo y el controlador debe ser compatible.',
          'La cola de impresión almacena trabajos pendientes. El servicio de cola o spooler gestiona el envío. Si un documento bloquea la cola, primero se cancela desde la interfaz; reiniciar servicios o borrar archivos de cola exige permisos y procedimiento autorizado. Reimprimir repetidamente puede multiplicar documentos cuando el dispositivo recupera conexión. Debe comprobarse el destino antes de enviar información confidencial.',
          'Los parámetros de impresión incluyen impresora, intervalo de páginas, copias, intercalado, orientación, tamaño de papel, bandeja, escala, calidad, color y doble cara. Doble cara automática requiere hardware compatible; la manual exige recolocar papel según indicaciones. La vista previa detecta cortes y páginas en blanco. El tamaño elegido en la aplicación, controlador y bandeja debe coincidir para evitar errores.',
          'Los consumibles incluyen tinta, tóner, tambor, fusor, cinta o papel según tecnología. No todos son intercambiables. Los mensajes de nivel pueden ser estimaciones. El mantenimiento comprende limpieza, alineación, calibración, sustitución segura y gestión de residuos. Sacudir, rellenar o manipular consumibles fuera de instrucciones puede dañar el equipo o afectar salud y garantía.',
          'Un escáner digitaliza documentos o imágenes. Puede ser plano, con alimentador automático, de alimentación de hojas, portátil o integrado en un equipo multifunción. El cristal plano es apropiado para originales delicados; el alimentador acelera lotes y puede admitir doble cara. Deben retirarse grapas y comprobar tamaño, orientación y estado para evitar atascos o daños.',
          'La resolución de escaneado se expresa en píxeles o puntos por pulgada. Aumentarla incrementa detalle y tamaño de archivo, pero no crea información que el original no contiene. El modo puede ser color, escala de grises o blanco y negro. Formatos frecuentes son PDF para documentos multipágina, TIFF para conservación sin pérdidas según configuración, PNG para imágenes y JPEG con compresión con pérdida. La elección depende del propósito.',
          'OCR u reconocimiento óptico de caracteres intenta convertir una imagen de texto en caracteres buscables y editables. No garantiza exactitud. La calidad depende de resolución, contraste, idioma, tipografía, orientación, manchas y estructura. Después del OCR deben revisarse nombres, cifras, fechas y referencias legales. Un PDF con imagen no es necesariamente un PDF con texto buscable.',
          'Al escanear para expediente se comprueba integridad, orden, orientación, legibilidad, páginas en blanco y correspondencia con el original. Se aplica una denominación normalizada, se guarda en ubicación autorizada y se limita el acceso. El documento original no debe destruirse únicamente porque exista una imagen, salvo que la política y normativa lo permitan. Debe evitarse dejar originales en el alimentador o archivos temporales en carpetas no autorizadas.',
          'Los discos duros externos son unidades de almacenamiento conectadas mediante USB, Thunderbolt u otra interfaz. Pueden contener HDD o SSD. Un HDD externo conserva las características mecánicas del disco y es sensible a golpes durante funcionamiento; un SSD externo no tiene partes móviles, pero sigue expuesto a fallo electrónico, desgaste, pérdida o robo. La carcasa y el puente USB condicionan velocidad y compatibilidad.',
          'Antes de desconectar almacenamiento externo se cierran archivos y se utiliza la expulsión segura cuando corresponda. Extraer durante escritura puede corromper archivos o sistema de ficheros. La caché de escritura mejora rendimiento, pero puede mantener datos pendientes. Un dispositivo que parece inactivo puede estar siendo utilizado por antivirus, indexación, copias o aplicaciones en segundo plano.',
          'El sistema de archivos organiza datos. FAT32 ofrece compatibilidad amplia pero limita tamaño de archivo; exFAT está orientado a unidades extraíbles y archivos grandes; NTFS incorpora permisos, registro y funciones de Windows. Formatear crea una nueva estructura y elimina referencias existentes, por lo que requiere copia y verificación previa. El formato elegido depende de sistemas de destino, seguridad y tamaño.',
          'Una memoria USB utiliza almacenamiento flash y controlador dentro de una carcasa pequeña. No es memoria RAM ni una copia de seguridad por sí misma. Su capacidad real disponible es inferior a la nominal por formato y unidades. Rendimiento varía entre lectura y escritura y puede caer en transferencias sostenidas. El conector no garantiza la generación USB ni la velocidad del dispositivo.',
          'Las memorias USB presentan riesgos de malware, pérdida, falsificación de capacidad, desgaste y exposición de datos. En un entorno público solo deben usarse dispositivos autorizados, cifrados cuando proceda y analizados según política. No se conectan memorias encontradas o desconocidas. El borrado ordinario puede permitir recuperación; la retirada exige borrado seguro o destrucción conforme al nivel de información.',
          'USB permite comunicación y alimentación entre anfitrión, dispositivos y concentradores. USB Type-C es un conector reversible, no una velocidad concreta. USB Power Delivery negocia niveles de potencia cuando los dispositivos y cable son compatibles. Un cable destinado solo a carga puede no transportar datos; otro puede limitar velocidad o vídeo. Las marcas oficiales y especificaciones ayudan, pero siempre se verifica compatibilidad.',
          'Un hub USB multiplica puertos y comparte recursos. Puede alimentarse desde el equipo o disponer de fuente propia. Dispositivos de alto consumo o varios discos pueden requerir hub alimentado. El ancho de banda del enlace ascendente se comparte. Conectar demasiados dispositivos puede producir desconexiones, lentitud o falta de energía. No todos los puertos frontales o adaptadores soportan las mismas funciones.',
          'CD y DVD son discos ópticos leídos mediante láser. CD-ROM y DVD-ROM son soportes de solo lectura grabados previamente. CD-R y DVD-R o DVD+R permiten grabación una vez; soportes RW permiten reescritura según tecnología. Un lector solo lee formatos compatibles; un grabador puede leer y escribir determinados soportes. Compatibilidad depende de unidad, formato, velocidad, firmware y estado del disco.',
          'El CD-ROM de 120 mm está normalizado para intercambio de datos y lectura óptica. DVD ofrece mayor capacidad mediante características físicas y codificación diferentes. No debe asumirse que una unidad CD pueda leer DVD. Las velocidades x son relativas al formato y no equivalen directamente entre CD y DVD. Las unidades ópticas actuales pueden ser internas o externas por USB.',
          'Grabar un disco implica seleccionar archivos, sistema de grabación y finalizar o cerrar sesión cuando sea necesario para compatibilidad. La grabación multisesión permite añadir datos, pero puede reducir compatibilidad. Una imagen ISO representa el contenido y estructura de un disco. Copiar archivos a una carpeta no crea automáticamente un medio arrancable; se requiere grabar la imagen con la función apropiada.',
          'Los discos ópticos son sensibles a rayaduras, suciedad, calor, luz y degradación. Se manipulan por bordes, se guardan verticales en cajas y se etiquetan con métodos adecuados. No constituyen archivo permanente sin estrategia de migración y verificación. La capacidad de lectura futura depende de conservar unidades compatibles y de la integridad física y lógica.',
          'Otros periféricos comunes son teclado, ratón, cámara, micrófono, altavoces, monitor, lector de tarjetas, lector de códigos, tarjeta inteligente y adaptadores de red. Plug and Play facilita detección, pero no elimina necesidad de controladores o permisos. Los periféricos inalámbricos requieren emparejamiento, batería, radio compatible y protección frente a conexiones no autorizadas.',
          'Para diagnosticar un periférico se verifica alimentación, indicadores, cable, puerto, detección en sistema, controlador, configuración, cola o aplicación y prueba en otro puerto o equipo autorizado. Se cambia una variable cada vez. Un error de impresora puede ser papel o red; un escáner puede estar ocupado; una unidad externa puede no tener letra asignada. La solución se documenta.',
          'La seguridad física y documental es transversal. Una impresora compartida puede exponer páginas; un escáner multifunción puede conservar trabajos; una unidad externa puede contener expedientes; una memoria USB puede introducir código malicioso. Se aplican impresión segura, retirada inmediata, borrado de colas cuando proceda, cifrado, inventario, control de puertos y minimización de datos.',
          'En un supuesto práctico, la respuesta debe identificar dispositivo, conexión, controlador, configuración y riesgo. Para imprimir: elegir destino, parámetros y revisar cola. Para escanear: preparar originales, fijar resolución y formato, revisar OCR y guardar. Para almacenamiento: comprobar capacidad, sistema de archivos, copia, cifrado y expulsión. Para medios ópticos: verificar compatibilidad, tipo de soporte y cierre de sesión.'
        ]
      },
      {
        heading: 'Síntesis de repaso rápido',
        paragraphs: [
          'Impresora produce salida y utiliza controlador y cola; escáner convierte originales en imágenes y puede aplicar OCR; disco externo puede ser HDD o SSD; memoria USB usa flash; USB-C es conector y no velocidad; un hub comparte ancho de banda y energía; CD-ROM y DVD-ROM son lectura; R es grabable una vez y RW regrabable. La expulsión segura protege escrituras pendientes y el cifrado y borrado seguro protegen datos.'
        ]
      },
      {
        heading: 'Opo-Test: puntos calientes',
        paragraphs: [
          'Entrada, salida y almacenamiento; impresora local o de red; tinta, láser, térmica y matricial; dpi frente a ppm; cola y spooler; doble cara; escáner plano y ADF; resolución, color, PDF, TIFF, JPEG y OCR; HDD externo frente a SSD; FAT32, exFAT y NTFS; expulsión segura; USB-A, USB-C, generación y Power Delivery; hubs; CD-ROM, CD-R, CD-RW, DVD-ROM, DVD±R y DVD±RW; ISO; seguridad de datos y diagnóstico.'
        ]
      },
      {
        heading: 'Tres preguntas de retención activa',
        paragraphs: [
          '¿Por qué USB-C no permite deducir por sí solo la velocidad? ¿Qué diferencia existe entre digitalizar una página y aplicar OCR? ¿Qué pasos deben completarse antes de desconectar, reutilizar o retirar una unidad externa con documentación administrativa?'
        ]
      },
      {
        heading: 'Estrategia de examen',
        paragraphs: [
          'Descarta que más dpi implique siempre mejor resultado, que un filtro o borrado ordinario proteja datos, que todo USB-C tenga la misma velocidad o que una memoria USB sea una copia de seguridad suficiente. En averías, sigue alimentación, conexión, detección, controlador, configuración y prueba controlada. En documentos, prioriza destino correcto, revisión, cifrado, expulsión segura y retirada inmediata.'
        ]
      }
    ],
    tree: 'Periféricos del ordenador personal\n├─ Impresoras\n│  ├─ Inyección, láser, térmica y matricial\n│  ├─ Local, red y cola\n│  ├─ Parámetros y consumibles\n│  └─ Seguridad de impresión\n├─ Escáneres\n│  ├─ Plano y alimentador\n│  ├─ Resolución y color\n│  ├─ PDF, TIFF, PNG y JPEG\n│  └─ OCR y control de calidad\n├─ Almacenamiento externo\n│  ├─ HDD y SSD externos\n│  ├─ FAT32, exFAT y NTFS\n│  ├─ Caché y expulsión segura\n│  └─ Cifrado y borrado seguro\n├─ USB\n│  ├─ Conectores y generaciones\n│  ├─ Datos, energía y Power Delivery\n│  ├─ Hubs y ancho de banda\n│  └─ Memorias USB\n└─ Medios ópticos\n   ├─ CD-ROM, R y RW\n   ├─ DVD-ROM, R y RW\n   ├─ Lectura, grabación e ISO\n   └─ Conservación y compatibilidad',
    reviewTable: [
      ['Impresora', 'Salida física', 'Requiere destino, controlador y cola'],
      ['dpi impresión', 'Resolución nominal', 'No es velocidad'],
      ['ppm', 'Páginas por minuto', 'Depende del modo de prueba'],
      ['Escáner plano', 'Original sobre cristal', 'Adecuado para material delicado'],
      ['ADF', 'Alimenta lotes de hojas', 'Retirar grapas'],
      ['OCR', 'Convierte imagen en texto reconocible', 'Debe revisarse'],
      ['HDD externo', 'Almacenamiento mecánico', 'Evitar golpes en funcionamiento'],
      ['SSD externo', 'Almacenamiento flash', 'Sin partes móviles de acceso'],
      ['USB-C', 'Tipo de conector reversible', 'No define por sí solo velocidad'],
      ['FAT32', 'Sistema compatible', 'Limita tamaño de archivo'],
      ['exFAT', 'Sistema para unidades extraíbles', 'Admite archivos grandes'],
      ['Expulsión segura', 'Completa operaciones pendientes', 'Reduce riesgo de corrupción'],
      ['CD-ROM', 'Disco óptico de solo lectura', 'No se regraba'],
      ['DVD-ROM', 'Disco DVD de solo lectura', 'Requiere unidad compatible']
    ]
  };

  const words = [...theory.sections.flatMap(s => [s.heading, ...s.paragraphs]), theory.tree, ...theory.reviewTable.flat()].join(' ').trim().split(/\s+/).filter(Boolean).length;
  theme.sections = theory.sections;
  theme.tree = theory.tree;
  theme.reviewTable = theory.reviewTable;
  theme.officialSources = theory.sources;
  theme.theoryStatus = { autonomous: true, programmeLiteral: true, reviewedAt: REVIEW_DATE, words, sourcePolicy: 'Fuentes oficiales de Microsoft, USB-IF y Ecma International' };

  ope.theoryProgramme = ope.theoryProgramme || {};
  ope.theoryProgramme.v87 = {
    status: 'CIERRE_EDITORIAL_CON_BLOQUE_DOCUMENTAL_PENDIENTE',
    scope: 'Temas 25 a 40 de Diputación de Toledo',
    completedThemes: Array.from({ length: 16 }, (_, index) => index + 25),
    pendingThemes: [],
    autonomousThemes: 16,
    totalThemes: 16,
    reviewedAt: REVIEW_DATE,
    documentaryGap: 'Pendiente la comprobación literal de los Estatutos oficiales vigentes del OAPGT en el tema 22.',
    editorialPolicy: 'OpoWeb como fuente teórica principal; fuentes oficiales para vigencia y trazabilidad.'
  };

  window.OPOWEB_DIPUTACION_THEORY_V87 = {
    status: 'CIERRE_EDITORIAL_CON_BLOQUE_DOCUMENTAL_PENDIENTE',
    block: 8,
    completedThemes: Array.from({ length: 16 }, (_, index) => index + 25),
    pendingThemes: [],
    reviewedAt: REVIEW_DATE,
    numberingCheck: { computerTheme: 39, peripheralsTheme: 40 },
    documentaryGap: 'OAPGT_STATUTES'
  };
})();
