(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 38);
  if (!ope || !theme) return;

  const REVIEW_DATE = '2026-07-16';
  const theory = {
    sources: [
      { label: 'LibreOffice Impress Guide 24.2', reference: 'LO-IG24-MAIN', url: 'https://books.libreoffice.org/en/IG24/IG24.html' },
      { label: 'Ayuda oficial de LibreOffice Impress', reference: 'LO-IMPRESS-HELP', url: 'https://help.libreoffice.org/latest/en-US/text/simpress/main0000.html' },
      { label: 'Guía oficial de presentaciones y diapositivas', reference: 'LO-IMPRESS-GUIDE', url: 'https://help.libreoffice.org/latest/en-US/text/simpress/guide/main.html' },
      { label: 'Formato OpenDocument Presentation', reference: 'LO-ODP-FORMAT', url: 'https://help.libreoffice.org/latest/en-US/text/shared/00/00000021.html' }
    ],
    sections: [
      { heading: 'Resumen orientado al aprobado', paragraphs: [
        'LibreOffice Impress 24 es el componente de LibreOffice para elaborar y proyectar presentaciones. El formato nativo es ODP y el programa permite crear diapositivas con texto, imágenes, formas, tablas, gráficos, audio, vídeo, transiciones, animaciones y notas. Una presentación eficaz no consiste en acumular efectos: debe tener una estructura clara, una plantilla coherente, contenido legible y una salida comprobada en el equipo o formato de destino.',
        'El examen suele distinguir entre diapositiva, diseño, patrón o diapositiva maestra, transición y animación. La diapositiva contiene el contenido de una pantalla; el diseño distribuye marcadores de posición; la maestra define elementos y estilos comunes; la transición actúa al cambiar de diapositiva; y la animación afecta a objetos dentro de una diapositiva. En un supuesto administrativo deben priorizarse uniformidad, accesibilidad, protección de datos y compatibilidad por encima de adornos.'
      ]},
      { heading: 'Rigor técnico y terminológico', paragraphs: [
        'Una presentación es un documento compuesto por diapositivas ordenadas. Cada diapositiva puede utilizar un diseño con marcadores para título, texto, contenido u otros objetos. La diapositiva maestra contiene fondo, elementos repetitivos y estilos que se aplican a las diapositivas vinculadas. Cambiar un elemento en la maestra puede modificar muchas diapositivas; editar un objeto directamente en una diapositiva solo afecta normalmente a esa diapositiva.',
        'Una transición es el efecto de paso entre diapositivas y puede incluir duración, sonido y avance manual o automático. Una animación es un efecto aplicado a un objeto, con categorías de entrada, énfasis, salida o trayectoria. El orden de animación, el inicio al hacer clic, con la anterior o después de la anterior y la duración determinan la secuencia. Confundir ambos conceptos conduce a respuestas incorrectas.'
      ]},
      { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
        'Al iniciar Impress puede utilizarse el selector de plantillas o una presentación vacía. Una plantilla incluye configuraciones, maestros, estilos y, en ocasiones, diapositivas iniciales. Crear desde plantilla no significa que el contenido sea definitivo: deben revisarse logotipo, tipografías, colores, proporción de pantalla y elementos institucionales. En una administración se utiliza el modelo corporativo autorizado cuando exista.',
        'El formato nativo ODP conserva la estructura editable de LibreOffice. Guardar como PPTX facilita intercambio con Microsoft PowerPoint, pero determinadas fuentes, animaciones, transiciones, diagramas, multimedia o posicionamientos pueden cambiar. Exportar a PDF produce una salida estática adecuada para consulta o impresión, pero pierde gran parte de la interactividad y no sustituye al original editable. Antes de entregar otro formato se abre y revisa en el entorno de destino.',
        'La interfaz presenta panel de diapositivas, área de trabajo, barra lateral, menús y barras de herramientas. El panel lateral facilita seleccionar, duplicar, mover u ocultar diapositivas. La barra lateral reúne propiedades, diseños, maestras, transiciones y animaciones. La barra de estado muestra número de diapositiva, estilo o tamaño y nivel de zoom. La disposición exacta puede variar según la interfaz elegida.',
        'Impress ofrece varias vistas. Normal sirve para editar una diapositiva; Esquema muestra la estructura textual de títulos y niveles; Notas permite añadir información para quien presenta; Clasificador de diapositivas muestra miniaturas y facilita reordenar, duplicar, ocultar y aplicar transiciones; y la vista de patrón permite modificar la maestra. La presentación a pantalla completa ejecuta la secuencia, pero no es una vista de edición ordinaria.',
        'Una diapositiva nueva puede insertarse con un diseño elegido. Duplicar conserva el contenido y formato de la original. Mover cambia su posición. Eliminar la retira del documento. Ocultar excluye la diapositiva de la presentación ordinaria sin borrarla, por lo que sigue presente en el archivo y puede mostrarse o recuperarse. Ocultar no es un mecanismo de confidencialidad: el receptor del archivo editable puede verla.',
        'Los diseños contienen marcadores de posición. Cambiar el diseño puede reorganizar contenidos, pero los objetos creados manualmente no siempre se adaptan. Los marcadores permiten insertar texto o contenido con estilos predeterminados. Es preferible usarlos para títulos y cuerpos, porque mantienen estructura y consistencia, aunque pueden añadirse cuadros de texto independientes cuando resulte necesario.',
        'La diapositiva maestra controla fondo, logotipo, pies, numeración y estilos de texto comunes. Una presentación puede tener varias maestras. Asignar otra maestra cambia la base visual de las diapositivas seleccionadas. Los elementos de la maestra pueden quedar detrás del contenido y no ser editables en vista Normal. Para excepciones puntuales puede ocultarse o sustituirse un elemento, pero abusar de cambios directos rompe la coherencia.',
        'Los estilos de presentación definen niveles de esquema, títulos, subtítulos y otros elementos. Los estilos gráficos se aplican a formas, líneas y objetos. Modificar un estilo permite cambios globales. El formato directo puede ser útil para excepciones, pero repetirlo en muchas diapositivas dificulta mantenimiento. Deben utilizarse tipografías legibles, tamaños suficientes, contraste adecuado y una jerarquía clara.',
        'El texto puede introducirse en marcadores o cuadros. Los párrafos admiten alineación, sangría, espaciado, viñetas y numeración. Reducir automáticamente el tamaño para que todo quepa puede producir texto ilegible. Cuando una diapositiva contiene demasiado contenido, es preferible dividirla o sintetizar. Las listas deben mantener niveles coherentes y no convertirse en párrafos extensos.',
        'Las formas incluyen rectángulos, flechas, conectores, símbolos y llamadas. Los conectores permanecen vinculados a puntos de las formas cuando se mueven, lo que resulta útil en organigramas y procesos. Alinear distribuye objetos respecto a un eje; distribuir iguala espacios; agrupar permite tratarlos como un conjunto; y ordenar modifica su superposición. Agrupar no fusiona permanentemente sus componentes y puede desagruparse.',
        'Las guías, cuadrícula y ajuste ayudan a colocar objetos. El tamaño y posición pueden fijarse numéricamente. Mantener proporciones evita deformar imágenes. Recortar oculta partes sin necesariamente eliminarlas del archivo. Comprimir imágenes puede reducir tamaño, pero debe conservar resolución suficiente para proyección o impresión. Una imagen ampliada por encima de su resolución original puede pixelarse.',
        'Las imágenes pueden incrustarse o enlazarse según el procedimiento. Un enlace depende del archivo externo y puede romperse al mover la presentación. Para distribuir una presentación autosuficiente conviene comprobar que los recursos necesarios están incorporados. Las imágenes deben tener origen autorizado y texto alternativo cuando sea relevante. No se deben usar capturas con datos personales no imprescindibles.',
        'Las tablas presentan datos en filas y columnas. Pueden insertarse y formatearse con bordes, rellenos y estilos. Una tabla excesivamente grande pierde legibilidad en pantalla. Los gráficos representan datos y pueden vincularse o contener una tabla interna. Deben utilizar escalas y etiquetas honestas. Un gráfico tridimensional o con exceso de elementos puede distorsionar la comparación.',
        'El audio y el vídeo dependen de formatos, códecs, rutas y capacidad del equipo. Insertar un archivo multimedia no garantiza su reproducción en otro dispositivo. Deben comprobarse volumen, inicio, duración, compatibilidad y presencia del archivo. Para una exposición importante se prepara una alternativa sin multimedia y se prueba en el equipo real.',
        'Las transiciones se aplican a una o varias diapositivas. Pueden configurarse efecto, variante, duración, sonido y avance. Aplicar a todas copia la transición seleccionada al conjunto. El avance automático requiere tiempo definido y puede resultar inadecuado si la explicación tiene duración variable. Las transiciones sobrias reducen distracción y problemas de compatibilidad.',
        'Las animaciones se asignan a objetos. Una secuencia puede iniciar al hacer clic, con el efecto anterior o después. El panel permite reordenar, modificar duración, retraso y opciones. Los elementos de una lista pueden animarse por párrafo. Una animación excesiva dificulta comprensión y puede fallar al exportar. Debe utilizarse para revelar información gradualmente o explicar relaciones, no como decoración permanente.',
        'Las interacciones y enlaces permiten saltar a otra diapositiva, abrir un documento, una dirección web o ejecutar una acción. Los botones de acción pueden apoyar presentaciones no lineales. Los enlaces deben probarse y su destino debe ser seguro. Un enlace externo puede dejar de estar disponible; un archivo local puede no acompañar a la presentación.',
        'Las notas del orador no se muestran normalmente en la pantalla principal de la audiencia. La consola del presentador puede mostrar diapositiva actual, siguiente, notas y tiempo en una segunda pantalla. Su funcionamiento depende de la configuración de monitores. Antes de presentar se verifica qué pantalla ve el público y cuál usa la persona ponente para evitar mostrar notas, escritorio o información interna.',
        'Una presentación personalizada define un subconjunto o un orden específico de diapositivas sin duplicar todo el archivo. Puede utilizarse para diferentes públicos. Las diapositivas no incluidas siguen estando en el documento. La opción de ocultar diapositivas y los recorridos personalizados no deben emplearse para guardar información confidencial dentro de un archivo que se distribuye.',
        'El ensayo de intervalos registra tiempos de avance. La presentación puede ejecutarse manualmente, con tiempos o en bucle. El modo quiosco limita determinadas interacciones y se usa en exhibiciones automáticas. Deben evitarse bucles no deseados y comprobar cómo salir. El puntero, pantalla negra o blanca y navegación pueden controlarse durante la proyección mediante teclado o menú contextual.',
        'Imprimir permite elegir diapositivas, notas, esquema o folletos. Los folletos colocan varias diapositivas por página y pueden ahorrar papel. La orientación, color, escala, encabezados y pies deben comprobarse. Una diapositiva diseñada para pantalla puede no ser legible al imprimir varias por hoja. La vista previa evita páginas cortadas o fondos que consumen tinta innecesariamente.',
        'Exportar a PDF permite seleccionar diapositivas, calidad, enlaces y otras opciones. También puede exportarse cada diapositiva como imagen, pero se pierde editabilidad y estructura. Un vídeo o una presentación autoejecutable requiere un flujo diferente y comprobación específica. No debe asumirse que todos los efectos se conservarán en cualquier exportación.',
        'La accesibilidad exige orden de lectura lógico, títulos únicos, contraste, tamaño suficiente, texto alternativo y evitar depender solo del color. El panel o herramienta de accesibilidad puede detectar parte de los problemas, pero requiere revisión humana. El texto dentro de una imagen no es equivalente a texto estructurado. Los vídeos pueden necesitar subtítulos y el contenido verbal debe estar disponible por otros medios cuando proceda.',
        'La seguridad incluye revisar propiedades, notas, diapositivas ocultas, comentarios, objetos fuera del área visible, enlaces y archivos incrustados. Una presentación final distribuida como ODP o PPTX puede revelar elementos no visibles durante la proyección. Antes de enviar se crea una copia, se elimina información interna y se abre el archivo final para comprobarlo. El PDF reduce la editabilidad, pero también debe revisarse.',
        'En un supuesto práctico se parte de la plantilla institucional, se define el mensaje y se crea un guion. Se utilizan diseños y maestra, se insertan textos breves y objetos, se alinean, se revisa contraste y accesibilidad, se aplican transiciones o animaciones solo cuando aportan valor y se añaden notas. Finalmente se prueba en modo presentación, se revisan pantallas, fuentes y multimedia, se guarda ODP y se genera la copia solicitada.'
      ]},
      { heading: 'Síntesis de repaso rápido', paragraphs: [
        'Impress 24 utiliza ODP como formato nativo. La diapositiva contiene contenido; el diseño distribuye marcadores; la maestra aporta elementos y estilos comunes; la transición actúa entre diapositivas; y la animación actúa sobre objetos. Ocultar no elimina ni protege. PPTX puede alterar funciones. PDF es una salida estática. Notas y consola ayudan a presentar. El archivo final debe revisarse por compatibilidad, accesibilidad y datos ocultos.'
      ]},
      { heading: 'Opo-Test: puntos calientes', paragraphs: [
        'ODP, PPTX y PDF; plantilla y maestra; diseño y marcador; vistas Normal, Esquema, Notas y Clasificador; duplicar, mover, ocultar y eliminar; estilos; alineación, distribución, agrupación y orden; imágenes incrustadas o enlazadas; tablas y gráficos; multimedia; transiciones; animaciones; enlaces; notas; consola del presentador; presentaciones personalizadas; ensayo de intervalos; folletos; accesibilidad y seguridad.'
      ]},
      { heading: 'Tres preguntas de retención activa', paragraphs: [
        '¿Qué diferencia existe entre diapositiva maestra, diseño y formato directo? ¿Por qué una transición no es lo mismo que una animación? ¿Qué elementos ocultos o internos deben revisarse antes de distribuir una presentación editable?'
      ]},
      { heading: 'Estrategia de examen', paragraphs: [
        'Descarta respuestas que afirmen que ocultar elimina, que PDF conserva todas las animaciones, que una maestra solo afecta a una diapositiva o que una transición actúa sobre objetos. Ante un supuesto, prioriza maestra, diseños, legibilidad, compatibilidad y prueba real. Los efectos correctos son los que apoyan el mensaje y no comprometen accesibilidad ni estabilidad.'
      ]}
    ],
    tree: 'LibreOffice 24 Impress\n├─ Documento y estructura\n│  ├─ ODP, PPTX y PDF\n│  ├─ Diapositivas y orden\n│  ├─ Diseños y marcadores\n│  ├─ Plantillas y diapositivas maestras\n│  └─ Estilos y formato directo\n├─ Edición visual\n│  ├─ Texto, listas y jerarquía\n│  ├─ Formas, conectores y grupos\n│  ├─ Alineación, distribución y orden\n│  ├─ Imágenes, tablas y gráficos\n│  └─ Audio, vídeo y enlaces\n├─ Presentación\n│  ├─ Transiciones entre diapositivas\n│  ├─ Animaciones de objetos\n│  ├─ Notas y consola del presentador\n│  ├─ Presentaciones personalizadas\n│  └─ Tiempos, bucle y quiosco\n├─ Vistas y salida\n│  ├─ Normal, Esquema y Notas\n│  ├─ Clasificador y patrón\n│  ├─ Impresión de diapositivas y folletos\n│  ├─ Exportación y compatibilidad\n│  └─ Prueba en el equipo de destino\n└─ Calidad y seguridad\n   ├─ Contraste y tamaño\n   ├─ Orden de lectura y texto alternativo\n   ├─ Diapositivas ocultas y notas\n   ├─ Metadatos, enlaces y recursos\n   └─ Revisión de la copia final',
    reviewTable: [
      ['ODP', 'Formato nativo editable', 'Conserva estructura de Impress'],
      ['Diseño', 'Distribuye marcadores', 'No es la maestra'],
      ['Diapositiva maestra', 'Aplica fondo, elementos y estilos comunes', 'Puede afectar a muchas diapositivas'],
      ['Transición', 'Efecto al cambiar de diapositiva', 'No actúa sobre un objeto'],
      ['Animación', 'Efecto sobre un objeto', 'Tiene orden e inicio'],
      ['Ocultar', 'Omite en la proyección normal', 'No elimina ni protege'],
      ['Clasificador', 'Ordena mediante miniaturas', 'Facilita operaciones globales'],
      ['Notas', 'Información para quien presenta', 'Deben revisarse antes de distribuir'],
      ['Consola', 'Muestra notas, tiempo y vista siguiente', 'Requiere configuración de pantallas'],
      ['PPTX', 'Formato de intercambio', 'Puede perder compatibilidad'],
      ['PDF', 'Salida estática', 'No conserva toda la interacción'],
      ['Folletos', 'Varias diapositivas por página', 'Deben mantener legibilidad']
    ]
  };

  const words = [...theory.sections.flatMap(section => [section.heading, ...section.paragraphs]), theory.tree, ...theory.reviewTable.flat()].join(' ').trim().split(/\s+/).filter(Boolean).length;
  theme.sections = theory.sections;
  theme.tree = theory.tree;
  theme.reviewTable = theory.reviewTable;
  theme.officialSources = theory.sources;
  theme.theoryStatus = { autonomous: true, programmeLiteral: true, reviewedAt: REVIEW_DATE, words, sourcePolicy: 'Documentación oficial de LibreOffice Impress 24 y The Document Foundation' };

  const completed = Array.from({ length: 14 }, (_, index) => index + 25);
  const pending = Array.from({ length: 2 }, (_, index) => index + 39);
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
    block: 7,
    completedThemes: completed,
    pendingThemes: pending,
    reviewedAt: REVIEW_DATE,
    numberingCheck: { baseTheme: 37, impressTheme: 38 }
  };
})();
