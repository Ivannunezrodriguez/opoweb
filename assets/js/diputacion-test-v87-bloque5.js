(() => {
  const ope = window.OPOSICIONES_DATA?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;
  const letters = ['A', 'B', 'C', 'D'];
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const row = [
    '¿Qué diferencia esencial existe entre la memoria RAM y una unidad SSD en un ordenador personal?',
    'La RAM mantiene temporalmente datos en uso y normalmente es volátil; el SSD conserva datos de forma no volátil.',
    [
      'La RAM conserva los datos sin alimentación y el SSD los pierde al apagar.',
      'Ambos componentes son exclusivamente dispositivos de salida.',
      'El SSD ejecuta instrucciones y la RAM sustituye al procesador.'
    ],
    'Documentación oficial de arquitectura y soporte de equipos: la RAM es memoria principal de trabajo normalmente volátil, mientras el SSD es almacenamiento no volátil.'
  ];
  const theme = ope.themes.find(item => Number(item.number) === 39);
  const existing = ope.themeTests?.[theme.id] || [];
  const [text,correct,wrong,justification]=row,options=[correct,...wrong],shift=2,rotated=options.slice(shift).concat(options.slice(0,shift));
  const question={id:'dip-v87-b5-t39-q1',text,options:rotated.map((option,index)=>({letter:letters[index],text:option})),answer:letters[rotated.indexOf(correct)],justification,source:justification,difficulty:'baja',auditReal:true,auditTheme:39,theoryVersion:'v0.87.0'};
  const addition = existing.some(item => normalize(item.text) === normalize(question.text)) ? [] : [question];
  ope.themeTests[theme.id] = existing.concat(addition);
  window.OPOWEB_DIPUTACION_TEST_V87_BLOQUE5={version:'v0.87.0',reviewedAt:'2026-07-15',addedByTheme:{39:addition.length},totalAdded:addition.length,totals:Object.fromEntries([39,40].map(number=>{const item=ope.themes.find(candidate=>Number(candidate.number)===number);return[number,(ope.themeTests?.[item.id]||[]).length];})),sources:['Microsoft Support','Intel']};
})();
