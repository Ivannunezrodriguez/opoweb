(() => {
  const data = window.OPOSICIONES_DATA;
  if (!data?.oposiciones?.length) return;

  const s = (heading, paragraphs) => ({ heading, paragraphs });
  const norm = value => String(value || '').toLowerCase();
  const has = (text, words) => words.some(w => text.includes(w));

  const blocks = {
    constitucion: [
      s('Título Preliminar: artículos 1 a 9 CE', [
        'Artículo 1. Define España como Estado social y democrático de Derecho. Valores superiores: libertad, justicia, igualdad y pluralismo político. La soberanía nacional reside en el pueblo español y la forma política del Estado es la Monarquía parlamentaria.',
        'Artículo 2. Afirma la indisoluble unidad de la Nación española y reconoce y garantiza el derecho a la autonomía de nacionalidades y regiones y la solidaridad entre todas ellas.',
        'Artículo 3. El castellano es la lengua española oficial del Estado. Las demás lenguas españolas serán también oficiales en sus Comunidades Autónomas conforme a sus Estatutos. La riqueza lingüística es patrimonio cultural objeto de especial respeto y protección.',
        'Artículo 4. Regula la bandera de España y permite que los Estatutos reconozcan banderas y enseñas propias de las Comunidades Autónomas.',
        'Artículo 5. La capital del Estado es la villa de Madrid.',
        'Artículo 6. Los partidos políticos expresan el pluralismo político, concurren a la formación y manifestación de la voluntad popular y son instrumento fundamental de participación política. Su estructura interna y funcionamiento deben ser democráticos.',
        'Artículo 7. Sindicatos y asociaciones empresariales contribuyen a la defensa y promoción de intereses económicos y sociales. Su creación y ejercicio son libres dentro del respeto a la Constitución y la ley.',
        'Artículo 8. Las Fuerzas Armadas garantizan la soberanía e independencia de España, defienden su integridad territorial y el ordenamiento constitucional.',
        'Artículo 9. Ciudadanos y poderes públicos están sujetos a la Constitución y al resto del ordenamiento jurídico. El 9.2 impone promover libertad e igualdad reales y participación. El 9.3 contiene principios clave: legalidad, jerarquía normativa, publicidad normativa, irretroactividad sancionadora no favorable, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad.'
      ]),
      s('Derechos y deberes: artículos 10 a 55 CE', [
        'Artículo 10. La dignidad de la persona, los derechos inviolables, el libre desarrollo de la personalidad y el respeto a la ley y a los derechos de los demás fundamentan el orden político y la paz social.',
        'Artículos 11 a 13. Nacionalidad, mayoría de edad a los dieciocho años y derechos de extranjería. El artículo 13 conecta con derechos políticos de extranjeros en términos de tratados y ley.',
        'Artículo 14. Igualdad ante la ley y prohibición de discriminación por nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social.',
        'Artículos 15 a 29. Derechos fundamentales y libertades públicas: vida e integridad, libertad ideológica y religiosa, libertad y seguridad, honor e intimidad, residencia y circulación, expresión e información, reunión, asociación, participación política, tutela judicial efectiva, legalidad penal, educación, sindicación, huelga y petición.',
        'Artículos 30 a 38. Derechos y deberes de los ciudadanos: defensa de España, objeción de conciencia, sistema tributario justo, matrimonio, propiedad privada y herencia, fundación, trabajo, negociación colectiva, conflicto colectivo y libertad de empresa.',
        'Artículos 39 a 52. Principios rectores de la política social y económica: familia, Seguridad Social, salud, cultura, medio ambiente, vivienda, juventud, discapacidad, tercera edad y consumidores. Informan legislación y actuación pública, pero su exigibilidad depende de la ley que los desarrolle.',
        'Artículo 53. Garantías. Los derechos del Capítulo II vinculan a todos los poderes públicos. Los de la Sección 1.ª y el artículo 14 tienen procedimiento preferente y sumario y recurso de amparo. Los principios rectores solo pueden alegarse según sus leyes de desarrollo.',
        'Artículo 54. Defensor del Pueblo. Alto comisionado de las Cortes Generales para defender derechos del Título I y supervisar actividad administrativa.',
        'Artículo 55. Suspensión de derechos. Regula suspensión en estados de excepción y sitio y suspensión individual en investigaciones sobre bandas armadas o terrorismo, con límites y control.'
      ]),
      s('Órganos constitucionales y reforma', [
        'Corona: artículos 56 a 65. El Rey es Jefe del Estado, símbolo de unidad y permanencia; arbitra y modera el funcionamiento regular de las instituciones y ejerce funciones tasadas con refrendo cuando procede.',
        'Cortes Generales: artículos 66 a 96. Representan al pueblo español, ejercen potestad legislativa, aprueban Presupuestos Generales, controlan al Gobierno y se componen de Congreso y Senado.',
        'Gobierno y Administración: artículos 97 a 107. El Gobierno dirige política interior y exterior, Administración civil y militar y defensa del Estado; ejerce función ejecutiva y potestad reglamentaria.',
        'Poder Judicial: artículos 117 a 127. Justicia emana del pueblo y se administra por jueces y magistrados independientes, inamovibles, responsables y sometidos al imperio de la ley.',
        'Tribunal Constitucional: artículos 159 a 165. Intérprete supremo de la Constitución. Conoce recurso de inconstitucionalidad, amparo, conflictos de competencia y demás materias legales.',
        'Reforma constitucional: artículos 166 a 169. Procedimiento ordinario del artículo 167 y agravado del artículo 168 para revisión total o materias especialmente protegidas: Título Preliminar, Sección 1.ª del Capítulo II del Título I y Título II.'
      ])
    ],

    ley39: [
      s('Disposiciones generales: artículos 1 y 2', [
        'Artículo 1. Regula requisitos de validez y eficacia de los actos administrativos, procedimiento administrativo común de las Administraciones Públicas, procedimiento sancionador y responsabilidad patrimonial en su dimensión procedimental, y principios de iniciativa legislativa y potestad reglamentaria.',
        'Artículo 2. Se aplica al sector público: Administración General del Estado, Comunidades Autónomas, Entidades Locales y sector público institucional. Para un Ayuntamiento, la Ley 39/2015 es la norma procedimental básica.'
      ]),
      s('Interesados y representación: artículos 3 a 8', [
        'Artículo 3. Capacidad de obrar. Actúan ante la Administración personas físicas o jurídicas con capacidad civil, menores cuando el ordenamiento les permita defender derechos sin asistencia, y grupos de afectados, entidades sin personalidad o patrimonios autónomos cuando una ley lo declare expresamente.',
        'Artículo 4. Interesado. Lo son quienes promueven el procedimiento como titulares de derechos o intereses legítimos, quienes puedan ver afectados sus derechos aunque no lo hayan iniciado, y quienes tengan intereses legítimos afectados y comparezcan antes de resolución definitiva.',
        'Artículo 5. Representación. Puede actuarse mediante representante. Se acredita para solicitudes, declaraciones responsables, comunicaciones, recursos, desistimiento y renuncia. En actos de mero trámite se presume. Falta de poder: subsanación de diez días, sin destruir automáticamente el acto realizado.',
        'Artículo 6. Registros electrónicos de apoderamientos. Deben existir registros generales de apoderamientos interoperables. Tipos: poder general ante cualquier Administración, poder ante una Administración concreta y poder para trámites determinados. Validez máxima ordinaria: cinco años, prorrogable o revocable.',
        'Artículo 7. Pluralidad de interesados. Si hay varios, las actuaciones se siguen con el representante o interesado designado; si no hay designación, con quien figure primero.',
        'Artículo 8. Nuevos interesados. Si durante la instrucción aparecen titulares de derechos o intereses legítimos y directos que puedan resultar afectados, debe comunicárseles la tramitación.'
      ]),
      s('Identificación, firma y asistencia electrónica: artículos 9 a 12', [
        'Artículo 9. Identificación. Los interesados pueden identificarse electrónicamente mediante sistemas admitidos, como certificados electrónicos, sello electrónico o sistemas de clave concertada.',
        'Artículo 10. Firma. La firma acredita voluntad y consentimiento. Hay que distinguir identificación, que dice quién actúa, y firma, que vincula a la persona con el contenido del documento.',
        'Artículo 11. Uso de firma. La Administración solo exige firma para actuaciones relevantes: solicitudes, declaraciones responsables, comunicaciones, recursos, desistimientos, renuncias y demás supuestos legales.',
        'Artículo 12. Asistencia. Las Administraciones deben asistir a quienes no estén obligados o tengan dificultades para usar medios electrónicos, especialmente en identificación y firma.'
      ]),
      s('Actividad administrativa y plazos: artículos 13 a 33', [
        'Artículo 13. Derechos de las personas: relación electrónica, asistencia, lenguas oficiales, acceso a información pública, trato respetuoso, responsabilidades y orientación sobre requisitos.',
        'Artículo 14. Relación electrónica: personas físicas eligen canal salvo obligación. Personas jurídicas, entidades sin personalidad, profesionales colegiados, representantes de obligados electrónicos y empleados públicos están obligados electrónicamente en los términos legales.',
        'Artículo 16. Registro electrónico: asiento con número, fecha y hora, identificación, órgano destinatario y contenido. Debe emitir recibo. Presentación también en Correos, oficinas consulares, oficinas de asistencia y demás registros válidos.',
        'Artículos 17 a 20. Archivo electrónico, colaboración, comparecencia obligatoria solo con ley y responsabilidad de unidades tramitadoras.',
        'Artículo 21. Obligación de resolver expresamente y notificar. Si la norma no fija plazo máximo, será de tres meses.',
        'Artículos 22 y 23. Suspensión y ampliación del plazo máximo para resolver. No confundir suspensión por causa legal con ampliación excepcional motivada.',
        'Artículos 24 y 25. Silencio. A solicitud del interesado, regla general positiva con excepciones. De oficio: desestimatorio si reconoce derechos favorables y caducidad si es desfavorable o sancionador.',
        'Artículos 26 a 28. Documentos administrativos, copias auténticas y derecho a no aportar documentos ya en poder de la Administración.',
        'Artículos 29 a 33. Plazos: días hábiles salvo ley o Derecho de la Unión; sábados, domingos y festivos inhábiles; meses de fecha a fecha; registro electrónico 24 horas; ampliación antes del vencimiento; urgencia reduce plazos a la mitad salvo solicitudes y recursos.'
      ]),
      s('Actos administrativos: artículos 34 a 52', [
        'Artículo 34. Los actos administrativos se producen por órgano competente y ajustándose al procedimiento establecido.',
        'Artículo 35. Motivación. Deben motivarse actos que limiten derechos, resuelvan recursos, se separen de criterios previos, adopten medidas provisionales, acuerden urgencia o ampliación, ejerzan potestades discrecionales y demás supuestos legales.',
        'Artículo 36. Forma. Los actos administrativos se producen por escrito a través de medios electrónicos salvo naturaleza distinta.',
        'Artículos 37 a 39. Inderogabilidad singular, ejecutividad y efectos. Los actos son ejecutivos y producen efectos desde la fecha en que se dicten salvo previsión de eficacia demorada.',
        'Artículos 40 a 46. Notificación y publicación. La notificación debe contener texto íntegro, recursos, órgano y plazo. Medios electrónicos cuando proceda. Rechazo y comparecencia electrónica tienen efectos legales.',
        'Artículos 47 a 52. Nulidad, anulabilidad, límites, conversión, conservación y convalidación. Nulidad para vicios graves tasados; anulabilidad como regla general; convalidación si el vicio es subsanable.'
      ]),
      s('Procedimiento común: artículos 53 a 105', [
        'Artículo 53. Derechos del interesado dentro del procedimiento: conocer estado, silencio, órgano, instructor, acceso, copias, alegaciones y no aportar documentos ya existentes.',
        'Artículos 54 a 69. Iniciación. De oficio o a solicitud. De oficio por propia iniciativa, orden superior, petición razonada o denuncia. Solicitud con identificación, hechos, petición, firma, órgano y medio de notificación. Subsanación: diez días.',
        'Artículos 70 a 74. Ordenación. Expediente electrónico, impulso de oficio, concentración de trámites y cumplimiento de trámites normalmente en diez días.',
        'Artículos 75 a 83. Instrucción. Alegaciones, prueba, informes, audiencia e información pública. La audiencia se ubica antes de propuesta de resolución salvo excepciones.',
        'Artículos 84 a 96. Finalización. Resolución, desistimiento, renuncia, caducidad, imposibilidad material y terminación convencional. Resolución congruente, motivada cuando proceda y con recursos.',
        'Artículos 97 a 105. Ejecución. Título previo, ejecutoriedad y ejecución forzosa: apremio patrimonial, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas.'
      ]),
      s('Revisión y recursos: artículos 106 a 126', [
        'Artículos 106 a 111. Revisión de oficio. Nulidad de pleno derecho, lesividad para actos favorables anulables, suspensión, revocación de actos desfavorables y rectificación de errores materiales.',
        'Artículos 112 a 120. Recursos administrativos. Recurribles resoluciones y actos de trámite cualificados. Deben constar recurrente, acto, motivo, lugar, fecha, firma y órgano. Posible inadmisión por causas tasadas.',
        'Artículos 121 y 122. Alzada. Contra actos que no ponen fin a la vía administrativa. Plazo de interposición: un mes si acto expreso. Resolución: tres meses.',
        'Artículos 123 y 124. Reposición. Contra actos que ponen fin a la vía administrativa. Potestativo. Plazo: un mes si acto expreso. Resolución: un mes.',
        'Artículos 125 y 126. Extraordinario de revisión. Solo contra actos firmes por causas tasadas: error de hecho, documentos esenciales, falsedad declarada o conducta punible declarada judicialmente.'
      ])
    ],

    ley40: [
      s('Principios, órganos y competencia: artículos 3 a 14', [
        'Artículo 3. Principios de actuación: servicio efectivo a la ciudadanía, simplicidad, claridad, proximidad, participación, objetividad, transparencia, racionalización, eficacia, economía, suficiencia, eficiencia, cooperación y coordinación.',
        'Artículos 5 a 7. Órganos administrativos, instrucciones y órganos consultivos. Un órgano existe cuando tiene funciones con efectos frente a terceros o actuación preceptiva.',
        'Artículo 8. Competencia. Es irrenunciable y se ejerce por el órgano que la tenga atribuida, salvo delegación o avocación legalmente procedente.',
        'Artículo 9. Delegación de competencias. Traslada el ejercicio de una competencia, pero no la titularidad. Debe publicarse cuando proceda y la resolución indica que se dicta por delegación.',
        'Artículo 10. Avocación. El órgano superior asume para sí el conocimiento de un asunto cuya resolución corresponda ordinariamente a órgano dependiente.',
        'Artículo 11. Encomienda de gestión. Encargo de actividades materiales o técnicas, sin cesión de titularidad ni de elementos sustantivos de la competencia.',
        'Artículo 12. Delegación de firma. Solo afecta a la firma, no altera competencia. La resolución se considera dictada por el órgano delegante.',
        'Artículo 13. Suplencia. Sustitución temporal de titulares de órganos en casos de vacante, ausencia o enfermedad.',
        'Artículo 14. Decisiones sobre competencia. El órgano que se estime incompetente remite actuaciones al competente.'
      ]),
      s('Órganos colegiados, abstención y recusación', [
        'Artículos 15 a 18. Órganos colegiados. Regulan convocatoria, sesiones, constitución, deliberación, acuerdos y actas. En supuesto local, conecta con Pleno, Junta de Gobierno y comisiones.',
        'Artículo 23. Abstención. Debe abstenerse quien tenga interés personal, vínculo matrimonial o parentesco, amistad íntima o enemistad manifiesta, intervención como perito o testigo, o relación de servicio con interesado.',
        'Artículo 24. Recusación. El interesado puede promover recusación por las mismas causas. La tramitación de la recusación puede condicionar el procedimiento.'
      ]),
      s('Potestad sancionadora y responsabilidad patrimonial', [
        'Artículos 25 a 31. Principios sancionadores: legalidad, irretroactividad, tipicidad, responsabilidad, proporcionalidad, prescripción y concurrencia de sanciones.',
        'Artículos 32 a 37. Responsabilidad patrimonial. Requisitos: daño efectivo, evaluable económicamente, individualizado, relación causal con funcionamiento del servicio público, antijuridicidad y ausencia de fuerza mayor. Incluye responsabilidad de autoridades y personal cuando proceda.'
      ]),
      s('Funcionamiento electrónico y convenios', [
        'Artículos 38 a 46. Sede electrónica, portal de internet, sistemas de identificación administrativa, actuación automatizada, firma electrónica del personal, intercambio electrónico y CSV.',
        'Artículos 47 a 53. Convenios. Acuerdos con efectos jurídicos entre Administraciones o entidades públicas/privadas para fines comunes, con contenido mínimo, duración, extinción y control.'
      ])
    ],

    regimenLocal: [
      s('Municipio, población y padrón', [
        'Ley 7/1985, artículo 1. Municipios, provincias e islas son entidades locales territoriales. El municipio es cauce inmediato de participación ciudadana.',
        'Artículo 4. Potestades locales: reglamentaria y autoorganizativa, tributaria y financiera, programación, expropiatoria, investigación y recuperación de oficio de bienes, ejecución forzosa y sancionadora dentro de la ley.',
        'Artículo 11. Elementos del municipio: territorio, población y organización.',
        'Artículos 15 a 18. Población y padrón municipal. El padrón acredita residencia y domicilio habitual; la condición de vecino deriva de la inscripción padronal.'
      ]),
      s('Organización municipal y funcionamiento', [
        'Artículos 20 a 24. Organización: Alcalde, Tenientes de Alcalde, Pleno y Junta de Gobierno Local cuando proceda. Pueden existir órganos complementarios.',
        'Artículo 21. Competencias del Alcalde: dirigir gobierno y administración municipal, representar al Ayuntamiento, convocar y presidir sesiones, dictar bandos, jefatura de personal y demás atribuciones legales.',
        'Artículo 22. Competencias del Pleno: control y fiscalización, ordenanzas, reglamentos, presupuestos, plantilla, planes, alteración del término, aprobación de formas de gestión y otras decisiones principales.',
        'Artículo 23. Junta de Gobierno Local: asistencia al Alcalde y atribuciones delegadas o legalmente conferidas.',
        'Artículo 46. Sesiones de órganos colegiados locales: convocatoria, orden del día, quórum, votaciones, publicidad y actas conforme a la normativa de régimen local.'
      ]),
      s('Competencias, provincia y potestad normativa', [
        'Artículos 25 a 27. Competencias municipales propias, delegadas y distintas de propias/delegadas. En supuesto hay que comprobar materia, título competencial y órgano.',
        'Artículo 26. Servicios mínimos municipales según población: alumbrado, cementerio, residuos, limpieza viaria, abastecimiento, alcantarillado, acceso a núcleos y pavimentación, con ampliaciones por tramos de población.',
        'Artículos 31 a 37. Provincia y Diputación. La provincia agrupa municipios y presta cooperación, asistencia y coordinación, especialmente a municipios de menor capacidad.',
        'Artículos 49 y 70. Ordenanzas y reglamentos locales: aprobación inicial, información pública y audiencia, resolución de reclamaciones, aprobación definitiva y publicación.'
      ])
    ],

    empleo: [
      s('Clases de personal y acceso', [
        'TREBEP, artículo 8. Empleados públicos: funcionarios de carrera, funcionarios interinos, personal laboral y personal eventual.',
        'Artículos 9 a 12. Funcionario de carrera para funciones permanentes, interino por razones justificadas de necesidad y urgencia, laboral por contrato de trabajo y eventual para confianza o asesoramiento especial.',
        'Artículos 55 a 62. Acceso al empleo público bajo igualdad, mérito, capacidad, publicidad, transparencia, imparcialidad, profesionalidad de órganos selectivos, independencia y adecuación de pruebas a funciones.',
        'Oferta de empleo público. Instrumento que incluye necesidades de recursos humanos con asignación presupuestaria que deben cubrirse mediante incorporación de nuevo personal. No es lo mismo que convocatoria concreta.'
      ]),
      s('Derechos, deberes, carrera y provisión', [
        'Artículos 14 y 15. Derechos individuales y colectivos: carrera profesional, retribuciones, formación, negociación colectiva, jornada, vacaciones, seguridad y salud, entre otros.',
        'Artículos 52 a 54. Código de conducta, principios éticos y principios de conducta: objetividad, integridad, neutralidad, responsabilidad, imparcialidad, confidencialidad, dedicación al servicio público y trato correcto.',
        'Carrera profesional y promoción interna. Progresión profesional dentro de la Administración mediante carrera horizontal, vertical y promoción conforme a requisitos y procesos.',
        'Provisión de puestos. Concurso y libre designación cubren puestos por empleados ya incorporados. No debe confundirse con selección de nuevo ingreso.'
      ]),
      s('Situaciones, incompatibilidades y disciplina', [
        'Situaciones administrativas: servicio activo, servicios especiales, servicio en otras Administraciones, excedencia y suspensión de funciones.',
        'Incompatibilidades. El empleado público no puede desempeñar actividades públicas o privadas incompatibles con imparcialidad, dedicación o intereses del puesto.',
        'Régimen disciplinario. Faltas, sanciones, prescripción, procedimiento con audiencia y proporcionalidad.'
      ])
    ],

    hacienda: [
      s('Recursos, ingresos y tributos locales', [
        'TRLRHL, artículo 2. Recursos de la Hacienda Local: ingresos patrimoniales, tributos propios, participaciones en tributos, subvenciones, precios públicos, operaciones de crédito, multas y demás prestaciones de derecho público.',
        'Tributos locales: impuestos, tasas y contribuciones especiales. Tasas por utilización privativa o aprovechamiento especial del dominio público o prestación de servicios administrativos; contribuciones especiales por beneficio o aumento de valor derivado de obras o servicios.',
        'Impuestos obligatorios: IBI, IAE e IVTM. Impuestos potestativos: ICIO e IIVTNU. En cada impuesto debes estudiar naturaleza, hecho imponible, sujeto pasivo, devengo, gestión y beneficios fiscales.'
      ]),
      s('Recaudación y apremio', [
        'Periodo voluntario. El obligado puede pagar dentro del plazo sin recargos ejecutivos.',
        'Periodo ejecutivo. Nace cuando termina el voluntario sin pago. La providencia de apremio inicia el procedimiento de apremio y permite exigir deuda, recargos e intereses.',
        'Aplazamiento y fraccionamiento. Permiten diferir o dividir el pago, normalmente mediante solicitud, garantías cuando proceda e intereses.',
        'Compensación y devolución de ingresos. La compensación extingue deudas cuando existen créditos reconocidos; la devolución procede por ingresos indebidos, duplicados o excesivos.'
      ]),
      s('Presupuesto local y control', [
        'Presupuesto general. Expresa obligaciones que la entidad puede reconocer y derechos que prevé liquidar. Principios: anualidad, equilibrio, especialidad, universalidad y estabilidad.',
        'Ejecución del gasto. Fases habituales: autorización, disposición, reconocimiento de obligación, ordenación del pago y pago material.',
        'Modificaciones presupuestarias. Créditos extraordinarios, suplementos, transferencias, generaciones, ampliaciones e incorporaciones según supuesto.',
        'Liquidación, remanente y resultado presupuestario. Sirven para comprobar ejecución, financiación afectada, obligaciones pendientes y situación económico-presupuestaria.'
      ])
    ],

    contratos: [
      s('Conceptos esenciales de contratación pública', [
        'LCSP, objeto. Regula contratación del sector público para garantizar libertad de acceso, publicidad, transparencia, igualdad, no discriminación, integridad y selección de la mejor oferta calidad-precio.',
        'Sector público. Incluye Administraciones Públicas, entidades del sector público y poderes adjudicadores en los términos de la Ley.',
        'Expediente de contratación. Debe justificar necesidad, idoneidad, objeto, presupuesto base, valor estimado, existencia de crédito, pliegos, procedimiento y criterios de adjudicación.',
        'Objeto y lotes. El objeto debe ser determinado y no puede fraccionarse indebidamente para eludir requisitos. La división en lotes es regla cuando sea adecuada.'
      ]),
      s('Procedimiento y contrato menor', [
        'Procedimientos. Abierto, restringido, negociado, diálogo competitivo, asociación para la innovación y procedimientos simplificados cuando proceda.',
        'Criterios de adjudicación. Deben estar vinculados al objeto, ser objetivos, publicarse y permitir seleccionar la mejor oferta.',
        'Contrato menor. Exige necesidad, aprobación del gasto, factura, límites cuantitativos y ausencia de fraccionamiento indebido. Es un punto clásico de supuesto práctico municipal.',
        'Ejecución y extinción. Cumplimiento, modificación, penalidades, resolución y recepción se rigen por pliegos y LCSP.'
      ])
    ],

    bienes: [
      s('Bienes de las entidades locales', [
        'Clases. Bienes de dominio público, comunales y patrimoniales. Los de dominio público están afectados a uso o servicio público; los patrimoniales no lo están.',
        'Régimen del dominio público. Inalienabilidad, inembargabilidad e imprescriptibilidad. Uso común general, uso común especial, uso privativo y concesiones/autorizaciones.',
        'Inventario. Las entidades locales deben formar inventario de bienes y derechos. En supuesto, ante ocupación o pérdida de bien, comprobar titularidad e inventario.',
        'Afectación y desafectación. La afectación incorpora un bien al dominio público; la desafectación lo convierte, si procede, en patrimonial.'
      ])
    ],

    actividad: [
      s('Formas de actuación administrativa local', [
        'Fomento. Actividad dirigida a incentivar conductas privadas de interés público mediante subvenciones, ayudas, premios o beneficios, con sujeción a bases, publicidad y control.',
        'Policía. Actividad de limitación o control: licencias, autorizaciones, inspección, órdenes y sanciones. Debe tener cobertura normativa y respetar proporcionalidad.',
        'Servicio público. Actividad prestacional asumida por la Administración. Puede gestionarse de forma directa o indirecta según ley.',
        'Licencias. Acto administrativo de control previo que permite una actividad si cumple normativa. En supuesto: solicitud, informes, competencia, resolución, silencio y control posterior.'
      ])
    ],

    igualdad: [
      s('Igualdad efectiva', [
        'LO 3/2007. Igualdad de trato: ausencia de discriminación directa o indirecta por razón de sexo.',
        'Discriminación directa. Trato menos favorable por razón de sexo en situación comparable.',
        'Discriminación indirecta. Criterio aparentemente neutro que ocasiona desventaja particular salvo justificación objetiva y proporcional.',
        'Acoso sexual y acoso por razón de sexo. Conductas que vulneran dignidad y crean entorno intimidatorio, degradante u ofensivo.',
        'Acciones positivas. Medidas específicas para corregir desigualdades de hecho, razonables y proporcionadas.',
        'Transversalidad. La igualdad debe integrarse en normas, políticas públicas, empleo público, contratación, subvenciones y atención ciudadana.'
      ])
    ],

    prl: [
      s('Prevención de riesgos laborales', [
        'Ley 31/1995, artículo 14. Derecho a protección eficaz en seguridad y salud; correlativo deber de protección de la Administración empleadora.',
        'Artículos 15 y 16. Principios preventivos y evaluación de riesgos. En puesto administrativo: pantallas, ergonomía, iluminación, pausas, postura, cableado y carga mental.',
        'Artículos 18 y 19. Información y formación sobre riesgos, medidas preventivas y emergencias.',
        'Artículo 22. Vigilancia de la salud en los términos legalmente previstos.',
        'Artículo 29. Obligaciones del trabajador: usar correctamente equipos, no inutilizar protecciones, informar de riesgos y cooperar.',
        'Artículos 33 a 40. Consulta y participación mediante delegados de prevención y comité de seguridad y salud cuando proceda.'
      ])
    ],

    datos: [
      s('Protección de datos personales', [
        'RGPD, artículo 4. Dato personal: información sobre persona física identificada o identificable. Tratamiento: cualquier operación sobre datos, como recogida, consulta, comunicación, conservación o supresión.',
        'RGPD, artículo 5. Principios: licitud, lealtad, transparencia, limitación de finalidad, minimización, exactitud, limitación de conservación, integridad, confidencialidad y responsabilidad proactiva.',
        'RGPD, artículo 6. Bases jurídicas: consentimiento, contrato, obligación legal, intereses vitales, misión en interés público o ejercicio de poderes públicos e interés legítimo cuando proceda.',
        'Derechos. Acceso, rectificación, supresión, oposición, limitación, portabilidad y no ser objeto de decisiones automatizadas en determinados casos.',
        'En Ayuntamiento. Cuidado con expedientes, padrón, tributos, sanciones, registro, correo electrónico, impresiones, atención telefónica y entrega de copias con datos de terceros.'
      ])
    ],

    electronica: [
      s('Administración electrónica', [
        'Identificación y firma. Identificación acredita quién actúa; firma acredita voluntad y vinculación con el contenido.',
        'Certificado electrónico. Puede ser de persona física, representante, empleado público, sello electrónico, sede electrónica u otros admitidos.',
        'Sede electrónica. Dirección electrónica disponible para ciudadanos cuya titularidad corresponde a una Administración, con garantías de identificación, seguridad y responsabilidad.',
        'CSV. Código Seguro de Verificación permite comprobar autenticidad e integridad de documentos electrónicos mediante sede o sistema de validación.',
        'Registro electrónico y notificación electrónica. Deben permitir presentación, asiento, recibo, fecha/hora y acceso a notificaciones en los términos de la Ley 39/2015.',
        'Factura electrónica y morosidad. En ámbito local importa registro contable, conformidad, plazo de pago y control presupuestario.'
      ])
    ],

    informatica: [
      s('Informática de oficina', [
        'Windows. Archivo, carpeta, ruta, extensión, copiar, cortar, pegar, mover, borrar, papelera, unidad local, unidad de red, permisos y búsqueda.',
        'Impresión. Selección de impresora, intervalo de páginas, copias, orientación, doble cara, color, cola de impresión y cancelación.',
        'Digitalización. Escanear en PDF, revisar legibilidad, orientación, páginas completas, resolución, nombre normalizado y ubicación en expediente.',
        'Navegador. URL, HTTPS, certificados, pestañas, favoritos, historial, caché, cookies, descargas y comprobación de sede oficial.',
        'Word y Writer. Estilos, formato, listas, tablas, encabezados, pies, saltos, plantillas, control de cambios, combinación de correspondencia y PDF.',
        'Excel y Calc. Libro, hoja, celda, fila, columna, rango, fórmula, función, referencia relativa, absoluta, ordenar, filtrar, gráficos y validación de datos.',
        'Hardware. CPU, RAM, SSD/HDD, placa, red, monitor, teclado, ratón, impresora, escáner, USB y dispositivos ópticos.'
      ])
    ]
  };

  function matchBlocks(theme) {
    const t = norm(`${theme.title} ${theme.area}`);
    if (has(t, ['39/2015', 'procedimiento administrativo', 'interesados', 'silencio administrativo', 'notificación', 'registro de entrada', 'recursos administrativos', 'actos administrativos'])) return blocks.ley39;
    if (has(t, ['40/2015', 'régimen jurídico', 'órganos de las administraciones', 'convenios', 'sancionador', 'responsabilidad patrimonial'])) return blocks.ley40;
    if (has(t, ['constitución', 'constitucional', 'corona', 'cortes', 'defensor', 'tribunal constitucional', 'poder judicial', 'gobierno y la administración'])) return blocks.constitucion;
    if (has(t, ['municipio', 'provincia', 'régimen local', 'entidades locales', 'órganos municipales', 'órganos colegiados', 'ordenanzas', 'reglamentos locales', 'padrón'])) return blocks.regimenLocal;
    if (has(t, ['empleo público', 'función pública', 'trebep', 'personal al servicio', 'situaciones administrativas', 'provisión', 'fhn', 'rpt'])) return blocks.empleo;
    if (has(t, ['hacienda', 'tribut', 'ibi', 'iae', 'ivtm', 'iivtnu', 'recaudación', 'apremio', 'presupuesto', 'remanente', 'estabilidad', 'regla de gasto', 'ingresos', 'gasto público'])) return blocks.hacienda;
    if (has(t, ['contrat'])) return blocks.contratos;
    if (has(t, ['bienes'])) return blocks.bienes;
    if (has(t, ['fomento', 'policía', 'licencias', 'servicio público', 'acción administrativa'])) return blocks.actividad;
    if (has(t, ['igualdad'])) return blocks.igualdad;
    if (has(t, ['prevención', 'riesgos laborales'])) return blocks.prl;
    if (has(t, ['protección de datos', 'datos personales', 'rgpd', 'lopdgdd'])) return blocks.datos;
    if (has(t, ['electrónica', 'certificado', 'firma', 'sede', 'telemáticos', 'facturas', 'csv'])) return blocks.electronica;
    if (has(t, ['windows', 'office', 'libreoffice', 'word', 'excel', 'calc', 'ordenador', 'periféricos', 'internet', 'edge', 'impresión', 'digitalización'])) return blocks.informatica;
    return [s('Desarrollo completo del punto oficial', ['Este punto debe estudiarse con definición, norma aplicable, órgano competente, requisitos, procedimiento, plazos, documento que se genera y consecuencia administrativa. Si aparece en supuesto práctico, no respondas con teoría abstracta: aplica cada requisito al hecho concreto.'])];
  }

  function tableFor(theme) {
    return [
      ['Elemento', 'Qué poner en examen'],
      ['Norma y artículo', 'Indica ley y artículo o bloque legal concreto siempre que el caso lo permita.'],
      ['Definición', 'Define la institución jurídica o herramienta de oficina con precisión.'],
      ['Requisitos', 'Enumera sujetos, presupuesto de hecho, documentos, competencia y límites.'],
      ['Procedimiento', 'Ordena los pasos: entrada, comprobación, informe, audiencia si procede, resolución, notificación y recurso.'],
      ['Consecuencia', 'Cierra con efecto jurídico: subsanación, archivo, estimación, desestimación, silencio, caducidad, sanción, apremio, nulidad, anulabilidad o recurso.']
    ];
  }

  function enhanceTheme(theme) {
    const selected = matchBlocks(theme);
    theme.sections = selected.map(x => ({ heading: x.heading, paragraphs: x.paragraphs }));
    theme.tree = '';
    theme.reviewTable = tableFor(theme);
    return theme;
  }

  function makeQuestions(theme) {
    const rows = theme.reviewTable.slice(1);
    return Array.from({ length: 12 }, (_, i) => {
      const r = rows[i % rows.length];
      const ok = `${r[0]}: ${r[1]}`;
      const opts = [ok, 'Contestar de forma genérica sin artículos ni consecuencia.', 'Copiar solo el título oficial del tema.', 'Usar una norma parecida de otra convocatoria sin comprobar el programa.'];
      const off = (theme.number + i) % 4;
      const sh = opts.slice(off).concat(opts.slice(0, off));
      return { id: `${theme.id}-q${i + 1}`, text: `Tema ${theme.number}. ¿Qué debe contener una respuesta completa?`, options: sh.map((text, j) => ({ letter: 'ABCD'[j], text })), answer: 'ABCD'[sh.indexOf(ok)], justification: 'Una respuesta de nivel de plaza debe unir norma, definición, requisitos, procedimiento y consecuencia aplicada al caso.' };
    });
  }

  function makeCases(prefix) {
    const cases = [
      ['Solicitud incompleta', 'Ley 39/2015 art. 68: requerir subsanación por diez días y advertir desistimiento con resolución si no atiende.'],
      ['Representación insuficiente', 'Ley 39/2015 art. 5: el acto puede conservarse si se acredita representación en diez días o plazo superior justificado.'],
      ['Registro fuera de horario presencial', 'Ley 39/2015 arts. 16 y 31: registro electrónico 24 horas y cómputo según día hábil o inhábil.'],
      ['Notificación rechazada', 'Ley 39/2015 arts. 40 a 46: revisar medio, contenido, intento, rechazo y efectos de notificación practicada.'],
      ['Recurso contra resolución municipal', 'Ley 39/2015 arts. 112 a 124: comprobar si pone fin a la vía administrativa para elegir alzada o reposición.'],
      ['Silencio administrativo', 'Ley 39/2015 arts. 21 a 25: plazo máximo, obligación de resolver, positivo/negativo o caducidad según inicio y materia.'],
      ['Daño por funcionamiento del servicio', 'Ley 40/2015 arts. 32 a 37: daño efectivo, evaluable, individualizado, nexo causal, antijuridicidad y ausencia de fuerza mayor.'],
      ['Abstención de miembro del tribunal', 'Ley 40/2015 arts. 23 y 24: causa de abstención o recusación y tramitación para proteger imparcialidad.'],
      ['Padrón municipal', 'Ley 7/1985 arts. 15 a 18: residencia habitual, inscripción, vecino y certificación padronal.'],
      ['Ordenanza municipal', 'Ley 7/1985 art. 49: aprobación inicial, información pública, resolución de reclamaciones, aprobación definitiva y publicación.'],
      ['Contrato menor', 'LCSP: necesidad, objeto, crédito, límite, no fraccionamiento, aprobación del gasto y factura.'],
      ['Falta de crédito', 'TRLRHL y RD 500/1990: no puede comprometerse gasto sin crédito adecuado y suficiente; valorar modificación presupuestaria.'],
      ['Recibo tributario impagado', 'LGT/TRLRHL: fin de voluntaria, inicio de ejecutiva, providencia de apremio, recargos e intereses.'],
      ['Acceso a expediente con datos de terceros', 'Ley 39/2015 art. 53 y RGPD: legitimación, finalidad, minimización, anonimización y control de acceso.'],
      ['Documento escaneado al expediente', 'Ley 39/2015 arts. 26 y 27: copia auténtica, digitalización, integridad, CSV si procede y archivo electrónico.'],
      ['Persona jurídica presenta en papel', 'Ley 39/2015 art. 14 y 68: obligado electrónico; requerir presentación electrónica y fecha válida de subsanación.'],
      ['Licencia municipal', 'Ley 7/1985 art. 84: actividad de policía, solicitud, informes, competencia, resolución y efectos del silencio según normativa sectorial.'],
      ['Bien ocupado sin título', 'Régimen de bienes locales: identificar dominio público/patrimonial, inventario, recuperación de oficio y procedimiento.'],
      ['Excel con padrón o tributos', 'Ordenar y filtrar sin alterar registros, proteger datos personales, verificar encabezados, rangos y copias de seguridad.'],
      ['Prevención en oficina', 'Ley 31/1995: evaluación de puesto, pantallas, pausas, ergonomía, información, formación y comunicación de riesgos.']
    ];
    return cases.map((c, i) => ({ id: `${prefix}-sp${i + 1}`, title: c[0], statement: `Caso práctico sobre ${c[0].toLowerCase()}. Responde con norma, artículo, órgano, trámite, plazo, documento generado y consecuencia.`, guidance: `Respuesta orientativa: ${c[1]} Después aplica la regla al hecho concreto y termina con una conclusión administrativa.` }));
  }

  function makeSimulacros(prefix, testMap) {
    const all = Object.values(testMap).flat();
    return [0, 17, 43].map((start, n) => ({ id: `${prefix}-sim${n + 1}`, title: `Simulacro transversal ${n + 1}`, questions: Array.from({ length: 50 }, (_, i) => ({ ...all[(start + i * 7) % all.length], id: `${prefix}-sim${n + 1}-q${i + 1}` })) }));
  }

  data.oposiciones.forEach(ope => {
    ope.themes = ope.themes.map(enhanceTheme);
    ope.themeTests = Object.fromEntries(ope.themes.map(t => [t.id, makeQuestions(t)]));
    ope.practicalCases = makeCases(ope.id);
    ope.simulacros = makeSimulacros(ope.id, ope.themeTests);
    ope.status = (ope.status || '').replace(' Temario ampliado con desarrollo artículo a artículo cuando procede.', '') + ' Temario ampliado por bloques completos del programa, con desarrollo artículo a artículo cuando procede.';
  });

  if (typeof themeDetail === 'function') {
    themeDetail = function(t) {
      const sections = t.sections.map(section => `<section class="section"><h3>${escapeHtml(section.heading)}</h3>${section.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('')}</section>`).join('');
      const table = t.reviewTable?.length ? `<h3>Cuadro para test y supuesto práctico</h3>${renderTable(t.reviewTable)}` : '';
      return `<button class="btn ghost" id="backThemes">← Volver al listado</button><article class="card"><div class="pill-row"><span class="badge area">${escapeHtml(t.area)}</span>${t.commonPotential ? '<span class="badge common">común/reutilizable</span>' : ''}</div><h2>Tema ${t.number}. ${escapeHtml(t.title)}</h2>${sections}${table}</article>`;
    };
  }

  if (typeof renderAll === 'function') renderAll();
})();
