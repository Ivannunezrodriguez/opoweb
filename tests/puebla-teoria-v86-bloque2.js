const { auditBlock } = require('./puebla-teoria-v86-audit-lib');

const report = auditBlock({
  blockNumber: 2,
  themeNumbers: [6, 7, 8, 9, 10],
  expectedCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  outputFile: 'puebla-teoria-v86-bloque2.json'
});

console.log(`La Puebla teoría v0.86 bloque 2 APTO · ${report.totalWords} palabras · mínimo ${report.minimumWords}`);
