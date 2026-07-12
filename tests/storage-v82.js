const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

class MemoryStorage {
  constructor() { this.map = new Map(); }
  getItem(key) { return this.map.has(key) ? this.map.get(key) : null; }
  setItem(key, value) { this.map.set(String(key), String(value)); }
  removeItem(key) { this.map.delete(String(key)); }
  clear() { this.map.clear(); }
}

function loadModule(storage = new MemoryStorage()) {
  const context = {
    window: {},
    localStorage: storage,
    Date,
    JSON,
    Math,
    Number,
    Object,
    Set,
    String,
    Error
  };
  context.window.window = context.window;
  vm.createContext(context);
  vm.runInContext(
    fs.readFileSync(path.join(process.cwd(), 'assets/js/storage-v82.js'), 'utf8'),
    context,
    { filename: 'storage-v82.js' }
  );
  return { storage, api: context.window.OPOWEB_STORAGE };
}

const legacy = {
  'uc3m-aux-admin-2026:test:uc3m-t1': {
    answers: { q1: 'A', q2: 'D' },
    corrected: true,
    score: { ok: 2, bad: 0, blank: 28, grade: 0.67 }
  }
};

{
  const { storage, api } = loadModule();
  storage.setItem(api.PRIMARY_KEY, JSON.stringify(legacy));
  const loaded = api.load();
  assert.deepStrictEqual(JSON.parse(JSON.stringify(loaded)), legacy, 'Debe leer el formato histórico sin envoltorio');
  assert.equal(api.status().meta.formatVersion, 2);
}

{
  const { storage, api } = loadModule();
  api.save(legacy);
  const second = {
    ...legacy,
    'carranque-aux-admin-2026:test:carranque-t1': {
      answers: { c1: 'B' },
      corrected: false,
      score: null
    }
  };
  api.save(second);
  const backup = JSON.parse(storage.getItem(api.BACKUP_KEY));
  assert.deepStrictEqual(backup, legacy, 'La copia debe conservar el estado anterior válido');
  assert.equal(api.status().backupPresent, true);
}

{
  const { storage, api } = loadModule();
  storage.setItem(api.BACKUP_KEY, JSON.stringify(legacy));
  storage.setItem(api.PRIMARY_KEY, '{contenido roto');
  const recovered = api.load();
  assert.deepStrictEqual(JSON.parse(JSON.stringify(recovered)), legacy, 'Debe recuperar la copia cuando el principal está corrupto');
  assert.equal(api.status().lastRecovery.recovered, true);
  assert.deepStrictEqual(JSON.parse(storage.getItem(api.PRIMARY_KEY)), legacy, 'Debe restaurar la clave principal');
}

{
  const { api } = loadModule();
  const payload = api.exportPayload(legacy);
  assert.equal(payload.format, 'opoweb-progress');
  assert.equal(payload.formatVersion, 2);
  assert.equal(payload.checksum, api.checksum(legacy));

  const imported = api.importText(JSON.stringify(payload), {});
  assert.deepStrictEqual(JSON.parse(JSON.stringify(imported)), legacy, 'Debe importar el formato v2');
}

{
  const { api } = loadModule();
  const dirty = {
    '__proto__': { poisoned: true },
    valid: {
      answers: { q1: 'A', q2: 'X', q3: 7 },
      corrected: true,
      score: { ok: 1, bad: 0, blank: 0, grade: 10 }
    },
    invalid: 'texto'
  };
  const clean = api.sanitizeProgress(dirty);
  assert.deepStrictEqual(JSON.parse(JSON.stringify(clean)), {
    valid: {
      answers: { q1: 'A' },
      corrected: true,
      score: { ok: 1, bad: 0, blank: 0, grade: 10 }
    }
  });
}

{
  const { api } = loadModule();
  const payload = api.exportPayload(legacy);
  payload.progress['uc3m-aux-admin-2026:test:uc3m-t1'].answers.q1 = 'B';
  assert.throws(
    () => api.importText(JSON.stringify(payload), {}),
    /suma de comprobación/,
    'Debe rechazar un archivo manipulado con checksum incorrecto'
  );
}

console.log('Almacenamiento v0.82 OK · legado, copia, recuperación, checksum e importación validados');
