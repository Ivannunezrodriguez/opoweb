const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const context = { globalThis: {} };
context.globalThis.globalThis = context.globalThis;
vm.createContext(context);
vm.runInContext(fs.readFileSync('data/oapgt-estatutos-v89.js', 'utf8'), context, { filename: 'data/oapgt-estatutos-v89.js' });

const evidence = context.globalThis.OPOWEB_OAPGT_ESTATUTOS_V89;
assert.ok(evidence, 'No se cargó la matriz documental OAPGT');
assert.equal(evidence.status, 'CADENA_HISTORICA_LOCALIZADA_PENDIENTE_CONSOLIDACION_OFICIAL');
assert.equal(evidence.officialProgramme.theme, 22);
assert.ok(evidence.officialProgramme.literalRequirement.includes('Especial referencia a sus Estatutos'));
assert.equal(evidence.safeguards.allowedForTheory, false);
assert.equal(evidence.safeguards.allowedForQuestions, false);
assert.equal(evidence.safeguards.allowedForLiteralArticles, false);

const years = Array.from(evidence.locatedChain, item => item.year);
assert.deepStrictEqual(years, [1996, 1999, 2002, 2004, 2005, 2011]);
assert.ok(evidence.locatedChain.every(item => item.evidenceClass.includes('SECUNDARIA')));
assert.ok(evidence.locatedChain.some(item => item.verification.includes('INICIAL_NO_SUFICIENTE')));
assert.ok(evidence.locatedChain.some(item => item.verification.includes('PUBLICACION_INTEGRA_PENDIENTE')));
assert.equal(evidence.currentOfficialCorroboration.length, 2);
assert.ok(evidence.currentOfficialCorroboration.every(item => item.evidenceClass === 'PUBLICACION_OFICIAL_ACTUAL'));
assert.ok(evidence.missingEvidence.length >= 6);
assert.ok(evidence.missingEvidence.some(item => item.includes('2011')));
assert.ok(evidence.missingEvidence.some(item => item.includes('posteriores a 2011')));
assert.ok(evidence.missingEvidence.some(item => item.includes('artículo por artículo')));
assert.ok(evidence.conclusion.includes('no está demostrado'));
assert.ok(evidence.conclusion.includes('no debe generar teoría literal ni preguntas'));

const report = {
  status: 'RESERVA_DOCUMENTAL_CORRECTA',
  theme: evidence.officialProgramme.theme,
  chainYears: years,
  currentCorroborations: evidence.currentOfficialCorroboration.length,
  missingEvidence: evidence.missingEvidence.length,
  theoryEnabled: evidence.safeguards.allowedForTheory,
  questionsEnabled: evidence.safeguards.allowedForQuestions
};
fs.writeFileSync('oapgt-estatutos-v89.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report));
console.log('OAPGT v89 OK · cadena localizada con bloqueo de teoría y preguntas');