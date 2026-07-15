const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const window = {};
const context = { window, console, Object, Array, String, Boolean, JSON };
vm.createContext(context);
vm.runInContext(fs.readFileSync('data/oapgt-fuentes-v87.js', 'utf8'), context, { filename: 'data/oapgt-fuentes-v87.js' });

const audit = window.OPOWEB_OAPGT_FUENTES_V87;
assert.ok(audit, 'No se ha cargado el control de fuentes del OAPGT');
assert.equal(audit.version, 'v0.87.0');
assert.equal(audit.reviewedAt, '2026-07-14');
assert.equal(audit.entity.officialName, 'Organismo Autónomo Provincial de Gestión Tributaria de Toledo');
assert.equal(audit.entity.nif, 'P9500003J');
assert.ok(audit.verifiedOfficialSources.length >= 4, 'Faltan fuentes institucionales verificadas');
assert.ok(audit.verifiedOfficialSources.some(item => item.type === 'official-electronic-office'));
assert.ok(audit.verifiedOfficialSources.filter(item => item.type === 'official-gazette').length >= 2);

assert.equal(audit.statutes.status, 'PENDIENTE_TEXTO_OFICIAL_VIGENTE');
assert.equal(audit.statutes.consolidatedOfficialTextLocated, false);
assert.equal(audit.statutes.latestOfficialApprovalLocated, false);
assert.equal(audit.statutes.amendmentChainVerified, false);
assert.equal(audit.statutes.allowedForTheory, false);
assert.equal(audit.statutes.allowedForQuestions, false);
assert.match(audit.statutes.rule, /No incorporar contenido estatutario/);
assert.equal(audit.nextRequiredEvidence.length, 4);

const source = fs.readFileSync('data/oapgt-fuentes-v87.js', 'utf8');
for (const prohibited of [
  'numeroDeMiembrosConsejoRector',
  'competenciasDelPresidente',
  'competenciasDelDirector',
  'duracionDelMandato',
  'quorumEstatutario'
]) assert.ok(!source.includes(prohibited), `Se ha introducido contenido estatutario no verificado: ${prohibited}`);

fs.writeFileSync('oapgt-fuentes-v87.json', JSON.stringify({
  version: audit.version,
  reviewedAt: audit.reviewedAt,
  status: 'BLOQUEADO_HASTA_FUENTE_OFICIAL',
  verifiedOfficialSources: audit.verifiedOfficialSources.length,
  statutes: audit.statutes,
  nextRequiredEvidence: audit.nextRequiredEvidence
}, null, 2));

console.log(`OAPGT v0.87 · bloqueo editorial correcto · ${audit.verifiedOfficialSources.length} fuentes oficiales verificadas`);
