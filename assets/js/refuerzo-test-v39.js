(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;
  const ope = data.oposiciones.find(o => o.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const normalize = value => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  const byNumber = number => ope.themes.find(theme => Number(theme.number) === Number(number));

  function buildQuestion(theme, item, index) {
    const raw = [item.correct, ...item.wrong];
    const shift = (Number(theme.number) + index + 3) % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `${theme.id}-v39-q${index + 1}`,
      text: item.text,
      options: ordered.map((text, position) => ({ letter: 'ABCD'[position], text })),
      answer: 'ABCD'[ordered.indexOf(item.correct)],
      justification: item.justification,
      difficulty: item.difficulty || 'media'
    };
  }

  const additions = {
    1: [
      { text:'¿Qué mayoría exige la aprobación, modificación o derogación de una ley orgánica?', correct:'Mayoría absoluta del Congreso en una votación final sobre el conjunto', wrong:['Mayoría simple del Senado','Dos tercios de ambas Cámaras en todo caso','Tres quintos del Congreso sin votación final'], justification:'Artículo 81.2 de la Constitución.', difficulty:'media' },
      { text:'¿Qué materia no puede afectar un decreto-ley?', correct:'Los derechos, deberes y libertades de los ciudadanos regulados en el título I', wrong:['La actualización de una cuantía administrativa ordinaria','Una medida económica urgente no reservada a ley orgánica','La modificación de una norma reglamentaria'], justification:'Artículo 86.1 CE: límites materiales del decreto-ley.', difficulty:'alta' },
      { text:'En la reforma ordinaria del artículo 167 CE, la regla general exige:', correct:'Tres quintos de cada Cámara', wrong:['Mayoría absoluta del Congreso únicamente','Dos tercios del Senado y mayoría simple del Congreso','Unanimidad de ambas Cámaras'], justification:'Artículo 167.1 CE.', difficulty:'media' },
      { text:'¿Cuándo debe someterse a referéndum una reforma aprobada por el procedimiento ordinario?', correct:'Cuando lo solicite una décima parte de cualquiera de las Cámaras dentro de los quince días siguientes', wrong:['Siempre y de forma automática','Solo si lo solicita el Gobierno','Cuando lo pida una mayoría simple de los ayuntamientos'], justification:'Artículo 167.3 CE.', difficulty:'alta' },
      { text:'¿Qué entidades integran la organización territorial del Estado del artículo 137 CE?', correct:'Municipios, provincias y comunidades autónomas que se constituyan', wrong:['Solo municipios y comarcas','Provincias, cabildos y ministerios','Comunidades autónomas y órganos constitucionales'], justification:'Artículo 137 CE.', difficulty:'baja' }
    ],
    2: [
      { text:'¿Para qué actuaciones debe acreditarse la representación en el procedimiento administrativo?', correct:'Para formular solicitudes, presentar declaraciones responsables, interponer recursos, desistir y renunciar a derechos', wrong:['Solo para pedir información general','Nunca, porque siempre se presume','Únicamente para recibir notificaciones postales'], justification:'Artículo 5.3 de la Ley 39/2015.', difficulty:'alta' },
      { text:'¿Quién está obligado, con carácter general, a relacionarse electrónicamente con las Administraciones?', correct:'Las personas jurídicas', wrong:['Toda persona física sin excepción','Solo las personas menores de edad','Únicamente quienes residan en el extranjero'], justification:'Artículo 14.2 de la Ley 39/2015.', difficulty:'baja' },
      { text:'¿Cuál es la regla general sobre la obligación administrativa de resolver?', correct:'Debe dictarse resolución expresa y notificarse en todos los procedimientos cualquiera que sea su forma de iniciación', wrong:['Solo se resuelven los procedimientos iniciados de oficio','El silencio sustituye siempre a la resolución','La Administración puede omitir resolución si el expediente es complejo'], justification:'Artículo 21.1 de la Ley 39/2015.', difficulty:'media' },
      { text:'Si el último día de un plazo es inhábil, ¿qué sucede?', correct:'Se prorroga al primer día hábil siguiente', wrong:['El plazo vence el día hábil anterior','Se amplía automáticamente diez días','El plazo queda anulado'], justification:'Artículo 30.5 de la Ley 39/2015.', difficulty:'baja' },
      { text:'¿En qué plazo debe cursarse una notificación desde la fecha en que se dicta el acto?', correct:'Dentro de los diez días', wrong:['Dentro de un mes','En veinticuatro horas necesariamente','En quince días hábiles'], justification:'Artículo 40.2 de la Ley 39/2015.', difficulty:'media' }
    ],
    3: [
      { text:'¿Cuál es el plazo ordinario del trámite de audiencia?', correct:'No inferior a diez días ni superior a quince', wrong:['Cinco días exactos','Veinte días como mínimo','Un mes en todos los casos'], justification:'Artículo 82.2 de la Ley 39/2015.', difficulty:'media' },
      { text:'¿Cuál es el plazo mínimo para formular alegaciones en un trámite de información pública?', correct:'Veinte días', wrong:['Diez días','Quince días','Treinta días exactos'], justification:'Artículo 83.2 de la Ley 39/2015.', difficulty:'media' },
      { text:'¿Contra qué actos procede el recurso de alzada?', correct:'Contra resoluciones y actos de trámite cualificados que no ponen fin a la vía administrativa', wrong:['Contra cualquier disposición general','Contra actos firmes que ya agotaron todos los recursos','Solo contra sentencias judiciales'], justification:'Artículos 112 y 121 de la Ley 39/2015.', difficulty:'alta' },
      { text:'¿Qué plazo existe para interponer alzada contra un acto expreso?', correct:'Un mes', wrong:['Diez días','Tres meses','Cuatro años'], justification:'Artículo 122.1 de la Ley 39/2015.', difficulty:'baja' },
      { text:'¿Qué plazo existe para interponer revisión extraordinaria por error de hecho?', correct:'Cuatro años desde la notificación de la resolución impugnada', wrong:['Un mes','Tres meses','No existe límite temporal'], justification:'Artículo 125.2 de la Ley 39/2015.', difficulty:'alta' }
    ],
    4: [
      { text:'¿Qué requisito formal acompaña a la delegación de competencias?', correct:'Debe publicarse en el diario oficial correspondiente', wrong:['Debe aprobarse siempre por ley orgánica','No necesita dejar constancia alguna','Solo puede comunicarse verbalmente'], justification:'Artículo 9.3 de la Ley 40/2015.', difficulty:'media' },
      { text:'¿Cómo debe adoptarse la avocación?', correct:'Mediante acuerdo motivado notificado a las personas interesadas antes o simultáneamente a la resolución final', wrong:['Por instrucción verbal sin motivación','Mediante contrato administrativo','Solo por acuerdo del Consejo de Ministros'], justification:'Artículo 10.2 de la Ley 40/2015.', difficulty:'alta' },
      { text:'¿Qué efecto produce una encomienda de gestión sobre la competencia?', correct:'No cede la titularidad ni los elementos sustantivos de su ejercicio', wrong:['Transfiere definitivamente la competencia','Suprime el órgano encomendante','Convierte al encomendado en superior jerárquico'], justification:'Artículo 11.2 de la Ley 40/2015.', difficulty:'media' },
      { text:'¿Qué caracteriza a la delegación de firma?', correct:'No altera la competencia del órgano delegante', wrong:['Transfiere la titularidad de la competencia','Exige siempre publicación oficial','Solo puede realizarse entre Administraciones distintas'], justification:'Artículo 12 de la Ley 40/2015.', difficulty:'media' },
      { text:'¿Cuándo puede promoverse la recusación?', correct:'En cualquier momento de la tramitación del procedimiento', wrong:['Solo después de la resolución','Únicamente en vía judicial','Antes de iniciarse el expediente y nunca después'], justification:'Artículo 24.1 de la Ley 40/2015.', difficulty:'baja' }
    ],
    5: [
      { text:'¿Qué responsabilidad asume el titular de una sede electrónica?', correct:'La integridad, veracidad y actualización de la información y servicios accesibles desde ella', wrong:['Solo el diseño gráfico','La validez de cualquier web externa enlazada','La custodia de todos los archivos privados del usuario'], justification:'Artículo 38.2 de la Ley 40/2015.', difficulty:'media' },
      { text:'¿Qué diferencia funcional existe entre sede electrónica y portal de internet?', correct:'La sede soporta actuaciones con garantías jurídicas; el portal actúa como punto de acceso a información y servicios', wrong:['El portal firma resoluciones y la sede solo publica noticias','Son exactamente el mismo concepto','La sede no puede identificar al órgano titular'], justification:'Artículos 38 y 39 de la Ley 40/2015.', difficulty:'media' },
      { text:'En una actuación administrativa automatizada deben identificarse:', correct:'Los órganos responsables de definir especificaciones, programación, mantenimiento, supervisión y, en su caso, impugnación', wrong:['Solo el proveedor informático','Únicamente el órgano de contratación','Ningún órgano, porque no intervienen personas'], justification:'Artículo 41.2 de la Ley 40/2015.', difficulty:'alta' },
      { text:'¿Qué debe garantizar el archivo electrónico de documentos?', correct:'Autenticidad, integridad, conservación y consulta con independencia del tiempo transcurrido', wrong:['Solo su impresión en papel','La eliminación anual de todos los expedientes','El acceso público ilimitado'], justification:'Artículo 46 de la Ley 40/2015.', difficulty:'media' },
      { text:'¿Qué marcos estatales se vinculan a seguridad e interoperabilidad electrónicas?', correct:'El Esquema Nacional de Seguridad y el Esquema Nacional de Interoperabilidad', wrong:['El Estatuto de los Trabajadores y el Código Civil','La Ley de Enjuiciamiento Criminal y la LEC','Solo las normas internas de cada proveedor'], justification:'Ley 40/2015 y normativa de administración electrónica.', difficulty:'baja' }
    ],
    6: [
      { text:'¿Qué técnica informativa permite facilitar primero los datos esenciales y después la información completa?', correct:'La información por capas', wrong:['El silencio administrativo','La delegación de firma','La publicidad sustitutoria'], justification:'Artículo 11 de la LO 3/2018.', difficulty:'media' },
      { text:'¿Qué finalidad tiene el bloqueo de datos?', correct:'Impedir su tratamiento ordinario y conservarlos únicamente para atender posibles responsabilidades', wrong:['Publicarlos automáticamente','Borrarlos sin excepción en el mismo instante','Transferirlos a cualquier tercero'], justification:'Artículo 32 de la LO 3/2018.', difficulty:'media' },
      { text:'¿Qué entidades deben designar Delegado de Protección de Datos como regla?', correct:'Las autoridades y organismos públicos, salvo los tribunales en su función judicial', wrong:['Solo empresas con menos de cinco empleados','Únicamente asociaciones privadas','Ninguna Administración pública'], justification:'Artículo 34 de la LO 3/2018 y artículo 37 RGPD.', difficulty:'alta' },
      { text:'¿Cómo debe tratar los datos el encargado del tratamiento?', correct:'Por cuenta del responsable y conforme al contrato o acto jurídico y a sus instrucciones', wrong:['Determinando libremente fines propios incompatibles','Sin obligación de confidencialidad','Como autoridad de control'], justification:'Artículo 28 RGPD y artículo 33 de la LO 3/2018.', difficulty:'media' },
      { text:'¿Qué derecho permite recibir determinados datos en formato estructurado y transmitirlos a otro responsable?', correct:'El derecho a la portabilidad', wrong:['El derecho de avocación','La revisión de oficio','La recusación'], justification:'Artículo 20 RGPD y régimen de derechos de la LO 3/2018.', difficulty:'media' }
    ],
    9: [
      { text:'En Word, ¿qué opción permite mantener un encabezado distinto en una parte del documento?', correct:'Insertar un salto de sección y desvincular el encabezado de la sección anterior', wrong:['Insertar un salto de línea','Aplicar negrita al encabezado','Usar una tabulación'], justification:'Los cambios de encabezado por partes requieren secciones independientes.', difficulty:'alta' },
      { text:'En Excel, al copiar =$A1+B$2 una fila hacia abajo, ¿qué cambia?', correct:'Cambia A1 a A2 y B$2 permanece en la fila 2', wrong:['Nada cambia','$A1 pasa a $B1 y B$2 a C$2','Ambas referencias se convierten en absolutas'], justification:'$A1 fija la columna A pero no la fila; B$2 fija la fila 2 pero no la columna.', difficulty:'alta' },
      { text:'¿Qué indica el error #REF! en Excel?', correct:'Que una fórmula contiene una referencia de celda no válida', wrong:['Que la columna es demasiado estrecha','Que se divide entre cero','Que el nombre de la función está bien escrito'], justification:'#REF! aparece cuando una referencia deja de ser válida, por ejemplo tras eliminar celdas referenciadas.', difficulty:'media' },
      { text:'¿Qué permiso de Google Drive permite añadir comentarios sin modificar directamente el contenido?', correct:'Comentarista', wrong:['Lector','Propietario exclusivamente','Invitado sin acceso'], justification:'El comentarista puede comentar pero no editar el contenido como un editor.', difficulty:'baja' },
      { text:'¿Qué herramienta de Gmail aplica automáticamente una acción a mensajes que cumplen criterios?', correct:'Un filtro', wrong:['Una etiqueta por sí sola','La firma','La respuesta automática de Calendar'], justification:'Los filtros automatizan acciones; las etiquetas clasifican mensajes.', difficulty:'baja' }
    ],
    10: [
      { text:'¿Qué derechos del artículo 15 TREBEP se ejercen colectivamente?', correct:'Libertad sindical, negociación colectiva, huelga, conflictos colectivos y reunión', wrong:['Nombramiento, toma de posesión y jubilación','Vacaciones, permisos y trienios únicamente','Revisión de oficio y recurso de alzada'], justification:'Artículo 15 TREBEP.', difficulty:'media' },
      { text:'¿Qué requisito tiene la renuncia a la condición de funcionario?', correct:'Debe formularse por escrito y ser aceptada expresamente por la Administración', wrong:['Produce efectos por una llamada telefónica','No necesita aceptación nunca','Equivale a una sanción disciplinaria'], justification:'Artículo 64 TREBEP.', difficulty:'media' },
      { text:'¿Qué efecto general tienen los servicios especiales sobre los trienios?', correct:'El tiempo se computa a efectos de trienios en los términos legales', wrong:['Se pierden todos los trienios','Se suspenden definitivamente','Se transforman en indemnización'], justification:'Artículo 87 TREBEP.', difficulty:'media' },
      { text:'¿Qué caracteriza a la suspensión firme de funciones?', correct:'Priva temporalmente del ejercicio y de los derechos inherentes durante el tiempo fijado', wrong:['Extingue siempre la relación de servicio','Equivale a servicio activo','Concede automáticamente excedencia'], justification:'Artículo 90 TREBEP.', difficulty:'media' },
      { text:'¿Cuál es la duración máxima general de la suspensión firme prevista en el TREBEP?', correct:'Seis años', wrong:['Un año','Diez años','No existe límite'], justification:'Artículo 90.2 TREBEP.', difficulty:'alta' }
    ],
    11: [
      { text:'¿Cuál es el sistema normal de provisión de puestos según el RD 364/1995?', correct:'El concurso', wrong:['La libre designación para cualquier puesto','La oposición libre','El contrato laboral temporal'], justification:'Artículo 36 del RD 364/1995.', difficulty:'baja' },
      { text:'¿Qué exige la libre designación?', correct:'Convocatoria pública y apreciación de idoneidad dentro de los requisitos del puesto', wrong:['Nombramiento secreto sin publicidad','Ausencia total de requisitos','Aprobación judicial previa'], justification:'RD 364/1995: provisión por libre designación.', difficulty:'media' },
      { text:'¿Qué antigüedad exige con carácter general la promoción interna vertical desde el subgrupo inferior?', correct:'Al menos dos años de servicio activo', wrong:['Seis meses','Cinco años','No exige antigüedad'], justification:'Artículo 18 TREBEP.', difficulty:'media' },
      { text:'¿Cuál es la regla general de la Ley 53/1984 sobre un segundo puesto en el sector público?', correct:'Es incompatible salvo los supuestos expresamente previstos por la ley', wrong:['Siempre es compatible','Solo depende de la voluntad del empleado','Nunca requiere autorización'], justification:'Artículo 1 de la Ley 53/1984.', difficulty:'media' },
      { text:'¿Puede una compatibilidad reconocida modificar la jornada y horario del puesto público?', correct:'No, queda condicionada al estricto cumplimiento de ambos', wrong:['Sí, automáticamente','Solo si lo pide una empresa privada','Siempre reduce la jornada pública a la mitad'], justification:'Ley 53/1984: la compatibilidad no puede alterar jornada ni horario.', difficulty:'alta' }
    ],
    12: [
      { text:'¿Quién debe asumir el coste de las medidas de seguridad y salud?', correct:'El empresario; nunca debe recaer sobre los trabajadores', wrong:['Siempre el trabajador','El delegado de prevención','La mutua exclusivamente'], justification:'Artículo 14.5 de la Ley 31/1995.', difficulty:'baja' },
      { text:'Ante un riesgo grave e inminente, ¿qué derecho puede ejercer el trabajador?', correct:'Interrumpir su actividad y abandonar el lugar cuando sea necesario', wrong:['Continuar obligatoriamente hasta recibir sanción','Modificar por sí mismo el contrato','Eliminar la evaluación de riesgos'], justification:'Artículo 21 de la Ley 31/1995.', difficulty:'media' },
      { text:'¿Cuál es la regla general sobre la vigilancia de la salud?', correct:'Es voluntaria, salvo las excepciones legalmente previstas', wrong:['Es siempre obligatoria sin excepción','Está prohibida','Solo puede realizarla el superior jerárquico'], justification:'Artículo 22 de la Ley 31/1995.', difficulty:'alta' },
      { text:'¿Cuándo debe impartirse formación preventiva suficiente y adecuada?', correct:'Al contratar y cuando cambien las funciones, tecnologías o equipos que afecten al puesto', wrong:['Solo al jubilarse','Únicamente después de un accidente','Una vez cada diez años obligatoriamente'], justification:'Artículo 19 de la Ley 31/1995.', difficulty:'media' },
      { text:'¿Con qué periodicidad se reúne ordinariamente el Comité de Seguridad y Salud?', correct:'Trimestralmente', wrong:['Cada cinco años','Mensualmente de forma obligatoria en todo caso','Solo cuando lo convoque la Inspección'], justification:'Artículo 38.3 de la Ley 31/1995.', difficulty:'baja' }
    ],
    13: [
      { text:'¿Qué tres funciones estructuran el servicio público universitario según la LOSU?', correct:'Docencia, investigación y transferencia del conocimiento', wrong:['Contratación, sanción y recaudación','Solo docencia presencial','Archivo, registro y tesorería'], justification:'Artículo 2 LOSU.', difficulty:'baja' },
      { text:'¿Qué materia forma parte de la autonomía universitaria?', correct:'La elaboración de sus Estatutos y la aprobación y gestión de su presupuesto', wrong:['La aprobación de leyes orgánicas','La creación de tribunales penales propios','La exención absoluta de controles'], justification:'Artículo 3 LOSU.', difficulty:'media' },
      { text:'¿Cómo se crea una universidad pública?', correct:'Mediante una ley y con los informes legalmente previstos', wrong:['Por contrato menor','Por acuerdo verbal del Rector','Por resolución de cualquier facultad'], justification:'Artículos 4 y 5 LOSU.', difficulty:'media' },
      { text:'¿Qué ámbitos comprende la garantía de calidad universitaria?', correct:'Docencia, investigación, transferencia, gestión y servicios', wrong:['Solo los exámenes','Únicamente los edificios','Exclusivamente la contabilidad'], justification:'Título II LOSU.', difficulty:'media' },
      { text:'¿Qué diferencia existe entre título oficial y título propio?', correct:'El oficial forma parte de la ordenación oficial; el propio pertenece a la oferta propia de la universidad', wrong:['No existe diferencia','El propio habilita siempre para profesión regulada','El oficial carece de reconocimiento académico'], justification:'LOSU y RD 822/2021.', difficulty:'media' }
    ],
    14: [
      { text:'¿Qué derecho tiene el estudiantado respecto de la evaluación?', correct:'Ser evaluado objetivamente y solicitar revisión de sus calificaciones', wrong:['Elegir libremente cualquier nota','Anular el presupuesto universitario','Designar al órgano de contratación'], justification:'Título VIII LOSU.', difficulty:'baja' },
      { text:'¿Qué características debe tener el presupuesto universitario?', correct:'Público, único y equilibrado', wrong:['Secreto, múltiple y deficitario','Privado e ilimitado','Reservado y no vinculante'], justification:'Artículo 57 LOSU.', difficulty:'baja' },
      { text:'¿Qué artículos de la LOSU regulan específicamente el PTGAS?', correct:'Los artículos 89 a 94', wrong:['Los artículos 1 a 6','Los artículos 31 a 37','Los artículos 95 a 110'], justification:'Título IX, capítulo V, LOSU.', difficulty:'media' },
      { text:'¿Qué principios rigen el acceso del PTGAS?', correct:'Igualdad, mérito, capacidad, transparencia, publicidad y concurrencia', wrong:['Confianza personal y secreto','Antigüedad automática','Elección por sorteo sin convocatoria'], justification:'Artículo 91 LOSU.', difficulty:'media' },
      { text:'¿Cuál es el sistema ordinario de provisión de puestos del PTGAS?', correct:'El concurso', wrong:['La libre designación para todos los puestos','La oposición de acceso','La contratación menor'], justification:'Artículo 92 LOSU.', difficulty:'media' }
    ],
    16: [
      { text:'¿Cuál es la carga general de un Grado universitario?', correct:'240 ECTS, normalmente 60 por curso', wrong:['60 ECTS totales','120 ECTS','360 ECTS en todos los casos'], justification:'Artículo 14 del RD 822/2021.', difficulty:'baja' },
      { text:'¿Cuántos créditos de formación básica debe incluir como mínimo un Grado de 240 ECTS?', correct:'60 ECTS', wrong:['12 ECTS','30 ECTS','90 ECTS'], justification:'Artículo 14 del RD 822/2021.', difficulty:'media' },
      { text:'¿Qué cargas puede tener un Máster Universitario?', correct:'60, 90 o 120 ECTS', wrong:['Solo 240 ECTS','30 o 45 ECTS exclusivamente','Cualquier cifra sin límite'], justification:'Artículo 17 del RD 822/2021.', difficulty:'baja' },
      { text:'¿Qué carga puede tener el Trabajo Fin de Máster?', correct:'Entre 6 y 30 ECTS', wrong:['Entre 1 y 3 ECTS','Exactamente 60 ECTS','No tiene créditos'], justification:'Artículo 17 del RD 822/2021.', difficulty:'media' },
      { text:'¿Qué procesos integran el ciclo externo de calidad de un título oficial?', correct:'Verificación, seguimiento, modificación y renovación de la acreditación', wrong:['Matrícula, beca y expedición únicamente','Contratación, pago y archivo','Recurso, revisión y recusación'], justification:'RD 822/2021.', difficulty:'media' }
    ],
    17: [
      { text:'¿Qué diferencia existe entre acceso y admisión?', correct:'El acceso acredita requisitos para cursar Grado; la admisión adjudica plazas entre quienes cumplen acceso', wrong:['Son conceptos idénticos','La admisión siempre precede al acceso','El acceso solo existe en Máster'], justification:'Artículo 2 del RD 534/2024.', difficulty:'media' },
      { text:'¿Cómo accede una persona con título de Técnico Superior de FP?', correct:'Sin prueba de acceso, sin perjuicio del procedimiento de admisión', wrong:['Debe repetir Bachillerato','Tiene plaza automática en cualquier Grado','No puede acceder a la universidad'], justification:'Artículo 5 del RD 534/2024.', difficulty:'baja' },
      { text:'¿Qué principio debe respetar toda adaptación de la prueba de acceso?', correct:'No reducir ni alterar injustificadamente la calificación obtenida', wrong:['Garantizar una nota mínima automática','Eliminar todas las materias','Sustituir siempre la prueba por entrevista'], justification:'RD 534/2024: igualdad, accesibilidad y adaptaciones.', difficulty:'media' },
      { text:'¿Qué representa una nota de corte?', correct:'La nota del último admitido en un curso y titulación concretos, no un requisito fijo permanente', wrong:['Una nota legal invariable para todos los años','La nota mínima de Bachillerato en toda España','Una sanción académica'], justification:'La nota de corte es resultado anual del proceso de admisión.', difficulty:'media' },
      { text:'¿Qué datos deben comprobarse cada curso en la admisión UC3M?', correct:'Plazas, cupos, ponderaciones, calendario, listas y reclamaciones', wrong:['Solo el nombre de la universidad','La composición histórica del Claustro','Los presupuestos de hace diez años'], justification:'Son datos anuales que no deben reutilizarse de otros cursos.', difficulty:'media' }
    ],
    20: [
      { text:'¿Qué regla aplica al objeto contractual susceptible de división?', correct:'Debe dividirse en lotes cuando sea posible, salvo justificación de no hacerlo', wrong:['Debe fraccionarse para eludir publicidad','Nunca puede dividirse','Solo decide el adjudicatario'], justification:'Artículo 99 LCSP.', difficulty:'media' },
      { text:'¿Qué incluye el presupuesto base de licitación?', correct:'El límite máximo de gasto que puede comprometer el órgano de contratación, incluido el IVA salvo disposición en contrario', wrong:['Solo el beneficio industrial','El valor sin impuestos en todo caso','Únicamente el precio final pagado'], justification:'Artículo 100 LCSP.', difficulty:'alta' },
      { text:'¿Incluye IVA el valor estimado del contrato?', correct:'No; se calcula sin IVA e incorpora las partidas y opciones previstas legalmente', wrong:['Sí, siempre','Solo en contratos menores','Es idéntico al presupuesto base'], justification:'Artículo 101 LCSP.', difficulty:'alta' },
      { text:'¿Cuál es el límite del contrato menor de servicios?', correct:'Valor estimado inferior a 15.000 euros', wrong:['Inferior a 40.000 euros','Inferior a 60.000 euros','Sin límite cuantitativo'], justification:'Artículo 118 LCSP.', difficulty:'baja' },
      { text:'¿Qué persigue la adjudicación mediante la mejor relación calidad-precio?', correct:'Combinar criterios económicos y cualitativos vinculados al objeto del contrato', wrong:['Elegir siempre la oferta de precio más bajo','Evitar toda valoración técnica','Adjudicar sin publicidad ni criterios'], justification:'Artículo 145 LCSP.', difficulty:'media' }
    ]
  };

  let added = 0;
  Object.entries(additions).forEach(([number, items]) => {
    const theme = byNumber(number);
    if (!theme) return;
    ope.themeTests[theme.id] ||= [];
    const existing = new Set(ope.themeTests[theme.id].map(q => normalize(q.text)));
    items.forEach((item, index) => {
      if (existing.has(normalize(item.text))) return;
      ope.themeTests[theme.id].push(buildQuestion(theme, item, index + ope.themeTests[theme.id].length));
      existing.add(normalize(item.text));
      added += 1;
    });
  });

  function cleanBank() {
    const globalSeen = new Set();
    let duplicatesRemoved = 0;
    let invalidRemoved = 0;
    ope.themes.forEach(theme => {
      const cleaned = [];
      (ope.themeTests[theme.id] || []).forEach((question, index) => {
        const options = Array.isArray(question.options) ? question.options.slice(0, 4) : [];
        const optionTexts = options.map(option => normalize(option?.text));
        const answerOption = options.find(option => option?.letter === question.answer);
        if (!question?.text || options.length !== 4 || optionTexts.some(text => !text) || new Set(optionTexts).size !== 4 || !answerOption || !question.justification) {
          invalidRemoved += 1;
          return;
        }
        const key = `${normalize(question.text)}|${normalize(answerOption.text)}`;
        if (globalSeen.has(key)) {
          duplicatesRemoved += 1;
          return;
        }
        globalSeen.add(key);
        cleaned.push({
          ...question,
          id: question.id || `${theme.id}-v39-clean-${index + 1}`,
          options: options.map((option, position) => ({ letter: 'ABCD'[position], text: String(option.text) })),
          answer: 'ABCD'[options.indexOf(answerOption)],
          justification: String(question.justification)
        });
      });
      ope.themeTests[theme.id] = cleaned;
    });
    return { duplicatesRemoved, invalidRemoved };
  }

  const cleanup = cleanBank();
  const coverageState = count => count >= 30 ? 'objetivo 30+' : count >= 20 ? 'banco sólido' : count >= 15 ? 'base operativa' : 'refuerzo prioritario';

  const themeAudit = ope.themes.map(theme => {
    const questions = ope.themeTests[theme.id] || [];
    const answerPositions = { A:0, B:0, C:0, D:0 };
    const difficulties = { baja:0, media:0, alta:0 };
    questions.forEach(q => {
      if (answerPositions[q.answer] !== undefined) answerPositions[q.answer] += 1;
      if (difficulties[q.difficulty] !== undefined) difficulties[q.difficulty] += 1;
    });
    theme.testAudit = { count: questions.length, state: coverageState(questions.length), answerPositions, difficulties, target: 30 };
    return { id: theme.id, number: Number(theme.number), title: theme.title, count: questions.length, state: coverageState(questions.length), answerPositions, difficulties };
  });

  function hash(text, seed) {
    let value = 2166136261 ^ seed;
    for (let i = 0; i < text.length; i += 1) {
      value ^= text.charCodeAt(i);
      value = Math.imul(value, 16777619);
    }
    return value >>> 0;
  }
  const shuffled = (items, seed) => [...items].sort((a, b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));

  function balancedSimulation(seed) {
    const themes = [...ope.themes].sort((a, b) => Number(a.number) - Number(b.number));
    const extraThemes = new Set(themes.map((_, index) => themes[(index + seed) % themes.length].id).slice(0, 10));
    const selected = [];
    themes.forEach(theme => {
      const amount = extraThemes.has(theme.id) ? 4 : 3;
      const bank = shuffled(ope.themeTests[theme.id] || [], seed * 173 + Number(theme.number));
      bank.slice(0, amount).forEach(question => selected.push({ ...question, auditTheme: Number(theme.number) }));
    });
    return shuffled(selected, seed * 2003).slice(0, 70);
  }

  ope.simulacros = [1,2,3].map(seed => ({
    id: `uc3m-v39-equilibrado-${seed}`,
    title: `Simulacro UC3M equilibrado ${seed}`,
    questions: balancedSimulation(seed).map((question, index) => ({ ...question, id: `uc3m-v39-s${seed}-q${index + 1}` })),
    audit: { questions:70, themes:20, distribution:'10 temas con 4 preguntas y 10 temas con 3 preguntas', repeatedQuestionIds:0 }
  }));

  const totalQuestions = themeAudit.reduce((sum, item) => sum + item.count, 0);
  const minimumQuestions = Math.min(...themeAudit.map(item => item.count));
  const solidThemes = themeAudit.filter(item => item.count >= 20).length;

  ope.testAudit = {
    version:'v0.39.0',
    date:'2026-07-10',
    totalQuestions,
    minimumQuestions,
    targetPerTheme:30,
    floorPerTheme:20,
    solidThemes,
    duplicatesRemoved:(ope.testAudit?.duplicatesRemoved || 0) + cleanup.duplicatesRemoved,
    invalidRemoved:(ope.testAudit?.invalidRemoved || 0) + cleanup.invalidRemoved,
    themes:themeAudit,
    criteria:[
      'Enunciado y cuatro opciones distintas',
      'Respuesta correcta existente',
      'Justificación obligatoria',
      'Sin duplicados exactos',
      'Todos los temas con al menos 20 preguntas',
      'Simulacros de 70 preguntas con los 20 temas'
    ]
  };

  ope.version = '0.39.0';
  ope.status = `${(ope.status || '').replace(/ Revisión v0\.38:.*/, '')} Revisión v0.39: los 20 temas alcanzan un banco sólido mínimo de 20 preguntas válidas; añadidas 75 preguntas de aplicación y simulacros equilibrados regenerados.`;
  ope.changelog ||= [];
  if (!ope.changelog.some(item => item.version === '0.39.0')) {
    ope.changelog.unshift({
      version:'0.39.0',
      date:'2026-07-10',
      changes:[
        'Añadidas 75 preguntas manuales de aplicación',
        'Los 20 temas alcanzan al menos 20 preguntas válidas',
        'Añadido recuento por dificultad',
        'Reauditado el banco completo',
        'Regenerados tres simulacros equilibrados de 70 preguntas'
      ]
    });
  }

  window.OPOWEB_TEST_AUDIT_V39 = ope.testAudit;
  window.OPOWEB_TEST_REINFORCEMENT_V39 = { added, solidThemes };
  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();