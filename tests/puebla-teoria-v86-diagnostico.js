const fs = require('fs');
const { loadApplication, metric } = require('./puebla-teoria-v86-audit-lib');

const window = loadApplication(4);
const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
const themes = ope.themes.map(theme => {
  const result = metric(ope, theme);
  return {
    number: result.number,
    words: result.words,
    sections: result.sections,
    paragraphs: result.paragraphs,
    sources: result.sources.map(source => source.reference),
    articleBlocks: result.articleBlocks,
    retention: result.retention,
    reviewRows: result.reviewRows,
    treeWords: result.treeWords,
    questions: result.questions,
    literalTitleMatch: result.literalTitleMatch,
    autonomous: result.status.autonomous,
    articleByArticle: result.status.articleByArticle
  };
});
const report = {
  version: 'v0.86.0',
  completedThemes: ope.theoryProgramme.v86.completedThemes,
  pendingThemes: ope.theoryProgramme.v86.pendingThemes,
  totalWords: themes.reduce((sum, item) => sum + item.words, 0),
  minimumWords: Math.min(...themes.map(item => item.words)),
  themes
};
fs.writeFileSync('puebla-teoria-v86-diagnostico.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
