(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;
  const ope = data.oposiciones.find(o => o.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const normalize = value => String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ').trim();
  const byNumber = number => ope.themes.find(theme => Number(theme.number) === Number(number));
  const Q = (text, correct, wrong, justification, difficulty = 'media') => ({ text, correct, wrong, justification, difficulty });

  function buildQuestion(theme, item, index) {
    const raw = [item.correct, ...item.wrong];
    const shift = (Number(theme.number) + index + 1) % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `${theme.id}-v40-q${index + 1}`,
      text: item.text,
      options: ordered.map((text, position) => ({ letter: 'ABCD'[position], text })),
      answer: 'ABCD'[ordered.indexOf(item.correct)],
      justification: item.justification,
      difficulty: item.difficulty
    };
  }

  const additions = {
    2: [
      Q('Una persona presenta electrónicamente un escrito en día inhábil. A efectos del cómputo del plazo de la Administración, se considera presentado:', 'En la primera hora del primer día hábil siguiente, salvo norma que permita recepción en día inhábil', ['En el día hábil anterior', 'Diez días después', 'Solo cuando un empleado lo abra'], 'Artículo 31.2 de la Ley 39/2015.', 'alta'),
      Q('¿Qué valor tiene una copia auténtica expedida por una Administración?', 'La misma validez y eficacia que el documento original', ['Solo valor informativo', 'Validez únicamente dentro del órgano que la expide', 'Ningún valor si es electrónica'], 'Artículo 27 de la Ley 39/2015.', 'media'),
      Q('Cuando un documento ya obra en poder de una Administración, la regla general es que la persona interesada:', 'No debe aportarlo de nuevo y puede indicar cuándo y ante qué órgano lo presentó', ['Debe aportarlo siempre en papel', 'Debe pedir una sentencia previa', 'Solo puede sustituirlo por una declaración jurada'], 'Artículo 28 de la Ley 39/2015.', 'media'),
      Q('¿Qué forma permite otorgar representación apud acta electrónicamente?', 'Comparecencia en la sede electrónica correspondiente mediante los sistemas admitidos', ['Correo ordinario sin firma', 'Llamada telefónica al instructor', 'Publicación en un diario oficial'], 'Artículo 6 de la Ley 39/2015.', 'media'),
      Q('Si una solicitud está firmada por varias personas y no designan representante, las actuaciones se entienden con:', 'La persona que figure en primer término', ['La de mayor edad', 'Cualquiera elegida por la Administración sin criterio', 'Todas mediante publicación edictal'], 'Artículo 7 de la Ley 39/2015.', 'media'),
      Q('Un plazo señalado por meses concluye, como regla:', 'El mismo ordinal del mes de vencimiento; si no existe, el último día del mes', ['Siempre treinta días después', 'El primer lunes del mes siguiente', 'El día hábil anterior'], 'Artículo 30.4 de la Ley 39/2015.', 'alta'),
      Q('La ampliación de un plazo administrativo, cuando procede, no puede exceder de:', 'La mitad del plazo inicial', ['El doble del plazo inicial', 'Diez días en todo caso', 'Un mes cualquiera que sea el trámite'], 'Artículo 32.1 de la Ley 39/2015.', 'media'),
      Q('En la tramitación de urgencia se reducen a la mitad los plazos, excepto los relativos a:', 'Presentación de solicitudes y recursos', ['Informes y pruebas', 'Audiencia e información pública', 'Notificaciones y subsanaciones'], 'Artículo 33 de la Ley 39/2015.', 'alta'),
      Q('¿Qué efecto produce el silencio estimatorio?', 'Tiene la consideración de acto administrativo finalizador del procedimiento', ['Solo permite presentar una queja', 'Carece de efecto hasta una resolución judicial', 'Obliga a reiniciar el expediente'], 'Artículo 24.2 de la Ley 39/2015.', 'media'),
      Q('Cuando el silencio es desestimatorio, la Administración:', 'Mantiene la obligación de dictar resolución expresa sin quedar vinculada al sentido negativo', ['Pierde competencia para resolver', 'Solo puede confirmar la desestimación', 'Debe archivar definitivamente'], 'Artículo 24.3.b de la Ley 39/2015.', 'alta')
    ],
    3: [
      Q('Antes de iniciar un procedimiento, ¿pueden adoptarse medidas provisionales?', 'Sí, por urgencia inaplazable y para proteger provisionalmente los intereses implicados, con los requisitos legales', ['No, nunca', 'Solo después de la propuesta de resolución', 'Únicamente por acuerdo judicial'], 'Artículo 56.2 de la Ley 39/2015.', 'alta'),
      Q('La presentación de una denuncia administrativa:', 'No confiere por sí sola la condición de persona interesada', ['Convierte siempre al denunciante en interesado', 'Obliga a imponer una sanción', 'Sustituye el acuerdo de iniciación'], 'Artículo 62.5 de la Ley 39/2015.', 'media'),
      Q('En la fase de prueba, la Administración puede rechazar las propuestas:', 'Cuando sean manifiestamente improcedentes o innecesarias, mediante resolución motivada', ['Libremente y sin motivación', 'Solo si las propone la Administración', 'Nunca'], 'Artículo 77.3 de la Ley 39/2015.', 'media'),
      Q('Salvo disposición expresa en contrario, los informes son:', 'Facultativos y no vinculantes', ['Preceptivos y vinculantes siempre', 'Secretos y orales', 'Equivalentes a la resolución'], 'Artículo 80.1 de la Ley 39/2015.', 'baja'),
      Q('Puede prescindirse del trámite de audiencia cuando:', 'No figuren ni se tengan en cuenta otros hechos, alegaciones o pruebas que los aportados por la persona interesada', ['El órgano quiera acelerar sin motivación', 'Exista siempre informe jurídico', 'La resolución sea desfavorable'], 'Artículo 82.4 de la Ley 39/2015.', 'alta'),
      Q('¿Qué diferencia existe entre desistimiento y renuncia?', 'El desistimiento abandona la solicitud o procedimiento; la renuncia abandona el derecho cuando sea renunciable', ['Son exactamente lo mismo', 'La renuncia solo suspende plazos', 'El desistimiento extingue derechos irrenunciables'], 'Artículos 93 y 94 de la Ley 39/2015.', 'media'),
      Q('En procedimientos iniciados a solicitud, la paralización imputable al interesado permite declarar caducidad tras advertencia y transcurso de:', 'Tres meses', ['Diez días', 'Un mes', 'Seis meses'], 'Artículo 95.1 de la Ley 39/2015.', 'media'),
      Q('La terminación convencional de un procedimiento requiere que el acuerdo:', 'No sea contrario al ordenamiento ni verse sobre materias no susceptibles de transacción', ['Sustituya siempre cualquier resolución', 'Sea secreto y verbal', 'Elimine derechos de terceros sin audiencia'], 'Artículo 86 de la Ley 39/2015.', 'alta'),
      Q('¿Qué medio de ejecución forzosa es adecuado cuando el acto puede realizarlo una persona distinta del obligado?', 'La ejecución subsidiaria', ['La compulsión sobre las personas', 'La revisión de oficio', 'El recurso de reposición'], 'Artículo 102 de la Ley 39/2015.', 'media'),
      Q('Para el recurso extraordinario de revisión basado en causas distintas del error de hecho, el plazo general es:', 'Tres meses desde el conocimiento de los documentos o desde la firmeza de la sentencia', ['Cuatro años en todos los casos', 'Un mes', 'No existe plazo'], 'Artículo 125.2 de la Ley 39/2015.', 'alta')
    ],
    7: [
      Q('Una petición pregunta por opiniones futuras que aún no constan en ningún documento. ¿Es información pública ya existente?', 'No necesariamente; el derecho alcanza contenidos o documentos que obren en poder del sujeto obligado', ['Sí, obliga a crear cualquier informe solicitado', 'Sí, aunque no exista información', 'Solo si la petición es anónima'], 'El derecho de acceso recae sobre información pública existente en poder del sujeto obligado.', 'alta'),
      Q('Si el órgano que recibe la solicitud no posee la información pero conoce al competente, debe:', 'Remitirla al órgano competente e informar a la persona solicitante', ['Archivarla sin comunicación', 'Publicarla aunque no la tenga', 'Convertirla en recurso de alzada'], 'Regla de correcta tramitación del derecho de acceso.', 'media'),
      Q('¿Qué solución es preferente si un documento mezcla información accesible y otra afectada por un límite?', 'Conceder acceso parcial, omitiendo o disociando la parte protegida cuando sea posible', ['Denegar siempre el documento completo', 'Publicar todo sin ponderación', 'Destruir la parte protegida'], 'Principio de acceso parcial.', 'media'),
      Q('La existencia de datos identificativos de empleados públicos en un documento implica:', 'Realizar la ponderación legal; no supone por sí sola denegación automática', ['Denegar siempre', 'Publicar cualquier dato privado', 'Aplicar silencio positivo'], 'Transparencia y protección de datos exigen ponderación.', 'alta'),
      Q('¿Qué debe indicar una resolución que concede acceso mediante remisión a información publicada?', 'El enlace o localización precisa que permita acceder a la información', ['Solo que existe una web', 'El nombre del solicitante', 'La contraseña interna del sistema'], 'La remisión debe permitir localizar efectivamente la información.', 'media'),
      Q('¿Cuál es la diferencia entre inadmisión y denegación?', 'La inadmisión impide entrar al fondo por una causa legal; la denegación aplica un límite tras examinar la información', ['No existe diferencia', 'La inadmisión siempre concede acceso parcial', 'La denegación solo corrige errores materiales'], 'Son decisiones distintas y deben motivarse.', 'alta'),
      Q('La reutilización de información pública significa:', 'Usarla para fines distintos del propósito inicial dentro de las condiciones legales', ['Modificar expedientes originales', 'Acceder a datos reservados sin límite', 'Eliminar la autoría institucional'], 'Concepto funcional de reutilización de información pública.', 'media'),
      Q('La publicidad activa debe actualizarse:', 'Con la periodicidad necesaria para mantener la información vigente y útil', ['Solo una vez al crear el portal', 'Únicamente cuando exista una reclamación', 'Nunca si el documento es económico'], 'La información publicada debe ser actual y comprensible.', 'baja'),
      Q('¿Qué actuación es incorrecta ante una solicitud extensa pero identificable?', 'Rechazarla automáticamente por su extensión sin analizar si puede concretarse o tramitarse', ['Pedir aclaración razonable', 'Identificar el órgano poseedor', 'Valorar acceso parcial'], 'La extensión por sí sola no justifica una decisión automática.', 'alta'),
      Q('En un supuesto UC3M, una petición de copia del propio expediente académico se encuadra principalmente en:', 'El régimen de acceso del interesado a su expediente y protección de datos, no solo transparencia general', ['Publicidad activa contractual', 'Contratación pública', 'Reforma estatutaria'], 'Debe identificarse el régimen jurídico específico aplicable.', 'media')
    ],
    8: [
      Q('Existe discriminación directa por razón de sexo cuando una persona:', 'Es tratada de manera menos favorable que otra en situación comparable por razón de su sexo', ['Recibe una medida neutral justificada', 'Solicita una adaptación razonable', 'Participa en una acción formativa'], 'Artículo 6.1 de la LO 3/2007.', 'media'),
      Q('Las medidas de acción positiva deben ser:', 'Razonables y proporcionadas respecto del objetivo de corregir una desigualdad de hecho', ['Permanentes aunque desaparezca la desigualdad', 'Secretas y no evaluables', 'Idénticas en cualquier contexto'], 'Artículo 11 de la LO 3/2007.', 'media'),
      Q('El acoso sexual se define por:', 'Un comportamiento verbal o físico de naturaleza sexual que atente contra la dignidad y cree un entorno intimidatorio, degradante u ofensivo', ['Cualquier discrepancia laboral', 'Solo una agresión física tipificada penalmente', 'Una evaluación académica desfavorable'], 'Artículo 7.1 de la LO 3/2007.', 'alta'),
      Q('El trato adverso sufrido por presentar una queja de discriminación constituye:', 'Una represalia prohibida', ['Una medida de acción positiva', 'Una sanción automática válida', 'Una diferencia salarial justificada'], 'Artículo 9 de la LO 3/2007.', 'media'),
      Q('¿Qué eje del III Plan UC3M aborda gobernanza, organización y gestión con perspectiva de género?', 'El eje 1', ['El eje 3', 'El eje 5', 'El eje 6'], 'Estructura oficial del III Plan de Igualdad UC3M 2025-2029.', 'baja'),
      Q('¿Qué eje del III Plan UC3M se dedica a investigación, transferencia y emprendimiento con perspectiva de género?', 'El eje 5', ['El eje 1', 'El eje 2', 'El eje 4'], 'Estructura oficial del III Plan.', 'media'),
      Q('¿Qué utilidad tiene un indicador de impacto?', 'Medir los cambios producidos en la situación de igualdad, más allá de ejecutar una actividad', ['Contar únicamente reuniones', 'Sustituir el diagnóstico', 'Aprobar el presupuesto'], 'Sistema de seguimiento del III Plan.', 'alta'),
      Q('Si una unidad ha impartido un curso previsto en el Plan, el dato “número de personas asistentes” es principalmente un indicador de:', 'Proceso o ejecución', ['Impacto final por sí solo', 'Reforma estatutaria', 'Contratación menor'], 'Los indicadores de proceso miden la ejecución de medidas.', 'media'),
      Q('Ante una comunicación de acoso, la unidad receptora debe evitar:', 'Difundir identidades o investigar informalmente al margen del protocolo', ['Preservar confidencialidad', 'Derivar al cauce competente', 'Adoptar medidas de protección cuando procedan'], 'Garantías del protocolo UC3M.', 'media'),
      Q('El protocolo UC3M también puede aplicarse a personal de empresas externas cuando:', 'Desarrolla su actividad laboral en el ámbito de la Universidad', ['Nunca, por no pertenecer a plantilla', 'Solo si es estudiante', 'Únicamente por decisión judicial firme'], 'Ámbito personal del protocolo institucional.', 'media')
    ],
    9: [
      Q('En Word, para actualizar automáticamente títulos y numeración de una tabla de contenido conviene usar:', 'Estilos de título y actualizar la tabla', ['Tabulaciones manuales', 'Espacios repetidos', 'Capturas de pantalla'], 'La tabla de contenido se genera a partir de estilos estructurales.', 'media'),
      Q('Para que una fila de encabezado de una tabla Word se repita al pasar de página debe activarse:', 'Repetir filas de encabezado', ['Control de cambios', 'Combinar correspondencia', 'Ajustar texto a imagen'], 'Propiedad de tabla para documentos multipágina.', 'media'),
      Q('En Excel, ¿qué fórmula suma A1:A10 solo cuando B1:B10 contiene “Sí”?', 'SUMAR.SI(B1:B10;"Sí";A1:A10)', ['SUMA(B1:B10;"Sí")', 'CONTAR(A1:A10)', 'PROMEDIO.SI(A1:A10;B1:B10)'], 'SUMAR.SI aplica un criterio y suma el rango indicado.', 'alta'),
      Q('¿Qué función devuelve un valor según se cumpla o no una condición?', 'SI', ['CONTARA', 'MAX', 'HOY'], 'La función SI evalúa una prueba lógica.', 'baja'),
      Q('Para impedir que se introduzcan fechas fuera de un intervalo en Excel se utiliza:', 'Validación de datos', ['Formato condicional exclusivamente', 'Ordenar', 'Quitar duplicados'], 'La validación restringe los valores admitidos.', 'media'),
      Q('Una celda muestra #### en Excel. La causa más habitual es:', 'La columna es demasiado estrecha para mostrar el valor', ['La fórmula divide entre cero', 'La hoja está protegida', 'El libro no tiene nombre'], '#### suele indicar falta de ancho o una fecha/hora no representable.', 'baja'),
      Q('En Google Docs, el modo sugerencias permite:', 'Proponer cambios que pueden aceptarse o rechazarse', ['Editar sin que quede rastro', 'Eliminar el historial', 'Cambiar al propietario automáticamente'], 'Las sugerencias son equivalentes funcionales a cambios propuestos.', 'media'),
      Q('En Drive, mover un archivo compartido a otra carpeta:', 'No equivale necesariamente a cambiar sus permisos; estos deben comprobarse aparte', ['Lo hace público siempre', 'Elimina su historial', 'Convierte a todos en propietarios'], 'Ubicación y permisos son propiedades distintas.', 'alta'),
      Q('Para enviar un correo a muchas personas sin revelar sus direcciones entre sí se usa:', 'CCO', ['CC', 'Responder a todos', 'Una etiqueta'], 'CCO oculta destinatarios frente a los demás receptores.', 'baja'),
      Q('Un evento recurrente de Calendar debe modificarse solo esta vez. La opción adecuada es:', 'Editar únicamente este evento', ['Editar toda la serie obligatoriamente', 'Eliminar el calendario', 'Cambiar el propietario de Drive'], 'Calendar permite actuar sobre una instancia o sobre la serie.', 'media')
    ],
    10: [
      Q('Se nombra temporalmente a una persona para cubrir una vacante por necesidad y urgencia. Es:', 'Funcionario interino', ['Personal eventual', 'Funcionario de carrera automáticamente', 'Contratista'], 'Artículo 10 TREBEP.', 'baja'),
      Q('Una persona realiza exclusivamente funciones de confianza o asesoramiento especial. Es:', 'Personal eventual', ['Funcionario interino por vacante', 'Personal laboral fijo necesariamente', 'Órgano colegiado'], 'Artículo 12 TREBEP.', 'media'),
      Q('¿Qué derecho no corresponde indistintamente a todas las clases de empleado público?', 'La inamovilidad en la condición de funcionario de carrera', ['La dignidad en el trabajo', 'La no discriminación', 'La seguridad y salud'], 'Artículo 14.a TREBEP.', 'media'),
      Q('Un empleado recibe una orden manifiestamente ilegal. Según el código de conducta debe:', 'No obedecerla y ponerla en conocimiento de los órganos de inspección procedentes', ['Cumplirla siempre', 'Publicarla en redes sociales', 'Destruir el expediente'], 'Artículo 54.3 TREBEP.', 'alta'),
      Q('¿Qué requisito de adquisición de la condición de funcionario sigue al nombramiento publicado?', 'El acatamiento de la Constitución y del ordenamiento y la toma de posesión en plazo', ['La excedencia automática', 'La libre designación', 'El concurso de traslados'], 'Artículo 62 TREBEP.', 'media'),
      Q('La pérdida de nacionalidad puede permitir rehabilitación cuando:', 'Se recupera la nacionalidad y concurren los requisitos legales', ['Nunca', 'Solo por acuerdo sindical', 'Se solicita antes de perderla'], 'Artículos 65 y 68 TREBEP.', 'alta'),
      Q('Una persona es designada para un alto cargo incluido legalmente en el supuesto correspondiente. Su situación puede ser:', 'Servicios especiales', ['Servicio activo ordinario necesariamente', 'Suspensión firme automática', 'Excedencia por agrupación familiar'], 'Artículo 87 TREBEP.', 'media'),
      Q('La excedencia por cuidado de familiares se caracteriza por:', 'Responder a una causa de conciliación y producir los efectos de reserva y cómputo previstos legalmente', ['Exigir siempre interés particular', 'Ser una sanción', 'Impedir todo reingreso'], 'Artículo 89 TREBEP.', 'media'),
      Q('La suspensión firme por sanción disciplinaria puede implicar:', 'Pérdida temporal del ejercicio de funciones y de los derechos inherentes durante su duración', ['Adquisición automática de otro puesto', 'Conversión en personal eventual', 'Promoción interna'], 'Artículo 90 TREBEP.', 'media'),
      Q('El reingreso al servicio activo desde una situación sin reserva de puesto se realiza:', 'Mediante los procedimientos y condiciones establecidos reglamentariamente', ['De forma automática al día siguiente', 'Solo mediante un nuevo proceso selectivo', 'Por decisión del empleado sin comunicación'], 'Artículo 91 TREBEP.', 'alta')
    ],
    15: [
      Q('Una queja ante el Defensor Universitario suspende por sí sola el plazo para recurrir una resolución administrativa:', 'No; la queja no sustituye los recursos ni suspende automáticamente sus plazos', ['Sí, siempre', 'Solo si se presenta por correo', 'Sí, durante un año'], 'La función del Defensor no sustituye el sistema de recursos.', 'alta'),
      Q('El Defensor Universitario debe actuar principalmente con:', 'Independencia, autonomía y respeto a la confidencialidad', ['Dependencia de la parte reclamante', 'Publicidad de todos los expedientes', 'Potestad sancionadora automática'], 'Naturaleza garantista de la institución.', 'media'),
      Q('Una recomendación del Defensor Universitario:', 'Puede instar cambios o correcciones, pero no anula por sí misma el acto impugnado', ['Es una sentencia', 'Aprueba una modificación presupuestaria', 'Sustituye al Claustro'], 'Diferencia entre recomendación y resolución administrativa.', 'media'),
      Q('¿Qué rasgo distingue a un servicio universitario de un órgano colegiado de gobierno?', 'El servicio presta apoyo funcional; el órgano delibera o decide dentro de sus competencias', ['El servicio aprueba Estatutos', 'El órgano solo archiva documentos', 'No existe diferencia'], 'Diferencia orgánica y funcional.', 'media'),
      Q('La creación o reorganización de servicios debe responder a:', 'Necesidades universitarias, eficiencia, competencias y disponibilidad de recursos', ['La decisión informal de cualquier empleado', 'Un contrato privado sin acuerdo', 'Una recomendación no vinculante como único requisito'], 'Criterios de organización de servicios.', 'alta'),
      Q('La autonomía económica de la Universidad significa:', 'Capacidad de elaborar y gestionar presupuesto y patrimonio dentro de la ley y sometida a control y rendición de cuentas', ['Ausencia total de control', 'Potestad tributaria ilimitada', 'Exención de contabilidad'], 'Autonomía financiera con responsabilidad.', 'media'),
      Q('¿Qué documento expresa anualmente la previsión de ingresos y la autorización de gastos?', 'El presupuesto universitario', ['El plan de estudios', 'El protocolo de acoso', 'La relación de admitidos'], 'Concepto presupuestario básico.', 'baja'),
      Q('La rendición de cuentas persigue:', 'Acreditar legalidad, eficacia y uso responsable de los recursos', ['Ocultar la ejecución', 'Eliminar el control externo', 'Sustituir el presupuesto'], 'Régimen económico-financiero universitario.', 'media'),
      Q('Una reforma de Estatutos solo es eficaz tras:', 'Completar iniciativa, aprobación por el órgano y mayoría competentes, control legal y publicación exigida', ['Una comunicación interna informal', 'La recomendación del Defensor', 'La aprobación de una factura'], 'Elementos esenciales del procedimiento estatutario.', 'alta'),
      Q('Si una reforma afecta a un artículo sobre mayorías, para preparar el examen debe usarse:', 'El texto consolidado vigente y la publicación oficial de la modificación', ['Un resumen antiguo sin fecha', 'La regla general de otra universidad', 'La práctica no escrita'], 'La literalidad estatutaria debe comprobarse en fuente oficial vigente.', 'media')
    ],
    18: [
      Q('La especialidad cuantitativa implica que:', 'No pueden adquirirse compromisos de gasto por cuantía superior al crédito autorizado', ['Todo crédito puede superarse libremente', 'El presupuesto solo limita ingresos', 'Los gastos no necesitan aplicación'], 'Principio de limitación cuantitativa del crédito.', 'media'),
      Q('La especialidad temporal significa, como regla:', 'Los créditos se destinan a obligaciones del ejercicio presupuestario correspondiente', ['Son indefinidos', 'Solo pueden usarse en el ejercicio anterior', 'No existe cierre anual'], 'Principio de anualidad y especialidad temporal.', 'media'),
      Q('¿Qué clasificación responde a la naturaleza económica del ingreso o gasto?', 'La clasificación económica', ['La clasificación personal', 'La clasificación académica', 'La clasificación de transparencia'], 'Estructura presupuestaria.', 'baja'),
      Q('¿Qué modificación se utiliza cuando no existe crédito para un gasto específico que no puede demorarse?', 'Un crédito extraordinario', ['Un suplemento de crédito', 'Una fase O', 'Una recaudación'], 'Diferencia entre crédito extraordinario y suplemento.', 'media'),
      Q('Si existe crédito pero es insuficiente para un gasto inaplazable, procede:', 'Un suplemento de crédito', ['Un crédito extraordinario por inexistencia', 'Una orden de pago sin crédito', 'Una devolución de ingresos'], 'El suplemento aumenta un crédito insuficiente.', 'media'),
      Q('Una transferencia de crédito:', 'Redistribuye dotación entre aplicaciones sin aumentar necesariamente el total del presupuesto', ['Crea siempre nuevos ingresos', 'Es una transferencia corriente a un beneficiario', 'Reconoce una obligación'], 'Modificación presupuestaria.', 'alta'),
      Q('La incorporación de remanentes permite:', 'Trasladar al nuevo ejercicio determinados créditos no utilizados cuando la normativa lo autoriza', ['Incorporar cualquier saldo sin límite', 'Pagar sin expediente', 'Crear derechos de cobro'], 'Concepto de incorporación de remanentes.', 'media'),
      Q('El reconocimiento de un derecho presupuestario exige:', 'Identificar un derecho de cobro a favor de la Universidad por importe determinado', ['Haber ordenado un gasto', 'Disponer de una factura de compra', 'Aprobar una reforma estatutaria'], 'Fase de ejecución de ingresos.', 'media'),
      Q('La recaudación material de un ingreso:', 'Extingue total o parcialmente el derecho mediante el cobro', ['Autoriza un gasto', 'Modifica una aplicación de crédito', 'Sustituye la liquidación'], 'Diferencia entre derecho reconocido y cobro.', 'media'),
      Q('Antes de memorizar quién aprueba una modificación concreta en UC3M debe consultarse:', 'Las bases de ejecución y delegaciones vigentes del ejercicio', ['Solo la definición general de presupuesto', 'Un manual de otra universidad', 'El calendario académico'], 'Las competencias internas pueden variar y deben verificarse.', 'alta')
    ],
    19: [
      Q('¿Qué finalidad tiene un documento RC?', 'Reservar crédito disponible para una finalidad antes de asumir el compromiso', ['Reconocer una obligación', 'Ordenar un pago', 'Registrar un ingreso'], 'Retención de crédito.', 'baja'),
      Q('La fase A del gasto:', 'Autoriza la realización de un gasto por cuantía determinada o determinable', ['Reconoce al acreedor', 'Paga materialmente', 'Recauda un derecho'], 'Fase de autorización.', 'media'),
      Q('La fase D se produce cuando:', 'Se compromete el gasto frente a un tercero en condiciones concretas', ['Se elabora el anteproyecto presupuestario', 'Se recibe un ingreso', 'Se cierra el ejercicio'], 'Fase de disposición o compromiso.', 'media'),
      Q('Para reconocer una obligación por una factura de servicios debe comprobarse normalmente:', 'La prestación realizada, conformidad, factura válida, expediente y crédito', ['Solo que exista factura', 'Únicamente la firma del proveedor', 'Que el presupuesto esté prorrogado'], 'La fase O exige acreditar el derecho del acreedor.', 'alta'),
      Q('La ordenación del pago:', 'Expide la orden para satisfacer una obligación previamente reconocida', ['Crea por sí sola el contrato', 'Sustituye la fase O', 'Reconoce un ingreso'], 'Separación entre obligación y pago.', 'media'),
      Q('Un documento AD acumula:', 'Autorización y disposición del gasto', ['Reconocimiento y pago', 'Retención e ingreso', 'Liquidación y cierre'], 'Documento contable mixto AD.', 'baja'),
      Q('Un documento ADO puede utilizarse cuando:', 'La naturaleza y tramitación del gasto permiten acumular autorización, compromiso y obligación', ['Siempre, aunque falte prestación', 'Solo para ingresos', 'Para evitar cualquier expediente'], 'Documento mixto ADO.', 'alta'),
      Q('Una transferencia corriente se diferencia de una inversión real porque:', 'La primera financia operaciones corrientes del beneficiario; la segunda adquiere o crea activos para la Universidad', ['Son idénticas', 'La inversión real nunca es gasto', 'La transferencia corriente es una modificación de crédito'], 'Clasificación económica del gasto.', 'media'),
      Q('En el cierre presupuestario deben identificarse:', 'Obligaciones y derechos pendientes, resultado y remanentes, además de operaciones de regularización', ['Solo facturas pagadas', 'Únicamente contratos menores', 'Solo el inventario académico'], 'Contenido de la liquidación y cierre.', 'media'),
      Q('Un documento contable correctamente emitido:', 'No sustituye la competencia, el expediente ni la justificación material del gasto', ['Convalida cualquier gasto nulo', 'Elimina la necesidad de crédito', 'Sustituye toda fiscalización'], 'La contabilidad refleja actos válidamente tramitados; no los crea por sí sola.', 'alta')
    ]
  };

  let added = 0;
  Object.entries(additions).forEach(([number, items]) => {
    const theme = byNumber(number);
    if (!theme) return;
    ope.themeTests[theme.id] ||= [];
    const existing = new Set(ope.themeTests[theme.id].map(question => normalize(question.text)));
    items.forEach((item, index) => {
      if (existing.has(normalize(item.text))) return;
      ope.themeTests[theme.id].push(buildQuestion(theme, item, index + ope.themeTests[theme.id].length));
      existing.add(normalize(item.text));
      added += 1;
    });
  });

  function cleanBank() {
    const seen = new Set();
    let duplicatesRemoved = 0;
    let invalidRemoved = 0;
    ope.themes.forEach(theme => {
      const cleaned = [];
      (ope.themeTests[theme.id] || []).forEach((question, index) => {
        const options = Array.isArray(question.options) ? question.options.slice(0, 4) : [];
        const optionTexts = options.map(option => normalize(option?.text));
        const correct = options.find(option => option?.letter === question.answer);
        if (!question?.text || options.length !== 4 || optionTexts.some(text => !text) || new Set(optionTexts).size !== 4 || !correct || !question.justification) {
          invalidRemoved += 1;
          return;
        }
        const key = `${normalize(question.text)}|${normalize(correct.text)}`;
        if (seen.has(key)) {
          duplicatesRemoved += 1;
          return;
        }
        seen.add(key);
        cleaned.push({
          ...question,
          id: question.id || `${theme.id}-v40-clean-${index + 1}`,
          options: options.map((option, position) => ({ letter: 'ABCD'[position], text: String(option.text) })),
          answer: 'ABCD'[options.indexOf(correct)],
          justification: String(question.justification)
        });
      });
      ope.themeTests[theme.id] = cleaned;
    });
    return { duplicatesRemoved, invalidRemoved };
  }

  const cleanup = cleanBank();
  const stateFor = count => count >= 30 ? 'objetivo 30+' : count >= 20 ? 'banco sólido' : count >= 15 ? 'base operativa' : 'refuerzo prioritario';
  const priorityNumbers = [2,3,7,8,9,10,15,18,19];

  const themes = ope.themes.map(theme => {
    const questions = ope.themeTests[theme.id] || [];
    const answerPositions = { A:0, B:0, C:0, D:0 };
    const difficulty = { baja:0, media:0, alta:0 };
    questions.forEach(question => {
      if (answerPositions[question.answer] !== undefined) answerPositions[question.answer] += 1;
      const level = difficulty[question.difficulty] !== undefined ? question.difficulty : 'media';
      difficulty[level] += 1;
    });
    theme.testAudit = { count: questions.length, state: stateFor(questions.length), answerPositions, difficulty, target: 30 };
    return { id:theme.id, number:Number(theme.number), title:theme.title, count:questions.length, state:stateFor(questions.length), answerPositions, difficulty };
  });

  function hash(text, seed) {
    let value = 2166136261 ^ seed;
    for (let i = 0; i < text.length; i += 1) { value ^= text.charCodeAt(i); value = Math.imul(value, 16777619); }
    return value >>> 0;
  }
  const shuffled = (items, seed) => [...items].sort((a,b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));
  function balancedSimulation(seed) {
    const orderedThemes = [...ope.themes].sort((a,b) => Number(a.number) - Number(b.number));
    const extras = new Set(orderedThemes.map((_, index) => orderedThemes[(index + seed) % orderedThemes.length].id).slice(0, 10));
    const selected = [];
    orderedThemes.forEach(theme => {
      const amount = extras.has(theme.id) ? 4 : 3;
      shuffled(ope.themeTests[theme.id] || [], seed * 173 + Number(theme.number)).slice(0, amount)
        .forEach(question => selected.push({ ...question, auditTheme:Number(theme.number) }));
    });
    return shuffled(selected, seed * 2017).slice(0, 70);
  }

  ope.simulacros = [1,2,3].map(seed => ({
    id:`uc3m-v40-equilibrado-${seed}`,
    title:`Simulacro UC3M equilibrado ${seed}`,
    questions:balancedSimulation(seed).map((question,index) => ({ ...question, id:`uc3m-v40-s${seed}-q${index + 1}` })),
    audit:{ questions:70, themes:20, distribution:'10 temas con 4 preguntas y 10 temas con 3 preguntas', repeatedQuestionIds:0 }
  }));

  const totalQuestions = themes.reduce((sum,item) => sum + item.count, 0);
  const minimumQuestions = Math.min(...themes.map(item => item.count));
  const targetThemes = themes.filter(item => item.count >= 30).length;
  const priority = priorityNumbers.map(number => themes.find(item => item.number === number)).filter(Boolean);

  ope.testAudit = {
    version:'v0.40.0', date:'2026-07-10', totalQuestions, minimumQuestions,
    targetPerTheme:30, floorPerTheme:20, targetThemes, priorityThemes:priority,
    duplicatesRemoved:(ope.testAudit?.duplicatesRemoved || 0) + cleanup.duplicatesRemoved,
    invalidRemoved:(ope.testAudit?.invalidRemoved || 0) + cleanup.invalidRemoved,
    themes,
    criteria:[
      'Enunciado y cuatro opciones distintas', 'Respuesta correcta existente', 'Justificación obligatoria',
      'Sin duplicados exactos', 'Nueve temas prioritarios con 30 preguntas o más',
      'Simulacros de 70 preguntas con los 20 temas'
    ]
  };

  ope.version = '0.40.0';
  ope.status = `${(ope.status || '').replace(/ Revisión v0\.39:.*/, '')} Revisión v0.40: Ley 39/2015, transparencia, igualdad, ofimática, TREBEP y temas internos 15, 18 y 19 elevados a 30 preguntas de aplicación.`;
  ope.changelog ||= [];
  if (!ope.changelog.some(item => item.version === '0.40.0')) {
    ope.changelog.unshift({ version:'0.40.0', date:'2026-07-10', changes:[
      'Añadidas 90 preguntas manuales y de supuesto breve',
      'Temas 2, 3, 7, 8, 9, 10, 15, 18 y 19 elevados a 30 preguntas o más',
      'Reauditado el banco por validez, duplicados, respuestas y dificultad',
      'Regenerados tres simulacros equilibrados de 70 preguntas'
    ]});
  }

  window.OPOWEB_TEST_AUDIT_V40 = ope.testAudit;
  window.OPOWEB_TEST_REINFORCEMENT_V40 = { added, priorityNumbers, targetThemes };
  if (typeof renderAll === 'function') { try { renderAll(); } catch (_) {} }
})();