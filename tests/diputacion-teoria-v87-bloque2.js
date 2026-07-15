const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=process.cwd(),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const context={console,window:{}};context.globalThis=context.window;vm.createContext(context);
const plain=v=>JSON.parse(JSON.stringify(v));
const norm=v=>String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const words=v=>norm(v).split(/\s+/).filter(Boolean).length;
const files=['data/oposiciones.js','data/proceso.js','data/uc3m.js','data/ope-audit-v41.js','assets/js/perfeccion-v42.js'];
for(let v=43;v<=65;v++)files.push(`assets/js/diputacion-v${v}.js`);
files.push('assets/js/diputacion-snapshot-v87.js','assets/js/diputacion-teoria-v87-bloque1.js','assets/js/diputacion-teoria-v87-bloque2.js','assets/js/diputacion-test-v87-bloque2.js');
for(const f of files)vm.runInContext(read(f),context,{filename:f});
const ope=context.window.OPOSICIONES_DATA.oposiciones.find(x=>x.id==='diputacion-toledo-admin-2026');
assert.ok(ope,'No existe Diputación');
const headings=['Resumen orientado al aprobado','Rigor normativo','Desarrollo completo del epígrafe oficial','Síntesis de repaso rápido','Opo-Test: puntos calientes','Tres preguntas de retención activa','Estrategia de examen'];
const titles={
29:'El Impuesto sobre Bienes Inmuebles. Naturaleza. Hecho imponible. Sujeto pasivo. Exenciones y bonificaciones. Base Imponible. Base liquidable. Cuota, devengo y periodo impositivo. El Impuesto sobre Actividades Económicas. Naturaleza. Hecho imponible. Sujeto pasivo. Cuota: las tarifas. Devengo y periodo impositivo.',
30:'Impuesto sobre vehículos de tracción mecánica. Naturaleza. Hecho imponible. Sujeto pasivo. Base imponible, cuota y devengo. Gestión. El Impuesto sobre el Incremento del valor de los terrenos de naturaleza urbana. Naturaleza y hecho imponible. Las Tasas. Concepto. Hecho imponible. Sujetos pasivos. Devengo. Base imponible.',
31:'Ley 6/2020, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza. Firma electrónica y certificados electrónicos. Usos del Certificado electrónico en la administración electrónica. Tipos y soportes del certificado electrónico. Autoridades certificadoras y servicios que prestan.'};
const failures=[],metrics=[];
for(const number of [29,30,31]){
 const theme=ope.themes.find(x=>Number(x.number)===number);assert.ok(theme,`Falta tema ${number}`);
 const text=`${(theme.sections||[]).flatMap(s=>[s.heading,...(s.paragraphs||[])]).join(' ')} ${theme.tree||''} ${(theme.reviewTable||[]).flat().join(' ')}`;
 const metric={number,title:theme.title,titleMatch:norm(theme.title)===norm(titles[number]),words:words(text),sections:(theme.sections||[]).length,headings:plain((theme.sections||[]).map(s=>s.heading)),sources:(theme.officialSources||[]).length,treeCharacters:(theme.tree||'').length,reviewRows:(theme.reviewTable||[]).length,questions:(ope.themeTests?.[theme.id]||[]).length,autonomous:theme.theoryStatus?.autonomous===true,programmeLiteral:theme.theoryStatus?.programmeLiteral===true};
 if(!metric.titleMatch)failures.push(`Tema ${number}: título oficial alterado`);
 if(!metric.autonomous||!metric.programmeLiteral)failures.push(`Tema ${number}: estado teórico incompleto`);
 if(metric.words<900)failures.push(`Tema ${number}: ${metric.words} palabras`);
 if(metric.sections!==7||JSON.stringify(metric.headings)!==JSON.stringify(headings))failures.push(`Tema ${number}: estructura fija incorrecta`);
 if(metric.sources<2)failures.push(`Tema ${number}: fuentes insuficientes`);
 if(metric.treeCharacters<=150)failures.push(`Tema ${number}: esquema insuficiente`);
 if(metric.reviewRows<8)failures.push(`Tema ${number}: tabla insuficiente`);
 if(metric.questions<30)failures.push(`Tema ${number}: solo ${metric.questions} preguntas`);
 metrics.push(metric);
}
const programme=ope.theoryProgramme?.v87;assert.ok(programme,'No existe theoryProgramme.v87');
assert.equal(programme.status,'EN_PROGRESO');assert.deepStrictEqual(plain(programme.completedThemes),[25,26,27,28,29,30,31]);assert.equal(programme.autonomousThemes,7);assert.equal(programme.totalThemes,40);assert.equal(programme.pendingThemes.length,33);
assert.ok(programme.dynamicChecks.some(x=>/ordenanzas locales/i.test(x)));assert.ok(programme.dynamicChecks.some(x=>/2024\/1183/i.test(x)));
const snapshot=context.window.OPOWEB_DIPUTACION_SNAPSHOT_V87,reinforcement=context.window.OPOWEB_DIPUTACION_TEST_V87;
assert.ok(snapshot);assert.equal(snapshot.totalQuestions,1394);assert.ok(reinforcement);assert.equal(reinforcement.canonicalSnapshot,true);assert.equal(reinforcement.canonicalQuestionCount,1394);assert.deepStrictEqual(plain(reinforcement.addedByTheme),{29:7,30:4,31:1});assert.equal(reinforcement.totalAdded,12);assert.deepStrictEqual(plain(reinforcement.totals),{29:30,30:30,31:30});
const totalQuestions=Object.values(ope.themeTests).reduce((s,b)=>s+b.length,0);assert.equal(totalQuestions,1406,'El banco real debe contener 1.406 preguntas');
const t30=norm(ope.themes.find(x=>Number(x.number)===30).sections.flatMap(s=>s.paragraphs).join(' '));assert.ok(t30.includes('no configuran una magnitud separada con ese nombre')||t30.includes('no tiene una base imponible autonoma'));
const t31=norm(ope.themes.find(x=>Number(x.number)===31).sections.flatMap(s=>s.paragraphs).join(' '));assert.ok(t31.includes('ley 59 2003 quedo derogada'));assert.ok(t31.includes('solo personas fisicas firman'));assert.ok(t31.includes('reglamento ue 2024 1183'));
const report={version:'v0.87.0',reviewedAt:'2026-07-14',status:failures.length?'REVISAR':'APTO',completedThemes:plain(programme.completedThemes),totalWords:metrics.reduce((s,x)=>s+x.words,0),minimumWords:Math.min(...metrics.map(x=>x.words)),canonicalQuestions:snapshot.totalQuestions,questions:totalQuestions,addedQuestions:reinforcement.totalAdded,themes:metrics,failures};
fs.writeFileSync(path.join(root,'diputacion-teoria-v87-bloque2.json'),JSON.stringify(report,null,2));assert.deepStrictEqual(failures,[],failures.join(' | '));
console.log(`Diputación v0.87 bloque 2 APTO · temas 29-31 · ${report.totalWords} palabras · mínimo ${report.minimumWords} · ${report.questions} preguntas`);
