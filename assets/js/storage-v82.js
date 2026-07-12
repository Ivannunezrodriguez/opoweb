(() => {
  const PRIMARY_KEY = 'opowebProgress';
  const BACKUP_KEY = 'opowebProgressBackup';
  const META_KEY = 'opowebProgressMeta';
  const FORMAT_VERSION = 2;
  const ANSWERS = new Set(['A', 'B', 'C', 'D']);
  let lastRecovery = null;

  const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);

  function sanitizeScore(value) {
    if (!isObject(value)) return null;
    const ok = Number(value.ok);
    const bad = Number(value.bad);
    const blank = Number(value.blank);
    const grade = Number(value.grade);
    if (![ok, bad, blank, grade].every(Number.isFinite)) return null;
    if (![ok, bad, blank].every(number => Number.isInteger(number) && number >= 0)) return null;
    if (grade < 0 || grade > 10) return null;
    return { ok, bad, blank, grade: Number(grade.toFixed(2)) };
  }

  function sanitizeEntry(value) {
    if (!isObject(value)) return null;
    const answers = {};
    if (isObject(value.answers)) {
      for (const [questionId, answer] of Object.entries(value.answers)) {
        if (!questionId || !ANSWERS.has(String(answer))) continue;
        answers[String(questionId)] = String(answer);
      }
    }
    const corrected = value.corrected === true;
    const score = sanitizeScore(value.score);
    return { answers, corrected, score: corrected ? score : null };
  }

  function sanitizeProgress(value) {
    if (!isObject(value)) throw new Error('El progreso debe ser un objeto.');
    const clean = {};
    for (const [key, entry] of Object.entries(value)) {
      if (!key || key === '__proto__' || key === 'prototype' || key === 'constructor') continue;
      const sanitized = sanitizeEntry(entry);
      if (sanitized) clean[String(key)] = sanitized;
    }
    return clean;
  }

  function unwrap(value) {
    if (isObject(value) && isObject(value.progress)) return value.progress;
    return value;
  }

  function parse(text) {
    if (!text) return {};
    return sanitizeProgress(unwrap(JSON.parse(text)));
  }

  function stableStringify(value) {
    const keys = Object.keys(value).sort();
    const ordered = {};
    for (const key of keys) ordered[key] = value[key];
    return JSON.stringify(ordered);
  }

  function checksum(value) {
    const text = stableStringify(value);
    let hash = 2166136261;
    for (let index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return `fnv1a-${(hash >>> 0).toString(16).padStart(8, '0')}`;
  }

  function metadata(progress) {
    return {
      formatVersion: FORMAT_VERSION,
      savedAt: new Date().toISOString(),
      entries: Object.keys(progress).length,
      checksum: checksum(progress)
    };
  }

  function store(key, progress) {
    localStorage.setItem(key, JSON.stringify(progress));
  }

  function validStored(key) {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try { return parse(raw); } catch (_) { return null; }
  }

  function load() {
    lastRecovery = null;
    const primaryRaw = localStorage.getItem(PRIMARY_KEY);
    if (!primaryRaw) return {};
    try {
      const progress = parse(primaryRaw);
      localStorage.setItem(META_KEY, JSON.stringify(metadata(progress)));
      return progress;
    } catch (error) {
      const backup = validStored(BACKUP_KEY);
      if (backup) {
        store(PRIMARY_KEY, backup);
        localStorage.setItem(META_KEY, JSON.stringify(metadata(backup)));
        lastRecovery = {
          recovered: true,
          at: new Date().toISOString(),
          reason: error.message || 'Progreso principal no válido.'
        };
        return backup;
      }
      lastRecovery = {
        recovered: false,
        at: new Date().toISOString(),
        reason: error.message || 'No existe una copia recuperable.'
      };
      return {};
    }
  }

  function backup(progress) {
    const clean = sanitizeProgress(progress);
    store(BACKUP_KEY, clean);
    return clean;
  }

  function save(progress, options = {}) {
    const clean = sanitizeProgress(progress);
    if (options.backup !== false) {
      const previous = validStored(PRIMARY_KEY);
      if (previous) store(BACKUP_KEY, previous);
    }
    store(PRIMARY_KEY, clean);
    localStorage.setItem(META_KEY, JSON.stringify(metadata(clean)));
    return clean;
  }

  function exportPayload(progress) {
    const clean = sanitizeProgress(progress);
    return {
      format: 'opoweb-progress',
      formatVersion: FORMAT_VERSION,
      exportedAt: new Date().toISOString(),
      applicationVersion: 'v0.82.0',
      checksum: checksum(clean),
      progress: clean
    };
  }

  function importText(text, currentProgress = {}) {
    const parsed = JSON.parse(text);
    const clean = sanitizeProgress(unwrap(parsed));
    if (isObject(parsed) && parsed.checksum && parsed.checksum !== checksum(clean)) {
      throw new Error('La suma de comprobación del archivo no coincide.');
    }
    backup(currentProgress);
    save(clean, { backup: false });
    return clean;
  }

  function status() {
    let meta = null;
    try { meta = JSON.parse(localStorage.getItem(META_KEY) || 'null'); } catch (_) { meta = null; }
    return {
      formatVersion: FORMAT_VERSION,
      primaryPresent: Boolean(localStorage.getItem(PRIMARY_KEY)),
      backupPresent: Boolean(validStored(BACKUP_KEY)),
      meta,
      lastRecovery
    };
  }

  window.OPOWEB_STORAGE = {
    PRIMARY_KEY,
    BACKUP_KEY,
    META_KEY,
    FORMAT_VERSION,
    sanitizeProgress,
    checksum,
    load,
    save,
    backup,
    exportPayload,
    importText,
    status
  };
})();
