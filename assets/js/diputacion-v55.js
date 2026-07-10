(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;

  const VERSION = '0.55.0';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const theme = number => ope.themes.find(item => Number(item.number) === Number(number));

  const rawQuestions = {
    10: [
      ['¿Qué excluye expresamente el derecho a indemnización por responsabilidad patrimonial?', 'La fuerza mayor y los daños que exista deber jurídico de soportar.', ['Cualquier funcionamiento normal del servicio.', 'Toda actuación administrativa lícita.', 'La falta de reclamación previa al empleado.'], 'Artículo 32.1 de la Ley 40/2015.'],
      ['¿Cómo responde la Administración frente al particular cuando el daño deriva de una fórmula conjunta de actuación entre varias Administraciones?', 'De forma solidaria.', ['Solo responde la Administración con mayor presupuesto.', 'Cada Administración responde siempre por partes iguales.', 'No existe responsabilidad frente al particular.'], 'Artículo 33.1 de la Ley 40/2015.'],
      ['¿Qué criterios se usan para distribuir la responsabilidad entre Administraciones cuando puede individualizarse?', 'Competencia, interés público tutelado e intensidad de la intervención.', ['Antigüedad, población y presupuesto.', 'Solo la cuantía del daño.', 'La elección del reclamante.'], 'Artículo 33.2 de la Ley 40/2015.'],
      ['¿Qué ocurre si no puede determinarse la responsabilidad de cada Administración concurrente?', 'La responsabilidad será solidaria.', ['Se archiva la reclamación.', 'Responde únicamente el Estado.', 'La indemnización se reduce a la mitad.'], 'Artículo 33.2 de la Ley 40/2015.'],
      ['¿A qué fecha se refiere, como regla, la cuantificación de la indemnización?', 'A la fecha en que la lesión se produjo efectivamente.', ['A la fecha de la reclamación siempre.', 'A la fecha de la sentencia exclusivamente.', 'A la fecha de aprobación del presupuesto.'], 'Artículo 34.3 de la Ley 40/2015.'],
      ['¿Puede sustituirse la indemnización en dinero por compensación en especie?', 'Sí, si resulta más adecuada, existe interés público y hay acuerdo con el interesado.', ['No, nunca.', 'Sí, por decisión unilateral sin motivación.', 'Solo en daños inferiores a 1.000 euros.'], 'Artículo 34.4 de la Ley 40/2015.'],
      ['¿Qué régimen se aplica a la responsabilidad de entidades de derecho privado integradas en el sector público cuando ejercen potestades administrativas?', 'El régimen de responsabilidad patrimonial de la Ley 40/2015.', ['Exclusivamente el Código Civil.', 'Solo la legislación mercantil.', 'Ningún régimen de responsabilidad.'], 'Artículo 35 de la Ley 40/2015.'],
      ['¿A quién debe reclamar directamente el particular por daños causados por autoridades o empleados públicos?', 'A la Administración Pública correspondiente.', ['Al empleado en vía administrativa.', 'Al órgano judicial penal.', 'A la compañía aseguradora necesariamente.'], 'Artículo 36.1 de la Ley 40/2015.'],
      ['¿Cuándo debe la Administración exigir de oficio responsabilidad a su autoridad o personal después de indemnizar?', 'Cuando hubiera dolo o culpa o negligencia graves.', ['Ante cualquier error leve.', 'Solo cuando exista condena penal.', 'Nunca, porque responde siempre la Administración.'], 'Artículo 36.2 de la Ley 40/2015.'],
      ['¿Qué plazo de alegaciones incluye el procedimiento para exigir responsabilidad al personal?', 'Quince días.', ['Cinco días.', 'Diez días.', 'Un mes.'], 'Artículo 36.4.a de la Ley 40/2015.'],
      ['¿Qué plazo tiene el servicio cuyo funcionamiento causó la lesión para emitir informe?', 'Diez días.', ['Cinco días.', 'Quince días.', 'Un mes.'], 'Artículo 81.1 de la Ley 39/2015.'],
      ['¿A partir de qué cuantía es preceptivo, con carácter estatal, el dictamen del Consejo de Estado en responsabilidad patrimonial?', 'Desde 50.000 euros o la cuantía que establezca la legislación autonómica aplicable.', ['Desde 5.000 euros.', 'Desde 15.000 euros.', 'En todos los expedientes sin excepción.'], 'Artículo 81.2 de la Ley 39/2015.'],
      ['¿Qué plazo tiene el órgano consultivo para emitir dictamen en responsabilidad patrimonial?', 'Dos meses.', ['Diez días.', 'Un mes.', 'Seis meses.'], 'Artículo 81.2 de la Ley 39/2015.'],
      ['¿Qué debe pronunciar expresamente la resolución de responsabilidad patrimonial?', 'Causalidad, valoración del daño, cuantía y modo de indemnización.', ['Solo la competencia del órgano.', 'Únicamente la existencia de crédito.', 'Solo el plazo de recurso.'], 'Artículo 91.2 de la Ley 39/2015.'],
      ['¿Qué plazo máximo tiene el procedimiento simplificado de responsabilidad patrimonial?', 'Treinta días.', ['Diez días.', 'Tres meses.', 'Seis meses.'], 'Artículo 96.4 de la Ley 39/2015.']
    ],
    11: [
      ['¿Qué legislación regula capacidad de obrar, legitimación y representación ante entidades locales?', 'La legislación del procedimiento administrativo común.', ['Exclusivamente el reglamento orgánico local.', 'La legislación electoral.', 'Solo el Código de Comercio.'], 'Artículo 163 del ROF.'],
      ['¿Cómo puede iniciarse un expediente administrativo local?', 'De oficio o a instancia de parte.', ['Solo por acuerdo del Pleno.', 'Únicamente por denuncia.', 'Solo mediante decreto judicial.'], 'Artículo 165 del ROF.'],
      ['¿Qué debe encabezar un expediente iniciado de oficio?', 'El acuerdo o resolución que ordena su incoación.', ['Una factura.', 'Un anuncio de prensa.', 'Un informe del interesado.'], 'Reglas del expediente administrativo local del ROF.'],
      ['¿Cómo deben ordenarse los documentos de un expediente local?', 'Cronológicamente, numerados y con índice cuando proceda.', ['Por tamaño físico.', 'Por órgano de procedencia sin fecha.', 'De forma aleatoria.'], 'Reglas de formación del expediente del ROF.'],
      ['¿Qué función tiene el informe administrativo en un expediente local?', 'Exponer hechos, fundamentos aplicables y propuesta o conclusión técnica o jurídica.', ['Sustituir siempre la resolución.', 'Crear competencias no previstas.', 'Evitar la audiencia del interesado.'], 'Artículos 172 y siguientes del ROF.'],
      ['¿Quiénes deben emitir los informes necesarios en expedientes locales?', 'Los responsables de las dependencias o servicios a los que corresponda tramitar.', ['Solo el Alcalde.', 'Cualquier vecino.', 'Únicamente la Intervención en todos los casos.'], 'Artículo 172 del ROF.'],
      ['¿Qué documentos deben anotarse en el Registro de Salida local?', 'Los oficios, notificaciones, órdenes, comunicaciones y resoluciones despachados definitivamente.', ['Los borradores sin firmar.', 'Las notas personales.', 'Solo las facturas.'], 'Artículos 151 y siguientes del ROF.'],
      ['¿Qué debe permitir identificar un asiento registral local?', 'Número, fecha, procedencia o destino, extracto y unidad responsable.', ['Solo el nombre del funcionario.', 'Únicamente la hora.', 'El color de la carpeta.'], 'Regulación del Registro General en el ROF.'],
      ['¿Qué debe hacerse con un documento una vez practicado el asiento de entrada?', 'Cursarlo sin dilación a la dependencia competente.', ['Retenerlo hasta fin de mes.', 'Publicarlo íntegramente.', 'Devolverlo siempre al interesado.'], 'Artículo 158 del ROF y artículo 16.2 de la Ley 39/2015.'],
      ['¿Qué acredita el recibo de presentación de un documento?', 'La fecha y hora, número de asiento y documentos acompañados.', ['La estimación de la solicitud.', 'La competencia del órgano.', 'La identidad de todos los funcionarios del expediente.'], 'Artículo 16.3 de la Ley 39/2015.'],
      ['¿Puede una entidad local exigir originales con carácter general?', 'No, salvo que excepcionalmente lo establezca la normativa aplicable.', ['Sí, en todos los procedimientos.', 'Solo si el documento es electrónico.', 'Siempre que lo decida verbalmente el instructor.'], 'Artículo 28.3 de la Ley 39/2015.'],
      ['¿Qué debe hacer la Administración si duda de la autenticidad de una copia aportada?', 'Cotejarla motivadamente con el original y requerir su exhibición.', ['Rechazarla sin trámite.', 'Declarar falsedad automáticamente.', 'Remitirla siempre al juzgado penal.'], 'Artículo 28.5 de la Ley 39/2015.'],
      ['¿Qué órgano local debe garantizar el cumplimiento de los requisitos de una notificación?', 'El órgano que dicta el acto y la unidad encargada de practicarla conforme a la organización local.', ['El interesado.', 'El servicio postal exclusivamente.', 'El Pleno en todos los casos.'], 'Ley 39/2015 y organización local.'],
      ['¿Qué ocurre si una notificación local indica erróneamente un recurso pero el interesado interpone el correcto?', 'La notificación produce efectos desde la actuación que revela conocimiento suficiente.', ['El acto queda nulo automáticamente.', 'Debe repetirse siempre antes de admitir el recurso.', 'Se pierde el derecho a recurrir.'], 'Artículo 40.3 de la Ley 39/2015.'],
      ['¿Qué regla se aplica al silencio y la caducidad de procedimientos locales?', 'La prevista en la legislación de procedimiento administrativo común y en la norma sectorial.', ['Una regla autónoma del Registro General.', 'Siempre silencio positivo.', 'Siempre caducidad a los tres meses.'], 'Ley 39/2015 y artículo 176 del ROF.']
    ],
    12: [
      ['¿Cuáles son entidades locales territoriales según la Ley 7/1985?', 'Municipio, provincia e isla en los archipiélagos.', ['Comarca, consorcio y sociedad mercantil.', 'Solo municipio y provincia.', 'Estado, Comunidad Autónoma y municipio.'], 'Artículo 3.1 de la Ley 7/1985.'],
      ['¿Qué otras entidades gozan de condición de entidad local según la Ley 7/1985?', 'Comarcas u otras agrupaciones, áreas metropolitanas y mancomunidades en los términos legales.', ['Todos los órganos desconcentrados.', 'Las empresas concesionarias.', 'Cualquier asociación vecinal.'], 'Artículo 3.2 de la Ley 7/1985.'],
      ['¿Qué potestad local permite aprobar ordenanzas y reglamentos?', 'La potestad reglamentaria y de autoorganización.', ['La potestad legislativa estatal.', 'La jurisdicción penal.', 'La potestad constituyente.'], 'Artículo 4.1.a de la Ley 7/1985.'],
      ['¿Qué prerrogativa permite recuperar por sí mismas la posesión de bienes locales?', 'La recuperación de oficio de sus bienes.', ['La expropiación judicial.', 'La revisión constitucional.', 'La avocación legislativa.'], 'Artículo 4.1.d de la Ley 7/1985.'],
      ['¿Qué capacidad jurídica tienen las entidades locales para cumplir sus fines?', 'Plena capacidad jurídica conforme a la ley.', ['Capacidad limitada a contratar personal.', 'Ninguna capacidad patrimonial.', 'Solo capacidad procesal pasiva.'], 'Artículo 5 de la Ley 7/1985.'],
      ['¿Cómo actúan las entidades locales al servir los intereses públicos encomendados?', 'Con objetividad y sometimiento pleno a la ley y al Derecho.', ['Con libertad frente al ordenamiento.', 'Según instrucciones de particulares.', 'Solo con criterios económicos.'], 'Artículo 6.1 de la Ley 7/1985.'],
      ['¿Qué clases de competencias pueden ejercer las entidades locales?', 'Propias y atribuidas por delegación.', ['Solo competencias propias.', 'Solo competencias estatales.', 'Competencias legislativas generales.'], 'Artículo 7.1 de la Ley 7/1985.'],
      ['¿Cómo se ejercen las competencias propias?', 'En régimen de autonomía y bajo la propia responsabilidad, coordinándose cuando proceda.', ['Bajo jerarquía permanente del Estado.', 'Sin responsabilidad.', 'Solo con autorización provincial previa.'], 'Artículo 7.2 de la Ley 7/1985.'],
      ['¿Cómo se ejercen las competencias delegadas?', 'En los términos de la disposición o acuerdo de delegación, con controles legalmente previstos.', ['Como si fueran siempre propias.', 'Sin financiación.', 'Sin posibilidad de instrucciones.'], 'Artículo 7.3 de la Ley 7/1985.'],
      ['¿Qué debe acompañar una atribución de competencia local?', 'La previsión de recursos suficientes para asegurar su suficiencia financiera.', ['Una autorización judicial.', 'Un referéndum.', 'La disolución del Pleno.'], 'Artículo 25.4 de la Ley 7/1985.'],
      ['¿Qué principio impide duplicidades administrativas en la atribución competencial?', 'El principio de una Administración, una competencia, cuando la ley lo articula mediante evaluación y coordinación.', ['El principio de secreto.', 'La jerarquía normativa exclusivamente.', 'La irretroactividad sancionadora.'], 'Sistema competencial de la Ley 7/1985.'],
      ['¿Qué debe respetar la coordinación entre Administraciones?', 'La autonomía de las entidades locales.', ['La subordinación absoluta municipal.', 'La desaparición de competencias propias.', 'La ausencia de información recíproca.'], 'Artículo 10 de la Ley 7/1985.'],
      ['¿Qué deber existe entre Administraciones Públicas respecto de información y asistencia?', 'Deber de información mutua, colaboración y respeto a competencias ajenas.', ['Prohibición de intercambiar información.', 'Solo colaboración económica.', 'Dependencia jerárquica entre todas ellas.'], 'Artículos 10 y 55 de la Ley 7/1985.'],
      ['¿Qué norma básica estatal regula el régimen local?', 'La Ley 7/1985, Reguladora de las Bases del Régimen Local.', ['La Ley 39/2015 exclusivamente.', 'La Ley Orgánica del Poder Judicial.', 'El Estatuto de los Trabajadores.'], 'Ley 7/1985.'],
      ['¿Qué norma completa la organización y funcionamiento local con carácter reglamentario estatal?', 'El Real Decreto 2568/1986, ROF, sin perjuicio de la normativa autonómica y orgánica local.', ['El Real Decreto 203/2021 exclusivamente.', 'La Ley General Tributaria.', 'La Ley de Enjuiciamiento Civil.'], 'Real Decreto 2568/1986.']
    ],
    13: [
      ['¿En qué provincia debe estar íntegramente incluido un término municipal?', 'En una sola provincia.', ['Puede dividirse libremente entre varias.', 'Solo en una Comunidad Autónoma uniprovincial.', 'No existe límite territorial.'], 'Artículo 12.2 de la Ley 7/1985.'],
      ['¿Qué norma regula la creación o supresión de municipios y la alteración de términos municipales?', 'La legislación de las Comunidades Autónomas sobre régimen local.', ['Una ordenanza municipal.', 'Un decreto del Alcalde.', 'La Ley de Presupuestos del Estado en exclusiva.'], 'Artículo 13.1 de la Ley 7/1985.'],
      ['¿Puede la alteración de términos municipales modificar los límites provinciales?', 'No.', ['Sí, por acuerdo de los alcaldes.', 'Sí, si lo aprueba la Diputación.', 'Solo durante elecciones.'], 'Artículo 13.1 de la Ley 7/1985.'],
      ['¿Quién tiene la condición de vecino de un municipio?', 'Quien está inscrito en el Padrón municipal.', ['Quien posee un inmueble.', 'Quien trabaja allí.', 'Quien paga cualquier tributo local.'], 'Artículo 15 de la Ley 7/1985.'],
      ['¿Dónde debe inscribirse quien vive en varios municipios?', 'En aquel en el que habite durante más tiempo al año.', ['En todos ellos como residente principal.', 'En el de mayor población.', 'En la capital provincial.'], 'Artículo 15 de la Ley 7/1985.'],
      ['¿Qué naturaleza tiene el Padrón municipal?', 'Registro administrativo donde constan los vecinos.', ['Censo tributario exclusivamente.', 'Registro mercantil local.', 'Documento electoral sin otra función.'], 'Artículo 16.1 de la Ley 7/1985.'],
      ['¿Qué órganos existen en todos los ayuntamientos?', 'Alcalde, tenientes de alcalde y Pleno.', ['Junta de Gobierno Local siempre.', 'Comisión Especial de Sugerencias siempre.', 'Distritos obligatorios.'], 'Artículo 20.1 de la Ley 7/1985.'],
      ['¿Cuándo existe Junta de Gobierno Local con carácter obligatorio?', 'En municipios con más de 5.000 habitantes.', ['En todos los municipios.', 'Solo en capitales de provincia.', 'Solo en municipios de gran población.'], 'Artículo 20.1.b de la Ley 7/1985.'],
      ['¿Quién integra el Pleno municipal?', 'Todos los concejales y lo preside el Alcalde.', ['Solo los tenientes de alcalde.', 'Los vecinos elegidos por sorteo.', 'La Junta de Gobierno y el secretario.'], 'Artículo 22.1 de la Ley 7/1985.'],
      ['¿Quién dirige el gobierno y la administración municipal?', 'El Alcalde.', ['El Pleno exclusivamente.', 'La Diputación.', 'La Comisión Especial de Cuentas.'], 'Artículo 21.1.a de la Ley 7/1985.'],
      ['¿Qué órgano aprueba inicialmente el presupuesto municipal?', 'El Pleno.', ['El Alcalde definitivamente sin Pleno.', 'La Junta Electoral.', 'La Intervención.'], 'Artículos 22.2.e de la Ley 7/1985 y 168 del TRLRHL.'],
      ['¿Quién forma el presupuesto de la entidad local?', 'Su Presidente.', ['El Pleno.', 'La Intervención por sí sola.', 'La Diputación en todos los municipios.'], 'Artículo 168.1 del TRLRHL.'],
      ['¿Qué documento debe acompañar al presupuesto sobre la plantilla?', 'El anexo de personal.', ['El padrón completo.', 'El censo electoral.', 'La relación de contratos menores exclusivamente.'], 'Artículo 168.1.c del TRLRHL.'],
      ['¿Cuánto dura la exposición pública del presupuesto aprobado inicialmente?', 'Quince días.', ['Cinco días.', 'Diez días.', 'Un mes.'], 'Artículo 169.1 del TRLRHL.'],
      ['¿Cuándo entra en vigor el presupuesto local?', 'Tras su publicación resumida por capítulos en el boletín oficial correspondiente.', ['Desde la aprobación inicial.', 'Desde que lo forma el Presidente.', 'Tras su envío al Tribunal de Cuentas sin publicación.'], 'Artículo 169.5 del TRLRHL.']
    ],
    14: [
      ['¿Cuál es la base territorial de la provincia como entidad local?', 'La agrupación de municipios.', ['La agrupación de Comunidades Autónomas.', 'El partido judicial exclusivamente.', 'La comarca.'], 'Artículo 31.1 de la Ley 7/1985.'],
      ['¿Qué principios debe garantizar especialmente la provincia?', 'Solidaridad y equilibrio intermunicipales.', ['Centralización y jerarquía estatal.', 'Uniformidad tributaria absoluta.', 'Autonomía legislativa.'], 'Artículo 31.2 de la Ley 7/1985.'],
      ['¿Qué servicio provincial debe asegurar la provincia en su territorio?', 'La prestación integral y adecuada de los servicios de competencia municipal.', ['La administración de justicia.', 'La defensa nacional.', 'La expedición de títulos universitarios.'], 'Artículo 31.2.a de la Ley 7/1985.'],
      ['¿Qué órganos son necesarios en todas las Diputaciones?', 'Presidente, vicepresidentes, Junta de Gobierno y Pleno.', ['Solo Presidente y Pleno.', 'Alcaldes de todos los municipios.', 'Consejo de Ministros provincial.'], 'Artículo 32.1 de la Ley 7/1985.'],
      ['¿Quién integra el Pleno de la Diputación?', 'El Presidente y los diputados provinciales.', ['Todos los alcaldes de la provincia.', 'Solo los portavoces políticos.', 'Los concejales de la capital.'], 'Artículo 33.1 de la Ley 7/1985.'],
      ['¿Quién dirige el gobierno y la administración provincial?', 'El Presidente de la Diputación.', ['El Pleno exclusivamente.', 'El Delegado del Gobierno.', 'La Junta Electoral Provincial.'], 'Artículo 34.1.a de la Ley 7/1985.'],
      ['¿Qué órgano aprueba ordenanzas provinciales?', 'El Pleno de la Diputación.', ['El Presidente por decreto.', 'La Junta Electoral.', 'Los alcaldes reunidos.'], 'Artículo 33.2.b de la Ley 7/1985.'],
      ['¿Qué competencia provincial se refiere a municipios con menor capacidad de gestión?', 'La asistencia y cooperación jurídica, económica y técnica.', ['La tutela jerárquica general.', 'La aprobación de todas sus ordenanzas.', 'La sustitución permanente del Alcalde.'], 'Artículo 36.1.b de la Ley 7/1985.'],
      ['¿Qué instrumento debe aprobar anualmente la Diputación para cooperar con obras y servicios municipales?', 'Un plan provincial de cooperación a las obras y servicios de competencia municipal.', ['Una ley provincial.', 'Un estatuto de autonomía.', 'Un plan electoral.'], 'Artículo 36.2.a de la Ley 7/1985.'],
      ['¿Quién elige al Presidente de la Diputación?', 'Los diputados provinciales de entre ellos.', ['Todos los vecinos directamente.', 'Los alcaldes exclusivamente.', 'El Gobierno autonómico.'], 'Artículo 207 de la LOREG.'],
      ['¿Qué mayoría se exige en primera votación para elegir Presidente de la Diputación?', 'Mayoría absoluta.', ['Mayoría simple.', 'Tres quintos.', 'Dos tercios.'], 'Artículo 207 de la LOREG.'],
      ['¿Qué mayoría basta en segunda votación para elegir Presidente provincial?', 'Mayoría simple.', ['Mayoría absoluta.', 'Dos tercios.', 'Unanimidad.'], 'Artículo 207 de la LOREG.'],
      ['¿Qué circunscripción se utiliza para distribuir inicialmente los diputados provinciales?', 'Los partidos judiciales existentes en 1979.', ['Los municipios de forma individual.', 'Las comarcas actuales.', 'Las secciones censales.'], 'Artículo 204 de la LOREG.'],
      ['¿Qué mínimo de diputados provinciales corresponde a cada partido judicial?', 'Al menos uno.', ['Ninguno necesariamente.', 'Dos.', 'Cinco.'], 'Artículo 204 de la LOREG.'],
      ['¿Qué órgano proclama a los diputados provinciales electos?', 'La Junta Electoral de Zona.', ['El Pleno de la Diputación.', 'El Tribunal de Cuentas.', 'El Delegado del Gobierno.'], 'Artículos 205 y 206 de la LOREG.']
    ],
    15: [
      ['¿Quién puede crear comarcas u otras agrupaciones de municipios?', 'Las Comunidades Autónomas de acuerdo con sus Estatutos.', ['El Gobierno central mediante orden.', 'Cualquier Diputación por decreto.', 'Una mancomunidad por acuerdo interno.'], 'Artículo 42.1 de la Ley 7/1985.'],
      ['¿Qué caracteriza los intereses que justifican una comarca?', 'Intereses comunes que precisan gestión propia o servicios de ámbito supramunicipal.', ['Solo intereses privados.', 'Únicamente funciones judiciales.', 'La gestión de competencias estatales exclusivas.'], 'Artículo 42.1 de la Ley 7/1985.'],
      ['¿Qué oposición municipal puede impedir, como regla, la creación de una comarca?', 'La de dos quintas partes de los municipios afectados que representen al menos la mitad del censo.', ['La de un solo municipio.', 'La de cualquier alcalde.', 'La de la Diputación sin municipios.'], 'Artículo 42.2 de la Ley 7/1985.'],
      ['¿Puede la creación de una comarca vaciar a los municipios de todas sus competencias?', 'No.', ['Sí, por ley autonómica sin límite.', 'Solo en municipios pequeños.', 'Siempre que exista Diputación.'], 'Artículo 42.4 de la Ley 7/1985.'],
      ['¿Qué son las áreas metropolitanas?', 'Entidades locales integradas por municipios de grandes aglomeraciones urbanas con vínculos económicos y sociales.', ['Órganos del Estado.', 'Empresas públicas provinciales.', 'Distritos electorales.'], 'Artículo 43.2 de la Ley 7/1985.'],
      ['¿Qué norma crea, modifica o suprime un área metropolitana?', 'Una ley de la Comunidad Autónoma, previa audiencia de las Administraciones afectadas.', ['Una ordenanza de la capital.', 'Un decreto del Presidente de la Diputación.', 'Un convenio privado.'], 'Artículo 43.1 de la Ley 7/1985.'],
      ['¿Para qué pueden asociarse los municipios en mancomunidades?', 'Para ejecutar en común obras y servicios determinados de su competencia.', ['Para aprobar leyes autonómicas.', 'Para sustituir a la provincia.', 'Para ejercer potestad judicial.'], 'Artículo 44.1 de la Ley 7/1985.'],
      ['¿Tienen personalidad y capacidad jurídica las mancomunidades?', 'Sí, para cumplir sus fines específicos.', ['No.', 'Solo si superan 5.000 habitantes.', 'Solo durante cuatro años.'], 'Artículo 44.2 de la Ley 7/1985.'],
      ['¿Qué documento regula el ámbito, objeto, competencias, órganos y recursos de una mancomunidad?', 'Sus estatutos.', ['El padrón municipal.', 'El presupuesto estatal.', 'La LOREG exclusivamente.'], 'Artículo 44.2 de la Ley 7/1985.'],
      ['¿Qué órgano de cada municipio debe aprobar la constitución y los estatutos de una mancomunidad?', 'El Pleno municipal.', ['El Alcalde por sí solo.', 'La Junta Electoral.', 'La Intervención.'], 'Artículo 44.3 de la Ley 7/1985.'],
      ['¿Qué informe debe solicitarse en el procedimiento de aprobación de estatutos de una mancomunidad?', 'Informe de la Diputación o Diputaciones interesadas.', ['Informe del Tribunal Constitucional.', 'Informe vinculante del Senado.', 'Informe de la Agencia Tributaria estatal.'], 'Artículo 44.3 de la Ley 7/1985.'],
      ['¿Qué naturaleza tienen actualmente, como regla, los entes de ámbito territorial inferior al municipio creados tras la reforma legal?', 'Formas de organización desconcentrada sin personalidad jurídica.', ['Entidades locales territoriales con plena personalidad siempre.', 'Sociedades mercantiles.', 'Órganos judiciales.'], 'Artículo 24 bis de la Ley 7/1985.'],
      ['¿Qué norma regula estos entes inferiores al municipio?', 'Las leyes de las Comunidades Autónomas sobre régimen local.', ['La Ley Electoral exclusivamente.', 'El Código Civil.', 'Una circular provincial.'], 'Artículo 24 bis de la Ley 7/1985.'],
      ['¿Puede una mancomunidad asumir finalidades distintas de las previstas en sus estatutos?', 'No, salvo modificación estatutaria conforme al procedimiento aplicable.', ['Sí, sin límite.', 'Solo por decreto del presidente.', 'Siempre que tenga crédito.'], 'Artículo 44 de la Ley 7/1985.'],
      ['¿Qué diferencia básica existe entre comarca y mancomunidad?', 'La comarca se crea por ley autonómica; la mancomunidad nace de la asociación voluntaria de municipios.', ['No existe diferencia.', 'La mancomunidad es una provincia.', 'La comarca es siempre una sociedad mercantil.'], 'Artículos 42 y 44 de la Ley 7/1985.']
    ],
    16: [
      ['¿Qué contrato tiene por objeto la ejecución de una obra con el resultado definido por la ley?', 'El contrato de obras.', ['El contrato de suministro.', 'El contrato de servicios.', 'El contrato privado de patrocinio.'], 'Artículo 13 de la Ley 9/2017.'],
      ['¿Qué elemento caracteriza una concesión de servicios?', 'La transferencia al concesionario del riesgo operacional.', ['La propiedad pública de todos los medios.', 'La duración inferior a un año.', 'La ausencia de explotación económica.'], 'Artículo 15 de la Ley 9/2017.'],
      ['¿Qué contrato tiene por objeto adquirir, arrendar o arrendar con opción de compra productos o bienes muebles?', 'El contrato de suministro.', ['El contrato de obras.', 'La concesión de obras.', 'El contrato de servicios jurídicos siempre.'], 'Artículo 16 de la Ley 9/2017.'],
      ['¿Qué debe justificarse antes de celebrar un contrato público?', 'La necesidad e idoneidad del contrato y la eficiencia de la contratación.', ['Solo la existencia de proveedor.', 'La preferencia del órgano.', 'Únicamente la fecha de pago.'], 'Artículo 28 de la Ley 9/2017.'],
      ['¿Puede fraccionarse un contrato para reducir su cuantía y eludir publicidad o procedimiento?', 'No.', ['Sí, si cada factura es mensual.', 'Sí, cuando lo pide el proveedor.', 'Solo en contratos de servicios.'], 'Artículo 99.2 de la Ley 9/2017.'],
      ['¿Qué regla general se aplica a la división del objeto en lotes?', 'Debe preverse cuando la naturaleza u objeto lo permitan, salvo justificación válida en contrario.', ['Está prohibida siempre.', 'Solo puede hacerse en obras.', 'Depende únicamente del contratista.'], 'Artículo 99.3 de la Ley 9/2017.'],
      ['¿Incluye el valor estimado el IVA?', 'No.', ['Sí, siempre.', 'Solo en obras.', 'Solo en contratos menores.'], 'Artículo 101 de la Ley 9/2017.'],
      ['¿Qué importe debe reflejar el presupuesto base de licitación?', 'El límite máximo de gasto que puede comprometer el órgano, incluido el IVA salvo disposición en contrario.', ['El beneficio final del contratista.', 'El valor estimado sin ningún impuesto necesariamente.', 'Solo el coste laboral.'], 'Artículo 100 de la Ley 9/2017.'],
      ['¿Qué documento acredita la existencia y reserva de crédito adecuado?', 'El certificado o documento de retención de crédito que corresponda.', ['La factura del adjudicatario.', 'El acta de recepción.', 'La garantía definitiva.'], 'Preparación del expediente en la Ley 9/2017 y normativa presupuestaria.'],
      ['¿Cuál es el umbral de valor estimado del contrato menor de obras?', 'Inferior a 40.000 euros.', ['Hasta 50.000 euros incluido.', 'Inferior a 15.000 euros.', 'Inferior a 100.000 euros.'], 'Artículo 118.1 de la Ley 9/2017.'],
      ['¿Cuál es el umbral de valor estimado del contrato menor de suministro o servicios?', 'Inferior a 15.000 euros.', ['Inferior a 40.000 euros.', 'Hasta 18.000 euros incluido.', 'Inferior a 50.000 euros.'], 'Artículo 118.1 de la Ley 9/2017.'],
      ['¿Qué debe motivar el órgano de contratación en un contrato menor?', 'La necesidad y que no se altera el objeto para eludir los umbrales.', ['Solo la elección del proveedor.', 'La duración de la garantía exclusivamente.', 'La ausencia de factura.'], 'Artículo 118.2 de la Ley 9/2017.'],
      ['¿Qué límite general atribuye la contratación al Presidente de una entidad local?', 'Valor estimado no superior al 10 % de recursos ordinarios ni a seis millones, con los límites temporales legales.', ['Todo contrato sin límite.', 'Solo contratos menores.', 'Contratos hasta tres millones en cualquier caso.'], 'Disposición adicional segunda.1 de la Ley 9/2017.'],
      ['¿Qué ocurre en una Junta de Contratación local cuando actúa como órgano de contratación?', 'Se prescinde de la intervención de la Mesa de contratación.', ['Debe existir siempre otra Mesa.', 'El Pleno adjudica necesariamente.', 'No puede valorar ofertas.'], 'Disposición adicional segunda.5 de la Ley 9/2017.'],
      ['¿Qué instrumento electrónico publica la actividad contractual y documentos esenciales?', 'El perfil de contratante alojado en la plataforma correspondiente.', ['El padrón municipal.', 'El registro civil.', 'Una cuenta privada del adjudicatario.'], 'Artículo 63 de la Ley 9/2017.']
    ]
  };

  function makeQuestions(number, rows) {
    const sources = {
      10: 'BOE · Ley 40/2015 y Ley 39/2015',
      11: 'BOE · Ley 39/2015 y Real Decreto 2568/1986',
      12: 'BOE · Ley 7/1985 y Real Decreto 2568/1986',
      13: 'BOE · Ley 7/1985 y TRLRHL',
      14: 'BOE · Ley 7/1985 y LOREG',
      15: 'BOE · Ley 7/1985',
      16: 'BOE · Ley 9/2017'
    };
    return rows.map((row, index) => {
      const [text, correct, wrongs, justification] = row;
      const options = [correct, ...wrongs];
      const shift = (number + index + 3) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `dip-v55-t${number}-q${index + 1}`,
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

  [10, 11, 12, 13, 14, 15, 16].forEach(number => {
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
    version: 'v0.55.0', themes: allThemes, ...totals,
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
  const realPools = ope.themes.map(item => ({ theme: item, questions: shuffle((ope.themeTests[item.id] || []).filter(valid).filter(question => !isGeneric(question)), 5500 + Number(item.number)) }));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 55 && round < 360) {
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
    const ordered = shuffle(selected, seed * 5519);
    const main = ordered.slice(0, 50).map((question, index) => ({ ...question, id: `dip-v55-s${seed}-q${index + 1}` }));
    const reserve = ordered.slice(50, 55).map((question, index) => ({ ...question, id: `dip-v55-s${seed}-r${index + 1}`, reserve: true }));
    return {
      id: `dip-v55-sim${seed}`,
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
      'Añadidas 105 preguntas nuevas a los temas 10 a 16',
      'Temas 10 a 16 elevados al objetivo de 30 preguntas reales',
      'Temas 1 a 16 completan la segunda vuelta mínima de banco',
      'Regenerados los tres simulacros tipo test con el banco reforzado'
    ]
  });

  window.OPOWEB_DIPUTACION_V55 = {
    version: `v${VERSION}`,
    reinforcedThemes: [10, 11, 12, 13, 14, 15, 16],
    addedQuestions: 105,
    cumulativeSecondPassQuestions: 240,
    cumulativeManualQuestions: 825,
    themesAtTargetInSecondPass: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    targetPerTheme: 30
  };
})();