(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 36);
  if (!ope || !theme) return;

  const REVIEW_DATE = '2026-07-16';
  const theory = {
  "sources": [
    {"label": "Calc Guide 24.2", "reference": "LO-CG24-MAIN", "url": "https://books.libreoffice.org/en/CG24/CG24.html"},
    {"label": "Calc Guide 24.2, capítulo 2: entrada, edición y formato de datos", "reference": "LO-CG24-DATA", "url": "https://books.libreoffice.org/en/CG24/CG2402-EnteringandEditingData.html"},
    {"label": "Calc Guide 24.2, capítulo 8: fórmulas y funciones", "reference": "LO-CG24-FORMULAS", "url": "https://books.libreoffice.org/en/CG24/CG2408-FormulasAndFunctions.html"},
    {"label": "Calc Guide 24.2, capítulo 10: análisis de datos", "reference": "LO-CG24-ANALYSIS", "url": "https://books.libreoffice.org/en/CG24/CG2410-DataAnalysis.html"}
  ],
  "sections": [
    {"heading": "Resumen orientado al aprobado", "paragraphs": [
      "LibreOffice Calc 24 es la hoja de cálculo de LibreOffice. El tema comprende la elaboración de libros con hojas, celdas y rangos; introducción y formato de datos; fórmulas y funciones; referencias relativas, absolutas y mixtas; ordenación, filtros y validación; gráficos, tablas dinámicas y análisis; impresión, exportación, protección e intercambio de archivos. Una hoja de cálculo no es solo una tabla visual: es un modelo en el que los datos, las fórmulas, los formatos y las relaciones deben mantenerse coherentes.",
      "En examen debe razonarse desde la celda y la referencia. Primero se identifica el tipo de dato; después se comprueba la fórmula, sus operadores y referencias; luego se analiza cómo se copiará; y finalmente se valida la presentación y la salida. En una tarea administrativa conviene separar datos de entrada, cálculos y resultados, utilizar encabezados claros, evitar constantes ocultas en fórmulas, controlar filtros y comprobar totales antes de exportar o imprimir."
    ]},
    {"heading": "Rigor técnico y terminológico", "paragraphs": [
      "Un libro de Calc puede contener varias hojas. Cada hoja se organiza en columnas identificadas por letras y filas identificadas por números. La intersección es una celda, como B4, y un conjunto rectangular es un rango, como B4:D10. La celda activa recibe la entrada; una selección puede abarcar celdas contiguas o no contiguas. El cuadro de nombre permite mostrar o introducir referencias y la barra de fórmulas presenta el contenido real de la celda, aunque la hoja muestre un resultado o un formato.",
      "Calc distingue entre valor y presentación. El número 0,25 puede mostrarse como 25 %, una fecha se almacena como valor numérico con formato de fecha y una moneda combina valor y formato. Cambiar el formato no cambia necesariamente el valor. El texto que parece número puede impedir cálculos y ordenaciones correctas. Una fórmula comienza con el signo igual, devuelve un resultado y puede depender de otras celdas. Una función es una fórmula predefinida con nombre y argumentos."
    ]},
    {"heading": "Desarrollo completo del epígrafe oficial", "paragraphs": [
      "Crear un libro genera un archivo nuevo; abrir recupera uno existente; Guardar conserva cambios; Guardar como cambia nombre, ubicación o formato. El formato nativo de Calc es ODS. XLSX facilita el intercambio con Microsoft Excel, pero determinadas funciones, formatos, gráficos o tablas dinámicas pueden variar. CSV contiene normalmente una sola tabla de texto delimitado y no conserva fórmulas, varias hojas, estilos ni gráficos. Al importar o exportar CSV deben comprobarse separador, codificación, delimitador de texto y tipos de columna.",
      "Los datos pueden introducirse directamente o pegarse. Calc reconoce texto, números, fechas, horas, valores lógicos y fórmulas. La tecla Intro confirma la entrada y Esc la cancela. F2 o doble clic permiten editar dentro de la celda. Supr abre opciones de eliminación, mientras que Retroceso actúa según el modo de edición. Pegar especial permite seleccionar texto, números, fórmulas, formatos, transposición u operaciones. Debe evitarse reemplazar fórmulas por valores sin advertirlo.",
      "El controlador de relleno copia contenido o prolonga series. Al arrastrar una fórmula, Calc ajusta las referencias relativas. Una serie puede continuar números, fechas o patrones reconocidos. Copiar una celda no significa necesariamente copiar solo su valor: puede incluir fórmula, formato, comentario y validación. Para copiar únicamente resultados o únicamente formatos debe utilizarse Pegado especial.",
      "Las referencias relativas cambian al copiarse, como A1. Las absolutas fijan columna y fila mediante signos de dólar, como $A$1. Las mixtas fijan solo una parte: $A1 fija la columna y A$1 fija la fila. Esta diferencia es esencial en tablas de precios, tipos, porcentajes o parámetros comunes. Una fórmula correctamente calculada en la primera fila puede ser incorrecta al copiarse si la referencia que debía permanecer fija no se convirtió en absoluta.",
      "Los operadores aritméticos permiten suma, resta, multiplicación, división, potencia y porcentaje; los operadores de comparación producen VERDADERO o FALSO; y los operadores de texto o referencia dependen de la operación. Los paréntesis controlan el orden. En una fórmula compleja deben separarse etapas o utilizar celdas auxiliares para facilitar auditoría. Introducir un número fijo dentro de muchas fórmulas dificulta actualizarlo y oculta el origen del cálculo.",
      "Las funciones reciben argumentos. SUMA agrega valores; PROMEDIO calcula media; MAX y MIN devuelven extremos; CONTAR cuenta celdas numéricas; CONTARA cuenta no vacías; SI evalúa una condición; SUMAR.SI y CONTAR.SI aplican criterios; REDONDEAR controla decimales; HOY y AHORA proporcionan fecha u hora del sistema. Los nombres y separadores pueden variar según idioma y configuración. Debe comprenderse la lógica y no memorizar únicamente una escritura localizada.",
      "Los errores informan de problemas. Una división entre cero, un nombre no reconocido, una referencia eliminada, un tipo de dato incompatible o una búsqueda sin coincidencia generan códigos distintos. Ocultar un error con formato no resuelve su causa. Debe revisarse la fórmula, los argumentos, los tipos de datos, las referencias y los rangos. Una celda aparentemente vacía puede contener una cadena vacía o espacios y afectar recuentos.",
      "El formato de celdas incluye números, fuente, efectos, alineación, bordes, fondo y protección. Los estilos de celda permiten reutilizar configuraciones, y los estilos de página controlan impresión. El formato condicional cambia la apariencia según reglas o valores y sirve para resaltar vencimientos, duplicados o desviaciones, pero no modifica el dato. Debe diseñarse con criterios claros y evitar colores como único medio de transmitir información.",
      "Insertar o eliminar filas, columnas y celdas desplaza contenido y puede modificar referencias. Ocultar no elimina. Combinar celdas puede complicar ordenación, filtros, copia y accesibilidad; debe reservarse para títulos y no usarse dentro del área principal de datos. Inmovilizar filas o columnas mantiene encabezados visibles al desplazarse. Dividir la ventana crea paneles independientes, pero no altera los datos.",
      "Ordenar reorganiza filas según uno o varios criterios. Debe seleccionarse toda la tabla o permitir que Calc amplíe la selección para evitar separar datos relacionados. Un filtro muestra filas que cumplen condiciones y oculta temporalmente las demás; no las elimina. Antes de copiar, imprimir o calcular subtotales debe comprobarse si existe un filtro activo. El filtro automático ofrece listas y condiciones, y los filtros avanzados permiten criterios más elaborados.",
      "La validez de datos restringe o guía la entrada mediante tipos, intervalos, listas, mensajes y alertas. No corrige automáticamente información histórica ni garantiza que un valor verdadero sea correcto en el contexto. Proteger una hoja impide determinadas modificaciones según opciones, pero no equivale necesariamente a cifrar el archivo. Para confidencialidad puede requerirse contraseña de apertura, permisos y medidas organizativas.",
      "Los nombres definidos asignan una denominación a celdas, rangos o expresiones. Mejoran legibilidad, por ejemplo TIPO_IVA frente a $F$2, pero deben ser únicos y mantenerse. Las referencias entre hojas incorporan el nombre de hoja. Los enlaces externos dependen de otros archivos y pueden quedar rotos al moverlos, cambiar permisos o enviarlos sin sus fuentes. Antes de distribuir un libro se revisan vínculos y datos externos.",
      "Un gráfico representa datos seleccionados mediante tipo, series, categorías, ejes, títulos, leyenda y etiquetas. Elegir el tipo depende del mensaje: columnas comparan categorías, líneas muestran evolución y sectores expresan proporciones simples. Un gráfico no corrige datos incorrectos. Debe incluir unidades, origen y escala coherente y evitar efectos que distorsionen. Al cambiar el rango de origen puede actualizarse automáticamente según la configuración.",
      "Una tabla dinámica resume un conjunto de datos mediante campos de fila, columna, datos y filtros. Permite agrupar, sumar, contar y reorganizar sin alterar la tabla fuente. La fuente debe tener encabezados únicos, filas completas y estructura tabular. Tras modificar los datos puede ser necesario actualizar la tabla dinámica. No debe confundirse con un filtro ni con una tabla ordinaria formateada.",
      "Las herramientas de análisis incluyen subtotales, escenarios, búsqueda de objetivo, estadísticas y otras operaciones según la instalación. La búsqueda de objetivo determina el valor de una entrada necesario para alcanzar un resultado en una fórmula. Los escenarios comparan conjuntos de valores. Deben documentarse supuestos y no presentar resultados calculados como hechos ciertos cuando dependen de parámetros.",
      "Los comentarios o notas documentan celdas; el seguimiento de cambios y el uso compartido dependen de configuración y formato. La colaboración concurrente puede tener limitaciones. Antes de cerrar una versión deben revisarse celdas ocultas, hojas ocultas, comentarios, nombres, enlaces, fórmulas y metadatos. Copiar una hoja a otro libro puede conservar o modificar referencias según el procedimiento.",
      "Para imprimir se define área de impresión, orientación, tamaño, escala, repetición de filas o columnas, encabezados, pies y saltos. Una hoja ancha puede ajustarse a una página, pero el texto puede quedar ilegible. Es preferible elegir orientación horizontal, reducir columnas o imprimir por bloques antes que aplicar una reducción extrema. La vista de salto de página y la vista previa permiten comprobar el resultado.",
      "En un supuesto de gestión administrativa, la secuencia correcta es importar o introducir datos, convertir tipos, eliminar duplicidades justificadas, aplicar validación, construir fórmulas con referencias correctas, comprobar resultados mediante totales de control, ordenar o filtrar sin romper filas, proteger las celdas de fórmula cuando proceda y guardar en ODS. Después se genera una copia en XLSX, CSV o PDF únicamente cuando el destinatario o el trámite lo requiera, verificando qué información se pierde.",
      "La seguridad exige minimizar datos personales, limitar acceso, evitar hojas ocultas como único mecanismo de protección y eliminar información auxiliar innecesaria antes de enviar. Un filtro no impide que otro usuario muestre las filas ocultas. Una contraseña débil o compartida no garantiza confidencialidad. Debe comprobarse el archivo exacto, las hojas incluidas, los vínculos externos y el destinatario antes de adjuntarlo o incorporarlo al expediente."
    ]},
    {"heading": "Síntesis de repaso rápido", "paragraphs": ["Calc 24: ODS es el formato nativo; CSV no conserva fórmulas, estilos ni varias hojas; una celda guarda valor o fórmula y muestra un resultado formateado; las referencias relativas cambian, las absolutas se fijan con dólar y las mixtas fijan una parte; filtrar oculta, no elimina; ordenar debe mantener filas completas; validación restringe entrada; formato condicional solo cambia apariencia; gráficos representan; tablas dinámicas resumen; protección de hoja no equivale a cifrado; la impresión requiere definir área, escala y repetición de encabezados."]},
    {"heading": "Opo-Test: puntos calientes", "paragraphs": ["Libro, hoja, celda y rango; contenido frente a formato; ODS, XLSX y CSV; tipos de datos; barra de fórmulas; controlador de relleno; pegado especial; referencias A1, $A$1, $A1 y A$1; operadores y paréntesis; SUMA, PROMEDIO, CONTAR, SI, SUMAR.SI y REDONDEAR; errores; estilos; formato condicional; ordenar, filtrar y validación; filas ocultas; nombres definidos; vínculos externos; gráficos; tablas dinámicas; búsqueda de objetivo; protección; área de impresión y seguridad."]},
    {"heading": "Tres preguntas de retención activa", "paragraphs": ["¿Cómo se comportan A1, $A$1, $A1 y A$1 al copiar una fórmula? ¿Por qué un archivo CSV no sustituye al libro ODS original? ¿Qué comprobaciones deben realizarse antes de ordenar, filtrar, imprimir o enviar una tabla con datos personales?"]},
    {"heading": "Estrategia de examen", "paragraphs": ["En fórmulas copiadas, comprueba primero qué parte debe variar y cuál debe permanecer fija. Descarta que un filtro borre filas, que un formato porcentual cambie por sí solo el valor, que una hoja protegida esté necesariamente cifrada o que CSV conserve todo el libro. Ante un supuesto, selecciona la opción que mantiene estructura tabular, valida tipos, usa fórmulas auditables y verifica totales antes de exportar."]}
  ],
  "tree": "LibreOffice 24 Calc\n├─ Libro y datos\n│  ├─ Hojas, filas, columnas y celdas\n│  ├─ Rangos y selección\n│  ├─ Texto, números, fechas y fórmulas\n│  └─ ODS, XLSX, CSV e importación\n├─ Edición y formato\n│  ├─ Entrada, F2 y barra de fórmulas\n│  ├─ Copiar, relleno y pegado especial\n│  ├─ Formato de celdas y estilos\n│  └─ Formato condicional y validación\n├─ Cálculo\n│  ├─ Operadores y paréntesis\n│  ├─ Referencias relativas\n│  ├─ Referencias absolutas y mixtas\n│  ├─ Funciones y criterios\n│  └─ Errores y auditoría\n├─ Gestión y análisis\n│  ├─ Ordenación y filtros\n│  ├─ Nombres y vínculos\n│  ├─ Gráficos\n│  ├─ Tablas dinámicas\n│  └─ Subtotales, escenarios y objetivo\n└─ Salida y seguridad\n   ├─ Área, escala y saltos de impresión\n   ├─ Exportación y compatibilidad\n   ├─ Protección y cifrado\n   └─ Datos ocultos, metadatos y destinatario",
  "reviewTable": [
    ["ODS", "Formato nativo de libro", "Conserva hojas, fórmulas y formatos"],
    ["CSV", "Texto delimitado de una tabla", "No conserva varias hojas ni fórmulas"],
    ["A1", "Referencia relativa", "Fila y columna cambian al copiar"],
    ["$A$1", "Referencia absoluta", "Fila y columna permanecen fijas"],
    ["$A1", "Referencia mixta", "Columna fija y fila relativa"],
    ["A$1", "Referencia mixta", "Columna relativa y fila fija"],
    ["Formato", "Cambia presentación", "No necesariamente cambia el valor"],
    ["Filtro", "Oculta filas que no cumplen", "No elimina datos"],
    ["Validación", "Restringe o guía la entrada", "No certifica veracidad"],
    ["Tabla dinámica", "Resume y reorganiza datos", "Debe actualizarse al cambiar la fuente"],
    ["Protección de hoja", "Limita edición", "No equivale necesariamente a cifrado"],
    ["Área de impresión", "Define qué celdas se imprimen", "Debe revisarse con vista previa"]
  ]
};

  const words = [
    ...(theory.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
    theory.tree || '',
    ...(theory.reviewTable || []).flat()
  ].join(' ').trim().split(/\s+/).filter(Boolean).length;

  theme.sections = theory.sections;
  theme.tree = theory.tree;
  theme.reviewTable = theory.reviewTable;
  theme.officialSources = theory.sources;
  theme.theoryStatus = {
    autonomous: true,
    programmeLiteral: true,
    reviewedAt: REVIEW_DATE,
    words,
    sourcePolicy: 'Documentación oficial de LibreOffice 24.2 publicada por The Document Foundation'
  };

  const completed = Array.from({ length: 12 }, (_, index) => index + 25);
  const pending = Array.from({ length: 4 }, (_, index) => index + 37);
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
    block: 6,
    completedThemes: completed,
    pendingThemes: pending,
    reviewedAt: REVIEW_DATE,
    numberingCheck: { writerTheme: 35, calcTheme: 36 }
  };
})();
