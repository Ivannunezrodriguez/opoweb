const assert = require('assert');
const { loadApplication } = require('./puebla-teoria-v86-audit-lib');

const number = Number(process.env.PUEBLA_THEME);
assert.ok(Number.isInteger(number) && number >= 1 && number <= 19, 'PUEBLA_THEME debe estar entre 1 y 19');

const window = loadApplication(4);
const ope = window.OPOSICIONES_DATA.oposiciones.find(item => item.id === 'puebla-aux-admin-2026');
const theme = ope.themes.find(item => Number(item.number) === number);
assert.ok(theme, `No existe el tema ${number}`);
const bank = ope.themeTests[theme.id] || [];
assert.equal(bank.length, 30, `Tema ${number}: banco de ${bank.length}`);
assert.equal(new Set(bank.map(question => question.id)).size, 30, `Tema ${number}: identificadores duplicados`);
assert.equal(new Set(bank.map(question => question.text.trim().toLowerCase())).size, 30, `Tema ${number}: enunciados duplicados`);
assert.ok(bank.every(question => Array.isArray(question.options) && question.options.length === 4));
assert.ok(bank.every(question => new Set(question.options.map(option => option.text.trim().toLowerCase())).size === 4));
assert.ok(bank.every(question => question.options.some(option => option.letter === question.answer)));
assert.ok(bank.every(question => question.justification || question.source));
assert.equal(theme.theoryStatus?.autonomous, true);
assert.equal(theme.theoryStatus?.version, 'v0.86.0');
console.log(`La Puebla tema ${number} OK · 30 preguntas · teoría autosuficiente`);
