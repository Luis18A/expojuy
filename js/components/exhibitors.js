/* ExpoJuy 2026 - Exhibitor Directory & Stand Booking Component */

function renderExhibitorsDirectory(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <!-- Directory Filter Bar -->
    <div class="filter-bar">
      <div class="search-input-wrap">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" id="exhibitor-search" class="search-input" placeholder="Buscar por nombre, producto o tecnología..." onkeyup="filterExhibitorsList()" />
      </div>

      <select id="sector-filter" class="select-filter" onchange="filterExhibitorsList()">
        <option value="all">Todos los Sectores</option>
        <option value="mineria">Minería & Litio</option>
        <option value="agro">Agroindustria & Biotecnología</option>
        <option value="tech">Tecnología & Conocimiento</option>
        <option value="turismo">Turismo & Servicios</option>
        <option value="industria">Industria & Proveedores</option>
      </select>

      <select id="pavilion-filter" class="select-filter" onchange="filterExhibitorsList()">
        <option value="all">Todos los Pabellones</option>
        <option value="Pabellón A">Pabellón A (Minería)</option>
        <option value="Pabellón B">Pabellón B (Agro)</option>
        <option value="Pabellón C">Pabellón C (Tech)</option>
      </select>
    </div>

    <!-- Exhibitor Cards Grid -->
    <div id="exhibitors-grid" class="grid-3">
      ${EXPO_DATA.exhibitors.map(ex => createExhibitorCardHTML(ex)).join('')}
    </div>
  `;
}

function createExhibitorCardHTML(ex) {
  const sectorObj = EXPO_DATA.sectors.find(s => s.id === ex.sectorId) || {};
  const badgeClass = sectorObj.badge || 'badge-mining';

  return `
    <div class="exhibitor-card glass-card animate-fade-in" data-sector="${ex.sectorId}" data-pavilion="${ex.stand}" data-search="${(ex.name + ' ' + ex.description + ' ' + ex.products.join(' ')).toLowerCase()}">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div class="exhibitor-logo-placeholder">
          ${ex.name.substring(0, 2).toUpperCase()}
        </div>
        <span class="badge ${badgeClass}">${ex.sectorName}</span>
      </div>

      <h3 class="exhibitor-name">${ex.name}</h3>
      <div class="exhibitor-stand-info">
        <i class="fa-solid fa-location-dot" style="color:var(--sector-mining)"></i> ${ex.stand} | ${ex.origin}
      </div>

      <p class="exhibitor-desc">${ex.description}</p>

      <div style="margin-bottom:16px;">
        <span style="font-size:0.75rem; color:var(--text-dim); display:block; margin-bottom:4px;">Productos destacados:</span>
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          ${ex.products.slice(0, 2).map(p => `<span style="font-size:0.75rem; background:rgba(255,255,255,0.06); padding:2px 8px; border-radius:4px; color:var(--text-muted);">${p}</span>`).join('')}
        </div>
      </div>

      <button class="btn btn-secondary" style="width:100%; margin-top:auto;" onclick="openExhibitorDetail('${ex.id}')">Ver Ficha de Empresa</button>
    </div>
  `;
}

function filterExhibitorsList() {
  const query = document.getElementById('exhibitor-search').value.toLowerCase();
  const sector = document.getElementById('sector-filter').value;
  const pavilion = document.getElementById('pavilion-filter').value;

  const cards = document.querySelectorAll('.exhibitor-card');
  cards.forEach(card => {
    const cardSector = card.getAttribute('data-sector');
    const cardPavilion = card.getAttribute('data-pavilion');
    const cardSearch = card.getAttribute('data-search');

    const matchSector = (sector === 'all' || cardSector === sector);
    const matchPavilion = (pavilion === 'all' || cardPavilion.includes(pavilion));
    const matchSearch = (!query || cardSearch.includes(query));

    if (matchSector && matchPavilion && matchSearch) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function openExhibitorDetail(exId) {
  const ex = EXPO_DATA.exhibitors.find(e => e.id === exId);
  if (!ex) return;

  const modal = document.getElementById('ticket-modal');
  if (!modal) return;

  const content = document.getElementById('ticket-modal-content');
  content.innerHTML = `
    <div style="text-align:left;">
      <div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
        <div class="exhibitor-logo-placeholder" style="margin:0; width:72px; height:72px; font-size:1.8rem;">
          ${ex.name.substring(0, 2).toUpperCase()}
        </div>
        <div>
          <h2 style="font-size:1.6rem; margin-bottom:4px;">${ex.name}</h2>
          <p style="color:var(--sector-mining); font-size:0.9rem;"><i class="fa-solid fa-location-dot"></i> ${ex.stand} | ${ex.origin}</p>
        </div>
      </div>

      <p style="color:var(--text-muted); font-size:1rem; line-height:1.6; margin-bottom:24px;">${ex.description}</p>

      <h4 style="font-size:1rem; color:var(--text-main); margin-bottom:12px;">Catálogo de Productos & Soluciones:</h4>
      <ul style="list-style:none; margin-bottom:24px;">
        ${ex.products.map(p => `<li style="padding:8px 12px; background:rgba(255,255,255,0.05); border-radius:8px; margin-bottom:6px; font-size:0.9rem; color:var(--text-main);"><i class="fa-solid fa-cube" style="color:var(--sector-mining); margin-right:8px;"></i> ${p}</li>`).join('')}
      </ul>

      <div style="display:flex; gap:12px;">
        <a href="${ex.website}" target="_blank" class="btn btn-primary" style="flex:1;"><i class="fa-solid fa-globe"></i> Visitar Sitio Web</a>
        <button class="btn btn-secondary" onclick="openTicketCheckout('Solicitud de Reunión con ${ex.name}', 0)"><i class="fa-solid fa-envelope"></i> Enviar Consulta</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}
