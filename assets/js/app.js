const APP_VERSION = 'v0.27.0';

const SOURCE_LABELS = {
  constitucion: 'Constitución Española de 1978',
  ley39: 'Ley 39/2015 · Procedimiento Administrativo Común',
  ley40: 'Ley 40/2015 · Régimen Jurídico del Sector Público',
  regimenLocal: 'Ley 7/1985 · Régimen Local',
  haciendaLocal: 'TRLRHL · Hacienda Local',
  contratosPublicos: 'Ley 9/2017 · Contratos del Sector Público',
  empleoPublico: 'TREBEP · Empleo Público',
  transversales: 'Igualdad · Datos · Transparencia · PRL',
  informatica: 'Informática y ofimática'
};

const state = {
  data: window.OPOSICIONES_DATA,
  activeOpe: null,
  view: 'temario',
  search: '',
  selectedTheme: null,
  selectedTestTheme: null,
  selectedSim: null,
  progress: loadProgress()
};

const $ = (id) => document.getElementById(id);
const content = $('content');

function loadProgress(){
  try { return JSON.parse(localStorage.getItem('opowebProgress') || '{}'); }
  catch { return {}; }
}
function saveProgress(){ localStorage.setItem('opowebProgress', JSON.stringify(state.progress)); }
function active(){ return state.data.oposiciones.find(o => o.id === state.activeOpe) || state.data.oposiciones[0]; }
function progressKey(...parts){ return [state.activeOpe, ...parts].join(':'); }
function escapeHtml(text){ return String(text ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
function escapeAttr(text){ return escapeHtml(text).replace(/`/g, '&#096;'); }
function setTitle(title, subtitle='') { $('viewTitle').textContent = title; $('viewSubtitle').textContent = subtitle || 'Estudia, haz test y guarda tu progreso.'; }
function sourceLabel(id){ return SOURCE_LABELS[id] || id || 'Temario base'; }
function themeMode(t){ return t.modularSource ? 'Examen + supuesto práctico' : 'Temario base'; }
function themeSourceBadge(t){ return t.modularSource ? `<span class="badge common">${escapeHtml(sourceLabel(t.modularSource))}</span>` : ''; }

function init(){
  if(!state.data || !state.data.oposiciones?.length){
    content.innerHTML = '<div class="card">No hay datos cargados.</div>';
    return;
  }
  state.activeOpe = state.data.oposiciones[0].id;
  const sel = $('oposicionSelect');
  sel.innerHTML = state.data.oposiciones.map(o => `<option value="${o.id}">${escapeHtml(o.name)}</option>`).join('');
  sel.addEventListener('change', () => { state.activeOpe = sel.value; state.selectedTheme=null; state.selectedTestTheme=null; state.selectedSim=null; renderAll(); });

  document.querySelectorAll('.menu button').forEach(btn => btn.addEventListener('click', () => {
    state.view = btn.dataset.view;
    state.selectedTheme = null;
    renderAll();
  }));

  $('searchInput').addEventListener('input', e => { state.search = e.target.value.trim().toLowerCase(); renderView(); });
  $('exportProgress').addEventListener('click', exportProgress);
  $('importProgress').addEventListener('change', importProgress);
  $('openSidebar').addEventListener('click', () => $('sidebar').classList.add('open'));
  $('closeSidebar').addEventListener('click', () => $('sidebar').classList.remove('open'));
  renderAll();
}

function renderAll(){
  renderSidebar();
  document.querySelectorAll('.menu button').forEach(b => b.classList.toggle('active', b.dataset.view === state.view));
  renderView();
}
function renderSidebar(){
  const o=active();
  const links = (o.officialLinks || []).slice(0,2).map(l => `<p><a href="${escapeAttr(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a></p>`).join('');
  $('oposicionCard').innerHTML = `<h2>${escapeHtml(o.shortName)}</h2><p><strong>${escapeHtml(o.places)}</strong></p><p>${escapeHtml(o.exam)}</p><p>${escapeHtml(o.status)}</p>${links}<p class="muted"><strong>Versión OpoWeb ${APP_VERSION}</strong><br>Si no ves esta versión, recarga o borra caché de la PWA.</p>`;
}
function renderView(){
  if(state.view==='proceso') return renderProceso();
  if(state.view==='temario') return renderTemario();
  if(state.view==='tests') return renderTests();
  if(state.view==='supuestos') return renderSupuestos();
  if(state.view==='simulacros') return renderSimulacros();
  if(state.view==='progreso') return renderProgreso();
}
function filterThemes(themes){
  if(!state.search) return themes;
  return themes.filter(t => (t.title+' '+t.area+' '+(t.modularSource || '')+' '+(t.sections || []).flatMap(s=>s.paragraphs || []).join(' ')).toLowerCase().includes(state.search));
}

function renderProceso(){
  const o=active();
  setTitle('Proceso y enlaces', 'Enlaces oficiales, calendario del proceso y próximos hitos pendientes.');
  const links = (o.officialLinks || []).map(l => `<a class="btn ghost" href="${escapeAttr(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`).join('');
  const rows = (o.processCalendar || []).map(item => `<tr><td>${escapeHtml(item.date)}</td><td><strong>${escapeHtml(item.title)}</strong><br><span class="muted">${escapeHtml(item.note)}</span></td><td><span class="badge ${item.status === 'pendiente' ? '' : 'common'}">${escapeHtml(item.status)}</span></td></tr>`).join('');
  content.innerHTML = `
    <div class="card"><h2>${escapeHtml(o.name)}</h2><p>${escapeHtml(o.status)}</p><div class="toolbar">${links}</div></div>
    <div class="card"><h2>Calendario del proceso</h2><div class="table-wrap"><table><thead><tr><th>Fecha</th><th>Hito</th><th>Estado</th></tr></thead><tbody>${rows}</tbody></table></div><p class="muted">Las fechas pendientes se completarán cuando se publiquen oficialmente en sede, web municipal, BOP o BOE.</p></div>
    <div class="card"><h2>Seguimiento</h2><p>Comprueba especialmente la sede y la página municipal de empleo. Los anuncios relevantes suelen ser listas de admitidos/excluidos, plazo de subsanación, tribunal, fecha de examen, plantilla, notas y bolsa.</p></div>`;
}

function renderTemario(){
  const o=active();
  setTitle('Temario', `${o.themes.length} temas oficiales. Contenido ajustado al enunciado de la convocatoria.`);
  const themes=filterThemes(o.themes);
  if(state.selectedTheme){
    const t=o.themes.find(x=>x.id===state.selectedTheme);
    if(!t){state.selectedTheme=null; return renderTemario();}
    content.innerHTML = themeDetail(t);
    $('backThemes').addEventListener('click',()=>{state.selectedTheme=null; renderTemario();});
    return;
  }
  content.innerHTML = `
    <div class="card">
      <h2>Vista rápida</h2>
      <div class="grid three">
        <div><span class="score">${o.themes.length}</span><p class="muted">temas oficiales</p></div>
        <div><span class="score">${Object.values(o.themeTests).reduce((a,b)=>a+b.length,0)}</span><p class="muted">preguntas por tema</p></div>
        <div><span class="score">${o.practicalCases.length}</span><p class="muted">supuestos prácticos</p></div>
      </div>
    </div>
    <div class="theme-list">${themes.map(t => themeItem(t)).join('') || '<div class="empty">No hay temas con esa búsqueda.</div>'}</div>`;
  document.querySelectorAll('[data-theme]').forEach(el => el.addEventListener('click', () => { state.selectedTheme=el.dataset.theme; renderTemario(); }));
}
function themeItem(t){
  const academia = t.academiaVersion ? '<span class="badge common">academia</span>' : '';
  const source = themeSourceBadge(t);
  return `<article class="theme-item" data-theme="${t.id}"><h3>Tema ${t.number}. ${escapeHtml(t.title)}</h3><div class="theme-meta"><span class="badge area">${escapeHtml(t.area)}</span>${t.commonPotential?'<span class="badge common">común/reutilizable</span>':''}${source}${academia}</div></article>`;
}
function sourcePanel(t){
  if(!t.modularSource) return '<div class="card compact"><strong>Fuente</strong><p class="muted">Temario base de la convocatoria. Este tema aún no está enlazado a una norma modular específica.</p></div>';
  return `<div class="card compact"><h3>Fuente modular</h3><div class="grid three"><div><span class="badge common">${escapeHtml(sourceLabel(t.modularSource))}</span><p class="muted">Norma/bloque principal</p></div><div><span class="badge area">${escapeHtml(themeMode(t))}</span><p class="muted">Enfoque de estudio</p></div><div><span class="badge">${escapeHtml(t.testHint || 'Motor temario')}</span><p class="muted">Generación de test</p></div></div></div>`;
}
function themeDetail(t){
  return `<button class="btn ghost" id="backThemes">← Volver al listado</button>
  ${sourcePanel(t)}
  <article class="card"><div class="pill-row"><span class="badge area">${escapeHtml(t.area)}</span>${t.commonPotential?'<span class="badge common">común/reutilizable</span>':''}${themeSourceBadge(t)}${t.academiaVersion?'<span class="badge common">resumen academia</span>':''}</div><h2>Tema ${t.number}. ${escapeHtml(t.title)}</h2>
  ${(t.sections || []).map(s=>`<section class="section"><h3>${escapeHtml(s.heading)}</h3>${(s.paragraphs || []).map(p=>s.heading.includes('Trampas')?`<p>☐ ${escapeHtml(p)}</p>`:`<p>${escapeHtml(p)}</p>`).join('')}</section>`).join('')}
  <h3>Esquema oficial</h3><pre class="tree">${escapeHtml(t.tree || 'Sin esquema.')}</pre>
  <h3>Tabla de repaso</h3>${renderTable(t.reviewTable)}
  </article>`;
}
function renderTable(rows){
  if(!rows || !rows.length) return '<p class="muted">Sin tabla.</p>';
  const [head,...body]=rows;
  return `<div class="table-wrap"><table><thead><tr>${head.map(c=>`<th>${escapeHtml(c)}</th>`).join('')}</tr></thead><tbody>${body.map(r=>`<tr>${r.map(c=>`<td>${escapeHtml(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function renderTests(){
  const o=active();
  setTitle('Test por temas', 'Elige un tema, responde y pulsa corregir para ver nota y justificación.');
  const selected = state.selectedTestTheme || o.themes[0].id;
  state.selectedTestTheme = selected;
  const qs = o.themeTests[selected] || [];
  content.innerHTML = `<div class="card compact toolbar"><label>Tema <select id="testTheme" class="select" style="max-width:680px">${o.themes.map(t=>`<option value="${t.id}" ${t.id===selected?'selected':''}>Tema ${t.number}. ${escapeHtml(t.title)}</option>`).join('')}</select></label></div>
  ${renderQuestionSet('test', selected, qs, o.scoring)}`;
  $('testTheme').addEventListener('change', e=>{state.selectedTestTheme=e.target.value; renderTests();});
  attachQuestionEvents('test', selected, qs, o.scoring);
}
function renderQuestionSet(kind, setId, qs, scoring){
  const key=progressKey(kind,setId);
  const saved=state.progress[key] || {answers:{}, corrected:false};
  if(!qs.length) return '<div class="card"><p class="muted">Este bloque todavía no tiene preguntas generadas.</p></div>';
  return `<div class="card"><div class="toolbar"><button class="btn" id="correctSet">Corregir</button><button class="btn ghost" id="resetSet">Reiniciar</button><span id="scoreBox" class="score"></span></div><div>${qs.map((q,idx)=>renderQuestion(q,idx,saved)).join('')}</div></div>`;
}
function renderQuestion(q,idx,saved){
  const chosen=saved.answers?.[q.id] || '';
  const corrected=!!saved.corrected;
  return `<section class="question" data-qid="${q.id}"><h3>${idx+1}. ${escapeHtml(q.text)}</h3>${q.options.map(o=>{
    let cls='option';
    if(corrected && o.letter===q.answer) cls+=' correct';
    if(corrected && chosen===o.letter && chosen!==q.answer) cls+=' wrong';
    return `<label class="${cls}"><input type="radio" name="${q.id}" value="${o.letter}" ${chosen===o.letter?'checked':''}> <span><strong>${o.letter})</strong> ${escapeHtml(o.text)}</span></label>`;
  }).join('')}${corrected ? resultHtml(q, chosen) : ''}</section>`;
}
function resultHtml(q, chosen){
  if(!chosen) return `<div class="result-box blank"><strong>En blanco.</strong> Correcta: ${q.answer}. ${escapeHtml(q.justification)}</div>`;
  if(chosen===q.answer) return `<div class="result-box good"><strong>Correcta.</strong> ${escapeHtml(q.justification)}</div>`;
  return `<div class="result-box bad"><strong>Incorrecta.</strong> Correcta: ${q.answer}. ${escapeHtml(q.justification)}</div>`;
}
function attachQuestionEvents(kind,setId,qs,scoring){
  if(!qs.length) return;
  const key=progressKey(kind,setId);
  state.progress[key] ||= {answers:{}, corrected:false, score:null};
  document.querySelectorAll('input[type=radio]').forEach(r => r.addEventListener('change', e=>{
    state.progress[key].answers[e.target.name]=e.target.value;
    state.progress[key].corrected=false;
    saveProgress();
  }));
  $('correctSet').addEventListener('click',()=>{
    const saved=state.progress[key];
    const res=calculate(qs, saved.answers, scoring);
    saved.corrected=true; saved.score=res; saveProgress();
    if(kind==='test') renderTests(); else renderSimulacros();
    const box=$('scoreBox'); if(box) box.textContent=formatScore(res);
  });
  $('resetSet').addEventListener('click',()=>{ delete state.progress[key]; saveProgress(); if(kind==='test') renderTests(); else renderSimulacros(); });
  if(state.progress[key]?.score){ const box=$('scoreBox'); if(box) box.textContent=formatScore(state.progress[key].score); }
}
function calculate(qs, answers, scoring){
  let ok=0,bad=0,blank=0;
  qs.forEach(q=>{ const a=answers[q.id]; if(!a) blank++; else if(a===q.answer) ok++; else bad++; });
  const raw = ok*scoring.correct + bad*scoring.wrong;
  const max = qs.length*scoring.correct;
  const grade = Math.max(0, raw / max * 10);
  return {ok,bad,blank,grade: Number(grade.toFixed(2))};
}
function formatScore(r){ return `Aciertos: ${r.ok} · Fallos: ${r.bad} · Blancas: ${r.blank} · Nota: ${r.grade}/10`; }

function renderSupuestos(){
  const o=active();
  setTitle('Supuestos prácticos', 'Escribe tu respuesta y después muestra la solución orientativa.');
  content.innerHTML = o.practicalCases.map((c,i)=>`<article class="card"><h2>Supuesto ${i+1}. ${escapeHtml(c.title)}</h2><p>${escapeHtml(c.statement)}</p><textarea class="textarea" placeholder="Escribe aquí tu respuesta..."></textarea><div class="toolbar" style="margin-top:12px"><button class="btn ghost show-solution" data-case="${c.id}">Mostrar solución</button></div><div class="case-solution" id="sol-${c.id}"><strong>Solución orientativa</strong><p>${escapeHtml(c.guidance)}</p></div></article>`).join('');
  document.querySelectorAll('.show-solution').forEach(b=>b.addEventListener('click',()=> $('sol-'+b.dataset.case).classList.toggle('open')));
}
function renderSimulacros(){
  const o=active();
  setTitle('Simulacros transversales', 'Simulacros de 50 preguntas mezclando todo el temario.');
  const selected = state.selectedSim || o.simulacros[0].id;
  state.selectedSim = selected;
  const sim = o.simulacros.find(s=>s.id===selected);
  content.innerHTML = `<div class="card compact toolbar"><label>Simulacro <select id="simSelect" class="select" style="max-width:520px">${o.simulacros.map(s=>`<option value="${s.id}" ${s.id===selected?'selected':''}>${escapeHtml(s.title)}</option>`).join('')}</select></label></div>${renderQuestionSet('sim', selected, sim.questions, o.scoring)}`;
  $('simSelect').addEventListener('change', e=>{state.selectedSim=e.target.value; renderSimulacros();});
  attachQuestionEvents('sim', selected, sim.questions, o.scoring);
}
function renderProgreso(){
  const o=active();
  setTitle('Progreso', 'Resultados guardados en este navegador.');
  const keys=Object.keys(state.progress).filter(k=>k.startsWith(state.activeOpe+':'));
  const done=keys.filter(k=>state.progress[k]?.corrected).length;
  const total=o.themes.length + o.simulacros.length;
  const pct=Math.min(100, Math.round(done/Math.max(total,1)*100));
  content.innerHTML = `<div class="card"><h2>Resumen</h2><div class="progress-bar"><span style="width:${pct}%"></span></div><p><strong>${pct}%</strong> de bloques corregidos al menos una vez.</p><p class="muted">Versión OpoWeb ${APP_VERSION}</p></div><div class="card"><h2>Resultados</h2>${keys.length?keys.map(k=>`<p><strong>${escapeHtml(k.replace(state.activeOpe+':',''))}</strong>: ${state.progress[k].score?formatScore(state.progress[k].score):'sin corregir'}</p>`).join(''):'<p class="muted">Todavía no hay progreso guardado.</p>'}</div>`;
}
function exportProgress(){
  const blob = new Blob([JSON.stringify(state.progress,null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download='opoweb-progreso.json'; a.click(); URL.revokeObjectURL(url);
}
function importProgress(e){
  const file=e.target.files[0]; if(!file) return;
  const reader=new FileReader();
  reader.onload=()=>{ try{ state.progress=JSON.parse(reader.result); saveProgress(); renderAll(); alert('Progreso importado.'); } catch { alert('Archivo no válido.'); } };
  reader.readAsText(file);
}

init();
