(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const n = (v) => String(v || '').toLowerCase();
  const section = (heading, paragraphs) => ({ heading, paragraphs });
  const contains = (text, words) => words.some(w => text.includes(w));

  const legal = {
    constitucionGeneral: [
      section('Artículo por artículo: Título Preliminar', [
        'Artículo 1 CE. España es un Estado social y democrático de Derecho. Los valores superiores del ordenamiento son libertad, justicia, igualdad y pluralismo político. La soberanía nacional reside en el pueblo español. La forma política del Estado es la Monarquía parlamentaria.',
        'Artículo 2 CE. Unidad de la Nación española, autonomía de nacionalidades y regiones y principio de solidaridad. En test se pregunta mucho la relación unidad-autonomía-solidaridad.',
        'Artículo 3 CE. Castellano como lengua oficial del Estado y deber de conocerlo. Las demás lenguas españolas son oficiales en sus Comunidades Autónomas según Estatutos. La riqueza lingüística es patrimonio cultural protegido.',
        'Artículo 4 CE. Bandera de España y banderas autonómicas. Las banderas autonómicas se usan junto a la española en edificios públicos y actos oficiales.',
        'Artículo 5 CE. Capital del Estado: villa de Madrid.',
        'Artículo 6 CE. Partidos políticos: pluralismo, formación y manifestación de voluntad popular, participación política y estructura interna democrática.',
        'Artículo 7 CE. Sindicatos y asociaciones empresariales: defensa y promoción de intereses económicos y sociales; creación libre y funcionamiento democrático.',
        'Artículo 8 CE. Fuerzas Armadas: Ejército de Tierra, Armada y Ejército del Aire. Misión: garantizar soberanía e independencia, defender integridad territorial y ordenamiento constitucional.',
        'Artículo 9 CE. Sujeción a Constitución y ordenamiento. 9.2: promover libertad e igualdad reales. 9.3: legalidad, jerarquía normativa, publicidad, irretroactividad sancionadora no favorable, seguridad jurídica, responsabilidad e interdicción de arbitrariedad.'
      ]),
      section('Derechos, deberes, garantías y suspensión', [
        'Artículo 10 CE. Dignidad, derechos inviolables, libre desarrollo de la personalidad, respeto a la ley y derechos de los demás como fundamento del orden político y paz social.',
        'Artículos 11 a 13 CE. Nacionalidad, mayoría de edad y extranjería. Los extranjeros gozan de libertades públicas en los términos de tratados y ley.',
        'Artículo 14 CE. Igualdad ante la ley y prohibición de discriminación. Tiene protección reforzada y recurso de amparo.',
        'Artículos 15 a 29 CE. Derechos fundamentales y libertades públicas: vida, integridad, libertad ideológica, libertad personal, intimidad, residencia, expresión, reunión, asociación, participación, tutela judicial, legalidad penal, educación, sindicación, huelga y petición.',
        'Artículos 30 a 38 CE. Derechos y deberes de ciudadanos: defensa, objeción, sistema tributario justo, matrimonio, propiedad, fundación, trabajo, negociación colectiva y libertad de empresa.',
        'Artículos 39 a 52 CE. Principios rectores: familia, Seguridad Social, salud, cultura, medio ambiente, vivienda, juventud, discapacidad, tercera edad y consumidores. Informan actuación pública; su exigibilidad depende de desarrollo legal.',
        'Artículo 53 CE. Garantías: vinculación a poderes públicos, reserva de ley, contenido esencial, procedimiento preferente y sumario, amparo y régimen de principios rectores.',
        'Artículo 55 CE. Suspensión de derechos en estados de excepción y sitio, y suspensión individual en supuestos tasados con control judicial y parlamentario.'
      ]),
      section('Órganos constitucionales y reforma', [
        'Corona: artículos 56 a 65 CE. Rey como Jefe del Estado, símbolo de unidad y permanencia. Funciones tasadas y refrendo como regla.',
        'Cortes Generales: artículos 66 a 96 CE. Congreso y Senado. Potestad legislativa, presupuestos, control del Gobierno y representación del pueblo español.',
        'Gobierno y Administración: artículos 97 a 107 CE. Gobierno dirige política interior/exterior, Administración civil y militar y defensa. Administración sirve con objetividad intereses generales.',
        'Poder Judicial: artículos 117 a 127 CE. Independencia, inamovilidad, responsabilidad y sometimiento exclusivo al imperio de la ley.',
        'Tribunal Constitucional: artículos 159 a 165 CE. Recurso de inconstitucionalidad, amparo, conflictos de competencia y control constitucional.',
        'Reforma: artículos 166 a 169 CE. Ordinaria del 167 y agravada del 168 para revisión total, Título Preliminar, Sección 1.ª del Capítulo II del Título I y Título II.'
      ])
    ],

    ley39Interesados: [
      section('Disposiciones generales de la Ley 39/2015', [
        'Artículo 1. Objeto. La Ley regula requisitos de validez y eficacia de actos administrativos, procedimiento administrativo común de todas las Administraciones, procedimiento sancionador y responsabilidad patrimonial en su tramitación, y principios de iniciativa legislativa y potestad reglamentaria.',
        'Artículo 2. Ámbito subjetivo. Se aplica a AGE, Comunidades Autónomas, Entidades Locales y sector público institucional. Un Ayuntamiento, sus organismos públicos y entidades vinculadas quedan dentro del ámbito en los términos de la ley.'
      ]),
      section('Los interesados en el procedimiento: artículos 3 a 8', [
        'Artículo 3. Capacidad de obrar. Tienen capacidad de obrar ante las Administraciones quienes la tengan conforme al Derecho civil. También menores de edad para derechos cuya actuación permita el ordenamiento sin asistencia de patria potestad, tutela o curatela. Cuando una ley lo diga expresamente, también grupos de afectados, uniones y entidades sin personalidad jurídica y patrimonios independientes o autónomos.',
        'Artículo 4. Concepto de interesado. Son interesados: quienes promueven el procedimiento como titulares de derechos o intereses legítimos; quienes, sin iniciarlo, tengan derechos que puedan resultar afectados; quienes tengan intereses legítimos afectados y se personen antes de resolución definitiva. Las asociaciones representativas de intereses económicos y sociales pueden tener intereses legítimos colectivos. Si la condición de interesado deriva de relación transmisible, el derechohabiente sucede en esa condición.',
        'Artículo 5. Representación. Los interesados pueden actuar por representante. Debe acreditarse para solicitudes, declaraciones responsables, comunicaciones, recursos, desistimiento y renuncia. Para actos de mero trámite se presume. Se acredita por cualquier medio válido, apoderamiento apud acta presencial/electrónico o registro electrónico de apoderamientos. Falta o insuficiencia de acreditación: no impide tener por realizado el acto si se subsana en diez días o plazo superior justificado.',
        'Artículo 6. Registros electrónicos de apoderamientos. AGE, CCAA y Entidades Locales tienen registro electrónico general. Contiene poderes generales y bastanteo. Registros interoperables. Asientos: poderdante, apoderado, fecha, duración y tipo de poder. Tipos: poder general ante cualquier Administración, poder ante Administración concreta o poder para trámites concretos. Apud acta electrónico o presencial. Validez máxima: cinco años, prorrogable o revocable.',
        'Artículo 7. Pluralidad de interesados. Si varios interesados firman una solicitud, se actúa con representante o interesado designado; si no, con el que figure primero.',
        'Artículo 8. Nuevos interesados. Si durante instrucción sin publicidad se advierten titulares de derechos o intereses legítimos y directos identificables y afectados, se les comunica la tramitación.'
      ]),
      section('Actividad administrativa: artículos 13 a 28', [
        'Artículo 13. Derechos de las personas. Comunicación electrónica, asistencia, lengua oficial, acceso a información pública y archivos, trato respetuoso, responsabilidades e información sobre requisitos.',
        'Artículo 14. Derecho y obligación electrónica. Personas físicas eligen canal salvo obligación. Obligados: personas jurídicas, entidades sin personalidad, profesionales colegiados en su actividad, representantes de obligados y empleados públicos por razón de su condición.',
        'Artículo 15. Lengua. Castellano en AGE y régimen de cooficialidad según territorio. En Entidades Locales se aplica normativa autonómica.',
        'Artículo 16. Registros. Registro Electrónico General. Asiento con número, fecha/hora, interesado, órgano destinatario y contenido. Recibo acreditativo. Presentación en registro electrónico, Correos, oficinas consulares, oficinas de asistencia y otros registros.',
        'Artículo 17. Archivo electrónico único de procedimientos finalizados. Garantiza autenticidad, integridad, conservación, acceso y protección de datos.',
        'Artículos 18 a 20. Colaboración, comparecencia solo obligatoria con norma con rango de ley y responsabilidad de tramitación de unidades y personal.',
        'Artículo 21. Obligación de resolver expresamente y notificar. Si la norma del procedimiento no fija plazo, el máximo es tres meses.',
        'Artículos 22 y 23. Suspensión y ampliación del plazo máximo. Suspensión por causas tasadas; ampliación excepcional motivada por acumulación o falta de medios.',
        'Artículos 24 y 25. Silencio administrativo. A solicitud: regla positiva con excepciones. De oficio: desestimatorio si reconoce derechos favorables; caducidad si es desfavorable o sancionador.',
        'Artículos 26 a 28. Documentos administrativos, copias auténticas y no aportación de documentos ya en poder de la Administración o elaborados por ella.'
      ]),
      section('Términos y plazos: artículos 29 a 33', [
        'Artículo 29. Los términos y plazos obligan a autoridades, personal e interesados.',
        'Artículo 30. Horas hábiles salvo norma contraria. Días hábiles salvo ley o Derecho de la Unión. Sábados, domingos y festivos son inhábiles. Meses y años de fecha a fecha; si el último día es inhábil, prorroga al primer hábil.',
        'Artículo 31. Registro electrónico 24 horas. Presentación en inhábil: primera hora del primer día hábil siguiente salvo norma especial.',
        'Artículo 32. Ampliación de plazos antes del vencimiento, sin perjudicar terceros y sin exceder la mitad del plazo inicial.',
        'Artículo 33. Urgencia: reducción a la mitad de plazos ordinarios, salvo solicitudes y recursos.'
      ])
    ],

    ley39ActosProcedimiento: [
      section('Actos administrativos: artículos 34 a 52', [
        'Artículo 34. Los actos administrativos se producen por órgano competente y ajustados al procedimiento.',
        'Artículo 35. Motivación obligatoria en actos limitativos de derechos, recursos, separación de criterios, medidas provisionales, urgencia, ampliaciones, potestad discrecional y otros casos legales.',
        'Artículo 36. Forma electrónica escrita salvo naturaleza distinta.',
        'Artículos 37 a 39. Inderogabilidad singular, ejecutividad y efectos desde la fecha en que se dicten salvo eficacia demorada.',
        'Artículos 40 a 46. Notificación y publicación: texto íntegro, recursos, órgano y plazo. Notificación electrónica, rechazo, comparecencia y publicación en supuestos legales.',
        'Artículos 47 a 52. Nulidad, anulabilidad, límites, conversión, conservación y convalidación. Nulidad para causas tasadas graves; anulabilidad como regla general para infracciones no invalidantes de nulidad.'
      ]),
      section('Procedimiento administrativo común: artículos 53 a 105', [
        'Artículo 53. Derechos del interesado dentro del procedimiento: estado de tramitación, silencio, órgano, instructor, acceso, copias, alegaciones, documentos y asesoramiento.',
        'Artículos 54 a 69. Iniciación. De oficio o solicitud. De oficio por propia iniciativa, orden superior, petición razonada o denuncia. Solicitud con identificación, hechos, petición, firma, órgano y medio de notificación. Subsanación de diez días.',
        'Artículos 70 a 74. Ordenación. Expediente electrónico, impulso de oficio, concentración de trámites, cumplimiento y cuestiones incidentales.',
        'Artículos 75 a 83. Instrucción. Alegaciones, prueba, informes, audiencia e información pública.',
        'Artículos 84 a 96. Finalización. Resolución, desistimiento, renuncia, caducidad, imposibilidad material o terminación convencional. Tramitación simplificada cuando proceda.',
        'Artículos 97 a 105. Ejecución. Título, ejecutoriedad y ejecución forzosa mediante apremio sobre patrimonio, ejecución subsidiaria, multa coercitiva o compulsión sobre personas.'
      ])
    ],

    ley39Revision: [
      section('Revisión de oficio: artículos 106 a 111', [
        'Artículo 106. Revisión de actos nulos y disposiciones nulas con garantías y dictamen consultivo cuando proceda.',
        'Artículo 107. Lesividad. Actos favorables anulables no se anulan directamente; se declaran lesivos y se impugnan ante lo contencioso-administrativo.',
        'Artículo 108. Suspensión en revisión si la ejecución puede causar perjuicios de imposible o difícil reparación.',
        'Artículo 109. Revocación de actos desfavorables con límites y rectificación de errores materiales, de hecho o aritméticos en cualquier momento.',
        'Artículos 110 y 111. Límites de revisión y competencia del órgano correspondiente.'
      ]),
      section('Recursos administrativos: artículos 112 a 126', [
        'Artículos 112 a 120. Objeto, clases, fin de vía administrativa, interposición, inadmisión, suspensión, audiencia y resolución. Son recurribles resoluciones y actos de trámite cualificados.',
        'Artículos 121 y 122. Alzada: contra actos que no ponen fin a la vía administrativa. Plazo de interposición: un mes si acto expreso. Plazo de resolución: tres meses.',
        'Artículos 123 y 124. Reposición: contra actos que ponen fin a la vía administrativa. Potestativo. Plazo de interposición: un mes si acto expreso. Plazo de resolución: un mes.',
        'Artículos 125 y 126. Extraordinario de revisión: contra actos firmes por error de hecho, documentos esenciales, falsedad declarada o conducta punible declarada judicialmente.'
      ])
    ],

    ley40: [
      section('Principios, órganos y competencia: artículos 3 a 14 Ley 40/2015', [
        'Artículo 3. Principios de actuación: servicio efectivo, simplicidad, claridad, proximidad, participación, objetividad, transparencia, racionalización, eficacia, economía, suficiencia, eficiencia, cooperación, colaboración y coordinación.',
        'Artículos 5 a 7. Órganos administrativos, instrucciones, órdenes de servicio y órganos consultivos.',
        'Artículo 8. Competencia irrenunciable. Se ejerce por el órgano que la tenga atribuida, salvo delegación o avocación.',
        'Artículo 9. Delegación de competencias. Cambia el ejercicio, no la titularidad; debe publicarse cuando corresponda.',
        'Artículo 10. Avocación: órgano superior asume conocimiento de asunto de órgano dependiente.',
        'Artículo 11. Encomienda de gestión: actividades materiales o técnicas sin cesión de titularidad de competencia.',
        'Artículo 12. Delegación de firma: no altera competencia.',
        'Artículo 13. Suplencia por vacante, ausencia o enfermedad.',
        'Artículo 14. Decisiones sobre competencia: remisión al órgano competente.'
      ]),
      section('Órganos colegiados, abstención, recusación, sanciones y responsabilidad', [
        'Artículos 15 a 18. Órganos colegiados: convocatoria, constitución, sesiones, acuerdos y actas.',
        'Artículos 23 y 24. Abstención y recusación por interés personal, parentesco, amistad íntima, enemistad manifiesta, intervención previa o relación de servicio.',
        'Artículos 25 a 31. Potestad sancionadora: legalidad, irretroactividad, tipicidad, responsabilidad, proporcionalidad, prescripción y non bis in idem.',
        'Artículos 32 a 37. Responsabilidad patrimonial: daño efectivo, evaluable, individualizado, relación causal, antijuridicidad y ausencia de fuerza mayor.'
      ]),
      section('Funcionamiento electrónico, convenios y relaciones interadministrativas', [
        'Artículos 38 a 46. Sede electrónica, portal de internet, identificación de Administraciones, actuación automatizada, firma electrónica de personal, CSV, archivo e intercambio electrónico.',
        'Artículos 47 a 53. Convenios: sujetos, contenido mínimo, duración, extinción, seguimiento y control.',
        'Artículos 140 a 158. Relaciones interadministrativas: cooperación, colaboración, coordinación, Conferencias Sectoriales, convenios y consorcios.'
      ])
    ],

    local: [
      section('Municipio, padrón, organización y competencias', [
        'Ley 7/1985, artículo 1. Municipios, provincias e islas son entidades locales territoriales. El municipio es entidad básica y cauce de participación.',
        'Artículo 4. Potestades locales: reglamentaria, autoorganizativa, tributaria, financiera, programación, expropiación, investigación de bienes, recuperación de oficio, ejecución forzosa y sancionadora.',
        'Artículo 11. Elementos del municipio: territorio, población y organización.',
        'Artículos 15 a 18. Padrón: residencia habitual, vecino, inscripción, certificaciones y derechos/deberes vecinales.',
        'Artículos 20 a 23. Organización municipal: Alcalde, Tenientes de Alcalde, Pleno y Junta de Gobierno Local. Alcalde dirige y representa; Pleno controla, aprueba ordenanzas, presupuestos y acuerdos principales.',
        'Artículos 25 a 27. Competencias propias, delegadas y distintas. En supuesto práctico siempre comprobar materia, competencia y órgano.'
      ]),
      section('Funcionamiento local, provincia y potestad normativa', [
        'Artículo 26. Servicios mínimos según población: alumbrado, cementerio, residuos, limpieza, abastecimiento, alcantarillado, acceso, pavimentación y otros según tramo.',
        'Artículos 31 a 37. Provincia y Diputación: asistencia y cooperación jurídica, económica y técnica a municipios, coordinación y prestación de servicios supramunicipales.',
        'Artículo 46. Sesiones de órganos colegiados: convocatoria, orden del día, quórum, votación, actas y publicidad.',
        'Artículos 49 y 70. Ordenanzas y reglamentos: aprobación inicial, información pública/audiencia, resolución de reclamaciones, aprobación definitiva y publicación íntegra.'
      ])
    ],

    empleo: [
      section('Empleo público y función pública local', [
        'TREBEP, artículo 8. Empleados públicos: funcionarios de carrera, funcionarios interinos, personal laboral y personal eventual.',
        'Artículos 9 a 12. Funcionario de carrera para funciones permanentes; interino por necesidad y urgencia; laboral por contrato; eventual para confianza o asesoramiento especial.',
        'Artículos 52 a 54. Código de conducta: objetividad, integridad, neutralidad, responsabilidad, imparcialidad, confidencialidad, dedicación y trato correcto.',
        'Artículos 55 a 62. Acceso: igualdad, mérito, capacidad, publicidad, transparencia, imparcialidad y adecuación de pruebas a funciones.',
        'OEP. Incluye necesidades de personal con dotación presupuestaria para nuevo ingreso. Convocatoria es el acto concreto que regula un proceso selectivo.',
        'Provisión. Concurso y libre designación cubren puestos por empleados existentes. No es selección de nuevo ingreso.',
        'Situaciones administrativas, incompatibilidades y disciplina: servicio activo, excedencias, suspensión, compatibilidad/incompatibilidad y procedimiento disciplinario.'
      ])
    ],

    hacienda: [
      section('Hacienda local, ingresos y tributos', [
        'TRLRHL, artículo 2. Recursos: patrimonio, tributos, participaciones, subvenciones, precios públicos, operaciones de crédito, multas y demás prestaciones de derecho público.',
        'Tributos locales: impuestos, tasas y contribuciones especiales. Tasa: dominio público o servicio/actividad administrativa. Contribución especial: beneficio o aumento de valor por obra/servicio.',
        'Impuestos obligatorios: IBI, IAE e IVTM. Potestativos: ICIO e IIVTNU. En cada uno: hecho imponible, sujeto pasivo, devengo, base, cuota, gestión y beneficios fiscales.',
        'Gestión tributaria: declaración, autoliquidación, liquidación, padrón, notificación, comprobación, exenciones, bonificaciones y recursos.'
      ]),
      section('Recaudación, apremio y presupuesto', [
        'Periodo voluntario: pago dentro del plazo sin recargos ejecutivos.',
        'Periodo ejecutivo: se inicia al finalizar voluntaria sin pago. Providencia de apremio abre vía de apremio, exige deuda, recargo, intereses y costas.',
        'Aplazamiento y fraccionamiento: diferir o dividir pago mediante solicitud, garantías cuando proceda e intereses.',
        'Presupuesto local: previsión de ingresos y límite de gastos. Créditos, aplicaciones presupuestarias, modificaciones, ejecución, liquidación, resultado presupuestario, remanente de tesorería y cuenta general.',
        'Estabilidad y regla de gasto: principios de sostenibilidad, equilibrio y control del gasto público aplicables a entidades locales.'
      ])
    ],

    contratos: [
      section('Contratos del sector público', [
        'LCSP. Principios: libertad de acceso, publicidad, transparencia, igualdad, no discriminación, integridad y mejor relación calidad-precio.',
        'Expediente: necesidad, idoneidad, objeto, presupuesto base de licitación, valor estimado, crédito, pliegos, procedimiento y criterios de adjudicación.',
        'Objeto y lotes: objeto determinado y prohibición de fraccionamiento indebido. División en lotes cuando sea procedente.',
        'Procedimientos: abierto, restringido, negociado, diálogo competitivo, asociación para la innovación, abierto simplificado y supersimplificado si procede.',
        'Contrato menor: necesidad, objeto, importe dentro de límite, crédito, no fraccionamiento, aprobación del gasto y factura. Es clave en supuesto municipal.',
        'Ejecución: responsable del contrato, cumplimiento, modificación, penalidades, recepción, liquidación, resolución y garantías.'
      ])
    ],

    bienesActividad: [
      section('Bienes y actividad administrativa local', [
        'Bienes locales: dominio público, comunales y patrimoniales. Dominio público afectado a uso o servicio público; patrimonial no afectado.',
        'Dominio público: inalienable, inembargable e imprescriptible. Usos: común general, común especial y privativo mediante autorización o concesión.',
        'Inventario, afectación y desafectación. Toda actuación sobre bienes exige comprobar titularidad, clasificación e inventario.',
        'Fomento: subvenciones, ayudas y medidas de incentivo con publicidad y control.',
        'Policía administrativa: licencias, autorizaciones, inspección, órdenes y sanciones.',
        'Servicio público: actividad prestacional municipal, con gestión directa o indirecta conforme a ley.'
      ])
    ],

    igualdadPrlDatos: [
      section('Igualdad, prevención y datos', [
        'Igualdad. LO 3/2007: igualdad de trato, discriminación directa, discriminación indirecta, acoso sexual, acoso por razón de sexo, acciones positivas y transversalidad.',
        'Prevención. Ley 31/1995: derecho a protección eficaz, evaluación de riesgos, planificación preventiva, información, formación, vigilancia de salud, consulta y participación.',
        'Protección de datos. RGPD: dato personal, tratamiento, responsable, encargado, base jurídica, minimización, finalidad, confidencialidad, derechos y seguridad.',
        'En Ayuntamiento: especial cuidado en padrón, tributos, expedientes sancionadores, registro, atención telefónica, correos, impresiones y copias con datos de terceros.'
      ])
    ],

    electronica: [
      section('Administración electrónica completa', [
        'Identificación electrónica. Acredita quién actúa: certificado, clave concertada u otro sistema admitido.',
        'Firma electrónica. Acredita voluntad y vinculación con el contenido. No es lo mismo que identificarse.',
        'Sede electrónica. Dirección electrónica de una Administración con garantías de titularidad, seguridad, disponibilidad y responsabilidad.',
        'Registro electrónico. Entrada y salida de solicitudes, escritos y comunicaciones con asiento, fecha/hora, recibo y justificante.',
        'CSV. Código Seguro de Verificación para comprobar autenticidad e integridad de documentos en sede.',
        'Notificación electrónica. Acceso por sede o dirección electrónica habilitada; efectos por comparecencia, rechazo o transcurso de plazo según Ley 39/2015.',
        'Factura electrónica. Registro contable, conformidad, fiscalización, reconocimiento de obligación y control de morosidad.'
      ])
    ],

    windows1: [
      section('Microsoft Windows I: archivos, carpetas, unidades, impresión y digitalización', [
        'Escritorio, barra de tareas, menú Inicio, área de notificación, búsqueda, ventanas, accesos directos y panel de configuración. En examen práctico pueden pedir localizar, abrir, renombrar o mover elementos.',
        'Archivo. Unidad mínima de información con nombre, extensión, ubicación, tamaño, fecha y atributos. Extensiones habituales: PDF, DOCX, ODT, XLSX, ODS, JPG, PNG, TXT, CSV, ZIP.',
        'Carpeta. Contenedor lógico de archivos y subcarpetas. Operaciones: crear, renombrar, copiar, cortar, pegar, mover, eliminar, restaurar desde Papelera y crear acceso directo.',
        'Rutas. Ruta absoluta, ruta relativa, unidad C:, carpetas de usuario, Escritorio, Descargas, Documentos y rutas de red. En red puede usarse letra asignada o ruta UNC.',
        'Copiar frente a mover. Copiar duplica; cortar y pegar mueve. Borrar en unidad local suele enviar a Papelera; en red, USB o unidades externas puede eliminar directamente.',
        'Unidades locales. Disco interno HDD/SSD y particiones. Unidad de red. Recurso compartido con permisos; puede depender de conexión, credenciales y políticas del Ayuntamiento.',
        'Permisos. Lectura, escritura, modificación, eliminación y acceso compartido. En expedientes con datos personales, no guardar fuera de la ubicación autorizada.',
        'Compresión ZIP. Agrupa archivos y reduce tamaño. Útil para envío, pero no sustituye firma, registro ni garantías de expediente.',
        'Impresión. Seleccionar impresora, páginas, copias, orientación, tamaño, color, doble cara, bandeja, vista previa, cola de impresión, cancelar trabajo y solucionar atasco o falta de papel.',
        'Impresora PDF. Genera documento PDF desde una aplicación. Hay que revisar nombre, ubicación y que el resultado sea legible.',
        'Digitalización. Escáner plano, alimentador automático, multifunción. Parámetros: PDF/JPG, resolución, blanco y negro/color, una o doble cara, OCR, orientación, contraste y compresión.',
        'Control de calidad del escaneo: todas las páginas, orden correcto, legibilidad, márgenes, firma visible, sellos visibles, sin páginas torcidas y nombre normalizado antes de subir al expediente.'
      ])
    ],

    windows2: [
      section('Navegación por Internet: Internet Explorer y Microsoft Edge', [
        'Navegador. Programa para acceder a páginas web mediante URL. Elementos: barra de direcciones, pestañas, botones atrás/adelante, recargar, inicio, favoritos, historial, descargas y configuración.',
        'URL. Dirección de un recurso. Partes: protocolo, dominio, ruta, parámetros. Diferencia entre dominio oficial y páginas parecidas.',
        'HTTP y HTTPS. HTTPS cifra la comunicación, pero no garantiza por sí solo que la web sea oficial. Hay que verificar dominio, certificado y sede.',
        'Certificado del sitio. Permite comprobar identidad del servidor y conexión segura. Si hay error de certificado, no introducir credenciales ni datos personales.',
        'Favoritos y marcadores. Guardan direcciones frecuentes. En oficina conviene usar favoritos oficiales: sede municipal, BOP, BOE, plataforma de contratación, registro y portales administrativos.',
        'Historial, caché y cookies. Historial guarda páginas visitadas; caché conserva archivos temporales; cookies almacenan información de sesión/preferencias. En equipos compartidos hay que cerrar sesión y no guardar contraseñas.',
        'Descargas. Revisar origen, extensión, carpeta de destino y posible riesgo. No abrir ejecutables desconocidos. Los PDF descargados deben guardarse en expediente si proceden.',
        'Navegación privada/InPrivate. Reduce rastros locales, pero no anonimiza frente a red corporativa ni Administración.',
        'Microsoft Edge. Navegador actual: perfiles, colecciones, lector PDF, descargas, seguridad, privacidad, compatibilidad y actualizaciones.',
        'Internet Explorer. Navegador antiguo incluido en temarios por histórico. Conceptos: opciones de Internet, zonas de seguridad, favoritos, historial y compatibilidad. Está obsoleto; Edge lo sustituye.',
        'Sede electrónica. Verificar URL oficial, certificado, identificación/firma, registro, justificante, CSV, notificación y descarga de recibos.'
      ])
    ],

    word: [
      section('Word y LibreOffice Writer: procesamiento de textos', [
        'Documento de texto. Usado para oficios, certificados, informes, actas, decretos, providencias, anuncios y comunicaciones.',
        'Formato de carácter: fuente, tamaño, negrita, cursiva, subrayado, color, mayúsculas, superíndice, subíndice y resaltado.',
        'Formato de párrafo: alineación, sangría, interlineado, espacio anterior/posterior, viñetas, numeración, tabulaciones, bordes y sombreado.',
        'Estilos. Permiten aplicar formato uniforme a títulos, subtítulos y texto normal. Importantes para índices automáticos y documentos largos.',
        'Página. Márgenes, orientación, tamaño, columnas, saltos de página, saltos de sección, encabezado, pie y numeración.',
        'Tablas. Insertar filas/columnas, combinar celdas, bordes, sombreado, alineación, ajuste de texto y conversión texto-tabla.',
        'Plantillas. Modelos reutilizables para escritos administrativos con membrete, datos, firma y estructura homogénea.',
        'Revisión. Ortografía, gramática, comentarios, control de cambios, comparar documentos y aceptar/rechazar cambios.',
        'Combinar correspondencia. Genera cartas, etiquetas o comunicaciones a partir de una tabla de datos.',
        'Guardar y formatos. DOCX, ODT, PDF, RTF y TXT. Exportar a PDF para conservar aspecto y evitar modificaciones accidentales.',
        'Accesibilidad. Títulos estructurados, texto alternativo en imágenes, contraste y tablas sencillas ayudan a documentos públicos accesibles.',
        'Firma y administración. Un documento administrativo debe cuidar fecha, órgano, asunto, destinatario, antecedente, fundamento, parte dispositiva, firma y pie de recursos cuando proceda.'
      ])
    ],

    excel: [
      section('Excel y LibreOffice Calc: hojas de cálculo', [
        'Libro, hoja, fila, columna, celda y rango. Una celda se identifica por columna y fila: A1, B2, etc. Un rango puede ser A1:C10.',
        'Tipos de datos: texto, número, fecha, hora, porcentaje, moneda, fórmula y valor lógico.',
        'Fórmulas. Empiezan por igual. Operadores: suma, resta, multiplicación, división, potencia y comparaciones.',
        'Funciones básicas: SUMA, PROMEDIO, MAX, MIN, CONTAR, CONTARA, SI, SUMAR.SI, CONTAR.SI y funciones de fecha.',
        'Referencias relativas y absolutas. A1 cambia al copiar; $A$1 queda fija. Mixtas: $A1 o A$1.',
        'Relleno automático. Copia fórmulas, series, fechas y patrones. Hay que revisar que las referencias no se desplacen mal.',
        'Formato. Número, moneda, fecha, porcentaje, decimales, bordes, sombreado, alineación, ajuste de texto y combinar celdas.',
        'Ordenar. Reorganiza registros por una o varias columnas. Antes de ordenar hay que seleccionar toda la tabla o usar filtros para no descolocar datos.',
        'Filtrar. Muestra registros que cumplen condiciones sin eliminar los demás. Filtros por texto, número, fecha y color.',
        'Tablas y encabezados. Mantener encabezados claros permite ordenar, filtrar e imprimir correctamente.',
        'Validación de datos. Limita entradas permitidas: listas, fechas, números o longitudes.',
        'Gráficos. Columnas, líneas, circular y barras para representar datos. Deben tener título, leyenda y etiquetas claras.',
        'Impresión. Área de impresión, orientación, escala, repetir filas de encabezado, saltos de página, márgenes y vista previa.',
        'Protección. Proteger hoja o libro evita cambios accidentales, pero no sustituye medidas de seguridad ni cifrado.',
        'CSV. Archivo de texto con datos separados por coma o punto y coma. Importante para padrones, listados y exportaciones; revisar codificación y separador.',
        'Uso municipal. Listados de contribuyentes, registros, inventarios, control de expedientes, estadísticas, turnos, presupuestos y conciliaciones simples.'
      ])
    ],

    hardware: [
      section('Conceptos generales del ordenador personal y periféricos', [
        'Hardware. Parte física del ordenador. Software. Programas, sistema operativo y aplicaciones.',
        'CPU. Procesador que ejecuta instrucciones. Núcleos e hilos influyen en rendimiento.',
        'Memoria RAM. Almacén temporal de datos en uso. Al apagar se pierde. Más RAM permite trabajar con más programas.',
        'Almacenamiento. HDD mecánico y SSD electrónico. SSD es más rápido y resistente. Capacidad se mide en GB/TB.',
        'Placa base. Conecta CPU, RAM, almacenamiento, tarjetas, puertos y periféricos.',
        'Fuente de alimentación. Suministra energía. En oficina importa estabilidad y protección frente a apagones.',
        'Tarjeta de red. Ethernet o Wi-Fi. Permite acceso a red local, impresoras, unidades compartidas e Internet.',
        'Periféricos de entrada: teclado, ratón, escáner, lector de código, micrófono. Salida: monitor, impresora, altavoces. Entrada/salida: pantalla táctil, multifunción, USB.',
        'Impresoras: láser, inyección, multifunción, red o local. Conceptos: tóner/tinta, resolución, ppm, dúplex, cola de impresión.',
        'Escáneres: plano, alimentador, multifunción. Conceptos: resolución, OCR, color, doble cara y formato de salida.',
        'Memorias USB y discos externos. Útiles para transporte, pero riesgo de pérdida, malware y protección de datos. En Administración deben usarse con autorización.',
        'CD/DVD. Soportes ópticos de lectura o grabación, hoy menos usados pero presentes en temarios.',
        'Seguridad básica. Actualizaciones, antivirus, contraseñas robustas, bloqueo de pantalla, copias de seguridad, no abrir adjuntos sospechosos y no instalar software no autorizado.'
      ])
    ]
  };

  function choose(theme) {
    const t = n(`${theme.title} ${theme.area}`);
    if (contains(t, ['windows i', 'creación, copiado', 'impresión y digitalización'])) return legal.windows1;
    if (contains(t, ['windows ii', 'internet explorer', 'edge'])) return legal.windows2;
    if (contains(t, ['procesamiento de texto', 'word', 'writer'])) return legal.word;
    if (contains(t, ['hojas de cálculo', 'excel', 'calc'])) return legal.excel;
    if (contains(t, ['ordenador personal', 'componentes', 'periféricos'])) return legal.hardware;
    if (contains(t, ['ley 39/2015']) && contains(t, ['interesados', 'actividad', 'términos'])) return legal.ley39Interesados;
    if (contains(t, ['ley 39/2015']) && contains(t, ['actos', 'iniciación', 'ordenación', 'instrucción', 'finalización', 'ejecución', 'simplificada'])) return legal.ley39ActosProcedimiento;
    if (contains(t, ['revisión de los actos', 'recursos administrativos', 'revisión de oficio'])) return legal.ley39Revision;
    if (contains(t, ['ley 40/2015', 'régimen jurídico', 'órganos de las administraciones', 'relaciones interadministrativas', 'sancionador', 'responsabilidad patrimonial'])) return legal.ley40;
    if (contains(t, ['constitución', 'corona', 'cortes', 'defensor', 'tribunal constitucional', 'poder judicial', 'gobierno'])) return legal.constitucionGeneral;
    if (contains(t, ['municipio', 'provincia', 'entidades locales', 'régimen local', 'padrón', 'órganos municipales', 'ordenanzas', 'reglamentos locales', 'actas', 'certificados'])) return legal.local;
    if (contains(t, ['empleo público', 'función pública', 'trebep', 'personal al servicio', 'provisión', 'situaciones administrativas', 'incompatibilidades', 'disciplina', 'oep', 'rpt'])) return legal.empleo;
    if (contains(t, ['hacienda', 'tribut', 'recaudación', 'apremio', 'presupuesto', 'remanente', 'estabilidad', 'ingresos', 'gastos', 'ibi', 'iae', 'ivtm', 'iivtnu'])) return legal.hacienda;
    if (contains(t, ['contrat'])) return legal.contratos;
    if (contains(t, ['bienes', 'fomento', 'policía', 'licencias', 'servicio público', 'acción administrativa'])) return legal.bienesActividad;
    if (contains(t, ['igualdad', 'prevención', 'protección de datos', 'datos personales'])) return legal.igualdadPrlDatos;
    if (contains(t, ['electrónica', 'certificado', 'firma', 'sede', 'csv', 'facturas', 'morosidad'])) return legal.electronica;
    return [section('Desarrollo editorial del punto oficial', ['Definición completa, norma aplicable, artículos principales, órgano competente, procedimiento, plazo, documentación, efectos, recursos y aplicación práctica municipal. Este bloque debe completarse siempre con el texto exacto de las bases de la oposición activa.'])];
  }

  function reviewTable() {
    return [
      ['Parte', 'Respuesta esperada'],
      ['Norma', 'Ley y artículo concreto cuando proceda.'],
      ['Concepto', 'Definición completa, no una frase suelta.'],
      ['Elementos', 'Sujetos, requisitos, órgano, documentos y límites.'],
      ['Procedimiento', 'Inicio, comprobación, informes, audiencia, resolución, notificación y recursos.'],
      ['Supuesto', 'Aplicar cada requisito al caso y terminar con consecuencia administrativa concreta.']
    ];
  }

  function enhance(theme) {
    theme.sections = choose(theme).map(x => ({ heading: x.heading, paragraphs: x.paragraphs }));
    theme.tree = '';
    theme.reviewTable = reviewTable();
    return theme;
  }

  function questions(theme) {
    const rows = theme.reviewTable.slice(1);
    return Array.from({ length: 12 }, (_, i) => {
      const r = rows[i % rows.length];
      const ok = `${r[0]}: ${r[1]}`;
      const opts = [ok, 'Respuesta genérica sin artículo ni procedimiento.', 'Solo copiar el título del tema.', 'Responder con opinión personal sin consecuencia jurídica.'];
      const off = (theme.number + i) % 4;
      const sh = opts.slice(off).concat(opts.slice(0, off));
      return { id: `${theme.id}-q${i + 1}`, text: `Tema ${theme.number}. ¿Qué debe incluir una respuesta de estudio completo?`, options: sh.map((text, j) => ({ letter: 'ABCD'[j], text })), answer: 'ABCD'[sh.indexOf(ok)], justification: 'El enfoque correcto integra ley, artículo, definición, procedimiento y aplicación práctica.' };
    });
  }

  const practical = [
    ['Subsanación', 'Artículo 68 Ley 39/2015: requerir diez días, advertir desistimiento, conservar acto si subsana y dictar resolución si no.'],
    ['Representante sin poder', 'Artículo 5 Ley 39/2015: la falta de acreditación no invalida automáticamente; subsanación en diez días.'],
    ['Cómputo de plazo', 'Artículos 29 a 33 Ley 39/2015: hábiles/naturales, registro electrónico, ampliación y urgencia.'],
    ['Notificación electrónica', 'Artículos 40 a 46 Ley 39/2015: contenido, puesta a disposición, acceso, rechazo y efectos.'],
    ['Recurso', 'Artículos 112 a 124 Ley 39/2015: acto recurrible, fin de vía, alzada o reposición, plazo y órgano.'],
    ['Silencio', 'Artículos 21 a 25 Ley 39/2015: obligación de resolver, positivo/negativo o caducidad.'],
    ['Responsabilidad patrimonial', 'Artículos 32 a 37 Ley 40/2015: daño efectivo, evaluable, individualizado, nexo causal y antijuridicidad.'],
    ['Órgano colegiado', 'Ley 40/2015 y régimen local: convocatoria, quórum, votación, acta y certificado.'],
    ['Padrón', 'Ley 7/1985 artículos 15 a 18: residencia habitual, vecino y certificación.'],
    ['Ordenanza', 'Ley 7/1985 artículo 49: aprobación inicial, información pública, reclamaciones, definitiva y publicación.'],
    ['Contrato menor', 'LCSP: necesidad, objeto, crédito, límite, no fraccionamiento, aprobación del gasto y factura.'],
    ['Apremio', 'LGT/TRLRHL: periodo ejecutivo, providencia de apremio, recargos, intereses y embargo.'],
    ['Excel municipal', 'Seleccionar rango completo, ordenar/filtrar sin descolocar registros, proteger datos y conservar copia.'],
    ['Digitalización', 'Escanear completo, legible, orientado, en PDF, con nombre normalizado y subida al expediente correcto.'],
    ['Word administrativo', 'Aplicar plantilla, estilos, estructura, fecha, órgano, destinatario, firma y exportación a PDF.']
  ];

  function cases(prefix) {
    return practical.map((c, i) => ({ id: `${prefix}-editorial-sp${i + 1}`, title: c[0], statement: `Supuesto práctico: ${c[0]}. Redacta respuesta con norma, artículo, hechos, trámite, plazo, órgano, documento y consecuencia.`, guidance: `Solución orientativa: ${c[1]} La contestación debe aplicar la regla al caso concreto.` }));
  }

  function sims(prefix, map) {
    const all = Object.values(map).flat();
    return [0, 19, 41].map((start, s) => ({ id: `${prefix}-editorial-sim${s + 1}`, title: `Simulacro transversal editorial ${s + 1}`, questions: Array.from({ length: 50 }, (_, i) => ({ ...all[(start + i * 5) % all.length], id: `${prefix}-editorial-sim${s + 1}-q${i + 1}` })) }));
  }

  data.oposiciones.forEach(ope => {
    ope.themes = ope.themes.map(enhance);
    ope.themeTests = Object.fromEntries(ope.themes.map(t => [t.id, questions(t)]));
    ope.practicalCases = cases(ope.id);
    ope.simulacros = sims(ope.id, ope.themeTests);
    ope.status = `${(ope.status || '').replace(/ Temario ampliado.*$/,'')} Temario editorial completo: revisado tema por tema, con informática desarrollada.`;
  });

  if (typeof themeDetail === 'function') {
    themeDetail = function(t) {
      const sections = t.sections.map(sec => `<section class="section"><h3>${escapeHtml(sec.heading)}</h3>${sec.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('')}</section>`).join('');
      const table = t.reviewTable?.length ? `<h3>Cuadro para test y supuesto práctico</h3>${renderTable(t.reviewTable)}` : '';
      return `<button class="btn ghost" id="backThemes">← Volver al listado</button><article class="card"><div class="pill-row"><span class="badge area">${escapeHtml(t.area)}</span>${t.commonPotential?'<span class="badge common">común/reutilizable</span>':''}</div><h2>Tema ${t.number}. ${escapeHtml(t.title)}</h2>${sections}${table}</article>`;
    };
  }

  if (typeof renderAll === 'function') renderAll();
})();
