(() => {
  const ope = window.OPOSICIONES_DATA?.oposiciones?.find(item => item.id === 'diputacion-toledo-admin-2026');
  if (!ope) return;
  const letters = ['A', 'B', 'C', 'D'];
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const rows = {
    35: [[
      'En LibreOffice Writer, ¿qué efecto tiene ocultar la visualización de los cambios registrados sin aceptarlos?',
      'Los cambios dejan de mostrarse como marcas, pero siguen registrados y pendientes de aceptación o rechazo.',
      [
        'Los cambios se aceptan definitivamente y se integran en el texto.',
        'Los cambios se eliminan del documento sin posibilidad de revisión.',
        'El documento se convierte automáticamente en PDF firmado.'
      ],
      'Ayuda oficial de LibreOffice Writer, funciones de seguimiento de cambios: mostrar u ocultar las marcas afecta a la visualización; aceptar o rechazar modifica el estado de los cambios registrados.'
    ]],
    38: [[
      'En LibreOffice Impress, ¿cuál es la diferencia correcta entre una transición y una animación?',
      'La transición actúa al pasar entre diapositivas y la animación afecta a objetos dentro de una diapositiva.',
      [
        'La transición afecta solo al texto y la animación solo a imágenes.',
        'La transición cambia el formato del archivo y la animación lo convierte en PDF.',
        'No existe diferencia funcional entre ambas.'
      ],
      'Ayuda oficial de LibreOffice Impress: las transiciones se aplican al cambio de diapositiva y las animaciones personalizadas a objetos de la diapositiva.'
    ]]
  };
  function build(number,row,index){const [text,correct,wrong,justification]=row,options=[correct,...wrong],shift=(number+index+3)%4,rotated=options.slice(shift).concat(options.slice(0,shift));return{id:`dip-v87-b4-t${number}-q${index+1}`,text,options:rotated.map((option,i)=>({letter:letters[i],text:option})),answer:letters[rotated.indexOf(correct)],justification,source:justification,difficulty:'media',auditReal:true,auditTheme:number,theoryVersion:'v0.87.0'};}
  const addedByTheme={};
  for(const [numberText,bank] of Object.entries(rows)){const number=Number(numberText),theme=ope.themes.find(item=>Number(item.number)===number),existing=ope.themeTests?.[theme.id]||[],seen=new Set(existing.map(question=>normalize(question.text))),additions=bank.map((row,index)=>build(number,row,index)).filter(question=>!seen.has(normalize(question.text)));ope.themeTests[theme.id]=existing.concat(additions);addedByTheme[number]=additions.length;}
  window.OPOWEB_DIPUTACION_TEST_V87_BLOQUE4={version:'v0.87.0',reviewedAt:'2026-07-15',addedByTheme,totalAdded:Object.values(addedByTheme).reduce((sum,value)=>sum+value,0),totals:Object.fromEntries([35,36,37,38].map(number=>{const theme=ope.themes.find(item=>Number(item.number)===number);return[number,(ope.themeTests?.[theme.id]||[]).length];})),source:'The Document Foundation · LibreOffice Help'};
})();
