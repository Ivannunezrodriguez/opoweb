window.OPOWEB_NORMAS = window.OPOWEB_NORMAS || {};
window.OPOWEB_NORMAS.informatica = {
  id: 'informatica-ofimatica',
  titulo: 'Informática y ofimática para Auxiliar Administrativo',
  bloques: {
    windows: {
      titulo: 'Microsoft Windows: entorno, archivos, unidades, impresión y digitalización',
      apartados: [
        { h: 'Sistema operativo y escritorio', p: 'Windows gestiona hardware, software, usuarios, archivos, carpetas, periféricos y red. El escritorio contiene iconos, accesos directos, barra de tareas, menú Inicio, búsqueda, área de notificación y ventanas abiertas.' },
        { h: 'Ventanas y controles', p: 'Una ventana permite trabajar con una aplicación o carpeta. Elementos: barra de título, minimizar, maximizar/restaurar, cerrar, barra de desplazamiento y zona de contenido. Operaciones: mover, redimensionar, cerrar y alternar con Alt+Tab.' },
        { h: 'Explorador de archivos', p: 'Herramienta para navegar por unidades, carpetas y archivos. Permite crear carpetas, copiar, cortar, pegar, mover, eliminar, buscar, ordenar, agrupar, cambiar vista y consultar propiedades.' },
        { h: 'Archivos', p: 'Un archivo es información guardada con nombre, extensión, ubicación, tamaño, fechas y atributos. Extensiones habituales: PDF, DOCX, ODT, XLSX, ODS, CSV, TXT, JPG, PNG y ZIP.' },
        { h: 'Carpetas y rutas', p: 'Una carpeta organiza archivos y subcarpetas. Una ruta indica ubicación exacta. Ruta local: C:\\Usuarios\\Documentos. Ruta de red: \\servidor\\registro\\2026.' },
        { h: 'Operaciones básicas', p: 'Copiar duplica. Cortar y pegar mueve. Eliminar puede enviar a Papelera o borrar directamente según ubicación. Cambiar nombre no debe alterar extensión sin saber el efecto.' },
        { h: 'Unidades', p: 'Unidad local: disco interno. Unidad externa: USB o disco. Unidad de red: recurso compartido con permisos. En administración, las unidades de red suelen ser el lugar correcto para expedientes.' },
        { h: 'Permisos', p: 'Lectura, escritura, modificación y eliminación. Deben aplicarse con mínimo privilegio y respeto a protección de datos.' },
        { h: 'Impresión', p: 'Seleccionar impresora, páginas, copias, orientación, tamaño, color, doble cara, bandeja, escala y vista previa. Revisar cola de impresión y recoger documentos con datos personales.' },
        { h: 'Digitalización', p: 'Convertir papel en documento electrónico. Revisar formato PDF, resolución, orientación, doble cara, OCR si procede, legibilidad, páginas completas, firmas visibles y guardado en expediente correcto.' }
      ]
    },
    internet: {
      titulo: 'Internet, Edge e Internet Explorer',
      apartados: [
        { h: 'Navegador', p: 'Aplicación para acceder a páginas web y sedes electrónicas. Edge es el navegador actual de Microsoft; Internet Explorer es histórico y obsoleto, pero puede aparecer en temario.' },
        { h: 'URL y dominio', p: 'La URL identifica un recurso. Partes: protocolo, dominio, ruta y parámetros. En trámites, comprobar que el dominio sea oficial.' },
        { h: 'HTTP, HTTPS y certificado', p: 'HTTPS cifra la comunicación. El certificado acredita el sitio. Si hay aviso de certificado, no introducir datos sensibles.' },
        { h: 'Pestañas, favoritos e historial', p: 'Las pestañas permiten varias páginas abiertas. Favoritos guarda accesos frecuentes. Historial muestra páginas visitadas y debe tratarse con prudencia en equipos compartidos.' },
        { h: 'Descargas, caché y cookies', p: 'Descargas guarda archivos obtenidos. Caché almacena temporales y puede mostrar versiones antiguas. Cookies conservan sesión o preferencias.' },
        { h: 'Edge', p: 'Incluye perfiles, favoritos, historial, descargas, lector PDF, modo InPrivate, privacidad y seguridad.' },
        { h: 'Internet Explorer', p: 'Conceptos clásicos: opciones de Internet, favoritos, historial, zonas de seguridad, privacidad, certificados y vista de compatibilidad.' },
        { h: 'Sede electrónica', p: 'Comprobar URL oficial, certificado, identificación, firma, registro, justificante, CSV y cierre de sesión.' }
      ]
    },
    word: {
      titulo: 'Word y LibreOffice Writer',
      apartados: [
        { h: 'Función', p: 'Procesadores de texto para crear, editar, revisar, imprimir y exportar documentos administrativos: oficios, informes, actas, certificados, anuncios, requerimientos y resoluciones.' },
        { h: 'Formato de carácter', p: 'Fuente, tamaño, negrita, cursiva, subrayado, color, resaltado, superíndice, subíndice y mayúsculas.' },
        { h: 'Formato de párrafo', p: 'Alineación, sangría, interlineado, espaciado, viñetas, numeración, tabulaciones, bordes y sombreado.' },
        { h: 'Estilos', p: 'Formatos reutilizables para títulos, subtítulos y texto normal. Facilitan coherencia e índices automáticos.' },
        { h: 'Página', p: 'Márgenes, orientación, tamaño, columnas, saltos, encabezados, pies y numeración.' },
        { h: 'Tablas', p: 'Filas, columnas, combinar celdas, bordes, sombreado, alineación y ajuste automático.' },
        { h: 'Revisión', p: 'Ortografía, gramática, búsqueda, reemplazo, comentarios y control de cambios. En versión final deben eliminarse comentarios internos.' },
        { h: 'Plantillas y correspondencia', p: 'Plantillas para modelos corporativos. Combinar correspondencia genera documentos repetidos desde una tabla de datos.' },
        { h: 'PDF', p: 'Exportar a PDF conserva formato. Revisar paginación, firmas, anexos, tablas y metadatos visibles.' }
      ]
    },
    excel: {
      titulo: 'Excel y LibreOffice Calc',
      apartados: [
        { h: 'Estructura', p: 'Libro, hoja, fila, columna, celda y rango. A1 identifica columna A fila 1. A1:D20 es un rango.' },
        { h: 'Datos', p: 'Texto, número, fecha, hora, porcentaje, moneda, fórmula, valor lógico y error.' },
        { h: 'Fórmulas', p: 'Empiezan por igual. Operadores: +, -, *, /, ^ y comparaciones. Usar paréntesis para controlar orden.' },
        { h: 'Funciones', p: 'SUMA, PROMEDIO, MAX, MIN, CONTAR, CONTARA, SI, SUMAR.SI, CONTAR.SI, HOY, AHORA y REDONDEAR.' },
        { h: 'Referencias', p: 'Relativa: A1 cambia al copiar. Absoluta: $A$1 queda fija. Mixtas: $A1 o A$1.' },
        { h: 'Ordenar y filtrar', p: 'Ordenar reorganiza; filtrar oculta temporalmente. Seleccionar toda la tabla antes de ordenar para no descolocar registros.' },
        { h: 'Validación y formato condicional', p: 'Validación limita entradas. Formato condicional resalta vencidos, duplicados o importes según reglas.' },
        { h: 'Impresión', p: 'Área de impresión, orientación, escala, repetir encabezados, márgenes y vista previa.' },
        { h: 'CSV', p: 'Datos separados por coma o punto y coma. Revisar separador, codificación, fechas, decimales y ceros iniciales.' }
      ]
    },
    hardware: {
      titulo: 'Ordenador personal, componentes y periféricos',
      apartados: [
        { h: 'Hardware y software', p: 'Hardware es la parte física. Software son programas y datos. Sistema operativo coordina recursos.' },
        { h: 'CPU', p: 'Procesador que ejecuta instrucciones. Importan núcleos, frecuencia y caché.' },
        { h: 'RAM', p: 'Memoria temporal de trabajo, volátil. Permite ejecutar aplicaciones y trabajar con documentos abiertos.' },
        { h: 'Almacenamiento', p: 'HDD mecánico o SSD electrónico. Conserva datos de forma permanente.' },
        { h: 'Placa, fuente y red', p: 'Placa base conecta componentes. Fuente alimenta el equipo. Tarjeta de red conecta a Internet, servidor e impresoras.' },
        { h: 'Periféricos', p: 'Entrada: teclado, ratón, escáner. Salida: monitor, impresora. Entrada/salida: multifunción, pantalla táctil, USB.' },
        { h: 'Seguridad básica', p: 'Actualizaciones, antivirus, contraseñas, bloqueo de sesión, copias de seguridad y prudencia con adjuntos o USB.' }
      ]
    }
  }
};
