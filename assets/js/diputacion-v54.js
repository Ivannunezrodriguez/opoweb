(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.54.0';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));

  const rawQuestions = {
    5: [
      ['¿Cuándo pueden actuar ante las Administraciones los menores de edad?', 'Cuando el ordenamiento les permita ejercer y defender derechos e intereses sin asistencia.', ['Nunca pueden actuar por sí mismos.', 'Solo cuando tengan dieciséis años.', 'Siempre que comparezcan electrónicamente.'], 'Artículo 3.b de la Ley 39/2015.'],
      ['¿Cuándo pueden tener capacidad de obrar los grupos de afectados o patrimonios independientes?', 'Cuando la ley lo declare expresamente.', ['Siempre y sin condición.', 'Solo mediante reglamento.', 'Únicamente ante los tribunales.'], 'Artículo 3.c de la Ley 39/2015.'],
      ['¿Quién puede actuar como representante ante una Administración?', 'Cualquier persona física con capacidad de obrar y las personas jurídicas cuando sus estatutos lo permitan.', ['Solo un abogado.', 'Solo un familiar directo.', 'Únicamente un procurador.'], 'Artículo 5.2 de la Ley 39/2015.'],
      ['¿Qué ocurre si la representación no se acredita suficientemente al realizar un acto?', 'Puede subsanarse en diez días o en un plazo superior cuando las circunstancias lo requieran.', ['El acto es nulo sin posibilidad de subsanación.', 'Se archiva siempre el expediente.', 'La Administración debe presumirla en cualquier actuación.'], 'Artículo 5.6 de la Ley 39/2015.'],
      ['¿Cómo puede otorgarse un apoderamiento apud acta?', 'Por comparecencia personal o electrónica en la sede correspondiente.', ['Solo mediante escritura notarial.', 'Exclusivamente por correo postal.', 'Únicamente ante un juzgado.'], 'Artículos 5.4 y 6 de la Ley 39/2015.'],
      ['¿Qué actuación exige firma, además de identificación?', 'Interponer un recurso administrativo.', ['Consultar el estado del expediente.', 'Solicitar información general.', 'Acceder al portal institucional.'], 'Artículo 11.2 de la Ley 39/2015.'],
      ['¿Qué necesita el funcionario habilitado para identificar o firmar por una persona no obligada?', 'Consentimiento expreso y constancia de la actuación.', ['Una autorización judicial.', 'Una escritura pública.', 'La aprobación del superior jerárquico en todo caso.'], 'Artículo 12.2 de la Ley 39/2015.'],
      ['¿Qué derecho general reconoce el artículo 13 sobre las lenguas?', 'Usar las lenguas oficiales en el territorio de la Comunidad Autónoma correspondiente.', ['Usar cualquier idioma extranjero con efectos obligatorios.', 'Exigir traducción jurada gratuita de todo documento.', 'Excluir el castellano en cualquier territorio.'], 'Artículo 13.c de la Ley 39/2015.'],
      ['¿Qué obligación tienen las personas respecto de las inspecciones administrativas?', 'Colaborar en los términos previstos por la ley.', ['Permitir cualquier actuación sin límites.', 'Comparecer siempre sin citación.', 'Entregar datos de terceros sin base legal.'], 'Artículo 18 de la Ley 39/2015.'],
      ['¿Cuándo es obligatoria la comparecencia de las personas ante oficinas públicas?', 'Solo cuando lo prevea una norma con rango de ley.', ['Siempre que lo solicite verbalmente un empleado.', 'Cuando exista una instrucción interna.', 'En todos los procedimientos iniciados de oficio.'], 'Artículo 19.1 de la Ley 39/2015.'],
      ['¿Cuál es el plazo máximo general fijado por una norma reglamentaria para resolver?', 'Seis meses, salvo que una ley o el Derecho de la Unión Europea establezcan otro mayor.', ['Tres meses sin excepción.', 'Un año.', 'No existe límite.'], 'Artículo 21.2 de la Ley 39/2015.'],
      ['¿Qué efecto tiene una suspensión del plazo máximo por petición de informe preceptivo a otra Administración?', 'Suspende por el tiempo entre la petición y la recepción, con el límite legal aplicable.', ['Amplía automáticamente el plazo por un año.', 'Produce caducidad inmediata.', 'Convierte el silencio en estimatorio.'], 'Artículo 22.1.d de la Ley 39/2015.'],
      ['¿Qué exige la ampliación excepcional del plazo máximo para resolver del artículo 23?', 'Motivación y agotamiento previo de los medios personales y materiales disponibles.', ['Petición obligatoria del interesado.', 'Autorización judicial.', 'Que el procedimiento sea sancionador.'], 'Artículo 23 de la Ley 39/2015.'],
      ['¿Cómo se acredita el silencio administrativo producido?', 'Mediante certificado expedido de oficio o a solicitud del interesado.', ['Solo mediante acta notarial.', 'Únicamente por sentencia.', 'No puede acreditarse documentalmente.'], 'Artículo 24.4 de la Ley 39/2015.'],
      ['¿Qué efecto tiene el vencimiento del plazo en un procedimiento sancionador iniciado de oficio?', 'Produce la caducidad en los términos legales.', ['Produce estimación por silencio.', 'Convierte la infracción en leve.', 'Obliga a imponer la sanción propuesta.'], 'Artículo 25.1.b de la Ley 39/2015.']
    ],
    6: [
      ['¿Qué derecho específico tiene el presunto responsable en un procedimiento sancionador?', 'Ser informado de los hechos imputados, infracción, sanciones posibles e identidad de instructor y autoridad competente.', ['Elegir libremente al instructor.', 'Impedir toda prueba de oficio.', 'Obtener archivo automático por negar los hechos.'], 'Artículo 53.2.a de la Ley 39/2015.'],
      ['¿Qué principio protege al expedientado sancionador mientras no se demuestre su responsabilidad?', 'La presunción de no existencia de responsabilidad administrativa.', ['La presunción de culpabilidad.', 'La ejecutividad anticipada de la sanción.', 'La inversión automática de la carga de la prueba.'], 'Artículo 53.2.b de la Ley 39/2015.'],
      ['¿Qué plazo existe para confirmar, modificar o levantar medidas provisionales adoptadas antes de iniciar el procedimiento?', 'Quince días desde su adopción.', ['Diez días hábiles.', 'Un mes.', 'Tres meses.'], 'Artículo 56.2 de la Ley 39/2015.'],
      ['¿Qué ocurre si el acuerdo de iniciación no se dicta dentro del plazo legal tras una medida provisional previa?', 'La medida queda sin efecto.', ['Se convierte en definitiva.', 'Se prorroga automáticamente.', 'Se transforma en sanción.'], 'Artículo 56.2 de la Ley 39/2015.'],
      ['¿Cuándo puede acordarse la acumulación de procedimientos?', 'Cuando guarden identidad sustancial o íntima conexión y el mismo órgano deba tramitarlos y resolverlos.', ['Cuando lo solicite cualquier tercero.', 'Solo si todos son sancionadores.', 'Únicamente después de la audiencia.'], 'Artículo 57 de la Ley 39/2015.'],
      ['¿Puede exigirse simultáneamente declaración responsable y comunicación para iniciar la misma actividad?', 'No.', ['Sí, siempre.', 'Solo si lo decide el instructor.', 'Solo a personas físicas.'], 'Artículo 69.6 de la Ley 39/2015.'],
      ['¿Cómo deben guardarse los asuntos de naturaleza homogénea al despacharlos?', 'Por el orden riguroso de incoación, salvo orden motivada en contrario.', ['Por cuantía económica.', 'Por orden alfabético.', 'Según preferencia del instructor.'], 'Artículo 71.2 de la Ley 39/2015.'],
      ['¿Qué efecto general tienen las cuestiones incidentales sobre la tramitación?', 'No la suspenden, salvo la recusación.', ['La suspenden siempre.', 'Producen caducidad.', 'Finalizan el procedimiento.'], 'Artículo 74 de la Ley 39/2015.'],
      ['¿Cómo debe rechazarse una prueba propuesta por el interesado?', 'Mediante resolución motivada cuando sea manifiestamente improcedente o innecesaria.', ['Verbalmente y sin explicación.', 'Solo tras la resolución final.', 'No puede rechazarse ninguna prueba.'], 'Artículo 77.3 de la Ley 39/2015.'],
      ['¿Cuál es el plazo general para emitir un informe solicitado durante la instrucción?', 'Diez días, salvo que una disposición o el resto de plazos permita o exija otro.', ['Tres días.', 'Veinte días invariables.', 'Un mes en todo caso.'], 'Artículo 80.2 de la Ley 39/2015.'],
      ['¿Cuándo puede prescindirse del trámite de audiencia?', 'Cuando no figuren ni sean tenidos en cuenta hechos, alegaciones o pruebas distintos de los aportados por el interesado.', ['Siempre que el órgano tenga prisa.', 'Cuando exista informe jurídico.', 'En todo procedimiento sancionador.'], 'Artículo 82.4 de la Ley 39/2015.'],
      ['¿Qué plazo mínimo tiene la información pública?', 'Veinte días.', ['Diez días.', 'Quince días.', 'Un mes exacto.'], 'Artículo 83.2 de la Ley 39/2015.'],
      ['¿Qué efecto tiene comparecer en el trámite de información pública?', 'No otorga por sí solo la condición de interesado.', ['Convierte siempre al compareciente en interesado.', 'Le concede derecho a decidir.', 'Suspende el procedimiento.'], 'Artículo 83.3 de la Ley 39/2015.'],
      ['¿Qué plazo tienen terceros interesados para instar la continuación tras un desistimiento?', 'Diez días desde que se les notifique.', ['Cinco días.', 'Quince días.', 'Un mes.'], 'Artículo 94.4 de la Ley 39/2015.'],
      ['¿Interrumpe la prescripción un procedimiento declarado caducado?', 'No.', ['Sí, siempre.', 'Solo si era sancionador.', 'Solo durante tres meses.'], 'Artículo 95.3 de la Ley 39/2015.']
    ],
    7: [
      ['¿Cómo debe ser el contenido de un acto administrativo?', 'Determinado y adecuado a sus fines.', ['Indeterminado para permitir flexibilidad.', 'Idéntico en todos los procedimientos.', 'Reservado incluso para el interesado.'], 'Artículo 34.2 de la Ley 39/2015.'],
      ['¿Cómo se deja constancia de un acto dictado verbalmente cuando sea necesaria forma escrita?', 'El órgano inferior o funcionario receptor lo consigna expresando la autoridad de la que procede.', ['Se presume inexistente.', 'Debe repetirlo un notario.', 'Se publica siempre en el BOE.'], 'Artículo 36.2 de la Ley 39/2015.'],
      ['¿Puede una resolución administrativa singular vulnerar una disposición general?', 'No, aunque proceda de un órgano de igual o superior jerarquía.', ['Sí, si el órgano es superior.', 'Sí, si beneficia al interesado.', 'Solo si la disposición es local.'], 'Artículo 37.1 de la Ley 39/2015.'],
      ['¿Cuándo puede otorgarse eficacia retroactiva a un acto favorable?', 'Cuando los supuestos de hecho existían ya y no se lesionan derechos de otras personas.', ['Siempre que lo pida el interesado.', 'Nunca.', 'Solo mediante sentencia.'], 'Artículo 39.3 de la Ley 39/2015.'],
      ['¿Qué efecto puede producir una notificación con el texto íntegro pero sin indicar correctamente los recursos?', 'Produce efectos cuando el interesado realiza actuaciones que revelan conocimiento o interpone el recurso procedente.', ['Es nula en todo caso y para siempre.', 'Produce caducidad automática.', 'Convierte el acto en favorable.'], 'Artículo 40.3 de la Ley 39/2015.'],
      ['¿Qué ocurre cuando el interesado rechaza una notificación?', 'Se hace constar y se tiene por efectuado el trámite, continuando el procedimiento.', ['Debe repetirse indefinidamente.', 'Se anula el acto.', 'Se estima su solicitud.'], 'Artículo 41.5 de la Ley 39/2015.'],
      ['¿Cuándo debe repetirse un intento de notificación en papel en el domicilio?', 'Una sola vez y en una hora distinta dentro de los tres días siguientes.', ['Cada día durante un mes.', 'Solo si lo pide el interesado.', 'Nunca se repite.'], 'Artículo 42.2 de la Ley 39/2015.'],
      ['¿Qué diferencia horaria mínima debe existir entre los dos intentos de notificación en papel?', 'Tres horas.', ['Una hora.', 'Seis horas.', 'Doce horas.'], 'Artículo 42.2 de la Ley 39/2015.'],
      ['¿Dónde se publica una notificación infructuosa a interesados desconocidos o de domicilio ignorado?', 'Mediante anuncio en el Boletín Oficial del Estado.', ['Solo en el tablón municipal.', 'En cualquier periódico.', 'En el portal de transparencia exclusivamente.'], 'Artículo 44 de la Ley 39/2015.'],
      ['¿Qué acto es nulo por razón de competencia?', 'El dictado por órgano manifiestamente incompetente por materia o territorio.', ['El dictado por incompetencia jerárquica no manifiesta en todo caso.', 'Cualquier acto firmado por suplente.', 'Todo acto fuera de plazo.'], 'Artículo 47.1.b de la Ley 39/2015.'],
      ['¿Qué acto es nulo por adquisición de derechos?', 'El que permite adquirir facultades o derechos careciendo de requisitos esenciales.', ['Todo acto favorable.', 'Cualquier licencia temporal.', 'Todo acto dictado con un defecto formal menor.'], 'Artículo 47.1.f de la Ley 39/2015.'],
      ['¿Cuándo un defecto de forma determina anulabilidad?', 'Cuando faltan requisitos formales indispensables o produce indefensión.', ['Ante cualquier errata.', 'Solo si lo denuncia un tercero.', 'Nunca.'], 'Artículo 48.2 de la Ley 39/2015.'],
      ['¿Cuándo la actuación fuera de plazo determina anulabilidad?', 'Cuando así lo imponga la naturaleza del término o plazo.', ['Siempre.', 'Nunca.', 'Solo en notificaciones electrónicas.'], 'Artículo 48.3 de la Ley 39/2015.'],
      ['¿Qué permite la conversión de un acto inválido?', 'Que produzca los efectos de otro acto distinto cuyos elementos contenga.', ['Transformar una ley en reglamento.', 'Eliminar toda motivación.', 'Convalidar actos nulos de pleno derecho.'], 'Artículo 50 de la Ley 39/2015.'],
      ['¿Desde cuándo produce efectos, como regla, la convalidación?', 'Desde la fecha del acto de convalidación.', ['Desde el inicio del procedimiento siempre.', 'Desde la fecha del acto inválido sin excepción.', 'Desde su publicación en el BOE.'], 'Artículo 52.2 de la Ley 39/2015.']
    ],
    8: [
      ['¿En qué momento puede iniciarse la revisión de oficio de un acto nulo?', 'En cualquier momento.', ['Solo dentro de un año.', 'Solo dentro de cuatro años.', 'Únicamente antes de que sea firme.'], 'Artículo 106.1 de la Ley 39/2015.'],
      ['¿Qué dictamen exige la declaración de nulidad en revisión de oficio?', 'Dictamen favorable del Consejo de Estado u órgano consultivo autonómico equivalente.', ['Informe no vinculante del instructor.', 'Autorización judicial previa.', 'Acuerdo del interesado.'], 'Artículo 106 de la Ley 39/2015.'],
      ['¿Cuándo puede inadmitirse una solicitud de revisión de nulidad sin pedir dictamen?', 'Cuando no se base en causa de nulidad, carezca manifiestamente de fundamento o se hayan desestimado otras sustancialmente iguales.', ['Nunca.', 'Solo después de audiencia.', 'Cuando el acto sea desfavorable.'], 'Artículo 106.3 de la Ley 39/2015.'],
      ['¿Cuál es el plazo para declarar lesivo un acto favorable anulable?', 'Cuatro años desde que se dictó.', ['Un año.', 'Tres meses.', 'No existe plazo.'], 'Artículo 107.2 de la Ley 39/2015.'],
      ['¿Cuándo caduca el procedimiento de lesividad?', 'A los seis meses desde su iniciación sin declaración.', ['Al mes.', 'Al año.', 'Nunca caduca.'], 'Artículo 107.3 de la Ley 39/2015.'],
      ['¿Puede suspenderse la ejecución durante un procedimiento de revisión de oficio?', 'Sí, si puede causar perjuicios de imposible o difícil reparación.', ['No, nunca.', 'Solo por petición judicial.', 'Siempre de forma automática.'], 'Artículo 108 de la Ley 39/2015.'],
      ['¿Qué actos puede revocar la Administración mientras no haya prescrito?', 'Sus actos desfavorables o de gravamen, dentro de los límites legales.', ['Cualquier acto favorable firme.', 'Las leyes.', 'Las sentencias judiciales.'], 'Artículo 109.1 de la Ley 39/2015.'],
      ['¿Cuándo pueden rectificarse errores materiales, de hecho o aritméticos?', 'En cualquier momento, de oficio o a instancia de interesado.', ['Solo durante el mes siguiente.', 'Únicamente mediante recurso.', 'Solo antes de notificar.'], 'Artículo 109.2 de la Ley 39/2015.'],
      ['¿Qué límites generales tiene la revisión administrativa?', 'Equidad, buena fe, derechos de los particulares y leyes.', ['Solo el presupuesto disponible.', 'La voluntad del órgano.', 'Ninguno.'], 'Artículo 110 de la Ley 39/2015.'],
      ['¿Qué actos de trámite pueden recurrirse autónomamente?', 'Los que decidan el fondo, impidan continuar, produzcan indefensión o perjuicio irreparable.', ['Todos los actos de trámite.', 'Ninguno.', 'Solo los informes facultativos.'], 'Artículo 112.1 de la Ley 39/2015.'],
      ['¿Cabe recurso administrativo directo contra una disposición general?', 'No.', ['Sí, alzada.', 'Sí, reposición obligatoria.', 'Sí, extraordinario de revisión.'], 'Artículo 112.3 de la Ley 39/2015.'],
      ['¿Qué puede alegarse al recurrir un acto fundado únicamente en la nulidad de una disposición general?', 'La nulidad de la disposición ante el órgano que la dictó.', ['Solo errores aritméticos.', 'La prescripción penal.', 'La recusación del denunciante.'], 'Artículo 112.3 de la Ley 39/2015.'],
      ['¿En cuánto tiempo debe remitirse al superior un recurso de alzada presentado ante el órgano autor del acto?', 'Diez días, con informe y copia completa y ordenada del expediente.', ['Tres días.', 'Un mes.', 'Dos meses.'], 'Artículo 121.2 de la Ley 39/2015.'],
      ['¿Puede interponerse otra reposición contra la resolución de una reposición?', 'No.', ['Sí, siempre.', 'Solo si es expresa.', 'Solo ante el mismo órgano.'], 'Artículo 124.3 de la Ley 39/2015.'],
      ['¿Qué plazo tiene el recurso extraordinario de revisión por aparición de documentos esenciales?', 'Tres meses desde su conocimiento.', ['Cuatro años.', 'Un mes.', 'Seis meses.'], 'Artículo 125.2 de la Ley 39/2015.']
    ],
    9: [
      ['¿Qué permite un sistema de identificación electrónica?', 'Verificar la identidad del interesado.', ['Acreditar siempre su voluntad de recurrir.', 'Sustituir cualquier resolución.', 'Eliminar la necesidad de expediente.'], 'Artículo 9 de la Ley 39/2015.'],
      ['¿Qué sistema puede admitir una Administración como identificación además de certificados?', 'Un sistema de clave concertada u otro válido que establezca.', ['Solo una contraseña privada sin control.', 'Cualquier perfil de red social.', 'Una firma manuscrita fotografiada en todo caso.'], 'Artículo 9.2 de la Ley 39/2015.'],
      ['¿Qué acredita la firma electrónica del interesado?', 'Autenticidad de la voluntad, integridad e inalterabilidad del documento.', ['Solo el domicilio.', 'La competencia del órgano.', 'El sentido del silencio.'], 'Artículo 10 de la Ley 39/2015.'],
      ['¿Puede un sistema de firma válido utilizarse también para identificar?', 'Sí, cuando permita acreditar la identidad.', ['No, nunca.', 'Solo en procedimientos sancionadores.', 'Solo con autorización judicial.'], 'Artículo 10.4 de la Ley 39/2015.'],
      ['¿Qué debe hacer la Administración con quienes no están obligados y solicitan ayuda electrónica?', 'Prestar asistencia para identificación, firma, solicitudes y copias auténticas en los términos legales.', ['Obligarles a contratar un gestor.', 'Rechazar la solicitud.', 'Remitirlos siempre a Correos.'], 'Artículo 12 de la Ley 39/2015.'],
      ['¿Cuándo está abierto un registro electrónico para presentar documentos?', 'Todos los días del año durante veinticuatro horas.', ['Solo en horario de oficina.', 'Solo los días hábiles.', 'Únicamente de lunes a viernes.'], 'Artículo 31.2.a de la Ley 39/2015.'],
      ['¿Qué referencia temporal rige el cómputo en un registro electrónico?', 'La fecha y hora oficial de la sede electrónica de acceso.', ['La hora del equipo del interesado.', 'La hora de envío del correo ordinario.', 'La fecha de apertura por el funcionario.'], 'Artículo 31.2 de la Ley 39/2015.'],
      ['¿Qué debe conservar el archivo electrónico único?', 'Los documentos electrónicos de procedimientos finalizados, en formato que garantice autenticidad, integridad y conservación.', ['Solo resoluciones favorables.', 'Únicamente correos electrónicos.', 'Los borradores sin valor.'], 'Artículo 17 de la Ley 39/2015.'],
      ['¿Qué requisito debe incorporar un documento administrativo electrónico válido?', 'Metadatos mínimos y firmas electrónicas que correspondan.', ['Solo una imagen del sello.', 'Únicamente el nombre del archivo.', 'Una contraseña compartida.'], 'Artículo 26 de la Ley 39/2015.'],
      ['¿Dónde debe publicarse la creación de una sede electrónica de una entidad local?', 'En el boletín oficial de la provincia y en el directorio del Punto de Acceso General correspondiente.', ['Solo en la web municipal.', 'En el BOE exclusivamente.', 'En una red social.'], 'Artículo 10 del Real Decreto 203/2021.'],
      ['¿Qué información temporal debe mostrar una sede electrónica?', 'Fecha y hora oficial y calendario de días inhábiles aplicable.', ['Solo el año en curso.', 'La hora local del usuario.', 'Únicamente el horario de atención telefónica.'], 'Artículo 11.1.f del Real Decreto 203/2021.'],
      ['¿Qué debe informar la sede cuando una incidencia técnica impide su funcionamiento ordinario?', 'La incidencia y, en su caso, la ampliación del plazo no vencido acordada.', ['Que el plazo queda siempre suspendido automáticamente.', 'Que toda presentación por correo será válida.', 'Que el procedimiento ha caducado.'], 'Artículo 11.1.g del Real Decreto 203/2021.'],
      ['¿Qué caracteriza a una actuación administrativa automatizada?', 'Se realiza íntegramente por medios electrónicos sin intervención directa de un empleado público.', ['La decide siempre un particular.', 'No puede producir actos.', 'Carece de órgano responsable.'], 'Artículo 41 de la Ley 40/2015.'],
      ['¿Qué debe garantizar un código seguro de verificación?', 'Origen, integridad, unicidad y vinculación con el documento y, en su caso, el firmante.', ['Solo confidencialidad absoluta.', 'La inexistencia de copias.', 'La publicación del expediente completo.'], 'Artículo 21 del Real Decreto 203/2021.'],
      ['¿Cómo debe ser la comprobación de un documento mediante CSV en la sede?', 'Directa y gratuita para las personas interesadas.', ['De pago.', 'Solo presencial.', 'Limitada al órgano emisor.'], 'Artículo 21 del Real Decreto 203/2021.']
    ]
  };

  function makeQuestions(number, rows) {
    const source = number === 9 ? 'BOE · Ley 39/2015, Ley 40/2015 y Real Decreto 203/2021' : 'BOE · Ley 39/2015';
    return rows.map((row, index) => {
      const [text, correct, wrongs, justification] = row;
      const options = [correct, ...wrongs];
      const shift = (number + index + 2) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `dip-v54-t${number}-q${index + 1}`,
        text,
        options: ordered.map((option, position) => ({ letter: 'ABCD'[position], text: option })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification,
        difficulty: index < 5 ? 'baja' : index < 11 ? 'media' : 'alta',
        source
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

  [5, 6, 7, 8, 9].forEach(number => {
    const currentTheme = theme(number);
    if (!currentTheme) return;
    const existing = (ope.themeTests[currentTheme.id] || []).filter(valid).filter(question => !isGeneric(question));
    const extra = makeQuestions(number, rawQuestions[number]);
    const seen = new Set();
    const merged = [...extra, ...existing].filter(question => {
      const key = norm(question.text);
      if (!key || seen.has(key)) return false;
      seen.add(key);
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
    version: 'v0.54.0', themes: allThemes, ...totals,
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
  const realPools = ope.themes.map(item => ({ theme: item, questions: shuffle((ope.themeTests[item.id] || []).filter(valid).filter(question => !isGeneric(question)), 5400 + Number(item.number)) }));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 340) {
      for (const pool of realPools) {
        if (!pool.questions.length || Number(pool.theme.number) === 22) continue;
        const question = pool.questions[(round + seed) % pool.questions.length];
        const key = norm(question.text);
        if (used.has(key)) continue;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(pool.theme.number) });
        if (selected.length >= 55) break;
      }
      round += 1;
    }
    const ordered = shuffle(selected, seed * 5413);
    const main = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v54-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v54-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v54-sim${seed}`,
      title: `Simulacro Diputación ${seed} · 50 + 5 reserva`,
      questions: main,
      reserveQuestions: reserve,
      audit: { main: main.length, reserve: reserve.length, expectedMain: 50, expectedReserve: 5, minutes: 60, coveredThemes: new Set(ordered.map(question => question.auditTheme)).size, realOnly: true, excludedPendingThemes: [22] }
    };
  }

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-10',
    changes: [
      'Añadidas 75 preguntas nuevas a los temas 5 a 9',
      'Temas 5 a 9 elevados al objetivo de 30 preguntas reales',
      'Nueve primeros temas del programa completan la segunda vuelta de banco',
      'Regenerados los tres simulacros tipo test con el banco reforzado'
    ]
  });

  window.OPOWEB_DIPUTACION_V54 = {
    version: `v${VERSION}`,
    reinforcedThemes: [5, 6, 7, 8, 9],
    addedQuestions: 75,
    cumulativeSecondPassQuestions: 135,
    cumulativeManualQuestions: 720,
    themesAtTargetInSecondPass: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    targetPerTheme: 30
  };
})();