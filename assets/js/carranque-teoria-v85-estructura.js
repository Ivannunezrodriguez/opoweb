(() => {
  const data = window.OPOSICIONES_DATA;
  const ope = data?.oposiciones?.find(item => item.id === 'carranque-aux-admin-2026');
  if (!ope || !window.OPOWEB_CARRANQUE_TEORIA_V85_BLOQUE1) return;

  const STRUCTURE = {
    1: {
      summary: [
        `Este tema reúne la arquitectura constitucional básica que más se pregunta en C2: estructura de la Constitución, niveles de protección de derechos, Tribunal Constitucional, Defensor del Pueblo, Cortes Generales, Gobierno, Administración, Poder Judicial y procedimientos de reforma. Debe estudiarse relacionando cada institución con su artículo y distinguiendo funciones que suelen confundirse.`,
        `La prioridad es dominar artículos 1, 9, 53 a 55, 66, 97, 103, 117, 159 a 169 y las reglas de composición, control y reforma. El contenido desarrollado permite resolver tanto preguntas literales como supuestos sencillos sobre garantías, recursos, órganos y mayorías.`
      ],
      articles: [
        ['Arts. 1-9 CE', 'Estado social y democrático de Derecho, soberanía, Monarquía parlamentaria, unidad y autonomía, partidos, sindicatos, Fuerzas Armadas y principios del ordenamiento.'],
        ['Arts. 10-55 CE', 'Derechos, deberes, garantías, tutela reforzada, amparo, Defensor del Pueblo y suspensión.'],
        ['Arts. 66-96 CE', 'Cortes Generales, elaboración de leyes y tratados internacionales.'],
        ['Arts. 97-107 CE', 'Gobierno, investidura, cese y principios de la Administración.'],
        ['Arts. 117-127 CE', 'Poder Judicial, independencia, CGPJ, Tribunal Supremo y Ministerio Fiscal.'],
        ['Arts. 159-165 CE', 'Composición, estatuto y competencias del Tribunal Constitucional.'],
        ['Arts. 166-169 CE', 'Iniciativa y procedimientos ordinario y agravado de reforma.']
      ],
      quick: [
        `Constitución: norma suprema, 169 artículos y diez títulos numerados.`,
        `Protección máxima: artículo 14, artículos 15 a 29 y objeción del artículo 30.2.`,
        `Tribunal Constitucional: 12 miembros por 9 años; no pertenece al Poder Judicial.`,
        `Reforma ordinaria: tres quintos y referéndum eventual; agravada: dos tercios, disolución y referéndum obligatorio.`
      ],
      retention: [
        `¿Qué derechos permiten acudir al recurso de amparo y qué diferencia existe con los principios rectores?`,
        `¿Cómo se nombran los doce miembros del Tribunal Constitucional y durante cuánto tiempo?`,
        `¿Cuándo se aplica el artículo 168 y qué pasos añade respecto del artículo 167?`
      ],
      strategy: [
        `En preguntas institucionales, identifica primero si se habla de Cortes, Gobierno, Poder Judicial, Tribunal Constitucional o Defensor del Pueblo. Después descarta opciones que atribuyan a un órgano funciones de otro.`,
        `En derechos fundamentales, localiza el artículo y el nivel de garantía antes de responder. En reforma, memoriza mayorías, disolución y carácter obligatorio o eventual del referéndum.`
      ]
    },
    2: {
      summary: [
        `El tema combina organización administrativa y fuentes del Derecho. La clave es distinguir eficacia, jerarquía, descentralización, desconcentración y coordinación, y comprender que la Administración está sometida a todo el ordenamiento.`,
        `Para examen deben separarse jerarquía administrativa y normativa; titularidad y ejercicio de competencia; ley y reglamento; y jerarquía y competencia entre normas estatales y autonómicas.`
      ],
      articles: [
        ['Art. 9.3 CE', 'Legalidad, jerarquía normativa, publicidad, irretroactividad sancionadora desfavorable, seguridad jurídica, responsabilidad e interdicción de arbitrariedad.'],
        ['Arts. 97, 103 y 106 CE', 'Potestad reglamentaria, principios de actuación administrativa y control judicial.'],
        ['Art. 3 Ley 40/2015', 'Principios generales de actuación y relaciones administrativas.'],
        ['Arts. 8-14 Ley 40/2015', 'Competencia, delegación, avocación, encomienda de gestión, delegación de firma, suplencia y decisiones sobre competencia.'],
        ['Arts. 1-7 Código Civil', 'Fuentes, interpretación, eficacia, entrada en vigor, derogación, fraude de ley y abuso del derecho.'],
        ['Arts. 128-133 Ley 39/2015', 'Potestad reglamentaria, buena regulación, evaluación, planificación, consulta, audiencia y publicación.']
      ],
      quick: [
        `Descentralización: otra persona jurídica; desconcentración: órganos de la misma persona jurídica.`,
        `Delegación: cambia el ejercicio, no la titularidad.`,
        `Reglamento: norma subordinada a ley; instrucción: dirección interna sin innovación normativa general.`,
        `Jurisprudencia complementa el ordenamiento; costumbre solo rige en defecto de ley y debe probarse.`
      ],
      retention: [
        `¿Qué cambia y qué no cambia cuando un órgano delega una competencia?`,
        `¿Cómo se diferencian descentralización, desconcentración y coordinación?`,
        `¿Por qué una ley autonómica no es simplemente inferior a una ley estatal?`
      ],
      strategy: [
        `Ante una pregunta sobre competencia, decide si se transfiere titularidad, ejercicio o una actividad material. Esa clasificación suele conducir directamente a la respuesta.`,
        `Ante un conflicto normativo, comprueba rango, reserva de ley, competencia material, publicación y vigencia, en ese orden.`
      ]
    },
    3: {
      summary: [
        `Este tema cubre los artículos 1 a 33 y 127 a 133 de la Ley 39/2015: ámbito, capacidad, interesados, representación, identificación y firma, derechos, relación electrónica, registros, documentos, obligación de resolver, silencio y plazos, además de iniciativa normativa.`,
        `Es un tema central para test y práctico. Debe dominarse la diferencia entre persona e interesado, los actos para los que se acredita representación, obligados electrónicos, cómputo de plazos y excepciones al silencio positivo.`
      ],
      articles: [
        ['Arts. 1-2', 'Objeto y ámbito subjetivo de la Ley 39/2015.'],
        ['Arts. 3-4', 'Capacidad de obrar y concepto de interesado.'],
        ['Arts. 5-6', 'Representación y registros electrónicos de apoderamientos.'],
        ['Arts. 9-12', 'Identificación, firma y asistencia en medios electrónicos.'],
        ['Arts. 13-14', 'Derechos generales y obligación de relación electrónica.'],
        ['Arts. 15-20', 'Lengua, registros, archivo, colaboración, comparecencia y responsabilidad de tramitación.'],
        ['Arts. 21-25', 'Obligación de resolver, suspensión, ampliación, silencio a solicitud y falta de resolución de oficio.'],
        ['Arts. 26-28', 'Documentos, copias auténticas y documentos aportados.'],
        ['Arts. 29-33', 'Obligatoriedad, cómputo, sede electrónica, ampliación y urgencia.'],
        ['Arts. 127-133', 'Iniciativa legislativa, potestad reglamentaria, buena regulación, evaluación, plan normativo y participación.']
      ],
      quick: [
        `Interesado: promotor con derecho o interés legítimo, titular de derecho afectable o titular de interés que se persona.`,
        `Representación acreditada: solicitudes, recursos, desistimiento, renuncia, declaraciones y obligaciones.`,
        `Sábados, domingos y festivos no cuentan en plazos por días hábiles.`,
        `Plazo máximo supletorio para resolver: tres meses; máximo general normativo: seis meses salvo ley o Derecho de la Unión.`,
        `Silencio estimatorio es la regla en solicitudes, pero tiene excepciones expresas.`
      ],
      retention: [
        `¿Qué sujetos están obligados a relacionarse electrónicamente según el artículo 14?`,
        `¿Cómo se computa un plazo de un mes notificado el último día de otro mes?`,
        `¿En qué materias principales el silencio a solicitud es desestimatorio?`
      ],
      strategy: [
        `En plazos, dibuja siempre fecha inicial, comienzo, días inhábiles y vencimiento. No hagas el cálculo mental sin separar notificación y comienzo.`,
        `En silencio, identifica primero si el procedimiento empezó a solicitud o de oficio y después busca la excepción concreta.`
      ]
    },
    4: {
      summary: [
        `El tema desarrolla los artículos 34 a 105 de la Ley 39/2015: acto administrativo, eficacia, notificación, invalidez y procedimiento común desde la iniciación hasta la ejecución. Es el bloque operativo más importante para resolver supuestos.`,
        `Debe estudiarse como una secuencia completa: órgano y acto; iniciación; subsanación; instrucción; audiencia; terminación; notificación; firmeza y ejecución. Cada incidencia se ubica en una fase y tiene una consecuencia distinta.`
      ],
      articles: [
        ['Arts. 34-36', 'Producción, contenido, motivación y forma del acto.'],
        ['Arts. 37-46', 'Inderogabilidad, ejecutividad, efectos, notificación y publicación.'],
        ['Arts. 47-52', 'Nulidad, anulabilidad, límites de extensión, conversión, conservación y convalidación.'],
        ['Art. 53', 'Derechos del interesado durante el procedimiento.'],
        ['Arts. 54-57', 'Clases de iniciación, actuaciones previas, medidas provisionales y acumulación.'],
        ['Arts. 58-65', 'Iniciación de oficio, denuncia, sancionador y responsabilidad patrimonial.'],
        ['Arts. 66-69', 'Solicitud, pluralidad, subsanación, declaración responsable y comunicación.'],
        ['Arts. 70-74', 'Expediente y ordenación.'],
        ['Arts. 75-83', 'Alegaciones, prueba, informes, audiencia e información pública.'],
        ['Arts. 84-95', 'Terminación, resolución, convenio, actuaciones complementarias, desistimiento, renuncia y caducidad.'],
        ['Art. 96', 'Tramitación simplificada.'],
        ['Arts. 97-105', 'Ejecutividad, ejecución forzosa y prohibición de acciones posesorias.']
      ],
      quick: [
        `Notificación: texto íntegro, fin de vía, recursos, órgano y plazo; debe cursarse en diez días.`,
        `Nulidad: causas tasadas; anulabilidad: infracción del ordenamiento como regla.`,
        `Subsanación ordinaria: diez días; prueba: diez a treinta; audiencia: diez a quince; información pública: mínimo veinte.`,
        `Ejecución forzosa: apremio, ejecución subsidiaria, multa coercitiva y compulsión sobre personas.`
      ],
      retention: [
        `¿Qué defectos producen nulidad y cuáles suelen producir anulabilidad?`,
        `¿Cuándo puede omitirse el trámite de audiencia?`,
        `¿Qué medio de ejecución corresponde a una deuda líquida y cuál a una obligación no personalísima de hacer?`
      ],
      strategy: [
        `En un supuesto, numera cronológicamente los actos y comprueba en cada uno competencia, plazo, audiencia, motivación y notificación.`,
        `No elijas nulidad solo porque el defecto parezca grave: comprueba si encaja literalmente en el artículo 47; de lo contrario, la regla suele ser anulabilidad.`
      ]
    },
    5: {
      summary: [
        `El tema reúne los artículos 106 a 126 de la Ley 39/2015. Primero distingue los mecanismos de revisión promovidos por la Administración; después identifica el recurso correcto según el acto ponga o no fin a la vía y sea o no firme.`,
        `La tabla básica es: nulidad, revisión de oficio; acto favorable anulable, lesividad y juez; acto desfavorable, posible revocación; error patente, rectificación; no fin de vía, alzada; fin de vía, reposición potestativa; firme con causa tasada, extraordinario de revisión.`
      ],
      articles: [
        ['Art. 106', 'Revisión de oficio de actos y disposiciones nulas.'],
        ['Art. 107', 'Declaración de lesividad de actos favorables anulables.'],
        ['Art. 108', 'Suspensión durante revisión.'],
        ['Art. 109', 'Revocación y rectificación de errores.'],
        ['Arts. 110-111', 'Límites y competencia para revisión.'],
        ['Arts. 112-116', 'Objeto, clases, fin de vía, interposición e inadmisión.'],
        ['Arts. 117-120', 'Suspensión, audiencia, resolución y pluralidad de recursos.'],
        ['Arts. 121-122', 'Recurso de alzada.'],
        ['Arts. 123-124', 'Recurso potestativo de reposición.'],
        ['Arts. 125-126', 'Recurso extraordinario de revisión y resolución.']
      ],
      quick: [
        `Revisión de oficio de nulos: cualquier momento, dictamen favorable y límites del artículo 110.`,
        `Lesividad: acto favorable anulable, cuatro años para declarar y posterior impugnación judicial.`,
        `Alzada: un mes para interponer y tres para resolver.`,
        `Reposición: un mes para interponer y uno para resolver.`,
        `Extraordinario: cuatro años por error de hecho; tres meses para las demás causas.`
      ],
      retention: [
        `¿Qué cauce debe seguir la Administración para eliminar un acto favorable que solo es anulable?`,
        `¿Qué recurso procede contra un acto que no pone fin a la vía y qué órgano lo resuelve?`,
        `¿Cuáles son las cuatro causas del recurso extraordinario de revisión?`
      ],
      strategy: [
        `Antes de calcular un plazo, clasifica el acto: trámite o resolución, fin o no de vía, expreso o presunto, firme o recurrible.`,
        `Recuerda que recurrir no suspende por sí solo. Si la pregunta habla de suspensión, busca daño difícil de reparar, nulidad, ponderación y plazo de un mes para resolver la solicitud.`
      ]
    }
  };

  const patched = [];
  for (const [numberText, definition] of Object.entries(STRUCTURE)) {
    const number = Number(numberText);
    const theme = ope.themes.find(item => Number(item.number) === number);
    if (!theme) continue;

    theme.sections = (theme.sections || []).map(section => {
      if (/trampas|errores frecuentes/i.test(section.heading || '')) {
        return { ...section, heading: 'Opo-Test: puntos calientes' };
      }
      return section;
    });

    theme.sections.unshift(
      { heading: 'Rigor normativo', paragraphs: definition.articles.map(([range, focus]) => `${range}: ${focus}`) }
    );
    theme.sections.unshift(
      { heading: 'Resumen orientado al aprobado', paragraphs: definition.summary }
    );
    theme.sections.push(
      { heading: 'Síntesis de repaso rápido', paragraphs: definition.quick },
      { heading: 'Tres preguntas de retención activa', paragraphs: definition.retention.map((question, index) => `${index + 1}. ${question}`) },
      { heading: 'Estrategia de examen', paragraphs: definition.strategy }
    );

    theme.articleCoverage = definition.articles.map(([range, focus]) => ({ range, focus }));
    theme.retentionQuestions = [...definition.retention];
    theme.theoryStatus = {
      ...(theme.theoryStatus || {}),
      fixedStudyStructure: true,
      articleByArticle: true,
      noOffSyllabusFiller: true
    };
    patched.push(number);
  }

  window.OPOWEB_CARRANQUE_TEORIA_V85_ESTRUCTURA = {
    version: 'v0.85.0',
    themes: patched,
    headings: [
      'Resumen orientado al aprobado',
      'Rigor normativo',
      'Síntesis de repaso rápido',
      'Opo-Test: puntos calientes',
      'Tres preguntas de retención activa',
      'Estrategia de examen'
    ]
  };
})();
