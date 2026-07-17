(() => {
  const REVIEW_DATE = '2026-07-17';

  const freezeItems = items => Object.freeze(items.map(item => Object.freeze(item)));

  globalThis.OPOWEB_OAPGT_ESTATUTOS_V89 = Object.freeze({
    version: 'v0.89.0',
    reviewedAt: REVIEW_DATE,
    status: 'CADENA_HISTORICA_LOCALIZADA_PENDIENTE_CONSOLIDACION_OFICIAL',
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
      reason: 'No se habilita contenido estatutario hasta disponer de copias oficiales de archivo, verificar la publicación definitiva completa y consolidar de forma trazable todas las modificaciones posteriores.'
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
        verification: 'LOCALIZADA_NO_ARCHIVADA_EN_REPOSITORIO',
        safeUse: 'La modificación prevé elevación a definitiva si no se presentan reclamaciones; falta comprobar el cierre oficial del trámite.'
      },
      {
        year: 2004,
        event: 'Aprobación inicial de una reforma amplia y publicación de texto íntegro',
        publication: 'BOP Toledo, 23 de diciembre de 2004',
        evidenceClass: 'TRANSCRIPCION_SECUNDARIA_DE_PUBLICACION_OFICIAL',
        verification: 'INICIAL_NO_SUFICIENTE_POR_SI_SOLA',
        safeUse: 'Sirve para identificar el alcance de la reforma, pero no como texto definitivo vigente.'
      },
      {
        year: 2005,
        event: 'Publicación definitiva amplia y corrección de errores del artículo 21',
        publication: 'Corrección publicada en BOP Toledo, 13 de mayo de 2005; publicación íntegra definitiva previa pendiente de copia oficial',
        evidenceClass: 'TRANSCRIPCION_SECUNDARIA_DE_CORRECCION_OFICIAL',
        verification: 'CORRECCION_LOCALIZADA_PUBLICACION_INTEGRA_PENDIENTE',
        safeUse: 'Confirma que existió publicación definitiva, pero no sustituye su copia íntegra ni permite consolidar todos los artículos.'
      },
      {
        year: 2011,
        event: 'Modificación de adscripción, organización y funciones',
        publication: 'BOP Toledo, 14 de diciembre de 2011',
        evidenceClass: 'TRANSCRIPCION_SECUNDARIA_DE_PUBLICACION_OFICIAL',
        verification: 'LOCALIZADA_PENDIENTE_TEXTO_COMPLETO_OFICIAL',
        safeUse: 'Acredita una reforma posterior a 2005; debe incorporarse íntegramente a la consolidación.'
      }
    ]),
    currentOfficialCorroboration: freezeItems([
      {
        period: '2025-2026',
        fact: 'Anuncios oficiales del OAPGT siguen citando el artículo 14 de los Estatutos para actuaciones de gestión y recaudación.',
        evidenceClass: 'PUBLICACION_OFICIAL_ACTUAL',
        effect: 'Corrobora operatividad actual de la estructura estatutaria, no la redacción íntegra consolidada.'
      },
      {
        period: '2026',
        fact: 'Bases y actuaciones de personal siguen citando el artículo 12.2.l.8 de los Estatutos.',
        evidenceClass: 'PUBLICACION_OFICIAL_ACTUAL',
        effect: 'Corrobora vigencia funcional de esa referencia, no descarta reformas en otros artículos.'
      }
    ]),
    missingEvidence: Object.freeze([
      'Copia oficial de archivo del BOP de 11 de octubre de 1996 con el texto original íntegro.',
      'Copias oficiales de archivo de las modificaciones de 1999 y 2002 y acreditación del cierre definitivo de sus trámites.',
      'Copia oficial íntegra de la publicación definitiva de la reforma amplia de 2005.',
      'Copia oficial completa de la modificación publicada el 14 de diciembre de 2011.',
      'Búsqueda oficial documentada de posibles modificaciones posteriores a 2011.',
      'Consolidación artículo por artículo con origen, modificación, redacción resultante y fecha de vigencia.'
    ]),
    conclusion: 'La cadena histórica está sustancialmente localizada, pero el texto oficial consolidado vigente no está demostrado. El tema 22 mantiene reserva documental y no debe generar teoría literal ni preguntas estatutarias.'
  });
})();