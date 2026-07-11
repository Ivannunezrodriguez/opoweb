(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones) return;

  const S = (legalBasis, steps, commonErrors, conclusion) => ({ legalBasis, steps, commonErrors, conclusion });
  const specs = {
    'Subsanación de una solicitud': S(
      ['Artículos 66 y 68 de la Ley 39/2015', 'Artículo 14 de la Ley 39/2015 cuando exista obligación electrónica'],
      ['Comprobar si falta un requisito del artículo 66 o un documento exigido por la norma reguladora.', 'Dictar requerimiento claro identificando exactamente qué debe corregirse o aportarse.', 'Conceder diez días, ampliables prudencialmente hasta cinco salvo procedimientos selectivos o de concurrencia competitiva.', 'Notificar por el canal legalmente procedente y advertir expresamente del desistimiento.', 'Si no se subsana, declarar el desistimiento mediante resolución conforme al artículo 21; si se subsana, continuar la tramitación.'],
      ['Archivar sin requerimiento previo.', 'Confundir desistimiento con renuncia al derecho.', 'No advertir la consecuencia de no subsanar.'],
      'Procede requerir la subsanación durante diez días. Solo después del incumplimiento podrá declararse el desistimiento mediante resolución expresa.'
    ),
    'Cómputo de un plazo administrativo': S(
      ['Artículos 29 a 33 de la Ley 39/2015', 'Calendario oficial de días inhábiles aplicable'],
      ['Identificar si el plazo se expresa en horas, días, meses o años.', 'Si son días y no se indica otra cosa, tratarlos como hábiles, excluyendo sábados, domingos y festivos.', 'Iniciar el cómputo al día siguiente de la notificación o publicación.', 'Comprobar calendarios estatal, autonómico y local.', 'Si el último día es inhábil, trasladar el vencimiento al primer día hábil siguiente.'],
      ['Contar el día de la notificación.', 'Considerar hábiles los sábados.', 'Aplicar un calendario festivo de otro municipio.'],
      'El plazo empieza al día siguiente y solo computa días hábiles; el vencimiento inhábil se traslada al siguiente día hábil.'
    ),
    'Notificación electrónica no atendida': S(
      ['Artículos 41, 43 y 44 de la Ley 39/2015'],
      ['Confirmar que la persona está obligada o eligió el canal electrónico.', 'Acreditar la puesta a disposición en sede o dirección electrónica habilitada.', 'Computar diez días naturales desde la puesta a disposición.', 'Si no se accede sin imposibilidad técnica o material acreditada, considerar rechazada la notificación.', 'Dejar constancia en el expediente y continuar el procedimiento.'],
      ['Computar diez días hábiles.', 'Entender que el rechazo paraliza el expediente.', 'No acreditar fecha y hora de puesta a disposición.'],
      'Transcurridos diez días naturales sin acceso, la notificación se entiende rechazada y el procedimiento continúa, salvo imposibilidad acreditada.'
    ),
    'Recurso administrativo procedente': S(
      ['Artículos 112 a 122 de la Ley 39/2015'],
      ['Determinar si el acto pone fin a la vía administrativa.', 'Si no la agota, identificar el recurso de alzada ante el superior jerárquico.', 'Aplicar un mes para actos expresos; para silencio, desde que se produzcan sus efectos sin plazo máximo mientras persista.', 'Presentar ante el órgano autor o el competente para resolver.', 'Recordar que la interposición no suspende automáticamente y que el plazo de resolución es de tres meses.'],
      ['Interponer reposición contra un acto que no agota vía.', 'Dar por suspendido el acto automáticamente.', 'Dirigir la alzada al mismo órgano como órgano decisor.'],
      'Al no poner fin a la vía administrativa, procede alzada, normalmente en un mes si el acto es expreso, resolviendo el superior jerárquico.'
    ),
    'Revisión de un acto nulo': S(
      ['Artículos 47, 106 y 110 de la Ley 39/2015'],
      ['Identificar una causa tasada de nulidad de pleno derecho del artículo 47.', 'Iniciar revisión de oficio por el órgano competente, de oficio o a solicitud.', 'Dar audiencia a los interesados y formar expediente completo.', 'Solicitar dictamen favorable del Consejo de Estado u órgano consultivo autonómico equivalente.', 'Resolver respetando buena fe, equidad, derechos de particulares y límites del artículo 110.'],
      ['Usar revisión de oficio para cualquier anulabilidad.', 'Omitir el dictamen consultivo favorable.', 'Confundir revocación de actos desfavorables con revisión de actos nulos.'],
      'La revisión de oficio exige causa de nulidad y dictamen consultivo favorable; no basta una mera ilegalidad anulable.'
    ),
    'Responsabilidad patrimonial': S(
      ['Artículos 32 a 35 de la Ley 40/2015', 'Artículos 65, 67, 81, 91 y 92 de la Ley 39/2015'],
      ['Comprobar daño efectivo, evaluable económicamente e individualizado.', 'Determinar que el daño es antijurídico y que el interesado no tenía deber de soportarlo.', 'Acreditar relación causal con funcionamiento normal o anormal del servicio y excluir fuerza mayor o culpa exclusiva.', 'Verificar el plazo de un año desde el hecho o curación/estabilización de secuelas.', 'Practicar prueba, audiencia, dictámenes cuando procedan y resolver sobre causalidad, valoración e indemnización.'],
      ['Confundir daño con mera molestia.', 'Presumir causalidad por el solo hecho de ocurrir en una instalación pública.', 'Olvidar el plazo anual.'],
      'Solo habrá indemnización si concurren daño efectivo, antijurídico, individualizado y nexo causal, reclamado dentro del año.'
    ),
    'Procedimiento sancionador': S(
      ['Artículos 25 a 31 de la Ley 40/2015', 'Artículos 53, 63, 64, 77, 82, 85, 89 y 90 de la Ley 39/2015'],
      ['Verificar competencia, tipicidad, culpabilidad, proporcionalidad y prescripción.', 'Iniciar siempre de oficio, identificando hechos, posible infracción, sanción y órganos instructor y resolutor.', 'Practicar prueba respetando presunción de inocencia y derechos de defensa.', 'Conceder audiencia y formular propuesta cuando sea necesaria.', 'Resolver motivadamente, sin hechos distintos de los instruidos y respetando separación entre instrucción y resolución.'],
      ['Sancionar sin procedimiento.', 'Invertir la carga de la prueba.', 'Aplicar analogía para crear infracciones.'],
      'La sanción exige expediente de oficio, tipicidad, prueba suficiente, audiencia, proporcionalidad y resolución por órgano competente distinto del instructor cuando proceda.'
    ),
    'Alta y rectificación padronal': S(
      ['Artículos 15 a 17 de la Ley 7/1985', 'Reglamento de Población y Demarcación Territorial', 'Ley 39/2015'],
      ['Comprobar identidad y residencia habitual real, sin exigir título de propiedad como requisito absoluto.', 'Requerir subsanación si faltan documentos esenciales.', 'Realizar actuaciones de comprobación proporcionadas cuando exista duda fundada.', 'Inscribir o rectificar conforme a la realidad acreditada y notificar resolución cuando exista controversia.', 'Recordar que el padrón prueba residencia y domicilio, pero no residencia legal de extranjeros.'],
      ['Denegar por no ser propietario.', 'Usar el padrón para resolver derechos de propiedad.', 'Confundir empadronamiento con autorización de residencia.'],
      'La inscripción debe reflejar la residencia habitual efectiva; la falta de propiedad no impide el alta si el domicilio se acredita por otros medios.'
    ),
    'Competencia municipal': S(
      ['Artículos 7, 25, 26 y 27 de la Ley 7/1985'],
      ['Definir la actividad o servicio con precisión.', 'Comprobar si es competencia propia, delegada o distinta de las anteriores.', 'Identificar la ley sectorial que atribuye la competencia y el órgano municipal competente.', 'Analizar duplicidad, sostenibilidad financiera y necesidad de informes cuando sea competencia distinta.', 'Seleccionar forma de gestión y financiación conforme a eficiencia y estabilidad.'],
      ['Dar por propia cualquier actividad de interés local.', 'Ignorar la legislación sectorial.', 'Omitir análisis de sostenibilidad.'],
      'El Ayuntamiento solo debe asumir la actividad tras encajarla en un título competencial y acreditar sostenibilidad, ausencia de duplicidad y órgano competente.'
    ),
    'Asistencia provincial': S(
      ['Artículos 31 y 36 de la Ley 7/1985'],
      ['Identificar la insuficiencia de medios municipales y la solicitud concreta.', 'Encajar la ayuda en asistencia jurídica, económica, técnica, recaudatoria o de cooperación.', 'Determinar el servicio provincial competente y el instrumento de colaboración.', 'Priorizar municipios de menor capacidad económica y de gestión.', 'Documentar alcance, financiación, responsabilidades y seguimiento.'],
      ['Confundir asistencia con sustitución total del Ayuntamiento.', 'No delimitar responsabilidades.', 'Omitir la prioridad de pequeños municipios.'],
      'La Diputación puede prestar asistencia técnica, jurídica y económica, manteniéndose la titularidad municipal de la competencia salvo atribución legal distinta.'
    ),
    'Oferta de empleo y convocatoria': S(
      ['Artículos 55, 59, 61 y 70 del TREBEP', 'Ley 4/2011 de Empleo Público de Castilla-La Mancha'],
      ['Comprobar que la plaza está dotada y responde a necesidad estructural.', 'Incluirla en la oferta de empleo público si procede y aprobarla por el órgano competente.', 'Publicar la oferta y ejecutar la convocatoria dentro del plazo legal.', 'Aprobar bases con requisitos, sistema, pruebas, tribunal y reglas de igualdad, mérito y capacidad.', 'Diferenciar la oferta, que planifica plazas, de la convocatoria, que abre el proceso concreto.'],
      ['Confundir oferta con convocatoria.', 'Convocar una plaza sin dotación.', 'Diseñar requisitos sin relación con las funciones.'],
      'La oferta planifica necesidades de personal; la convocatoria inicia el proceso selectivo mediante bases públicas y respetando igualdad, mérito y capacidad.'
    ),
    'Provisión y promoción interna': S(
      ['Artículos 16 a 20 y 78 a 84 del TREBEP', 'Ley 4/2011 de Empleo Público de Castilla-La Mancha'],
      ['Determinar si se pretende cubrir un puesto del mismo cuerpo o acceder a otro cuerpo/subgrupo.', 'Para provisión, aplicar concurso como sistema ordinario o libre designación solo en puestos previstos.', 'Para promoción interna, comprobar titulación, antigüedad, pertenencia al cuerpo de origen y superación del proceso.', 'Diferenciar efectos: la provisión cambia de puesto; la promoción cambia de cuerpo o escala.', 'Aplicar publicidad, mérito, capacidad e igualdad.'],
      ['Usar promoción para un simple traslado.', 'Prescindir de titulación en promoción.', 'Aplicar libre designación a cualquier puesto.'],
      'Debe distinguirse entre acceso a un cuerpo superior mediante promoción interna y provisión de un puesto dentro del cuerpo ya adquirido.'
    ),
    'Riesgo grave e inminente': S(
      ['Artículos 14, 18, 20 y 21 de la Ley 31/1995'],
      ['Valorar si el riesgo puede materializarse de forma inmediata y causar daño grave.', 'Informar de inmediato a las personas afectadas y a sus representantes.', 'Adoptar medidas de emergencia y permitir interrupción de la actividad y abandono del lugar cuando sea necesario.', 'No exigir reanudación mientras persista el peligro, salvo excepciones justificadas.', 'Investigar, corregir la causa y documentar medidas antes de retomar el trabajo.'],
      ['Esperar a que ocurra un accidente.', 'Sancionar al trabajador que se aparta de buena fe.', 'Reanudar sin verificar la eliminación del riesgo.'],
      'Ante riesgo grave e inminente debe primar la protección inmediata: información, interrupción, evacuación y corrección antes de reanudar.'
    ),
    'Discriminación y plan de igualdad': S(
      ['Ley Orgánica 3/2007', 'Ley 12/2010 de Igualdad entre Mujeres y Hombres de Castilla-La Mancha'],
      ['Identificar si una regla aparentemente neutra genera desventaja particular para un sexo.', 'Comprobar si existe finalidad legítima y si la medida es necesaria y proporcionada.', 'Analizar datos desagregados y efectos reales.', 'Aplicar transversalidad, corrección de la medida y, cuando proceda, acción positiva.', 'Activar canales de denuncia y protección frente a represalias.'],
      ['Exigir intención discriminatoria.', 'Confundir acción positiva con privilegio arbitrario.', 'Analizar solo la redacción y no los efectos.'],
      'La discriminación indirecta puede existir sin intención cuando una regla neutra causa desventaja no justificada; debe corregirse y prevenir su repetición.'
    ),
    'Acceso a expediente con datos personales': S(
      ['Artículos 13, 53 y 70 de la Ley 39/2015', 'Ley Orgánica 3/2018 y RGPD', 'Ley 19/2013 cuando proceda'],
      ['Comprobar la condición de interesado o el título de acceso invocado.', 'Identificar datos propios, datos de terceros y categorías especialmente protegidas.', 'Aplicar necesidad, minimización y ponderación de derechos.', 'Facilitar acceso parcial mediante disociación cuando sea posible.', 'Motivar cualquier limitación y dejar vía de recurso.'],
      ['Denegar todo el expediente por contener un dato de tercero.', 'Entregar datos no necesarios.', 'Confundir acceso procedimental con transparencia general.'],
      'Debe darse acceso a lo necesario para la defensa del interesado, protegiendo datos de terceros mediante ocultación o acceso parcial cuando sea viable.'
    ),
    'Extinción de deuda tributaria': S(
      ['Artículos 59 a 76 de la Ley 58/2003, General Tributaria'],
      ['Verificar existencia, liquidez, vencimiento y titularidad recíproca de deuda y crédito.', 'Determinar si la compensación procede de oficio o a instancia del obligado.', 'Comprobar que no existe prohibición o afectación incompatible.', 'Dictar acuerdo indicando cantidades compensadas y saldo restante.', 'Notificar efectos desde la concurrencia de requisitos o desde el acuerdo según el supuesto.'],
      ['Compensar créditos no reconocidos.', 'Omitir el saldo residual.', 'Confundir compensación con condonación.'],
      'La compensación extingue deuda y crédito hasta el importe concurrente, siempre que el crédito del obligado sea reconocido, líquido y exigible.'
    ),
    'Inicio del periodo ejecutivo': S(
      ['Artículos 28, 62, 161 y 167 de la Ley 58/2003'],
      ['Determinar el vencimiento del periodo voluntario sin ingreso.', 'Fijar el inicio del periodo ejecutivo al día siguiente.', 'Aplicar el recargo ejecutivo del 5 %, reducido del 10 % u ordinario del 20 % según momento de pago.', 'Notificar providencia de apremio cuando corresponda.', 'Limitar la oposición a los motivos tasados del artículo 167.3.'],
      ['Aplicar siempre el recargo del 20 %.', 'Confundir inicio del ejecutivo con notificación de apremio.', 'Admitir cualquier motivo de oposición.'],
      'El ejecutivo comienza automáticamente al vencer el voluntario; el recargo depende del momento en que se satisfagan deuda, recargo e intereses.'
    ),
    'Sujeto pasivo de un tributo local': S(
      ['Artículos 60 a 110 del texto refundido de la Ley Reguladora de las Haciendas Locales'],
      ['Identificar el tributo y su hecho imponible.', 'En IBI, localizar al titular del derecho que determina la sujeción a 1 de enero.', 'En IVTM, identificar a quien figure en el permiso de circulación.', 'En IIVTNU onerosa, identificar normalmente al transmitente; en lucrativa, al adquirente.', 'Revisar exenciones, no sujeciones y sustitutos previstos.'],
      ['Usar siempre al propietario actual.', 'Confundir devengo con fecha de liquidación.', 'Aplicar la misma regla a transmisión onerosa y lucrativa.'],
      'El sujeto pasivo depende de cada impuesto y del momento del devengo: titular catastral, titular del vehículo o transmitente/adquirente según el IIVTNU.'
    ),
    'Certificado electrónico caducado': S(
      ['Artículos 9 a 12 de la Ley 39/2015', 'Ley 6/2020 y Reglamento eIDAS'],
      ['Comprobar fecha de firma, vigencia, revocación y cadena de confianza del certificado.', 'Distinguir identificación de firma y determinar si la actuación exigía firma.', 'Si la firma no es válida, requerir subsanación conforme al artículo 68.4 cuando proceda.', 'Conservar evidencias técnicas de validación.', 'Continuar solo tras firma válida o medio alternativo legalmente admitido.'],
      ['Dar por válido un certificado caducado en la fecha de firma.', 'Rechazar sin posibilidad de subsanar.', 'Confundir una captura de firma con firma electrónica.'],
      'La validez se comprueba en el momento de la firma. Si no acredita autenticidad, debe requerirse subsanación y conservar la evidencia técnica.'
    ),
    'Tarea ofimática administrativa': S(
      ['Política de seguridad y gestión documental aplicable', 'Funciones de Windows, procesador de textos y hoja de cálculo'],
      ['Crear una estructura de carpetas autorizada y nombres homogéneos.', 'Digitalizar comprobando integridad, orientación, legibilidad y formato PDF.', 'Redactar el oficio con estilos, encabezado, fecha, destinatario y revisión ortográfica.', 'Preparar la hoja con datos tabulares, fórmulas, referencias y controles de validación.', 'Guardar versiones editables y PDF final en ubicación corporativa con permisos adecuados.'],
      ['Guardar datos personales en nube privada.', 'Usar líneas vacías para maquetar.', 'Ordenar una sola columna rompiendo la asociación de datos.'],
      'La solución debe priorizar trazabilidad, formatos adecuados, control de calidad, fórmulas correctas y almacenamiento corporativo seguro.'
    ),
    'Interesado y representación': S(
      ['Artículos 4 a 6 y 68 de la Ley 39/2015'],
      ['Comprobar si quien actúa tiene condición de interesado y capacidad.', 'Exigir acreditación de representación para solicitudes, recursos, desistimientos y renuncias.', 'Admitir medios válidos: apoderamiento apud acta, registro electrónico de apoderamientos u otro medio fidedigno.', 'Conceder plazo de subsanación si la representación no se acredita inicialmente.', 'Tener por realizado el acto desde la fecha inicial cuando se subsana correctamente.'],
      ['Rechazar de plano.', 'Exigir poder para actuaciones de mero trámite.', 'No registrar la solicitud.'],
      'La falta de acreditación es subsanable; debe requerirse antes de rechazar la actuación representativa.'
    ),
    'Acto y notificación': S(
      ['Artículos 35, 39 a 46 de la Ley 39/2015'],
      ['Comprobar si el acto debía motivarse por limitar derechos o separarse de criterios previos.', 'Distinguir validez del acto y eficacia frente al interesado.', 'Verificar contenido de la notificación: texto íntegro, indicación de firmeza, recursos, órgano y plazo.', 'Si la notificación es defectuosa, analizar cuándo produce efectos por conocimiento suficiente o actuación del interesado.', 'Subsanar la notificación sin alterar indebidamente el acto.'],
      ['Declarar nulo todo acto mal notificado.', 'Confundir falta de motivación con simple error formal.', 'Omitir vías de recurso.'],
      'La notificación defectuosa afecta principalmente a la eficacia y al inicio de plazos; la falta de motivación puede afectar a la validez según su relevancia.'
    ),
    'Recurso procedente': S(
      ['Artículos 112 a 126 de la Ley 39/2015'],
      ['Determinar si el acto agota la vía administrativa.', 'Elegir alzada si no la agota o reposición potestativa si la agota y no se acude directamente a la jurisdicción.', 'Computar el plazo correspondiente.', 'Identificar el órgano resolutor y los efectos no suspensivos.', 'Examinar motivos, prueba y resolución congruente.'],
      ['Elegir recurso por el nombre del órgano y no por el agotamiento de vía.', 'Interponer reposición y contencioso simultáneamente.', 'Presumir suspensión automática.'],
      'El recurso depende de si el acto pone fin a la vía: alzada ante superior o reposición potestativa ante el mismo órgano.'
    ),
    'Licencia o declaración responsable': S(
      ['Artículo 69 de la Ley 39/2015', 'Artículos 84 y 84 bis de la Ley 7/1985', 'Normativa sectorial aplicable'],
      ['Identificar riesgos e intereses generales afectados por la actividad.', 'Comprobar si una ley exige autorización previa o basta declaración/comunicación.', 'Aplicar necesidad y proporcionalidad, evitando duplicidades.', 'Con declaración responsable, permitir inicio desde presentación salvo régimen sectorial distinto.', 'Ejercer comprobación posterior y ordenar cese si existe falsedad esencial o incumplimiento.'],
      ['Exigir licencia por costumbre.', 'Entender que la declaración impide inspeccionar.', 'Ignorar normativa ambiental, urbanística o de seguridad.'],
      'Debe usarse el medio menos restrictivo suficiente: licencia solo con habilitación y justificación; en otro caso, declaración y control posterior.'
    ),
    'Alta padronal': S(
      ['Artículos 15 a 17 de la Ley 7/1985', 'Reglamento de Población y Demarcación Territorial'],
      ['Verificar identidad y residencia habitual efectiva.', 'Solicitar documentos razonables de domicilio sin exigir propiedad.', 'Subsanar carencias y efectuar comprobaciones proporcionadas.', 'Inscribir desde la fecha procedente cuando se acredita residencia.', 'Notificar resolución motivada si se deniega.'],
      ['Exigir contrato de propiedad.', 'Valorar la legalidad urbanística como condición absoluta del padrón.', 'Confundir padrón y permiso de residencia.'],
      'La finalidad es reflejar dónde vive realmente la persona, no decidir propiedad ni regularidad migratoria.'
    ),
    'Aprobación de una ordenanza': S(
      ['Artículos 49, 65.2 y 70.2 de la Ley 7/1985'],
      ['Preparar texto, informes y competencia material.', 'Aprobar inicialmente por el Pleno.', 'Abrir información pública y audiencia por al menos treinta días.', 'Resolver reclamaciones y aprobar definitivamente; sin reclamaciones, el acuerdo inicial deviene definitivo.', 'Publicar íntegramente en el BOP y esperar el plazo legal para su entrada en vigor.'],
      ['Publicar solo un resumen.', 'Omitir información pública.', 'Aplicarla desde la aprobación inicial.'],
      'Sin información pública y publicación íntegra no queda válidamente completado el procedimiento ni puede entrar en vigor.'
    ),
    'Situación administrativa de funcionario local': S(
      ['Artículos 85 a 92 del TREBEP', 'Ley autonómica de empleo público aplicable'],
      ['Identificar la situación solicitada y el hecho causante.', 'Comprobar requisitos, duración y documentación.', 'Determinar reserva de puesto, cómputo de antigüedad y derechos retributivos.', 'Resolver por el órgano competente y registrar la situación.', 'Informar de reingreso, compatibilidades y efectos de su finalización.'],
      ['Tratar todas las excedencias igual.', 'Reconocer retribuciones sin base legal.', 'Omitir la reserva o su duración.'],
      'La resolución debe concretar modalidad, duración, reserva, cómputo de servicios y régimen de reingreso.'
    ),
    'Recuperación de un bien municipal': S(
      ['Real Decreto 1372/1986, Reglamento de Bienes de las Entidades Locales'],
      ['Clasificar el bien como demanial o patrimonial y acreditar titularidad.', 'Investigar hechos, ocupación y fecha.', 'Practicar audiencia y, si hay conflicto de límites, deslinde.', 'Para demaniales, recuperar de oficio sin límite temporal; para patrimoniales, dentro de un año.', 'Fuera del plazo patrimonial, acudir a la jurisdicción civil y adoptar medidas de protección.'],
      ['Recuperar por la fuerza sin expediente.', 'Aplicar el plazo anual a un bien demanial.', 'Confundir deslinde con transmisión de propiedad.'],
      'La vía depende de la clasificación y antigüedad de la ocupación: potestad administrativa reforzada para el dominio público y plazo anual para patrimoniales.'
    ),
    'Contrato menor y fraccionamiento': S(
      ['Artículos 28, 99.2, 118 y 131 de la Ley 9/2017'],
      ['Definir la necesidad completa y su duración previsible.', 'Comprobar si las prestaciones forman una unidad funcional y deben licitarse conjuntamente.', 'Evitar dividir el objeto para rebajar cuantía o eludir publicidad.', 'Si realmente es menor, justificar necesidad, no alteración del objeto, aprobación del gasto y factura.', 'Si es recurrente o estructural, tramitar procedimiento abierto u otro legalmente adecuado.'],
      ['Usar contratos menores sucesivos para una necesidad anual.', 'Mirar solo cada factura.', 'Omitir la justificación de no fraccionamiento.'],
      'Una necesidad recurrente y previsible debe licitarse como unidad; dividirla en facturas menores sería fraccionamiento indebido.'
    ),
    'Registro y notificación electrónica': S(
      ['Artículos 14, 16, 41 y 43 de la Ley 39/2015'],
      ['Confirmar que la persona jurídica está obligada a relacionarse electrónicamente.', 'Registrar el documento presencial y requerir presentación electrónica, considerándola efectuada en la fecha de subsanación.', 'Practicar notificación electrónica mediante sede o dirección habilitada.', 'Acreditar puesta a disposición y aviso complementario cuando proceda.', 'Aplicar el rechazo tras diez días naturales sin acceso.'],
      ['No registrar el documento presencial.', 'Mantener como fecha la presencial tras subsanación obligatoria.', 'Computar diez días hábiles.'],
      'Debe requerirse la subsanación electrónica y notificar por canal electrónico, dejando trazabilidad completa de fechas y accesos.'
    ),
    'Competencia y certificación de acuerdo': S(
      ['Ley 7/1985', 'Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales'],
      ['Identificar el órgano que adoptó el acuerdo y la competencia material.', 'Comprobar que el acuerdo consta en borrador de acta o documentación fehaciente.', 'Distinguir aprobación del acta de ejecutividad del acuerdo.', 'Expedir certificación por Secretaría con visto bueno cuando corresponda y advertencia de aprobación pendiente.', 'Limitar el certificado a extremos acreditados.'],
      ['Afirmar que el acuerdo no existe hasta aprobar el acta.', 'Certificar extremos no documentados.', 'Omitir la advertencia de acta pendiente.'],
      'Puede certificarse un acuerdo antes de aprobarse el acta si consta fehacientemente, haciendo constar expresamente esa circunstancia.'
    ),
    'Aprobación de una ordenanza fiscal': S(
      ['Artículos 15 a 19 del texto refundido de la Ley Reguladora de las Haciendas Locales'],
      ['Preparar memoria económico-financiera cuando proceda, informes y texto.', 'Aprobar provisionalmente por el Pleno.', 'Exponer el acuerdo durante al menos treinta días para reclamaciones.', 'Resolver reclamaciones y aprobar definitivamente; sin reclamaciones, el acuerdo provisional se eleva a definitivo.', 'Publicar texto íntegro o elementos legalmente exigidos en el BOP antes de su entrada en vigor.'],
      ['Aplicar el procedimiento general sin especialidades fiscales.', 'Omitir estudio económico en tasas.', 'Cobrar antes de publicar.'],
      'La modificación fiscal exige acuerdo provisional, exposición, resolución de reclamaciones y publicación oficial antes de surtir efectos.'
    ),
    'Modificación presupuestaria': S(
      ['Texto refundido de Haciendas Locales', 'Real Decreto 500/1990'],
      ['Comprobar que el gasto es específico, determinado y no puede demorarse.', 'Determinar si falta crédito o es insuficiente: crédito extraordinario o suplemento.', 'Identificar financiación válida, incluido remanente para gastos generales cuando sea positivo y utilizable.', 'Tramitar memoria, informes, competencia plenaria y procedimiento equivalente al presupuesto.', 'Publicar y controlar estabilidad, financiación afectada y disponibilidad.'],
      ['Usar transferencia para crear cualquier crédito.', 'Financiar con remanente negativo.', 'Ejecutar antes de la aprobación definitiva.'],
      'Un gasto nuevo sin crédito exige crédito extraordinario; si existe crédito insuficiente, suplemento, con financiación y aprobación legalmente previstas.'
    ),
    'Clasificación de una operación': S(
      ['Orden EHA/3565/2008'],
      ['Identificar si la operación es gasto o ingreso.', 'Clasificar nóminas en capítulo 1 de gastos.', 'Clasificar suministros corrientes en capítulo 2 e inversiones reales en capítulo 6.', 'Clasificar subvenciones de capital en capítulo 7 de gastos o ingresos según el sentido.', 'Clasificar préstamo recibido en capítulo 9 de ingresos y su amortización en capítulo 9 de gastos.'],
      ['Clasificar por proveedor y no por naturaleza.', 'Confundir transferencia e inversión.', 'Registrar préstamo recibido como ingreso corriente.'],
      'La clasificación económica atiende a la naturaleza: personal 1, corrientes 2, inversión 6, transferencias de capital 7 y pasivos financieros 9.'
    ),
    'Liquidación y estabilidad': S(
      ['Texto refundido de Haciendas Locales', 'Real Decreto 500/1990', 'Ley Orgánica 2/2012'],
      ['Calcular resultado presupuestario y remanente con sus ajustes.', 'Si el remanente para gastos generales es negativo, activar medidas correctoras legales.', 'Calcular capacidad o necesidad de financiación y gasto computable.', 'Si existe incumplimiento, elaborar plan económico-financiero con medidas y proyecciones.', 'Someterlo al órgano competente, remitir información y efectuar seguimiento.'],
      ['Confundir remanente con saldo bancario.', 'Ignorar dudoso cobro y financiación afectada.', 'Dar por cumplida estabilidad solo por tener caja positiva.'],
      'Deben tratarse separadamente liquidez, resultado presupuestario y estabilidad; cada incumplimiento exige la medida legal correspondiente.'
    ),
    'Factura electrónica y morosidad': S(
      ['Ley 25/2013', 'Ley 3/2004', 'Ley 9/2017'],
      ['Confirmar que la sociedad limitada está obligada a factura electrónica.', 'Requerir presentación por el punto general de entrada, salvo exclusión reglamentaria aplicable.', 'Anotar en registro contable y remitir al órgano gestor para conformidad.', 'Comprobar fecha de entrega, presentación y cumplimiento para calcular plazo de pago.', 'Si hay demora imputable, reconocer intereses y compensación por costes cuando proceda.'],
      ['Pagar una factura en papel inválidamente presentada.', 'Confundir presentación con conformidad de la prestación.', 'Ignorar intereses de demora.'],
      'La factura debe entrar por el canal electrónico y quedar trazada en el registro contable; el retraso de pago puede generar intereses y costes de cobro.'
    )
  };

  let enriched = 0;
  data.oposiciones.forEach(ope => {
    if (!['puebla-aux-admin-2026', 'carranque-aux-admin-2026'].includes(ope.id)) return;
    (ope.practicalCases || []).forEach(item => {
      const spec = specs[item.title];
      if (!spec) return;
      item.solution = spec;
      item.guidance = spec.conclusion;
      enriched += 1;
    });
  });

  window.OPOWEB_PRACTICOS_V71 = {
    version: 'v0.71.0',
    enrichedCases: enriched,
    expectedCases: 38,
    structure: ['legalBasis', 'steps', 'commonErrors', 'conclusion']
  };
})();
