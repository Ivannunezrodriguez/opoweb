(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'uc3m-aux-admin-2026');
  if (!ope) return;

  const VERSION = '0.66.0';
  const norm = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const Q = (text, correct, wrong, justification, difficulty = 'media') => ({ text, correct, wrong, justification, difficulty });

  const additions = {
    1: [
      Q('¿Qué valores superiores proclama el artículo 1.1 de la Constitución?', 'Libertad, justicia, igualdad y pluralismo político', ['Legalidad, jerarquía, publicidad y seguridad jurídica', 'Unidad, autonomía, solidaridad y eficacia', 'Mérito, capacidad, objetividad y transparencia'], 'Artículo 1.1 de la Constitución.', 'baja'),
      Q('¿Dónde reside la soberanía nacional?', 'En el pueblo español', ['En las Cortes Generales exclusivamente', 'En el Rey', 'En el Gobierno'], 'Artículo 1.2 de la Constitución.', 'baja'),
      Q('¿Qué forma política adopta el Estado español?', 'La Monarquía parlamentaria', ['La república presidencialista', 'La monarquía absoluta', 'El Estado federal'], 'Artículo 1.3 de la Constitución.', 'baja'),
      Q('¿Qué exige la Constitución a partidos políticos y sindicatos respecto de su organización interna?', 'Que su estructura interna y funcionamiento sean democráticos', ['Que dependan del Gobierno', 'Que sean órganos administrativos', 'Que carezcan de personalidad jurídica'], 'Artículos 6 y 7 de la Constitución.', 'media'),
      Q('¿Qué principio impide a los poderes públicos actuar caprichosamente?', 'La interdicción de la arbitrariedad', ['La inmunidad administrativa', 'La libre revocación de derechos', 'La reserva reglamentaria'], 'Artículo 9.3 de la Constitución.', 'media'),
      Q('¿Qué derechos disponen de procedimiento preferente y sumario y recurso de amparo?', 'El artículo 14 y los derechos de la sección primera del capítulo segundo del título I', ['Todos los principios rectores', 'Todos los derechos patrimoniales', 'Solo el derecho de propiedad'], 'Artículo 53.2 de la Constitución.', 'alta'),
      Q('¿Quién es el alto comisionado de las Cortes Generales para defender los derechos del título I?', 'El Defensor del Pueblo', ['El Tribunal de Cuentas', 'El Consejo de Estado', 'El Fiscal General del Estado'], 'Artículo 54 de la Constitución.', 'baja'),
      Q('¿Qué carácter tiene la persona del Rey?', 'Es inviolable y no está sujeta a responsabilidad', ['Responde políticamente ante el Congreso', 'Puede actuar sin refrendo en cualquier asunto', 'Es elegida cada cuatro años'], 'Artículo 56.3 de la Constitución.', 'media'),
      Q('¿De qué dos Cámaras se componen las Cortes Generales?', 'Congreso de los Diputados y Senado', ['Congreso y Consejo de Estado', 'Senado y Tribunal Constitucional', 'Congreso y Consejo General del Poder Judicial'], 'Artículo 66.1 de la Constitución.', 'baja'),
      Q('¿Quién dirige la política interior y exterior y la Administración civil y militar?', 'El Gobierno', ['El Congreso de los Diputados', 'El Tribunal Constitucional', 'El Defensor del Pueblo'], 'Artículo 97 de la Constitución.', 'baja')
    ],
    4: [
      Q('¿Qué es un órgano administrativo a efectos de la Ley 40/2015?', 'Una unidad a la que se atribuyen funciones con efectos jurídicos frente a terceros o actuación preceptiva', ['Cualquier puesto de trabajo', 'Toda empresa contratista', 'Cualquier grupo informal'], 'Artículo 5.1 de la Ley 40/2015.', 'media'),
      Q('¿Qué requisito exige la creación de un órgano administrativo?', 'Determinar su integración, dependencia, funciones y créditos necesarios', ['Aprobar siempre una ley orgánica', 'Designar previamente a todos sus empleados', 'Crear una empresa pública'], 'Artículo 5.3 de la Ley 40/2015.', 'alta'),
      Q('¿Cuál es la regla general sobre la competencia administrativa?', 'Es irrenunciable y la ejerce el órgano que la tiene atribuida', ['Puede abandonarse libremente', 'Se presume delegada en el superior', 'Pertenece siempre al ministro'], 'Artículo 8.1 de la Ley 40/2015.', 'baja'),
      Q('¿Altera la suplencia la competencia del órgano?', 'No', ['Sí, la transfiere definitivamente', 'Solo cuando dura más de un mes', 'Sí, pero únicamente en órganos colegiados'], 'Artículo 13.2 de la Ley 40/2015.', 'media'),
      Q('¿Qué debe constar en las resoluciones dictadas por suplencia?', 'La circunstancia de la suplencia y la identificación del titular y del suplente', ['La autorización judicial', 'El consentimiento del interesado', 'El informe del Tribunal de Cuentas'], 'Artículo 13.4 de la Ley 40/2015.', 'media'),
      Q('¿Qué función corresponde al secretario de un órgano colegiado?', 'Velar por la legalidad formal y material y certificar sus actuaciones', ['Ejercer siempre la presidencia', 'Resolver recursos judiciales', 'Sustituir a todos los vocales'], 'Artículo 16 de la Ley 40/2015.', 'media'),
      Q('¿Puede constituirse y adoptar acuerdos a distancia un órgano colegiado?', 'Sí, salvo que su reglamento interno lo excluya expresamente y excepcionalmente', ['No, nunca', 'Solo mediante correo postal', 'Solo si todos están en el mismo edificio'], 'Artículo 17.1 de la Ley 40/2015.', 'media'),
      Q('¿Qué efecto produce la actuación de una autoridad que debía abstenerse?', 'No implica necesariamente la invalidez de lo actuado', ['Produce siempre nulidad de pleno derecho', 'Convalida cualquier vicio', 'Extingue el procedimiento'], 'Artículo 23.4 de la Ley 40/2015.', 'alta'),
      Q('¿Cómo se organiza territorialmente la Administración General del Estado?', 'Mediante Delegaciones y Subdelegaciones del Gobierno y direcciones insulares cuando proceda', ['Solo mediante ministerios', 'Mediante diputaciones provinciales', 'Por universidades públicas'], 'Ley 40/2015, organización territorial de la AGE.', 'media'),
      Q('¿Qué órgano dirige los sectores de actividad administrativa integrados en un ministerio?', 'El ministro', ['El subsecretario de cualquier otro ministerio', 'El alcalde de Madrid', 'El Consejo de Transparencia'], 'Ley 40/2015, organización central de la AGE.', 'baja')
    ],
    5: [
      Q('¿Cómo puede identificarse electrónicamente una Administración pública?', 'Mediante sistemas basados en sello electrónico cualificado o reconocido', ['Con la contraseña personal de cualquier empleado', 'Solo con firma manuscrita digitalizada', 'Mediante correo electrónico sin certificado'], 'Artículo 40 de la Ley 40/2015.', 'media'),
      Q('¿Qué sistema puede vincular un documento público con el órgano que lo genera?', 'Un código seguro de verificación', ['Una etiqueta de correo', 'Una ruta de red', 'Un número aleatorio no verificable'], 'Artículo 42 de la Ley 40/2015.', 'media'),
      Q('¿Quién firma electrónicamente una actuación no automatizada?', 'El titular del órgano o el empleado público competente', ['El proveedor informático', 'El ciudadano destinatario', 'La compañía telefónica'], 'Artículo 43 de la Ley 40/2015.', 'baja'),
      Q('¿Qué debe permitir un código seguro de verificación?', 'Comprobar la integridad del documento mediante acceso a la sede correspondiente', ['Modificar el documento original', 'Ocultar el órgano autor', 'Sustituir toda notificación'], 'Artículo 42 de la Ley 40/2015.', 'media'),
      Q('¿Cuándo pueden intercambiar datos las Administraciones por medios electrónicos?', 'Cuando sea necesario para sus competencias y se respeten protección de datos y finalidad', ['Sin límite ni finalidad', 'Solo con autorización judicial', 'Únicamente mediante papel'], 'Ley 40/2015, relaciones electrónicas entre Administraciones.', 'alta'),
      Q('¿Qué finalidad tiene el Esquema Nacional de Interoperabilidad?', 'Establecer criterios comunes que permitan intercambio y conservación de información', ['Regular salarios públicos', 'Crear universidades', 'Fijar tipos tributarios'], 'Artículo 156 de la Ley 40/2015.', 'media'),
      Q('¿Qué finalidad tiene el Esquema Nacional de Seguridad?', 'Establecer principios y requisitos para proteger información y servicios electrónicos', ['Sustituir la normativa de protección de datos', 'Regular contratos laborales', 'Determinar el calendario académico'], 'Artículo 156 de la Ley 40/2015.', 'media'),
      Q('¿Qué debe garantizar una transmisión de datos entre Administraciones?', 'Autenticidad, integridad, confidencialidad y disponibilidad según el riesgo', ['Publicidad total de los datos', 'Ausencia de registro', 'Uso de cuentas personales'], 'Ley 40/2015 y Esquema Nacional de Seguridad.', 'alta'),
      Q('¿En qué soporte deben conservarse normalmente los documentos administrativos electrónicos?', 'En un formato que permita garantizar autenticidad, integridad, conservación y consulta', ['Solo impresos en papel', 'En dispositivos personales', 'En formatos no documentados'], 'Artículo 46 de la Ley 40/2015.', 'media'),
      Q('¿Qué ventaja aporta la interoperabilidad semántica?', 'Que distintas Administraciones interpreten del mismo modo la información intercambiada', ['Que usen el mismo edificio', 'Que eliminen todos los metadatos', 'Que no exista control de acceso'], 'Esquema Nacional de Interoperabilidad.', 'alta')
    ],
    6: [
      Q('¿Qué principio exige que los datos sean exactos y estén actualizados?', 'El principio de exactitud', ['El principio de publicidad universal', 'La libre reutilización', 'La reserva reglamentaria'], 'Artículo 4 de la Ley Orgánica 3/2018 y artículo 5 RGPD.', 'baja'),
      Q('¿Qué deber alcanza a responsables, encargados y a quienes intervienen en el tratamiento?', 'El deber de confidencialidad', ['El deber de publicación', 'La cesión automática', 'La conservación ilimitada'], 'Artículo 5 de la Ley Orgánica 3/2018.', 'baja'),
      Q('¿Desde qué edad puede un menor consentir por sí mismo el tratamiento de sus datos en España?', 'Desde los catorce años', ['Desde los doce años', 'Desde los dieciséis años', 'Solo desde los dieciocho años'], 'Artículo 7 de la Ley Orgánica 3/2018.', 'media'),
      Q('¿Qué derecho permite saber si se tratan datos personales y obtener copia?', 'El derecho de acceso', ['El derecho de portabilidad exclusivamente', 'El derecho de huelga', 'El derecho de petición'], 'Artículo 13 de la Ley Orgánica 3/2018 y artículo 15 RGPD.', 'baja'),
      Q('¿Qué derecho permite corregir datos inexactos?', 'El derecho de rectificación', ['El derecho de oposición', 'El derecho de reunión', 'El derecho de desistimiento contractual'], 'Artículo 14 de la Ley Orgánica 3/2018 y artículo 16 RGPD.', 'baja'),
      Q('¿Qué derecho permite solicitar la eliminación de datos cuando concurre causa legal?', 'El derecho de supresión', ['El derecho de acceso', 'El derecho de información pública', 'La recusación'], 'Artículo 15 de la Ley Orgánica 3/2018 y artículo 17 RGPD.', 'media'),
      Q('¿Qué derecho permite oponerse a determinados tratamientos basados en interés público o legítimo?', 'El derecho de oposición', ['El derecho de rectificación', 'La revisión de oficio', 'La portabilidad física del expediente'], 'Artículo 18 de la Ley Orgánica 3/2018 y artículo 21 RGPD.', 'media'),
      Q('¿Qué efecto tiene la limitación del tratamiento?', 'Los datos quedan conservados y solo pueden tratarse en los supuestos permitidos', ['Se publican automáticamente', 'Se destruyen siempre de inmediato', 'Se transfieren a cualquier tercero'], 'Artículo 16 de la Ley Orgánica 3/2018 y artículo 18 RGPD.', 'alta'),
      Q('¿Qué derecho digital protege el descanso fuera del tiempo de trabajo?', 'El derecho a la desconexión digital', ['El derecho a la portabilidad', 'El derecho de acceso a archivos públicos', 'El derecho de copia privada'], 'Artículo 88 de la Ley Orgánica 3/2018.', 'baja'),
      Q('¿Cuándo debe notificarse una violación de seguridad a la autoridad de control?', 'Cuando sea probable que entrañe riesgo para los derechos y libertades, normalmente en 72 horas', ['Siempre después de un año', 'Solo si lo pide el afectado', 'Nunca en el sector público'], 'Artículo 33 RGPD.', 'alta')
    ],
    11: [
      Q('¿Qué principios rigen los procedimientos de selección de personal funcionario?', 'Igualdad, mérito, capacidad y publicidad', ['Antigüedad automática y secreto', 'Confianza personal exclusivamente', 'Libre elección sin convocatoria'], 'TREBEP y Real Decreto 364/1995.', 'baja'),
      Q('¿Qué sistema de provisión valora méritos y capacidades para adjudicar puestos?', 'El concurso', ['La oposición de nuevo ingreso', 'El contrato menor', 'La adscripción política'], 'Artículo 36 del Real Decreto 364/1995.', 'baja'),
      Q('¿Para qué puestos puede utilizarse la libre designación?', 'Para los expresamente determinados por su especial responsabilidad o confianza', ['Para cualquier puesto sin justificación', 'Solo para personal laboral temporal', 'Para sustituir todos los concursos'], 'Real Decreto 364/1995, provisión por libre designación.', 'media'),
      Q('¿Qué carácter tiene una comisión de servicios para cubrir temporalmente un puesto?', 'Temporal y motivado por urgente e inaplazable necesidad', ['Definitivo', 'Sancionador', 'Privado'], 'Real Decreto 364/1995.', 'media'),
      Q('¿Qué ocurre con el puesto de origen en una comisión de servicios?', 'El funcionario conserva la reserva en los términos reglamentarios', ['Lo pierde siempre el primer día', 'Se amortiza automáticamente', 'Se transforma en contrato laboral'], 'Real Decreto 364/1995.', 'media'),
      Q('¿Qué situación corresponde normalmente al funcionario que presta servicios en otra Administración mediante transferencia?', 'Servicio en otras Administraciones públicas', ['Suspensión firme', 'Excedencia por interés particular necesariamente', 'Pérdida de la condición'], 'Artículo 88 TREBEP.', 'media'),
      Q('¿Qué situación puede declararse durante una suspensión provisional?', 'La suspensión provisional de funciones', ['Servicio activo pleno', 'Jubilación automática', 'Excedencia voluntaria'], 'Artículo 90 TREBEP y normativa disciplinaria.', 'baja'),
      Q('¿Qué requiere una actividad privada cuando puede ser compatible con un puesto público?', 'Reconocimiento previo de compatibilidad cuando proceda', ['Basta comunicarla después', 'No existe ningún control', 'Autorización de la empresa privada únicamente'], 'Ley 53/1984.', 'media'),
      Q('¿Puede reconocerse compatibilidad si se compromete la imparcialidad o independencia?', 'No', ['Sí, siempre', 'Solo si es fuera de horario', 'Sí, con autorización verbal'], 'Ley 53/1984.', 'alta'),
      Q('¿Qué finalidad tiene el régimen disciplinario del personal público?', 'Exigir responsabilidad por infracciones tipificadas con garantías y proporcionalidad', ['Permitir sanciones sin procedimiento', 'Sustituir la evaluación del desempeño', 'Eliminar la presunción de inocencia'], 'TREBEP, régimen disciplinario.', 'media')
    ],
    12: [
      Q('¿Qué derecho básico reconoce el artículo 14 de la Ley de Prevención?', 'El derecho a una protección eficaz en seguridad y salud', ['El derecho a elegir cualquier puesto', 'La renuncia a las medidas preventivas', 'La ausencia de formación'], 'Artículo 14 de la Ley 31/1995.', 'baja'),
      Q('¿Qué principio exige combatir los riesgos en su origen?', 'Un principio general de la acción preventiva', ['Una regla exclusiva de sanciones', 'Una facultad sindical', 'Una opción posterior al accidente'], 'Artículo 15 de la Ley 31/1995.', 'baja'),
      Q('¿Qué instrumentos integran la gestión preventiva?', 'Plan de prevención, evaluación de riesgos y planificación preventiva', ['Solo reconocimientos médicos', 'Únicamente un seguro', 'Solo instrucciones verbales'], 'Artículo 16 de la Ley 31/1995.', 'media'),
      Q('¿Sobre qué debe informar el empleador?', 'Riesgos, medidas preventivas y medidas de emergencia', ['Solo salarios', 'Solo sanciones', 'Únicamente riesgos ya materializados'], 'Artículo 18 de la Ley 31/1995.', 'baja'),
      Q('¿Qué debe prever la organización ante emergencias?', 'Primeros auxilios, lucha contra incendios y evacuación', ['Solo comunicación externa', 'Únicamente archivo de documentos', 'La suspensión de toda formación'], 'Artículo 20 de la Ley 31/1995.', 'media'),
      Q('¿Qué documentación preventiva debe conservarse?', 'Evaluación, planificación, controles de salud y relación de accidentes, entre otra', ['Solo nóminas', 'Únicamente contratos', 'Ningún documento'], 'Artículo 23 de la Ley 31/1995.', 'alta'),
      Q('¿Qué obligación tiene el trabajador respecto de equipos y dispositivos de seguridad?', 'Usarlos correctamente y no inutilizarlos', ['Desactivarlos si ralentizan', 'Modificarlos sin autorización', 'Utilizarlos solo en inspecciones'], 'Artículo 29 de la Ley 31/1995.', 'baja'),
      Q('¿Quiénes son los Delegados de Prevención?', 'Representantes de los trabajadores con funciones específicas preventivas', ['Inspectores de Trabajo', 'Técnicos externos sin representación', 'Miembros del órgano de contratación'], 'Artículo 35 de la Ley 31/1995.', 'baja'),
      Q('¿Cuándo debe existir Comité de Seguridad y Salud?', 'En centros o empresas con cincuenta o más trabajadores', ['Desde cinco trabajadores', 'Solo con más de quinientos', 'Únicamente por orden judicial'], 'Artículo 38 de la Ley 31/1995.', 'media'),
      Q('¿Qué exige la concurrencia de varias empresas en un mismo centro?', 'Cooperación y coordinación de actividades preventivas', ['Eliminar toda responsabilidad empresarial', 'Aplicar solo las reglas de la empresa principal', 'Suspender la evaluación de riesgos'], 'Artículo 24 de la Ley 31/1995.', 'alta')
    ],
    13: [
      Q('¿Qué naturaleza tiene la universidad pública?', 'Institución pública con personalidad jurídica y autonomía', ['Órgano sin personalidad del ministerio', 'Empresa mercantil privada', 'Asociación temporal'], 'Ley Orgánica 2/2023 del Sistema Universitario.', 'baja'),
      Q('¿Qué comprende la autonomía universitaria?', 'Elaborar Estatutos, elegir órganos, aprobar planes de estudio y gestionar presupuesto, entre otras materias', ['Aprobar leyes orgánicas', 'Crear órganos judiciales', 'Excluir todo control público'], 'Artículo 3 de la LOSU.', 'media'),
      Q('¿Qué principio debe garantizar el sistema universitario?', 'La igualdad de oportunidades y la no discriminación', ['La selección por renta exclusivamente', 'La reserva de plazas sin publicidad', 'La ausencia de evaluación'], 'LOSU, principios del sistema universitario.', 'baja'),
      Q('¿Qué papel tiene la transferencia del conocimiento?', 'Es una función esencial junto con docencia e investigación', ['Es ajena a la universidad', 'Sustituye toda docencia', 'Solo corresponde a empresas'], 'Artículo 2 de la LOSU.', 'baja'),
      Q('¿Qué instrumento básico regula la organización propia de cada universidad pública?', 'Sus Estatutos', ['Un contrato privado', 'El reglamento de una facultad exclusivamente', 'Una orden verbal del rector'], 'Artículo 3 de la LOSU.', 'baja'),
      Q('¿Qué órgano aprueba los Estatutos de una universidad pública antes del control autonómico de legalidad?', 'El Claustro universitario conforme a la LOSU y normativa aplicable', ['El Consejo de Ministros siempre', 'El ayuntamiento', 'La junta de personal'], 'LOSU, órganos de gobierno universitario.', 'media'),
      Q('¿Qué debe promover la universidad respecto de la ciencia?', 'Investigación de calidad, ciencia abierta y transferencia', ['Secreto general de resultados', 'Ausencia de evaluación', 'Exclusión de colaboración social'], 'LOSU, investigación y ciencia abierta.', 'media'),
      Q('¿Qué dimensión debe incorporar la planificación universitaria?', 'La sostenibilidad social, económica y ambiental', ['Solo rentabilidad mercantil', 'Únicamente crecimiento de matrícula', 'Ninguna evaluación de impacto'], 'LOSU, principios y funciones.', 'media'),
      Q('¿Qué mecanismo contribuye a garantizar la calidad?', 'La evaluación interna y externa de enseñanzas, investigación, gestión y servicios', ['La ausencia de indicadores', 'Solo encuestas informales', 'La aprobación automática'], 'LOSU, aseguramiento de la calidad.', 'media'),
      Q('¿Qué principio rige la participación de la comunidad universitaria?', 'Participación democrática en los órganos de gobierno y representación', ['Designación secreta de todos los órganos', 'Exclusión del estudiantado', 'Representación solo del profesorado'], 'LOSU, gobernanza y participación.', 'media')
    ],
    14: [
      Q('¿Quiénes integran la comunidad universitaria?', 'Estudiantado, personal docente e investigador y personal técnico, de gestión y de administración y servicios', ['Solo profesorado funcionario', 'Solo estudiantes y rector', 'Empresas contratistas'], 'LOSU, comunidad universitaria.', 'baja'),
      Q('¿Qué derecho tiene el estudiantado sobre la evaluación?', 'Una evaluación objetiva y la revisión de sus calificaciones', ['Elegir libremente la nota', 'No ser evaluado', 'Modificar el plan de estudios individualmente'], 'LOSU, derechos del estudiantado.', 'baja'),
      Q('¿Qué deber tiene el estudiantado respecto de la convivencia?', 'Respetar las normas de convivencia y los derechos de la comunidad', ['Imponer sanciones', 'Aprobar presupuestos', 'Designar al rector sin procedimiento'], 'LOSU y normativa de convivencia universitaria.', 'baja'),
      Q('¿Qué debe garantizar la universidad al estudiantado con discapacidad?', 'Accesibilidad, ajustes razonables y recursos de apoyo', ['Una nota automática', 'Exención de toda evaluación', 'Matrícula sin solicitud'], 'LOSU, inclusión y accesibilidad.', 'media'),
      Q('¿Qué comprende el PTGAS?', 'Personal técnico, de gestión y de administración y servicios', ['Solo personal docente', 'Exclusivamente becarios', 'Personal de empresas externas'], 'LOSU, título IX.', 'baja'),
      Q('¿Qué derecho profesional reconoce la LOSU al PTGAS?', 'Formación, carrera, movilidad y promoción conforme a la normativa', ['Nombramiento vitalicio sin proceso', 'Elección de cualquier puesto', 'Incompatibilidad con toda formación'], 'Artículos 89 a 94 de la LOSU.', 'media'),
      Q('¿Qué instrumento ordena normalmente los puestos del PTGAS?', 'La relación de puestos de trabajo u otro instrumento organizativo equivalente', ['El expediente académico', 'El plan de estudios', 'El catálogo de biblioteca'], 'LOSU y normativa de empleo público.', 'media'),
      Q('¿Qué debe respetar la selección de PTGAS?', 'Igualdad, mérito, capacidad, publicidad y transparencia', ['Confianza personal únicamente', 'Antigüedad automática', 'Ausencia de convocatoria'], 'Artículo 91 de la LOSU.', 'baja'),
      Q('¿Qué sistema ordinario se utiliza para la provisión de puestos del PTGAS funcionario?', 'El concurso', ['La contratación menor', 'La oposición de acceso para cada traslado', 'La designación secreta'], 'Artículo 92 de la LOSU.', 'media'),
      Q('¿Qué debe favorecer la universidad respecto de su personal?', 'Formación permanente y desarrollo profesional', ['La obsolescencia de conocimientos', 'La prohibición de movilidad', 'La ausencia de evaluación'], 'LOSU, política de personal.', 'baja')
    ],
    16: [
      Q('¿Cuáles son los tres ciclos de las enseñanzas universitarias oficiales?', 'Grado, Máster Universitario y Doctorado', ['Diplomatura, licenciatura y oposición', 'Bachillerato, grado y máster', 'Grado, título propio y certificado'], 'Artículo 3 del Real Decreto 822/2021.', 'baja'),
      Q('¿Dónde se inscriben los títulos universitarios oficiales?', 'En el Registro de Universidades, Centros y Títulos', ['En el Registro Mercantil', 'En el padrón municipal', 'En el Catastro'], 'Real Decreto 822/2021.', 'baja'),
      Q('¿Qué procedimiento precede a la implantación de un título oficial?', 'La verificación del plan de estudios y su autorización e inscripción', ['Una contratación menor', 'Una encuesta sin aprobación', 'Una decisión verbal del decano'], 'Real Decreto 822/2021.', 'media'),
      Q('¿Qué finalidad tiene el seguimiento de un título oficial?', 'Comprobar su implantación, resultados y cumplimiento del proyecto verificado', ['Sustituir la docencia', 'Eliminar la acreditación', 'Fijar tasas tributarias'], 'Real Decreto 822/2021.', 'media'),
      Q('¿Qué procedimiento periódico mantiene la validez oficial del título?', 'La renovación de la acreditación', ['La revisión de oficio administrativa', 'La oposición', 'La convalidación presupuestaria'], 'Real Decreto 822/2021.', 'media'),
      Q('¿Qué debe ocurrir con una modificación sustancial del plan de estudios?', 'Debe tramitarse por el procedimiento de modificación previsto y ser evaluada', ['Aplicarse sin comunicación', 'Aprobarse solo por el profesor', 'Convertirse en título propio'], 'Real Decreto 822/2021.', 'alta'),
      Q('¿Qué son los créditos ECTS?', 'Una medida del trabajo total del estudiante para alcanzar resultados de aprendizaje', ['Horas de docencia exclusivamente', 'Puntos de baremo laboral', 'Unidades monetarias'], 'Real Decreto 1125/2003 y Real Decreto 822/2021.', 'baja'),
      Q('¿Pueden reconocerse créditos cursados en otros estudios oficiales?', 'Sí, conforme a la normativa y a la coherencia académica', ['No, nunca', 'Solo si son de la misma asignatura literal', 'Únicamente por decisión judicial'], 'Real Decreto 822/2021.', 'media'),
      Q('¿Qué función tiene el Trabajo Fin de Grado?', 'Integrar competencias y resultados de aprendizaje del título', ['Sustituir todas las asignaturas', 'Servir solo como trámite administrativo', 'Eliminar las prácticas'], 'Real Decreto 822/2021.', 'media'),
      Q('¿Qué debe garantizar el sistema interno de calidad?', 'Recogida de información, revisión y mejora continua de la titulación', ['Ausencia de indicadores', 'Secreto de resultados', 'Aprobación automática'], 'Real Decreto 822/2021.', 'media')
    ],
    17: [
      Q('¿Qué principios rigen el acceso y la admisión universitaria?', 'Igualdad, mérito y capacidad', ['Antigüedad, secreto y libre designación', 'Renta, domicilio y sorteo exclusivamente', 'Confianza personal'], 'Artículo 3.1 del Real Decreto 534/2024.', 'baja'),
      Q('¿Qué deben garantizar las universidades sobre sus procedimientos de admisión?', 'Información transparente y accesible y sistemas de orientación', ['Información reservada', 'Criterios no publicados', 'Admisión sin solicitud'], 'Artículo 3.3 del Real Decreto 534/2024.', 'media'),
      Q('¿Cuántos créditos debe tener superados quien abandonó temporalmente para continuar en el mismo centro sin nueva admisión?', 'Al menos seis créditos ECTS', ['Treinta créditos ECTS', 'Sesenta créditos ECTS', 'Ningún crédito'], 'Artículo 3.5 del Real Decreto 534/2024.', 'alta'),
      Q('¿Qué requisito general tiene quien posee Bachiller para acceder al Grado?', 'Superar la prueba de acceso regulada', ['Tener experiencia laboral', 'Poseer un máster', 'Superar una oposición'], 'Artículo 4 del Real Decreto 534/2024.', 'baja'),
      Q('¿Cuántos ejercicios tiene la prueba de acceso con carácter general?', 'Cuatro, o cinco en comunidades con lengua cooficial', ['Dos', 'Seis en todo caso', 'Un único ejercicio'], 'Artículo 12 del Real Decreto 534/2024.', 'media'),
      Q('¿Qué materias de elección aparecen en uno de los ejercicios comunes?', 'Historia de España o Historia de la Filosofía', ['Biología o Geología exclusivamente', 'Economía o Derecho', 'Latín o Griego en todo caso'], 'Artículo 12 del Real Decreto 534/2024.', 'baja'),
      Q('¿Qué finalidad tiene la prueba de acceso?', 'Valorar madurez académica, conocimientos y capacidad para seguir estudios universitarios', ['Asignar automáticamente una carrera', 'Sustituir el Bachillerato', 'Medir solo memoria literal'], 'Artículo 9 del Real Decreto 534/2024.', 'media'),
      Q('¿Qué vías especiales de acceso contempla el real decreto por edad o experiencia?', 'Mayores de 25, mayores de 40 con experiencia y mayores de 45', ['Solo mayores de 30', 'Únicamente mayores de 65', 'Ninguna'], 'Artículo 8 del Real Decreto 534/2024.', 'baja'),
      Q('¿Puede una persona titulada universitaria acceder directamente a otro Grado?', 'Sí, en los términos del artículo 7', ['No, debe repetir Bachillerato', 'Solo con autorización judicial', 'Únicamente si tiene menos de 25 años'], 'Artículo 7 del Real Decreto 534/2024.', 'media'),
      Q('¿Qué reconocimiento mínimo se exige para continuar en España estudios universitarios parciales extranjeros?', 'Al menos treinta créditos ECTS', ['Seis créditos', 'Ciento veinte créditos', 'Ninguno'], 'Artículo 7.d del Real Decreto 534/2024.', 'alta')
    ],
    20: [
      Q('¿Qué caracteriza a un contrato del sector público?', 'Ser un contrato oneroso celebrado por una entidad del sector público', ['Ser siempre gratuito', 'Celebrarse solo entre particulares', 'Carecer de objeto determinado'], 'Artículos 2 y 3 de la Ley 9/2017.', 'baja'),
      Q('¿Qué principio prohíbe fraccionar un contrato para eludir publicidad o procedimiento?', 'La prohibición de fraccionamiento fraudulento', ['La libertad de pactos', 'La revisión de oficio', 'La desconexión digital'], 'Artículo 99.2 de la Ley 9/2017.', 'media'),
      Q('¿Qué debe justificar el expediente antes de licitar?', 'La necesidad del contrato y su relación con el objeto', ['La preferencia por una empresa', 'La ausencia de presupuesto', 'La eliminación de criterios'], 'Artículo 28 de la Ley 9/2017.', 'media'),
      Q('¿Qué documento define las prescripciones técnicas de la prestación?', 'El pliego de prescripciones técnicas', ['La nómina', 'El padrón', 'La relación de puestos de trabajo'], 'Ley 9/2017.', 'baja'),
      Q('¿Qué documento recoge cláusulas jurídicas, solvencia, criterios y ejecución?', 'El pliego de cláusulas administrativas particulares', ['El acta académica', 'El convenio colectivo', 'La memoria de prácticas'], 'Ley 9/2017.', 'baja'),
      Q('¿Qué principio exige igualdad de acceso a la licitación?', 'La igualdad de trato y no discriminación', ['La adjudicación directa preferente', 'El secreto de criterios', 'La libre modificación de ofertas'], 'Artículo 1 de la Ley 9/2017.', 'baja'),
      Q('¿Qué debe estar vinculado al objeto del contrato?', 'Los criterios de adjudicación', ['La identidad del licitador preferido', 'Las sanciones laborales ajenas', 'Cualquier requisito sin relación'], 'Artículo 145 de la Ley 9/2017.', 'media'),
      Q('¿Qué garantía responde del correcto cumplimiento del contrato?', 'La garantía definitiva cuando sea exigible', ['La garantía provisional siempre obligatoria', 'La fianza personal de un empleado', 'El presupuesto universitario completo'], 'Artículos 106 y siguientes de la Ley 9/2017.', 'media'),
      Q('¿Cuándo puede modificarse un contrato durante su vigencia?', 'En los supuestos y con los límites previstos en la ley y en los pliegos', ['Libremente por el adjudicatario', 'Siempre que aumente el precio', 'Sin expediente ni motivación'], 'Artículos 203 a 207 de la Ley 9/2017.', 'alta'),
      Q('¿Qué efecto tiene la formalización del contrato?', 'Documenta el acuerdo adjudicado y permite iniciar su ejecución en los términos legales', ['Sustituye la adjudicación', 'Elimina las obligaciones del contratista', 'Convierte el contrato en subvención'], 'Artículos 153 y siguientes de la Ley 9/2017.', 'media')
    ]
  };

  function buildQuestion(theme, item, index) {
    const raw = [item.correct, ...item.wrong];
    const shift = (Number(theme.number) + index + 2) % 4;
    const ordered = raw.slice(shift).concat(raw.slice(0, shift));
    return {
      id: `${theme.id}-v66-q${index + 1}`,
      text: item.text,
      options: ordered.map((text, position) => ({ letter: 'ABCD'[position], text })),
      answer: 'ABCD'[ordered.indexOf(item.correct)],
      justification: item.justification,
      source: item.justification,
      difficulty: item.difficulty,
      auditReal: true,
      auditTheme: Number(theme.number)
    };
  }

  let added = 0;
  Object.entries(additions).forEach(([number, items]) => {
    const theme = ope.themes.find(item => Number(item.number) === Number(number));
    if (!theme) return;
    const bank = ope.themeTests[theme.id] || [];
    const seen = new Set(bank.map(question => norm(question.text)));
    items.forEach((item, index) => {
      if (seen.has(norm(item.text))) return;
      bank.push(buildQuestion(theme, item, index + bank.length));
      seen.add(norm(item.text));
      added += 1;
    });
    ope.themeTests[theme.id] = bank;
  });

  const themeAudit = ope.themes.map(theme => {
    const bank = ope.themeTests[theme.id] || [];
    return { number: Number(theme.number), id: theme.id, count: bank.length, state: bank.length >= 30 ? 'objetivo 30+' : 'pendiente' };
  });

  function hash(text, seed) {
    let value = 2166136261 ^ seed;
    for (let index = 0; index < text.length; index += 1) {
      value ^= text.charCodeAt(index);
      value = Math.imul(value, 16777619);
    }
    return value >>> 0;
  }
  const shuffled = (items, seed) => [...items].sort((a, b) => hash(String(a.id || a.text), seed) - hash(String(b.id || b.text), seed));

  function buildSimulation(seed) {
    const selected = [];
    const used = new Set();
    let round = 0;
    while (selected.length < 75 && round < 100) {
      ope.themes.forEach((theme, themeIndex) => {
        if (selected.length >= 75) return;
        const bank = shuffled(ope.themeTests[theme.id] || [], seed * 257 + themeIndex + round);
        const question = bank[(round + themeIndex) % bank.length];
        if (!question) return;
        const key = norm(question.text);
        if (used.has(key)) return;
        used.add(key);
        selected.push({ ...question, auditTheme: Number(theme.number) });
      });
      round += 1;
    }
    const ordered = shuffled(selected, seed * 2099);
    return {
      id: `uc3m-v66-sim-${seed}`,
      title: `Simulacro UC3M ${seed} · 70 + 5 reserva`,
      questions: ordered.slice(0, 70).map((question, index) => ({ ...question, id: `uc3m-v66-s${seed}-q${index + 1}` })),
      reserveQuestions: ordered.slice(70, 75).map((question, index) => ({ ...question, id: `uc3m-v66-s${seed}-r${index + 1}`, reserve: true })),
      audit: { main: 70, reserve: 5, themes: 20, unique: true }
    };
  }

  ope.simulacros = [1, 2, 3].map(buildSimulation);
  const totalQuestions = themeAudit.reduce((sum, item) => sum + item.count, 0);
  ope.testAudit = {
    ...(ope.testAudit || {}),
    version: 'v0.66.0',
    date: '2026-07-10',
    totalQuestions,
    minimumQuestions: Math.min(...themeAudit.map(item => item.count)),
    targetPerTheme: 30,
    targetThemes: themeAudit.filter(item => item.count >= 30).length,
    themes: themeAudit,
    criteria: ['Cuatro opciones distintas', 'Respuesta correcta válida', 'Justificación obligatoria', '20 temas con 30+ preguntas', 'Tres simulacros 70 + 5']
  };
  ope.version = VERSION;
  ope.changelog ||= [];
  ope.changelog.unshift({
    version: VERSION,
    date: '2026-07-10',
    changes: [
      `Añadidas ${added} preguntas específicas a once temas`,
      'Los 20 temas alcanzan al menos 30 preguntas válidas',
      'Regenerados tres simulacros de 70 preguntas y 5 reservas',
      'Reforzadas Constitución, Ley 40/2015, datos, personal, prevención, LOSU, ordenación, admisión y contratación'
    ]
  });

  window.OPOWEB_UC3M_V66 = { version: `v${VERSION}`, addedQuestions: added, totalQuestions, targetThemes: ope.testAudit.targetThemes, minimumQuestions: ope.testAudit.minimumQuestions };
})();
