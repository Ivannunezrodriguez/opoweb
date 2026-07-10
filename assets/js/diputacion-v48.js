(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.48.0';
  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const detail = {
    32: {
      source: 'Microsoft Windows 11 Pro · Explorador de archivos',
      blocks: [
        ['Explorador, rutas y vistas', [
          'El Explorador de archivos permite localizar, abrir, organizar y administrar archivos y carpetas locales, de red y en la nube. Puede abrirse desde Inicio, la barra de tareas o mediante Windows + E.',
          'La barra de direcciones muestra la ruta y permite navegar por niveles; el panel izquierdo contiene Inicio, carpetas ancladas, Este equipo, unidades y ubicaciones de red. La búsqueda actúa sobre la ubicación actual y sus subcarpetas según la configuración.',
          'Las vistas de iconos, lista, detalles y contenido cambian la presentación, no la ubicación real. En vista Detalles se puede ordenar y agrupar por nombre, fecha, tipo o tamaño.'
        ]],
        ['Creación y denominación', [
          'Una carpeta puede crearse con Nuevo > Carpeta o Ctrl + Mayús + N. Un archivo se crea desde su aplicación o mediante las opciones disponibles en el menú Nuevo.',
          'El nombre identifica el elemento dentro de su carpeta. No se admiten los caracteres \\ / : * ? " < > |. Windows no distingue normalmente mayúsculas y minúsculas en nombres dentro de la misma carpeta.',
          'La extensión identifica el formato y la aplicación asociada. Puede mostrarse desde Ver > Mostrar > Extensiones de nombre de archivo; cambiarla manualmente no convierte el contenido a otro formato.'
        ]],
        ['Copiar, mover y renombrar', [
          'Copiar crea otro elemento y conserva el original. Cortar y pegar mueve el elemento; dentro de una misma unidad suele cambiar su referencia de ubicación, mientras que entre unidades implica copiar y después eliminar el original cuando concluye correctamente.',
          'Atajos esenciales: Ctrl + C copia, Ctrl + X corta, Ctrl + V pega, F2 cambia el nombre y Ctrl + Z deshace la última operación compatible.',
          'Si existe un elemento con el mismo nombre, Windows solicita resolver el conflicto: reemplazar, omitir o comparar información, según la operación y versión.'
        ]],
        ['Borrado y Papelera', [
          'Suprimir envía normalmente el elemento local a la Papelera de reciclaje. Mayús + Supr intenta eliminarlo sin pasar por la Papelera y requiere confirmación según la configuración.',
          'Restaurar desde la Papelera devuelve el elemento a su ubicación original. Vaciar la Papelera elimina sus elementos y libera espacio, aunque la recuperación forense puede depender del estado del soporte.',
          'Los elementos eliminados desde unidades de red, medios extraíbles o ubicaciones no compatibles pueden no pasar por la Papelera.'
        ]],
        ['Unidades locales y de red', [
          'Una unidad local es un volumen accesible directamente por el equipo, identificado normalmente por una letra como C:. Una unidad de red representa un recurso compartido remoto y exige conectividad y permisos.',
          'Asignar una unidad de red vincula una letra a una ruta UNC, por ejemplo \\\\servidor\\recurso. La opción de reconectar al iniciar sesión intenta mantener la asignación en sesiones posteriores.',
          'La letra asignada no convierte el recurso remoto en disco local: disponibilidad, velocidad, cuota y permisos dependen del servidor y de la red.'
        ]]
      ],
      hot: ['Windows + E abre el Explorador.', 'Ctrl + Mayús + N crea carpeta.', 'Ctrl + C copia; Ctrl + X corta; Ctrl + V pega.', 'F2 cambia nombre.', 'Cambiar extensión no convierte el formato.', 'Supr suele enviar a Papelera; Mayús + Supr evita Papelera.', 'La Papelera no cubre necesariamente red o USB.', 'Ruta UNC: \\\\servidor\\recurso.', 'Unidad de red requiere conectividad y permisos.'],
      recall: ['¿Qué diferencia práctica existe entre copiar y mover entre unidades?', '¿Qué operaciones pueden impedir recuperar desde la Papelera?', '¿Qué representa realmente una letra asignada a una unidad de red?']
    },
    33: {
      source: 'Microsoft Edge y OpenText/Micro Focus GroupWise 24',
      blocks: [
        ['Microsoft Edge: navegación', [
          'La barra de direcciones permite introducir direcciones web y búsquedas. Las pestañas mantienen varias páginas en una ventana; Ctrl + T abre una nueva, Ctrl + W cierra la activa y Ctrl + Mayús + T reabre la última cerrada.',
          'Atrás y Adelante recorren el historial de la pestaña; Actualizar vuelve a cargar la página. Inicio abre la página configurada cuando el botón está habilitado.',
          'Los favoritos guardan direcciones para acceso posterior. Ctrl + D añade la página actual y el administrador permite organizarlos en carpetas, editar nombres, importar o exportar.'
        ]],
        ['Edge: historial, descargas y privacidad', [
          'El historial registra páginas visitadas y puede consultarse con Ctrl + H. Las descargas se gestionan con Ctrl + J y permanecen como archivos en la carpeta configurada aunque se borre su entrada de la lista.',
          'La navegación InPrivate reduce los rastros locales al cerrar todas sus ventanas, pero no vuelve anónima la conexión frente a organización, proveedor, sitios o servicios de red.',
          'La seguridad exige verificar dominio, certificado HTTPS, origen de descargas y avisos del navegador; el candado no garantiza por sí solo que un sitio sea legítimo.'
        ]],
        ['GroupWise: bandejas y elementos', [
          'GroupWise integra correo, calendario, tareas, notas, contactos y otras funciones de colaboración. La Bandeja de entrada recibe elementos y Enviados permite consultar los remitidos; Papelera conserva temporalmente los eliminados hasta su purga.',
          'Las carpetas permiten clasificar elementos. Mover cambia la ubicación dentro del buzón; archivar, cuando está configurado, traslada elementos al archivo personal para reducir contenido del buzón activo.',
          'Los estados no leídos, leídos, respondidos, reenviados o completados facilitan seguimiento, pero no sustituyen una clasificación coherente mediante carpetas y categorías.'
        ]],
        ['Redacción y destinatarios', [
          'Un correo puede incluir Para, CC, CCO, asunto, cuerpo y archivos adjuntos. CC muestra destinatarios secundarios; CCO oculta sus direcciones a los demás receptores.',
          'Responder se dirige al remitente; Responder a todos incluye remitente y destinatarios visibles pertinentes; Reenviar crea un nuevo envío del contenido recibido. Deben revisarse destinatarios y adjuntos antes de enviar.',
          'La Libreta de direcciones y el selector permiten localizar personas, grupos y contactos frecuentes. Una lista de distribución envía a varios miembros mediante una única entrada.'
        ]],
        ['Calendario, citas y tareas', [
          'El Calendario muestra citas, reuniones, tareas y notas en vistas diaria, semanal o mensual. Una cita publicada puede reservar tiempo propio; una reunión enviada invita a otros destinatarios.',
          'Aceptar, rechazar o marcar como provisional actualiza el estado de una invitación. Reprogramar una reunión debe realizarse desde el elemento original para que los invitados reciban la modificación.',
          'Las tareas incorporan fecha de inicio, fecha límite, prioridad y porcentaje o estado de finalización. Completar una tarea no equivale a eliminarla.'
        ]]
      ],
      hot: ['Ctrl + T, Ctrl + W y Ctrl + Mayús + T.', 'Ctrl + H: historial; Ctrl + J: descargas.', 'Borrar lista de descargas no borra necesariamente el archivo.', 'InPrivate no garantiza anonimato.', 'CCO oculta destinatarios.', 'Responder a todos exige revisar destinatarios.', 'Cita propia y reunión enviada no son equivalentes.', 'Aceptar o rechazar actualiza la invitación.', 'Archivar no equivale a eliminar.'],
      recall: ['¿Qué diferencia existe entre historial y archivos descargados?', '¿Cuándo usarías CC frente a CCO?', '¿Qué diferencia práctica hay entre una cita personal, una reunión y una tarea?']
    },
    34: {
      source: 'Microsoft Windows 11 Pro · impresión y digitalización',
      blocks: [
        ['Impresoras y colas', [
          'Una impresora instalada puede conectarse por USB, red, Wi-Fi o servidor de impresión. Windows identifica dispositivo, controlador y cola; la impresora predeterminada se propone inicialmente en los diálogos de impresión.',
          'La cola muestra trabajos pendientes, su orden y estado. Pausar detiene temporalmente el procesamiento; reanudar lo continúa; cancelar elimina un trabajo de la cola si aún no se ha completado.',
          'Un documento atascado puede requerir cancelar, reiniciar el dispositivo o servicio y comprobar conexión, papel, consumibles, permisos y controlador.'
        ]],
        ['Configuración de impresión', [
          'Antes de imprimir deben revisarse impresora, intervalo de páginas, número de copias, orientación, tamaño de papel, bandeja, color, calidad y dúplex.',
          'Intercalar imprime juegos completos cuando hay varias copias. El dúplex puede ser automático si el equipo lo admite o manual si la aplicación y el flujo lo permiten.',
          'Imprimir a PDF genera un archivo, no una hoja física. Debe seleccionarse ubicación y nombre y después comprobar que el PDF contiene las páginas y orientación correctas.'
        ]],
        ['Controladores y dispositivos', [
          'El controlador traduce las órdenes de Windows al lenguaje del dispositivo. Un controlador incorrecto puede limitar bandejas, acabado, color, dúplex o resolución.',
          'Agregar una impresora puede realizarse desde Configuración > Bluetooth y dispositivos > Impresoras y escáneres. En red puede requerirse nombre compartido, dirección IP, credenciales o instalación administrada.',
          'Eliminar un dispositivo de Windows no destruye el equipo ni necesariamente el paquete de controlador; solo retira esa instalación o conexión.'
        ]],
        ['Escaneado', [
          'Un escáner o dispositivo multifunción digitaliza papel a imagen o PDF. Deben elegirse origen —cristal o alimentador—, color, resolución, tamaño, formato, orientación y destino.',
          'El cristal es apropiado para originales delicados o encuadernados; el alimentador automático acelera lotes de hojas sueltas. El dúplex de escaneo requiere que el dispositivo o su software lo admita.',
          'La resolución se expresa en ppp o dpi. Aumentarla mejora detalle hasta el límite óptico, pero incrementa tamaño y tiempo; no corrige un original desenfocado o de baja calidad.'
        ]],
        ['Formatos, OCR y control final', [
          'PDF es adecuado para documentos multipágina; JPEG comprime fotografías con pérdida; PNG conserva mejor gráficos y texto simple sin pérdida visible; TIFF se usa en flujos de alta calidad o archivo.',
          'El OCR reconoce caracteres y permite buscar o editar texto, pero puede cometer errores por calidad, tipografía, inclinación o idioma. El resultado debe revisarse.',
          'Tras escanear debe comprobarse integridad de páginas, orden, orientación, legibilidad, nombre, ubicación, tamaño y protección de datos antes de registrar o enviar.'
        ]]
      ],
      hot: ['Impresora, controlador y cola son conceptos distintos.', 'Pausar no cancela.', 'Intercalar crea juegos completos.', 'Dúplex depende del dispositivo.', 'Imprimir a PDF crea archivo.', 'Cristal frente a alimentador.', 'Más dpi implica más tamaño y tiempo.', 'OCR puede contener errores.', 'Revisión final antes de registrar o enviar.'],
      recall: ['¿Qué revisarías ante un trabajo atascado?', '¿Cómo elegirías entre cristal, alimentador y dúplex?', '¿Qué controles realizarías sobre un PDF escaneado antes de incorporarlo a un expediente?']
    },
    35: {
      source: 'LibreOffice 24 Writer · documentos de texto',
      blocks: [
        ['Documento, interfaz y formato ODF', [
          'Writer es el procesador de textos de LibreOffice. Su formato nativo es ODT, basado en OpenDocument; puede abrir y guardar otros formatos, aunque la conversión puede alterar elementos complejos.',
          'La interfaz incluye menús, barras de herramientas, área de edición, regla, barra lateral, navegador y barra de estado. El Navegador permite desplazarse por títulos, tablas, imágenes, marcadores y otros objetos.',
          'Guardar conserva el formato actual; Guardar como permite cambiar nombre, ubicación o formato. Exportar a PDF crea una copia PDF y mantiene abierto el documento editable original.'
        ]],
        ['Formato directo y estilos', [
          'El formato directo aplica propiedades a una selección. Los estilos agrupan propiedades reutilizables y permiten mantener coherencia y modificar múltiples elementos de forma centralizada.',
          'Writer dispone de estilos de párrafo, carácter, página, marco, lista y tabla. Los títulos deben construirse con estilos jerárquicos para generar navegación y tabla de contenido.',
          'Ctrl + M borra el formato directo de la selección y deja actuar al estilo aplicado. Copiar formato no sustituye una estrategia correcta de estilos en documentos largos.'
        ]],
        ['Páginas, párrafos y listas', [
          'El formato de página controla tamaño, márgenes, orientación, encabezado, pie, columnas y fondo. Los saltos de página y estilos de página permiten cambiar diseño dentro del documento.',
          'El formato de párrafo controla alineación, sangrías, espaciado, interlineado, tabulaciones, bordes, flujo y separación. Insertar varios espacios no es un método fiable de alineación.',
          'Las listas numeradas o con viñetas deben usar las herramientas de lista. La numeración de títulos se gestiona mediante esquema de capítulos o numeración de encabezados.'
        ]],
        ['Tablas, imágenes y referencias', [
          'Las tablas organizan información en filas y columnas y permiten combinar o dividir celdas, ajustar ancho, encabezados repetidos, bordes, alineación y fórmulas simples.',
          'Las imágenes pueden anclarse a página, párrafo, carácter o como carácter. El ajuste determina cómo fluye el texto; el anclaje determina con qué elemento se desplaza.',
          'Campos, notas al pie, marcadores, referencias cruzadas, índices y tabla de contenido permiten documentos administrativos estructurados y actualizables.'
        ]],
        ['Revisión, combinación e impresión', [
          'Buscar y reemplazar admite texto y, mediante opciones, expresiones regulares y formatos. El control de cambios registra inserciones y eliminaciones para aceptar o rechazar posteriormente.',
          'La combinación de correspondencia utiliza una fuente de datos y campos para producir documentos personalizados. Deben comprobarse registros, filtros, formato de campos y salida.',
          'Antes de imprimir o exportar se revisan estilos, saltos, encabezados, numeración, tablas, imágenes, ortografía, páginas vacías, campos actualizados y metadatos.'
        ]]
      ],
      hot: ['ODT es formato nativo.', 'Guardar como cambia formato; exportar PDF crea copia.', 'Estilos frente a formato directo.', 'Ctrl + M borra formato directo.', 'Espacios no alinean de forma fiable.', 'Anclaje y ajuste de imagen son distintos.', 'Tabla de contenido depende de estilos de título.', 'Control de cambios: aceptar o rechazar.', 'Combinación usa fuente de datos y campos.'],
      recall: ['¿Por qué conviene usar estilos en vez de formato directo?', '¿Qué diferencia hay entre anclaje y ajuste de una imagen?', '¿Qué revisarías antes de una combinación de correspondencia masiva?']
    },
    36: {
      source: 'LibreOffice 24 Calc · hojas de cálculo',
      blocks: [
        ['Libro, hojas y celdas', [
          'Calc organiza la información en libros que contienen hojas. Cada celda se identifica por columna y fila, por ejemplo B7; un rango se expresa como A1:C10.',
          'Una celda puede contener texto, número, fecha, hora o fórmula. Las fechas y horas se almacenan como valores numéricos y su visualización depende del formato.',
          'Insertar, eliminar, mover o copiar hojas afecta a las referencias. Conviene usar nombres significativos y comprobar fórmulas tras reestructurar el libro.'
        ]],
        ['Fórmulas y referencias', [
          'Las fórmulas comienzan con =. Los operadores siguen prioridad matemática y los paréntesis fuerzan el orden deseado.',
          'Una referencia relativa como A1 cambia al copiarse. Una absoluta como $A$1 permanece fija. Las mixtas $A1 y A$1 fijan solo columna o fila.',
          'Errores como #DIV/0!, #VALUE!, #REF! o #NAME? indican división entre cero, tipo incompatible, referencia no válida o nombre desconocido, entre otras causas.'
        ]],
        ['Funciones y cálculos', [
          'SUMA agrega valores; PROMEDIO calcula media aritmética; MIN y MAX obtienen extremos; CONTAR cuenta números y CONTARA celdas no vacías.',
          'SI evalúa una condición y devuelve un resultado para verdadero y otro para falso. Y, O y NO permiten combinar condiciones.',
          'SUMAR.SI, CONTAR.SI y funciones equivalentes aplican criterios. Deben revisarse separadores, rangos y referencias según la configuración regional.'
        ]],
        ['Ordenación, filtros y validación', [
          'Ordenar reorganiza filas por uno o varios criterios. Debe seleccionarse todo el bloque relacionado para no separar registros.',
          'El filtro automático oculta temporalmente filas que no cumplen criterios; no elimina datos. Quitar o restablecer el filtro vuelve a mostrarlos.',
          'La validez de datos restringe entradas y puede mostrar mensajes. El formato condicional cambia la apariencia según reglas, pero no modifica por sí mismo el valor.'
        ]],
        ['Presentación, gráficos e impresión', [
          'El formato de celda controla números, moneda, porcentaje, fecha, alineación, fuente, bordes y fondo. El valor almacenado puede diferir de lo mostrado por redondeo o formato.',
          'Los gráficos representan rangos y se actualizan cuando cambian los datos fuente. Deben definirse series, categorías, títulos, leyenda y tipo adecuado.',
          'La impresión exige configurar área de impresión, orientación, escala, saltos, repetición de filas o columnas y encabezado o pie. Inmovilizar paneles afecta a la vista, no a la impresión.'
        ]]
      ],
      hot: ['Libro contiene hojas.', 'Fórmula empieza por =.', 'A1 relativa; $A$1 absoluta.', 'Fechas son valores numéricos formateados.', 'CONTAR y CONTARA no son iguales.', 'Filtro oculta, no elimina.', 'Ordenar todo el bloque evita desalinear registros.', 'Formato condicional no cambia el valor.', 'Inmovilizar paneles no configura impresión.'],
      recall: ['¿Cómo se comportan referencias relativas, absolutas y mixtas al copiar?', '¿Qué diferencia hay entre ordenar, filtrar y validar?', '¿Qué debe configurarse para imprimir una tabla extensa correctamente?']
    }
  };

  const rawQuestions = {
    32: [
      ['¿Qué atajo abre el Explorador de archivos?', 'Windows + E.', ['Ctrl + E.', 'Alt + E.', 'Windows + F1.'], 'Atajo estándar de Windows 11.'],
      ['¿Qué atajo crea una carpeta nueva?', 'Ctrl + Mayús + N.', ['Ctrl + N.', 'Alt + N.', 'Windows + N.'], 'Explorador de archivos.'],
      ['¿Qué operación conserva el original?', 'Copiar.', ['Mover.', 'Cortar y pegar.', 'Eliminar.'], 'Copiar crea una segunda instancia.'],
      ['¿Qué tecla permite cambiar el nombre?', 'F2.', ['F1.', 'F5.', 'F12.'], 'Atajo del Explorador.'],
      ['¿Cambiar .odt por .pdf convierte el documento?', 'No.', ['Sí, siempre.', 'Solo en red.', 'Solo si es pequeño.'], 'La extensión no transforma el contenido.'],
      ['¿Qué hace normalmente Supr con un archivo local?', 'Lo envía a la Papelera.', ['Lo cifra.', 'Lo mueve a red.', 'Lo imprime.'], 'Comportamiento ordinario del Explorador.'],
      ['¿Qué combinación evita normalmente la Papelera?', 'Mayús + Supr.', ['Ctrl + Supr.', 'Alt + Supr.', 'Windows + Supr.'], 'Eliminación directa.'],
      ['¿Dónde restaura la Papelera un elemento?', 'En su ubicación original.', ['Siempre en Documentos.', 'En Descargas.', 'En el Escritorio.'], 'Restaurar recupera la ruta de origen.'],
      ['¿Qué formato tiene una ruta UNC?', '\\\\servidor\\recurso.', ['C:/servidor/recurso.', 'http:servidor.', 'A:recurso.'], 'Ruta de recurso compartido Windows.'],
      ['¿Qué necesita una unidad de red?', 'Conectividad y permisos.', ['Solo espacio local.', 'Una impresora.', 'Un archivo PDF.'], 'El recurso reside en un servidor.'],
      ['¿Qué muestra Ver > Mostrar > Extensiones?', 'Las extensiones de nombre de archivo.', ['Los permisos NTFS.', 'Las contraseñas.', 'Solo archivos ocultos.'], 'Opción de visualización.'],
      ['¿Qué atajo deshace una operación compatible?', 'Ctrl + Z.', ['Ctrl + Y.', 'Ctrl + P.', 'Alt + Z.'], 'Atajo estándar.'],
      ['¿Qué ocurre al mover entre unidades?', 'Se copia y después se elimina el original al finalizar.', ['Solo cambia el nombre.', 'Nunca se transfieren datos.', 'Siempre crea un acceso directo.'], 'Comportamiento habitual entre volúmenes.'],
      ['¿Pasan siempre por Papelera los archivos de red?', 'No.', ['Sí, siempre.', 'Solo los PDF.', 'Solo los pequeños.'], 'Depende de la ubicación y configuración.'],
      ['¿Qué cambia una vista Detalles?', 'La presentación de los elementos.', ['La ruta real.', 'El contenido de archivos.', 'Los permisos.'], 'Las vistas no mueven elementos.']
    ],
    33: [
      ['¿Qué atajo abre una pestaña nueva en Edge?', 'Ctrl + T.', ['Ctrl + N únicamente.', 'Ctrl + H.', 'Ctrl + J.'], 'Atajo de Microsoft Edge.'],
      ['¿Qué atajo reabre la última pestaña cerrada?', 'Ctrl + Mayús + T.', ['Ctrl + Mayús + W.', 'Alt + T.', 'F5.'], 'Atajo de Edge.'],
      ['¿Qué abre Ctrl + H?', 'El historial.', ['Las descargas.', 'Los favoritos.', 'La impresión.'], 'Atajo de Edge.'],
      ['¿Qué abre Ctrl + J?', 'Las descargas.', ['El historial.', 'La ayuda.', 'La página de inicio.'], 'Atajo de Edge.'],
      ['¿Borrar una entrada de descargas elimina siempre el archivo?', 'No.', ['Sí, siempre.', 'Solo en InPrivate.', 'Solo si es PDF.'], 'Lista y archivo son elementos distintos.'],
      ['¿InPrivate vuelve anónima la navegación?', 'No.', ['Sí, frente a todos.', 'Solo en redes públicas.', 'Sí, si se cierra una pestaña.'], 'Reduce rastros locales, no el control externo.'],
      ['¿Qué campo oculta destinatarios a los demás?', 'CCO.', ['CC.', 'Para.', 'Asunto.'], 'Copia oculta.'],
      ['¿Qué hace Responder?', 'Envía la respuesta al remitente.', ['Incluye siempre a todos.', 'Crea una tarea.', 'Elimina el mensaje.'], 'Función básica de correo.'],
      ['¿Qué exige Responder a todos?', 'Revisar destinatarios antes de enviar.', ['Añadir siempre CCO.', 'Eliminar el asunto.', 'Convertir el mensaje en cita.'], 'Prevención de envíos indebidos.'],
      ['¿Qué función tiene una carpeta de GroupWise?', 'Clasificar elementos del buzón.', ['Cambiar contraseñas.', 'Crear impresoras.', 'Modificar el servidor.'], 'Organización del buzón.'],
      ['¿Archivar equivale a eliminar?', 'No.', ['Sí.', 'Solo en calendario.', 'Solo para adjuntos.'], 'El archivo personal conserva elementos.'],
      ['¿Qué diferencia una reunión de una cita personal?', 'La reunión se envía a invitados.', ['La cita siempre contiene adjuntos.', 'La reunión no tiene fecha.', 'No existe diferencia.'], 'Calendario GroupWise.'],
      ['¿Qué acción actualiza una invitación recibida?', 'Aceptar, rechazar o marcar provisional.', ['Moverla a Papelera solamente.', 'Cambiar el asunto local.', 'Imprimirla.'], 'Respuesta a citas.'],
      ['¿Qué puede incluir una tarea?', 'Fecha de inicio, vencimiento y prioridad.', ['Solo destinatario.', 'Solo una URL.', 'Únicamente una imagen.'], 'Elemento de tarea.'],
      ['¿Completar una tarea la elimina?', 'No.', ['Sí, siempre.', 'Solo si es compartida.', 'Solo si tiene prioridad alta.'], 'Estado y eliminación son distintos.']
    ],
    34: [
      ['¿Qué muestra la cola de impresión?', 'Trabajos pendientes y su estado.', ['Archivos borrados.', 'Escáneres desconectados solamente.', 'Favoritos de Edge.'], 'Gestión de impresión.'],
      ['¿Pausar un trabajo lo cancela?', 'No.', ['Sí.', 'Solo si es PDF.', 'Solo en red.'], 'Pausa y cancelación son acciones distintas.'],
      ['¿Qué significa intercalar?', 'Imprimir juegos completos de varias páginas.', ['Imprimir en color.', 'Escanear a dos caras.', 'Reducir la resolución.'], 'Opción de copias.'],
      ['¿Qué es impresión dúplex?', 'Impresión por ambas caras.', ['Impresión a color.', 'Dos copias iguales.', 'Impresión en red.'], 'Configuración de impresión.'],
      ['¿Qué genera Microsoft Print to PDF?', 'Un archivo PDF.', ['Una copia física siempre.', 'Una imagen TIFF.', 'Un correo.'], 'Impresora virtual.'],
      ['¿Qué elemento traduce órdenes al lenguaje de la impresora?', 'El controlador.', ['La cola.', 'El papel.', 'El escáner.'], 'Función del driver.'],
      ['¿Dónde se agregan impresoras en Windows 11?', 'Configuración > Bluetooth y dispositivos > Impresoras y escáneres.', ['Solo en Edge.', 'En la Papelera.', 'En Calc.'], 'Ruta de configuración.'],
      ['¿Qué origen conviene para un libro encuadernado?', 'El cristal.', ['El alimentador automático.', 'La bandeja de papel.', 'La cola.'], 'Uso del escáner.'],
      ['¿Qué origen acelera un lote de hojas sueltas?', 'El alimentador automático.', ['El cristal una a una.', 'La impresora PDF.', 'La Papelera.'], 'ADF.'],
      ['¿Qué expresa dpi o ppp?', 'Resolución.', ['Velocidad de red.', 'Número de páginas.', 'Color del papel.'], 'Digitalización.'],
      ['¿Qué efecto suele tener aumentar dpi?', 'Aumenta detalle, tamaño y tiempo.', ['Reduce siempre el tamaño.', 'Elimina errores OCR.', 'Convierte en vector.'], 'Resolución de escaneo.'],
      ['¿Qué formato es adecuado para multipágina?', 'PDF.', ['BMP únicamente.', 'TXT.', 'CSV.'], 'Formato documental.'],
      ['¿Qué formato usa compresión con pérdida habitual en fotos?', 'JPEG.', ['PNG.', 'TIFF sin compresión siempre.', 'ODT.'], 'Formato de imagen.'],
      ['¿Qué hace el OCR?', 'Reconoce caracteres en una imagen.', ['Cifra el archivo.', 'Imprime a doble cara.', 'Asigna una unidad de red.'], 'Reconocimiento óptico.'],
      ['¿Debe revisarse el resultado OCR?', 'Sí.', ['No, nunca falla.', 'Solo si es color.', 'Solo en red.'], 'Puede introducir errores.']
    ],
    35: [
      ['¿Cuál es el formato nativo de Writer?', 'ODT.', ['DOCX.', 'PDF.', 'XLSX.'], 'OpenDocument Text.'],
      ['¿Qué hace Exportar a PDF?', 'Crea una copia PDF y mantiene el documento editable.', ['Convierte el archivo abierto y elimina el ODT.', 'Imprime físicamente.', 'Cierra Writer sin guardar.'], 'Exportación.'],
      ['¿Qué ventaja principal ofrecen los estilos?', 'Coherencia y cambios centralizados.', ['Ocultar el documento.', 'Eliminar páginas.', 'Evitar guardar.'], 'Formato estructurado.'],
      ['¿Qué atajo borra formato directo?', 'Ctrl + M.', ['Ctrl + D.', 'Ctrl + T.', 'Ctrl + P.'], 'Writer.'],
      ['¿Qué estilo debe usarse para un título estructural?', 'Un estilo de encabezado o título.', ['Solo negrita manual.', 'Un estilo de tabla.', 'Un comentario.'], 'Estructura del documento.'],
      ['¿Qué controla el estilo de página?', 'Márgenes, orientación, encabezado y pie.', ['La contraseña del usuario.', 'La red.', 'La cola de impresión.'], 'Formato de página.'],
      ['¿Es fiable alinear columnas con espacios?', 'No.', ['Sí, siempre.', 'Solo en PDF.', 'Solo con fuente proporcional.'], 'Deben usarse tabulaciones o tablas.'],
      ['¿Qué determina el anclaje de una imagen?', 'Con qué elemento se desplaza.', ['El formato del archivo.', 'La resolución de pantalla.', 'El idioma.'], 'Anclaje de objetos.'],
      ['¿Qué determina el ajuste de una imagen?', 'Cómo fluye el texto alrededor.', ['Dónde se guarda.', 'Qué impresora usa.', 'Su contraseña.'], 'Ajuste de texto.'],
      ['¿De qué depende una tabla de contenido automática?', 'De estilos de título correctamente aplicados.', ['De espacios manuales.', 'De imágenes.', 'De comentarios.'], 'Índice automático.'],
      ['¿Qué hace Control de cambios?', 'Registra modificaciones para aceptarlas o rechazarlas.', ['Guarda una copia en red.', 'Impide editar.', 'Convierte a PDF.'], 'Revisión.'],
      ['¿Qué necesita una combinación de correspondencia?', 'Fuente de datos y campos.', ['Solo una imagen.', 'Una impresora local obligatoria.', 'Un archivo ejecutable.'], 'Mail merge.'],
      ['¿Qué permite el Navegador?', 'Desplazarse por títulos, tablas, imágenes y objetos.', ['Cambiar el sistema operativo.', 'Escanear documentos.', 'Gestionar certificados.'], 'Herramienta de Writer.'],
      ['¿Qué diferencia Guardar de Guardar como?', 'Guardar como permite cambiar nombre, ubicación o formato.', ['Ninguna.', 'Guardar como solo imprime.', 'Guardar elimina el original.'], 'Gestión del documento.'],
      ['¿Qué debe revisarse antes de exportar?', 'Saltos, numeración, tablas, imágenes y campos.', ['Solo el color del escritorio.', 'La red del servidor.', 'La Papelera.'], 'Control final.']
    ],
    36: [
      ['¿Qué contiene un libro de Calc?', 'Una o varias hojas.', ['Solo una fórmula.', 'Solo gráficos.', 'Una base de datos externa obligatoria.'], 'Estructura de Calc.'],
      ['¿Cómo se identifica una celda?', 'Por columna y fila, como B7.', ['Por color.', 'Por nombre de archivo.', 'Por impresora.'], 'Referencia de celda.'],
      ['¿Cómo comienza una fórmula?', 'Con =.', ['Con #.', 'Con @.', 'Con ?.'], 'Sintaxis de Calc.'],
      ['¿Qué referencia es absoluta?', '$A$1.', ['A1.', '$A1 únicamente.', 'A$1 únicamente.'], 'Referencia fija completa.'],
      ['¿Qué referencia fija solo la columna?', '$A1.', ['A$1.', 'A1.', '$A$1 únicamente.'], 'Referencia mixta.'],
      ['¿Qué indica #DIV/0!?', 'División entre cero.', ['Referencia válida.', 'Texto correcto.', 'Filtro activo.'], 'Error de fórmula.'],
      ['¿Qué función suma valores?', 'SUMA.', ['SI.', 'CONTAR.', 'MAX.'], 'Función básica.'],
      ['¿Qué diferencia CONTAR de CONTARA?', 'CONTAR cuenta números; CONTARA celdas no vacías.', ['No existe diferencia.', 'CONTAR cuenta texto únicamente.', 'CONTARA suma valores.'], 'Funciones de conteo.'],
      ['¿Qué hace SI?', 'Evalúa una condición y devuelve dos resultados posibles.', ['Ordena filas.', 'Imprime hojas.', 'Cierra el libro.'], 'Función lógica.'],
      ['¿Qué hace un filtro?', 'Oculta temporalmente filas que no cumplen criterios.', ['Elimina las filas.', 'Cambia fórmulas.', 'Bloquea el archivo.'], 'Filtro automático.'],
      ['¿Qué riesgo existe al ordenar solo una columna?', 'Desalinear los registros respecto de otras columnas.', ['Convertir números en fechas.', 'Eliminar la hoja.', 'Cambiar la impresora.'], 'Ordenación de tablas.'],
      ['¿Qué hace la validez de datos?', 'Restringe o controla entradas.', ['Calcula siempre una suma.', 'Crea un gráfico.', 'Cifra el libro.'], 'Validación.'],
      ['¿El formato condicional cambia el valor?', 'No, cambia la apariencia según reglas.', ['Sí, siempre.', 'Solo en porcentajes.', 'Solo al imprimir.'], 'Formato condicional.'],
      ['¿Qué diferencia puede existir entre valor y visualización?', 'El formato puede mostrar redondeo sin alterar el valor almacenado.', ['Ninguna jamás.', 'El valor siempre es texto.', 'La visualización determina la fórmula.'], 'Formato numérico.'],
      ['¿Inmovilizar paneles configura la impresión?', 'No.', ['Sí, siempre.', 'Solo en PDF.', 'Solo en horizontal.'], 'Vista e impresión son distintas.']
    ]
  };

  function makeQuestions(number, rows) {
    const sources = {
      32: 'Microsoft · Windows 11 File Explorer',
      33: 'Microsoft Edge / OpenText GroupWise 24',
      34: 'Microsoft · Windows 11 printing and scanning',
      35: 'The Document Foundation · LibreOffice Writer',
      36: 'The Document Foundation · LibreOffice Calc'
    };
    return rows.map((row, index) => {
      const [text, correct, wrongs, justification] = row;
      const options = [correct, ...wrongs];
      const shift = (number + index) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `dip-v48-t${number}-q${index + 1}`,
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
      sec('Resumen orientado al aprobado', [`Tema práctico de alta rentabilidad. Fuente principal: ${value.source}. Memoriza la diferencia entre acción, resultado, ubicación, formato y atajo.`]),
      sec('Rigor normativo', ['Contenido ajustado al alcance literal del programa y a documentación oficial de producto. Las rutas y nombres pueden variar por configuración, idioma, políticas corporativas o actualización, por lo que se priorizan conceptos y operaciones estables.']),
      ...value.blocks.map(block => sec(block[0], block[1])),
      sec('Opo-Test: puntos calientes', value.hot),
      sec('Retención activa', value.recall)
    ];
    currentTheme.reviewTable = [
      ['Elemento', 'Qué comprobar en test y supuesto práctico'],
      ['Objeto', 'Archivo, carpeta, unidad, mensaje, cita, trabajo de impresión, documento o celda.'],
      ['Acción', 'Crear, copiar, mover, borrar, enviar, responder, imprimir, escanear, formatear o calcular.'],
      ['Atajo o ruta', 'Combinación de teclas, menú, panel o cuadro de diálogo adecuado.'],
      ['Resultado', 'Copia, cambio de ubicación, eliminación, archivo, PDF, fórmula, filtro o modificación visual.'],
      ['Control', 'Permisos, destinatarios, formato, vista previa, errores, privacidad y ubicación final.']
    ];
    currentTheme.tree = '';
    currentTheme.motorCoverage = 'diputacion-revisado-v48';
    currentTheme.auditStatus = 'desarrollo profundo y banco manual revisado v0.48';

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
    version: 'v0.48.0', themes: allThemes, ...totals,
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
  const realPools = ope.themes.map(item => ({ theme: item, questions: shuffle((ope.themeTests[item.id] || []).filter(valid).filter(question => !isGeneric(question)), 4800 + Number(item.number)) }));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 240) {
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
    const ordered = shuffle(selected, seed * 4813);
    const main = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v48-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v48-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v48-sim${seed}`,
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
      'Desarrollados en profundidad los temas 32 a 36 de Diputación',
      'Añadidas 75 preguntas manuales de Windows 11, Edge, GroupWise, impresión, escaneado, Writer y Calc',
      'Alcanzados 29 temas profundos y 435 preguntas manuales acumuladas',
      'Regenerados simulacros exclusivamente con preguntas reales'
    ]
  });

  window.OPOWEB_DIPUTACION_V48 = {
    version: `v${VERSION}`,
    revisedThemes: [32, 33, 34, 35, 36],
    manualQuestions: 75,
    cumulativeManualQuestions: 435,
    totalDeepThemes: 29,
    pendingInternalThemes: [22],
    officialSources: ['Microsoft Windows 11', 'Microsoft Edge', 'OpenText GroupWise 24', 'LibreOffice Writer', 'LibreOffice Calc']
  };
})();