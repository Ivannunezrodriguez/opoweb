const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=process.cwd(),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const context={console,window:{}};context.globalThis=context.window;vm.createContext(context);
const plain=v=>JSON.parse(JSON.stringify(v));
const norm=v=>String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const wordCount=v=>norm(v).split(/\s+/).filter(Boolean).length;
const files=['data/oposiciones.js','data/proceso.js','data/uc3m.js','data/ope-audit-v41.js','assets/js/uc3m-temario-v30.js','assets/js/uc3m-temario-v31.js','assets/js/uc3m-temario-v32.js','assets/js/uc3m-temario-v33.js','assets/js/uc3m-temario-v34.js','assets/js/uc3m-temario-v35.js','assets/js/uc3m-temario-v36.js','assets/js/auditoria-test-v37.js','assets/js/refuerzo-test-v38.js','assets/js/refuerzo-test-v39.js','assets/js/refuerzo-test-v40.js','assets/js/correcciones-test-v40.js','assets/js/perfeccion-v42.js'];
for(let v=43;v<=65;v++)files.push(`assets/js/diputacion-v${v}.js`);
files.push('assets/js/diputacion-snapshot-v87.js','assets/js/diputacion-teoria-v87-bloque1.js','assets/js/diputacion-teoria-v87-bloque2.js','assets/js/diputacion-test-v87-bloque2.js','assets/js/diputacion-teoria-v87-bloque3.js','assets/js/diputacion-test-v87-bloque3.js');
for(const file of files)vm.runInContext(read(file),context,{filename:file});
const ope=context.window.OPOSICIONES_DATA.oposiciones.find(item=>item.id==='diputacion-toledo-admin-2026');
const release=context.window.OPOWEB_DIPUTACION_TEORIA_V87_BLOQUE3;
const reinforcement=context.window.OPOWEB_DIPUTACION_TEST_V87_BLOQUE3;
assert.ok(ope,'No existe Diputación');assert.ok(release,'No se cargó el bloque 32-34');assert.ok(reinforcement,'No se cargó el refuerzo 32-34');
assert.deepStrictEqual(plain(release.themes),[32,33,34]);
assert.deepStrictEqual(plain(reinforcement.addedByTheme),{33:2,34:1});
assert.equal(reinforcement.totalAdded,3);
const headings=['Resumen orientado al aprobado','Rigor normativo','Desarrollo completo del epígrafe oficial','Síntesis de repaso rápido','Opo-Test: puntos calientes','Tres preguntas de retención activa','Estrategia de examen'];
const titles={
32:'Microsoft Windows 11 Pro I. Creación, copiado y borrado de archivos y carpetas. Las unidades de discos locales y de red.',
33:'Microsoft Windows 11 Pro II. Navegación por Internet con Microsoft Edge. Uso del correo electrónico con Microfocus GroupWise 24 y posteriores.',
34:'Microsoft Windows 11 Pro III. Impresión y escaneado de documentos desde Microsoft Windows 11.'
};
const failures=[],metrics=[];
for(const number of release.themes){
 const theme=ope.themes.find(item=>Number(item.number)===number);assert.ok(theme,`Falta tema ${number}`);
 const text=`${theme.sections.flatMap(section=>[section.heading,...section.paragraphs]).join(' ')} ${theme.tree} ${theme.reviewTable.flat().join(' ')}`;
 const metric={number,titleMatch:norm(theme.title)===norm(titles[number]),words:wordCount(text),sections:theme.sections.length,headings:plain(theme.sections.map(section=>section.heading)),paragraphs:theme.sections.reduce((sum,section)=>sum+section.paragraphs.length,0),sources:theme.officialSources.length,sourceReferences:plain(theme.officialSources.map(source=>source.reference)),coverage:theme.articleCoverage.length,treeCharacters:theme.tree.length,reviewRows:theme.reviewTable.length,questions:(ope.themeTests?.[theme.id]||[]).length,autonomous:theme.theoryStatus?.autonomous===true,literal:theme.theoryStatus?.programmeLiteral===true,featureByFeature:theme.theoryStatus?.featureByFeature===true,reviewedAt:theme.theoryStatus?.reviewedAt};
 if(!metric.titleMatch)failures.push(`Tema ${number}: título oficial alterado`);
 if(!metric.autonomous||!metric.literal||!metric.featureByFeature)failures.push(`Tema ${number}: estado teórico incompleto`);
 if(metric.words<900)failures.push(`Tema ${number}: ${metric.words} palabras`);
 if(metric.sections!==7||JSON.stringify(metric.headings)!==JSON.stringify(headings))failures.push(`Tema ${number}: estructura incorrecta`);
 if(metric.paragraphs<25)failures.push(`Tema ${number}: solo ${metric.paragraphs} párrafos`);
 if(metric.sources<3)failures.push(`Tema ${number}: fuentes insuficientes`);
 if(!metric.sourceReferences.includes('BOP-TO-118-2026-2934'))failures.push(`Tema ${number}: falta programa BOP`);
 if(metric.coverage<12||metric.treeCharacters<=250||metric.reviewRows<10)failures.push(`Tema ${number}: materiales de repaso insuficientes`);
 if(metric.questions<30)failures.push(`Tema ${number}: solo ${metric.questions} preguntas`);
 if(metric.reviewedAt!=='2026-07-15')failures.push(`Tema ${number}: revisión no actualizada`);
 metrics.push(metric);
}
const programme=ope.theoryProgramme?.v87;assert.ok(programme);
assert.deepStrictEqual(plain(programme.completedThemes),[25,26,27,28,29,30,31,32,33,34]);
assert.equal(programme.autonomousThemes,10);assert.equal(programme.totalThemes,40);assert.equal(programme.pendingThemes.length,30);
assert.ok(programme.dynamicChecks.some(item=>/GroupWise/i.test(item)));assert.ok(programme.dynamicChecks.some(item=>/impresión/i.test(item)));
const totalQuestions=Object.values(ope.themeTests).reduce((sum,bank)=>sum+bank.length,0);
assert.equal(totalQuestions,1447,'Diputación debe conservar 1.433 preguntas canónicas y añadir 14 verificadas');
const report={version:'v0.87.0',reviewedAt:'2026-07-15',status:failures.length?'REVISAR':'APTO',officialProgrammeSource:'BOP Toledo núm. 118, 25 de junio de 2026, código 2026.00002934',completedThemes:plain(programme.completedThemes),autonomousThemes:programme.autonomousThemes,pendingThemes:plain(programme.pendingThemes),totalWords:metrics.reduce((sum,item)=>sum+item.words,0),minimumWords:Math.min(...metrics.map(item=>item.words)),questions:totalQuestions,addedQuestionsBlock3:reinforcement.totalAdded,themes:metrics,failures};
fs.writeFileSync(path.join(root,'diputacion-teoria-v87-bloque3.json'),JSON.stringify(report,null,2));
assert.deepStrictEqual(failures,[],failures.join(' | '));
console.log(`Diputación v0.87 bloque 3 APTO · temas 32-34 · ${report.totalWords} palabras · mínimo ${report.minimumWords} · 10/40 acumulados · ${totalQuestions} preguntas`);
