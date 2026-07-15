const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=process.cwd(),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const context={console,window:{}};context.globalThis=context.window;vm.createContext(context);
const plain=v=>JSON.parse(JSON.stringify(v));
const norm=v=>String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const words=v=>norm(v).split(/\s+/).filter(Boolean).length;
const files=['data/oposiciones.js','data/proceso.js','data/uc3m.js','data/ope-audit-v41.js','assets/js/uc3m-temario-v30.js','assets/js/uc3m-temario-v31.js','assets/js/uc3m-temario-v32.js','assets/js/uc3m-temario-v33.js','assets/js/uc3m-temario-v34.js','assets/js/uc3m-temario-v35.js','assets/js/uc3m-temario-v36.js','assets/js/auditoria-test-v37.js','assets/js/refuerzo-test-v38.js','assets/js/refuerzo-test-v39.js','assets/js/refuerzo-test-v40.js','assets/js/correcciones-test-v40.js','assets/js/perfeccion-v42.js'];
for(let v=43;v<=65;v++)files.push(`assets/js/diputacion-v${v}.js`);
files.push('assets/js/diputacion-snapshot-v87.js','assets/js/diputacion-teoria-v87-bloque1.js','assets/js/diputacion-teoria-v87-bloque2.js','assets/js/diputacion-test-v87-bloque2.js','assets/js/diputacion-teoria-v87-bloque3.js','assets/js/diputacion-test-v87-bloque3.js','assets/js/diputacion-teoria-v87-bloque4.js','assets/js/diputacion-test-v87-bloque4.js','assets/js/diputacion-teoria-v87-bloque5.js','assets/js/diputacion-test-v87-bloque5.js','assets/js/diputacion-teoria-v87-bloque6.js');
for(const file of files)vm.runInContext(read(file),context,{filename:file});
const ope=context.window.OPOSICIONES_DATA.oposiciones.find(item=>item.id==='diputacion-toledo-admin-2026');
const release=context.window.OPOWEB_DIPUTACION_TEORIA_V87_BLOQUE6;
assert.ok(ope&&release,'No se cargó Diputación o el bloque 1-4');
assert.deepStrictEqual(plain(release.themes),[1,2,3,4]);
const headings=['Resumen orientado al aprobado','Rigor normativo','Desarrollo completo del epígrafe oficial','Síntesis de repaso rápido','Opo-Test: puntos calientes','Tres preguntas de retención activa','Estrategia de examen'];
const titles={
1:'La Constitución española de 1978: significado y estructura, principios generales y valor normativo. El Tribunal Constitucional. La reforma constitucional.',
2:'Derechos y deberes fundamentales de los españoles. Garantía y suspensión. Las fuentes del derecho administrativo: La Ley, el Reglamento.',
3:'La organización del Estado en la Constitución: Organización institucional y organización territorial. La Jefatura del Estado: La Corona. Las Cortes Generales: Referencia al Defensor del Pueblo y al Tribunal de Cuentas.',
4:'Ley 40/2015, de 1 de octubre, del Régimen Jurídico del Sector Público. La Administración Pública. Los órganos de las Administraciones Públicas. La competencia administrativa. Las relaciones administrativas.'
};
const failures=[],metrics=[];
for(const number of release.themes){
 const theme=ope.themes.find(item=>Number(item.number)===number);assert.ok(theme,`Falta tema ${number}`);
 const text=`${theme.sections.flatMap(section=>[section.heading,...section.paragraphs]).join(' ')} ${theme.tree} ${theme.reviewTable.flat().join(' ')}`;
 const metric={number,titleMatch:norm(theme.title)===norm(titles[number]),words:words(text),sections:theme.sections.length,headings:plain(theme.sections.map(section=>section.heading)),paragraphs:theme.sections.reduce((sum,section)=>sum+section.paragraphs.length,0),sources:theme.officialSources.length,sourceReferences:plain(theme.officialSources.map(source=>source.reference)),coverage:theme.articleCoverage.length,treeCharacters:theme.tree.length,reviewRows:theme.reviewTable.length,questions:(ope.themeTests?.[theme.id]||[]).length,autonomous:theme.theoryStatus?.autonomous===true,literal:theme.theoryStatus?.programmeLiteral===true,articleByArticle:theme.theoryStatus?.articleByArticle===true,reviewedAt:theme.theoryStatus?.reviewedAt};
 if(!metric.titleMatch)failures.push(`Tema ${number}: título oficial alterado`);
 if(!metric.autonomous||!metric.literal||!metric.articleByArticle)failures.push(`Tema ${number}: estado teórico incompleto`);
 if(metric.words<1400)failures.push(`Tema ${number}: ${metric.words} palabras`);
 if(metric.sections!==7||JSON.stringify(metric.headings)!==JSON.stringify(headings))failures.push(`Tema ${number}: estructura incorrecta`);
 if(metric.paragraphs<28)failures.push(`Tema ${number}: solo ${metric.paragraphs} párrafos`);
 if(metric.sources<3||!metric.sourceReferences.includes('BOP-TO-118-2026-2934'))failures.push(`Tema ${number}: fuentes insuficientes`);
 if(metric.coverage<20||metric.treeCharacters<350||metric.reviewRows<12)failures.push(`Tema ${number}: material de repaso insuficiente`);
 if(metric.questions<30)failures.push(`Tema ${number}: solo ${metric.questions} preguntas`);
 if(metric.reviewedAt!=='2026-07-15')failures.push(`Tema ${number}: fecha de revisión incorrecta`);
 metrics.push(metric);
}
const programme=ope.theoryProgramme?.v87;assert.ok(programme);
const completed=[1,2,3,4,...Array.from({length:16},(_,index)=>index+25)];
assert.deepStrictEqual(plain(programme.completedThemes),completed);
assert.equal(programme.autonomousThemes,20);assert.equal(programme.totalThemes,40);
assert.deepStrictEqual(plain(programme.pendingThemes),Array.from({length:20},(_,index)=>index+5));
assert.ok(programme.dynamicChecks.some(item=>/Constitución/i.test(item)));
const total=Object.values(ope.themeTests).reduce((sum,bank)=>sum+bank.length,0);
const report={version:'v0.87.0',reviewedAt:'2026-07-15',status:failures.length?'REVISAR':'APTO',completedThemes:plain(programme.completedThemes),autonomousThemes:programme.autonomousThemes,pendingThemes:plain(programme.pendingThemes),totalWords:metrics.reduce((sum,item)=>sum+item.words,0),minimumWords:Math.min(...metrics.map(item=>item.words)),questions:total,themes:metrics,failures};
fs.writeFileSync(path.join(root,'diputacion-teoria-v87-bloque6.json'),JSON.stringify(report,null,2));
assert.deepStrictEqual(failures,[],failures.join(' | '));
console.log(`Diputación v0.87 bloque 6 APTO · temas 1-4 · ${report.totalWords} palabras · mínimo ${report.minimumWords} · 20/40 acumulados`);
