(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.49.0';
  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const detail = {
    37: {
      source: 'LibreOffice Base · tablas, consultas, formularios e informes',
      blocks: [
        ['Documento de base de datos', [
          'LibreOffice Base permite crear documentos de base de datos y conectarse a fuentes externas. El archivo ODB guarda la definición de tablas, consultas, formularios, informes y la conexión; según el tipo de base, los datos pueden estar embebidos o residir fuera del archivo.',
          'Base puede conectarse a sistemas relacionales y también abrir fuentes planas. Algunas fuentes, como hojas de cálculo, archivos de texto o libretas de direcciones, pueden ser de solo lectura para estructura y registros desde Base.',
          'Registrar una base de datos en LibreOffice permite que Writer, Calc y otros módulos la utilicen como fuente de datos, pero no equivale a publicar la base en red.'
        ]],
        ['Tablas, campos y claves', [
          'Una tabla almacena registros en filas y campos en columnas. Cada campo tiene nombre, tipo, longitud y propiedades como valor obligatorio, valor predeterminado o formato.',
          'La clave primaria identifica de forma única cada registro y no debe contener valores nulos. Puede estar formada por uno o varios campos, aunque en tareas administrativas suele usarse un identificador simple.',
          'Una clave ajena enlaza con la clave primaria de otra tabla. La integridad referencial evita referencias a registros inexistentes y puede controlar actualización o eliminación en cascada.'
        ]],
        ['Relaciones y normalización básica', [
          'Las relaciones más habituales son uno a uno, uno a muchos y muchos a muchos. Una relación muchos a muchos se resuelve normalmente mediante una tabla intermedia con claves ajenas.',
          'Separar entidades evita duplicidades y anomalías. Por ejemplo, almacenar una persona una sola vez y relacionarla con varios expedientes reduce inconsistencias.',
          'El diseño debe decidir qué dato pertenece a cada entidad, qué campo identifica el registro y qué reglas garantizan calidad y coherencia.'
        ]],
        ['Consultas', [
          'Una consulta selecciona, filtra, ordena, agrupa o calcula información sin modificar necesariamente las tablas. Puede construirse mediante asistente, vista de diseño o SQL.',
          'Los criterios restringen registros; el orden determina su presentación. Las consultas con parámetros solicitan un valor al ejecutarse y permiten reutilizar el diseño.',
          'Las consultas de acción modifican datos —agregar, actualizar o eliminar— y requieren especial precaución, copia de seguridad y comprobación previa.'
        ]],
        ['Formularios e informes', [
          'Los formularios facilitan introducir, consultar y modificar registros mediante controles como cuadros de texto, listas, casillas y botones. Un subformulario muestra registros relacionados con el registro principal.',
          'Los informes presentan información para lectura, impresión o exportación. Pueden incorporar encabezados, pies, agrupaciones, ordenaciones, totales y formato.',
          'Antes de entregar un informe deben comprobarse fuente, filtro, orden, totales, paginación y actualización de datos.'
        ]]
      ],
      hot: ['ODB guarda objetos y conexión; los datos pueden estar fuera.', 'Tabla = filas y columnas.', 'Clave primaria identifica de forma única.', 'Clave ajena relaciona tablas.', 'Muchos a muchos requiere tabla intermedia.', 'Consulta no siempre modifica datos.', 'Consulta de acción sí puede modificar.', 'Formulario sirve para trabajar con registros.', 'Informe sirve para presentar e imprimir.'],
      recall: ['¿Qué contiene un archivo ODB y dónde pueden residir realmente los datos?', '¿Cómo se resuelve una relación muchos a muchos?', '¿Qué diferencia funcional existe entre consulta, formulario e informe?']
    },
    38: {
      source: 'LibreOffice Impress · presentaciones, diapositivas y proyección',
      blocks: [
        ['Presentación y formato', [
          'Impress es el módulo de presentaciones de LibreOffice. Su formato nativo es ODP, basado en OpenDocument; puede abrir y guardar otros formatos con posibles diferencias de compatibilidad.',
          'Una presentación contiene diapositivas. Cada diapositiva puede usar un diseño con marcadores de posición para título, texto, imágenes, tablas, gráficos o multimedia.',
          'Guardar conserva el documento editable; exportar a PDF crea una copia destinada a distribución o impresión y no conserva toda la interactividad de la presentación.'
        ]],
        ['Vistas y organización', [
          'La vista Normal permite editar una diapositiva; Esquema trabaja con la estructura textual; Notas añade información para el presentador; Clasificador permite ordenar varias diapositivas; Folleto organiza varias por página.',
          'Duplicar crea una copia de la diapositiva. Ocultar impide que aparezca en la proyección ordinaria sin eliminarla del archivo.',
          'El Navegador y el panel de diapositivas facilitan desplazamiento, selección y reorganización.'
        ]],
        ['Diapositiva maestra y diseño', [
          'La diapositiva maestra define elementos comunes como fondo, logotipo, tipografías, pies, fecha y numeración. Modificarla propaga los cambios a las diapositivas que la usan.',
          'El diseño debe mantener contraste, legibilidad, jerarquía y coherencia. No conviene resolver cada diapositiva con formato manual distinto si existe un patrón común.',
          'Los marcadores de posición forman parte del diseño y facilitan que el contenido adopte el formato de la maestra.'
        ]],
        ['Objetos, transiciones y animaciones', [
          'Impress permite insertar texto, formas, imágenes, tablas, gráficos, audio y vídeo. Los objetos pueden alinearse, distribuirse, agruparse, girarse y cambiar de orden.',
          'La transición es el efecto al pasar de una diapositiva a otra. La animación se aplica a objetos dentro de una diapositiva. Son funciones distintas y pueden tener duración, inicio y orden propios.',
          'El uso excesivo de efectos reduce claridad. Deben emplearse solo cuando ayuden a explicar o dirigir la atención.'
        ]],
        ['Presentación, notas e impresión', [
          'F5 inicia la presentación desde la primera diapositiva y Mayús + F5 desde la diapositiva actual. Durante la proyección pueden usarse teclado, ratón o control remoto.',
          'La Consola del presentador, cuando está disponible, muestra diapositiva actual, siguiente, notas y tiempo en una pantalla separada de la proyectada.',
          'La impresión puede generar diapositivas, notas, esquema o folletos. Antes de exponer deben comprobarse fuentes, vínculos, multimedia, relación de aspecto, equipo, pantalla y modo de presentación.'
        ]]
      ],
      hot: ['ODP es formato nativo.', 'Normal edita; Clasificador reordena.', 'Ocultar no elimina.', 'Maestra aplica diseño común.', 'Marcadores de posición heredan formato.', 'Transición afecta al cambio de diapositiva.', 'Animación afecta a objetos.', 'F5 desde inicio.', 'Mayús + F5 desde actual.', 'PDF no conserva toda la interactividad.'],
      recall: ['¿Qué diferencia existe entre vista Normal, Clasificador, Notas y Folleto?', '¿Por qué debe usarse la diapositiva maestra?', '¿Qué diferencia hay entre transición y animación?']
    },
    39: {
      source: 'Arquitectura básica del ordenador personal',
      blocks: [
        ['Unidad central y placa base', [
          'La placa base conecta procesador, memoria, almacenamiento, tarjetas y puertos. El chipset y el firmware coordinan funciones de entrada, salida, arranque y comunicación entre componentes.',
          'La CPU ejecuta instrucciones. Sus prestaciones dependen de arquitectura, núcleos, hilos, frecuencia, memoria caché, consumo y carga; una frecuencia mayor no garantiza por sí sola mejor rendimiento.',
          'UEFI es el firmware moderno de arranque y configuración. Inicializa hardware, selecciona dispositivo de arranque y puede incorporar arranque seguro.'
        ]],
        ['Memoria principal y almacenamiento', [
          'La RAM es memoria de trabajo rápida y volátil: pierde su contenido al apagar. Más RAM permite mantener más programas y datos activos sin recurrir tanto al almacenamiento.',
          'El almacenamiento conserva información sin alimentación. Los SSD usan memoria flash y no tienen piezas mecánicas; los HDD emplean platos magnéticos y cabezales.',
          'NVMe es un protocolo habitual para SSD sobre PCI Express; SATA es una interfaz más antigua usada por SSD y discos duros. Capacidad y velocidad son magnitudes distintas.'
        ]],
        ['Gráficos, sonido y red', [
          'La GPU procesa gráficos y tareas paralelas. Puede estar integrada en el procesador o ser una tarjeta dedicada con memoria propia.',
          'El adaptador de red permite conexión Ethernet o inalámbrica. La velocidad efectiva depende también de cableado, punto de acceso, servidor, interferencias y configuración.',
          'El sistema de sonido convierte y procesa audio para entradas y salidas; puede estar integrado en la placa base o en un dispositivo independiente.'
        ]],
        ['Alimentación y refrigeración', [
          'La fuente de alimentación convierte corriente de entrada en tensiones utilizables por los componentes. Debe proporcionar potencia y conectores adecuados con margen y protección.',
          'CPU, GPU y otros componentes generan calor. Disipadores, ventiladores y, en algunos equipos, refrigeración líquida lo evacuan para evitar reducción de rendimiento o daño.',
          'Polvo, ventilación deficiente, pasta térmica degradada o ventiladores averiados pueden elevar temperaturas y provocar inestabilidad.'
        ]],
        ['Puertos, buses y expansión', [
          'USB conecta numerosos periféricos y puede transportar datos y alimentación. El conector físico —por ejemplo USB-A o USB-C— no determina por sí solo la velocidad o funciones disponibles.',
          'HDMI y DisplayPort transportan vídeo y audio digital; Ethernet conecta redes cableadas; los conectores de audio atienden entrada y salida.',
          'PCI Express permite instalar tarjetas de expansión y conectar dispositivos de alta velocidad. La compatibilidad exige revisar formato físico, versión, líneas disponibles, alimentación y controladores.'
        ]]
      ],
      hot: ['CPU ejecuta instrucciones.', 'Núcleos y frecuencia no son la misma magnitud.', 'RAM es volátil.', 'SSD y HDD son almacenamiento no volátil.', 'NVMe suele usar PCIe; SATA es otra interfaz.', 'GPU integrada o dedicada.', 'UEFI inicializa y arranca.', 'Fuente convierte y alimenta.', 'Refrigeración evita sobrecalentamiento.', 'USB-C es conector, no una velocidad concreta.'],
      recall: ['¿Qué diferencia existe entre RAM y almacenamiento?', '¿Por qué no basta comparar GHz para elegir una CPU?', '¿Qué hay que comprobar para añadir una tarjeta o unidad interna?']
    },
    40: {
      source: 'Periféricos del ordenador personal y almacenamiento externo',
      blocks: [
        ['Clasificación de periféricos', [
          'Los periféricos amplían las funciones del ordenador. Pueden ser de entrada, salida, entrada/salida, almacenamiento o comunicaciones.',
          'Teclado, ratón, escáner y micrófono son entradas; monitor, impresora y altavoces son salidas; pantallas táctiles, adaptadores de red y dispositivos multifunción combinan funciones.',
          'La conexión puede ser cableada o inalámbrica y requiere interfaz, controlador, alimentación y permisos adecuados.'
        ]],
        ['Impresoras y escáneres', [
          'Las impresoras láser utilizan tóner y son adecuadas para alto volumen; las de inyección emplean tinta líquida y pueden ofrecer buen color fotográfico. Velocidad, resolución, coste por página, dúplex y ciclo de trabajo son criterios distintos.',
          'Los escáneres convierten originales físicos en archivos digitales. Resolución, profundidad de color, tamaño, alimentador, dúplex y OCR condicionan el resultado.',
          'Un equipo multifunción integra impresión, escaneado y, según modelo, copia o fax, pero cada función conserva su propia configuración y cola.'
        ]],
        ['Discos externos y memorias USB', [
          'Un disco externo puede ser HDD o SSD y conectarse habitualmente por USB. El SSD resiste mejor vibraciones al carecer de piezas móviles y suele ser más rápido, aunque el rendimiento depende también del puerto y la carcasa.',
          'Una memoria USB utiliza flash y es apropiada para transporte, no como única copia de seguridad. Puede perderse, dañarse o infectarse y tiene ciclos limitados de escritura.',
          'Expulsar de forma segura permite completar escrituras pendientes antes de desconectar. Retirar durante una escritura puede corromper archivos o el sistema de archivos.'
        ]],
        ['CD y DVD', [
          'Los lectores ópticos leen discos compatibles; los grabadores también escriben en soportes grabables. CD y DVD difieren en capacidad y formato físico-lógico.',
          'Los soportes ROM son de solo lectura; R suelen admitir una grabación; RW permiten borrado y regrabación dentro de sus límites.',
          'Los discos ópticos pueden degradarse por rayado, calor, luz o calidad del soporte. No deben considerarse copia permanente sin verificación y duplicación.'
        ]],
        ['Conexión, compatibilidad y seguridad', [
          'La compatibilidad exige revisar conector, protocolo, sistema operativo, controlador, alimentación y formato del sistema de archivos.',
          'Un concentrador USB amplía puertos; uno sin alimentación comparte la disponible del puerto, mientras uno alimentado puede sostener dispositivos de mayor consumo dentro de sus límites.',
          'Los dispositivos extraíbles deben analizarse según la política de seguridad, cifrarse cuando contengan datos sensibles y custodiarse para evitar pérdida o acceso no autorizado.'
        ]]
      ],
      hot: ['Entrada, salida, E/S, almacenamiento y comunicaciones.', 'Láser usa tóner; inyección usa tinta.', 'Resolución y velocidad son distintas.', 'SSD externo sin piezas móviles.', 'USB no debe ser única copia.', 'Expulsión segura completa escrituras.', 'ROM solo lectura; R una grabación; RW regrabable.', 'Conector no garantiza protocolo.', 'Hub sin alimentación comparte energía.', 'Datos sensibles: cifrado y custodia.'],
      recall: ['¿Cómo clasificarías teclado, pantalla táctil, impresora y adaptador de red?', '¿Qué riesgos existen al usar una memoria USB como única copia?', '¿Qué elementos hay que comprobar antes de conectar un periférico?']
    }
  };

  const rawQuestions = {
    37: [
      ['¿Cuál es la extensión nativa de un documento de Base?', 'ODB.', ['ODT.', 'ODS.', 'ODP.'], 'Formato de documento de Base.'],
      ['¿Qué puede contener el archivo ODB?', 'Consultas, formularios, informes y conexión.', ['Solo imágenes.', 'Únicamente datos sin estructura.', 'Solo presentaciones.'], 'Documento de base de datos.'],
      ['¿Deben residir siempre los datos dentro del ODB?', 'No.', ['Sí, siempre.', 'Solo si hay formularios.', 'Solo en Windows.'], 'Pueden estar en una base externa.'],
      ['¿Qué representa una fila de una tabla?', 'Un registro.', ['Un campo.', 'Una consulta.', 'Un informe.'], 'Modelo tabular.'],
      ['¿Qué representa una columna?', 'Un campo.', ['Un registro completo.', 'Una relación.', 'Un formulario.'], 'Modelo tabular.'],
      ['¿Qué función tiene la clave primaria?', 'Identificar de forma única cada registro.', ['Ordenar siempre alfabéticamente.', 'Crear informes.', 'Cifrar la base.'], 'Diseño de tablas.'],
      ['¿Puede una clave primaria contener nulos?', 'No.', ['Sí, siempre.', 'Solo en Base.', 'Solo si es texto.'], 'Integridad de entidad.'],
      ['¿Qué hace una clave ajena?', 'Relaciona con una clave de otra tabla.', ['Elimina duplicados automáticamente.', 'Convierte una consulta en informe.', 'Protege con contraseña.'], 'Relaciones.'],
      ['¿Cómo se resuelve normalmente muchos a muchos?', 'Con una tabla intermedia.', ['Duplicando todas las columnas.', 'Con una imagen.', 'Con un informe.'], 'Diseño relacional.'],
      ['¿Qué hace una consulta de selección?', 'Filtra, ordena o calcula registros.', ['Imprime siempre.', 'Modifica obligatoriamente datos.', 'Elimina la base.'], 'Consultas.'],
      ['¿Qué es una consulta con parámetros?', 'Solicita valores al ejecutarse.', ['Una tabla sin campos.', 'Un informe cerrado.', 'Una copia de seguridad.'], 'Consultas reutilizables.'],
      ['¿Qué riesgo tiene una consulta de acción?', 'Puede modificar datos.', ['Solo cambia colores.', 'Solo imprime.', 'No puede afectar registros.'], 'Actualizar, agregar o eliminar.'],
      ['¿Para qué sirve un formulario?', 'Para introducir y consultar registros mediante controles.', ['Para sustituir el sistema operativo.', 'Para crear diapositivas.', 'Para comprimir archivos.'], 'Formularios.'],
      ['¿Qué muestra un subformulario?', 'Registros relacionados con el principal.', ['Solo el logotipo.', 'El historial del navegador.', 'La cola de impresión.'], 'Relación maestro-detalle.'],
      ['¿Para qué se usa un informe?', 'Para presentar, agrupar e imprimir información.', ['Para arrancar el equipo.', 'Para crear claves primarias automáticamente.', 'Para escanear.'], 'Informes de Base.']
    ],
    38: [
      ['¿Cuál es el formato nativo de Impress?', 'ODP.', ['ODT.', 'ODS.', 'ODB.'], 'OpenDocument Presentation.'],
      ['¿Qué contiene una presentación?', 'Diapositivas.', ['Registros exclusivamente.', 'Hojas de cálculo únicamente.', 'Controladores.'], 'Estructura de Impress.'],
      ['¿Qué vista se usa para editar una diapositiva?', 'Normal.', ['Clasificador únicamente.', 'Folleto.', 'Esquema de impresión.'], 'Vistas de Impress.'],
      ['¿Qué vista facilita reordenar muchas diapositivas?', 'Clasificador de diapositivas.', ['Notas.', 'Normal exclusivamente.', 'Patrón de páginas web.'], 'Organización.'],
      ['¿Qué hace ocultar una diapositiva?', 'La omite en la proyección sin eliminarla.', ['La borra.', 'La convierte en PDF.', 'La bloquea definitivamente.'], 'Presentación.'],
      ['¿Qué función tiene la diapositiva maestra?', 'Definir diseño común.', ['Guardar datos externos.', 'Calcular fórmulas.', 'Gestionar correo.'], 'Diseño coherente.'],
      ['¿Qué es un marcador de posición?', 'Un área preparada para insertar contenido.', ['Una clave primaria.', 'Un controlador de impresora.', 'Un archivo temporal.'], 'Diseños.'],
      ['¿Qué afecta una transición?', 'El paso entre diapositivas.', ['Un campo de tabla.', 'Solo el texto de notas.', 'La base de datos.'], 'Transiciones.'],
      ['¿Qué afecta una animación?', 'Objetos dentro de una diapositiva.', ['La unidad de red.', 'La impresora.', 'El arranque del equipo.'], 'Animaciones.'],
      ['¿Qué tecla inicia desde la primera diapositiva?', 'F5.', ['F2.', 'F7.', 'Ctrl + P.'], 'Presentación.'],
      ['¿Qué inicia desde la diapositiva actual?', 'Mayús + F5.', ['Ctrl + F5.', 'Alt + F5.', 'F1.'], 'Presentación actual.'],
      ['¿Qué muestra la vista Notas?', 'Contenido para el presentador asociado a la diapositiva.', ['Solo miniaturas.', 'La base de datos.', 'El firmware.'], 'Notas del orador.'],
      ['¿Qué permite agrupar objetos?', 'Manipularlos conjuntamente.', ['Convertirlos en tabla SQL.', 'Ocultar la presentación completa.', 'Cambiar el sistema operativo.'], 'Objetos gráficos.'],
      ['¿Conserva un PDF todas las animaciones?', 'No.', ['Sí, siempre.', 'Solo si tiene contraseña.', 'Solo en horizontal.'], 'Exportación estática.'],
      ['¿Qué debe comprobarse antes de proyectar?', 'Fuentes, multimedia, formato de pantalla y equipo.', ['Solo el nombre del archivo.', 'Solo el color del ratón.', 'Únicamente la impresora.'], 'Control previo.']
    ],
    39: [
      ['¿Qué componente ejecuta instrucciones?', 'La CPU.', ['La fuente.', 'El teclado.', 'La impresora.'], 'Procesador.'],
      ['¿Qué conecta los principales componentes internos?', 'La placa base.', ['El monitor.', 'El escáner.', 'El ratón.'], 'Arquitectura del equipo.'],
      ['¿Qué es la RAM?', 'Memoria de trabajo volátil.', ['Almacenamiento óptico.', 'Firmware permanente.', 'Una impresora virtual.'], 'Memoria principal.'],
      ['¿Pierde la RAM su contenido al apagar?', 'Sí.', ['No.', 'Solo si es DDR5.', 'Solo en portátiles.'], 'Volatilidad.'],
      ['¿Qué conserva datos sin alimentación?', 'SSD o HDD.', ['RAM.', 'Caché de CPU exclusivamente.', 'Registro del procesador.'], 'Almacenamiento no volátil.'],
      ['¿Qué diferencia básica tiene un SSD frente a HDD?', 'No tiene piezas mecánicas.', ['Siempre usa discos ópticos.', 'Es memoria volátil.', 'No almacena archivos.'], 'Tecnología flash.'],
      ['¿Con qué bus se asocia habitualmente NVMe?', 'PCI Express.', ['PS/2.', 'VGA.', 'Puerto serie únicamente.'], 'Almacenamiento NVMe.'],
      ['¿Qué procesa principalmente gráficos?', 'La GPU.', ['La fuente.', 'La BIOS de impresora.', 'El teclado.'], 'Procesamiento gráfico.'],
      ['¿Puede una GPU estar integrada?', 'Sí.', ['No.', 'Solo en servidores.', 'Solo con HDD.'], 'Gráficos integrados.'],
      ['¿Qué función tiene UEFI?', 'Inicializar hardware y gestionar el arranque.', ['Editar documentos.', 'Escanear imágenes.', 'Enviar correo.'], 'Firmware del sistema.'],
      ['¿Qué hace la fuente de alimentación?', 'Convierte y suministra energía a los componentes.', ['Almacena expedientes.', 'Controla el ratón.', 'Crea copias PDF.'], 'PSU.'],
      ['¿Qué problema causa una refrigeración deficiente?', 'Sobrecalentamiento e inestabilidad.', ['Aumento de capacidad.', 'Mejora automática del rendimiento.', 'Más espacio en disco.'], 'Gestión térmica.'],
      ['¿USB-C indica por sí solo una velocidad concreta?', 'No.', ['Sí, siempre 40 Gbps.', 'Sí, siempre USB 2.0.', 'Solo en monitores.'], 'Conector y protocolo son distintos.'],
      ['¿Qué interfaz transporta vídeo y audio digital?', 'HDMI.', ['PS/2.', 'RJ-11 exclusivamente.', 'SATA externo obligatorio.'], 'Conectividad audiovisual.'],
      ['¿Qué debe revisarse al instalar una tarjeta PCIe?', 'Ranura, líneas, alimentación y controladores.', ['Solo el color.', 'Solo el fabricante del monitor.', 'Únicamente el teclado.'], 'Compatibilidad de expansión.']
    ],
    40: [
      ['¿Qué tipo de periférico es un teclado?', 'Entrada.', ['Salida.', 'Almacenamiento.', 'Impresión.'], 'Clasificación funcional.'],
      ['¿Qué tipo es un monitor?', 'Salida.', ['Entrada únicamente.', 'Almacenamiento.', 'Procesamiento.'], 'Clasificación funcional.'],
      ['¿Qué tipo puede ser una pantalla táctil?', 'Entrada y salida.', ['Solo almacenamiento.', 'Solo impresión.', 'Solo comunicaciones.'], 'Periférico mixto.'],
      ['¿Qué consumible usa una impresora láser?', 'Tóner.', ['Tinta líquida exclusivamente.', 'Papel térmico siempre.', 'Memoria flash.'], 'Tecnología láser.'],
      ['¿Qué consumible usa una impresora de inyección?', 'Tinta.', ['Tóner exclusivamente.', 'Disco óptico.', 'Memoria RAM.'], 'Inyección de tinta.'],
      ['¿Qué convierte papel en archivo digital?', 'El escáner.', ['El monitor.', 'El teclado.', 'El altavoz.'], 'Digitalización.'],
      ['¿Qué ventaja mecánica tiene un SSD externo?', 'Carece de piezas móviles.', ['Usa platos magnéticos.', 'Es volátil.', 'Solo lee datos.'], 'Almacenamiento flash.'],
      ['¿Debe una memoria USB ser la única copia de seguridad?', 'No.', ['Sí.', 'Solo si es grande.', 'Solo en formato FAT32.'], 'Riesgo de pérdida y fallo.'],
      ['¿Para qué sirve expulsar de forma segura?', 'Para completar escrituras antes de desconectar.', ['Para cifrar automáticamente.', 'Para aumentar capacidad.', 'Para desfragmentar siempre.'], 'Integridad de datos.'],
      ['¿Qué significa CD-ROM?', 'Disco compacto de solo lectura.', ['Disco siempre regrabable.', 'Memoria USB.', 'Disco duro externo.'], 'Soporte óptico.'],
      ['¿Qué permite normalmente un soporte R?', 'Una grabación.', ['Regrabación ilimitada.', 'Solo lectura de fábrica.', 'Uso como RAM.'], 'CD-R o DVD-R.'],
      ['¿Qué permite un soporte RW?', 'Borrado y regrabación dentro de sus límites.', ['Solo lectura.', 'Una única escritura.', 'Uso como procesador.'], 'Rewritable.'],
      ['¿Qué hace un concentrador USB?', 'Amplía el número de puertos.', ['Aumenta la RAM.', 'Cambia la CPU.', 'Crea una base de datos.'], 'Hub USB.'],
      ['¿Qué riesgo tiene un hub sin alimentación?', 'Compartir una potencia insuficiente entre dispositivos.', ['Borrar siempre el disco.', 'Convertir USB-C en HDMI automáticamente.', 'Aumentar voltaje sin límite.'], 'Alimentación del bus.'],
      ['¿Qué medida protege datos sensibles en un dispositivo extraíble?', 'Cifrado y custodia.', ['Cambiar la extensión.', 'Ocultar el icono.', 'Usar cualquier equipo público.'], 'Seguridad de soportes.']
    ]
  };

  function makeQuestions(number, rows) {
    const sources = {
      37: 'The Document Foundation · LibreOffice Base',
      38: 'The Document Foundation · LibreOffice Impress',
      39: 'Informática básica · componentes del PC',
      40: 'Informática básica · periféricos y almacenamiento externo'
    };
    return rows.map((row, index) => {
      const [text, correct, wrongs, justification] = row;
      const options = [correct, ...wrongs];
      const shift = (number + index) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `dip-v49-t${number}-q${index + 1}`,
        text,
        options: ordered.map((option, position) => ({ letter: 'ABCD'[position], text: option })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        difficulty: index < 5 ? 'baja' : index < 11 ? 'media' : 'alta',
        source: sources[number]
      };
    });
  }

  function isGeneric(question) {
    const text = norm(`${question?.text || ''} ${question?.justification || ''}`);
    return ['como debe estudiarse', 'enfoque correcto para preparar', 'respuesta esta mejor orientada', 'debe ser autocontenida', 'sin anadir paja'].some(fragment => text.includes(fragment));
  }

  function valid(question) {
    const options = question?.options || [];
    return Boolean(question?.text && question?.justification && options.length === 4 && new Set(options.map(option => norm(option.text))).size === 4 && options.some(option => option.letter === question.answer));
  }

  Object.entries(detail).forEach(([key, value]) => {
    const number = Number(key);
    const currentTheme = theme(number);
    if (!currentTheme) return;
    currentTheme.sections = [
      sec('Resumen orientado al aprobado', [`Tema práctico de alta rentabilidad. Fuente principal: ${value.source}. Distingue siempre componente, objeto, acción, resultado y riesgo.`]),
      sec('Rigor normativo', ['Contenido ajustado al título literal del programa y a conceptos funcionales estables. En software se priorizan operaciones comunes frente a rutas que pueden variar por versión o configuración.']),
      ...value.blocks.map(block => sec(block[0], block[1])),
      sec('Opo-Test: puntos calientes', value.hot),
      sec('Retención activa', value.recall)
    ];
    currentTheme.reviewTable = [
      ['Elemento', 'Qué comprobar en test y supuesto práctico'],
      ['Objeto', 'Tabla, consulta, formulario, informe, diapositiva, componente o periférico.'],
      ['Función', 'Almacenar, relacionar, filtrar, presentar, procesar, conectar, imprimir o digitalizar.'],
      ['Propiedad', 'Formato, clave, relación, vista, interfaz, capacidad, velocidad o alimentación.'],
      ['Resultado', 'Registro, salida, presentación, archivo, conexión o modificación de datos.'],
      ['Riesgo', 'Pérdida, corrupción, incompatibilidad, sobrecalentamiento, mala calidad o acceso no autorizado.']
    ];
    currentTheme.tree = '';
    currentTheme.motorCoverage = 'diputacion-revisado-v49';
    currentTheme.auditStatus = 'desarrollo profundo y banco manual revisado v0.49';

    const existing = (ope.themeTests[currentTheme.id] || []).filter(valid).filter(question => !isGeneric(question));
    const manual = makeQuestions(number, rawQuestions[number]);
    const seen = new Set();
    const merged = [...manual, ...existing].filter(question => {
      const keyText = norm(question.text);
      if (!keyText || seen.has(keyText)) return false;
      seen.add(keyText);
      return true;
    }).slice(0, 40);
    ope.themeTests[currentTheme.id] = merged;
    currentTheme.globalAuditV42 = {
      total: merged.length,
      content: merged.length,
      generic: 0,
      state: merged.length >= 30 ? 'objetivo 30+' : merged.length >= 20 ? 'banco sólido' : 'base real',
      target: 30
    };
  });

  const allThemes = ope.themes.map(item => {
    const questions = (ope.themeTests[item.id] || []).filter(valid);
    const generic = questions.filter(isGeneric).length;
    const content = questions.length - generic;
    item.globalAuditV42 = { total: questions.length, content, generic, state: content >= 30 ? 'objetivo 30+' : content >= 20 ? 'banco sólido' : content >= 10 ? 'base real' : content ? 'insuficiente' : 'solo plantilla', target: 30 };
    return { number: Number(item.number), title: item.title, total: questions.length, content, generic, state: item.globalAuditV42.state };
  });
  const totals = allThemes.reduce((acc, item) => ({ total: acc.total + item.total, content: acc.content + item.content, generic: acc.generic + item.generic }), { total: 0, content: 0, generic: 0 });
  ope.globalTestAudit = {
    version: 'v0.49.0', themes: allThemes, ...totals,
    readyThemes: allThemes.filter(item => item.content >= 20).length,
    targetThemes: allThemes.filter(item => item.content >= 30).length,
    genericThemes: allThemes.filter(item => item.generic > item.content).length,
    targetPerTheme: 30
  };

  function hash(text, seed) {
    let result = 2166136261 ^ seed;
    for (let index = 0; index < text.length; index += 1) {
      result ^= text.charCodeAt(index);
      result = Math.imul(result, 16777619);
    }
    return result >>> 0;
  }
  const shuffle = (items, seed) => [...items].sort((a, b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));
  const realPools = ope.themes.map(item => ({ theme: item, questions: shuffle((ope.themeTests[item.id] || []).filter(valid).filter(question => !isGeneric(question)), 4900 + Number(item.number)) }));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 260) {
      for (const pool of realPools) {
        if (!pool.questions.length) continue;
        const question = pool.questions[(round + seed) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) continue;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
        if (selected.length >= 55) break;
      }
      round += 1;
    }
    const ordered = shuffle(selected, seed * 4919);
    const main = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v49-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v49-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v49-sim${seed}`,
      title: `Simulacro Diputación ${seed} · 50 + 5 reserva`,
      questions: main,
      reserveQuestions: reserve,
      audit: { main: main.length, reserve: reserve.length, expectedMain: 50, expectedReserve: 5, minutes: 60, coveredThemes: new Set(ordered.map(question => question.auditTheme)).size, realOnly: true }
    };
  }

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-10',
    changes: [
      'Desarrollados en profundidad los temas 37 a 40 de Diputación',
      'Añadidas 60 preguntas manuales de Base, Impress, componentes y periféricos',
      'Alcanzados 33 temas profundos y 495 preguntas manuales acumuladas',
      'Completado el primer desarrollo de todo el bloque de ofimática e informática'
    ]
  });

  window.OPOWEB_DIPUTACION_V49 = {
    version: `v${VERSION}`,
    revisedThemes: [37, 38, 39, 40],
    manualQuestions: 60,
    cumulativeManualQuestions: 495,
    totalDeepThemes: 33,
    pendingInternalThemes: [22],
    officialSources: ['LibreOffice Base', 'LibreOffice Impress', 'Arquitectura básica del PC', 'Periféricos y almacenamiento externo']
  };
})();