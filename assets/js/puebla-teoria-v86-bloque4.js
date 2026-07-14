(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  if (!ope) return;

  const REVIEW_DATE = '2026-07-14';
  const SOURCES = {
    edge: { label: 'Ayuda y aprendizaje de Microsoft Edge', reference: 'MICROSOFT-EDGE-SUPPORT', url: 'https://support.microsoft.com/microsoft-edge' },
    edgeSecurity: { label: 'Privacidad y seguridad en Microsoft Edge', reference: 'MICROSOFT-EDGE-PRIVACY', url: 'https://support.microsoft.com/microsoft-edge/learn-about-tracking-prevention-in-microsoft-edge-5ac125e8-9b90-8d59-fa2c-7f2e9a44d869' },
    ieMode: { label: 'Modo Internet Explorer en Microsoft Edge', reference: 'MICROSOFT-EDGE-IE-MODE', url: 'https://learn.microsoft.com/deployedge/edge-ie-mode' },
    word: { label: 'Ayuda y aprendizaje de Microsoft Word', reference: 'MICROSOFT-WORD-SUPPORT', url: 'https://support.microsoft.com/word' },
    writer: { label: 'Ayuda oficial de LibreOffice Writer', reference: 'LIBREOFFICE-WRITER-HELP', url: 'https://help.libreoffice.org/latest/es/text/swriter/main0000.html' },
    excel: { label: 'Ayuda y aprendizaje de Microsoft Excel', reference: 'MICROSOFT-EXCEL-SUPPORT', url: 'https://support.microsoft.com/excel' },
    calc: { label: 'Ayuda oficial de LibreOffice Calc', reference: 'LIBREOFFICE-CALC-HELP', url: 'https://help.libreoffice.org/latest/es/text/scalc/main0000.html' },
    windows: { label: 'Ayuda y aprendizaje de Windows', reference: 'MICROSOFT-WINDOWS-SUPPORT', url: 'https://support.microsoft.com/windows' },
    hardware: { label: 'Información oficial de Microsoft sobre dispositivos y controladores', reference: 'MICROSOFT-WINDOWS-DEVICES', url: 'https://support.microsoft.com/windows/update-drivers-through-device-manager-in-windows-ec62f46c-ff14-c91d-eead-d7126dc1f7b6' },
    usb: { label: 'Ayuda oficial de Microsoft sobre dispositivos USB y almacenamiento', reference: 'MICROSOFT-WINDOWS-STORAGE', url: 'https://support.microsoft.com/windows/storage-settings-in-windows-10dd56db-70fa-4a56-bee2-7d6c7c144b3d' }
  };

  const THEMES = {
    16: {
      sources: [SOURCES.edge, SOURCES.edgeSecurity, SOURCES.ieMode],
      articleCoverage: [
        ['Navegación', 'URL, pestañas, ventanas, historial, favoritos, descargas y búsqueda.'],
        ['Privacidad', 'Cookies, caché, permisos, seguimiento, perfiles e InPrivate.'],
        ['Seguridad', 'HTTPS, certificados, descargas, phishing, SmartScreen y actualizaciones.'],
        ['Compatibilidad', 'Internet Explorer histórico y modo IE en Edge para aplicaciones heredadas.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `Un navegador interpreta recursos web y permite acceder a páginas y aplicaciones mediante direcciones URL. Microsoft Edge es el navegador actual de Microsoft; Internet Explorer permanece en el programa como tecnología histórica y por compatibilidad con aplicaciones antiguas.`,
          `Deben dominarse barra de direcciones, pestañas, favoritos, historial, descargas, cookies, caché, navegación privada, permisos, HTTPS, certificados, búsqueda, impresión y atajos. En oficina pública se comprueba siempre dominio, identidad, tratamiento de datos y cierre de sesión.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `La interfaz cambia con actualizaciones. OpoWeb estudia funciones estables descritas en documentación oficial, no una versión visual cerrada.`,
          `Internet Explorer está retirado como navegador independiente en muchos sistemas actuales. El modo IE de Edge puede habilitar compatibilidad empresarial cuando la organización lo configura; no debe presentarse como navegador recomendado general.`,
          `La seguridad técnica no sustituye normas de protección de datos, administración electrónica y política corporativa. Un candado no convierte una web en sede oficial.`
        ]},
        { heading: '1. Internet, web y navegador', paragraphs: [
          `Internet es red de redes; la web es un servicio que utiliza protocolos como HTTP/HTTPS. El navegador solicita, recibe e interpreta HTML, CSS, scripts, imágenes y otros recursos.`,
          `Una aplicación web puede permitir trámites, correo, gestión o edición. El navegador actúa como cliente, pero los datos suelen almacenarse en servidores.`,
          `No deben confundirse navegador, buscador y página. Edge es navegador; Bing o Google son buscadores; una sede electrónica es sitio web institucional.`
        ]},
        { heading: '2. URL y barra de direcciones', paragraphs: [
          `La URL identifica un recurso e incluye esquema, dominio, posible puerto, ruta, parámetros y fragmento. En https://sede.ejemplo.es/tramite, https es protocolo, sede.ejemplo.es dominio y /tramite ruta.`,
          `La barra permite escribir dirección o búsqueda. Ctrl+L o Alt+D selecciona su contenido. Debe revisarse el dominio completo, no solo palabras visibles.`,
          `Los dominios falsos pueden usar letras parecidas, subdominios engañosos o enlaces acortados. La dirección real se comprueba antes de introducir credenciales.`
        ]},
        { heading: '3. Pestañas y ventanas', paragraphs: [
          `Las pestañas permiten abrir varias páginas en una ventana. Ctrl+T abre pestaña, Ctrl+W cierra actual, Ctrl+Mayús+T reabre cerrada y Ctrl+Tab cambia.`,
          `Una ventana nueva separa conjunto; una InPrivate reduce conservación local. Varias pestañas consumen memoria y pueden mantener sesiones abiertas.`,
          `Cerrar pestaña de un trámite sin guardar puede perder datos. Antes de cerrar se comprueba justificante, registro o borrador.`
        ]},
        { heading: '4. Navegación básica', paragraphs: [
          `Atrás y adelante recorren historial de pestaña; actualizar vuelve a solicitar contenido. F5 o Ctrl+R actualiza; Ctrl+F busca texto en página.`,
          `Inicio abre página configurada. Detener cancela carga. Los enlaces pueden abrirse en misma o nueva pestaña mediante menú o Ctrl+clic.`,
          `Actualizar una página con formulario puede reenviar datos; el navegador puede advertir. No debe repetirse un registro sin comprobar asiento.`
        ]},
        { heading: '5. Favoritos y colecciones', paragraphs: [
          `Los favoritos guardan direcciones para acceso. Ctrl+D añade página. Se organizan en carpetas, barra y sincronización si autorizada.`,
          `Guardar favorito no descarga contenido ni acredita vigencia. Una URL puede cambiar o quedar obsoleta.`,
          `En entorno administrativo conviene guardar sedes oficiales verificadas y revisar enlaces periódicamente, evitando sincronización personal de recursos corporativos.`
        ]},
        { heading: '6. Historial', paragraphs: [
          `Registra páginas visitadas según configuración. Ctrl+H abre historial. Puede buscarse y eliminarse total o parcialmente.`,
          `El historial ayuda a recuperar sitio, pero puede revelar trámites o intereses. No debe usarse como prueba única de presentación.`,
          `Borrarlo no elimina registros de servidores, red o cuenta sincronizada. La privacidad requiere cerrar sesión y aplicar políticas.`
        ]},
        { heading: '7. Descargas', paragraphs: [
          `Ctrl+J abre descargas. El navegador muestra nombre, origen, progreso, carpeta y advertencias.`,
          `Antes de abrir se verifica dominio, extensión, firma o hash si procede. Un archivo puede tener doble extensión o icono engañoso.`,
          `Los documentos descargados con datos personales deben moverse a ubicación corporativa y eliminarse de Descargas cuando proceda. No se ejecutan programas no autorizados.`
        ]},
        { heading: '8. Cookies', paragraphs: [
          `Son pequeños datos que el sitio almacena para sesión, preferencias, medición u otros fines. Pueden ser propias o de terceros, de sesión o persistentes.`,
          `Bloquearlas puede impedir autenticación o carrito, pero las de seguimiento plantean privacidad. Edge permite configurar y eliminar.`,
          `Una cookie no es necesariamente virus ni copia completa del equipo. El consentimiento web se refiere a usos no necesarios según normativa, no a todas por igual.`
        ]},
        { heading: '9. Caché', paragraphs: [
          `Guarda temporalmente recursos para acelerar cargas. Puede mostrar versión antigua o causar fallos tras actualización.`,
          `Borrar caché obliga a descargar de nuevo, pero no elimina necesariamente cookies, contraseñas o historial si no se seleccionan.`,
          `Ctrl+F5 puede forzar recarga más completa en algunos contextos. En sede, antes de borrar datos se guarda justificante y se conoce efecto sobre sesión.`
        ]},
        { heading: '10. Datos de navegación y perfiles', paragraphs: [
          `Los perfiles separan favoritos, historial, contraseñas, extensiones y sincronización. Pueden ser personales o corporativos.`,
          `No se debe mezclar cuenta personal con puesto público. La sincronización puede trasladar datos a servicios externos y requiere política.`,
          `Al borrar datos se elige intervalo y categorías. Una acción global puede cerrar sesiones y borrar información útil, pero no documentos ya descargados.`
        ]},
        { heading: '11. Navegación InPrivate', paragraphs: [
          `Ctrl+Mayús+N abre ventana InPrivate. Al cerrar, el navegador no conserva normalmente historial, cookies temporales ni datos de formularios de esa sesión.`,
          `No hace anónimo frente a organización, proveedor, sitio o red. Las descargas y favoritos creados permanecen.`,
          `No sustituye protección de datos, VPN ni cierre de sesión. Puede ser útil en equipo compartido autorizado, pero no para eludir controles.`
        ]},
        { heading: '12. HTTPS y certificados web', paragraphs: [
          `HTTPS cifra comunicación y autentica el dominio mediante certificado. Reduce interceptación y manipulación durante tránsito.`,
          `El navegador muestra advertencia si certificado caducó, nombre no coincide o cadena no es confiable. No debe ignorarse en sede sin verificación de soporte.`,
          `Una web fraudulenta puede tener HTTPS para su propio dominio. Se comprueba titularidad institucional y dirección exacta.`
        ]},
        { heading: '13. Permisos del sitio', paragraphs: [
          `Los sitios pueden solicitar ubicación, cámara, micrófono, notificaciones, ventanas emergentes, portapapeles y descargas.`,
          `Se conceden solo si necesarios y al dominio correcto. Pueden revisarse desde configuración o icono de sitio.`,
          `Una sede puede necesitar ventanas para firma o justificante; bloquearlas puede impedir trámite. Se autoriza de forma limitada, no global.`
        ]},
        { heading: '14. Contraseñas y autocompletado', paragraphs: [
          `El navegador puede guardar credenciales y datos de formularios. En equipos corporativos se sigue política y se evita guardar credenciales de ciudadanos.`,
          `Las contraseñas deben ser únicas, robustas y acompañadas de autenticación multifactor. El gestor puede avisar de filtraciones.`,
          `Autocompletar acelera pero puede insertar datos de otra persona. Antes de enviar se revisa cada campo.`
        ]},
        { heading: '15. Prevención de seguimiento', paragraphs: [
          `Edge limita rastreadores mediante niveles básico, equilibrado y estricto. Un nivel alto puede romper funciones.`,
          `El seguimiento combina identificadores para perfilar navegación. Bloquear terceros mejora privacidad pero no elimina toda medición.`,
          `En aplicaciones corporativas se aplican políticas centralizadas. El usuario no debe desactivar protecciones permanentemente para resolver una incidencia.`
        ]},
        { heading: '16. Phishing, malware y SmartScreen', paragraphs: [
          `El phishing imita entidades para robar credenciales o inducir pagos. Señales: urgencia, dominio extraño, errores, adjuntos, petición de secreto o cambio de cuenta.`,
          `Microsoft Defender SmartScreen compara sitios y descargas con reputación y puede advertir. Una ausencia de aviso no garantiza seguridad.`,
          `Ante sospecha no se introduce contraseña, se cierra, se accede escribiendo dirección oficial y se comunica a soporte.`
        ]},
        { heading: '17. Impresión y PDF desde navegador', paragraphs: [
          `Ctrl+P abre impresión. Se eligen impresora o guardar como PDF, páginas, diseño, escala, márgenes y encabezados.`,
          `Una página dinámica puede no imprimirse igual que se ve. Las sedes suelen ofrecer justificante PDF específico que debe descargarse.`,
          `Imprimir pantalla no sustituye registro. El justificante debe incluir asiento, fecha, órgano y documentos cuando corresponda.`
        ]},
        { heading: '18. Internet Explorer y modo IE', paragraphs: [
          `Internet Explorer fue navegador de Microsoft basado en tecnologías antiguas y controles como ActiveX. Su soporte general finalizó y no debe usarse para navegación ordinaria.`,
          `Edge ofrece modo Internet Explorer para sitios empresariales heredados configurados por administradores, usando motor compatible dentro de Edge.`,
          `El modo IE se limita a lista y periodo de compatibilidad. No implica instalar extensiones inseguras ni habilitarlo libremente para cualquier página.`
        ]},
        { heading: '19. Actualizaciones y extensiones', paragraphs: [
          `El navegador se actualiza para corregir vulnerabilidades y compatibilidad. Debe reiniciarse cuando se solicite.`,
          `Las extensiones añaden funciones y acceden a datos según permisos. Solo se instalan autorizadas y desde fuentes oficiales.`,
          `Una extensión puede leer páginas o modificar tráfico. Debe revisarse necesidad, editor, permisos y mantenimiento.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `URL: protocolo + dominio + ruta. Edge: navegador; buscador: servicio de búsqueda.`,
          `Favoritos guardan direcciones; historial registra visitas; descargas guardan archivos.`,
          `Cookies conservan datos de sitio; caché recursos temporales; InPrivate no da anonimato.`,
          `HTTPS cifra y autentica dominio, pero hay que comprobar que el dominio sea oficial.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `InPrivate no oculta actividad a red. Borrar caché no equivale a borrar cookies.`,
          `HTTPS no asegura contenido verdadero. Favorito no garantiza vigencia.`,
          `Internet Explorer es histórico; compatibilidad actual puede darse por modo IE de Edge.`,
          `Ctrl+L dirección; Ctrl+D favorito; Ctrl+H historial; Ctrl+J descargas.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué partes tiene una URL y cómo se verifica una sede?`,
          `2. ¿Qué diferencias hay entre cookies, caché, historial, descargas e InPrivate?`,
          `3. ¿Qué controles de seguridad aplicar antes de introducir credenciales o abrir un archivo?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Memoriza atajos ligados a función, no como lista aislada. Practica configuración de permisos y datos de navegación.`,
          `En supuestos de sede responde: dominio, HTTPS, certificado, sesión, firma, justificante, descarga segura y cierre.`
        ]}
      ],
      tree: `WINDOWS II · NAVEGACIÓN
├─ Acceso
│  ├─ URL y barra
│  ├─ Pestañas
│  ├─ Favoritos
│  ├─ Historial
│  └─ Descargas
├─ Datos
│  ├─ Cookies
│  ├─ Caché
│  ├─ Perfiles
│  └─ InPrivate
├─ Seguridad
│  ├─ HTTPS y certificados
│  ├─ Permisos
│  ├─ Phishing / SmartScreen
│  └─ Actualizaciones
└─ Compatibilidad
   └─ Internet Explorer / modo IE`,
      reviewTable: [
        ['Elemento', 'Función', 'Atajo/clave'],
        ['Barra', 'Dirección o búsqueda', 'Ctrl+L'],
        ['Favoritos', 'Guardar URL', 'Ctrl+D'],
        ['Historial', 'Visitas', 'Ctrl+H'],
        ['Descargas', 'Archivos recibidos', 'Ctrl+J'],
        ['InPrivate', 'No conservar sesión local', 'Ctrl+Mayús+N'],
        ['HTTPS', 'Cifrado + dominio', 'No garantiza legitimidad'],
        ['Caché', 'Recursos temporales', 'Acelera carga'],
        ['Modo IE', 'Compatibilidad heredada', 'Configuración empresarial']
      ]
    },
    17: {
      sources: [SOURCES.word, SOURCES.writer],
      articleCoverage: [
        ['Documento y formato', 'Creación, apertura, guardado, compatibilidad, página, carácter y párrafo.'],
        ['Estructura', 'Estilos, listas, secciones, encabezados, pies, tablas e índices.'],
        ['Revisión', 'Ortografía, buscar/reemplazar, comentarios, control de cambios y comparación.'],
        ['Producción administrativa', 'Plantillas, combinación de correspondencia, PDF, impresión y accesibilidad.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `Word y Writer son procesadores de texto para crear, editar, estructurar, revisar e imprimir documentos. Word usa DOCX como formato habitual; Writer usa ODT como formato abierto, aunque ambos importan y exportan otros formatos.`,
          `El examen puede combinar conceptos y operaciones: guardar, estilos, formato de párrafo, tablas, encabezados, saltos, buscar y reemplazar, control de cambios, combinación, PDF e impresión. En un Ayuntamiento se aplican a oficios, informes, resoluciones, certificados y cartas.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Los nombres y cintas cambian según versión. Se estudian funciones documentadas oficialmente por Microsoft y LibreOffice.`,
          `La compatibilidad no es perfecta: abrir DOCX en Writer o ODT en Word puede alterar diseños complejos. Debe revisarse antes de firmar o enviar.`,
          `La aplicación no convierte un borrador en documento administrativo válido: hacen falta competencia, contenido, firma, registro y expediente según procedimiento.`
        ]},
        { heading: '1. Interfaz y documento', paragraphs: [
          `Word organiza comandos en cinta, pestañas y grupos; Writer utiliza menús, barras y panel lateral. Ambos muestran área de edición, regla, barra de estado y navegación.`,
          `El cursor indica inserción y la selección determina qué se modifica. Las marcas de formato ayudan a ver párrafos, espacios, tabulaciones y saltos.`,
          `La vista de diseño de impresión aproxima resultado; otras vistas facilitan estructura o lectura.`
        ]},
        { heading: '2. Crear, abrir y cerrar', paragraphs: [
          `Nuevo documento puede partir de blanco o plantilla. Abrir recupera archivo existente y puede mostrar modo protegido o solo lectura.`,
          `Cerrar documento no siempre cierra aplicación. Si hay cambios, se solicita guardar.`,
          `Los archivos de origen desconocido pueden contener macros. No se habilita contenido sin confianza y autorización.`
        ]},
        { heading: '3. Guardar y Guardar como', paragraphs: [
          `Guardar actualiza archivo actual; Guardar como crea nueva copia, cambia nombre, ubicación o formato. Ctrl+S guarda.`,
          `El guardado automático depende de ubicación y cuenta. No sustituye control de versiones ni expediente.`,
          `Al cambiar formato puede aparecer advertencia de pérdida de funciones. Se conserva una copia editable y se revisa resultado.`
        ]},
        { heading: '4. Formatos DOCX, ODT, PDF y otros', paragraphs: [
          `DOCX es formato Office Open XML de Word; ODT es OpenDocument de Writer. RTF y TXT tienen menor riqueza.`,
          `PDF está pensado para distribución con apariencia estable y puede ser accesible y firmado. Exportar no elimina original editable.`,
          `Cambiar extensión no convierte. Se usa Guardar como o Exportar. Un PDF escaneado puede no contener texto seleccionable sin OCR.`
        ]},
        { heading: '5. Configuración de página', paragraphs: [
          `Incluye tamaño, orientación, márgenes, columnas y fondo. Los ajustes pueden aplicarse a documento o secciones/estilos de página.`,
          `Un salto de página fuerza nueva página; pulsar Enter repetidamente es incorrecto porque cambia al editar.`,
          `Los saltos de sección en Word o estilos de página en Writer permiten encabezados, orientación o numeración diferentes.`
        ]},
        { heading: '6. Formato de carácter', paragraphs: [
          `Fuente, tamaño, negrita, cursiva, subrayado, color, resaltado, mayúsculas, superíndice y subíndice se aplican a caracteres.`,
          `Ctrl+B suele negrita en Word en interfaz inglesa, mientras combinaciones pueden localizarse; conviene usar comandos visibles si atajo varía.`,
          `El exceso de formato directo dificulta coherencia. Los estilos son preferibles para títulos y cuerpo.`
        ]},
        { heading: '7. Formato de párrafo', paragraphs: [
          `Alineación, sangrías, espaciado, interlineado, tabulaciones, bordes, sombreado, viñetas y numeración afectan al párrafo.`,
          `No se alinean columnas con espacios; se usan tabulaciones o tablas. No se crean sangrías con espacios.`,
          `Las opciones de mantener con siguiente, líneas juntas y control de viudas mejoran paginación.`
        ]},
        { heading: '8. Estilos', paragraphs: [
          `Un estilo agrupa formato y función estructural. Título 1, Título 2 y cuerpo permiten coherencia, navegación e índice automático.`,
          `Modificar estilo actualiza todos sus usos; aplicar formato manual solo afecta selección.`,
          `Los estilos mejoran accesibilidad y exportación. Un texto grande en negrita no es necesariamente encabezado semántico.`
        ]},
        { heading: '9. Listas y numeración', paragraphs: [
          `Las listas pueden ser con viñetas, numeradas o multinivel. Deben usarse comandos para que renumeren al insertar o borrar.`,
          `La lista multinivel puede vincularse a estilos para epígrafes. Reiniciar o continuar numeración se controla desde opciones.`,
          `Escribir números manualmente puede producir duplicados y mala alineación.`
        ]},
        { heading: '10. Tablas', paragraphs: [
          `Se componen de filas, columnas y celdas. Pueden insertarse, eliminarse, combinarse, dividirse y ajustar ancho, alto, bordes y sombreado.`,
          `El encabezado puede repetirse en páginas. La alineación vertical y márgenes de celda mejoran presentación.`,
          `Las tablas sirven para formularios y cuadros, no para maquetar todo el documento. Deben tener encabezados claros y evitar celdas complejas por accesibilidad.`
        ]},
        { heading: '11. Encabezados, pies y numeración', paragraphs: [
          `Se repiten en páginas y contienen logotipo, órgano, expediente, fecha o número. Los números de página son campos automáticos.`,
          `Puede configurarse primera página diferente y pares/impares. En Writer se gestiona mediante estilos de página; en Word mediante secciones.`,
          `No debe insertarse numeración manual. Los datos variables se usan como campos cuando proceda.`
        ]},
        { heading: '12. Imágenes y objetos', paragraphs: [
          `Las imágenes se insertan, recortan, dimensionan y ajustan respecto al texto. Mantener proporción evita deformación.`,
          `El texto alternativo describe contenido relevante para accesibilidad. Las imágenes decorativas se marcan como tales.`,
          `Copiar desde web puede incorporar enlaces o formatos. Se respetan derechos y se optimiza tamaño.`
        ]},
        { heading: '13. Buscar y reemplazar', paragraphs: [
          `Ctrl+F busca; reemplazar cambia coincidencias y puede usar formato, comodines o expresiones según aplicación.`,
          `Reemplazar todo es potente y arriesgado: debe revisarse contexto y realizarse sobre copia si documento crítico.`,
          `La navegación por encabezados, páginas y resultados agiliza documentos largos.`
        ]},
        { heading: '14. Ortografía, gramática e idioma', paragraphs: [
          `El corrector detecta posibles errores según idioma asignado, pero no garantiza corrección jurídica o de nombres.`,
          `Configurar idioma evita falsos errores. El diccionario personalizado se usa con prudencia.`,
          `La revisión final comprueba cifras, fechas, nombres, DNI, órgano, recursos y anexos además de ortografía.`
        ]},
        { heading: '15. Comentarios y control de cambios', paragraphs: [
          `Los comentarios permiten observaciones sin alterar cuerpo. El control registra inserciones, eliminaciones y formato por autor.`,
          `Aceptar o rechazar consolida cambios. Ocultar marcas no las elimina; antes de publicar se inspecciona documento.`,
          `La comparación muestra diferencias entre versiones. Los metadatos y comentarios internos deben eliminarse cuando no proceda.`
        ]},
        { heading: '16. Plantillas', paragraphs: [
          `Una plantilla contiene estilos, estructura, campos y elementos reutilizables. Word usa DOTX/DOTM y Writer OTT.`,
          `Crear documento desde plantilla no modifica normalmente plantilla. Las macros requieren control.`,
          `Las plantillas municipales reducen errores, pero deben estar actualizadas y no incluir datos de expedientes anteriores.`
        ]},
        { heading: '17. Combinación de correspondencia', paragraphs: [
          `Genera documentos personalizados a partir de documento principal, origen de datos y campos. Puede producir cartas, etiquetas, sobres o correo.`,
          `El origen debe tener columnas correctas y registros depurados. Se filtra y previsualiza antes de combinar.`,
          `Cada destinatario solo debe recibir sus datos. Se evita generar un único PDF masivo que revele información si se envía incorrectamente.`
        ]},
        { heading: '18. Índices y campos', paragraphs: [
          `El índice automático se basa en estilos de título. Se actualiza tras cambios.`,
          `Campos insertan fecha, página, referencias, propiedades o resultados. Pueden requerir actualización antes de imprimir.`,
          `Las referencias cruzadas se adaptan al mover contenido; escribir números manuales puede quedar obsoleto.`
        ]},
        { heading: '19. Exportación a PDF', paragraphs: [
          `Se seleccionan páginas, marcadores, calidad, etiquetas de accesibilidad, PDF/A y otras opciones.`,
          `PDF/A está orientado a conservación con restricciones. Un PDF firmado no debe regenerarse después.`,
          `Se abre archivo exportado y se revisa paginación, fuentes, enlaces, campos, datos y tamaño antes de registrar.`
        ]},
        { heading: '20. Impresión', paragraphs: [
          `La vista previa permite elegir impresora, páginas, copias, intercalado, una/doble cara, tamaño, orientación y escala.`,
          `Puede imprimirse documento, selección o páginas concretas. Los comentarios y marcas pueden incluirse o excluirse.`,
          `En documentos confidenciales se selecciona impresora segura y se recoge inmediatamente.`
        ]},
        { heading: '21. Accesibilidad y calidad administrativa', paragraphs: [
          `Se utilizan estilos, títulos jerárquicos, contraste, texto alternativo, tablas simples, lenguaje claro y enlaces descriptivos.`,
          `El comprobador de accesibilidad ayuda, pero requiere revisión humana.`,
          `La calidad incluye formato corporativo, coherencia, firma, protección de datos, versión y archivo en expediente.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `Word: DOCX; Writer: ODT; PDF: distribución. Guardar como cambia nombre, ubicación o formato.`,
          `Carácter no es párrafo; salto no es Enter repetido; estilo no es solo apariencia.`,
          `Control de cambios debe aceptarse/rechazarse; ocultar no elimina.`,
          `Combinación = principal + datos + campos + salida.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Guardar no es Guardar como. Cambiar extensión no convierte.`,
          `Un encabezado visual sin estilo no crea índice fiable.`,
          `Ocultar marcas no las borra. PDF no es necesariamente inaccesible ni ineditable de forma absoluta.`,
          `Plantilla no debe contener datos residuales.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué diferencias hay entre formato de carácter, párrafo, página y estilo?`,
          `2. ¿Cómo se revisa un documento con comentarios, control de cambios y metadatos?`,
          `3. ¿Qué pasos siguen plantilla, combinación, PDF, firma, impresión y archivo?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Practica una carta completa: plantilla, estilos, tabla, encabezado, revisión, combinación y PDF.`,
          `En supuesto describe operación y control de calidad. El tribunal puede valorar más un flujo seguro que un nombre exacto de botón.`
        ]}
      ],
      tree: `WORD / WRITER
├─ Archivo
│  ├─ Crear / abrir
│  ├─ Guardar / Guardar como
│  └─ DOCX / ODT / PDF
├─ Formato y estructura
│  ├─ Carácter y párrafo
│  ├─ Estilos y listas
│  ├─ Página / secciones
│  └─ Tablas / imágenes
├─ Revisión
│  ├─ Ortografía
│  ├─ Buscar / reemplazar
│  ├─ Comentarios
│  └─ Control de cambios
└─ Producción
   ├─ Plantillas
   ├─ Combinación
   ├─ PDF
   └─ Impresión y accesibilidad`,
      reviewTable: [
        ['Función', 'Finalidad', 'Clave'],
        ['Guardar', 'Actualizar archivo', 'Ctrl+S'],
        ['Guardar como', 'Nueva ubicación/nombre/formato', 'Conserva original'],
        ['Estilos', 'Coherencia y estructura', 'Índice/accesibilidad'],
        ['Salto', 'Nueva página o sección', 'No Enter repetido'],
        ['Control de cambios', 'Registrar edición', 'Aceptar/rechazar'],
        ['Combinación', 'Personalizar documentos', 'Origen de datos'],
        ['PDF', 'Salida estable', 'Revisar antes de firmar'],
        ['Plantilla', 'Reutilizar estructura', 'Sin datos residuales']
      ]
    },
    18: {
      sources: [SOURCES.excel, SOURCES.calc],
      articleCoverage: [
        ['Estructura', 'Libro, hoja, fila, columna, celda, rango y tipos de datos.'],
        ['Cálculo', 'Fórmulas, operadores, referencias, funciones, errores y auditoría.'],
        ['Gestión de datos', 'Ordenar, filtrar, tablas, validación, formato condicional y protección.'],
        ['Presentación', 'Gráficos, impresión, importación, compatibilidad y buenas prácticas.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `Excel y Calc son hojas de cálculo para organizar datos, calcular, analizar, filtrar, representar e imprimir. Excel usa XLSX; Calc usa ODS.`,
          `El tema exige manejar celdas y rangos, fórmulas, funciones, referencias relativas/absolutas/mixtas, ordenar, filtrar, gráficos, formato, impresión y errores. En gestión municipal se aplican a listados, importes, plazos y estadísticas, pero no sustituyen una base de datos o expediente.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Las funciones pueden variar de nombre o separador según idioma y configuración. Se estudia lógica común y documentación oficial.`,
          `Los formatos ODS y XLSX son interoperables, pero fórmulas avanzadas, macros, tablas dinámicas y formatos pueden cambiar. Debe revisarse.`,
          `Una hoja no es sistema oficial por sí misma. Los datos personales requieren permisos, minimización, seguridad y control de versiones.`
        ]},
        { heading: '1. Libro, hoja y celda', paragraphs: [
          `El libro contiene una o más hojas. Cada hoja se organiza en columnas identificadas por letras y filas por números. La intersección es celda, por ejemplo B4.`,
          `La celda activa recibe entrada. Un rango es conjunto, por ejemplo A1:C10. Puede ser contiguo o múltiple.`,
          `Las hojas pueden insertarse, renombrarse, mover, copiar, ocultar y proteger. El nombre debe ser descriptivo.`
        ]},
        { heading: '2. Tipos de datos', paragraphs: [
          `Una celda puede contener texto, número, fecha, hora, porcentaje, moneda, valor lógico o fórmula. El formato visual no siempre cambia valor subyacente.`,
          `Las fechas se almacenan como números de serie y horas como fracciones de día. Una fecha escrita como texto no se calcula correctamente.`,
          `Los ceros iniciales de códigos pueden perderse si se interpretan como número; conviene formato texto. DNI, códigos postales o expedientes no son cantidades.`
        ]},
        { heading: '3. Entrada y edición', paragraphs: [
          `Se escribe y confirma con Enter o Tab. F2 o doble clic edita. Esc cancela.`,
          `Copiar y pegar puede transferir fórmulas, formatos y validaciones; Pegado especial permite valores, fórmulas, formato o transponer.`,
          `El controlador de relleno copia patrones y fórmulas. Debe revisarse la referencia resultante.`
        ]},
        { heading: '4. Fórmulas y operadores', paragraphs: [
          `Las fórmulas comienzan por = y combinan referencias, constantes, operadores y funciones. Operadores aritméticos incluyen +, -, *, /, ^ y %.`,
          `La precedencia aplica paréntesis, potencias, multiplicación/división y suma/resta; se usan paréntesis para claridad.`,
          `Los operadores de comparación producen VERDADERO/FALSO. El operador de concatenación une texto según aplicación y fórmula.`
        ]},
        { heading: '5. Referencias relativas, absolutas y mixtas', paragraphs: [
          `A1 es relativa: cambia al copiar. $A$1 es absoluta: fija columna y fila. $A1 fija columna y A$1 fija fila.`,
          `F4 alterna tipos en Excel durante edición y existe función equivalente en Calc según configuración.`,
          `Para multiplicar importes por un tipo situado en celda fija se usa absoluta. Un error de referencia puede propagarse a toda columna.`
        ]},
        { heading: '6. Referencias entre hojas y libros', paragraphs: [
          `Se puede referir Hoja2!A1 o sintaxis equivalente. Si nombre contiene espacios se delimita.`,
          `Los vínculos externos apuntan a otro libro y pueden quedar rotos, desactualizados o exponer rutas.`,
          `Para expediente final se valora convertir resultados a valores o conservar fuente controlada, sin perder trazabilidad.`
        ]},
        { heading: '7. Funciones básicas', paragraphs: [
          `SUMA agrega; PROMEDIO calcula media aritmética; MAX y MIN extremos; CONTAR cuenta números; CONTARA celdas no vacías.`,
          `REDONDEAR controla decimales; HOY y AHORA devuelven fecha/hora dinámica; SI evalúa condición.`,
          `Los argumentos se separan por punto y coma o coma según configuración. No se memorizan separadores como regla universal.`
        ]},
        { heading: '8. Función SI y lógicas', paragraphs: [
          `SI(condición; valor_si_verdadero; valor_si_falso) devuelve uno de dos resultados. Puede combinarse con Y, O y NO.`,
          `Las condiciones se prueban con casos límite. Anidar demasiados SI dificulta mantenimiento; se pueden usar tablas o funciones modernas.`,
          `No se escriben números entre comillas si deben calcularse. Los textos sí se delimitan.`
        ]},
        { heading: '9. Funciones condicionales', paragraphs: [
          `SUMAR.SI suma si cumple criterio; CONTAR.SI cuenta; PROMEDIO.SI promedia. Las versiones múltiples admiten varios criterios.`,
          `El rango de criterios y rango de suma deben corresponder. Los criterios pueden incluir operadores y comodines.`,
          `Son útiles para totales por área, estado o fecha sin filtrar manualmente.`
        ]},
        { heading: '10. Búsqueda y referencia', paragraphs: [
          `BUSCARV busca en primera columna y devuelve columna; exige controlar coincidencia exacta o aproximada. BUSCARX en versiones modernas mejora flexibilidad.`,
          `ÍNDICE y COINCIDIR permiten búsquedas robustas. Calc dispone de funciones equivalentes según versión.`,
          `La coincidencia aproximada con tabla sin ordenar produce errores silenciosos. Para códigos se usa exacta.`
        ]},
        { heading: '11. Errores de fórmula', paragraphs: [
          `#DIV/0! indica división por cero; #N/A ausencia; #VALUE! tipo incorrecto; #REF! referencia inválida; #NAME? nombre no reconocido; #### puede indicar columna estrecha o fecha negativa.`,
          `SI.ERROR puede presentar alternativa, pero ocultar todos los errores sin investigar es mala práctica.`,
          `Las herramientas de precedentes, dependientes y evaluación ayudan a localizar causa.`
        ]},
        { heading: '12. Formato de celdas', paragraphs: [
          `Número, moneda, contabilidad, porcentaje, fecha, hora, texto y personalizado controlan presentación.`,
          `Aplicar porcentaje a 0,15 muestra 15 %. Escribir 15 y aplicar porcentaje muestra 1500 %, salvo corrección.`,
          `Los decimales visibles no cambian valor almacenado; para cálculo redondeado se usa función cuando legalmente necesario.`
        ]},
        { heading: '13. Formato condicional', paragraphs: [
          `Aplica apariencia según reglas: vencidos, duplicados, valores altos, escalas o fórmulas.`,
          `No cambia datos ni filtra; solo presentación. Varias reglas tienen prioridad y ámbito.`,
          `El color no debe ser único medio de significado por accesibilidad. Se añade texto o símbolo.`
        ]},
        { heading: '14. Ordenar', paragraphs: [
          `Reorganiza filas según una o varias columnas, ascendente, descendente o lista personalizada.`,
          `Debe seleccionarse todo el conjunto o usar tabla para no separar datos de una misma fila. Se identifica encabezado.`,
          `Ordenar altera orden, no contenido. Conviene conservar identificador único y copia si el orden original importa.`
        ]},
        { heading: '15. Filtrar', paragraphs: [
          `Muestra filas que cumplen condiciones y oculta otras temporalmente. No borra.`,
          `Puede filtrar texto, números, fechas, color y múltiples columnas. El icono indica filtro activo.`,
          `Los cálculos normales pueden incluir filas ocultas; SUBTOTAL puede operar con visibles según función.`
        ]},
        { heading: '16. Tablas y rangos con nombre', paragraphs: [
          `Una tabla de Excel estructura datos, añade filtros, encabezados y referencias estructuradas. Calc utiliza rangos de base de datos y funciones similares.`,
          `Los rangos con nombre hacen fórmulas legibles y pueden ser absolutos o dinámicos.`,
          `Los nombres deben ser únicos y sin ambigüedad. Al ampliar datos se comprueba que fórmulas, gráficos y validaciones incluyan nuevas filas.`
        ]},
        { heading: '17. Validación de datos', paragraphs: [
          `Restringe entrada a lista, rango numérico, fecha, longitud o fórmula. Puede mostrar mensaje y alerta.`,
          `Reduce errores, pero pegar datos puede eludir según aplicación. Debe combinarse con revisión.`,
          `Las listas desplegables deben tener valores controlados para evitar variantes como Pendiente, pendiente o Pte.`
        ]},
        { heading: '18. Gráficos', paragraphs: [
          `Representan rangos mediante columnas, barras, líneas, sectores, dispersión u otros. El tipo depende de pregunta: evolución, comparación, composición o relación.`,
          `Un gráfico incluye título, ejes, series, leyenda y etiquetas. Debe evitar distorsión y exceso de categorías.`,
          `Se actualiza con datos de origen si rango lo incluye. No sustituye tabla cuando se necesitan cifras exactas.`
        ]},
        { heading: '19. Tablas dinámicas', paragraphs: [
          `Resumen y agrupan grandes listas por filas, columnas, filtros y valores sin alterar origen.`,
          `Requieren datos tabulares con encabezados, sin filas vacías ni totales intermedios. Se actualizan al cambiar origen.`,
          `Permiten contar, sumar y segmentar. No deben confundirse con tabla normal ni gráfico dinámico.`
        ]},
        { heading: '20. Protección', paragraphs: [
          `Puede proteger celdas, hoja, estructura o archivo. Bloquear celdas solo surte efecto al proteger hoja.`,
          `Una contraseña de edición no equivale siempre a cifrado robusto. Para confidencialidad se usa protección corporativa adecuada.`,
          `La protección evita cambios accidentales, no sustituye permisos del sistema ni control de acceso.`
        ]},
        { heading: '21. Impresión', paragraphs: [
          `Se define área, orientación, tamaño, márgenes, escala, saltos, títulos repetidos, encabezado y pie.`,
          `La vista previa detecta columnas cortadas o páginas vacías. Ajustar a una página puede hacer texto ilegible.`,
          `Se puede imprimir selección, hojas activas o libro. Deben respetarse filtros y filas ocultas.`
        ]},
        { heading: '22. Importación, CSV y compatibilidad', paragraphs: [
          `CSV es texto delimitado sin fórmulas, formatos, varias hojas ni gráficos. Al abrir debe elegirse codificación, delimitador y tipos.`,
          `Los códigos con ceros y fechas pueden transformarse. La importación debe definir columnas como texto cuando proceda.`,
          `Guardar libro complejo como CSV conserva solo hoja activa y valores; se advierte pérdida. ODS/XLSX pueden sufrir cambios de funciones.`
        ]},
        { heading: '23. Buenas prácticas administrativas', paragraphs: [
          `Separar datos de fórmulas, usar encabezados, una fila por registro, identificador único y evitar celdas combinadas en tablas de datos.`,
          `Documentar origen, fecha, unidades y responsable. Revisar totales con cálculo alternativo y bloquear fórmulas.`,
          `Minimizar datos personales, guardar en ubicación autorizada, controlar versiones y exportar informe final cuando corresponda.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `A1 relativa; $A$1 absoluta; $A1 y A$1 mixtas.`,
          `Ordenar reorganiza; filtrar oculta; formato condicional resalta; validación restringe.`,
          `SUMA, PROMEDIO, MAX, MIN, CONTAR, CONTARA, SI y condicionales son básicas.`,
          `CSV solo texto tabular; ODS/XLSX conservan estructura con compatibilidad revisable.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `Formato no cambia necesariamente valor. Filtrar no borra.`,
          `Ordenar una sola columna puede desalinear registros.`,
          `#DIV/0! no se arregla ocultándolo sin revisar.`,
          `Una referencia absoluta fija fila y columna; la mixta solo una.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué ocurre al copiar una fórmula con cada tipo de referencia?`,
          `2. ¿Qué diferencias hay entre ordenar, filtrar, validar y formato condicional?`,
          `3. ¿Cómo preparar una tabla administrativa fiable desde importación hasta impresión?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Practica con una lista: importa CSV, corrige tipos, formula, copia, filtra, ordena, valida, grafica e imprime.`,
          `Antes de responder una fórmula, identifica valor real, referencias y orden de operaciones. En práctico explica controles para no desalinear datos.`
        ]}
      ],
      tree: `EXCEL / CALC
├─ Estructura
│  ├─ Libro / hoja
│  ├─ Celda / rango
│  └─ Tipos de datos
├─ Cálculo
│  ├─ Fórmulas y operadores
│  ├─ Referencias
│  ├─ Funciones
│  └─ Errores
├─ Datos
│  ├─ Ordenar / filtrar
│  ├─ Validación
│  ├─ Tablas / dinámicas
│  └─ Protección
└─ Salida
   ├─ Gráficos
   ├─ Impresión
   └─ CSV / ODS / XLSX`,
      reviewTable: [
        ['Concepto', 'Regla', 'Ejemplo'],
        ['Relativa', 'Cambia al copiar', 'A1'],
        ['Absoluta', 'Fija fila y columna', '$A$1'],
        ['Mixta', 'Fija una dimensión', '$A1 / A$1'],
        ['Ordenar', 'Reorganiza filas', 'Seleccionar conjunto'],
        ['Filtrar', 'Oculta temporalmente', 'No borra'],
        ['Validación', 'Limita entrada', 'Lista/fecha/número'],
        ['CSV', 'Texto delimitado', 'Sin formato ni hojas'],
        ['Error', 'Indica problema de cálculo', '#DIV/0!, #REF!, #N/A']
      ]
    },
    19: {
      sources: [SOURCES.windows, SOURCES.hardware, SOURCES.usb],
      articleCoverage: [
        ['Arquitectura básica', 'CPU, placa base, RAM, almacenamiento, gráficos, fuente, puertos y sistema operativo.'],
        ['Periféricos', 'Entrada, salida, entrada/salida, conexión, controladores y mantenimiento.'],
        ['Dispositivos del programa', 'Impresoras, escáneres, HDD/SSD externos, CD/DVD y memorias USB.'],
        ['Seguridad y ergonomía', 'Actualización, malware, copias, cifrado, expulsión, postura y uso administrativo.']
      ],
      sections: [
        { heading: 'Resumen orientado al aprobado', paragraphs: [
          `Un ordenador personal combina hardware, software, datos y usuarios. El hardware incluye componentes físicos internos y periféricos; el software incluye sistema operativo, controladores y aplicaciones.`,
          `El tema exige identificar CPU, RAM, almacenamiento, placa, fuente, gráficos, red y puertos; clasificar periféricos; y conocer impresoras, escáneres, discos externos, lectores/grabadores ópticos y USB, con seguridad y uso administrativo.`
        ]},
        { heading: 'Rigor normativo', paragraphs: [
          `Las especificaciones evolucionan. Se estudian conceptos estables y documentación oficial de dispositivos y Windows, no modelos comerciales concretos.`,
          `Las unidades pueden expresarse en base decimal o binaria, generando diferencias entre capacidad anunciada y mostrada.`,
          `La seguridad del dispositivo se integra en políticas corporativas. Conectar hardware no autorizado puede comprometer datos y red.`
        ]},
        { heading: '1. Hardware, software y datos', paragraphs: [
          `Hardware son componentes físicos: placa, CPU, memoria, disco, monitor o teclado. Software son instrucciones: sistema operativo, aplicaciones y controladores.`,
          `Los datos son información procesada y almacenada. El firmware es software integrado en dispositivo que controla funciones básicas.`,
          `El sistema operativo administra recursos y ofrece servicios. Una aplicación usa esos servicios para tareas.`
        ]},
        { heading: '2. Placa base', paragraphs: [
          `Es circuito principal que conecta CPU, RAM, almacenamiento, tarjetas, puertos y alimentación. Contiene chipset, ranuras, conectores y firmware UEFI/BIOS.`,
          `El formato y zócalo determinan compatibilidad. Las ranuras PCIe admiten tarjetas; SATA y M.2 conectan almacenamiento.`,
          `Una avería puede afectar a múltiples componentes. La manipulación exige desconexión y protección electrostática.`
        ]},
        { heading: '3. Procesador o CPU', paragraphs: [
          `Ejecuta instrucciones y coordina operaciones. Tiene núcleos, hilos, frecuencia, caché y arquitectura. Más frecuencia no garantiza por sí sola mayor rendimiento.`,
          `La unidad de control dirige y la aritmético-lógica opera. Los registros y cachés son memoria muy rápida interna.`,
          `La carga se observa en administrador de tareas. Procesos intensivos pueden ralentizar, pero terminar procesos del sistema sin criterio causa fallos.`
        ]},
        { heading: '4. Memoria RAM', paragraphs: [
          `Almacena temporalmente programas y datos en uso. Es volátil: pierde contenido al apagar.`,
          `Mayor capacidad permite más tareas simultáneas; velocidad y canales influyen. Si falta, el sistema usa memoria virtual en disco, más lenta.`,
          `RAM no es almacenamiento permanente ni se confunde con capacidad de disco. Reiniciar libera estado, no aumenta físicamente memoria.`
        ]},
        { heading: '5. Almacenamiento interno HDD y SSD', paragraphs: [
          `HDD usa platos magnéticos y partes móviles; ofrece capacidad a menor coste pero es más lento y sensible a golpes.`,
          `SSD usa memoria flash, es rápido, silencioso y resistente mecánicamente. Puede usar SATA o NVMe/M.2.`,
          `Ambos conservan datos sin energía. La eliminación lógica puede no borrar de forma irrecuperable; para baja se aplica borrado seguro o destrucción.`
        ]},
        { heading: '6. Tarjeta gráfica y pantalla', paragraphs: [
          `La GPU procesa gráficos y puede estar integrada o dedicada. En oficina la integrada suele bastar.`,
          `El monitor se caracteriza por tamaño, resolución, frecuencia, panel y conexiones. Resolución es número de píxeles, no tamaño físico.`,
          `La escala de Windows ajusta legibilidad. Una resolución incorrecta puede producir imagen borrosa o elementos fuera de pantalla.`
        ]},
        { heading: '7. Fuente de alimentación y refrigeración', paragraphs: [
          `La fuente convierte corriente y suministra tensiones. Potencia y calidad deben adecuarse. Un SAI puede proteger y dar autonomía corta.`,
          `Ventiladores y disipadores extraen calor. Polvo y obstrucción elevan temperatura y ruido.`,
          `No se abre una fuente por riesgo eléctrico. Las incidencias se derivan a personal autorizado.`
        ]},
        { heading: '8. Puertos y conexiones', paragraphs: [
          `USB conecta teclado, memoria, impresora y otros y puede transmitir datos y energía. Existen conectores A, C y distintas velocidades.`,
          `HDMI o DisplayPort llevan vídeo y audio; Ethernet conecta red; audio conecta auriculares y micrófono.`,
          `La forma del conector no garantiza velocidad o función. USB-C puede admitir capacidades diferentes.`
        ]},
        { heading: '9. Red y comunicaciones', paragraphs: [
          `La tarjeta de red puede ser Ethernet o Wi-Fi. Una dirección IP identifica interfaz en red y MAC hardware lógico de enlace.`,
          `El router encamina; switch conecta equipos; punto de acceso ofrece Wi-Fi.`,
          `En Administración se usan redes segmentadas, autenticación y políticas. No se conecta un equipo personal sin autorización.`
        ]},
        { heading: '10. Periféricos: clasificación', paragraphs: [
          `Entrada introducen datos: teclado, ratón, escáner, micrófono, cámara. Salida presentan: monitor, impresora, altavoces.`,
          `Entrada/salida realizan ambas: pantalla táctil, multifunción, almacenamiento externo y red.`,
          `La clasificación depende de función respecto al ordenador, no de que dispositivo tenga botones o pantalla.`
        ]},
        { heading: '11. Teclado y ratón', paragraphs: [
          `El teclado introduce texto y comandos; incluye alfanumérico, función, control, navegación y numérico. Atajos combinan teclas.`,
          `El ratón permite apuntar, seleccionar, arrastrar y menú contextual. Puede ser óptico, cableado o inalámbrico.`,
          `La ergonomía exige postura neutra, apoyo y pausas. Las pilas y receptores inalámbricos deben controlarse.`
        ]},
        { heading: '12. Impresoras', paragraphs: [
          `Láser usa tóner y es eficiente para volumen; inyección usa tinta y ofrece color/foto; térmica usa calor para tickets o etiquetas; matricial impacta cinta y puede usar papel continuo.`,
          `La multifunción combina impresión, escaneo, copia y a veces fax. Puede ser local o de red.`,
          `Conceptos: ppm, resolución dpi, dúplex, bandejas, cola, controlador y consumibles. La calidad depende de documento y dispositivo.`
        ]},
        { heading: '13. Funcionamiento y seguridad de impresión', paragraphs: [
          `El controlador traduce trabajo al lenguaje de impresora. El spooler gestiona cola. Una impresora predeterminada se elige automáticamente.`,
          `Atascos se resuelven siguiendo instrucciones y sin forzar. Tóner y tinta se manipulan adecuadamente.`,
          `Para documentos sensibles se usa impresión segura con PIN o recogida inmediata. El disco interno de multifunciones puede almacenar trabajos y debe gestionarse al retirar equipo.`
        ]},
        { heading: '14. Escáneres', paragraphs: [
          `El escáner plano sirve para originales individuales; el alimentador automático procesa lotes; el dúplex captura ambas caras.`,
          `La resolución se mide en dpi. Más resolución aumenta detalle y tamaño, pero no mejora un original borroso. Color, grises o blanco/negro se eligen por contenido.`,
          `Los formatos incluyen PDF, TIFF, JPEG y PNG. El OCR reconoce caracteres, pero puede cometer errores en sellos, tablas o baja calidad.`
        ]},
        { heading: '15. Discos duros externos', paragraphs: [
          `Pueden ser HDD o SSD conectados por USB u otra interfaz. Sirven para transporte o copias autorizadas.`,
          `El formato de sistema de archivos condiciona compatibilidad, permisos y tamaño máximo. NTFS ofrece permisos en Windows; exFAT amplia compatibilidad.`,
          `Deben cifrarse si contienen datos, inventariarse, expulsarse y almacenarse físicamente. Una copia externa conectada permanentemente puede ser afectada por ransomware.`
        ]},
        { heading: '16. Lectores y grabadores CD/DVD', paragraphs: [
          `Los discos ópticos usan láser. CD tiene menor capacidad que DVD; existen solo lectura, grabables una vez y regrabables.`,
          `Grabar crea sesión y puede cerrar disco para compatibilidad. No todos los formatos son compatibles con todos lectores.`,
          `Tienen menor uso y velocidad. Su longevidad depende de calidad y conservación; no deben ser único archivo de documentos críticos.`
        ]},
        { heading: '17. Memorias USB', paragraphs: [
          `Son almacenamiento flash portátil, sin partes móviles. La capacidad, velocidad y calidad varían.`,
          `Pueden propagar malware, perderse o falsificar capacidad. Solo se usan dispositivos corporativos, analizados y cifrados.`,
          `Se expulsan antes de retirar para completar escritura. La retirada durante copia puede corromper archivos o sistema.`
        ]},
        { heading: '18. Controladores o drivers', paragraphs: [
          `Permiten que sistema se comunique con hardware. Windows instala muchos automáticamente y puede actualizar desde Windows Update o fabricante.`,
          `Un controlador incorrecto causa fallo, baja funcionalidad o inestabilidad. Se comprueba Administrador de dispositivos.`,
          `No se descargan controladores de páginas no oficiales. Puede revertirse una actualización problemática según política.`
        ]},
        { heading: '19. Plug and Play y administrador de dispositivos', paragraphs: [
          `Plug and Play detecta hardware, asigna recursos e instala controlador. No significa que todo sea seguro o compatible.`,
          `Administrador de dispositivos muestra categorías, estado, controlador y conflictos. Un símbolo advierte problema.`,
          `Deshabilitar no desinstala físicamente; desinstalar dispositivo puede quitar controlador y requerir reinicio.`
        ]},
        { heading: '20. Copias de seguridad', paragraphs: [
          `Una copia permite restaurar ante pérdida, avería o ataque. La regla 3-2-1 recomienda tres copias, dos soportes y una fuera, adaptada a organización.`,
          `Sincronización replica cambios, incluida eliminación, y no siempre es copia histórica.`,
          `Las copias se prueban, cifran y controlan. El usuario no debe crear sistemas paralelos fuera de política.`
        ]},
        { heading: '21. Malware y protección', paragraphs: [
          `Virus, gusanos, troyanos, ransomware y spyware afectan dispositivos. Vectores incluyen USB, correo, descargas y vulnerabilidades.`,
          `Se mantienen actualizaciones, antivirus, mínimos privilegios, copias y formación. Una memoria se analiza antes de abrir.`,
          `Ante indicios se desconecta según protocolo y avisa; no se intenta ocultar ni seguir trabajando con datos.`
        ]},
        { heading: '22. Ergonomía y eficiencia', paragraphs: [
          `Pantalla a distancia y altura adecuadas, silla regulada, pies apoyados, teclado y ratón cercanos, iluminación sin reflejos y pausas.`,
          `Se alternan tareas y ajusta tamaño de texto. La fatiga visual se reduce mirando a distancia y parpadeando.`,
          `Los cables se ordenan para evitar tropiezos y no se sobrecargan enchufes.`
        ]},
        { heading: '23. Inventario, mantenimiento y retirada', paragraphs: [
          `Los equipos se inventarían con identificador, usuario, ubicación y características. Se registran averías y cambios.`,
          `El mantenimiento incluye limpieza, actualización, revisión de consumibles y capacidad. No se manipulan componentes sin autorización.`,
          `Antes de reutilizar o retirar almacenamiento se borran datos de forma segura o destruye soporte, documentando cadena.`
        ]},
        { heading: 'Síntesis de repaso rápido', paragraphs: [
          `CPU procesa; RAM temporal; HDD/SSD permanente; placa conecta; fuente alimenta.`,
          `Entrada: teclado/escáner; salida: monitor/impresora; ambos: USB/multifunción.`,
          `HDD mecánico; SSD flash; óptico CD/DVD; USB flash portátil.`,
          `Driver comunica sistema y hardware; expulsar evita corrupción; cifrar protege pérdida.`
        ]},
        { heading: 'Opo-Test: puntos calientes', paragraphs: [
          `RAM no conserva al apagar. SSD no es memoria RAM.`,
          `Una pantalla táctil es entrada y salida. Una multifunción también.`,
          `Mayor dpi aumenta detalle y tamaño, no garantiza legibilidad del original.`,
          `Sincronizar no es siempre copia; formatear o borrar normal no siempre elimina irrecuperablemente.`
        ]},
        { heading: 'Tres preguntas de retención activa', paragraphs: [
          `1. ¿Qué función cumplen placa, CPU, RAM, almacenamiento, fuente y GPU?`,
          `2. ¿Cómo se clasifican y comparan impresora, escáner, HDD/SSD externo, CD/DVD y USB?`,
          `3. ¿Qué medidas de seguridad, copia, cifrado, expulsión y retirada requiere cada soporte?`
        ]},
        { heading: 'Estrategia de examen', paragraphs: [
          `Relaciona cada componente con función y característica diferencial. Evita respuestas basadas solo en aspecto físico.`,
          `En supuesto de oficina añade siempre autorización, protección de datos, copia, control de calidad, malware y eliminación segura.`
        ]}
      ],
      tree: `ORDENADOR PERSONAL
├─ Componentes internos
│  ├─ Placa base
│  ├─ CPU
│  ├─ RAM
│  ├─ HDD / SSD
│  ├─ GPU
│  └─ Fuente y refrigeración
├─ Periféricos
│  ├─ Entrada
│  ├─ Salida
│  └─ Entrada/salida
├─ Dispositivos del programa
│  ├─ Impresoras
│  ├─ Escáneres
│  ├─ Discos externos
│  ├─ CD/DVD
│  └─ USB
└─ Seguridad
   ├─ Drivers y actualizaciones
   ├─ Copias y cifrado
   └─ Borrado y retirada`,
      reviewTable: [
        ['Elemento', 'Función', 'Clave'],
        ['CPU', 'Ejecuta instrucciones', 'Núcleos/caché'],
        ['RAM', 'Trabajo temporal', 'Volátil'],
        ['HDD', 'Almacenamiento magnético', 'Partes móviles'],
        ['SSD', 'Almacenamiento flash', 'Más rápido'],
        ['Impresora', 'Salida', 'Láser/tinta/térmica'],
        ['Escáner', 'Entrada', 'DPI/OCR'],
        ['Multifunción', 'Entrada y salida', 'Imprime y escanea'],
        ['USB', 'Almacenamiento portátil', 'Expulsión/cifrado']
      ]
    }
  };

  const updated = [];
  for (const [numberText, definition] of Object.entries(THEMES)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    theme.officialTitle ||= theme.title;
    theme.sections = definition.sections;
    theme.tree = definition.tree;
    theme.reviewTable = definition.reviewTable;
    theme.articleCoverage = definition.articleCoverage.map(([range, focus]) => ({ range, focus }));
    theme.retentionQuestions = definition.sections.find(section => section.heading === 'Tres preguntas de retención activa')?.paragraphs || [];
    theme.officialSources = definition.sources.map(source => ({ ...source, reviewedAt: REVIEW_DATE }));
    theme.theoryStatus = {
      version: 'v0.86.0',
      reviewedAt: REVIEW_DATE,
      sourcePolicy: 'Documentación oficial de Microsoft y LibreOffice',
      autonomous: true,
      fixedStudyStructure: true,
      articleByArticle: false,
      noOffSyllabusFiller: true,
      block: 'La Puebla 16-19'
    };
    updated.push(number);
  }

  ope.theoryProgramme ||= {};
  const previous = ope.theoryProgramme.v86 || { completedThemes: [] };
  const completedThemes = [...new Set([...(previous.completedThemes || []), ...updated])].sort((a, b) => a - b);
  ope.theoryProgramme.v86 = {
    ...previous,
    version: 'v0.86.0',
    reviewedAt: REVIEW_DATE,
    objective: 'OpoWeb como única fuente teórica',
    completedThemes,
    pendingThemes: Array.from({ length: 19 }, (_, index) => index + 1).filter(number => !completedThemes.includes(number)),
    status: completedThemes.length === 19 ? 'APTO' : 'EN RECONSTRUCCIÓN'
  };

  window.OPOWEB_PUEBLA_TEORIA_V86_BLOQUE4 = {
    version: 'v0.86.0',
    reviewedAt: REVIEW_DATE,
    themes: updated,
    autonomous: true,
    completedThemes,
    pendingThemes: ope.theoryProgramme.v86.pendingThemes,
    status: ope.theoryProgramme.v86.status
  };
})();
