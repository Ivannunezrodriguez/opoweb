(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope?.themes || !ope?.themeTests) return;

  const BANK = {
    37: [
      ['¿Qué objeto de Base almacena directamente registros y campos?', 'Una tabla.', 'Un informe.', 'Una transición.', 'Una diapositiva maestra.', 'Las tablas son los objetos destinados a almacenar datos estructurados.'],
      ['¿Cuál es la finalidad principal de una clave primaria?', 'Identificar de forma única cada registro.', 'Aplicar formato al formulario.', 'Imprimir el informe.', 'Ordenar siempre alfabéticamente.', 'La clave primaria debe identificar de forma única y estable cada fila.'],
      ['¿Qué función cumple una clave foránea?', 'Relacionar un registro con la clave de otra tabla.', 'Cifrar el archivo ODB.', 'Sustituir la copia de seguridad.', 'Crear automáticamente un informe.', 'La clave foránea sustenta relaciones entre tablas.'],
      ['¿Qué diferencia esencial existe entre una clave y un índice?', 'El índice facilita búsquedas; una clave identifica o relaciona registros.', 'Son siempre exactamente el mismo objeto.', 'El índice almacena formularios.', 'La clave solo sirve para imprimir.', 'Aunque una clave pueda estar indexada, ambos conceptos no son equivalentes.'],
      ['¿Cómo se modela normalmente una relación muchos a muchos?', 'Mediante una tabla intermedia con referencias a las dos tablas.', 'Duplicando todos los campos en una sola tabla.', 'Con un informe sin fuente.', 'Ocultando las claves primarias.', 'La tabla intermedia transforma la relación N:M en dos relaciones 1:N.'],
      ['¿Qué hace una consulta SELECT?', 'Recupera datos sin modificarlos por sí sola.', 'Elimina todos los registros seleccionados.', 'Cambia siempre la estructura de una tabla.', 'Cierra la conexión.', 'SELECT se utiliza para consultar información.'],
      ['¿Qué diferencia existe entre WHERE y HAVING?', 'WHERE filtra filas antes de agrupar y HAVING filtra grupos.', 'HAVING elimina tablas y WHERE crea formularios.', 'Ambas cláusulas solo imprimen.', 'No existe diferencia.', 'WHERE actúa sobre filas; HAVING sobre resultados agrupados.'],
      ['¿Qué devuelve normalmente un INNER JOIN?', 'Los registros que cumplen la condición de unión en ambas fuentes.', 'Todos los registros sin atender a la relación.', 'Únicamente filas sin coincidencia.', 'Un archivo PDF.', 'INNER JOIN conserva las coincidencias de la unión.'],
      ['Antes de ejecutar una consulta UPDATE o DELETE masiva, ¿qué práctica es correcta?', 'Probar el criterio con una consulta de selección y realizar copia de seguridad.', 'Ocultar la tabla y ejecutar sin revisar.', 'Eliminar las claves primarias.', 'Convertir la base a PDF.', 'Las consultas de acción pueden afectar muchas filas y requieren verificación previa.'],
      ['¿Qué es un subformulario?', 'Un formulario que muestra registros relacionados con el registro principal.', 'Una copia de seguridad del motor.', 'Un índice único.', 'Una consulta que siempre elimina.', 'Los subformularios se utilizan habitualmente en relaciones maestro-detalle.'],
      ['¿Un formulario sustituye a los permisos del sistema gestor?', 'No; facilita la entrada, pero no es una barrera completa de seguridad.', 'Sí, siempre bloquea el acceso directo.', 'Sí, cifra automáticamente todas las tablas.', 'Solo cuando contiene un botón.', 'La seguridad real debe aplicarse mediante permisos, autenticación y reglas del gestor.'],
      ['¿Qué función tiene normalmente un informe?', 'Presentar datos de una tabla o consulta para lectura, impresión o exportación.', 'Almacenar obligatoriamente una copia histórica inmutable.', 'Sustituir todas las relaciones.', 'Crear contraseñas de usuario.', 'El informe presenta datos procedentes de una fuente.'],
      ['¿Qué riesgo existe al importar una hoja de Calc sin revisar los tipos?', 'Que fechas, números o códigos se interpreten con tipos incorrectos.', 'Que todos los datos se cifren automáticamente.', 'Que desaparezca el archivo ODB.', 'Que se cree una diapositiva.', 'La importación puede inferir tipos inadecuados y generar incoherencias.'],
      ['Si Base se conecta a un servidor externo, ¿basta con copiar el ODB para respaldar los datos?', 'No; también debe respaldarse el motor o servidor donde residen los datos.', 'Sí, el ODB siempre contiene todo.', 'Sí, salvo que existan formularios.', 'Solo si el informe tiene una página.', 'El ODB puede contener únicamente definición de objetos y parámetros de conexión.'],
      ['¿Qué significa integridad referencial?', 'Que las referencias entre tablas respetan la existencia y reglas de los registros relacionados.', 'Que todos los campos son texto.', 'Que los informes tienen el mismo color.', 'Que una consulta no puede ordenar.', 'La integridad referencial evita relaciones huérfanas o incoherentes.'],
      ['¿Qué efecto puede tener una eliminación en cascada?', 'Eliminar registros relacionados de forma automática según la relación.', 'Crear una copia de seguridad.', 'Convertir claves en índices no únicos.', 'Abrir un formulario.', 'Las cascadas propagan operaciones y deben configurarse con cautela.'],
      ['¿Qué ventaja aporta una transacción?', 'Permite confirmar o revertir un conjunto de operaciones cuando el motor lo soporta.', 'Convierte automáticamente el ODB en PDF.', 'Sustituye a los permisos.', 'Impide cualquier consulta SELECT.', 'Las transacciones ayudan a mantener consistencia ante operaciones relacionadas.'],
      ['¿Qué requisito debe cumplir una copia de seguridad fiable?', 'Debe poder restaurarse y comprobarse mediante una prueba controlada.', 'Basta con que exista un archivo con nombre copia.', 'Debe guardarse únicamente en la misma carpeta.', 'No debe incluir documentación.', 'Una copia no verificada puede resultar inutilizable.']
    ],
    38: [
      ['¿Cuál es el formato nativo editable de LibreOffice Impress?', 'ODP.', 'ODS.', 'ODT.', 'CSV.', 'ODP es OpenDocument Presentation.'],
      ['¿Qué diferencia existe entre una diapositiva maestra y un diseño?', 'La maestra define elementos y estilos comunes; el diseño distribuye marcadores de posición.', 'Son siempre el mismo objeto.', 'El diseño contiene las notas del orador.', 'La maestra solo cambia el zoom.', 'Maestra y diseño cumplen funciones distintas aunque trabajen conjuntamente.'],
      ['¿Qué es una transición?', 'Un efecto que se produce al pasar de una diapositiva a otra.', 'Un efecto aplicado únicamente a una palabra.', 'Una copia de seguridad.', 'Una relación entre tablas.', 'Las transiciones actúan entre diapositivas.'],
      ['¿Qué es una animación en Impress?', 'Un efecto aplicado a un objeto dentro de una diapositiva.', 'El formato nativo del archivo.', 'Una vista de impresión.', 'Un controlador de base de datos.', 'Las animaciones afectan a objetos y tienen orden, inicio y duración.'],
      ['¿Qué ocurre al ocultar una diapositiva?', 'Se omite en la presentación ordinaria, pero permanece en el archivo.', 'Se elimina definitivamente.', 'Se cifra.', 'Se convierte en nota.', 'Ocultar no borra ni protege la diapositiva.'],
      ['¿Para qué sirve la vista Clasificador de diapositivas?', 'Para ver miniaturas y reorganizar o aplicar operaciones a varias diapositivas.', 'Para editar consultas SQL.', 'Para crear claves primarias.', 'Para instalar fuentes.', 'El Clasificador facilita el trabajo global con la secuencia.'],
      ['¿Qué ventaja tienen los marcadores de posición?', 'Mantienen una estructura vinculada al diseño y a los estilos de presentación.', 'Impiden introducir texto.', 'Eliminan la necesidad de guardar.', 'Convierten el archivo en vídeo.', 'Los marcadores ayudan a conservar consistencia.'],
      ['¿Qué hace la opción Agrupar sobre varios objetos?', 'Permite tratarlos temporalmente como un conjunto.', 'Los convierte en una única imagen irreversible.', 'Los elimina.', 'Los exporta a Base.', 'Un grupo puede moverse o modificarse conjuntamente y luego desagruparse.'],
      ['¿Qué diferencia existe entre alinear y distribuir?', 'Alinear coloca respecto a un eje; distribuir iguala espacios entre varios objetos.', 'Alinear elimina objetos y distribuir los duplica.', 'Son siempre idénticos.', 'Ambos crean transiciones.', 'Son operaciones distintas de disposición.'],
      ['¿Qué riesgo tiene enlazar una imagen externa?', 'El enlace puede romperse al mover o compartir la presentación.', 'La imagen se convierte siempre en vídeo.', 'El archivo ODP se cifra.', 'La diapositiva se oculta.', 'Los recursos enlazados dependen de su ruta y disponibilidad.'],
      ['¿Guardar como PPTX garantiza una reproducción idéntica?', 'No; deben revisarse fuentes, animaciones, multimedia y maquetación.', 'Sí, siempre.', 'Solo cambia el nombre.', 'Sí, porque PPTX es igual que ODP.', 'La compatibilidad entre formatos no es absoluta.'],
      ['¿Qué sucede al exportar una presentación a PDF?', 'Se genera una salida estática que no conserva toda la interactividad.', 'Se mantiene siempre cada animación.', 'Se elimina el original ODP.', 'Se crea una base de datos.', 'PDF es adecuado para distribución estática.'],
      ['¿Para qué sirven las notas del orador?', 'Para añadir información de apoyo a la persona que presenta.', 'Para ocultar datos de forma segura.', 'Para crear una transición.', 'Para reemplazar la diapositiva maestra.', 'Las notas apoyan la exposición y deben revisarse antes de distribuir.'],
      ['¿Qué ofrece la consola del presentador en una segunda pantalla?', 'Notas, tiempo, diapositiva actual y vista siguiente, según configuración.', 'Solo la lista de impresoras.', 'Consultas SQL.', 'La clave del archivo.', 'La consola facilita la exposición con dos pantallas.'],
      ['¿Qué es una presentación personalizada?', 'Un recorrido con un subconjunto u orden específico de diapositivas.', 'Una plantilla que elimina las demás diapositivas.', 'Un informe de Base.', 'Un formato de imagen.', 'Permite adaptar el recorrido sin duplicar necesariamente el archivo.'],
      ['¿Qué debe comprobarse al usar audio o vídeo?', 'Formato, códec, ruta, volumen y reproducción en el equipo de destino.', 'Únicamente el color de fondo.', 'La clave primaria de la diapositiva.', 'Solo el nombre del archivo.', 'La multimedia depende del entorno y debe probarse.'],
      ['¿Qué salida permite imprimir varias diapositivas por página?', 'Los folletos.', 'La vista Normal.', 'La diapositiva maestra.', 'El panel de animación.', 'Los folletos reúnen varias diapositivas en cada hoja.'],
      ['Antes de distribuir un archivo editable, ¿qué debe revisarse?', 'Notas, diapositivas ocultas, metadatos, enlaces y objetos fuera del área visible.', 'Solo la primera diapositiva.', 'Únicamente la transición final.', 'Nada, porque ODP elimina información interna.', 'El archivo editable puede contener datos no visibles durante la proyección.']
    ]
  };

  const positions = [1, 2, 0, 3];
  const added = {};
  for (const [numberText, rows] of Object.entries(BANK)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;
    const existing = Array.isArray(ope.themeTests[theme.id]) ? ope.themeTests[theme.id] : [];
    const ids = new Set(existing.map(question => question.id));
    let count = 0;
    for (let index = 0; existing.length < 30 && index < rows.length; index += 1) {
      const [stem, correct, wrong1, wrong2, wrong3, why] = rows[index];
      const correctIndex = positions[index % positions.length];
      const texts = [wrong1, wrong2, wrong3];
      texts.splice(correctIndex, 0, correct);
      const question = {
        id: `dip-v87-t${number}-b7-q${index + 1}`,
        text: stem,
        options: texts.map((text, optionIndex) => ({ letter: 'ABCD'[optionIndex], text })),
        answer: 'ABCD'[correctIndex],
        justification: why
      };
      if (ids.has(question.id)) continue;
      existing.push(question);
      ids.add(question.id);
      count += 1;
    }
    ope.themeTests[theme.id] = existing;
    added[number] = count;
  }

  window.OPOWEB_DIPUTACION_THEORY_V87_QUESTIONS_B7 = {
    addedTheme37: added[37] || 0,
    addedTheme38: added[38] || 0,
    reviewedAt: '2026-07-16'
  };
})();
