(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const UC3M_ID = 'uc3m-aux-admin-2026';
  const ope = data.oposiciones.find(o => o.id === UC3M_ID);
  if (!ope) return;

  // Los mapas antiguos estaban numerados sin distinguir convocatoria.
  // Se eliminan de todas las OPE salvo La Puebla, para evitar mezclar el tema 9 de UC3M con el tema 9 de otra convocatoria.
  data.oposiciones.forEach(o => {
    if (o.id !== 'puebla-aux-admin-2026') {
      (o.themes || []).forEach(t => { delete t.officialMap; });
    }
  });

  const M = {
    1: {
      source: 'Constitución Española de 1978', status: 'desarrollo común revisado',
      blocks: [
        ['Estructura y contenido', [
          ['Estructura general', 'Preámbulo, Título Preliminar, Títulos I a X y disposiciones', 'Ubicar cada materia en su título y diferenciar parte dogmática, orgánica y reforma.'],
          ['Principios básicos', 'Arts. 1 a 9 CE', 'Estado social y democrático de Derecho, soberanía, Monarquía parlamentaria, unidad, autonomía y art. 9.3.']]],
        ['Derechos y deberes fundamentales', [
          ['Dignidad e interpretación', 'Art. 10 CE', 'Fundamento del orden político e interpretación conforme a tratados de derechos humanos.'],
          ['Igualdad', 'Art. 14 CE', 'Igualdad ante la ley y prohibición de discriminación.'],
          ['Derechos fundamentales', 'Arts. 15 a 29 CE', 'Contenido esencial, reserva de ley y tutela reforzada.'],
          ['Derechos y deberes ciudadanos', 'Arts. 30 a 38 CE', 'Defensa, propiedad, trabajo, negociación colectiva y libertad de empresa.'],
          ['Garantías y suspensión', 'Arts. 53 a 55 CE', 'Tutela, amparo, Defensor del Pueblo y suspensión general o individual.']]],
        ['Elaboración de las leyes', [
          ['Potestad legislativa', 'Arts. 66 y 81 a 92 CE', 'Leyes orgánicas y ordinarias, delegación legislativa, decreto-ley, iniciativa, aprobación y referéndum.']]],
        ['Organización territorial', [
          ['Estado territorial', 'Arts. 137 a 158 CE', 'Municipios, provincias, Comunidades Autónomas, autonomía, solidaridad y financiación.']]],
        ['Reforma constitucional', [
          ['Procedimiento ordinario', 'Art. 167 CE', 'Mayorías, comisión mixta y referéndum facultativo.'],
          ['Procedimiento agravado', 'Art. 168 CE', 'Revisión total o materias especialmente protegidas; disolución, nuevas Cámaras y referéndum obligatorio.']]]
      ]
    },
    2: {
      source: 'Ley 39/2015, Títulos Preliminar, I, II y III', status: 'desarrollo común revisado',
      blocks: [
        ['Disposiciones generales', [
          ['Objeto', 'Art. 1 Ley 39/2015', 'Validez y eficacia de actos, procedimiento común, iniciativa legislativa y potestad reglamentaria.'],
          ['Ámbito subjetivo', 'Art. 2', 'AGE, CCAA, entidades locales y sector público institucional.']]],
        ['Interesados', [
          ['Capacidad de obrar', 'Art. 3', 'Personas físicas, jurídicas, menores y grupos afectados cuando la ley lo permita.'],
          ['Concepto de interesado', 'Art. 4', 'Promotor, titular de derechos afectados o de intereses legítimos personado antes de resolución definitiva.'],
          ['Representación', 'Art. 5', 'Actos que exigen acreditación, presunción en mero trámite y subsanación.'],
          ['Apoderamientos', 'Art. 6', 'Registro electrónico y clases de poder.']]],
        ['Actividad de las Administraciones', [
          ['Derechos de las personas', 'Art. 13', 'Información, asistencia, identificación de autoridades, protección de datos y medios electrónicos.'],
          ['Relación electrónica', 'Art. 14', 'Sujetos obligados y personas físicas que pueden elegir canal.'],
          ['Registros y archivo', 'Arts. 16 y 17', 'Presentación de documentos y archivo electrónico único.'],
          ['Obligación de resolver', 'Art. 21', 'Resolución expresa y notificación; tres meses si la norma no fija plazo.'],
          ['Silencio administrativo', 'Arts. 24 y 25', 'Efectos en procedimientos iniciados a solicitud y de oficio.'],
          ['Términos y plazos', 'Arts. 29 a 33', 'Horas, días hábiles/naturales, meses/años, ampliación y urgencia.']]],
        ['Actos administrativos', [
          ['Producción y contenido', 'Arts. 34 a 36', 'Órgano competente, motivación y forma.'],
          ['Eficacia', 'Arts. 38 a 46', 'Efectos, ejecutividad, notificación y publicación.'],
          ['Nulidad y anulabilidad', 'Arts. 47 a 52', 'Causas, límites, conversión, conservación y convalidación.']]]
      ]
    },
    3: {
      source: 'Ley 39/2015, Títulos IV y V', status: 'desarrollo común revisado',
      blocks: [
        ['Procedimiento administrativo común', [
          ['Derechos del interesado', 'Art. 53', 'Acceso al expediente, copias, alegaciones, identificación y asistencia.'],
          ['Iniciación', 'Arts. 54 a 69', 'De oficio o a solicitud; medidas provisionales, acumulación, denuncia, subsanación y declaración responsable.'],
          ['Ordenación', 'Arts. 70 a 74', 'Expediente electrónico, impulso, concentración y cumplimiento de trámites.'],
          ['Instrucción', 'Arts. 75 a 83', 'Alegaciones, prueba, informes, audiencia e información pública.'],
          ['Finalización', 'Arts. 84 a 95', 'Resolución, desistimiento, renuncia, caducidad, terminación convencional e imposibilidad material.'],
          ['Tramitación simplificada', 'Art. 96', 'Interés público o falta de complejidad y trámites esenciales.'],
          ['Ejecución', 'Arts. 97 a 105', 'Ejecutividad y medios de ejecución forzosa.']]],
        ['Revisión de actos', [
          ['Revisión de oficio', 'Arts. 106 a 111', 'Nulidad, lesividad, suspensión, revocación, rectificación y límites.'],
          ['Reglas generales de recursos', 'Arts. 112 a 120', 'Actos recurribles, causas, suspensión, audiencia y resolución.'],
          ['Alzada', 'Arts. 121 y 122', 'Actos que no ponen fin a la vía administrativa.'],
          ['Reposición', 'Arts. 123 y 124', 'Actos que ponen fin a la vía administrativa; recurso potestativo.'],
          ['Extraordinario de revisión', 'Arts. 125 y 126', 'Actos firmes y causas tasadas.']]]
      ]
    },
    4: {
      source: 'Ley 40/2015, Capítulo II del Título Preliminar', status: 'desarrollo común revisado',
      blocks: [
        ['Órganos administrativos', [
          ['Órgano administrativo', 'Arts. 5 a 7 Ley 40/2015', 'Creación, requisitos, instrucciones, órdenes de servicio y órganos consultivos.'],
          ['Competencia', 'Art. 8', 'Irrenunciabilidad y ejercicio por el órgano que la tiene atribuida.'],
          ['Delegación', 'Art. 9', 'Traslada el ejercicio, no la titularidad; límites y publicación.'],
          ['Avocación', 'Art. 10', 'Órgano superior asume un asunto concreto.'],
          ['Encomienda de gestión', 'Art. 11', 'Actividades materiales o técnicas sin cesión de titularidad.'],
          ['Delegación de firma', 'Art. 12', 'No altera competencia; debe constar la autoridad de procedencia.'],
          ['Suplencia', 'Art. 13', 'Sustitución temporal por vacante, ausencia o enfermedad.'],
          ['Decisiones de competencia', 'Art. 14', 'Declinatoria y requerimiento de inhibición.']]],
        ['Órganos colegiados e imparcialidad', [
          ['Órganos colegiados', 'Arts. 15 a 22', 'Régimen, secretario, convocatorias, sesiones, acuerdos y actas.'],
          ['Abstención y recusación', 'Arts. 23 y 24', 'Causas de imparcialidad y procedimiento.']]]
      ]
    },
    5: {
      source: 'Ley 40/2015, funcionamiento electrónico', status: 'desarrollo común revisado',
      blocks: [
        ['Sede, portal e identificación', [
          ['Sede electrónica', 'Art. 38 Ley 40/2015', 'Dirección electrónica cuya titularidad corresponde a una Administración u organismo.'],
          ['Portal de internet', 'Art. 39', 'Punto de acceso electrónico a información y, en su caso, sede.'],
          ['Identificación de las Administraciones', 'Art. 40', 'Sello electrónico u otros sistemas legalmente admitidos.']]],
        ['Actuación y firma electrónica', [
          ['Actuación automatizada', 'Art. 41', 'Determinación de órgano responsable de especificaciones, programación, mantenimiento y supervisión.'],
          ['Sello y CSV', 'Art. 42', 'Sistemas de firma para actuación automatizada.'],
          ['Firma del personal', 'Art. 43', 'Sistemas de firma electrónica del personal al servicio de las Administraciones.'],
          ['Intercambio en entornos cerrados', 'Art. 44', 'Validez de documentos transmitidos en entornos cerrados.']]],
        ['Interoperabilidad y archivo', [
          ['Interoperabilidad de la firma', 'Art. 45', 'Asegurar compatibilidad y verificación.'],
          ['Archivo electrónico', 'Art. 46', 'Almacenamiento seguro, integridad, autenticidad, conservación y acceso.']]]
      ]
    },
    6: {
      source: 'LO 3/2018 y RGPD', status: 'desarrollo común revisado; ajustar literalidad a bases UC3M',
      blocks: [
        ['Disposiciones y principios', [
          ['Objeto y ámbito', 'LO 3/2018, Título I', 'Adaptación al RGPD y garantía de derechos digitales.'],
          ['Exactitud y deber de confidencialidad', 'Arts. 4 y 5 LO 3/2018', 'Datos exactos y obligación de secreto incluso después de terminar la relación.'],
          ['Tratamiento basado en consentimiento', 'Arts. 6 a 9', 'Consentimiento, menores, obligación legal, interés público y categorías especiales.']]],
        ['Derechos', [
          ['Transparencia e información', 'Arts. 11 y 12', 'Información por capas y ejercicio de derechos.'],
          ['Acceso, rectificación, supresión, oposición y limitación', 'Arts. 13 a 18', 'Contenido y condiciones de ejercicio.']]],
        ['Responsable, encargado y DPD', [
          ['Responsable y encargado', 'RGPD arts. 24 a 32 y LO 3/2018', 'Responsabilidad proactiva, contrato de encargo y seguridad.'],
          ['Delegado de Protección de Datos', 'Arts. 34 a 37 LO 3/2018', 'Designación, cualificación, posición e intervención en reclamaciones.']]]
      ]
    },
    7: {
      source: 'Ley 10/2019 de Transparencia de la Comunidad de Madrid y portal UC3M', status: 'estructura correcta; falta incorporar literalidad autonómica completa',
      blocks: [
        ['Publicidad activa', [
          ['Concepto', 'Ley 10/2019, publicidad activa', 'Información que debe publicarse de oficio, periódicamente, de forma clara y accesible.'],
          ['Contenido institucional y organizativo', 'Portal de Transparencia UC3M', 'Órganos, estructura, funciones, normativa, planificación y personal.'],
          ['Contenido económico', 'Portal UC3M', 'Presupuestos, contratos, convenios, subvenciones, cuentas y retribuciones cuando proceda.']]],
        ['Derecho de acceso', [
          ['Información pública', 'Ley 10/2019', 'Contenidos o documentos en poder de sujetos obligados por sus funciones.'],
          ['Solicitud y tramitación', 'Procedimiento de acceso', 'Órgano competente, identificación de información, audiencia, límites y acceso parcial.'],
          ['Límites y datos personales', 'Ley 10/2019 + RGPD/LO 3/2018', 'Ponderación, proporcionalidad, anonimización y protección reforzada.'],
          ['Resolución y reclamación', 'Garantía de transparencia de Madrid', 'Plazo, efectos del silencio y reclamación ante el órgano competente.']]]
      ]
    },
    8: {
      source: 'LO 3/2007 y normativa de igualdad UC3M', status: 'estructura correcta; falta incorporar medidas literales del III Plan UC3M',
      blocks: [
        ['Igualdad efectiva', [
          ['Objeto', 'Art. 1 LO 3/2007', 'Igualdad de trato y oportunidades y eliminación de discriminación.'],
          ['Discriminación directa e indirecta', 'Art. 6', 'Trato menos favorable y desventaja por criterio aparentemente neutro.'],
          ['Acoso sexual y por razón de sexo', 'Art. 7', 'Concepto y diferencia.'],
          ['Acciones positivas', 'Art. 11', 'Medidas razonables y proporcionadas para corregir desigualdad de hecho.'],
          ['Transversalidad', 'Art. 15', 'Integrar igualdad en todas las políticas y actuaciones.']]],
        ['Capa específica UC3M', [
          ['Unidad de Igualdad', 'Normativa UC3M', 'Funciones de asesoramiento, prevención, formación, seguimiento y apoyo.'],
          ['Identidad y no discriminación', 'Normativa UC3M', 'Protección frente a discriminación por sexo, identidad, orientación, discapacidad u otras condiciones.'],
          ['Protocolos frente al acoso', 'Normativa UC3M', 'Prevención, confidencialidad, protección, investigación y medidas.'],
          ['III Plan de Igualdad', 'Documento UC3M', 'Ejes, objetivos, medidas, responsables, indicadores, calendario y seguimiento.']]]
      ]
    },
    9: {
      source: 'Word 2019, Excel 2019 y herramientas Google', status: 'estructura informática específica UC3M revisada',
      blocks: [
        ['Procesador de textos y Word 2019', [
          ['Edición y formato', 'Word 2019', 'Fuente, párrafo, estilos, listas, tabulaciones, márgenes, saltos y secciones.'],
          ['Tablas y elementos', 'Word 2019', 'Tablas, imágenes, encabezado, pie, numeración y referencias.'],
          ['Revisión y salida', 'Word 2019', 'Ortografía, comentarios, control de cambios, combinación, impresión y PDF.']]],
        ['Hoja de cálculo y Excel 2019', [
          ['Libro, hoja, celda y rango', 'Excel 2019', 'Estructura, tipos de dato y formato.'],
          ['Fórmulas y funciones', 'Excel 2019', 'Referencias relativas/absolutas, SUMA, PROMEDIO, CONTAR, SI, fechas y búsquedas básicas.'],
          ['Gestión de datos', 'Excel 2019', 'Ordenar, filtrar, tablas, validación, formato condicional, gráficos e impresión.']]],
        ['Google Workspace', [
          ['Drive', 'Google Drive', 'Archivos, carpetas, permisos, compartir, versiones y papelera.'],
          ['Docs y Sheets', 'Google Docs / Sheets', 'Edición colaborativa, comentarios, historial, compartir y exportar.'],
          ['Calendar', 'Google Calendar', 'Eventos, invitados, calendarios, recordatorios, disponibilidad y videoconferencia.']]],
        ['Correo electrónico', [
          ['Gestión de mensajes', 'Gmail/correo', 'Para, CC, CCO, asunto, adjuntos, responder, reenviar, etiquetas, filtros y búsqueda.'],
          ['Seguridad', 'Correo electrónico', 'Phishing, enlaces, adjuntos, destinatarios, confidencialidad y protección de datos.']]]
      ]
    },
    10: {
      source: 'TREBEP', status: 'desarrollo común revisado',
      blocks: [
        ['Personal al servicio de las Administraciones', [
          ['Clases de empleados públicos', 'Arts. 8 a 13 TREBEP', 'Funcionarios de carrera, interinos, laborales, eventuales y personal directivo.']]],
        ['Derechos y deberes', [
          ['Derechos individuales y colectivos', 'Arts. 14 y 15', 'Carrera, retribuciones, formación, conciliación, libertad sindical, negociación y huelga.'],
          ['Código de conducta', 'Arts. 52 a 54', 'Principios éticos y de conducta: objetividad, integridad, neutralidad, imparcialidad y servicio.']]],
        ['Relación de servicio', [
          ['Adquisición', 'Arts. 62 a 68', 'Superación del proceso, nombramiento, acatamiento y toma de posesión.'],
          ['Pérdida', 'Arts. 63 a 68', 'Renuncia, pérdida de nacionalidad, jubilación, separación e inhabilitación.'],
          ['Situaciones administrativas', 'Arts. 85 a 92', 'Servicio activo, servicios especiales, servicio en otras Administraciones, excedencia y suspensión.']]]
      ]
    },
    11: {
      source: 'RD 364/1995 y Ley 53/1984', status: 'estructura común revisada',
      blocks: [
        ['Ingreso y selección', [
          ['Oferta y convocatoria', 'RD 364/1995', 'Planificación, convocatoria, requisitos, órganos de selección y pruebas.'],
          ['Ingreso y nombramiento', 'RD 364/1995', 'Listas, aportación documental, nombramiento y toma de posesión.']]],
        ['Provisión, carrera y promoción', [
          ['Concurso', 'RD 364/1995', 'Méritos, convocatoria, comisión y resolución.'],
          ['Libre designación', 'RD 364/1995', 'Convocatoria pública y apreciación discrecional de idoneidad dentro de límites.'],
          ['Promoción interna', 'RD 364/1995', 'Requisitos, sistemas y relación con carrera administrativa.']]],
        ['Incompatibilidades', [
          ['Regla general', 'Ley 53/1984', 'Un puesto público como regla y necesidad de reconocimiento de compatibilidad cuando proceda.'],
          ['Actividades privadas y excepciones', 'Ley 53/1984', 'Límites, conflictos de interés, horarios y actividades exceptuadas.']]]
      ]
    },
    12: {
      source: 'Ley 31/1995 de Prevención de Riesgos Laborales', status: 'desarrollo común revisado',
      blocks: [
        ['Objeto, ámbito y conceptos', [
          ['Objeto y ámbito', 'Arts. 1 a 3 LPRL', 'Promoción de seguridad y salud y aplicación al personal público con especialidades.'],
          ['Definiciones', 'Art. 4', 'Prevención, riesgo, daño, riesgo grave e inminente, equipo y condición de trabajo.']]],
        ['Derechos y obligaciones', [
          ['Protección eficaz', 'Art. 14', 'Derecho del trabajador y deber de protección.'],
          ['Principios preventivos', 'Art. 15', 'Evitar, evaluar, combatir en origen, adaptar y priorizar protección colectiva.'],
          ['Evaluación y planificación', 'Art. 16', 'Identificar riesgos, planificar medidas, responsables y plazos.'],
          ['Información y formación', 'Arts. 18 y 19', 'Información sobre riesgos y formación suficiente, práctica y adecuada.'],
          ['Obligaciones del trabajador', 'Art. 29', 'Uso correcto, información y cooperación.']]],
        ['Organización y participación', [
          ['Servicios de prevención', 'Arts. 30 a 32 bis', 'Modalidades preventivas y recursos preventivos.'],
          ['Consulta y delegados', 'Arts. 33 a 37', 'Consulta previa y representantes especializados.'],
          ['Comité de Seguridad y Salud', 'Arts. 38 y 39', 'Órgano paritario y colegiado de participación.']]]
      ]
    },
    13: {
      source: 'Ley Orgánica 2/2023 del Sistema Universitario', status: 'estructura oficial ordenada; pendiente de completar artículo por artículo',
      blocks: [
        ['Funciones y autonomía', [
          ['Funciones del sistema universitario', 'LOSU', 'Formación, investigación, transferencia, cultura, pensamiento crítico, cohesión y servicio a la sociedad.'],
          ['Autonomía universitaria', 'LOSU', 'Autonomía académica, organizativa, económica, de personal y de gobierno dentro de la ley.']]],
        ['Universidades y enseñanzas', [
          ['Creación y reconocimiento', 'LOSU', 'Requisitos, autorización, calidad y coordinación del sistema.'],
          ['Enseñanzas y títulos', 'LOSU', 'Enseñanzas oficiales y propias, calidad, aprendizaje permanente y títulos.']]],
        ['Investigación y sociedad', [
          ['Investigación y transferencia', 'LOSU', 'Investigación como función esencial, ciencia abierta, innovación y transferencia.'],
          ['Cooperación, cultura e internacionalización', 'LOSU', 'Cooperación, participación social, movilidad, alianzas y dimensión internacional.']]]
      ]
    },
    14: {
      source: 'Ley Orgánica 2/2023 del Sistema Universitario', status: 'estructura oficial ordenada; pendiente de completar artículo por artículo',
      blocks: [
        ['Estudiantado', [
          ['Derechos y deberes', 'LOSU', 'Acceso, participación, evaluación, movilidad, igualdad, becas, representación y convivencia.']]],
        ['Régimen económico-financiero', [
          ['Autonomía económica', 'LOSU', 'Presupuesto, patrimonio, financiación, rendición de cuentas y control.']]],
        ['Personal universitario', [
          ['Personal docente e investigador', 'LOSU', 'Categorías, acceso, carrera, derechos, deberes y evaluación.'],
          ['PTGAS', 'LOSU', 'Personal técnico, de gestión y de administración y servicios; funciones, carrera, selección y movilidad.']]]
      ]
    },
    15: {
      source: 'Estatutos de la Universidad Carlos III de Madrid', status: 'estructura específica correcta; pendiente de literalidad y artículos estatutarios',
      blocks: [
        ['Defensor Universitario', [
          ['Naturaleza y misión', 'Estatutos UC3M', 'Garantía de derechos y libertades de la comunidad universitaria, actuación independiente y mediadora.'],
          ['Elección, mandato y funciones', 'Estatutos UC3M', 'Órgano elector, duración, incompatibilidades, quejas, recomendaciones e informe anual.']]],
        ['Servicios universitarios', [
          ['Creación y funcionamiento', 'Estatutos UC3M', 'Servicios de apoyo a docencia, investigación, gestión y comunidad universitaria.']]],
        ['Régimen económico y reforma', [
          ['Patrimonio y presupuesto', 'Estatutos UC3M', 'Recursos, programación, presupuesto, contratación, control y rendición de cuentas.'],
          ['Reforma de Estatutos', 'Estatutos UC3M', 'Iniciativa, aprobación por órganos universitarios y publicación.']]]
      ]
    },
    16: {
      source: 'RD 822/2021 y normativa académica UC3M', status: 'estructura específica correcta; pendiente de incorporar plazos UC3M literales',
      blocks: [
        ['Enseñanzas universitarias oficiales', [
          ['Grado, Máster y Doctorado', 'RD 822/2021', 'Organización, créditos, planes de estudio, verificación, seguimiento y modificación.'],
          ['Créditos y reconocimiento', 'RD 822/2021', 'ECTS, reconocimiento, transferencia y experiencia cuando proceda.']]],
        ['Matrícula, permanencia y evaluación UC3M', [
          ['Matrícula', 'Normativa UC3M', 'Modalidades, plazos, modificación, anulación, precios y efectos.'],
          ['Permanencia', 'Normativa UC3M', 'Mínimos de créditos, convocatorias, tiempo máximo y dispensa cuando proceda.'],
          ['Evaluación', 'Normativa UC3M', 'Sistemas, convocatorias, revisión, reclamación, actas y evaluación por compensación si procede.']]]
      ]
    },
    17: {
      source: 'RD 534/2024 y normativa de admisión UC3M', status: 'estructura específica correcta; pendiente de incorporar cupos y plazos UC3M',
      blocks: [
        ['Acceso a Grado', [
          ['Requisitos de acceso', 'RD 534/2024', 'Títulos y situaciones que permiten acceder a enseñanzas oficiales de Grado.'],
          ['Prueba de acceso', 'RD 534/2024', 'Estructura, materias, calificación, revisión y validez.']]],
        ['Admisión', [
          ['Criterios y procedimientos', 'RD 534/2024 + normativa UC3M', 'Preinscripción, ponderaciones, cupos, listas, reclamaciones y matrícula.'],
          ['Información y garantías', 'Normativa UC3M', 'Publicidad, igualdad, accesibilidad, protección de datos y recursos.']]]
      ]
    },
    18: {
      source: 'Presupuesto vigente de la UC3M', status: 'estructura específica correcta; pendiente de cargar cifras y bases de ejecución vigentes',
      blocks: [
        ['Características y estructura', [
          ['Presupuesto anual', 'Presupuesto UC3M', 'Documento único, equilibrio, especialidad, anualidad y vinculación de créditos.'],
          ['Estructura económica y orgánica', 'Presupuesto UC3M', 'Clasificación de ingresos y gastos, programas, centros gestores y aplicaciones.']]],
        ['Ingresos y financiación', [
          ['Ingresos', 'Presupuesto UC3M', 'Transferencias, precios públicos, investigación, patrimonio y otros recursos.'],
          ['Ejecución de ingresos', 'Bases de ejecución UC3M', 'Reconocimiento, liquidación, cobro, devolución y control.']]],
        ['Créditos y modificaciones', [
          ['Créditos iniciales y vinculación', 'Bases UC3M', 'Disponibilidad, limitación y nivel de vinculación.'],
          ['Modificaciones', 'Bases UC3M', 'Transferencias, generaciones, incorporaciones, suplementos y créditos extraordinarios.']]]
      ]
    },
    19: {
      source: 'Presupuesto y bases de ejecución de la UC3M', status: 'estructura específica correcta; pendiente de cargar procedimientos y documentos internos literales',
      blocks: [
        ['Ejecución del gasto', [
          ['Fases del gasto', 'Bases UC3M', 'Autorización, disposición, reconocimiento de obligación y ordenación del pago.'],
          ['Órganos competentes', 'Bases UC3M', 'Competencias de aprobación, delegaciones y límites.'],
          ['Documentos contables', 'Sistema contable UC3M', 'RC, A, D, O, AD, ADO y documentos inversos cuando proceda.']]],
        ['Gestión y pago', [
          ['Gastos menores, anticipos y caja fija', 'Bases UC3M', 'Requisitos, límites, justificación y reposición.'],
          ['Ordenación y materialización del pago', 'Bases UC3M', 'Propuesta, orden, tesorería, terceros y medios de pago.']]],
        ['Liquidación y cierre', [
          ['Cierre del ejercicio', 'Bases UC3M', 'Fechas límite, operaciones pendientes, periodificación y conciliación.'],
          ['Liquidación y rendición', 'Presupuesto UC3M', 'Resultado, remanentes, cuentas y control interno/externo.']]]
      ]
    },
    20: {
      source: 'Ley 9/2017 de Contratos del Sector Público', status: 'desarrollo común revisado; falta capa de órganos y reglas internas UC3M',
      blocks: [
        ['Ámbito y tipos', [
          ['Ámbito y principios', 'Arts. 1 a 3 LCSP', 'Libertad de acceso, publicidad, transparencia, igualdad, integridad y eficiencia.'],
          ['Tipos contractuales', 'Arts. 12 a 18', 'Obras, concesiones, suministro, servicios y mixtos.']]],
        ['Elementos del contrato', [
          ['Órgano de contratación', 'LCSP + delegaciones UC3M', 'Competencia para aprobar expediente, gasto, adjudicación y formalización.'],
          ['Objeto y lotes', 'Art. 99', 'Objeto determinado, lotes y prohibición de fraccionamiento indebido.'],
          ['Presupuesto, valor y precio', 'Arts. 100 a 102', 'Diferenciar presupuesto base, valor estimado y precio.'],
          ['Aptitud y solvencia', 'Arts. 65 y ss.', 'Capacidad, prohibiciones, solvencia y clasificación cuando proceda.']]],
        ['Preparación y adjudicación', [
          ['Necesidad y expediente', 'Arts. 28, 116 y 117', 'Necesidad, idoneidad, crédito, pliegos y aprobación.'],
          ['Procedimientos', 'LCSP, Libro II', 'Abierto, abierto simplificado, restringido, negociado y otros supuestos.'],
          ['Contrato menor', 'Art. 118', 'Límites, expediente y ausencia de fraccionamiento.']]],
        ['Ejecución', [
          ['Ejecución y pago', 'LCSP', 'Responsable, conformidad, factura, plazo de pago y penalidades.'],
          ['Modificación, suspensión y resolución', 'LCSP', 'Causas, procedimiento y efectos.']]]
      ]
    }
  };

  const flatten = def => def.blocks.flatMap(([block, rows]) => rows.map(row => ({ block, row })));
  const sec = (heading, paragraphs) => ({ heading, paragraphs });
  const uniq = arr => [...new Set(arr.filter(Boolean))];

  function sectionsFor(theme, def) {
    const flat = flatten(def);
    const hot = flat.slice(0, 8).map(({ row }) => `• ${row[0]} — ${row[1]}: ${row[2]}`);
    return [
      sec('Resumen orientado al aprobado', [
        `Enunciado oficial: ${theme.title}`,
        `Fuente principal: ${def.source}. El tema queda separado en bloques para evitar mezclarlo con el mismo número de otra oposición.`,
        'Estudia cada bloque con esta secuencia: concepto o regla, referencia normativa, órgano o sujeto, plazo cuando exista, excepción y efecto.'
      ]),
      sec('Rigor normativo', [
        'Conserva literalmente leyes, artículos, denominaciones, órganos, plazos y efectos. No sustituyas normativa universitaria por reglas municipales.',
        `Estado de auditoría: ${def.status}.`
      ]),
      ...def.blocks.map(([heading, rows]) => sec(heading, rows.map(r => `${r[0]} · ${r[1]}. ${r[2]}`))),
      sec('Opo-Test: puntos calientes', hot),
      sec('Retención activa', [
        `1. ¿Cómo dividirías el tema ${theme.number} en sus bloques principales sin mirar el esquema?`,
        '2. ¿Qué referencias, órganos, plazos o conceptos de este tema pueden confundirse con una respuesta parecida?',
        '3. ¿Qué parte es normativa común y qué parte exige documento específico de la UC3M?'
      ]),
      sec('Siguiente repaso', [
        'Primera vuelta: mapa y referencias. Segunda: lectura de la norma o documento. Tercera: preguntas sin mirar. Cuarta: test cronometrado y revisión de errores.',
        def.status.includes('pendiente') ? 'Este tema no debe considerarse cerrado hasta incorporar el documento oficial específico indicado en el estado de auditoría.' : 'Este bloque común ya tiene una base suficiente para comenzar test, aunque debe contrastarse siempre con el texto vigente.'
      ])
    ];
  }

  function mapFor(def) {
    return def.blocks.map(([title, rows]) => ({ title, rows }));
  }

  function questionsFor(theme, def) {
    const flat = flatten(def);
    const genericRefs = ['Ley 39/2015', 'Ley 40/2015', 'TREBEP', 'Constitución Española'];
    const genericMastery = ['Responder sin comprobar la referencia normativa.', 'Aplicar una regla municipal a un tema universitario.', 'Ignorar el órgano, el plazo y el efecto jurídico.'];

    return Array.from({ length: 12 }, (_, i) => {
      const current = flat[i % flat.length].row;
      const refQuestion = i % 2 === 0;
      const correct = refQuestion ? current[1] : current[2];
      const pool = refQuestion
        ? uniq(flat.map(x => x.row[1]).concat(genericRefs)).filter(x => x !== correct)
        : uniq(flat.map(x => x.row[2]).concat(genericMastery)).filter(x => x !== correct);
      const distractors = pool.slice((i * 3) % Math.max(pool.length, 1)).concat(pool).slice(0, 3);
      const options = uniq([correct, ...distractors]).slice(0, 4);
      while (options.length < 4) options.push(`Opción no aplicable al tema ${theme.number} (${options.length + 1})`);
      const shift = (theme.number + i) % 4;
      const ordered = options.slice(shift).concat(options.slice(0, shift));
      return {
        id: `${theme.id}-v30-q${i + 1}`,
        text: refQuestion
          ? `Tema ${theme.number}. ¿Qué referencia corresponde a «${current[0]}»?`
          : `Tema ${theme.number}. ¿Qué debe dominarse en «${current[0]}»?`,
        options: ordered.map((text, j) => ({ letter: 'ABCD'[j], text })),
        answer: 'ABCD'[ordered.indexOf(correct)],
        justification: `${current[0]}: ${current[1]}. ${current[2]}`
      };
    });
  }

  (ope.themes || []).forEach(theme => {
    const def = M[theme.number];
    if (!def) return;
    theme.officialMap = mapFor(def);
    theme.sections = sectionsFor(theme, def);
    theme.reviewTable = [
      ['Elemento', 'Comprobación obligatoria'],
      ['Fuente', def.source],
      ['Cobertura', def.status],
      ['Examen', 'Referencia correcta, contenido literal, diferencia con figuras próximas y aplicación.'],
      ['Reutilización', theme.number <= 12 || theme.number === 20 ? 'Bloque común reutilizable con otras oposiciones.' : 'Bloque específico de universidad/UC3M.']
    ];
    theme.tree = [`Tema ${theme.number}`, ...def.blocks.map(([name]) => `- ${name}`), '- Opo-Test', '- Retención activa'].join('\n');
    theme.modularSource = null;
    theme.testHint = 'Auditoría específica UC3M v30';
    theme.motorCoverage = def.status.includes('pendiente') ? 'estructura-completa-desarrollo-pendiente' : 'completo-revisado';
    ope.themeTests[theme.id] = questionsFor(theme, def);
  });

  const all = Object.values(ope.themeTests).flat();
  ope.simulacros = [0, 29, 67].map((start, s) => ({
    id: `${UC3M_ID}-v30-sim${s + 1}`,
    title: `Simulacro UC3M de contenido ${s + 1}`,
    questions: Array.from({ length: 70 }, (_, i) => ({ ...all[(start + i * 11) % all.length], id: `${UC3M_ID}-v30-sim${s + 1}-q${i + 1}` }))
  }));

  ope.version = '0.30.0';
  ope.coverage = { enriched: 20, total: 20, pendingSpecific: [7, 8, 13, 14, 15, 16, 17, 18, 19, 20] };
  ope.status = `${(ope.status || '').replace(/ Cobertura comprobada:.*/, '').replace(/ Motor único activo:.*/, '')} Auditoría v0.30: los 20 temas tienen mapa propio UC3M; los temas 7, 8 y 13-20 requieren completar documentos específicos antes de considerarlos cerrados.`;
  ope.changelog ||= [];
  if (!ope.changelog.some(c => c.version === '0.30.0')) {
    ope.changelog.unshift({
      version: '0.30.0',
      date: '2026-07-10',
      changes: [
        'Corregida la mezcla de mapas por número entre convocatorias',
        'Asignado mapa propio a los 20 temas UC3M',
        'Corregidos y ampliados los temas 2 a 12 y 20',
        'Estructurados los temas universitarios 13 a 19 con estado de desarrollo visible',
        'Sustituidos los test metodológicos UC3M por preguntas de contenido'
      ]
    });
  }

  window.OPOWEB_UC3M_AUDIT = {
    version: 'v0.30.0',
    completeCommon: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12],
    pendingOfficialSpecific: [7, 8, 13, 14, 15, 16, 17, 18, 19, 20]
  };

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) {}
  }
})();
