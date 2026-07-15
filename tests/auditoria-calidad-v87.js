const fs=require('fs'),vm=require('vm'),assert=require('assert');
const window={};window.window=window;
const context={window,console,Set,Map,Array,Object,String,Number,Boolean,Math,Date,JSON,URL};
const run=f=>vm.runInNewContext(fs.readFileSync(f,'utf8'),context,{filename:f});

run('data/oposiciones.js');run('data/proceso.js');run('data/uc3m.js');run('data/ope-audit-v41.js');run('data/oapgt-fuentes-v87.js');
run('assets/js/perfeccion-v42.js');run('assets/js/uc3m-v66.js');run('assets/js/uc3m-v67.js');
for(let v=43;v<=65;v++)run(`assets/js/diputacion-v${v}.js`);
run('assets/js/diputacion-snapshot-v87.js');
[
'assets/js/puebla-v68.js','assets/js/carranque-v69.js','assets/js/carranque-v69-fix.js','assets/js/carranque-v70.js','assets/js/practicos-v71.js',
'assets/js/uc3m-v72-clean.js','assets/js/uc3m-v73-transparencia.js','assets/js/uc3m-v73-fix.js','assets/js/uc3m-v74-losu.js','assets/js/uc3m-v75-estatutos.js','assets/js/uc3m-v76-academica-admision.js','assets/js/uc3m-v77-normativa-interna.js','assets/js/uc3m-v78-presupuesto-2026.js','assets/js/uc3m-v79-contratacion-interna.js','assets/js/uc3m-v80-cierre-calidad.js',
'assets/js/municipales-v84-cierre.js','assets/js/municipales-v84-fix.js','assets/js/puebla-teoria-v86-bloque1.js','assets/js/puebla-teoria-v86-bloque2.js','assets/js/puebla-teoria-v86-bloque3.js','assets/js/puebla-teoria-v86-bloque4.js','assets/js/carranque-teoria-v85-bloque1.js','assets/js/carranque-teoria-v85-estructura.js','assets/js/carranque-teoria-v85-bloque2.js','assets/js/carranque-teoria-v85-bloque3.js','assets/js/carranque-teoria-v85-bloque4.js',
'assets/js/diputacion-teoria-v87-bloque1.js','assets/js/diputacion-teoria-v87-bloque2.js','assets/js/diputacion-test-v87-bloque2.js','assets/js/auditoria-calidad-v72.js'
].forEach(run);

const report=window.OPOWEB_AUDITORIA_V72,municipal=window.OPOWEB_MUNICIPALES_V84;
assert.ok(report);assert.ok(municipal);assert.equal(window.OPOWEB_DIPUTACION_SNAPSHOT_V87.totalQuestions,1394);assert.equal(window.OPOWEB_DIPUTACION_TEST_V87.canonicalSnapshot,true);
report.version='v0.87.0';report.date='2026-07-15';if(report.summary)report.summary.version='v0.87.0';report.municipal=municipal;
report.diputacionTheory={completedThemes:window.OPOSICIONES_DATA.oposiciones.find(x=>x.id==='diputacion-toledo-admin-2026').theoryProgramme.v87.completedThemes,autonomousThemes:7,totalThemes:40,status:'EN_PROGRESO',oapgtStatutesVerified:window.OPOWEB_OAPGT_FUENTES_V87.statutes.allowedForTheory};
fs.writeFileSync('audit-v87.json',JSON.stringify(report,null,2));
assert.equal(report.oposiciones.length,4);assert.equal(report.totalQuestions,3266,`Total inesperado: ${report.totalQuestions}`);assert.equal(report.invalidAnswers,0);assert.equal(report.invalidOptions,0);assert.equal(report.duplicateIds,0);assert.equal(report.missingJustifications,0);assert.equal(report.genericQuestions,0);assert.equal(report.themeDuplicates,0);assert.equal(report.hardFailures,0);assert.ok(report.oposiciones.every(x=>x.answerBalance.maxShare<=0.55));
const totals=Object.fromEntries(report.oposiciones.map(x=>[x.id,x.questions]));
assert.equal(totals['puebla-aux-admin-2026'],570);assert.equal(totals['carranque-aux-admin-2026'],600);assert.equal(totals['diputacion-toledo-admin-2026'],1406);assert.equal(totals['uc3m-aux-admin-2026'],690);
assert.equal(window.OPOWEB_UC3M_V80.status,'APTO');assert.equal(municipal.globalStatus,'APTO');assert.equal(municipal.puebla.estimatedProgress,99);assert.equal(municipal.carranque.estimatedProgress,99);assert.equal(report.diputacionTheory.autonomousThemes,7);assert.deepStrictEqual(JSON.parse(JSON.stringify(report.diputacionTheory.completedThemes)),[25,26,27,28,29,30,31]);assert.equal(report.diputacionTheory.oapgtStatutesVerified,false);
console.log('Auditoría v0.87 APTO',JSON.stringify({total:report.totalQuestions,diputacion:totals['diputacion-toledo-admin-2026'],autonomousThemes:7}));
