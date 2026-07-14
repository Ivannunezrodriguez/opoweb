(() => {
  const REVIEW_DATE = '2026-07-14';

  window.OPOWEB_OAPGT_FUENTES_V87 = Object.freeze({
    version: 'v0.87.0',
    reviewedAt: REVIEW_DATE,
    entity: Object.freeze({
      officialName: 'Organismo Autónomo Provincial de Gestión Tributaria de Toledo',
      shortName: 'O.A.P.G.T.',
      nif: 'P9500003J',
      address: 'C/ Real, 4, 45002 Toledo',
      phone: '925 28 84 84'
    }),
    verifiedOfficialSources: Object.freeze([
      Object.freeze({
        type: 'institutional-directory',
        label: 'Diputación Provincial de Toledo · Área de Economía, Hacienda y Presupuestos',
        url: 'https://www.diputoledo.es/',
        verification: 'La web institucional enlaza el O.A.P.G.T. dentro del área provincial de Economía, Hacienda y Presupuestos.'
      }),
      Object.freeze({
        type: 'official-electronic-office',
        label: 'Sede Electrónica del OAPGT',
        url: 'https://sede.oapgt.es/Paginas/inicio.aspx',
        verification: 'La sede identifica al O.A.P.G.T., su NIF, domicilio y teléfono oficiales.'
      }),
      Object.freeze({
        type: 'official-gazette',
        label: 'Creación y regulación de la Sede Electrónica del OAPGT',
        publication: 'BOP Toledo núm. 225, 27 de noviembre de 2017',
        insertion: 'N.º I.-5876',
        url: 'https://bop.diputoledo.es/webEbop/ebopResumen.jsp?publication_date=27/11/2017&publication_date_to=27/11/2017'
      }),
      Object.freeze({
        type: 'official-gazette',
        label: 'Creación y regulación del Registro Electrónico del OAPGT',
        publication: 'BOP Toledo núm. 241, 21 de diciembre de 2017',
        insertion: 'N.º I.-6405',
        url: 'https://bop.diputoledo.es/webEbop/ebopResumen.jsp?publication_date=21/12/2017&publication_date_to=21/12/2017'
      })
    ]),
    statutes: Object.freeze({
      status: 'PENDIENTE_TEXTO_OFICIAL_VIGENTE',
      consolidatedOfficialTextLocated: false,
      latestOfficialApprovalLocated: false,
      amendmentChainVerified: false,
      allowedForTheory: false,
      allowedForQuestions: false,
      rule: 'No incorporar contenido estatutario, artículos, órganos, competencias ni preguntas hasta localizar el texto oficial vigente y verificar todas sus modificaciones.'
    }),
    nextRequiredEvidence: Object.freeze([
      'Publicación oficial de aprobación íntegra de los Estatutos.',
      'Publicaciones oficiales de todas las modificaciones posteriores.',
      'Texto consolidado oficial o consolidación propia trazable artículo por artículo.',
      'Fecha de entrada en vigor y acreditación de que no existe una reforma posterior.'
    ])
  });
})();
