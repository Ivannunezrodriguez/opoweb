(() => {
  const VERSION = 'v0.41.0';

  function patchVersion() {
    const card = document.getElementById('oposicionCard');
    if (card) card.innerHTML = card.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
    const main = document.getElementById('content');
    if (main) main.innerHTML = main.innerHTML.replace(/Versión OpoWeb v[0-9.]+/g, `Versión OpoWeb ${VERSION}`);
  }

  function levelClass(level) {
    return level === 'avance alto' ? 'common' : level === 'revisión prioritaria' ? '' : 'area';
  }

  function auditCard(ope) {
    const audit = ope?.audit;
    if (!audit) return '';
    const needs = (audit.needs || []).map(item => `<li>${escapeHtml(item)}</li>`).join('');
    return `<article class="card" id="opeAuditCard">
      <div class="pill-row"><span class="badge ${levelClass(audit.level)}">${escapeHtml(audit.level)}</span><span class="badge">Auditoría OpoWeb v0.41</span></div>
      <h2>Auditoría de esta OPE</h2>
      <p>${escapeHtml(audit.summary)}</p>
      <p><strong>Estado cargado:</strong> ${escapeHtml(audit.current)}</p>
      <h3>Cambios necesarios</h3>
      <ol>${needs}</ol>
    </article>`;
  }

  function globalAuditCard() {
    const opes = window.OPOSICIONES_DATA?.oposiciones || [];
    const rows = opes.map(ope => {
      const audit = ope.audit || {};
      return `<tr><td>${escapeHtml(ope.shortName)}</td><td><span class="badge ${levelClass(audit.level)}">${escapeHtml(audit.level || 'sin auditar')}</span></td><td>${audit.score ?? '—'}%</td><td>${escapeHtml(audit.current || '')}</td></tr>`;
    }).join('');
    return `<article class="card" id="globalOpeAuditCard">
      <h2>Auditoría global de convocatorias</h2>
      <p>Las Ventas con Peña Aguilera queda fuera de la planificación activa. La prioridad de desarrollo es Diputación y Carranque; UC3M es la más avanzada y La Puebla mantiene prioridad práctica por cercanía y cuatro plazas.</p>
      <div class="table-wrap"><table><thead><tr><th>OPE</th><th>Estado</th><th>Madurez</th><th>Cobertura cargada</th></tr></thead><tbody>${rows}</tbody></table></div>
    </article>`;
  }

  if (typeof renderSidebar === 'function') {
    const original = renderSidebar;
    renderSidebar = function () { original(); patchVersion(); };
  }

  if (typeof renderProceso === 'function') {
    const original = renderProceso;
    renderProceso = function () {
      original();
      document.getElementById('opeAuditCard')?.remove();
      content.insertAdjacentHTML('beforeend', auditCard(active()));
      patchVersion();
    };
  }

  if (typeof renderProgreso === 'function') {
    const original = renderProgreso;
    renderProgreso = function () {
      original();
      document.getElementById('globalOpeAuditCard')?.remove();
      content.insertAdjacentHTML('beforeend', globalAuditCard());
      patchVersion();
    };
  }

  if (typeof renderAll === 'function') {
    try { renderAll(); } catch (_) { patchVersion(); }
  } else patchVersion();
})();