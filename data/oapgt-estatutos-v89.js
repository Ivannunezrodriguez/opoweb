(() => {
  const REVIEW_DATE = '2026-07-17';

  const freezeItems = items => Object.freeze(items.map(item => Object.freeze(item)));

  globalThis.OPOWEB_OAPGT_ESTATUTOS_V89 = Object.freeze({
    version: 'v0.89.1',
    reviewedAt: REVIEW_DATE,
    status: 'CADENA_HISTORICA_PARCIAL_LOCALIZADA_PENDIENTE_CIERRE_OFICIAL',
    scope: 'Tema 22 de Diputación de Toledo: organización, funcionamiento, competencias y Estatutos del OAPGT.',
    officialProgramme: Object.freeze({
      publication: 'BOP Toledo núm. 118, de 25 de junio de 2026',
      verificationCode: '2026.00002934',
      theme: 22,
      literalRequirement: 'El Organismo Autónomo Provincial de Gestión Tributaria de Toledo: organización, funcionamiento y competencias. Especial referencia a sus Estatutos.'
    }),
    safeguards: Object.freeze({
      allowedForTheory: false,
      allowedForQuestions: false,
      allowedForLiteralArticles: false,
      reason: 'No se habilita contenido estatutario hasta disponer de copias oficiales de archivo, acreditar el cierre definitivo de cada reforma y consolidar de forma trazable todas las modificaciones posteriores.'
    }),
    locatedChain: freezeItems([
      {
        year: 1996,
        event: 'Aprobación definitiva de los Estatutos originales',
        publication: 'BOP Toledo, 11 de octubre de 1996',
        evidenceClass: 'TRANSCRIPCION_SECUNDARIA_DE_PUBLICACION_OFICIAL',
        verification: 'LOCALIZADA_NO_ARCHIVADA_EN_REPOSITORIO',
        safeUse: 'Acredita el origen estatutario; no autoriza a reproducir artículos como vigentes.'
      },
      {
        year: 1999,
        event: 'Modificación estatutaria aprobada por el Pleno provincial',
        publication: 'BOP Toledo, 14 de octubre de 1999',
        evidenceClass: 'TRANSCRIPCION_SECUNDARIA_DE_PUBLICACION_OFICIAL',
        verification: 'LOCALIZADA_NO_ARCHIVADA_EN_REPOSITORIO',
        safeUse: 'Acredita que el texto de 1996 fue modificado; exige consolidación posterior.'
      },
      {
        year: 2002,
        event: 'Modificación de competencias y adición del artículo 12.l.8',
        publication: 'BOP Toledo, 13 de diciembre de 2002',
        evidenceClass: 'TRANSCRIPCION_SECUNDARIA_DE_PUBLICACION_OFICIAL',
        verification: 'ACUERDO_INICIAL_CIERRE_DEFINITIVO_PENDIENTE',
        safeUse: 'La publicación anuncia elevación a definitiva si no se presentan reclamaciones; falta acreditar oficialmente que se produjo ese efecto.'
      },
      {
        year: 2004,
        event: 'Aprobación inicial de una reforma amplia y publicación de texto íntegro',
        publication: 'BOP Toledo núm. 294, 23 de diciembre de 2004',
        evidenceClass: 'TRANSCRIPCION_SECUNDARIA_DE_PUBLICACION_OFICIAL',
        verification: 'INICIAL_NO_SUFICIENTE_POR_SI_SOLA',
        safeUse: 'Sirve para identificar el alcance de la reforma y una redacción propuesta, pero no demuestra por sí sola su aprobación definitiva ni entrada en vigor.'
      },
      {
        year: 2011,
        event: 'Modificación de adscripción, organización y funciones',
        publication: 'BOP Toledo, 14 de diciembre de 2011',
        evidenceClass: 'TRANSCRIPCION_SECUNDARIA_DE_PUBLICACION_OFICIAL',
        verification: 'LOCALIZADA_PENDIENTE_COPIA_OFICIAL_COMPLETA',
        safeUse: 'La transcripción contiene el tenor literal de la reforma, pero debe contrastarse con la copia oficial completa antes de consolidar.'
      }
    ]),
    discardedLeads: freezeItems([
      {
        date: '2005-05-13',
        publication: 'BOP Toledo núm. 109',
        claimDiscarded: 'Supuesto cierre o corrección de la reforma estatutaria del OAPGT.',
        reason: 'La corrección del artículo 21 publicada ese día corresponde a los Estatutos del Consorcio de Servicios Públicos Medioambientales de la provincia de Toledo, no al OAPGT.',
        consequence: 'No puede utilizarse para acreditar una publicación definitiva del OAPGT en 2005.'
      }
    ]),
    currentOfficialCorroboration: freezeItems([
      {
        period: '2024-2026',
        fact: 'Anuncios oficiales del OAPGT siguen citando el artículo 14 de los Estatutos para actuaciones de gestión y recaudación.',
        evidenceClass: 'PUBLICACION_OFICIAL_ACTUAL',
        effect: 'Corrobora operatividad actual de esa competencia, no la redacción íntegra consolidada.'
      },
      {
        period: '2025-2026',
        fact: 'Bases y actuaciones de personal siguen citando el artículo 12.2.l.8 de los Estatutos.',
        evidenceClass: 'PUBLICACION_OFICIAL_ACTUAL',
        effect: 'Corrobora vigencia funcional de esa referencia, no descarta reformas en otros artículos.'
      },
      {
        period: '2022',
        fact: 'Un convenio oficial describe el objeto del OAPGT remitiéndose al artículo 4.a de sus Estatutos.',
        evidenceClass: 'PUBLICACION_OFICIAL_ACTUAL',
        effect: 'Corrobora la función general del organismo, pero no sustituye el texto estatutario consolidado.'
      }
    ]),
    missingEvidence: Object.freeze([
      'Copia oficial de archivo del BOP de 11 de octubre de 1996 con el texto original íntegro.',
      'Copia oficial de la modificación de 14 de octubre de 1999.',
      'Copia oficial de la modificación de 13 de diciembre de 2002 y acreditación de su aprobación definitiva.',
      'Acreditación oficial del cierre definitivo y entrada en vigor de la reforma publicada inicialmente el 23 de diciembre de 2004.',
      'Copia oficial completa de la modificación publicada el 14 de diciembre de 2011.',
      'Búsqueda oficial documentada de posibles modificaciones posteriores a 2011.',
      'Consolidación artículo por artículo con origen, modificación, redacción resultante y fecha de vigencia.'
    ]),
    conclusion: 'La cadena histórica está parcialmente localizada, pero el texto oficial consolidado vigente no está demostrado. El tema 22 mantiene reserva documental y no debe generar teoría literal ni preguntas estatutarias.'
  });
})();