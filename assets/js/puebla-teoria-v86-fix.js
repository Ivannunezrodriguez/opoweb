(() => {
  const ope = window.OPOSICIONES_DATA?.oposiciones?.find(item => item.id === 'puebla-aux-admin-2026');
  const theme = ope?.themes?.find(item => Number(item.number) === 4);
  if (!theme || theme.theoryStatus?.version !== 'v0.86.0') return;

  const source = {
    label: 'Ley 29/1998, reguladora de la Jurisdicción Contencioso-administrativa',
    reference: 'BOE-A-1998-16718',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1998-16718',
    reviewedAt: '2026-07-14'
  };
  theme.officialSources ||= [];
  if (!theme.officialSources.some(item => item.reference === source.reference)) theme.officialSources.push(source);

  window.OPOWEB_PUEBLA_TEORIA_V86_FIX = {
    version: 'v0.86.0',
    theme: 4,
    addedReference: source.reference,
    status: theme.officialSources.length >= 2 ? 'APTO' : 'REVISAR'
  };
})();
