(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-14';
  const source = {
    explorer: { label: 'Microsoft Support · File Explorer in Windows', reference: 'MICROSOFT-WINDOWS-FILE-EXPLORER', url: 'https://support.microsoft.com/en-US/Windows/Experience/FileExplorer/file-explorer-in-windows', reviewedAt: REVIEW_DATE },
    windows: { label: 'Microsoft Support · Windows help and learning', reference: 'MICROSOFT-WINDOWS-SUPPORT', url: 'https://support.microsoft.com/windows', reviewedAt: REVIEW_DATE },
    edge: { label: 'Microsoft Support · Microsoft Edge help and learning', reference: 'MICROSOFT-EDGE-SUPPORT', url: 'https://support.microsoft.com/microsoft-edge', reviewedAt: REVIEW_DATE },
    ieMode: { label: 'Microsoft Learn · Internet Explorer mode in Microsoft Edge', reference: 'MICROSOFT-EDGE-IE-MODE', url: 'https://learn.microsoft.com/en-us/deployedge/edge-ie-mode', reviewedAt: REVIEW_DATE },
    word: { label: 'Microsoft Support · Word help and learning', reference: 'MICROSOFT-WORD-SUPPORT', url: 'https://support.microsoft.com/word', reviewedAt: REVIEW_DATE },
    writer: { label: 'LibreOffice Help · Writer', reference: 'LIBREOFFICE-WRITER-HELP', url: 'https://help.libreoffice.org/latest/en-US/text/swriter/main0000.html', reviewedAt: REVIEW_DATE },
    excel: { label: 'Microsoft Support · Excel help and learning', reference: 'MICROSOFT-EXCEL-SUPPORT', url: 'https://support.microsoft.com/excel', reviewedAt: REVIEW_DATE },
    calc: { label: 'LibreOffice Help · Calc', reference: 'LIBREOFFICE-CALC-HELP', url: 'https://help.libreoffice.org/latest/en-US/text/scalc/main0000.html', reviewedAt: REVIEW_DATE },
    intel: { label: 'Intel · Processor and computer hardware resources', reference: 'INTEL-HARDWARE-RESOURCES', url: 'https://www.intel.com/content/www/us/en/products/docs/processors/what-is-a-processor.html', reviewedAt: REVIEW_DATE },
    usb: { label: 'USB Implementers Forum · USB specifications and resources', reference: 'USB-IF-RESOURCES', url: 'https://www.usb.org/documents', reviewedAt: REVIEW_DATE }
  };

  const THEORY = {
    15: {
      sources: [source.explorer, source.windows],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'Windows organiza la información mediante unidades, carpetas y archivos. El Explorador permite crear, seleccionar, copiar, mover, renombrar y borrar elementos; acceder a discos locales, unidades extraíbles y recursos de red; buscar; consultar propiedades; imprimir; y digitalizar. En un examen práctico importa conocer tanto el efecto de cada operación como los atajos y riesgos.',
          'Copiar crea otro ejemplar y mantiene el original; mover cambia la ubicación; borrar envía normalmente a la Papelera si la unidad lo admite; restaurar recupera; y eliminar de forma permanente evita la recuperación ordinaria. La extensión identifica el formato y condiciona la aplicación que abre el archivo. Ocultar extensiones puede inducir errores y riesgos de seguridad.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'El Explorador de archivos es el gestor integrado de Windows. La interfaz varía entre versiones, pero conserva panel de navegación, barra de direcciones, búsqueda, vista de contenido, menús y cuadro de propiedades. El atajo Windows+E abre el Explorador; Ctrl+C copia, Ctrl+X corta, Ctrl+V pega, Ctrl+Z deshace, F2 cambia nombre, Supr elimina y Mayús+Supr solicita eliminación permanente.',
          'Una ruta identifica ubicación. Puede ser local, como C:\\Usuarios\\Nombre\\Documentos, o de red mediante formato UNC, como \\\\servidor\\recurso\\carpeta. Las letras de unidad representan volúmenes asignados; una unidad de red puede mapearse con letra, pero sigue dependiendo de conectividad y permisos.',
          'Los permisos determinan leer, escribir, modificar, borrar o controlar. Ser capaz de ver una carpeta no implica poder modificarla. En redes y carpetas compartidas actúan permisos de recurso y del sistema de archivos, aplicándose el resultado efectivo. No debe alterarse propiedad o seguridad sin autorización.',
          'Imprimir genera una cola de trabajos hacia impresora local, compartida o virtual. Digitalizar convierte un documento físico en archivo mediante escáner o equipo multifunción. Ambos procesos dependen de controlador, conexión, dispositivo seleccionado, formato, resolución y permisos.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Un archivo contiene información y se identifica por nombre y extensión, por ejemplo acta.docx, tabla.ods o informe.pdf. Una carpeta organiza archivos y subcarpetas. Dos elementos no pueden tener el mismo nombre dentro de la misma carpeta, aunque sí en ubicaciones distintas. Windows no distingue normalmente mayúsculas de minúsculas en nombres, pero sí conserva la forma escrita.',
          'Para crear una carpeta se usa Nuevo > Carpeta, el botón correspondiente o Ctrl+Mayús+N. Para crear un archivo puede abrirse la aplicación y guardar o usar el menú Nuevo cuando exista tipo registrado. Conviene elegir nombre descriptivo, fecha normalizada, versión y evitar caracteres prohibidos. Las rutas excesivamente largas o nombres ambiguos dificultan intercambio.',
          'La selección puede ser individual, múltiple contigua con Mayús o no contigua con Ctrl. Ctrl+A selecciona todo. Antes de operar debe comprobarse la ruta de origen y destino y el número de elementos. Arrastrar puede copiar o mover según unidad y teclas modificadoras; cortar y pegar resulta más previsible. Entre carpetas de la misma unidad, arrastrar suele mover; entre unidades, copiar, aunque puede forzarse.',
          'Copiar conserva el original. Si existe un archivo con igual nombre, Windows ofrece reemplazar, omitir o comparar. Reemplazar puede perder la versión anterior; se recomienda comprobar fecha, tamaño y contenido. Copiar un acceso directo no copia el archivo objetivo. Mover dentro de la misma unidad suele ser rápido porque cambia referencias; entre unidades implica copiar y eliminar.',
          'Renombrar cambia el nombre, no el contenido. Modificar o eliminar la extensión puede impedir apertura. La asociación de archivos vincula extensión y aplicación predeterminada; puede cambiarse con Abrir con. El icono no garantiza contenido real: debe revisarse extensión y procedencia.',
          'Borrar con Supr suele enviar a Papelera en unidades locales. La Papelera conserva ubicación original y permite restaurar o eliminar definitivamente. Un recurso de red, unidad extraíble, archivo demasiado grande o configuración puede omitirla. Mayús+Supr no es un borrado seguro criptográfico; solo evita la Papelera y los datos podrían recuperarse hasta sobrescribirse.',
          'Las propiedades muestran tipo, ubicación, tamaño, fechas, atributos y seguridad. Tamaño es cantidad de datos y tamaño en disco depende de asignación. Solo lectura limita modificaciones en ciertos contextos; oculto controla visualización; no sustituye permisos ni cifrado. Las fechas pueden cambiar al copiar, descargar o modificar.',
          'La búsqueda usa nombre, contenido indexado, extensión, fecha y filtros. La barra de búsqueda opera sobre ubicación actual. Ordenar cambia la presentación; agrupar organiza visualmente; filtrar limita resultados. Ninguna de estas acciones mueve archivos. Conviene mostrar extensiones y elementos ocultos cuando se diagnostican problemas.',
          'Las unidades locales incluyen particiones de discos internos y externos. La unidad del sistema suele ser C:, pero no es obligatorio. Un volumen tiene sistema de archivos, capacidad total, usada y libre. NTFS admite permisos, cifrado, compresión y archivos grandes; FAT32 y exFAT ofrecen compatibilidad distinta. Formatear crea sistema de archivos y borra la estructura anterior, por lo que exige copia y autorización.',
          'Las unidades extraíbles deben expulsarse de forma segura cuando haya escrituras pendientes. Desconectarlas durante copia puede corromper datos. Las memorias USB no son un medio de archivo fiable único: pueden perderse, fallar o contener malware. En administración deben seguirse políticas de cifrado, autorización y protección de datos.',
          'Los recursos de red se acceden mediante ruta UNC, acceso directo o unidad mapeada. Requieren red, resolución del servidor, autenticación y permisos. Guardar en unidad de red facilita copia centralizada y trabajo compartido, pero puede haber bloqueos, versiones o pérdida temporal de conexión. Los archivos sin conexión o sincronizados deben comprobar estado.',
          'Una impresora puede ser local por USB, de red por IP, compartida por servidor o virtual, como PDF. Antes de imprimir se elige dispositivo, páginas, copias, orientación, tamaño, color, doble cara, escala y bandeja. La vista previa evita errores. La cola permite pausar, reanudar o cancelar; atasco, falta de papel, conexión, controlador o cola bloqueada son fallos frecuentes.',
          'Imprimir a PDF crea un archivo, no una copia en papel. Debe elegirse ubicación y nombre y comprobar que se generó. Los documentos con datos personales no deben quedar en bandejas ni enviarse a impresoras equivocadas; la impresión segura puede exigir liberación mediante código o tarjeta.',
          'Digitalizar exige seleccionar escáner, origen plano o alimentador, color, resolución, tamaño y formato. PDF sirve para documentos multipágina; JPEG para imágenes; PNG para gráficos; TIFF para archivo de alta calidad. OCR reconoce texto, pero puede cometer errores y no sustituye revisión. Una digitalización no es automáticamente copia auténtica administrativa.',
          'La resolución se mide en puntos por pulgada. Más resolución aumenta detalle y tamaño; para texto suele bastar una resolución moderada, mientras fotografía requiere más. Deben revisarse orientación, páginas, legibilidad, ausencia de recortes y nombre. Después se incorpora al expediente según política y se protege el original.',
          'Las copias de seguridad protegen frente a borrado, fallo, ransomware o error. Sincronización no equivale siempre a copia: puede propagar el borrado. Una buena práctica mantiene versiones, ubicación separada y pruebas de restauración. Antes de borrar definitivamente un expediente debe aplicarse calendario de conservación y autorización, no una decisión individual.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Archivo contiene información; carpeta organiza. Copiar duplica; mover cambia ubicación; renombrar no cambia contenido; Supr suele usar Papelera; Mayús+Supr la evita. Ruta local usa letra; red puede usar UNC. Permisos controlan operaciones. Imprimir usa cola y controlador. Digitalizar crea imagen o PDF; OCR reconoce texto, pero no garantiza exactitud ni autenticidad.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Arrastrar no siempre produce el mismo efecto entre unidades. Acceso directo no es archivo original. Oculto no equivale a protegido. Unidad mapeada no es disco local. Mayús+Supr no garantiza destrucción irrecuperable. Digitalizar no crea por sí sola copia auténtica. Imprimir a PDF genera archivo. Sincronizar no sustituye una copia versionada.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué diferencias existen entre copiar, mover, crear acceso directo y borrar? ¿Cómo se accede y trabaja de forma segura con unidades locales y de red? ¿Qué parámetros deben revisarse al imprimir y digitalizar documentos administrativos?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En una tarea práctica identifica origen, destino y efecto antes de pulsar. Comprueba ruta, extensión, permisos y copia de seguridad. En preguntas sobre dispositivos, separa conexión, controlador, cola, formato y calidad. Los distractores suelen confundir vista con ubicación, sincronización con copia o escaneo con autenticación.'
        ]}
      ],
      tree: 'WINDOWS I · ARCHIVOS Y DISPOSITIVOS\n├─ Explorador\n│  ├─ Crear y seleccionar\n│  ├─ Copiar, cortar y mover\n│  ├─ Renombrar y borrar\n│  └─ Buscar, ordenar y propiedades\n├─ Almacenamiento\n│  ├─ Unidades locales\n│  ├─ USB y discos externos\n│  └─ Unidades y rutas de red\n├─ Seguridad\n│  ├─ Permisos y extensiones\n│  ├─ Papelera y restauración\n│  └─ Copias de seguridad\n├─ Impresión\n│  └─ Dispositivo, opciones y cola\n└─ Digitalización\n   ├─ Resolución y formato\n   ├─ OCR\n   └─ Control de calidad',
      reviewTable: [['Operación','Efecto','Atajo habitual'],['Copiar','Duplica y conserva origen','Ctrl+C / Ctrl+V'],['Mover','Cambia ubicación','Ctrl+X / Ctrl+V'],['Renombrar','Cambia nombre','F2'],['Borrar','Papelera si está disponible','Supr'],['Eliminar directo','Evita Papelera','Mayús+Supr'],['Explorador','Gestiona archivos y unidades','Windows+E'],['Red','Ruta UNC o unidad mapeada','\\\\servidor\\recurso'],['Digitalizar','Crea archivo; no autentica por sí sola','Escáner/OCR']]
    },
    16: {
      sources: [source.edge, source.ieMode],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'Un navegador interpreta recursos web y permite acceder mediante direcciones, enlaces, pestañas, historial, favoritos, descargas, formularios y herramientas de seguridad. El programa menciona Internet Explorer y Microsoft Edge. Internet Explorer debe conocerse como navegador heredado y por su motor y zonas; en entornos actuales la compatibilidad con aplicaciones antiguas se canaliza principalmente mediante modo IE de Edge administrado por la organización.',
          'Edge usa un motor moderno basado en Chromium para sitios actuales y puede usar el motor Trident de IE11 en modo IE para sitios expresamente configurados. Navegar con seguridad requiere comprobar dirección, conexión HTTPS, certificado, descargas, permisos, autenticación y tratamiento de datos; el candado no garantiza que el contenido sea legítimo, solo protege y autentica la conexión dentro de sus límites.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'URL es la dirección de un recurso e incluye esquema, dominio, puerto opcional, ruta, consulta y fragmento. HTTPS cifra la comunicación mediante TLS y autentica el servidor con certificado; HTTP no ofrece esa protección. DNS traduce nombres a direcciones. El navegador almacena caché, cookies, historial, credenciales y permisos según configuración.',
          'Internet Explorer utilizaba zonas de seguridad —Internet, intranet local, sitios de confianza y restringidos—, ActiveX, modos de documento y configuración empresarial. Estas tecnologías heredadas implican mayor riesgo y solo deben mantenerse cuando una aplicación lo exige y bajo políticas.',
          'El modo IE de Edge integra dos motores: Chromium para sitios modernos y MSHTML/Trident de IE11 para sitios heredados incluidos en una lista o política. No convierte todo Edge en Internet Explorer ni debe activarse indiscriminadamente. La organización define qué sitios lo usan y durante cuánto tiempo.',
          'La navegación administrativa debe respetar políticas de seguridad, protección de datos, uso aceptable y archivo. El modo privado reduce rastros locales de una sesión, pero no oculta actividad a red, organización, proveedor o sitio y no sustituye protección.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La barra de direcciones permite escribir URL o búsquedas. El dominio debe leerse de derecha a izquierda antes del primer separador: en sede.ejemplo.es, el dominio registrable es ejemplo.es. Subdominios engañosos pueden imitar organismos. Deben evitarse enlaces acortados o dominios con errores, especialmente en correos que piden credenciales o pagos.',
          'Atrás y adelante recorren historial de pestaña; actualizar vuelve a solicitar el recurso; detener interrumpe carga; inicio abre página configurada. Una pestaña contiene una sesión de navegación y puede duplicarse, fijarse, silenciarse o cerrarse. Ctrl+L enfoca dirección, Ctrl+T abre pestaña, Ctrl+W la cierra, Ctrl+Mayús+T restaura la última cerrada y Ctrl+F busca texto en página.',
          'Los favoritos o marcadores guardan URL y nombre y pueden organizarse en carpetas y sincronizarse. Un favorito no guarda el contenido; si la página cambia o desaparece, el enlace cambia o falla. Las colecciones u otras funciones agrupan recursos. Para preservar prueba o expediente se debe descargar, imprimir a PDF o capturar conforme a procedimiento, no confiar solo en favorito.',
          'El historial registra páginas visitadas y puede buscarse o borrarse. La caché guarda recursos para acelerar; actualizar forzado solicita versiones nuevas. Las cookies almacenan identificadores, preferencias y sesión. Borrarlas puede cerrar sesiones y restablecer preferencias; aceptar todas no es requisito técnico general. Los datos de sitio pueden administrarse por dominio.',
          'Las descargas se guardan normalmente en carpeta Descargas o ubicación elegida. Antes de abrir se comprueba fuente, nombre, extensión, firma, antivirus y necesidad. Un archivo .pdf.exe puede ocultar su extensión real si Windows no muestra extensiones. Los documentos ofimáticos pueden contener macros; no deben habilitarse por petición de un mensaje no verificado.',
          'El navegador puede bloquear ventanas emergentes, descargas peligrosas, rastreadores y sitios maliciosos. Las excepciones deben limitarse al sitio necesario. Permisos de cámara, micrófono, ubicación, notificaciones, portapapeles y descargas se conceden por sitio y pueden revocarse. Una web administrativa no necesita todos los permisos por defecto.',
          'HTTPS muestra conexión cifrada y certificado válido para el dominio. Una advertencia de certificado puede indicar caducidad, nombre incorrecto, emisor no confiable o interceptación; no debe ignorarse sin soporte técnico. El candado no acredita que la entidad sea honesta ni que el contenido sea seguro; sitios fraudulentos también pueden usar HTTPS.',
          'La autenticación puede usar usuario y contraseña, certificado, clave de seguridad o segundo factor. Los gestores de contraseñas almacenan credenciales cifradas y ayudan a usar claves únicas. En equipos compartidos no deben guardarse credenciales personales ni dejar sesiones abiertas. Cerrar ventana no siempre cierra sesión: debe usarse Salir.',
          'El modo InPrivate o privado no conserva historial, cookies persistentes ni datos de formularios una vez cerradas todas las ventanas privadas, pero conserva descargas y favoritos. La organización, red y sitios pueden registrar actividad. No debe utilizarse para eludir controles ni como sustituto de cierre de sesión.',
          'Edge permite perfiles separados para cuentas y datos. En un entorno municipal conviene distinguir perfil corporativo y personal. La sincronización puede estar administrada y enviar favoritos, contraseñas o historial a cuenta autorizada. No se deben sincronizar datos institucionales con cuentas personales.',
          'Internet Explorer heredado usaba menús, favoritos, historial, opciones de Internet, compatibilidad y zonas. ActiveX permitía componentes con acceso amplio al sistema y debe restringirse. Las aplicaciones antiguas pueden exigir configuración específica de intranet, autenticación integrada o vista de compatibilidad. En la actualidad, la política corporativa debe determinar el modo IE en Edge.',
          'El modo IE carga solo sitios configurados con el motor heredado; muestra indicador y puede conservar compatibilidad con modos de documento, ActiveX y zonas. Los demás sitios se cargan con Chromium. La lista empresarial evita que usuarios decidan de forma arbitraria y facilita retirar dependencias. Si una sede falla, no se debe activar compatibilidad global sin autorización.',
          'Los formularios web pueden guardar borradores o perder datos al expirar sesión. Antes de enviar se revisan campos, adjuntos y destinatario y se guarda justificante con número, fecha y huella. El autocompletado puede introducir datos de otra persona o expediente. Los campos obligatorios, formatos y límites de tamaño deben verificarse.',
          'La impresión web puede cambiar diseño. La vista previa permite escala, orientación, márgenes, encabezados y fondo. Guardar como PDF conserva una representación, no necesariamente todos los metadatos ni validez del original. Para notificaciones y registros se utiliza justificante oficial de la sede.',
          'Los errores se diagnostican distinguiendo conexión general, DNS, servidor, certificado, caché, extensión, perfil, proxy y autenticación. Probar otro sitio determina si es problema general; actualizar, cerrar sesión o limpiar datos del sitio puede resolver, pero borrar toda la información sin copia puede causar pérdidas. Las incidencias se documentan sin enviar contraseñas ni datos sensibles.',
          'La accesibilidad incluye zoom, lectura, contraste, teclado y lector de pantalla. Ctrl+Más y Ctrl+Menos ajustan zoom; F11 alterna pantalla completa, que no elimina barras de seguridad permanentemente. Un navegador actualizado corrige vulnerabilidades; las extensiones deben proceder de tiendas autorizadas y tener permisos mínimos.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'URL identifica recurso; HTTPS cifra y autentica conexión. Pestañas separan navegación; favoritos guardan enlaces; historial registra; caché acelera; cookies mantienen sesión. Descargas se verifican antes de abrir. Privado reduce rastros locales, no anonimiza. Edge usa Chromium y modo IE solo para sitios heredados configurados con motor Trident. Las advertencias de certificado no se ignoran.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Favorito no guarda contenido. HTTPS no garantiza honestidad. InPrivate no oculta actividad a organización ni borra descargas. Borrar cookies cierra sesiones. El modo IE no se usa para todas las páginas. ActiveX es tecnología heredada. Cerrar pestaña no siempre cierra sesión. El subdominio no cambia quién controla el dominio registrable.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué información contiene una URL y qué garantiza realmente HTTPS? ¿Qué diferencias existen entre caché, cookies, historial, favoritos y descargas? ¿Cómo funciona el modo Internet Explorer dentro de Edge y cuándo debe utilizarse?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En tareas web verifica dominio, protocolo, identidad y resultado. En preguntas de privacidad distingue datos locales, red y servidor. Para compatibilidad, responde desde la política: Edge moderno como regla, modo IE solo para lista heredada. Memoriza atajos y operaciones, pero prioriza el efecto real y la seguridad.'
        ]}
      ],
      tree: 'NAVEGACIÓN WEB\n├─ Dirección y transporte\n│  ├─ URL, dominio y DNS\n│  ├─ HTTP / HTTPS\n│  └─ Certificado del sitio\n├─ Interfaz\n│  ├─ Pestañas y navegación\n│  ├─ Favoritos e historial\n│  └─ Búsqueda y descargas\n├─ Datos del navegador\n│  ├─ Caché y cookies\n│  ├─ Contraseñas y perfiles\n│  └─ Modo privado\n├─ Seguridad\n│  ├─ Permisos y ventanas\n│  ├─ Malware y extensiones\n│  └─ Autenticación\n└─ Compatibilidad\n   ├─ Internet Explorer heredado\n   └─ Modo IE de Edge para sitios configurados',
      reviewTable: [['Concepto','Función','Precaución'],['URL','Localiza recurso','Revisar dominio real'],['HTTPS','Cifra y autentica servidor','No garantiza contenido honesto'],['Cookies','Sesión y preferencias','Datos por sitio'],['Caché','Acelera carga','Puede mostrar versión antigua'],['Privado','Reduce rastros locales','No anonimiza'],['Descargas','Guarda archivos','Verificar extensión y origen'],['Modo IE','Compatibilidad heredada en Edge','Solo sitios configurados'],['Favorito','Guarda enlace','No conserva contenido']]
    },
    17: {
      sources: [source.word, source.writer],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'Word y LibreOffice Writer son procesadores de texto para crear, editar, dar formato, revisar, combinar e imprimir documentos. Comparten conceptos: documento, párrafo, caracteres, estilos, secciones, encabezados, tablas, imágenes, listas, referencias, campos, revisión y exportación. Cambian nombres y ubicación de comandos, pero la lógica es equivalente.',
          'La clave profesional es separar contenido de formato. Los estilos controlan de manera coherente títulos y párrafos; los saltos de página o sección organizan; las tablas estructuran datos; encabezados y pies repiten información; y combinación de correspondencia genera documentos personalizados desde una fuente de datos. Espacios y saltos manuales no deben sustituir herramientas de maquetación.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'Word utiliza normalmente DOCX, basado en Office Open XML; Writer utiliza ODT, estándar OpenDocument. Ambos abren y guardan otros formatos, pero la conversión puede alterar estilos, campos, fuentes, macros y diseño. PDF es formato de distribución, no el mejor para seguir editando.',
          'La cinta de Word y menús/barras de Writer agrupan Archivo, Inicio o Formato, Insertar, Diseño, Referencias, Correspondencia, Revisar y Vista. Las versiones cambian la interfaz; el examen debe centrarse en funciones y atajos estables.',
          'Los caracteres tienen fuente, tamaño, negrita, cursiva, subrayado, color y efectos. Los párrafos tienen alineación, sangría, espaciado, interlineado, tabulaciones, bordes, viñetas y numeración. Aplicar formato a un párrafo completo no es igual que seleccionar texto.',
          'Los estilos son conjuntos nombrados de formato. Permiten actualizar todo el documento, crear índices y mantener accesibilidad. El formato directo prevalece visualmente y puede generar inconsistencias; se elimina con herramientas específicas sin borrar texto.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Crear un documento parte de uno vacío o plantilla. Guardar asigna nombre, ubicación y formato; Guardar como crea una nueva copia o cambia formato. El guardado automático depende de configuración y nube. Antes de cerrar se comprueba estado; recuperar documentos no sustituye copias. Las propiedades pueden incluir autor, título y datos personales que deben revisarse antes de compartir.',
          'La edición básica incluye insertar, seleccionar, cortar, copiar, pegar, deshacer, rehacer, buscar y reemplazar. Pegar puede conservar formato de origen, combinarlo o mantener solo texto. Buscar admite palabras y opciones; reemplazar masivo debe previsualizarse. Los caracteres no imprimibles muestran espacios, párrafos, tabulaciones y saltos y ayudan a corregir estructura.',
          'La fuente define familia y apariencia; no todas están instaladas en otros equipos. Incrustar fuentes o exportar PDF mejora fidelidad, sujeto a licencia. El tamaño se expresa en puntos. Negrita y cursiva aportan énfasis semántico moderado; subrayado puede confundirse con enlace. El color debe mantener contraste.',
          'El párrafo termina con marca de párrafo y conserva su formato. Alineación puede ser izquierda, centro, derecha o justificada. Sangría izquierda y derecha desplazan bloque; primera línea afecta inicio; francesa deja primera línea y sangra las restantes. Espaciado anterior/posterior es preferible a párrafos vacíos. Interlineado controla distancia dentro del párrafo.',
          'Las tabulaciones alinean texto en posiciones izquierda, derecha, centrada, decimal o con barra y pueden usar relleno. No deben simularse con espacios porque varían con fuente. Para datos complejos se usa tabla. Las reglas y marcas permiten ajustar sangrías y tabulaciones.',
          'Las listas con viñetas sirven para elementos sin orden; numeradas para secuencia; multinivel para jerarquía. La numeración automática debe vincularse a estilos para ser estable. Reiniciar o continuar numeración se hace con comandos, no escribiendo números manuales.',
          'Los estilos de párrafo, carácter, lista, tabla y página o sección permiten diseño coherente. Los títulos con niveles generan panel de navegación e índice automático. Modificar el estilo cambia todas sus instancias. Una plantilla contiene estilos, configuración, textos y elementos reutilizables y puede proteger la identidad corporativa.',
          'La página define tamaño, orientación, márgenes, columnas y fondo. Un salto de página inicia página sin insertar líneas; un salto de sección permite cambiar orientación, columnas, encabezados o numeración desde ese punto. En Writer el concepto de estilo de página cubre muchas funciones; en Word se utilizan secciones.',
          'Encabezados y pies se repiten y pueden contener logo, título, fecha, número y campos. Pueden diferenciar primera página, pares e impares y secciones. La numeración se inserta como campo y puede reiniciarse mediante sección o estilo. Escribir el número manualmente no funciona en documentos extensos.',
          'Las tablas se componen de filas, columnas y celdas. Se insertan, ajustan, combinan, dividen, ordenan y aplican estilos. La fila de encabezado puede repetirse. Deben evitarse para maquetar toda la página si perjudican accesibilidad. El texto se alinea vertical y horizontalmente y puede convertirse entre tabla y texto delimitado.',
          'Las imágenes se insertan desde archivo, portapapeles o captura. El ajuste puede ser en línea, cuadrado, estrecho, detrás o delante según programa. En línea se comporta como carácter y es más estable. Se deben fijar tamaño, proporción, posición y texto alternativo; comprimir reduce peso. Recortar oculta partes sin necesariamente eliminarlas del archivo.',
          'Ortografía detecta palabras; gramática y editor sugieren estilo. No garantizan corrección jurídica. Los diccionarios dependen del idioma asignado al texto. Autocorrección sustituye patrones; se revisan cambios. Sinónimos ayudan, pero no deben cambiar términos legales precisos.',
          'Control de cambios registra inserciones, eliminaciones y formato por autor. Aceptar o rechazar incorpora o descarta; ocultar marcas no las elimina. Los comentarios permiten observaciones sin modificar contenido. Antes de publicar se inspeccionan comentarios, revisiones, texto oculto, propiedades y versiones.',
          'La combinación de correspondencia une documento principal con fuente de datos, como hoja o base. Se insertan campos, filtran registros, previsualizan y generan cartas, etiquetas, sobres o correos. La fuente debe tener encabezados y datos limpios. No se debe enviar sin comprobar destinatarios, condiciones y protección de datos.',
          'Los campos insertan información dinámica: fecha, número de página, autor, referencias, resultados o datos combinados. Deben actualizarse antes de imprimir. El índice se genera a partir de estilos de título; las notas al pie se numeran automáticamente; las referencias cruzadas apuntan a elementos y se actualizan.',
          'La impresión usa vista previa, rango, copias, caras, orientación, páginas por hoja y escala. Exportar PDF permite elegir páginas, etiquetas, marcadores, accesibilidad, compresión y seguridad. Proteger con contraseña puede limitar apertura o edición, pero no sustituye gestión de permisos y archivo.',
          'La compatibilidad Word–Writer se mejora usando estilos simples, fuentes comunes, tablas estables y formatos estándar. Al convertir se revisan saltos, índices, campos, encabezados, imágenes y numeración. Conservar siempre un original en formato nativo y una copia PDF final evita pérdida.',
          'Los atajos comunes incluyen Ctrl+N nuevo, Ctrl+O abrir, Ctrl+S guardar, Ctrl+P imprimir, Ctrl+C/X/V, Ctrl+Z/Y, Ctrl+A seleccionar, Ctrl+F buscar, Ctrl+H reemplazar, Ctrl+B negrita en muchas configuraciones, Ctrl+I cursiva y Ctrl+U subrayado. La localización puede alterar algún atajo; la función prevalece sobre memorizar una letra aislada.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Formato de carácter afecta texto; párrafo afecta unidad hasta marca. Estilos garantizan coherencia e índices. Salto de página inicia página; sección permite configuración distinta. Encabezados y números son campos. Tablas estructuran datos. Control de cambios debe aceptarse o rechazarse, no solo ocultarse. Combinar correspondencia une plantilla y fuente. DOCX y ODT son editables; PDF es distribución.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'Enter repetido no sustituye salto. Espacios no sustituyen tabulación. Ocultar cambios no los elimina. Recortar imagen puede conservar datos ocultos. Guardar como puede crear copia y cambiar formato. Estilo y formato directo no son lo mismo. Índice automático depende de títulos. PDF no garantiza que se hayan eliminado metadatos.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué diferencias existen entre formato de carácter, párrafo, estilo, página y sección? ¿Cómo se crean índices, encabezados, tablas y numeración de forma estable? ¿Cuál es el proceso correcto de revisión, combinación de correspondencia y exportación final?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'En una tarea práctica usa primero estructura y estilos, después contenido repetitivo y finalmente formato directo. Activa marcas no imprimibles para diagnosticar. Antes de entregar actualiza campos, revisa cambios, metadatos, saltos, impresión y PDF. Las preguntas suelen oponer soluciones manuales frágiles a funciones específicas.'
        ]}
      ],
      tree: 'WORD Y LIBREOFFICE WRITER\n├─ Documento y formatos\n│  ├─ DOCX / ODT\n│  └─ PDF para distribución\n├─ Edición\n│  ├─ Selección, portapapeles y búsqueda\n│  └─ Deshacer y recuperación\n├─ Formato\n│  ├─ Carácter\n│  ├─ Párrafo, sangría y tabulaciones\n│  ├─ Listas\n│  └─ Estilos y plantillas\n├─ Página y secciones\n│  ├─ Márgenes y orientación\n│  ├─ Encabezados y pies\n│  └─ Numeración y campos\n├─ Objetos\n│  ├─ Tablas\n│  └─ Imágenes\n├─ Revisión y referencias\n└─ Correspondencia, impresión y exportación',
      reviewTable: [['Elemento','Uso correcto','Error frecuente'],['Estilo','Formato coherente y reutilizable','Formato manual repetido'],['Párrafo','Alineación, sangría y espaciado','Usar espacios o Enter'],['Sección','Cambiar orientación o encabezado','Confundir con salto de página'],['Tabla','Estructurar datos','Maquetar todo sin accesibilidad'],['Control de cambios','Aceptar o rechazar','Solo ocultar'],['Correspondencia','Plantilla + fuente de datos','No previsualizar destinatarios'],['Índice','Se genera desde estilos de título','Escribirlo manualmente'],['PDF','Distribución final','Usarlo como único original editable']]
    },
    18: {
      sources: [source.excel, source.calc],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'Excel y LibreOffice Calc organizan datos en libros, hojas, filas, columnas y celdas. Permiten calcular mediante fórmulas y funciones, copiar con referencias relativas o absolutas, ordenar, filtrar, validar, resumir, representar en gráficos e imprimir. El examen suele medir comprensión de referencias y resultados, no solo ubicación de botones.',
          'Una fórmula comienza con signo igual y combina operadores, referencias, constantes y funciones. Al copiar, las referencias relativas cambian; las absolutas permanecen; las mixtas fijan fila o columna. Los datos deben tener una fila de encabezados, tipos coherentes y ausencia de filas vacías para ordenar, filtrar y crear tablas o tablas dinámicas correctamente.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'Excel guarda normalmente XLSX y Calc ODS. Ambos importan CSV, que es texto delimitado sin fórmulas, formatos, varias hojas ni objetos. Al abrir CSV deben elegirse codificación, separador y tipo de columna; al guardar se pierde lo no representable.',
          'Una celda se identifica por columna y fila, como B3. Un rango usa dos puntos, B3:D10. Una hoja puede referenciarse con nombre y signo de exclamación en Excel o sintaxis equivalente en Calc. Nombres con espacios requieren delimitación. Los separadores de argumentos y decimales dependen de configuración regional.',
          'Tipos básicos son texto, número, fecha/hora, lógico y error. Las fechas suelen almacenarse como números de serie y el formato solo cambia presentación. Un número guardado como texto no se suma de la misma forma. El símbolo de porcentaje muestra una fracción multiplicada por cien.',
          'El orden de operadores sigue paréntesis, potencias, multiplicación/división, suma/resta y comparaciones. Las funciones reciben argumentos y devuelven resultado. Un error debe diagnosticarse: división por cero, nombre no reconocido, referencia inválida, valor incorrecto o no disponible.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'Un libro contiene hojas que pueden insertarse, borrar, renombrar, mover, copiar, ocultar y proteger. Borrar una hoja puede romper fórmulas; ocultar no protege confidencialidad. Las pestañas organizan y los colores solo ayudan visualmente. Las celdas se seleccionan individualmente, por rango, fila, columna o zonas no contiguas con Ctrl.',
          'La entrada se confirma con Intro, Tab o clic. F2 o doble clic edita. Autorrelleno copia patrones, series y fórmulas. Pegar especial permite solo valores, fórmulas, formatos, transponer o realizar operaciones. Pegar valores elimina fórmulas y conserva resultados, útil para congelar datos pero irreversible sin copia.',
          'El formato incluye número, moneda, contabilidad, porcentaje, fecha, hora, texto y personalizado. No cambia valor subyacente. Redondear visualmente no modifica precisión utilizada por fórmulas; para cambiar cálculo se usa REDONDEAR u otra función. Combinar celdas dificulta ordenar y filtrar y debe reservarse a títulos.',
          'Las referencias relativas, A1, se ajustan al copiar; absolutas, $A$1, fijan fila y columna; mixtas, $A1 o A$1, fijan una. En Calc también se usa dólar. Una fórmula =B2*$F$1 copia la cantidad relativa y mantiene el tipo. F4 alterna tipos en Excel durante edición en muchas versiones.',
          'Los operadores aritméticos son +, -, *, /, ^ y porcentaje; comparaciones =, <>, <, >, <=, >= devuelven verdadero o falso; el operador de concatenación une texto. Los paréntesis controlan prioridad. Las referencias a rangos alimentan funciones y no deben incluir totales si producirían referencia circular.',
          'SUMA agrega; PROMEDIO calcula media; MIN y MAX extremos; CONTAR cuenta números; CONTARA celdas no vacías; REDONDEAR controla decimales; ENTERO y TRUNCAR tienen efectos diferentes. Los nombres pueden variar en idioma, pero el concepto y argumentos se mantienen.',
          'SI evalúa una condición y devuelve un valor u otro. Y exige todas las condiciones; O, al menos una; NO invierte. SI.ERROR sustituye determinados errores por resultado alternativo, pero ocultarlo indiscriminadamente puede esconder datos incorrectos. Las condiciones de texto se escriben entre comillas.',
          'CONTAR.SI y SUMAR.SI aplican un criterio; versiones plurales admiten varios rangos y criterios. Los rangos deben tener tamaños compatibles. Los comodines asterisco y interrogación operan en textos, con escape cuando se buscan literalmente. Los criterios con operadores se construyen como texto o concatenación.',
          'BUSCARV busca en primera columna y devuelve otra; con coincidencia aproximada exige orden y puede dar resultados inesperados. BUSCARX en versiones modernas permite coincidencia exacta por defecto y direcciones flexibles, pero la compatibilidad debe comprobarse. ÍNDICE y COINCIDIR separan localización y retorno. Calc dispone de funciones equivalentes según versión.',
          'Las funciones de fecha HOY y AHORA son volátiles. FECHA construye; AÑO, MES y DÍA extraen; DIAS o resta calcula intervalos; DIAS.LAB cuenta días laborables con festivos. El formato puede mostrar fecha, pero el valor sigue siendo número. Fechas importadas como texto requieren conversión.',
          'Ordenar reorganiza filas completas según una o varias claves. Seleccionar solo una columna puede desalinear registros; se debe ampliar selección o usar tabla. Filtrar oculta filas que no cumplen y no borra. Los filtros admiten texto, número, fecha, color y condiciones. Limpiar filtro restaura visualización.',
          'Una tabla o rango estructurado incorpora encabezados, filtros, expansión y referencias. En Calc se utilizan rangos de base de datos y autofiltros. Los datos deben ser tabulares: una fila por registro, columna por variable, encabezado único, sin subtotales intermedios.',
          'La validación restringe entradas a lista, número, fecha, longitud o fórmula y muestra mensajes. No garantiza totalmente que datos pegados o importados sean correctos, según configuración. El formato condicional resalta valores por reglas, escalas o fórmulas; no cambia el dato.',
          'Los gráficos representan categorías y series. Columnas comparan, líneas muestran evolución, circular proporciones de un total con pocas categorías, dispersión relación numérica. Deben incluir título, ejes, leyenda y unidades y evitar escalas engañosas. Cambiar datos actualiza el gráfico si el rango está vinculado.',
          'Las tablas dinámicas resumen grandes datos por campos de filas, columnas, filtros y valores. Suman, cuentan o promedian y agrupan fechas. Necesitan actualizarse al cambiar origen. No modifican datos base. En Calc se denominan tablas dinámicas o DataPilot según versión.',
          'La protección puede bloquear celdas y estructura con contraseña, pero no equivale a cifrado fuerte ni control de acceso. Para evitar cambios accidentales se desbloquean celdas de entrada y se protege hoja. La seguridad real requiere permisos del archivo y almacenamiento autorizado.',
          'La impresión se controla con área, orientación, tamaño, márgenes, escala, saltos, títulos repetidos y encabezados. Ajustar a una página puede volver ilegible. La vista de saltos ayuda. Deben repetirse encabezados en páginas y evitar columnas cortadas. Exportar PDF conserva presentación, no fórmulas editables.',
          'La compatibilidad XLSX–ODS exige revisar fórmulas modernas, tablas, gráficos, macros, formatos condicionales y validación. Las macros pueden ser maliciosas y solo se habilitan si origen y firma son confiables. Conviene conservar formato nativo, exportación final y fuente de datos.',
          'Atajos comunes: Ctrl+N, O, S, P, C, X, V, Z, Y, F; Ctrl+1 abre formato en Excel; F2 edita; Ctrl+flecha salta al borde; Ctrl+Mayús+flecha selecciona; Alt+= inserta autosuma en Excel. La configuración y el programa pueden variar, por lo que debe entenderse la operación.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'Libro contiene hojas; celda se identifica por coordenada. Fórmula empieza =. Relativa cambia; absoluta se fija con $. Formato no cambia valor. Ordenar mueve registros; filtrar oculta. Validación limita entrada; condicional resalta. Gráfico representa; tabla dinámica resume. CSV solo conserva texto delimitado. Proteger hoja no equivale a cifrar.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          '12 % es 0,12 internamente. Una fecha puede ser número. CONTAR no cuenta texto; CONTARA sí celdas no vacías. Coincidencia aproximada de BUSCARV puede fallar si no se ordena. Filtrar no borra. Copiar fórmula cambia referencias relativas. Ajustar a una página puede reducir demasiado. Ocultar hoja no protege datos.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Cómo cambian las referencias relativas, absolutas y mixtas al copiar una fórmula? ¿Qué diferencias existen entre formato, valor, ordenación, filtro, validación y formato condicional? ¿Qué funciones y herramientas utilizarías para calcular, buscar, resumir y presentar datos administrativos?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Antes de calcular identifica tipos de datos y referencias. Escribe fórmula por partes y prueba con un registro. En tareas de datos selecciona filas completas y conserva copia. En preguntas, calcula el resultado real en lugar de responder por apariencia. Los distractores explotan confusión entre formato y valor, filtro y borrado o coincidencia exacta y aproximada.'
        ]}
      ],
      tree: 'EXCEL Y LIBREOFFICE CALC\n├─ Libro, hojas, celdas y rangos\n├─ Datos y formato\n│  ├─ Texto, número, fecha y lógico\n│  └─ Formato no cambia valor\n├─ Fórmulas\n│  ├─ Operadores y prioridad\n│  ├─ Referencia relativa\n│  ├─ Absoluta y mixta\n│  └─ Errores\n├─ Funciones\n│  ├─ Matemáticas y estadísticas\n│  ├─ Lógicas y condicionales\n│  ├─ Búsqueda\n│  └─ Fechas\n├─ Gestión de datos\n│  ├─ Ordenar y filtrar\n│  ├─ Validación y formato condicional\n│  └─ Tablas dinámicas\n└─ Gráficos, protección, impresión y exportación',
      reviewTable: [['Elemento','Función','Clave'],['Relativa','Cambia al copiar','A1'],['Absoluta','Fija fila y columna','$A$1'],['Mixta','Fija una dimensión','$A1 / A$1'],['Filtro','Oculta filas','No borra'],['Ordenar','Reorganiza registros','Seleccionar todo el rango'],['Validación','Limita entrada','No sustituye revisión'],['Tabla dinámica','Resume datos','Actualizar origen'],['CSV','Texto delimitado','Pierde formato y fórmulas']]
    },
    19: {
      sources: [source.windows, source.intel, source.usb],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          'El ordenador personal combina hardware y software. El hardware incluye placa base, procesador, memoria, almacenamiento, fuente, refrigeración, interfaces y periféricos. El software incluye firmware, sistema operativo, controladores y aplicaciones. Comprender la función de cada componente permite diagnosticar fallos y elegir el periférico adecuado sin confundir capacidad, velocidad y conectividad.',
          'Los periféricos de entrada introducen datos, los de salida muestran resultados y algunos son mixtos. El tema cita impresoras, escáneres, discos externos, lectores y grabadores de CD/DVD y memorias USB. Deben estudiarse tecnología, conexión, formatos, capacidad, mantenimiento, riesgos y uso administrativo.'
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          'La CPU ejecuta instrucciones; la RAM mantiene temporalmente datos activos; el almacenamiento conserva información sin energía. La placa base interconecta mediante buses y puertos; la fuente transforma y distribuye energía; firmware inicia y configura; el sistema operativo administra recursos; el controlador permite comunicarse con un dispositivo.',
          'Capacidad se expresa en bytes y múltiplos; frecuencia en hercios; velocidad de transferencia en bits o bytes por segundo. Un byte son ocho bits. Los fabricantes pueden usar unidades decimales y el sistema mostrar binarias, por lo que la capacidad visible difiere. Rendimiento no depende de un único número.',
          'USB define conectores y protocolos con versiones y capacidades distintas. La forma del conector —A, B, C, micro— no garantiza velocidad o potencia. USB-C es reversible, pero puede transportar solo datos básicos, carga, vídeo o velocidades superiores según puerto, cable y dispositivo.',
          'Los dispositivos y soportes deben tratarse conforme a seguridad, protección de datos y políticas. Cifrado, copias, borrado seguro, inventario y expulsión son tan importantes como capacidad. Un soporte externo no autorizado puede introducir malware o provocar fuga.'
        ]},
        { heading: 'Desarrollo completo del epígrafe oficial', paragraphs: [
          'La placa base contiene zócalo de CPU, ranuras de RAM, conectores de almacenamiento, buses de expansión, chipset, firmware y puertos. Determina compatibilidad. El firmware UEFI o BIOS realiza prueba inicial, detecta hardware y arranca el sistema desde un dispositivo según orden. Cambiar opciones puede impedir arranque o comprometer seguridad.',
          'El procesador dispone de núcleos, hilos, frecuencia y memoria caché. Más núcleos ayudan en tareas paralelas; frecuencia no permite comparar arquitecturas sin más. La caché es memoria rápida cercana. La CPU no almacena permanentemente documentos. El sobrecalentamiento reduce rendimiento o apaga para proteger, por lo que ventilación y pasta térmica importan.',
          'La memoria RAM es volátil y guarda programas y datos en uso. Capacidad insuficiente obliga a usar memoria virtual en disco y ralentiza. Tipos y módulos deben ser compatibles. Los errores pueden causar bloqueos o corrupción. La ROM o memoria de firmware conserva código de arranque, aunque hoy suele ser reprogramable.',
          'El almacenamiento interno puede ser HDD magnético o SSD de estado sólido. HDD ofrece capacidad y partes móviles; SSD menor latencia, silencio y resistencia a golpes, con ciclos de escritura gestionados. Interfaces comunes incluyen SATA y NVMe sobre PCIe. Una partición divide lógicamente; un sistema de archivos organiza. Formatear no repara fallos físicos.',
          'La fuente de alimentación convierte corriente y suministra tensiones. Debe tener potencia y conectores adecuados. Un SAI proporciona energía temporal y protección frente a cortes; no es una copia de seguridad. La refrigeración usa disipadores, ventiladores o líquido. Polvo y obstrucción elevan temperatura.',
          'La tarjeta gráfica procesa imagen y puede estar integrada o dedicada. La tarjeta de red conecta Ethernet o Wi-Fi; Bluetooth conecta periféricos cercanos. La tarjeta de sonido gestiona audio. Muchas funciones están integradas en placa o CPU. Los controladores deben proceder de fuentes fiables y actualizarse con control.',
          'Los puertos habituales son USB, audio, Ethernet y vídeo HDMI o DisplayPort. Un puerto físico puede admitir varias funciones. Los adaptadores convierten señal o conector, pero no crean prestaciones inexistentes. Un hub comparte ancho de banda y alimentación; una base puede añadir red, vídeo y carga.',
          'El teclado, ratón, escáner, micrófono, cámara y lector son entrada; monitor, impresora y altavoz son salida; pantalla táctil, almacenamiento y red son entrada/salida. “Periférico” no significa necesariamente externo: es un dispositivo que amplía entrada, salida, almacenamiento o comunicación.',
          'Las impresoras de inyección proyectan tinta y son versátiles; las láser usan tóner, tambor y fusor y suelen rendir bien en texto y volumen; las térmicas usan calor y son comunes en tickets. Matriciales por impacto sobreviven en formularios multicopia. Coste por página, velocidad, calidad, dúplex, red y consumibles importan más que precio inicial.',
          'La resolución de impresión se expresa en dpi; velocidad en páginas por minuto; ciclo de trabajo orienta volumen. Atasco, tóner, tinta seca, tambor, fusor, cabezales, papel y controlador son incidencias. Una impresora multifunción incorpora escáner y a veces fax. La cola y servidor gestionan trabajos, no la impresora física exclusivamente.',
          'Los escáneres planos sirven para originales individuales y frágiles; alimentadores procesan lotes y pueden ser dúplex; escáneres de mano o cámara tienen otros usos. Resolución óptica es más relevante que interpolada. Profundidad de color, tamaño, velocidad y alimentación influyen. OCR convierte imagen en texto editable con errores posibles.',
          'El disco duro externo puede ser HDD o SSD y se conecta por USB, Thunderbolt u otra interfaz. Debe expulsarse, protegerse de golpes si es HDD y cifrarse si contiene datos. Una única copia externa conectada permanentemente es vulnerable a ransomware. El estado SMART ayuda, pero no predice todos los fallos.',
          'Las memorias USB usan flash, son pequeñas y cómodas, pero fáciles de perder y falsificar. Velocidad real depende de controlador, memoria, interfaz y archivos. El desgaste y extracción incorrecta pueden corromper. Deben escanearse, evitar ejecución automática y usarse solo si están autorizadas. El cifrado protege ante pérdida.',
          'CD y DVD son discos ópticos. CD almacena habitualmente cientos de megabytes; DVD varios gigabytes. ROM es solo lectura; R se graba una vez; RW se reescribe. El lector usa láser y el grabador escribe soportes compatibles. La velocidad se expresa con multiplicador, distinto entre CD y DVD. Los discos se degradan, rayan y tienen capacidad limitada.',
          'Una sesión o disco multisesión permite añadir datos hasta cerrar, con compatibilidad variable. Grabar una imagen ISO no es copiar el archivo ISO dentro, sino escribir su estructura. La finalización mejora compatibilidad. La verificación comprueba lectura después de grabar. Los soportes ópticos no son archivo eterno.',
          'Los monitores se caracterizan por tamaño, resolución, densidad, frecuencia y conexiones. Resolución es número de píxeles; escalar aumenta legibilidad sin cambiar resolución física. Ergonomía exige altura, distancia, brillo y pausas. Los sistemas con varios monitores pueden extender o duplicar escritorio.',
          'El arranque de un problema comienza por síntomas: sin energía, sin arranque, sin red, dispositivo no reconocido, lentitud o errores. Se comprueban cables, energía, puerto, reinicio, Administrador de dispositivos, espacio, actualizaciones y registros, sin desmontar ni cambiar configuraciones críticas sin autorización. Se documentan pasos y se preservan datos.',
          'Mantenimiento preventivo incluye limpieza, ventilación, actualizaciones, antivirus, copias, revisión de espacio, consumibles e inventario. No se usan aspiradores o líquidos inadecuados. Antes de abrir un equipo se apaga, desconecta y controla electricidad estática. El usuario no debe manipular fuentes o componentes sellados.',
          'La eliminación de soportes con datos requiere borrado seguro o destrucción según sensibilidad. Borrar archivos o formatear rápido no garantiza irreversibilidad. Los residuos electrónicos y consumibles se gestionan por canales autorizados. La reutilización exige verificar que los datos no puedan recuperarse.'
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          'CPU procesa; RAM es temporal; SSD/HDD conservan; placa conecta; fuente alimenta; firmware arranca; sistema gestiona; controlador comunica. Entrada: teclado y escáner; salida: monitor e impresora; mixtos: almacenamiento, red y táctil. Láser usa tóner; inyección usa tinta. Escáner crea imagen y OCR texto. USB-C es forma, no garantía de velocidad. CD/DVD pueden ser ROM, R o RW.'
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          'RAM no es almacenamiento permanente. SAI no es copia de seguridad. Formatear no repara daño físico ni borra siempre de modo seguro. USB-C no implica una versión concreta. OCR puede equivocarse. Impresora láser usa tóner, tambor y fusor. Un lector no siempre graba. Ocultar o borrar no destruye datos. Un hub comparte recursos.'
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          '¿Qué función cumplen CPU, RAM, almacenamiento, placa, fuente, firmware y controladores? ¿Cómo se comparan impresoras y escáneres por tecnología, calidad y uso? ¿Qué riesgos y diferencias presentan discos externos, memorias USB y soportes CD/DVD?'
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          'Relaciona componente con función y síntoma. No deduzcas prestaciones por forma del conector o cifra aislada. En periféricos distingue tecnología, consumible, conexión, controlador y cola. En almacenamiento incorpora siempre seguridad y copia. Los distractores suelen intercambiar memoria y disco, resolución y tamaño o lector y grabador.'
        ]}
      ],
      tree: 'ORDENADOR PERSONAL\n├─ Componentes internos\n│  ├─ Placa base y firmware\n│  ├─ CPU y caché\n│  ├─ RAM\n│  ├─ HDD / SSD\n│  ├─ Fuente y refrigeración\n│  └─ Gráfica, red y sonido\n├─ Puertos y comunicación\n│  ├─ USB y USB-C\n│  ├─ Vídeo, audio y Ethernet\n│  └─ Wi-Fi y Bluetooth\n├─ Periféricos\n│  ├─ Entrada\n│  ├─ Salida\n│  └─ Entrada/salida\n├─ Impresoras y escáneres\n├─ Almacenamiento externo\n│  ├─ HDD/SSD externo\n│  ├─ Memoria USB\n│  └─ CD/DVD: ROM, R y RW\n└─ Mantenimiento, diagnóstico y borrado seguro',
      reviewTable: [['Componente','Función','Dato clave'],['CPU','Ejecuta instrucciones','Núcleos, frecuencia y caché'],['RAM','Datos en uso','Volátil'],['HDD/SSD','Almacenamiento permanente','Magnético / flash'],['Placa base','Interconecta componentes','Compatibilidad'],['Impresora láser','Salida con tóner','Tambor y fusor'],['Escáner','Entrada de imagen','Resolución y OCR'],['USB','Conexión y alimentación','Conector no fija versión'],['CD/DVD','Almacenamiento óptico','ROM, R o RW']]
    }
  };

  function wordCount(theme) {
    return [
      ...(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]),
      theme.tree || '',
      ...(theme.reviewTable || []).flat()
    ].join(' ').trim().split(/\s+/).filter(Boolean).length;
  }

  const updated = [];
  for (const [numberText, patch] of Object.entries(THEORY)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    theme.sections = patch.sections;
    theme.tree = patch.tree;
    theme.reviewTable = patch.reviewTable;
    theme.officialSources = patch.sources;
    theme.theoryStatus = {
      version: 'v0.86.0', reviewedAt: REVIEW_DATE, autonomous: true, programmeLiteral: true,
      sourcePolicy: 'Bases La Puebla BOP Toledo núm. 82, 05/05/2026; documentación oficial de Microsoft, LibreOffice y fabricantes/estándares',
      words: wordCount({ ...theme, ...patch }), block: 'La Puebla 15-19'
    };
    theme.academiaVersion = 'v0.86 bloque 4';
    updated.push(number);
  }

  ope.theoryProgramme ||= {};
  const previous = ope.theoryProgramme.v86 || { completedThemes: [] };
  const completedThemes = [...new Set([...(previous.completedThemes || []), ...updated])].sort((a, b) => a - b);
  const pendingThemes = ope.themes.map(theme => Number(theme.number)).filter(number => !completedThemes.includes(number));
  ope.theoryProgramme.v86 = {
    ...previous, version: 'v0.86.0', reviewedAt: REVIEW_DATE,
    officialProgrammeSource: 'BOP Toledo núm. 82, 5 de mayo de 2026, Anexo I',
    autonomousThemes: completedThemes.length, totalThemes: ope.themes.length,
    completedThemes, pendingThemes, status: pendingThemes.length ? 'EN_PROGRESO' : 'APTO',
    note: pendingThemes.length ? 'Reconstrucción en curso.' : 'Los 19 temas oficiales han sido reconstruidos como fuente teórica autosuficiente.',
    dynamicChecks: ['Modificaciones normativas posteriores a la fecha de revisión.', 'Cambios de interfaz por actualización de Microsoft 365, Windows, Edge o LibreOffice.', 'Instrucciones, listas, tribunal y fecha oficial del proceso selectivo.']
  };

  window.OPOWEB_PUEBLA_THEORY_V86_BLOQUE4 = {
    version: 'v0.86.0', status: ope.theoryProgramme.v86.status, themes: updated,
    completedThemes, pendingThemes,
    minimumWords: Math.min(...updated.map(number => ope.themes.find(theme => Number(theme.number) === number)?.theoryStatus?.words || 0))
  };
  window.OPOWEB_PUEBLA_THEORY_V86 = {
    ...window.OPOWEB_PUEBLA_THEORY_V86, version: 'v0.86.0', status: ope.theoryProgramme.v86.status,
    autonomousThemes: completedThemes.length, totalThemes: ope.themes.length, pendingThemes,
    dynamicChecks: ope.theoryProgramme.v86.dynamicChecks
  };
})();
