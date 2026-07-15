(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = 'v0.87.0';
  const REVIEW_DATE = '2026-07-15';
  const BOP = { label: 'BOP Toledo núm. 118, de 25 de junio de 2026, programa Administrativo/a C1', reference: 'BOP-TO-118-2026-2934', url: 'https://bop.diputoledo.es/', reviewedAt: REVIEW_DATE };
  const GENERAL = { label: 'The Document Foundation: ayuda oficial de LibreOffice', reference: 'LIBREOFFICE-HELP-OFFICIAL', url: 'https://help.libreoffice.org/latest/en-US/', reviewedAt: REVIEW_DATE };
  const WRITER = { label: 'Ayuda oficial de LibreOffice Writer', reference: 'LIBREOFFICE-WRITER-HELP', url: 'https://help.libreoffice.org/latest/en-US/text/swriter/main0000.html', reviewedAt: REVIEW_DATE };
  const CALC = { label: 'Ayuda oficial de LibreOffice Calc', reference: 'LIBREOFFICE-CALC-HELP', url: 'https://help.libreoffice.org/latest/en-US/text/scalc/main0000.html', reviewedAt: REVIEW_DATE };
  const BASE = { label: 'Ayuda oficial de LibreOffice Base', reference: 'LIBREOFFICE-BASE-HELP', url: 'https://help.libreoffice.org/latest/en-US/text/sdatabase/main.html', reviewedAt: REVIEW_DATE };
  const IMPRESS = { label: 'Ayuda oficial de LibreOffice Impress', reference: 'LIBREOFFICE-IMPRESS-HELP', url: 'https://help.libreoffice.org/latest/en-US/text/simpress/main0000.html', reviewedAt: REVIEW_DATE };

  const THEORY = {
    35: {
      title: 'LibreOffice 24 I. Elaboración y uso de documentos de texto con LibreOffice 24 Writer.',
      sources: [BOP, WRITER, GENERAL],
      coverage: ['documento', 'ODT', 'DOCX', 'guardar', 'exportar PDF', 'carácter', 'párrafo', 'estilos', 'estilo de página', 'listas', 'tablas', 'imágenes', 'encabezado', 'pie', 'campos', 'plantillas', 'buscar y reemplazar', 'comentarios', 'control de cambios', 'combinación de correspondencia', 'impresión', 'accesibilidad'],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'LibreOffice Writer es el procesador de textos de la suite LibreOffice. Permite crear, editar, estructurar, revisar, imprimir y exportar documentos. En una oficina pública se utiliza para oficios, informes, decretos, certificados, actas, cartas, formularios, anuncios, plantillas y documentos destinados a firma o incorporación a un expediente.',
          'El núcleo del tema es distinguir contenido y formato; carácter y párrafo; formato directo y estilos; guardar y guardar como; documento editable y PDF; salto de línea, salto de párrafo y salto de página; encabezado y pie; comentarios y control de cambios; tabla y tabulación; y documento individual y combinación de correspondencia.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El título se reproduce literalmente del programa oficial. La ayuda de The Document Foundation describe las funciones de Writer, sus menús, barras, atajos e instrucciones de uso. La propia ayuda advierte que se refiere a una configuración predeterminada y que colores, acciones o elementos configurables pueden variar. Por ello se estudian conceptos y efectos, no la posición inmutable de un botón.',
          'El programa menciona LibreOffice 24. La documentación oficial en línea puede corresponder a una revisión posterior. OpoWeb incorpora únicamente funciones estables presentes en la familia 24 y evita atribuir a esa versión novedades exclusivas no comprobadas. Antes del examen debe contrastarse la instalación que utilice la Diputación y cualquier precisión publicada por el tribunal.',
          'Writer no determina por sí solo la validez jurídica de un documento. Firma, sello, CSV, copia auténtica, registro, notificación, conservación y protección de datos dependen de las normas y aplicaciones administrativas. Exportar a PDF conserva una presentación, pero no firma ni registra automáticamente el documento.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Un documento Writer contiene texto y puede integrar tablas, imágenes, formas, marcos, campos, índices y otros objetos. El formato nativo habitual es ODT, basado en OpenDocument. Writer también abre y guarda otros formatos, incluido DOCX, pero la compatibilidad no garantiza identidad perfecta cuando intervienen fuentes, macros, campos, estilos complejos o funciones no equivalentes.',
          'Crear genera un documento nuevo. Abrir carga uno existente. Guardar actualiza el archivo actual; Guardar como permite elegir otro nombre, ubicación o formato. Exportar genera una salida distinta, como PDF, sin sustituir necesariamente el editable. En un expediente conviene conservar el original editable cuando proceda y diferenciarlo claramente de la versión final, firmada o publicada.',
          'El formato de carácter afecta a unidades de texto: familia y tamaño de letra, negrita, cursiva, subrayado, color, efectos, idioma o posición. El formato de párrafo afecta al conjunto delimitado por una marca de párrafo: alineación, sangrías, espaciado, interlineado, tabulaciones, flujo y bordes. Seleccionar una palabra y centrarla puede modificar el párrafo completo porque la alineación es una propiedad de párrafo.',
          'El formato directo se aplica manualmente a una selección. Los estilos agrupan propiedades con un nombre y permiten coherencia, cambios globales, estructura e índices. Existen estilos de párrafo, carácter, página, marco, lista y tabla según contexto. Un documento largo debe apoyarse en estilos para títulos y cuerpo en lugar de repetir formato directo en cada apartado.',
          'El estilo de página controla tamaño, orientación, márgenes, columnas, fondo, encabezado, pie y otras propiedades. Insertar una página distinta suele requerir un salto de página asociado a otro estilo. Cambiar orientación en una página concreta no debe hacerse añadiendo espacios o retornos, sino mediante estructura y estilos adecuados.',
          'La tecla Intro crea un nuevo párrafo. Un salto de línea mantiene el mismo párrafo y solo cambia de línea. Un salto de página fuerza el comienzo en otra página. Añadir retornos vacíos para empujar contenido es una práctica frágil porque cambia con impresora, fuente o edición. Los saltos y estilos permiten un resultado estable.',
          'Las listas numeradas y con viñetas organizan elementos. La numeración automática puede tener niveles, reinicios y estilos. No debe simularse una lista escribiendo manualmente números si se requiere renumeración automática. En documentos normativos es importante distinguir numeración visual de la estructura real del texto.',
          'Las tabulaciones alinean texto en posiciones definidas. No son equivalentes a introducir muchos espacios, porque estos dependen de la fuente y se desajustan. Para datos tabulares complejos se utilizan tablas, no tabulaciones. Una tabla está formada por filas, columnas y celdas y permite insertar, eliminar, combinar, dividir, aplicar bordes y repetir encabezados.',
          'Las imágenes pueden insertarse, anclarse y ajustar respecto del texto. El anclaje determina la relación con página, párrafo, carácter u otro punto disponible. El ajuste controla cómo fluye el texto alrededor. Una imagen visualmente colocada puede desplazarse si el anclaje no es el adecuado. Deben cuidarse resolución, derechos de uso, texto alternativo y tamaño final.',
          'Encabezados y pies son áreas repetidas vinculadas al estilo de página. Pueden contener logotipo, órgano, título, número de página, fecha o código de expediente. El número de página suele insertarse como campo para actualizarse automáticamente. Escribir el mismo número en todas las páginas produciría un dato fijo incorrecto.',
          'Los campos muestran datos dinámicos, como número de página, fecha, autor, título o referencias. Su visualización puede actualizarse. Un campo no es necesariamente texto ordinario aunque se vea igual. Antes de publicar un documento se revisan resultados, referencias y fechas para evitar valores desactualizados.',
          'Las plantillas proporcionan estructura, estilos y contenido inicial reutilizable. Crear un documento desde plantilla no significa editar la plantilla original. En una organización facilitan imagen corporativa, márgenes, encabezados y formatos uniformes. Deben versionarse y mantenerse para evitar que cada usuario cree variantes incompatibles.',
          'Buscar localiza texto o patrones. Buscar y reemplazar puede sustituir múltiples apariciones y admite opciones como coincidencia de mayúsculas, palabras completas o expresiones. Es una función potente y peligrosa: una sustitución global sin revisión puede alterar nombres, números de expediente o partes de otras palabras. Conviene probar y revisar resultados.',
          'El corrector ortográfico ayuda a detectar términos no reconocidos, pero no garantiza corrección jurídica, gramatical ni factual. El idioma asignado al texto influye en la revisión. Incorporar una palabra al diccionario evita avisos futuros, pero no demuestra que esté bien utilizada en el documento concreto.',
          'Los comentarios permiten anotar sin formar parte del texto final ordinario. El control de cambios registra inserciones, eliminaciones y modificaciones para que puedan aceptarse o rechazarse. Ocultar marcas no equivale a aceptarlas. Antes de enviar o publicar deben revisarse comentarios, cambios, propiedades y metadatos que puedan revelar información interna.',
          'La combinación de correspondencia genera documentos personalizados a partir de una fuente de datos y un documento principal. Los campos se sustituyen por valores de cada registro. Antes de producir cartas o etiquetas debe comprobarse la fuente, el filtro, los destinatarios, los campos vacíos y la protección de datos. No debe generarse ni enviarse un lote completo sin una muestra de control.',
          'La impresión exige revisar impresora, páginas, copias, orientación, tamaño y salida. La exportación a PDF permite opciones de páginas, marcadores, calidad y otros parámetros según versión. PDF mantiene una presentación relativamente estable, pero no debe confundirse con un archivo inaccesible o inalterable. La accesibilidad requiere estilos, orden lógico, títulos, textos alternativos y tablas comprensibles.',
          'En un flujo administrativo seguro se parte de una plantilla vigente, se trabaja con estilos, se revisan datos y ortografía, se eliminan comentarios internos, se guarda el editable en ubicación autorizada, se exporta al formato requerido, se comprueba el resultado y se aplica la firma o incorporación al expediente mediante la aplicación competente.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Writer crea documentos de texto; ODT es su formato nativo habitual. Guardar actualiza; Guardar como cambia nombre, lugar o formato; exportar crea otra salida. Carácter y párrafo tienen propiedades distintas. Los estilos aportan coherencia y estructura; el formato directo solo afecta a la selección concreta.',
          'Tabulaciones no son espacios. Tabla no es una sucesión de tabuladores. Encabezado y pie dependen del estilo de página. Número de página y fecha pueden ser campos. Comentario y control de cambios no son contenido final; ocultar cambios no es aceptarlos. PDF no equivale a firma ni registro.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'ODT frente a DOCX; Guardar frente a Guardar como; exportar frente a imprimir; formato directo frente a estilo; carácter frente a párrafo; Intro frente a salto de línea; salto de página frente a retornos vacíos; tabulaciones frente a espacios; encabezado frente a margen; campo frente a texto fijo; comentario frente a cambio registrado; ocultar frente a aceptar; plantilla frente a documento creado desde ella.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica por qué un documento administrativo largo debe estructurarse con estilos y no solo con formato directo.',
          '2. Diferencia Guardar, Guardar como, Exportar a PDF e Imprimir a PDF e indica qué archivos resultan.',
          '3. Diseña un control previo al envío de una combinación de correspondencia con datos personales.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Clasifica la pregunta por nivel: archivo, página, párrafo, carácter, objeto o revisión. Las respuestas incorrectas suelen atribuir una función al nivel equivocado. En supuestos, describe una secuencia verificable: plantilla, estilos, edición, revisión, metadatos, guardado, exportación y comprobación. Evita depender de la ubicación exacta de un menú.'
        ]}
      ],
      tree: 'Tema 35 · LibreOffice Writer\n├─ Archivo\n│  ├─ ODT y compatibilidad DOCX\n│  ├─ Guardar y Guardar como\n│  └─ Exportar a PDF\n├─ Formato\n│  ├─ Carácter\n│  ├─ Párrafo\n│  ├─ Estilos\n│  └─ Estilos de página\n├─ Estructura\n│  ├─ Saltos\n│  ├─ Listas y tabulaciones\n│  ├─ Tablas e imágenes\n│  ├─ Encabezados, pies y campos\n│  └─ Plantillas\n└─ Revisión y salida\n   ├─ Buscar y reemplazar\n   ├─ Ortografía\n   ├─ Comentarios y cambios\n   ├─ Combinación de correspondencia\n   ├─ Impresión y PDF\n   └─ Accesibilidad',
      reviewTable: [['Elemento','Regla clave'],['ODT','Formato nativo habitual de Writer'],['Guardar','Actualiza el archivo actual'],['Guardar como','Permite otro nombre, ubicación o formato'],['Carácter','Fuente, tamaño y efectos de texto'],['Párrafo','Alineación, sangrías, espaciado e interlineado'],['Estilo','Conjunto reutilizable y estructural de propiedades'],['Página','Tamaño, orientación, márgenes, encabezado y pie'],['Tabla','Filas, columnas y celdas'],['Campo','Dato dinámico que puede actualizarse'],['Control de cambios','Registra modificaciones para aceptar o rechazar'],['Combinación','Documento principal más fuente de datos'],['PDF','Salida de presentación; no implica firma ni registro']]
    },
    36: {
      title: 'LibreOffice 24 II. Elaboración y uso de hojas de cálculo con LibreOffice 24 Calc.',
      sources: [BOP, CALC, GENERAL],
      coverage: ['libro', 'hoja', 'celda', 'rango', 'datos', 'fórmula', 'función', 'operadores', 'referencia relativa', 'referencia absoluta', 'referencia mixta', 'relleno', 'ordenar', 'filtrar', 'validación', 'formato condicional', 'gráfico', 'tabla dinámica', 'protección', 'impresión', 'errores'],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'LibreOffice Calc es la hoja de cálculo de LibreOffice. Organiza información en libros, hojas, filas, columnas, celdas y rangos; realiza cálculos con fórmulas y funciones; ordena y filtra registros; aplica formatos; valida entradas; crea gráficos y tablas dinámicas; y prepara listados para impresión o exportación.',
          'En examen deben dominarse referencias relativas, absolutas y mixtas; diferencia entre fórmula, función y valor mostrado; copiar y rellenar; ordenar y filtrar; contenido y formato; error de fórmula y error de datos; protección y cifrado; y hoja, libro, celda y rango.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El título literal procede del BOP. La ayuda oficial de Calc incluye instrucciones de uso, funciones por categorías, gráficos, menús, barras y atajos. Las funciones pueden aparecer con nombres localizados y separadores distintos según idioma y configuración. OpoWeb usa nombres habituales en español, pero debe atenderse al entorno instalado en el examen.',
          'La documentación en línea puede corresponder a una versión posterior a la 24. Solo se incorporan conceptos estables. No se memoriza como universal el separador coma o punto y coma, el nombre traducido de una función ni una posición de menú, porque dependen de versión, idioma y configuración regional.',
          'Una hoja de cálculo puede contener datos personales o resultados económicos. Ocultar una hoja o proteger celdas no equivale necesariamente a cifrar el archivo. La integridad exige verificar fórmulas, rangos, filtros y totales antes de usar el resultado en un expediente.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'El libro es el archivo completo y contiene una o varias hojas. Una hoja se organiza en filas numeradas y columnas identificadas normalmente por letras. La intersección es una celda, cuya referencia combina columna y fila, como A1. Un rango agrupa celdas, por ejemplo A1:C10. Una celda activa es la seleccionada para introducir o modificar datos.',
          'Las celdas pueden contener texto, números, fechas, horas, porcentajes, valores lógicos, fórmulas o errores. La apariencia depende del formato. Un número puede mostrarse como moneda o porcentaje sin que cambie necesariamente su valor interno. Escribir 10 y aplicar porcentaje no representa lo mismo que introducir 10 %. Debe comprobarse valor y formato.',
          'Una fórmula comienza normalmente por el signo igual y combina referencias, constantes, operadores y funciones. Los operadores aritméticos incluyen suma, resta, multiplicación, división, potencia y porcentaje. La precedencia determina el orden de cálculo y puede alterarse con paréntesis. El valor mostrado es el resultado; la barra de fórmulas permite ver la expresión.',
          'Una función es una fórmula predefinida que recibe argumentos. Son habituales SUMA, PROMEDIO, MIN, MAX, CONTAR, CONTARA, SI, REDONDEAR y funciones de fecha y texto. El rango debe revisarse: una SUMA que omite la última fila puede devolver un número válido pero incorrecto. El asistente ayuda a construir, no sustituye comprender argumentos y resultado.',
          'Las referencias relativas cambian al copiar una fórmula: A1 desplazada una fila pasa a A2. Las absolutas fijan columna y fila mediante signos de dólar: $A$1. Las mixtas fijan solo columna o fila: $A1 o A$1. Este comportamiento permite copiar cálculos, pero es una fuente frecuente de errores cuando un porcentaje, tarifa o celda de control debía permanecer fija.',
          'Copiar pega contenido, fórmulas y formato según opción. Pegado especial permite seleccionar elementos, como valores, fórmulas o formatos. Pegar solo valores elimina la fórmula y conserva el resultado existente en ese momento. Esto puede ser útil para entregar resultados, pero rompe actualización y trazabilidad si se hace sobre el original.',
          'El controlador de relleno extiende series o copia patrones y fórmulas. Puede incrementar fechas, números o referencias. Debe verificarse el patrón reconocido. Arrastrar una fórmula con referencias relativas recalcula direcciones; no genera necesariamente la misma fórmula literal.',
          'Insertar o eliminar filas, columnas y celdas desplaza datos y puede modificar referencias. Calc ajusta muchas fórmulas, pero no debe asumirse que toda referencia externa, texto o rango nombrado queda correcto. Antes de modificar una tabla usada por otros cálculos se identifica su estructura y se guarda una copia controlada.',
          'Ordenar cambia el orden de los registros según una o varias claves. Debe incluirse toda la tabla para que las filas permanezcan unidas. Ordenar solo una columna puede separar nombres de importes o expedientes. Filtrar oculta temporalmente filas que no cumplen criterios sin borrarlas. Los totales visibles pueden requerir funciones adecuadas si deben ignorar filas filtradas.',
          'El filtro automático ofrece criterios por columna. Un filtro estándar o avanzado puede combinar condiciones. Borrar un filtro restaura la visualización de filas; no recupera registros eliminados. Copiar una selección filtrada puede producir resultados distintos según la operación, por lo que se debe comprobar qué filas se incluyen.',
          'La validación de datos restringe o avisa sobre entradas: lista, intervalo numérico, fecha u otra condición. Ayuda a reducir errores, pero no sustituye permisos ni depuración de datos importados. Un valor pegado o una configuración diferente puede requerir revisión. Los mensajes de entrada y error deben ser comprensibles.',
          'El formato condicional modifica la apariencia cuando se cumplen reglas. No cambia necesariamente el valor. Un color rojo puede señalar vencimiento, duplicado o umbral, pero el significado depende de la regla. Copiar formato o modificar rangos puede alterar su aplicación. No debe usarse el color como único canal de información.',
          'Los estilos de celda agrupan formato. Formato directo y estilos se diferencian igual que en Writer. El formato incluye número, fuente, alineación, borde, fondo y protección. Ajustar ancho o alto cambia presentación. Combinar celdas puede dificultar ordenar, filtrar y accesibilidad y debe usarse con moderación.',
          'Los gráficos representan datos seleccionados y se vinculan al rango. Tipo, series, categorías, títulos, leyenda y ejes deben corresponder a la pregunta que se quiere mostrar. Un gráfico no corrige datos erróneos. Si se amplía la tabla, hay que comprobar que el rango del gráfico incluye los nuevos registros.',
          'La tabla dinámica resume grandes conjuntos por campos de fila, columna, datos y filtro. Agrupa y calcula sin sustituir la fuente. Actualizar es necesario cuando cambian los datos. No debe confundirse con una tabla ordinaria ni con un filtro. Su resultado depende de la estructura limpia de encabezados y registros.',
          'Las hojas pueden ocultarse o protegerse y las celdas pueden marcarse como protegidas cuando la protección está activa. Estas medidas evitan modificaciones accidentales, pero no equivalen necesariamente a confidencialidad criptográfica. Para impedir apertura se necesita protección de archivo adecuada y política institucional.',
          'Los errores muestran problemas como división por cero, referencia no válida, nombre desconocido o argumento incorrecto. También existen errores silenciosos: rango incompleto, dato como texto, fecha mal interpretada o fórmula sobrescrita por un valor. La auditoría debe revisar fórmulas, tipos, referencias y casos límite.',
          'Para imprimir se define área, escala, orientación, márgenes, repetición de filas o columnas, saltos y encabezado o pie. Una hoja ancha puede repartirse en páginas ilegibles. La vista de salto y la vista previa ayudan a ajustar. Exportar a PDF conserva una salida, pero deben comprobarse hojas incluidas, páginas vacías y confidencialidad.',
          'En un listado administrativo se recomienda una fila por registro, una columna por atributo, encabezados únicos, ausencia de filas vacías internas, tipos coherentes y una copia controlada del origen. Tras ordenar, filtrar o calcular, se comprueban conteo, totales y una muestra con el expediente original.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Libro contiene hojas; hoja contiene celdas. Rango es conjunto de celdas. Fórmula calcula y comienza por igual; función es una fórmula predefinida. Referencia relativa cambia, absoluta $A$1 no cambia y mixta fija fila o columna. Formato no es valor.',
          'Ordenar reorganiza; filtrar oculta filas según criterios. Validación restringe entradas; formato condicional cambia apariencia; gráfico representa datos; tabla dinámica resume. Proteger no es siempre cifrar. Una fórmula puede dar resultado numérico y seguir siendo incorrecta por rango o tipo.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'A1 frente a $A$1, $A1 y A$1; fórmula frente a resultado; COUNT/CONTAR frente a COUNTA/CONTARA; copiar fórmula frente a pegar valores; ordenar toda la tabla; filtro no elimina; formato condicional no cambia valor; ocultar no protege confidencialidad; tabla dinámica no modifica la fuente; gráfico depende del rango; error visible frente a error lógico.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica cómo cambia =A1*$D$1 al copiarla una fila hacia abajo y una columna a la derecha.',
          '2. Diseña una tabla de expedientes que pueda ordenarse y filtrarse sin descolocar datos.',
          '3. Diferencia validación, formato condicional, protección de hoja y cifrado del archivo.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Ante una fórmula, identifica operadores, referencias y rango antes de calcular. Ante una herramienta, pregunta si cambia valor, orden, visibilidad o presentación. En supuestos, añade copia de seguridad, tabla completa, tipos coherentes, comprobación de totales y protección de datos. No memorices solo el icono.'
        ]}
      ],
      tree: 'Tema 36 · LibreOffice Calc\n├─ Estructura\n│  ├─ Libro y hojas\n│  ├─ Filas, columnas y celdas\n│  └─ Rangos y tipos de datos\n├─ Cálculo\n│  ├─ Fórmulas y operadores\n│  ├─ Funciones\n│  ├─ Referencias relativas\n│  ├─ Referencias absolutas y mixtas\n│  └─ Copiar, pegar y rellenar\n├─ Datos\n│  ├─ Ordenar y filtrar\n│  ├─ Validación\n│  ├─ Formato condicional\n│  ├─ Gráficos\n│  └─ Tablas dinámicas\n└─ Control\n   ├─ Protección\n   ├─ Errores visibles y lógicos\n   ├─ Impresión y PDF\n   └─ Verificación de totales',
      reviewTable: [['Concepto','Regla clave'],['Celda','Intersección de fila y columna'],['Rango','Conjunto de celdas'],['Fórmula','Expresión de cálculo iniciada por igual'],['Función','Cálculo predefinido con argumentos'],['Relativa','Cambia al copiar'],['Absoluta','$A$1 fija fila y columna'],['Mixta','$A1 o A$1 fija una parte'],['Ordenar','Reorganiza registros completos'],['Filtrar','Oculta filas que no cumplen criterio'],['Validación','Controla entradas permitidas'],['Condicional','Cambia apariencia según regla'],['Gráfico','Representa un rango de datos'],['Tabla dinámica','Resume y agrupa la fuente'],['Protección','Evita cambios; no implica siempre cifrado']]
    },
    37: {
      title: 'LibreOffice 24 III. Elaboración y uso de bases de datos con LibreOffice 24 Base.',
      sources: [BOP, BASE, GENERAL],
      coverage: ['base de datos', 'ODB', 'motor', 'conexión externa', 'tabla', 'campo', 'registro', 'tipo de dato', 'clave primaria', 'índice', 'relación', 'integridad referencial', 'consulta', 'criterio', 'SQL', 'formulario', 'informe', 'ordenar', 'filtrar', 'importar', 'exportar', 'seguridad', 'copia de seguridad'],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'LibreOffice Base permite trabajar con bases de datos, crear documentos de base de datos y conectarse a fuentes externas. Su interfaz organiza tablas, consultas, formularios e informes. El archivo ODB puede contener objetos y la conexión a los datos; no debe asumirse que todos los registros están siempre embebidos dentro del mismo archivo.',
          'El tema exige distinguir tabla, campo y registro; clave primaria e índice; relación e integridad referencial; consulta, formulario e informe; filtro y consulta; Base y motor de base de datos; archivo ODB y datos externos; y modificación de estructura frente a edición de registros.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La ayuda oficial indica que Base accede a diversos formatos, admite algunas bases de archivos planos y puede conectar con bases relacionales externas. También advierte que ciertas fuentes, como hojas de cálculo, archivos de texto y libretas de direcciones, son de solo lectura para determinadas operaciones desde Base.',
          'El documento de base de datos contiene consultas, informes y formularios, además del enlace a la base donde se almacenan los registros, y guarda información de formato. Esta precisión impide afirmar que copiar un ODB garantiza siempre copiar todos los datos de una base externa.',
          'El programa menciona LibreOffice 24. Se estudian principios y operaciones estables. Conectores, controladores, motores disponibles y opciones pueden depender de la instalación. No se atribuye un motor concreto a la Diputación sin evidencia oficial.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Una base de datos organiza información estructurada para almacenarla, consultarla y mantenerla. En el modelo relacional, la tabla representa una entidad o relación; las columnas son campos o atributos; las filas son registros. Cada campo tiene nombre y tipo de dato. Mezclar conceptos produce errores: un registro no es una columna y una tabla no es un informe.',
          'Los tipos de datos determinan valores y operaciones: texto, números, fechas, horas, booleanos, binarios y otros según motor. Un código postal, DNI o número de expediente puede requerir texto si se deben conservar ceros iniciales o caracteres. Elegir tipo incorrecto dificulta validación, ordenación y búsquedas.',
          'La clave primaria identifica de forma única cada registro y no debe repetirse. Puede ser un campo o combinación de campos según diseño. Una clave autonumérica facilita identificación técnica, pero no sustituye automáticamente una clave de negocio ni evita duplicados en otros campos. La clave ajena referencia la clave de otra tabla.',
          'Un índice acelera búsquedas y puede imponer unicidad, pero no equivale necesariamente a clave primaria. Demasiados índices encarecen inserciones y actualizaciones. En examen debe separarse identificación lógica, relación e instrumento de rendimiento.',
          'Las relaciones conectan tablas mediante campos compatibles. Uno a muchos es común: un interesado puede tener varios expedientes, pero cada expediente se vincula a un interesado. Muchos a muchos suele resolverse mediante tabla intermedia. Uno a uno se reserva para casos concretos. El diseño debe evitar repetir datos innecesarios.',
          'La integridad referencial evita referencias huérfanas. Puede impedir borrar un registro relacionado o definir acciones en cascada según motor y configuración. Una cascada no debe activarse sin comprender su efecto, porque borrar una fila principal podría afectar a múltiples registros. Base muestra relaciones, pero la ejecución corresponde al motor.',
          'Crear una base puede realizarse mediante asistente. Registrar una base en LibreOffice permite que otros módulos la utilicen, por ejemplo en combinación de correspondencia. Registrar no significa publicar los datos ni conceder acceso general. El archivo ODB actúa como documento de trabajo y conexión.',
          'Una tabla puede crearse en vista de diseño o mediante asistente. En diseño se definen campos, tipos, longitudes, valores predeterminados, obligatoriedad y clave. Cambiar un tipo cuando ya existen datos puede truncar, convertir o rechazar valores. Antes de alterar estructura se realiza copia y se valora el motor.',
          'La introducción directa en tabla muestra registros, pero no siempre es el medio más seguro para usuarios. Un formulario ofrece controles, etiquetas, listas, casillas y navegación adaptada. Puede limitar campos y facilitar validación. El formulario no es una copia de los datos: presenta y modifica registros de una fuente cuando tiene permiso.',
          'Una consulta selecciona, filtra, ordena, combina o calcula información. Puede construirse en diseño o SQL. Elegir campos define qué se muestra; criterios limitan filas; orden establece secuencia; agrupación resume. Una consulta de selección no debe confundirse con una consulta de acción que modifica datos, si el motor y la herramienta la admiten.',
          'Los criterios deben considerar tipos y operadores. Igualdad, desigualdad, intervalos, patrones, nulos y combinaciones AND/OR producen resultados distintos. Un campo vacío puede ser nulo o cadena vacía. Buscar fechas como texto puede fallar según formato y motor. Se prueba la consulta con datos conocidos.',
          'SQL es el lenguaje utilizado por bases relacionales para definir, consultar y modificar datos. SELECT recupera; INSERT añade; UPDATE modifica; DELETE elimina; CREATE y ALTER cambian estructura. Base puede generar SQL desde el diseñador, pero no todo dialecto es idéntico. Ejecutar una sentencia de modificación exige copia, permisos y cláusula WHERE correcta.',
          'Un informe presenta datos con diseño para lectura o impresión. Puede agrupar, ordenar, calcular y aplicar encabezados y pies. No es la fuente maestra y puede quedar desactualizado si se guarda como documento estático. Debe indicarse fecha, criterios y origen cuando se use para decisión administrativa.',
          'Ordenar cambia la presentación; filtrar limita registros visibles; una consulta puede reutilizar criterios y combinar tablas. Un filtro aplicado a una vista no elimina datos. Borrar una fila sí modifica la base. La interfaz debe comprobarse antes de interpretar una tabla aparentemente vacía.',
          'Importar incorpora o vincula datos según procedimiento. Exportar genera una copia o formato de intercambio. CSV no conserva tipos, relaciones, formularios ni consultas. Copiar una tabla desde Calc puede convertir valores según formato. Se revisan delimitadores, codificación, encabezados, fechas y claves.',
          'Las copias de seguridad deben incluir el almacenamiento real. Si el ODB conecta con servidor externo, copiar solo el ODB no copia las tablas del servidor. Si la base está embebida, cerrar correctamente antes de copiar reduce riesgo de corrupción. La restauración debe probarse y respetar permisos y protección de datos.',
          'El acceso depende del motor, usuario, contraseña, archivo y sistema operativo. Un formulario oculto o una macro no sustituyen permisos de base de datos. Los datos personales deben limitarse a finalidad, acceso y conservación. Las credenciales no se comparten ni se guardan en documentos sin protección.',
          'En un supuesto administrativo se identifica primero la entidad y sus atributos, se normaliza para evitar duplicación, se define clave, relaciones y restricciones, se crea una consulta para la necesidad, un formulario para captura y un informe para salida. Después se prueban altas, modificaciones, búsquedas, nulos, duplicados y borrados.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Tabla contiene registros; registro contiene campos. Tipo define valores. Clave primaria identifica; clave ajena relaciona; índice acelera o impone unicidad. Relación e integridad referencial evitan incoherencias. Consulta recupera o transforma; formulario facilita entrada; informe presenta resultados.',
          'ODB puede contener objetos y enlace a la base; no garantiza incluir datos externos. Registrar una base la hace utilizable por LibreOffice, no pública. Filtro no borra. CSV pierde estructura relacional. Copia de seguridad debe abarcar el almacenamiento real y probar restauración.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Campo frente a registro; clave primaria frente a índice; clave ajena frente a dato repetido; uno a muchos frente a muchos a muchos; formulario frente a tabla; informe frente a consulta; filtro frente a borrado; ODB frente a motor; registro en LibreOffice frente a publicación; CSV frente a copia completa; consulta de selección frente a acción; nulo frente a cadena vacía.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Diseña las tablas y relaciones mínimas para interesados y expedientes sin repetir datos personales en cada actuación.',
          '2. Explica por qué copiar un archivo ODB puede no constituir una copia completa de la base de datos.',
          '3. Distingue consulta, formulario e informe mediante un caso de registro y seguimiento de solicitudes.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Identifica si se pregunta por estructura, datos, acceso, consulta o presentación. En relaciones, localiza clave primaria y ajena. En SQL, comprueba si la sentencia lee o modifica y si existe condición. En supuestos, menciona tipos, claves, integridad, permisos, copia de seguridad y prueba de resultados.'
        ]}
      ],
      tree: 'Tema 37 · LibreOffice Base\n├─ Documento y almacenamiento\n│  ├─ Archivo ODB\n│  ├─ Base embebida o externa\n│  └─ Registro en LibreOffice\n├─ Modelo relacional\n│  ├─ Tablas\n│  ├─ Campos y tipos\n│  ├─ Registros\n│  ├─ Clave primaria e índices\n│  ├─ Claves ajenas\n│  └─ Relaciones e integridad\n├─ Objetos\n│  ├─ Consultas y SQL\n│  ├─ Formularios\n│  └─ Informes\n└─ Gestión\n   ├─ Ordenar y filtrar\n   ├─ Importar y exportar\n   ├─ Seguridad\n   └─ Copias y restauración',
      reviewTable: [['Elemento','Función'],['Tabla','Almacena registros estructurados'],['Campo','Atributo con nombre y tipo'],['Registro','Fila correspondiente a una entidad o hecho'],['Clave primaria','Identifica de forma única'],['Clave ajena','Referencia otra tabla'],['Índice','Mejora acceso y puede imponer unicidad'],['Relación','Conecta tablas'],['Consulta','Selecciona, combina, filtra o calcula'],['Formulario','Interfaz de entrada y consulta'],['Informe','Presentación agrupada o imprimible'],['ODB','Documento con objetos y conexión; datos pueden ser externos'],['CSV','Intercambio plano sin relaciones ni objetos'],['Copia','Debe incluir el almacenamiento real']]
    },
    38: {
      title: 'LibreOffice 24 IV. Elaboración y uso de presentaciones con LibreOffice 24 Impress.',
      sources: [BOP, IMPRESS, GENERAL],
      coverage: ['presentación', 'diapositiva', 'diseño', 'plantilla', 'diapositiva maestra', 'tema', 'texto', 'imagen', 'forma', 'tabla', 'gráfico', 'audio', 'vídeo', 'transición', 'animación', 'orden', 'notas', 'folleto', 'clasificador', 'presentación', 'temporización', 'consola', 'exportar PDF', 'accesibilidad'],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'LibreOffice Impress crea presentaciones basadas en diapositivas. Permite aplicar diseños y diapositivas maestras, insertar texto e imágenes, tablas, gráficos y multimedia, ordenar diapositivas, añadir transiciones y animaciones, incorporar notas, preparar folletos, ejecutar una presentación y exportarla.',
          'Las diferencias esenciales son presentación y diapositiva; diseño y diapositiva maestra; transición y animación; objeto y marcador de posición; vista normal, esquema, notas, clasificador y presentación; ocultar y borrar; duplicar y copiar; nota del orador y contenido proyectado.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El título literal procede del BOP. La ayuda oficial de Impress reúne instrucciones, características, gráficos, menús, barras y atajos. La interfaz puede cambiar según versión y configuración. El contenido se limita a funciones estables de LibreOffice 24 y no atribuye a esa versión efectos exclusivos de revisiones posteriores.',
          'Una presentación es un medio de comunicación, no una fuente jurídica por sí sola. Los datos, cifras, imágenes y documentos incorporados deben proceder de fuentes autorizadas y respetar propiedad intelectual, accesibilidad y protección de datos. Exportar a PDF o vídeo no convierte automáticamente el contenido en oficial ni firmado.',
          'Las transiciones y animaciones pueden depender del visor, formato de exportación o equipo. La compatibilidad con PPTX no garantiza reproducción idéntica de fuentes, multimedia, efectos o diseños. Antes de una sesión debe probarse en el entorno real.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La presentación es el archivo completo; cada diapositiva es una página visual dentro del conjunto. El formato nativo habitual es ODP. Impress puede abrir y guardar otros formatos, incluido PPTX, con posibles diferencias. Guardar mantiene el editable; exportar a PDF produce una versión destinada a distribución o impresión.',
          'Una diapositiva tiene tamaño, fondo, diseño y objetos. El diseño distribuye marcadores de posición para título, contenido u otros elementos. Cambiar diseño reorganiza la estructura prevista, pero no siempre recoloca de forma perfecta objetos añadidos manualmente. Un marcador es un contenedor; el objeto insertado posee propiedades propias.',
          'Las diapositivas maestras definen elementos comunes como fondo, logotipo, tipografía, posición de títulos, pie o numeración. Aplicar una maestra permite coherencia. Editar manualmente cada diapositiva crea inconsistencias. Un objeto añadido directamente en una diapositiva puede ocultar o diferir del elemento maestro.',
          'Las plantillas proporcionan estructura y estilos iniciales. Crear una presentación desde plantilla no modifica necesariamente la plantilla. Debe usarse la versión corporativa vigente. Importar diseños o copiar diapositivas entre archivos puede incorporar estilos y maestras adicionales, aumentando complejidad.',
          'Los cuadros de texto contienen texto independiente. Los estilos y niveles de esquema organizan títulos y viñetas. Reducir excesivamente la fuente para encajar contenido deteriora legibilidad. Una diapositiva debe apoyar la exposición, no reproducir páginas completas salvo que el objetivo sea mostrar un documento concreto.',
          'Las imágenes se insertan como objetos y pueden recortarse, escalarse, alinearse y ordenarse. Estirar sin mantener proporción deforma. Una imagen de baja resolución se pixela al proyectar. Debe añadirse texto alternativo cuando corresponda y evitar incluir datos personales o capturas de expedientes sin necesidad.',
          'Las formas, líneas y conectores permiten diagramas. Agrupar hace que varios objetos se manipulen juntos; desagrupar recupera elementos. Alinear y distribuir mejora orden. El orden de apilamiento determina qué objeto queda delante o detrás. Un objeto oculto detrás de otro sigue formando parte de la diapositiva.',
          'Las tablas organizan datos en filas y columnas. Los gráficos representan series de datos y deben tener títulos, unidades, leyenda y ejes adecuados. Copiar un gráfico desde Calc puede vincular o insertar datos según procedimiento. Cualquier actualización debe verificarse antes de presentar.',
          'Audio y vídeo pueden insertarse o enlazarse según formato y configuración. Un enlace externo puede romperse al mover el archivo. La reproducción depende de códecs, permisos y equipo. Para una sesión crítica se empaqueta el material conforme a las funciones disponibles y se prueba sin conexión si será necesario.',
          'La transición es el efecto al pasar de una diapositiva a otra. La animación afecta a objetos dentro de una diapositiva. Pueden configurarse orden, inicio, duración y repetición. Abusar de efectos distrae y puede afectar accesibilidad. En test es esencial no intercambiar transición con animación.',
          'El panel de animación organiza secuencia de objetos. Una animación puede iniciarse al hacer clic, con la anterior o después de la anterior. Cambiar orden altera la exposición. Si el objeto no aparece, debe comprobarse inicio, orden, duración y si está fuera del área visible.',
          'La vista normal permite editar una diapositiva; el esquema se centra en estructura de texto; notas permite redactar apoyo del orador; el clasificador muestra miniaturas y facilita reordenar; la vista de presentación proyecta. Cambiar de vista no duplica el contenido.',
          'Duplicar crea otra diapositiva con el mismo contenido inicial. Copiar y pegar puede llevarla a otra posición o archivo. Ocultar excluye normalmente la diapositiva del recorrido ordinario sin borrarla; eliminar la retira del documento. Una diapositiva oculta puede mostrarse mediante navegación o configuración.',
          'Las notas del orador no están destinadas a aparecer en la proyección normal, aunque pueden imprimirse o mostrarse en la consola. Los folletos distribuyen varias miniaturas por página para asistentes. La página de notas y el folleto tienen diseños propios. Antes de compartir el archivo debe comprobarse si las notas contienen información interna.',
          'La presentación puede comenzar desde la primera diapositiva o desde la actual. Puede avanzar por clic o temporización. Ensayar intervalos ayuda a registrar tiempos. Una presentación automática requiere probar transiciones, multimedia y finalización. El avance manual permite adaptar ritmo y responder preguntas.',
          'La consola del presentador puede mostrar diapositiva actual, siguiente, notas y tiempo en una pantalla mientras el público ve la presentación en otra, si el entorno lo permite. No debe darse por disponible sin probar proyector, pantallas y configuración.',
          'Exportar a PDF conserva diapositivas para lectura o impresión, pero pierde animaciones y puede tratar enlaces o multimedia de forma diferente. Se eligen diapositivas, calidad y otras opciones. Imprimir puede generar diapositivas, notas, esquema o folletos. Debe revisarse qué información se incluye.',
          'La accesibilidad exige orden lógico, contraste, tamaño legible, texto alternativo, títulos claros y evitar depender solo de color o animación. Las tablas deben ser simples y los enlaces comprensibles. Si se distribuye el material, conviene ofrecer una versión accesible adicional cuando la presentación visual no sea suficiente.',
          'El control final incluye ortografía, fuentes, alineación, numeración, datos, enlaces, imágenes, notas, diapositivas ocultas, transiciones, animaciones, multimedia y compatibilidad. Se prueba en el equipo y resolución reales y se conserva una copia PDF como alternativa cuando sea apropiado.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Presentación contiene diapositivas. Diseño coloca marcadores; maestra define elementos comunes. Plantilla inicia un documento coherente. Transición actúa entre diapositivas; animación sobre objetos. Vista normal edita; clasificador ordena; notas ayuda al orador; presentación proyecta.',
          'Ocultar no borra. Duplicar crea copia. Notas pueden contener información no proyectada pero sí presente en el archivo. ODP es formato nativo habitual; PPTX puede variar; PDF pierde animaciones. Multimedia y consola deben probarse en el entorno real.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Diapositiva frente a presentación; diseño frente a maestra; transición frente a animación; agrupar frente a combinar; ocultar frente a eliminar; nota frente a pie; clasificador frente a vista normal; marcador frente a objeto; enlace multimedia frente a incrustación; PDF frente a archivo editable; avance manual frente a temporizado.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '1. Explica cómo lograrías que logotipo, tipografía y pie sean coherentes en todas las diapositivas.',
          '2. Diferencia transición y animación con un ejemplo de inicio y orden.',
          '3. Formula una lista de comprobación antes de proyectar una presentación administrativa en otro equipo.'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Determina si la pregunta afecta al archivo, diapositiva, objeto, diseño, vista o ejecución. Si pregunta por efectos, identifica si ocurren entre diapositivas o dentro de una. En supuestos, añade maestra corporativa, accesibilidad, revisión de notas, prueba de multimedia, compatibilidad y copia alternativa en PDF.'
        ]}
      ],
      tree: 'Tema 38 · LibreOffice Impress\n├─ Estructura\n│  ├─ Presentación y diapositivas\n│  ├─ Diseños y marcadores\n│  ├─ Diapositivas maestras\n│  └─ Plantillas\n├─ Objetos\n│  ├─ Texto e imágenes\n│  ├─ Formas y conectores\n│  ├─ Tablas y gráficos\n│  └─ Audio y vídeo\n├─ Efectos\n│  ├─ Transiciones\n│  ├─ Animaciones\n│  └─ Orden y temporización\n├─ Vistas\n│  ├─ Normal y esquema\n│  ├─ Notas\n│  ├─ Clasificador\n│  └─ Presentación y consola\n└─ Salida\n   ├─ PDF e impresión\n   ├─ Accesibilidad\n   └─ Prueba en entorno real',
      reviewTable: [['Elemento','Regla clave'],['Presentación','Archivo completo'],['Diapositiva','Página visual'],['Diseño','Distribución de marcadores'],['Maestra','Elementos comunes y estilos'],['Plantilla','Punto de partida reutilizable'],['Transición','Efecto entre diapositivas'],['Animación','Efecto sobre objetos'],['Clasificador','Reordena mediante miniaturas'],['Ocultar','Excluye del recorrido sin borrar'],['Notas','Apoyo del orador presente en el archivo'],['Consola','Vista auxiliar del presentador si el entorno lo permite'],['PDF','Salida estática sin animaciones'],['Accesibilidad','Orden, contraste, legibilidad y alternativas']]
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
    theme.articleCoverage = definition.coverage.map(item => ({ block: item, status: 'desarrollado con programa BOP y ayuda oficial de LibreOffice' }));
    theme.retentionQuestions = definition.sections.find(section => section.heading === 'Tres preguntas de retención activa')?.paragraphs || [];
    theme.studyWarnings = [
      'La interfaz y la documentación en línea pueden corresponder a revisiones posteriores; se estudian funciones estables de LibreOffice 24.',
      'Compatibilidad de formatos, conectores, macros y multimedia debe comprobarse en el entorno real de examen o trabajo.'
    ];
    theme.theoryStatus = { version: VERSION, reviewedAt: REVIEW_DATE, autonomous: true, programmeLiteral: true, fixedStudyStructure: true, articleByArticle: false, featureByFeature: true, noOffSyllabusFiller: true, sourcePolicy: 'BOP oficial y ayuda primaria de The Document Foundation' };
  }

  const previous = ope.theoryProgramme?.v87 || {};
  const completedThemes = Array.from(new Set([...(previous.completedThemes || []), 35, 36, 37, 38])).sort((a, b) => a - b);
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
    dynamicChecks: Array.from(new Set([...(previous.dynamicChecks || []), 'Comprobar la versión concreta de LibreOffice, idioma, configuración regional y políticas instaladas por la Diputación.', 'Revisar compatibilidad real de ODT/ODS/ODB/ODP con formatos ajenos y cualquier instrucción específica del tribunal.']))
  };

  window.OPOWEB_DIPUTACION_TEORIA_V87_BLOQUE4 = { version: VERSION, reviewedAt: REVIEW_DATE, themes: [35, 36, 37, 38], completedThemes, pendingThemes: ope.theoryProgramme.v87.pendingThemes, autonomous: true, officialProgramme: 'BOP Toledo núm. 118, 25 de junio de 2026, código 2026.00002934', primarySource: 'The Document Foundation · LibreOffice Help' };
})();
