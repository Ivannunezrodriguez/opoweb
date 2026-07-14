const { auditBlock } = require('./puebla-teoria-v86-audit-lib');

const report = auditBlock({
  blockNumber: 1,
  themeNumbers: [1, 2, 3, 4, 5],
  expectedCompleted: [1, 2, 3, 4, 5],
  outputFile: 'puebla-teoria-v86-bloque1.json'
});

console.log(`La Puebla teoría v0.86 bloque 1 APTO · ${report.totalWords} palabras · mínimo ${report.minimumWords}`);
