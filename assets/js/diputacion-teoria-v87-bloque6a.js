(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 35);
  if (!ope || !theme) return;

  const REVIEW_DATE = '2026-07-16';
  const theory = {
  "sources": [
    {
      "label": "Writer Guide 24.2",
      "reference": "LO-WG24-MAIN",
      "url": "https://books.libreoffice.org/en/WG24/WG24.html"
    },
    {
      "label": "Writer Guide 24.2, capítulo 2: trabajo básico con texto",
      "reference": "LO-WG24-TEXT",
      "url": "https://books.libreoffice.org/en/WG24/WG2402-TextBasics.html"
    },
    {
      "label": "Writer Guide 24.2, capítulo 4: formato de texto",
      "reference": "LO-WG24-FORMAT",
      "url": "https://books.libreoffice.org/en/WG24/WG2404-FormattingText.html"
    },
    {
      "label": "Writer Guide 24.2, capítulo 13: tablas",
      "reference": "LO-WG24-TABLES",
      "url": "https://books.libreoffice.org/en/WG24/WG2413-Tables.html"
    }
  ],
  "sections": [
    {
      "heading": "Resumen orientado al aprobado",
      "paragraphs": [
        "LibreOffice Writer 24 es el procesador de textos de la suite LibreOffice. El tema exige dominar la elaboración completa de un documento: crear, abrir, guardar y exportar; introducir y corregir texto; aplicar formato directo y estilos; configurar párrafos y páginas; utilizar listas, tablas, imágenes, encabezados, pies y campos; revisar cambios; imprimir y generar PDF. En examen conviene distinguir siempre el contenido del documento, su estructura lógica y su presentación. Un documento bien construido no se limita a parecer correcto: debe conservar coherencia, permitir modificaciones globales y mantener una salida fiable al imprimir o convertir.",
        "La idea central es trabajar de lo general a lo particular. Primero se define el formato del archivo y la estructura mediante estilos; después se introduce y revisa el contenido; a continuación se añaden objetos, numeración y elementos repetitivos; y al final se comprueban ortografía, saltos, referencias, impresión y exportación. En un supuesto administrativo deben priorizarse uniformidad, legibilidad, accesibilidad, protección de datos, denominación adecuada del archivo y conservación de una versión editable además de la copia final."
      ]
    },
    {
      "heading": "Rigor técnico y terminológico",
      "paragraphs": [
        "Writer organiza el texto en caracteres, palabras, párrafos, secciones y páginas. El carácter es la unidad mínima visible; el párrafo termina al pulsar Intro y conserva propiedades como alineación, sangría, espaciado e interlineado; una sección agrupa parte del documento con configuración propia; y la página se controla principalmente mediante estilos de página. Un salto de línea manual no crea un párrafo nuevo y un salto de página no debe simularse con sucesivos retornos. Las marcas de formato permiten localizar espacios, tabulaciones, finales de párrafo y saltos que no se imprimen.",
        "El formato directo se aplica únicamente a la selección mediante botones o diálogos, mientras que un estilo reúne propiedades con nombre y puede reutilizarse. Los estilos de párrafo, carácter, marco, página, lista y tabla cumplen funciones diferentes. Modificar un estilo actualiza los elementos que dependen de él, lo que ofrece coherencia y reduce errores. La apariencia puede coincidir visualmente con un estilo, pero si se logró mediante formato directo no existe la misma relación estructural ni la misma facilidad de mantenimiento."
      ]
    },
    {
      "heading": "Desarrollo completo del epígrafe oficial",
      "paragraphs": [
        "Al crear un documento puede partirse de uno vacío o de una plantilla. Abrir recupera un archivo existente; Guardar actualiza el archivo actual; Guardar como permite elegir nombre, ubicación y formato; y Guardar una copia conserva el documento abierto mientras crea otra versión. El formato nativo de Writer es ODT, basado en OpenDocument. DOCX facilita intercambio con Microsoft Word, pero puede producir diferencias de maquetación o funciones. Antes de cambiar de formato deben atenderse los avisos de compatibilidad y comprobarse el resultado.",
        "La barra de título identifica el archivo y la aplicación. Los menús, barras de herramientas, barra lateral, reglas y barra de estado proporcionan comandos y datos de contexto. La regla permite ajustar sangrías y tabulaciones; la barra de estado muestra página, recuento, idioma, estilo y zoom; y la barra lateral reúne propiedades, estilos, galería y navegador. La interfaz puede personalizarse, por lo que en un examen práctico debe conocerse tanto el botón habitual como el menú o atajo equivalente.",
        "La inserción de texto se realiza en la posición del cursor. Seleccionar permite actuar sobre un bloque; cortar lo elimina y lo lleva al portapapeles; copiar lo mantiene y crea una copia; pegar inserta el contenido del portapapeles. Pegado especial permite elegir texto sin formato u otros formatos disponibles. Pegar como texto sin formato evita arrastrar estilos, tablas o elementos ocultos desde páginas web o documentos ajenos. Deshacer revierte operaciones recientes y Rehacer recupera una acción deshecha, dentro de los límites del historial.",
        "Buscar localiza texto; Buscar y reemplazar permite sustituir coincidencias y puede utilizar mayúsculas, palabras completas, atributos, estilos o expresiones regulares. Reemplazar todo debe emplearse con cautela, porque una cadena puede aparecer en contextos distintos. El corrector ortográfico compara palabras con los diccionarios instalados y el corrector gramatical aplica reglas lingüísticas, pero ninguno garantiza la corrección jurídica, semántica o de nombres propios. El idioma del texto condiciona la revisión y puede asignarse al párrafo o a una selección.",
        "El formato de carácter incluye familia tipográfica, tamaño, negrita, cursiva, subrayado, color, resaltado, posición y efectos. El formato de párrafo comprende alineación izquierda, derecha, centrada o justificada; sangrías; espacio anterior y posterior; interlineado; tabulaciones; flujo de texto y bordes. No deben utilizarse espacios repetidos para alinear columnas ni líneas en blanco para crear separación estable. Las tabulaciones, tablas, sangrías y propiedades de párrafo son mecanismos más fiables.",
        "Los estilos permiten separar contenido y presentación. Un estilo de párrafo es adecuado para títulos, cuerpo, citas o apartados; uno de carácter modifica fragmentos dentro de un párrafo; el estilo de página controla tamaño, orientación, márgenes, encabezados, pies, columnas y fondo; y los estilos de lista organizan numeraciones y viñetas. Para crear un índice automático, los títulos deben emplear niveles de esquema o estilos de encabezado coherentes, no simples letras grandes y negritas.",
        "La configuración de página se realiza mediante estilos de página. Puede elegirse tamaño, orientación vertical u horizontal, márgenes, columnas, encabezado, pie y numeración. Un salto de página manual inicia otra página, mientras que un cambio de estilo de página permite aplicar orientación o cabeceras diferentes a partir de un punto. Los encabezados y pies repiten información vinculada al estilo; pueden incluir texto, logotipos, número de página, fecha, nombre de archivo o campos.",
        "Las listas con viñetas no expresan orden; las numeradas sí reflejan secuencia. Una lista multinivel incorpora jerarquía y requiere controlar nivel, sangría y reinicio. Es preferible utilizar comandos de lista frente a escribir manualmente guiones o números, porque Writer mantiene la numeración al insertar o eliminar elementos. Debe comprobarse la continuidad, el reinicio y la relación entre subniveles, especialmente en bases, informes y procedimientos.",
        "Una tabla organiza información en filas y columnas. Puede insertarse indicando dimensiones y después añadirse o eliminarse filas y columnas, combinarse o dividirse celdas, ajustarse ancho, alineación, bordes, fondo y repetición de encabezado. Tab dentro de una celda avanza a la siguiente y puede crear una nueva fila al final. Las tablas no deben utilizarse indiscriminadamente para toda la maquetación. En documentos accesibles conviene mantener estructura sencilla, encabezados claros y orden lógico.",
        "Las imágenes pueden insertarse, enlazarse o incrustarse. Deben ajustarse tamaño, posición, anclaje y ajuste de texto. El anclaje determina la relación con página, párrafo, carácter o como carácter. El ajuste controla cómo rodea el texto a la imagen. Reducir visualmente una fotografía no siempre reduce el tamaño del archivo; puede ser necesario comprimir o recortar de forma adecuada. En documentos públicos deben añadirse descripciones alternativas cuando sean necesarias para accesibilidad.",
        "Los campos muestran información calculada o variable: número de página, total de páginas, fecha, hora, autor, título o referencias. Un campo no debe confundirse con texto fijo, porque puede actualizarse. El Navegador facilita desplazarse por títulos, tablas, imágenes, marcadores y otros objetos. Los marcadores identifican posiciones y las referencias cruzadas apuntan a elementos del documento. Estas herramientas son preferibles a escribir manualmente números que pueden quedar desactualizados.",
        "Los comentarios permiten anotar sin alterar el contenido principal. Registrar cambios conserva inserciones, eliminaciones y modificaciones para aceptar o rechazar posteriormente. Mostrar cambios no equivale a registrar cambios: puede haber modificaciones ocultas que siguen presentes. Antes de entregar un documento final deben revisarse comentarios, cambios pendientes, propiedades y metadatos. Una copia destinada a publicación no debe revelar notas internas, autores innecesarios o versiones previas.",
        "Las plantillas almacenan estilos, configuración de página, campos y contenido inicial reutilizable. Son apropiadas para oficios, informes, certificados o modelos repetitivos. La combinación de correspondencia genera múltiples documentos a partir de un modelo y una fuente de datos, como una hoja de cálculo o base. Antes de ejecutarla deben verificarse destinatarios, campos, filtros, formato y protección de datos. Una combinación mal filtrada puede producir envíos incorrectos a gran escala.",
        "Insertar una tabla de contenido crea un índice basado normalmente en los niveles de títulos. Debe actualizarse cuando cambia el documento. Las notas al pie aparecen en la misma página y las notas al final en una sección final. Las secciones pueden utilizar columnas o protección y permiten organizar grandes documentos. Los documentos maestros coordinan varios archivos, pero para tareas ordinarias suele bastar un documento único bien estructurado.",
        "Exportar directamente a PDF crea una copia de distribución que conserva la versión editable. El diálogo de exportación permite seleccionar páginas, calidad de imágenes, marcadores, enlaces, seguridad y otras opciones. Guardar como PDF mediante un controlador de impresión no siempre ofrece las mismas posibilidades estructurales. Antes de distribuir se debe abrir el PDF, revisar fuentes, saltos, imágenes, enlaces, búsqueda y accesibilidad, y confirmar que no contiene información oculta o páginas en blanco.",
        "La impresión exige seleccionar impresora, páginas, copias, orientación, tamaño, escala, orden e impresión a doble cara cuando esté disponible. La vista previa permite detectar cortes y saltos. En un documento administrativo se revisan encabezados, firmas, fechas, numeración, anexos y márgenes antes de imprimir. Para información confidencial debe comprobarse la impresora de destino y retirarse inmediatamente el resultado.",
        "En un supuesto práctico, la secuencia segura es abrir el modelo autorizado, guardar una copia de trabajo con nombre normalizado, aplicar estilos, introducir y revisar contenido, insertar tablas o campos, actualizar índices y referencias, aceptar o rechazar cambios, eliminar comentarios, comprobar vista previa, guardar en ODT y generar el PDF final. La denominación y la carpeta deben corresponder al expediente. No se sobrescribe el original ni se publica el documento sin una comprobación final."
      ]
    },
    {
      "heading": "Síntesis de repaso rápido",
      "paragraphs": [
        "Writer 24: ODT como formato nativo; Guardar no es Guardar como; pegado especial evita formato ajeno; estilos aportan coherencia; el párrafo termina con Intro; el salto de línea no crea párrafo; los estilos de página controlan orientación, márgenes, encabezados y pies; listas y tablas mantienen estructura; campos e índices se actualizan; comentarios y cambios deben revisarse; ODT conserva edición y PDF sirve para distribución comprobada."
      ]
    },
    {
      "heading": "Opo-Test: puntos calientes",
      "paragraphs": [
        "Formato directo frente a estilos; ODT y DOCX; Guardar, Guardar como y exportar; cortar, copiar, pegar y pegado especial; marcas de formato; búsqueda y reemplazo; alineación, sangría, espaciado e interlineado; salto de línea y salto de página; estilo de párrafo y estilo de página; listas multinivel; combinación y división de celdas; anclaje y ajuste de imágenes; campos, referencias, índice, comentarios, control de cambios, plantillas, combinación de correspondencia, PDF e impresión."
      ]
    },
    {
      "heading": "Tres preguntas de retención activa",
      "paragraphs": [
        "¿Por qué un estilo de párrafo es preferible a repetir formato directo en todos los títulos? ¿Qué diferencia existe entre un salto de línea, un nuevo párrafo y un salto de página? ¿Qué revisiones deben realizarse antes de distribuir un documento como PDF definitivo?"
      ]
    },
    {
      "heading": "Estrategia de examen",
      "paragraphs": [
        "Descarta respuestas que recomienden alinear con espacios, separar con retornos repetidos, numerar manualmente una lista compleja o convertir el único original editable en PDF. Ante dos opciones visualmente equivalentes, suele ser más correcta la que utiliza estilos, campos, listas o tablas de forma estructurada. En preguntas de entrega final, prioriza revisar cambios, comentarios, metadatos, vista previa y compatibilidad antes de publicar."
      ]
    }
  ],
  "tree": "LibreOffice 24 Writer\n├─ Archivo y ciclo del documento\n│  ├─ Crear, abrir y plantillas\n│  ├─ Guardar, Guardar como y copias\n│  ├─ ODT, DOCX y compatibilidad\n│  └─ Exportación a PDF e impresión\n├─ Edición\n│  ├─ Selección, cortar, copiar y pegar\n│  ├─ Pegado especial y deshacer\n│  ├─ Buscar y reemplazar\n│  └─ Ortografía, idioma y autocorrección\n├─ Formato y estructura\n│  ├─ Carácter y párrafo\n│  ├─ Estilos y formato directo\n│  ├─ Estilos de página, saltos y secciones\n│  └─ Listas, títulos e índice\n├─ Objetos\n│  ├─ Tablas\n│  ├─ Imágenes, anclaje y ajuste\n│  ├─ Campos, marcadores y referencias\n│  └─ Encabezados, pies y numeración\n└─ Revisión y salida\n   ├─ Comentarios y control de cambios\n   ├─ Plantillas y correspondencia\n   ├─ Accesibilidad y metadatos\n   └─ Comprobación final y protección de datos",
  "reviewTable": [
    ["ODT", "Formato nativo editable de Writer", "Puede exportarse o guardarse en otros formatos"],
    ["Guardar como", "Cambia nombre, ubicación o formato", "Debe revisarse la compatibilidad"],
    ["Pegado especial", "Permite elegir cómo insertar", "Texto sin formato evita estilos ajenos"],
    ["Estilo de párrafo", "Aplica estructura y formato reutilizable", "Facilita cambios globales"],
    ["Formato directo", "Actúa sobre la selección", "Puede ocultar incoherencias"],
    ["Salto de línea", "Cambia de línea sin crear párrafo", "No sustituye al salto de página"],
    ["Estilo de página", "Controla márgenes, orientación y cabeceras", "Puede cambiarse mediante salto"],
    ["Lista", "Mantiene viñetas o numeración", "Admite niveles y reinicios"],
    ["Tabla", "Organiza filas y columnas", "Puede repetir encabezado"],
    ["Campo", "Muestra información variable", "Debe actualizarse"],
    ["Registrar cambios", "Conserva modificaciones para revisión", "Deben aceptarse o rechazarse"],
    ["PDF", "Copia de distribución", "No sustituye al original editable"]
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
})();
