const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const context = { globalThis: {} };
context.globalThis.globalThis = context.globalThis;
vm.createContext(context);
vm.runInContext(fs.readFileSync('data/oapgt-estatutos-v89.js', 'utf8'), context, { filename: 'data/oapgt-estatutos-v89.js' });

const evidence = context.globalThis.OPOWEB_OAPGT_ESTATUTOS_V89;
assert.ok(evidence, 'No se cargó la matriz documental OAPGT');
assert.equal(evidence.status, 'CADENA_HISTORICA_PARCIAL_LOCALIZADA_PENDIENTE_CIERRE_OFICIAL');
assert.equal(evidence.officialProgramme.theme, 22);
assert.ok(evidence.officialProgramme.literalRequirement.includes('Especial referencia a sus Estatutos'));
assert.equal(evidence.safeguards.allowedForTheory, false);
assert.equal(evidence.safeguards.allowedForQuestions, false);
assert.equal(evidence.safeguards.allowedForLiteralArticles, false);

const years = Array.from(evidence.locatedChain, item => item.year);
assert.deepStrictEqual(years, [1996, 1999, 2002, 2004, 2011]);
assert.ok(evidence.locatedChain.every(item => item.evidenceClass.includes('SECUNDARIA')));
assert.ok(evidence.locatedChain.some(item => item.verification.includes('INICIAL_NO_SUFICIENTE')));
assert.ok(evidence.locatedChain.some(item => item.verification.includes('CIERRE_DEFINITIVO_PENDIENTE')));
assert.equal(evidence.discardedLeads.length, 1);
assert.equal(evidence.discardedLeads[0].date, '2005-05-13');
assert.ok(evidence.discardedLeads[0].reason.includes('Consorcio de Servicios Públicos Medioambientales'));
assert.ok(evidence.discardedLeads[0].consequence.includes('No puede utilizarse'));
assert.equal(evidence.currentOfficialCorroboration.length, 3);
assert.ok(evidence.currentOfficialCorroboration.every(item => item.evidenceClass === 'PUBLICACION_OFICIAL_ACTUAL'));
assert.ok(evidence.missingEvidence.length >= 7);
assert.ok(evidence.missingEvidence.some(item => item.includes('2011')));
assert.ok(evidence.missingEvidence.some(item => item.includes('posteriores a 2011')));
assert.ok(evidence.missingEvidence.some(item => item.includes('artículo por artículo')));
assert.ok(evidence.conclusion.includes('no está demostrado'));
assert.ok(evidence.conclusion.includes('no debe generar teoría literal ni preguntas'));

const report = {
  status: 'RESERVA_DOCUMENTAL_CORRECTA',
  theme: evidence.officialProgramme.theme,
  chainYears: years,
  discardedLeads: evidence.discardedLeads.length,
  currentCorroborations: evidence.currentOfficialCorroboration.length,
  missingEvidence: evidence.missingEvidence.length,
  theoryEnabled: evidence.safeguards.allowedForTheory,
  questionsEnabled: evidence.safeguards.allowedForQuestions
};
fs.writeFileSync('oapgt-estatutos-v89.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
console.log('OAPGT v89.1 OK · falso positivo 2005 descartado y reserva mantenida');