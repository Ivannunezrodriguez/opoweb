(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.64.0';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const letters = ['A', 'B', 'C', 'D'];

  const specs = {
    32: {
      sections: [
        ['Explorador de archivos', ['El Explorador de archivos permite localizar, abrir, organizar y administrar archivos y carpetas locales, de red y en la nube. Windows+E lo abre y la barra de direcciones muestra la ruta.', 'Copiar crea otro ejemplar; cortar y pegar mueve. Eliminar en una unidad local suele enviar a la Papelera, mientras que una eliminación de red o con Mayús+Supr puede no ser recuperable desde ella.']],
        ['Unidades locales y de red', ['Las unidades locales están conectadas al equipo. Las unidades de red enlazan recursos compartidos y dependen de conectividad, disponibilidad del servidor y permisos.', 'Una ruta UNC adopta la forma \\servidor\\recurso. Mapear una unidad asigna una letra al recurso compartido sin convertirlo en almacenamiento local.']],
        ['Seguridad y organización', ['Las extensiones identifican formatos y conviene mostrarlas para evitar confusiones. Los permisos determinan lectura, escritura, modificación o control.', 'En documentación administrativa deben utilizarse nombres consistentes, carpetas autorizadas y copias de seguridad, evitando dispositivos o ubicaciones personales no aprobados.']]
      ],
      rows: [
        ['¿Qué combinación abre el Explorador de archivos en Windows 11?', 'Windows + E.', ['Ctrl + E.', 'Alt + E.', 'Windows + P.'], 'Ayuda oficial de Microsoft para el Explorador de archivos.'],
        ['¿Qué operación crea un duplicado y mantiene el original?', 'Copiar y pegar.', ['Cortar y pegar.', 'Eliminar.', 'Cambiar el nombre.'], 'Funcionamiento del Explorador de archivos de Windows 11.'],
        ['¿Qué operación traslada normalmente un archivo a otra carpeta?', 'Cortar y pegar.', ['Copiar y pegar.', 'Crear acceso directo.', 'Comprimir sin mover.'], 'Funcionamiento del Explorador de archivos de Windows 11.'],
        ['¿Qué atajo crea una carpeta nueva en el Explorador?', 'Ctrl + Mayús + N.', ['Ctrl + Alt + N.', 'Windows + N.', 'Mayús + F2.'], 'Atajos del Explorador de archivos de Windows.'],
        ['¿Qué tecla permite cambiar rápidamente el nombre del elemento seleccionado?', 'F2.', ['F1.', 'F5.', 'F12.'], 'Atajos del Explorador de archivos de Windows.'],
        ['¿Qué efecto tiene Mayús + Supr sobre un archivo?', 'Solicita eliminarlo sin enviarlo a la Papelera.', ['Lo copia al escritorio.', 'Lo comprime.', 'Abre sus propiedades.'], 'Operaciones de eliminación en Windows.'],
        ['¿Qué muestra una extensión como .pdf o .odt?', 'El tipo o formato asociado al archivo.', ['El propietario del archivo.', 'La unidad física.', 'La fecha de creación.'], 'Opciones de visualización del Explorador de archivos.'],
        ['¿Cómo se muestran las extensiones en Windows 11?', 'Vista > Mostrar > Extensiones de nombre de archivo.', ['Archivo > Imprimir.', 'Inicio > Ejecutar.', 'Compartir > Propiedades.'], 'Ayuda oficial de Microsoft para el Explorador de archivos.'],
        ['¿Qué representa una ruta como \\servidor\\expedientes?', 'Una ruta UNC a un recurso compartido de red.', ['Una dirección web pública.', 'Una unidad óptica.', 'Una carpeta de la Papelera.'], 'Conceptos de recursos compartidos de Windows.'],
        ['¿Qué hace mapear una unidad de red?', 'Asigna una letra a un recurso compartido remoto.', ['Copia todo el servidor al disco local.', 'Elimina la necesidad de permisos.', 'Convierte la red en una memoria USB.'], 'Administración de unidades de red en Windows.'],
        ['¿De qué depende el acceso a una unidad de red?', 'De la conectividad, disponibilidad del recurso y permisos.', ['Solo del espacio libre local.', 'Del navegador predeterminado.', 'De la impresora instalada.'], 'Conceptos de red y permisos de Windows.'],
        ['¿Qué permiso permite consultar un archivo sin modificarlo?', 'Lectura.', ['Escritura.', 'Control total.', 'Eliminación.'], 'Permisos de archivos y carpetas en Windows.'],
        ['¿Qué atajo selecciona todos los elementos de la carpeta activa?', 'Ctrl + A.', ['Ctrl + S.', 'Ctrl + D.', 'Alt + A.'], 'Atajos del Explorador de archivos de Windows.'],
        ['¿Qué atajo deshace normalmente la última operación de archivo?', 'Ctrl + Z.', ['Ctrl + Y.', 'Ctrl + R.', 'Alt + Z.'], 'Atajos generales de Windows.'],
        ['¿Es una unidad de red almacenamiento físicamente local por tener una letra asignada?', 'No; la letra solo facilita el acceso al recurso remoto.', ['Sí, siempre.', 'Solo si empieza por Z.', 'Solo cuando está desconectada.'], 'Conceptos de unidades mapeadas de Windows.']
      ]
    },
    33: {
      sections: [
        ['Microsoft Edge', ['Edge permite navegar mediante URL, pestañas, favoritos, historial y descargas. HTTPS cifra la comunicación, pero no sustituye la comprobación del dominio y de la autenticidad de la sede.', 'InPrivate elimina al cerrar todas sus ventanas el historial, cookies y datos temporales, pero conserva archivos descargados y favoritos creados. No oculta la actividad al empleador, centro educativo o proveedor de internet.']],
        ['Correo electrónico con GroupWise', ['GroupWise integra correo, calendario, contactos, tareas y citas. Responder, responder a todos y reenviar tienen destinatarios distintos y deben elegirse con prudencia.', 'CC muestra destinatarios; CCO los oculta a los demás. Antes de enviar deben comprobarse dirección, asunto, adjuntos, clasificación y contenido sensible.']],
        ['Seguridad y productividad', ['Los enlaces y adjuntos inesperados deben verificarse antes de abrirse. El calendario permite convocar citas y consultar disponibilidad; las reglas, carpetas y búsquedas ayudan a clasificar mensajes.', 'No debe confundirse eliminar con archivar ni confiar en la navegación privada como mecanismo de anonimato o protección institucional.']]
      ],
      rows: [
        ['¿Qué elemento de Edge permite escribir una URL o realizar una búsqueda?', 'La barra de direcciones.', ['La barra de tareas de Windows.', 'El panel de impresión.', 'La Papelera.'], 'Ayuda oficial de Microsoft Edge.'],
        ['¿Qué atajo abre una pestaña nueva en Edge?', 'Ctrl + T.', ['Ctrl + P.', 'Ctrl + W.', 'Alt + T.'], 'Atajos de Microsoft Edge.'],
        ['¿Qué atajo cierra la pestaña activa?', 'Ctrl + W.', ['Ctrl + T.', 'Ctrl + L.', 'Ctrl + H.'], 'Atajos de Microsoft Edge.'],
        ['¿Qué atajo reabre la última pestaña cerrada?', 'Ctrl + Mayús + T.', ['Ctrl + Mayús + W.', 'Alt + F4.', 'Windows + T.'], 'Atajos de Microsoft Edge.'],
        ['¿Qué conserva Edge después de cerrar todas las ventanas InPrivate?', 'Los archivos descargados y los favoritos guardados.', ['El historial completo de navegación.', 'Todas las cookies de sesión.', 'Los datos de formularios temporales.'], 'Ayuda oficial de Microsoft sobre navegación InPrivate.'],
        ['¿Qué elimina Edge al cerrar todas las ventanas InPrivate?', 'Historial, cookies, caché y datos temporales de esa sesión.', ['Los archivos descargados.', 'Los favoritos creados.', 'Los documentos del equipo.'], 'Ayuda oficial de Microsoft sobre navegación InPrivate.'],
        ['¿Impide InPrivate que la organización o el proveedor de internet conozcan la actividad?', 'No.', ['Sí, siempre.', 'Solo si se usa HTTPS.', 'Solo en una red corporativa.'], 'Ayuda oficial de Microsoft sobre navegación InPrivate.'],
        ['¿Qué garantiza principalmente HTTPS?', 'El cifrado de la conexión y la autenticación mediante certificado del sitio.', ['Que todo contenido del sitio sea verdadero.', 'Que el sitio sea necesariamente una Administración.', 'Que no exista ningún programa malicioso.'], 'Conceptos de navegación segura en Edge.'],
        ['En correo, ¿qué hace Responder a todos?', 'Envía la respuesta al remitente y a los demás destinatarios incluidos.', ['Envía solo al remitente.', 'Crea una cita.', 'Oculta todos los destinatarios.'], 'Guía de usuario del cliente GroupWise.'],
        ['¿Para qué sirve CCO?', 'Para enviar a destinatarios cuya dirección no se muestra a los demás.', ['Para marcar el mensaje como urgente.', 'Para cifrar automáticamente el adjunto.', 'Para cancelar el envío.'], 'Funciones de correo electrónico de GroupWise.'],
        ['¿Qué debe comprobarse antes de enviar un mensaje con adjunto?', 'Destinatarios, asunto, archivo adjunto y contenido sensible.', ['Solo el color del mensaje.', 'Únicamente el tamaño de la ventana.', 'La impresora predeterminada.'], 'Buenas prácticas de correo administrativo.'],
        ['¿Qué función de GroupWise permite programar una reunión con asistentes?', 'Una cita del calendario.', ['Una nota personal sin destinatarios.', 'La Papelera.', 'Una firma de correo.'], 'Funciones de calendario de GroupWise.'],
        ['¿Qué diferencia hay entre CC y CCO?', 'CC muestra las direcciones; CCO las oculta a los demás destinatarios.', ['No existe diferencia.', 'CC cifra y CCO comprime.', 'CC elimina y CCO archiva.'], 'Funciones de correo electrónico de GroupWise.'],
        ['Ante un adjunto inesperado, ¿qué actuación es más segura?', 'Verificar remitente, contexto y tipo de archivo antes de abrirlo.', ['Abrirlo inmediatamente.', 'Reenviarlo a toda la organización.', 'Desactivar la protección del equipo.'], 'Buenas prácticas de seguridad del correo.'],
        ['¿Qué diferencia general existe entre archivar y eliminar un mensaje?', 'Archivar lo conserva fuera de la bandeja principal; eliminarlo lo mueve hacia su supresión.', ['Son exactamente la misma operación.', 'Archivar lo publica.', 'Eliminar crea una copia.'], 'Organización del correo en GroupWise.']
      ]
    },
    34: {
      sections: [
        ['Impresión', ['Antes de imprimir deben seleccionarse impresora, intervalo de páginas, número de copias, orientación, tamaño de papel, color y doble cara. La cola permite consultar, pausar o cancelar trabajos.', 'Una impresora PDF crea un archivo y no una copia en papel. La impresión dúplex utiliza ambas caras cuando el equipo y el controlador la admiten.']],
        ['Escaneado', ['Escanear convierte un documento físico en imagen digital. Deben revisarse resolución, color, orientación, recorte, alimentación, formato y carpeta de destino.', 'El ADF procesa varias hojas; el cristal plano es adecuado para originales delicados o encuadernados. OCR reconoce caracteres y convierte una imagen en texto utilizable, pero requiere revisión.']],
        ['Calidad y seguridad', ['PDF es habitual para documentos multipágina; JPEG o PNG son formatos de imagen. Una resolución excesiva aumenta el tamaño sin mejorar necesariamente la utilidad.', 'Los documentos administrativos deben comprobarse página a página, nombrarse correctamente y guardarse solo en ubicaciones autorizadas.']]
      ],
      rows: [
        ['¿Qué opción permite imprimir solo determinadas páginas?', 'El intervalo o rango de páginas.', ['La resolución del escáner.', 'La cola de correo.', 'El nombre del equipo.'], 'Opciones de impresión de Windows.'],
        ['¿Qué significa impresión dúplex?', 'Imprimir por ambas caras del papel.', ['Imprimir dos copias idénticas.', 'Usar dos impresoras.', 'Escanear en color.'], 'Opciones de impresión de Windows.'],
        ['¿Qué controla la orientación de impresión?', 'Si la página se presenta vertical o apaisada.', ['El número de copias.', 'La calidad del correo.', 'La unidad de red.'], 'Opciones de impresión de Windows.'],
        ['¿Para qué sirve la cola de impresión?', 'Para ver y gestionar trabajos pendientes o en curso.', ['Para guardar contactos.', 'Para editar imágenes.', 'Para mapear unidades.'], 'Administración de impresoras en Windows.'],
        ['¿Qué produce Microsoft Print to PDF?', 'Un archivo PDF en lugar de una hoja impresa.', ['Un archivo de audio.', 'Una copia en la Papelera.', 'Un correo electrónico.'], 'Impresión virtual de Windows.'],
        ['¿Qué mide normalmente la resolución de escaneado?', 'Puntos por pulgada o DPI.', ['Páginas por minuto únicamente.', 'Megahercios.', 'Voltios.'], 'Conceptos de digitalización.'],
        ['¿Qué dispositivo facilita escanear varias hojas automáticamente?', 'El alimentador automático de documentos o ADF.', ['El ratón.', 'La tarjeta de red.', 'El monitor.'], 'Funciones habituales de escáneres.'],
        ['¿Para qué es preferible el cristal plano?', 'Para originales delicados, fotografías o documentos encuadernados.', ['Para imprimir sobres.', 'Para enviar correos.', 'Para ampliar memoria RAM.'], 'Funciones habituales de escáneres.'],
        ['¿Qué hace el OCR?', 'Reconoce caracteres de una imagen para obtener texto editable o buscable.', ['Comprime el papel.', 'Cifra la red.', 'Sustituye la revisión humana.'], 'Conceptos de reconocimiento óptico de caracteres.'],
        ['¿Qué formato es adecuado para un expediente escaneado de varias páginas?', 'PDF multipágina.', ['BMP independiente obligatorio.', 'Archivo ejecutable.', 'MP3.'], 'Buenas prácticas de digitalización documental.'],
        ['¿Qué debe comprobarse después de escanear?', 'Legibilidad, orientación, integridad, orden y destino del archivo.', ['Solo el color del icono.', 'Únicamente la marca del escáner.', 'Nada si no hubo error.'], 'Buenas prácticas de digitalización documental.'],
        ['¿Qué efecto suele tener aumentar mucho la resolución?', 'Aumenta el tamaño del archivo.', ['Reduce siempre el tamaño.', 'Elimina la necesidad de OCR.', 'Convierte el documento en hoja de cálculo.'], 'Conceptos de resolución de imagen.'],
        ['¿Qué modo reduce normalmente el tamaño frente al color?', 'Escala de grises o blanco y negro, según el original.', ['Color de 48 bits.', 'Presentación de diapositivas.', 'Modo avión.'], 'Opciones habituales de escaneado.'],
        ['¿Qué debe hacerse si un trabajo de impresión incorrecto sigue pendiente?', 'Cancelarlo desde la cola de impresión.', ['Apagar el servidor sin aviso.', 'Eliminar el documento original.', 'Cambiar la extensión del archivo.'], 'Administración de impresoras en Windows.'],
        ['¿Dónde debe guardarse un escaneado con datos personales?', 'En una ubicación corporativa autorizada y con permisos adecuados.', ['En cualquier nube personal.', 'En una memoria encontrada.', 'En una carpeta pública sin control.'], 'Buenas prácticas de seguridad documental.']
      ]
    },
    35: {
      sections: [
        ['Edición y formato en Writer', ['Writer utiliza ODT como formato propio y puede abrir o guardar DOCX. Los estilos proporcionan formato coherente; el formato directo se aplica solo a la selección.', 'Los estilos de párrafo, carácter, página y lista cumplen funciones diferentes. Los saltos de página deben usarse en lugar de insertar líneas vacías.']],
        ['Estructura y revisión', ['Writer admite tablas, encabezados, pies, numeración, secciones, índices, comentarios y control de cambios. Buscar y reemplazar permite corregir elementos repetidos.', 'La combinación de correspondencia genera documentos personalizados a partir de una fuente de datos. Exportar a PDF conserva la maquetación para distribución.']],
        ['Trabajo administrativo', ['Deben revisarse ortografía, márgenes, fechas, destinatarios, datos personales y versión final. Guardar conserva el documento editable; exportar a PDF crea una versión de distribución.']]
      ],
      rows: [
        ['¿Cuál es el formato propio de documentos de Writer?', 'ODT.', ['ODS.', 'ODP.', 'ODB.'], 'Ayuda oficial de LibreOffice Writer.'],
        ['¿Qué ventaja principal ofrecen los estilos?', 'Aplicar formato coherente y modificable de forma centralizada.', ['Eliminar todo el texto.', 'Convertir siempre a PDF.', 'Impedir guardar el documento.'], 'Ayuda oficial de LibreOffice Writer.'],
        ['¿Qué diferencia hay entre estilo y formato directo?', 'El estilo es reutilizable y estructural; el formato directo afecta a la selección concreta.', ['No existe diferencia.', 'El formato directo crea bases de datos.', 'El estilo solo cambia el nombre del archivo.'], 'Ayuda oficial de LibreOffice Writer.'],
        ['¿Qué estilo controla márgenes, orientación y encabezados de una página?', 'El estilo de página.', ['El estilo de carácter.', 'El estilo de lista.', 'El estilo de tabla de datos.'], 'Ayuda oficial de LibreOffice Writer.'],
        ['¿Qué atajo inserta un salto de página manual?', 'Ctrl + Intro.', ['Ctrl + S.', 'Alt + Intro.', 'Mayús + P.'], 'Atajos de LibreOffice Writer.'],
        ['¿Por qué no conviene crear una página nueva con muchas líneas vacías?', 'Porque altera la maquetación al editar y debe usarse un salto de página.', ['Porque borra el documento.', 'Porque impide imprimir.', 'Porque convierte el texto en tabla.'], 'Buenas prácticas de maquetación en Writer.'],
        ['¿Para qué sirve el control de cambios?', 'Para registrar inserciones, eliminaciones y modificaciones y poder revisarlas.', ['Para cifrar el archivo.', 'Para escanear documentos.', 'Para ordenar una hoja de cálculo.'], 'Ayuda oficial de LibreOffice Writer.'],
        ['¿Qué función permite añadir observaciones sin cambiar el texto principal?', 'Comentarios.', ['Autocálculo.', 'Filtro automático.', 'Relaciones.'], 'Ayuda oficial de LibreOffice Writer.'],
        ['¿Qué hace Buscar y reemplazar?', 'Localiza texto o patrones y los sustituye de forma controlada.', ['Guarda automáticamente en la nube.', 'Cambia el sistema operativo.', 'Crea una base de datos.'], 'Ayuda oficial de LibreOffice Writer.'],
        ['¿Para qué sirve la combinación de correspondencia?', 'Para generar documentos personalizados a partir de registros de datos.', ['Para sumar celdas.', 'Para crear diapositivas.', 'Para borrar duplicados del disco.'], 'Ayuda oficial de LibreOffice Writer.'],
        ['¿Qué puede contener un encabezado?', 'Texto repetido como organismo, título o referencia en las páginas.', ['Solo imágenes temporales.', 'Únicamente fórmulas de Calc.', 'La Papelera de Windows.'], 'Ayuda oficial de LibreOffice Writer.'],
        ['¿Qué diferencia existe entre Guardar y Exportar como PDF?', 'Guardar conserva el formato editable; exportar genera un PDF de distribución.', ['Son siempre idénticos.', 'Guardar imprime y exportar borra.', 'Exportar modifica el original obligatoriamente.'], 'Ayuda oficial de LibreOffice Writer.'],
        ['¿Qué atajo guarda el documento?', 'Ctrl + S.', ['Ctrl + G en cualquier idioma necesariamente.', 'Ctrl + P.', 'Ctrl + Q.'], 'Atajos estándar de LibreOffice.'],
        ['¿Qué elemento permite organizar información en filas y columnas dentro del texto?', 'Una tabla.', ['Un marcador de red.', 'Una diapositiva maestra.', 'Un controlador de impresora.'], 'Ayuda oficial de LibreOffice Writer.'],
        ['Antes de distribuir un oficio en PDF, ¿qué debe comprobarse?', 'Contenido, destinatario, fecha, firma, datos personales y maquetación.', ['Solo el nombre del programa.', 'Únicamente el color de fondo.', 'Nada si se abre el archivo.'], 'Buenas prácticas de documentación administrativa.']
      ]
    },
    36: {
      sections: [
        ['Estructura y fórmulas en Calc', ['Calc utiliza ODS como formato propio. Un libro contiene hojas; las celdas se identifican por columna y fila y un rango agrupa celdas.', 'Las fórmulas comienzan por igual. Las referencias relativas cambian al copiar; las absolutas, como $A$1, permanecen fijadas; las mixtas fijan solo fila o columna.']],
        ['Datos y análisis', ['Funciones como SUMA, PROMEDIO, MÁXIMO, MÍNIMO, CONTAR y SI resuelven cálculos habituales. Ordenar cambia el orden; filtrar oculta temporalmente registros que no cumplen condiciones.', 'El formato condicional destaca valores según reglas. Los gráficos representan datos y deben mantener título, categorías y escala comprensibles.']],
        ['Integridad de hojas', ['Congelar filas o columnas mantiene encabezados visibles. Validación limita entradas. CSV conserva datos tabulares simples, pero no todas las fórmulas, formatos ni múltiples hojas.']]
      ],
      rows: [
        ['¿Cuál es el formato propio de una hoja de cálculo de Calc?', 'ODS.', ['ODT.', 'ODP.', 'ODB.'], 'Ayuda oficial de LibreOffice Calc.'],
        ['¿Cómo comienza una fórmula en Calc?', 'Con el signo igual.', ['Con un punto.', 'Con una barra invertida.', 'Con una almohadilla obligatoria.'], 'Ayuda oficial de LibreOffice Calc.'],
        ['¿Qué identifica A1?', 'La celda de la columna A y fila 1.', ['Una hoja llamada A1.', 'Un archivo comprimido.', 'Una impresora.'], 'Conceptos básicos de Calc.'],
        ['¿Qué es un rango como A1:C5?', 'Un conjunto rectangular de celdas.', ['Una única celda.', 'Una presentación.', 'Una relación de base de datos.'], 'Conceptos básicos de Calc.'],
        ['¿Qué ocurre con una referencia relativa al copiar una fórmula?', 'Se ajusta según el desplazamiento.', ['Permanece siempre idéntica.', 'Se convierte en texto.', 'Borra la hoja.'], 'Ayuda oficial de LibreOffice Calc.'],
        ['¿Qué referencia permanece completamente fija al copiar?', '$A$1.', ['A1.', 'A$1 y $A1 al mismo tiempo.', '1A.'], 'Ayuda oficial de LibreOffice Calc.'],
        ['¿Qué función suma un rango?', 'SUMA.', ['SI.', 'CONTAR.', 'HOY.'], 'Ayuda oficial de LibreOffice Calc.'],
        ['¿Qué función calcula la media aritmética?', 'PROMEDIO.', ['MÁXIMO.', 'SUMA.SI.', 'BUSCAR.'], 'Ayuda oficial de LibreOffice Calc.'],
        ['¿Qué diferencia existe entre ordenar y filtrar?', 'Ordenar reorganiza; filtrar muestra solo registros que cumplen criterios.', ['Filtrar borra los demás registros.', 'Ordenar no altera la visualización.', 'Son exactamente lo mismo.'], 'Ayuda oficial de LibreOffice Calc.'],
        ['¿Qué hace el formato condicional?', 'Aplica formato cuando se cumplen reglas definidas.', ['Protege físicamente el ordenador.', 'Convierte la hoja en PDF siempre.', 'Elimina todas las fórmulas.'], 'Ayuda oficial de LibreOffice Calc.'],
        ['¿Para qué sirve congelar filas o columnas?', 'Para mantener encabezados visibles al desplazarse.', ['Para impedir guardar.', 'Para ordenar automáticamente.', 'Para eliminar duplicados.'], 'Ayuda oficial de LibreOffice Calc.'],
        ['¿Qué permite la validación de datos?', 'Restringir o controlar los valores admitidos en una celda.', ['Aumentar la memoria RAM.', 'Crear una cuenta de correo.', 'Escanear un documento.'], 'Ayuda oficial de LibreOffice Calc.'],
        ['¿Qué error aparece al dividir entre cero?', 'Un error de división por cero.', ['Un resultado válido infinito.', 'Una fecha.', 'Una celda vacía obligatoria.'], 'Gestión de errores de fórmulas en Calc.'],
        ['¿Qué limitación tiene CSV?', 'No conserva todas las fórmulas, formatos ni múltiples hojas.', ['No puede contener texto.', 'Solo admite imágenes.', 'Es un formato de presentación.'], 'Importación y exportación de Calc.'],
        ['¿Qué debe revisarse antes de ordenar una tabla administrativa?', 'Que se seleccione todo el rango y se mantenga la asociación entre columnas.', ['Solo una columna aunque desplace el resto.', 'Que no haya encabezados.', 'Que las fórmulas se conviertan en imágenes.'], 'Buenas prácticas de hojas de cálculo.']
      ]
    },
    37: {
      sections: [
        ['Modelo de datos', ['Base permite crear o conectar bases de datos. Una tabla contiene registros y campos; la clave primaria identifica unívocamente cada registro y la clave foránea relaciona tablas.', 'Los tipos de datos limitan el contenido de los campos. La integridad referencial ayuda a evitar relaciones huérfanas.']],
        ['Objetos de Base', ['Las consultas seleccionan, filtran, ordenan o calculan datos. Los formularios facilitan entrada y consulta; los informes presentan información preparada para impresión.', 'El archivo ODB almacena formularios, consultas, informes, configuración y conexión; los datos pueden estar embebidos o en una fuente externa.']],
        ['Uso seguro', ['Los cambios estructurales deben planificarse y probarse. Las hojas de cálculo y archivos de texto conectados pueden ser de solo lectura para edición desde Base.', 'Las consultas deben limitar los datos a lo necesario y respetar permisos y protección de datos.']]
      ],
      rows: [
        ['¿Qué contiene una tabla de base de datos?', 'Registros organizados en campos.', ['Diapositivas y transiciones.', 'Páginas impresas únicamente.', 'Controladores de hardware.'], 'Ayuda oficial de LibreOffice Base.'],
        ['¿Qué es un registro?', 'El conjunto de campos relativo a una entidad o elemento.', ['El nombre de una columna.', 'Una fórmula de Calc.', 'Una impresora instalada.'], 'Conceptos de bases de datos.'],
        ['¿Qué es un campo?', 'Una característica o atributo almacenado para cada registro.', ['Una fila completa siempre.', 'Un archivo PDF.', 'Una carpeta de red.'], 'Conceptos de bases de datos.'],
        ['¿Para qué sirve una clave primaria?', 'Para identificar de forma única cada registro.', ['Para repetir registros.', 'Para imprimir informes.', 'Para cambiar el sistema operativo.'], 'Conceptos de bases de datos relacionales.'],
        ['¿Para qué sirve una clave foránea?', 'Para relacionar un registro con la clave de otra tabla.', ['Para cifrar el archivo.', 'Para crear diapositivas.', 'Para establecer el tamaño de papel.'], 'Conceptos de bases de datos relacionales.'],
        ['¿Qué relación permite varios registros hijos para un registro padre?', 'Uno a muchos.', ['Uno a cero exclusivamente.', 'Muchos a ninguno.', 'Una relación de impresión.'], 'Conceptos de bases de datos relacionales.'],
        ['¿Qué objeto recupera datos según criterios?', 'Una consulta.', ['Un formulario vacío.', 'Una diapositiva.', 'Una cola de impresión.'], 'Ayuda oficial de LibreOffice Base.'],
        ['¿Qué objeto facilita introducir y consultar datos?', 'Un formulario.', ['Un informe final.', 'Una transición.', 'Un controlador USB.'], 'Ayuda oficial de LibreOffice Base.'],
        ['¿Qué objeto prepara datos para presentación o impresión?', 'Un informe.', ['Una clave foránea.', 'Una extensión de archivo.', 'Un acceso directo.'], 'Ayuda oficial de LibreOffice Base.'],
        ['¿Qué instrucción SQL consulta filas?', 'SELECT.', ['DELETE siempre.', 'FORMAT.', 'PRINT.'], 'Conceptos SQL utilizados por Base.'],
        ['¿Qué finalidad tiene la integridad referencial?', 'Evitar referencias inválidas entre tablas relacionadas.', ['Duplicar todas las claves.', 'Eliminar los permisos.', 'Convertir datos en imágenes.'], 'Conceptos de bases de datos relacionales.'],
        ['¿Qué suele contener un archivo ODB?', 'Objetos de Base y la información de conexión a la fuente de datos.', ['Solo los controladores del escáner.', 'El sistema operativo completo.', 'Únicamente una imagen.'], 'Ayuda oficial de LibreOffice Base.'],
        ['¿Puede Base conectarse a bases externas como MySQL u Oracle?', 'Sí.', ['No, solo admite texto plano.', 'Solo mediante impresión.', 'Únicamente si se convierten en PDF.'], 'Ayuda oficial de LibreOffice Base.'],
        ['¿Cómo se tratan desde Base ciertas fuentes como hojas de cálculo o texto?', 'Pueden ser fuentes de solo lectura para estructura y edición de registros.', ['Siempre permiten modificar su estructura.', 'Se convierten automáticamente en correo.', 'No pueden abrirse.'], 'Ayuda oficial de LibreOffice Base.'],
        ['¿Qué debe hacerse antes de modificar una tabla usada por una aplicación?', 'Evaluar dependencias, realizar copia de seguridad y probar el cambio.', ['Modificarla directamente sin revisión.', 'Eliminar la clave primaria.', 'Publicar todos los datos.'], 'Buenas prácticas de administración de datos.']
      ]
    },
    38: {
      sections: [
        ['Estructura de una presentación', ['Impress utiliza ODP como formato propio. Una presentación contiene diapositivas con diseños; la diapositiva maestra controla elementos y formato comunes.', 'Las plantillas proporcionan diseño inicial. Duplicar una diapositiva conserva estructura y facilita consistencia.']],
        ['Presentación y efectos', ['Una transición actúa entre diapositivas; una animación afecta a objetos de una diapositiva. El uso excesivo reduce claridad.', 'Las notas del orador no se muestran normalmente al público. La consola del presentador puede mostrar notas, siguiente diapositiva y tiempo.']],
        ['Salida y accesibilidad', ['Impress permite insertar imágenes, tablas, gráficos, audio y vídeo, exportar a PDF e imprimir diapositivas, notas o folletos.', 'Deben cuidarse contraste, tamaño de letra, texto alternativo, relación de aspecto y cantidad de contenido.']]
      ],
      rows: [
        ['¿Cuál es el formato propio de Impress?', 'ODP.', ['ODT.', 'ODS.', 'ODB.'], 'Ayuda oficial de LibreOffice Impress.'],
        ['¿Qué contiene una presentación?', 'Una secuencia de diapositivas.', ['Solo una hoja de cálculo.', 'Únicamente una tabla de base de datos.', 'Una unidad de red.'], 'Ayuda oficial de LibreOffice Impress.'],
        ['¿Qué controla la diapositiva maestra?', 'Elementos y formato comunes de varias diapositivas.', ['La cola de impresión de Windows.', 'Los permisos de carpeta.', 'Las fórmulas de Calc.'], 'Ayuda oficial de LibreOffice Impress.'],
        ['¿Qué es un diseño de diapositiva?', 'La disposición predefinida de marcadores de contenido.', ['El formato del disco.', 'Un filtro de correo.', 'Una relación entre tablas.'], 'Ayuda oficial de LibreOffice Impress.'],
        ['¿Qué diferencia hay entre transición y animación?', 'La transición ocurre entre diapositivas; la animación afecta a objetos.', ['No existe diferencia.', 'La transición solo imprime.', 'La animación cambia el sistema operativo.'], 'Ayuda oficial de LibreOffice Impress.'],
        ['¿Qué tecla inicia normalmente la presentación desde el principio?', 'F5.', ['F2.', 'F9.', 'Esc.'], 'Atajos de LibreOffice Impress.'],
        ['¿Qué combinación inicia normalmente desde la diapositiva actual?', 'Mayús + F5.', ['Ctrl + F5.', 'Alt + F5.', 'Windows + F5.'], 'Atajos de LibreOffice Impress.'],
        ['¿Para qué sirven las notas del orador?', 'Para apoyar al presentador sin formar parte principal de la diapositiva proyectada.', ['Para cifrar el archivo.', 'Para ordenar registros.', 'Para instalar fuentes.'], 'Ayuda oficial de LibreOffice Impress.'],
        ['¿Qué muestra la consola del presentador?', 'Notas, diapositiva actual o siguiente y controles de tiempo.', ['La BIOS.', 'La cola de impresión únicamente.', 'Los permisos NTFS.'], 'Ayuda oficial de LibreOffice Impress.'],
        ['¿Qué ventaja tiene duplicar una diapositiva?', 'Reutilizar su estructura y formato conservando coherencia.', ['Reducir siempre el archivo a la mitad.', 'Eliminar la original.', 'Convertirla en hoja de cálculo.'], 'Ayuda oficial de LibreOffice Impress.'],
        ['¿Puede Impress exportar una presentación a PDF?', 'Sí.', ['No.', 'Solo mediante captura de pantalla.', 'Únicamente si no contiene texto.'], 'Ayuda oficial de LibreOffice Impress.'],
        ['¿Qué son los folletos o handouts?', 'Páginas impresas con varias diapositivas para el público.', ['Copias de seguridad del sistema.', 'Consultas de Base.', 'Mensajes de correo.'], 'Ayuda oficial de LibreOffice Impress.'],
        ['¿Qué mejora la accesibilidad de una presentación?', 'Buen contraste, letra legible y texto alternativo en imágenes.', ['Texto muy pequeño.', 'Colores casi idénticos.', 'Animaciones constantes.'], 'Buenas prácticas de accesibilidad en presentaciones.'],
        ['¿Qué debe evitarse en una diapositiva administrativa?', 'Exceso de texto, efectos innecesarios y datos sin fuente.', ['Títulos claros.', 'Estructura coherente.', 'Contraste suficiente.'], 'Buenas prácticas de presentaciones.'],
        ['¿Qué relación de aspecto es habitual en pantallas modernas?', '16:9.', ['1:1 obligatoriamente.', '3:1.', 'Solo A4 vertical.'], 'Configuración habitual de presentaciones.']
      ]
    },
    39: {
      sections: [
        ['Hardware y software', ['Hardware son componentes físicos; software son programas y datos. El sistema operativo administra recursos y proporciona servicios a las aplicaciones.', 'La placa base conecta CPU, memoria, almacenamiento y periféricos. La fuente de alimentación convierte y suministra energía.']],
        ['Procesamiento, memoria y almacenamiento', ['La CPU ejecuta instrucciones; la memoria RAM guarda temporalmente datos en uso y es volátil. HDD y SSD conservan datos sin alimentación.', 'Un SSD suele tener menor latencia y carece de partes móviles; un HDD utiliza platos magnéticos y puede ofrecer gran capacidad a menor coste.']],
        ['Comunicación y arranque', ['La tarjeta de red conecta el equipo. GPU procesa gráficos. BIOS o UEFI inicializa hardware y arranca el sistema.', 'Bits y bytes miden información: ocho bits forman un byte. Las copias de seguridad protegen frente a pérdida, pero no sustituyen controles de acceso.']]
      ],
      rows: [
        ['¿Qué es hardware?', 'Los componentes físicos del ordenador.', ['Los programas instalados.', 'Los datos en la nube.', 'Solo el sistema operativo.'], 'Conceptos generales del ordenador personal.'],
        ['¿Qué es software?', 'Programas, instrucciones y datos utilizados por el equipo.', ['Únicamente piezas metálicas.', 'Solo cables.', 'La carcasa.'], 'Conceptos generales del ordenador personal.'],
        ['¿Qué función principal realiza la CPU?', 'Ejecutar instrucciones y procesar datos.', ['Imprimir documentos.', 'Almacenar papel.', 'Escanear fotografías por sí sola.'], 'Arquitectura básica del ordenador.'],
        ['¿Qué característica tiene la memoria RAM?', 'Es memoria de trabajo volátil.', ['Conserva siempre los datos sin energía.', 'Es un periférico de salida.', 'Solo almacena copias de seguridad.'], 'Arquitectura básica del ordenador.'],
        ['¿Qué componente conecta los principales elementos internos?', 'La placa base.', ['El ratón.', 'La impresora.', 'El escáner.'], 'Arquitectura básica del ordenador.'],
        ['¿Qué hace la fuente de alimentación?', 'Convierte y suministra energía eléctrica a los componentes.', ['Almacena archivos de usuario.', 'Procesa gráficos.', 'Gestiona el correo.'], 'Arquitectura básica del ordenador.'],
        ['¿Qué diferencia general existe entre SSD y HDD?', 'El SSD no usa partes móviles y suele tener menor latencia.', ['El HDD siempre es más rápido.', 'El SSD es memoria volátil.', 'No existe diferencia.'], 'Conceptos de almacenamiento.'],
        ['¿Qué componente procesa especialmente gráficos?', 'La GPU.', ['La fuente de alimentación.', 'El teclado.', 'El ventilador únicamente.'], 'Arquitectura básica del ordenador.'],
        ['¿Qué componente permite conexión a una red?', 'La tarjeta o adaptador de red.', ['La memoria RAM.', 'El lector de DVD.', 'El altavoz.'], 'Arquitectura básica del ordenador.'],
        ['¿Qué función cumple el sistema operativo?', 'Gestiona hardware, archivos, procesos y servicios para las aplicaciones.', ['Sustituye físicamente la CPU.', 'Solo imprime.', 'Es un tipo de memoria USB.'], 'Conceptos de software de sistema.'],
        ['¿Qué son BIOS y UEFI?', 'Firmware que inicializa hardware y participa en el arranque.', ['Procesadores de texto.', 'Servicios de correo.', 'Formatos de imagen.'], 'Proceso de arranque del ordenador.'],
        ['¿Cuántos bits forman un byte?', 'Ocho.', ['Dos.', 'Diez.', 'Mil.'], 'Unidades básicas de información.'],
        ['¿Qué unidad es mayor?', 'Un gigabyte es mayor que un megabyte.', ['Un kilobyte es mayor que un terabyte.', 'Un bit es mayor que un byte.', 'Un megabyte es mayor que un gigabyte.'], 'Unidades de información.'],
        ['¿Qué ventaja aporta una copia de seguridad?', 'Permite recuperar datos ante pérdida, daño o incidente.', ['Elimina la necesidad de permisos.', 'Impide cualquier ataque.', 'Sustituye al sistema operativo.'], 'Buenas prácticas de protección de la información.'],
        ['¿Es almacenamiento y copia de seguridad el mismo concepto?', 'No; almacenar el original no garantiza disponer de una copia independiente.', ['Sí, siempre.', 'Solo en HDD.', 'Solo en equipos portátiles.'], 'Buenas prácticas de protección de la información.']
      ]
    },
    40: {
      sections: [
        ['Periféricos de entrada, salida y mixtos', ['Teclado, ratón y escáner son entrada; monitor, impresora y altavoces son salida. Pantalla táctil, impresora multifunción y memorias externas pueden realizar entrada y salida.', 'Los controladores permiten al sistema operativo comunicarse con los dispositivos.']],
        ['Impresoras y escáneres', ['Las impresoras láser utilizan tóner; las de inyección emplean tinta líquida. Un equipo multifunción combina normalmente impresión, escaneado y copia.', 'El escáner digitaliza originales; resolución, profundidad de color, ADF y OCR influyen en el resultado.']],
        ['Almacenamiento externo y óptico', ['HDD y SSD externos y memorias USB transportan datos, pero requieren control de acceso, cifrado cuando proceda y expulsión segura.', 'CD y DVD son soportes ópticos. Un lector solo lee; un grabador compatible puede escribir. La capacidad de DVD es normalmente mayor que la de CD.']]
      ],
      rows: [
        ['¿Cuál es un periférico de entrada?', 'El teclado.', ['La impresora.', 'El monitor.', 'Los altavoces.'], 'Conceptos generales de periféricos.'],
        ['¿Cuál es un periférico de salida?', 'La impresora.', ['El escáner.', 'El ratón.', 'El micrófono.'], 'Conceptos generales de periféricos.'],
        ['¿Qué dispositivo puede ser de entrada y salida?', 'Una pantalla táctil.', ['Un altavoz pasivo.', 'Un escáner simple.', 'Un teclado convencional.'], 'Conceptos generales de periféricos.'],
        ['¿Qué consumible utiliza normalmente una impresora láser?', 'Tóner.', ['Tinta líquida exclusivamente.', 'Papel térmico siempre.', 'Memoria RAM.'], 'Tecnologías de impresión.'],
        ['¿Qué consumible utiliza normalmente una impresora de inyección?', 'Cartuchos o depósitos de tinta.', ['Tóner en polvo exclusivamente.', 'Discos ópticos.', 'Cinta magnética.'], 'Tecnologías de impresión.'],
        ['¿Qué integra normalmente un equipo multifunción?', 'Impresora, escáner y copiadora.', ['CPU, RAM y GPU.', 'Teclado, ratón y monitor.', 'Router, switch y módem.'], 'Funciones de equipos multifunción.'],
        ['¿Qué hace un escáner?', 'Convierte un original físico en una imagen digital.', ['Imprime documentos.', 'Amplía la RAM.', 'Gestiona el correo.'], 'Conceptos de digitalización.'],
        ['¿Qué ventaja tiene un SSD externo frente a un HDD externo?', 'No tiene partes móviles y suele ofrecer menor latencia.', ['Es siempre de capacidad ilimitada.', 'No necesita conexión.', 'Es memoria volátil.'], 'Conceptos de almacenamiento externo.'],
        ['¿Para qué sirve la expulsión segura de una memoria USB?', 'Para completar escrituras pendientes y reducir riesgo de corrupción.', ['Para borrar automáticamente los archivos.', 'Para cifrarla siempre.', 'Para aumentar su capacidad.'], 'Buenas prácticas de dispositivos USB.'],
        ['¿Qué riesgo tiene usar una memoria USB no autorizada?', 'Puede introducir malware o provocar fuga de información.', ['Ninguno.', 'Solo reduce el brillo.', 'Desactiva la impresora.'], 'Buenas prácticas de seguridad informática.'],
        ['¿Qué diferencia hay entre lector y grabador óptico?', 'El lector solo lee; el grabador compatible también escribe.', ['No existe diferencia.', 'El lector imprime.', 'El grabador solo reproduce audio.'], 'Conceptos de unidades ópticas.'],
        ['¿Qué soporte suele tener mayor capacidad?', 'Un DVD frente a un CD.', ['Un CD frente a cualquier DVD.', 'Un disquete frente a un DVD.', 'Son siempre iguales.'], 'Conceptos de almacenamiento óptico.'],
        ['¿Qué interfaz es habitual en memorias USB y discos externos?', 'USB.', ['VGA únicamente.', 'PS/2 exclusivamente.', 'Conector de audio analógico.'], 'Interfaces de periféricos.'],
        ['¿Qué necesita Windows para comunicarse correctamente con un periférico?', 'Un controlador o driver compatible.', ['Una diapositiva maestra.', 'Una fórmula de Calc.', 'Una cuenta de correo.'], 'Conceptos de controladores de dispositivos.'],
        ['¿Dónde deben almacenarse datos administrativos transportados en un dispositivo externo?', 'Solo en dispositivos autorizados y protegidos conforme a la política de seguridad.', ['En cualquier dispositivo personal.', 'En medios encontrados.', 'En soportes sin cifrar ni control.'], 'Buenas prácticas de seguridad y protección de datos.']
      ]
    }
  };

  const buildQuestion = (number, row, index) => {
    const [text, correct, wrong, justification] = row;
    const options = [correct, ...wrong];
    const shift = (number + index) % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return { id: `dip-v64-t${number}-q${index + 1}`, text, options: rotated.map((option, optionIndex) => ({ letter: letters[optionIndex], text: option })), answer: letters[rotated.indexOf(correct)], justification, source: justification, difficulty: ['baja', 'media', 'alta'][index % 3], auditReal: true, auditTheme: number };
  };

  const isReal = question => {
    const text = norm(question?.text);
    if (!text || text.includes('cual es el enfoque correcto para preparar') || text.includes('como debe estudiarse')) return false;
    const options = (question.options || []).map(option => norm(option.text)).join(' ');
    return !options.includes('forma parte del enunciado oficial del tema') && Boolean(question.justification || question.source);
  };

  let addedQuestions = 0;
  Object.entries(specs).forEach(([key, spec]) => {
    const number = Number(key);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) return;
    theme.sections = spec.sections.map(([heading, paragraphs]) => ({ heading, paragraphs }));
    theme.tree = [`Tema ${number}`, ...spec.sections.map(([heading]) => `- ${heading}`)].join('\n');
    theme.reviewTable = [['Bloque', 'Qué dominar'], ...spec.sections.map(([heading]) => [heading, 'Operación, atajo, efecto, formato y práctica segura'])];
    const existing = ope.themeTests[theme.id] || [];
    const seen = new Set(existing.map(question => norm(question.text)));
    const additions = spec.rows.map((row, index) => buildQuestion(number, row, index)).filter(question => !seen.has(norm(question.text)));
    ope.themeTests[theme.id] = existing.concat(additions);
    addedQuestions += additions.length;
  });

  const auditThemes = ope.themes.map(item => {
    const all = ope.themeTests[item.id] || [];
    return { number: Number(item.number), id: item.id, total: all.length, content: all.filter(isReal).length };
  });
  ope.globalTestAudit = {
    ...(ope.globalTestAudit || {}),
    themes: auditThemes,
    targetThemes: auditThemes.filter(item => item.content >= 30).length,
    totalReal: auditThemes.reduce((total, item) => total + item.content, 0),
    targetPerTheme: 30,
    pendingTemplateThemes: auditThemes.filter(item => item.content < 30).map(item => item.number)
  };

  const shuffle = (items, seed) => {
    const out = items.slice();
    let state = seed >>> 0;
    for (let index = out.length - 1; index > 0; index -= 1) {
      state = (state * 1664525 + 1013904223) >>> 0;
      const swap = state % (index + 1);
      [out[index], out[swap]] = [out[swap], out[index]];
    }
    return out;
  };

  const buildSimulation = seed => {
    const pools = ope.themes.filter(item => Number(item.number) !== 22).map(item => ({ theme: item, questions: (ope.themeTests[item.id] || []).filter(isReal) })).filter(pool => pool.questions.length);
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 500) {
      pools.forEach((pool, poolIndex) => {
        if (selected.length >= 55) return;
        const question = pool.questions[(round + seed * 37 + poolIndex * 29) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
      });
      round += 1;
    }
    const ordered = shuffle(selected, seed * 6689);
    const questions = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v64-s${seed}-q${index + 1}` }));
    const reserveQuestions = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v64-s${seed}-r${index + 1}`, reserve: true }));
    return { id: `dip-v64-sim${seed}`, title: `Simulacro Diputación ${seed} · 50 + 5 reserva`, questions, reserveQuestions, audit: { main: questions.length, reserve: reserveQuestions.length, minutes: 60, realOnly: true, excludedPendingThemes: [22] } };
  };

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({ version: VERSION, date: '2026-07-10', changes: [`Añadidas ${addedQuestions} preguntas reales a los temas 32 a 40`, 'Los 39 temas auditables alcanzan el objetivo mínimo de 30 preguntas reales', 'Reforzados Windows 11, Edge, GroupWise, impresión, escaneado, LibreOffice y hardware', 'Regenerados los tres simulacros con exclusión del tema 22'] });

  window.OPOWEB_DIPUTACION_V64 = {
    version: `v${VERSION}`,
    reinforcedThemes: [32, 33, 34, 35, 36, 37, 38, 39, 40],
    addedQuestions,
    cumulativeSecondPassQuestions: 517 + addedQuestions,
    cumulativeManualQuestions: 1102 + addedQuestions,
    themesAtTargetInSecondPass: [...Array.from({ length: 21 }, (_, index) => index + 1), ...Array.from({ length: 18 }, (_, index) => index + 23)],
    targetPerTheme: 30
  };
})();
