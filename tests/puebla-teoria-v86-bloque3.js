const { auditBlock } = require('./puebla-teoria-v86-audit-lib');

const report = auditBlock({
  blockNumber: 3,
  themeNumbers: [11, 12, 13, 14, 15],
  expectedCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  outputFile: 'puebla-teoria-v86-bloque3.json'
});

console.log(`La Puebla teoría v0.86 bloque 3 APTO · ${report.totalWords} palabras · mínimo ${report.minimumWords}`);
