const fs = require('fs');
const vm = require('vm');

const window = {};
window.window = window;
const context = { window, console, Set, Map, Array, Object, String, Number, Boolean, Math, Date, JSON, URL };
const run = file => vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const words = value => normalize(value).split(/\s+/).filter(Boolean).length;

run('data/oposiciones.js');
run('data/proceso.js');
run('data/uc3m.js');
run('data/ope-audit-v41.js');
for (let version = 43; version <= 65; version += 1) run(`assets/js/diputacion-v${version}.js`);
run('assets/js/uc3m-v66.js');
run('assets/js/uc3m-v67.js');
run('assets/js/puebla-v68.js');
run('assets/js/carranque-v69.js');
run('assets/js/carranque-v69-fix.js');
run('assets/js/carranque-v70.js');
run('assets/js/practicos-v71.js');
run('assets/js/uc3m-v72-clean.js');
run('assets/js/uc3m-v73-transparencia.js');
run('assets/js/uc3m-v73-fix.js');
run('assets/js/uc3m-v74-losu.js');
run('assets/js/uc3m-v75-estatutos.js');
run('assets/js/uc3m-v76-academica-admision.js');
run('assets/js/uc3m-v77-normativa-interna.js');
run('assets/js/uc3m-v78-presupuesto-2026.js');
run('assets/js/uc3m-v79-contratacion-interna.js');
run('assets/js/uc3m-v80-cierre-calidad.js');
run('assets/js/municipales-v84-cierre.js');
run('assets/js/municipales-v84-fix.js');
run('assets/js/carranque-teoria-v85-bloque1.js');
run('assets/js/carranque-teoria-v85-estructura.js');
run('assets/js/carranque-teoria-v85-bloque2.js');
run('assets/js/carranque-teoria-v85-bloque3.js');
run('assets/js/carranque-teoria-v85-bloque4.js');

const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'carranque-aux-admin-2026');
const metrics = ope.themes.map(theme => {
  const headings = (theme.sections || []).map(section => section.heading);
  const text = `${(theme.sections || []).flatMap(section => [section.heading, ...(section.paragraphs || [])]).join(' ')} ${theme.tree || ''} ${(theme.reviewTable || []).flat().join(' ')}`;
  return {
    number: Number(theme.number),
    words: words(text),
    sections: (theme.sections || []).length,
    paragraphs: (theme.sections || []).reduce((sum, section) => sum + (section.paragraphs || []).length, 0),
    treeWords: words(theme.tree || ''),
    reviewRows: (theme.reviewTable || []).length,
    sources: (theme.officialSources || []).length,
    articleBlocks: (theme.articleCoverage || []).length,
    retention: (theme.retentionQuestions || []).length,
    questions: (ope.themeTests?.[theme.id] || []).length,
    headings,
    autonomous: theme.theoryStatus?.autonomous === true,
    reviewedAt: theme.theoryStatus?.reviewedAt || null
  };
});

const report = {
  version: 'v0.85.0',
  completedThemes: ope.theoryProgramme?.v85?.completedThemes || [],
  pendingThemes: ope.theoryProgramme?.v85?.pendingThemes || [],
  totals: {
    words: metrics.reduce((sum, item) => sum + item.words, 0),
    minimumWords: Math.min(...metrics.map(item => item.words)),
    autonomous: metrics.filter(item => item.autonomous).length
  },
  blocks: {
    one: metrics.filter(item => item.number <= 5),
    two: metrics.filter(item => item.number >= 6 && item.number <= 10),
    three: metrics.filter(item => item.number >= 11 && item.number <= 15),
    four: metrics.filter(item => item.number >= 16)
  }
};
for (const block of Object.values(report.blocks)) {
  block.totalWords = block.reduce((sum, item) => sum + item.words, 0);
  block.minimumWords = Math.min(...block.map(item => item.words));
}
fs.writeFileSync('carranque-v85-diagnostico.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
