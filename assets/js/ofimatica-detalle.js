(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;
  const l = v => String(v || '').toLowerCase();
  const s = (heading, paragraphs) => ({ heading, paragraphs });

  const windowsArchivos = [
    s('Windows: entorno de trabajo', [
      'Windows es el sistema operativo que permite manejar el equipo mediante ventanas, iconos, menús, aplicaciones, carpetas, archivos, dispositivos y conexiones de red.',
      'El escritorio contiene iconos, accesos directos, barra de tareas, botón Inicio, búsqueda, reloj, área de notificación y ventanas abiertas.',
      'Una ventana tiene barra de título, botones minimizar, maximizar, restaurar y cerrar, barras de desplazamiento y zona de contenido. Puede moverse, cambiarse de tamaño y alternarse con otras ventanas.',
      'El menú Inicio permite abrir programas, buscar documentos, acceder a configuración y usar opciones de energía y sesión.',
      'El Explorador de archivos permite navegar por unidades, carpetas y archivos, cambiar vistas, ordenar, buscar, copiar, mover, borrar y consultar propiedades.'
    ]),
    s('Archivos y carpetas', [
      'Un archivo contiene información guardada con nombre, extensión, ubicación, tamaño, fechas y atributos. Ejemplos: PDF, DOCX, XLSX, ODT, ODS, TXT, CSV, JPG, PNG y ZIP.',
      'Una carpeta sirve para agrupar archivos y subcarpetas. En oficina administrativa deben organizarse por expediente, fecha, área o tipo de documento.',
      'La extensión identifica el formato. PDF es documento final; DOCX y ODT son texto editable; XLSX y ODS son hoja de cálculo; CSV contiene datos tabulares; ZIP agrupa archivos.',
      'Una ruta indica dónde está un archivo. Puede ser local, en una unidad del equipo, o compartida, en una unidad de red.',
      'Copiar crea un duplicado. Mover cambia de ubicación. Cortar y pegar mueve. Eliminar puede enviar a Papelera o borrar directamente según la unidad.',
      'Cambiar nombre debe hacerse sin alterar la extensión si no se sabe su efecto. Cambiar .docx por .pdf no convierte el documento.',
      'Las propiedades del archivo muestran tipo, ubicación, tamaño, fechas, atributos y permisos. Sirven para comprobar si el documento está en el lugar correcto.',
      'Una denominación útil incluye año, número de expediente, tipo documental y versión: por ejemplo 2026-00125-informe-v01.pdf.'
    ]),
    s('Unidades, impresión y digitalización', [
      'Unidad local: almacenamiento interno del equipo. Unidad externa: memoria USB o disco externo. Unidad de red: recurso compartido en servidor o red interna.',
      'En una unidad de red pueden existir permisos de lectura, escritura o modificación. No todos los usuarios deben acceder a todas las carpetas.',
      'Imprimir exige seleccionar impresora, páginas, copias, orientación, tamaño, color, escala, doble cara y bandeja. La vista previa evita errores.',
      'La cola de impresión muestra trabajos pendientes y permite pausar, reanudar o cancelar trabajos.',
      'Imprimir a PDF crea un archivo PDF desde una aplicación. Es útil para guardar una versión final revisable.',
      'Digitalizar convierte papel en documento electrónico. Parámetros básicos: PDF, resolución suficiente, orientación correcta, una o doble cara y nombre de archivo claro.',
      'Antes de guardar un escaneo hay que comprobar que estén todas las páginas, en orden, legibles, sin cortes y con firmas o sellos visibles.',
      'Un documento digitalizado debe guardarse en el expediente o carpeta correcta, no permanecer como archivo suelto en Descargas o Escritorio.'
    ])
  ];

  const navegacion = [
    s('Navegación por Internet', [
      'Un navegador permite acceder a páginas web y sedes electrónicas mediante direcciones URL. Microsoft Edge es el navegador actual de Microsoft; Internet Explorer es histórico y obsoleto, pero puede aparecer en temario.',
      'La URL identifica un recurso. Sus partes habituales son protocolo, dominio, ruta y parámetros. En trámites administrativos hay que comprobar que el dominio sea oficial.',
      'HTTPS cifra la comunicación, pero debe revisarse también el dominio y el certificado del sitio.',
      'La barra de direcciones permite escribir URL y búsquedas. Las pestañas permiten tener varias páginas abiertas.',
      'Favoritos guarda páginas frecuentes. Historial conserva páginas visitadas. Descargas almacena archivos obtenidos desde una página.',
      'La caché guarda archivos temporales. Las cookies guardan datos de sesión o preferencias. Si una sede no funciona, puede influir caché, cookies, bloqueo de ventanas o navegador no compatible.',
      'Edge incluye perfiles, favoritos, historial, descargas, lector PDF, modo InPrivate y opciones de privacidad.',
      'Internet Explorer incluía opciones de Internet, historial, favoritos, zonas de seguridad y vista de compatibilidad.',
      'En una sede electrónica hay que revisar identificación, firma, justificante, registro, CSV y descarga de acuse de recibo.'
    ])
  ];

  const word = [
    s('Word y Writer: documentos administrativos', [
      'Word y LibreOffice Writer son procesadores de texto. Sirven para redactar oficios, informes, certificados, actas, decretos, providencias, anuncios, requerimientos y resoluciones.',
      'Formato de carácter: tipo de letra, tamaño, negrita, cursiva, subrayado, color, resaltado, superíndice y subíndice.',
      'Formato de párrafo: alineación, sangría, interlineado, espaciado, viñetas, numeración, tabulaciones, bordes y sombreado.',
      'Los estilos permiten aplicar formatos coherentes a títulos, subtítulos y texto normal. Facilitan índices y documentos largos.',
      'Configuración de página: márgenes, tamaño, orientación, columnas, saltos de página, saltos de sección, encabezado y pie.',
      'Las tablas organizan datos en filas y columnas. Permiten insertar, eliminar, combinar celdas, aplicar bordes y ajustar ancho.',
      'La revisión ortográfica y gramatical debe usarse antes de firmar, registrar o publicar un documento.',
      'Comentarios y control de cambios sirven para revisar borradores. En la versión final no deben quedar anotaciones internas.',
      'Combinar correspondencia genera documentos repetidos usando una tabla de datos, por ejemplo comunicaciones a varios interesados.',
      'Exportar a PDF conserva formato y facilita envío o registro. Hay que revisar paginación, firmas, anexos y tablas antes de cerrar.'
    ])
  ];

  const excel = [
    s('Excel y Calc: estructura y datos', [
      'Excel y LibreOffice Calc son hojas de cálculo. Se usan para listados, cálculos, controles, inventarios, estadísticas y seguimiento de expedientes.',
      'Libro es el archivo. Hoja es cada pestaña. Celda es la intersección de fila y columna. Rango es un conjunto de celdas.',
      'Las columnas se identifican con letras y las filas con números. A1 identifica columna A y fila 1.',
      'Tipos de datos: texto, número, fecha, hora, porcentaje, moneda, fórmula y valor lógico.',
      'Una fórmula empieza por el signo igual. Puede usar operadores de suma, resta, multiplicación, división y comparación.',
      'Funciones básicas: SUMA, PROMEDIO, MAX, MIN, CONTAR, CONTARA, SI, SUMAR.SI, CONTAR.SI, HOY y REDONDEAR.',
      'Referencias relativas cambian al copiar. Referencias absolutas usan el símbolo dólar para fijar fila o columna.',
      'Ordenar reorganiza registros. Antes de ordenar hay que seleccionar toda la tabla para no descolocar datos.',
      'Filtrar muestra solo registros que cumplen condiciones sin eliminar los demás.',
      'Validación de datos limita entradas permitidas. Formato condicional resalta valores según reglas.',
      'Área de impresión, orientación, escala y repetir encabezados son claves para imprimir listados largos.',
      'CSV es un archivo de datos separado por coma o punto y coma. Hay que revisar separador, fechas y ceros iniciales.'
    ])
  ];

  const ordenador = [
    s('Ordenador personal, componentes y periféricos', [
      'Hardware es la parte física del ordenador. Software son los programas. Sistema operativo es el software base que permite usar el equipo.',
      'CPU o procesador ejecuta instrucciones. RAM es memoria temporal de trabajo. Almacenamiento HDD o SSD conserva datos de forma permanente.',
      'La placa base conecta procesador, memoria, almacenamiento y puertos. La fuente de alimentación suministra energía.',
      'La tarjeta de red permite conexión por cable o Wi-Fi. Los puertos USB, HDMI, Ethernet y audio conectan periféricos.',
      'Periféricos de entrada: teclado, ratón, escáner, micrófono y cámara. Periféricos de salida: monitor, impresora, altavoces y proyector.',
      'Periféricos de entrada y salida: pantalla táctil, impresora multifunción, memoria USB y disco externo.',
      'Impresoras: láser, inyección, multifunción o de red. Conceptos: tinta, tóner, resolución, velocidad, doble cara y cola de impresión.',
      'Escáneres: plano, alimentador y multifunción. Conceptos: resolución, OCR, color, doble cara y formato de salida.',
      'Memorias USB y discos externos permiten transportar datos, pero deben usarse de forma ordenada y conforme a las normas de la oficina.',
      'Mantenimiento básico: actualizaciones, orden de carpetas, revisión de espacio libre, copias de respaldo y cuidado físico del equipo.'
    ])
  ];

  function m(theme, keys){ const text = l(`${theme.title} ${theme.area}`); return keys.some(k => text.includes(k)); }
  function apply(theme){
    if (m(theme, ['windows i', 'creación, copiado', 'impresión y digitalización'])) theme.sections = windowsArchivos;
    else if (m(theme, ['windows ii', 'internet explorer', 'edge', 'navegación por internet'])) theme.sections = navegacion;
    else if (m(theme, ['procesamiento de texto', 'word', 'writer'])) theme.sections = word;
    else if (m(theme, ['hojas de cálculo', 'excel', 'calc'])) theme.sections = excel;
    else if (m(theme, ['ordenador personal', 'componentes más comunes', 'periféricos'])) theme.sections = ordenador;
    else return theme;
    theme.tree = '';
    theme.reviewTable = [['Bloque','Qué dominar'],['Concepto','Definición y finalidad.'],['Operación','Pasos concretos en oficina.'],['Comprobación','Errores típicos y revisión final.'],['Supuesto','Explicar qué harías y por qué.']];
    return theme;
  }

  data.oposiciones.forEach(ope => { ope.themes = ope.themes.map(apply); });
  if (typeof renderAll === 'function') renderAll();
})();
