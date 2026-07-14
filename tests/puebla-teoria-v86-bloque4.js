const { auditBlock } = require('./puebla-teoria-v86-audit-lib');

const report = auditBlock({
  blockNumber: 4,
  themeNumbers: [16, 17, 18, 19],
  expectedCompleted: Array.from({ length: 19 }, (_, index) => index + 1),
  outputFile: 'puebla-teoria-v86-bloque4.json'
});

console.log(`La Puebla teoría v0.86 bloque 4 APTO · ${report.totalWords} palabras · mínimo ${report.minimumWords}`);
