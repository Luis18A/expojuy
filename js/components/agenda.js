/* ExpoJuy 2026 - Agenda & "Mi Agenda" Bookmark Component */

let savedAgendaItems = JSON.parse(localStorage.getItem('expojuy_my_agenda') || '[]');

function renderAgendaTimeline(containerId, activeDay = "9") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const dayItems = EXPO_DATA.agenda.filter(item => activeDay === 'all' || item.day === activeDay);

  container.innerHTML = `
    <!-- Day Selector Tabs -->
    <div class="day-selector">
      <button class="day-btn ${activeDay === '9' ? 'active' : ''}" onclick="renderAgendaTimeline('${containerId}', '9')">Día 1<br><small>Vie 9 Oct</small></button>
      <button class="day-btn ${activeDay === '10' ? 'active' : ''}" onclick="renderAgendaTimeline('${containerId}', '10')">Día 2<br><small>Sáb 10 Oct</small></button>
      <button class="day-btn ${activeDay === '11' ? 'active' : ''}" onclick="renderAgendaTimeline('${containerId}', '11')">Día 3<br><small>Dom 11 Oct</small></button>
      <button class="day-btn ${activeDay === '12' ? 'active' : ''}" onclick="renderAgendaTimeline('${containerId}', '12')">Día 4<br><small>Lun 12 Oct</small></button>
      <button class="day-btn ${activeDay === 'saved' ? 'active' : ''}" onclick="renderSavedMyAgenda('${containerId}')"><i class="fa-solid fa-bookmark"></i> Mi Agenda<br><small>(${savedAgendaItems.length} guardadas)</small></button>
    </div>

    <!-- Items List -->
    <div class="agenda-list">
      ${dayItems.length ? dayItems.map(item => createAgendaItemHTML(item)).join('') : '<p style="text-align:center; padding:40px; color:var(--text-muted);">No se encontraron actividades para este día.</p>'}
    </div>
  `;
}

function createAgendaItemHTML(item) {
  const isSaved = savedAgendaItems.includes(item.id);

  return `
    <div class="agenda-item glass-card animate-fade-in">
      <div class="agenda-time">
        <i class="fa-regular fa-clock"></i> ${item.time}
      </div>

      <div>
        <span class="badge badge-mining" style="margin-bottom:8px;">${item.categoryName}</span>
        <h3 style="font-size:1.15rem; margin-bottom:6px;">${item.title}</h3>
        <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:6px;"><i class="fa-solid fa-user-tie"></i> ${item.speaker}</p>
        <p style="color:var(--text-dim); font-size:0.85rem;"><i class="fa-solid fa-location-dot"></i> ${item.location}</p>
      </div>

      <div style="display:flex; flex-direction:column; gap:8px; align-items:flex-end;">
        <button class="btn btn-secondary" style="width:100%; font-size:0.8rem; padding:8px 14px;" onclick="openActivityDetail('${item.id}')">Ver Detalle</button>
        <button class="btn ${isSaved ? 'btn-outline-gold' : 'btn-secondary'}" style="width:100%; font-size:0.8rem; padding:8px 14px;" onclick="toggleBookmarkActivity('${item.id}', this)">
          <i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i> ${isSaved ? 'En Mi Agenda' : '+ Añadir'}
        </button>
      </div>
    </div>
  `;
}

function toggleBookmarkActivity(actId, btn) {
  if (savedAgendaItems.includes(actId)) {
    savedAgendaItems = savedAgendaItems.filter(id => id !== actId);
    btn.innerHTML = '<i class="fa-regular fa-bookmark"></i> + Añadir';
    btn.className = 'btn btn-secondary';
  } else {
    savedAgendaItems.push(actId);
    btn.innerHTML = '<i class="fa-solid fa-bookmark"></i> En Mi Agenda';
    btn.className = 'btn btn-outline-gold';
  }
  localStorage.setItem('expojuy_my_agenda', JSON.stringify(savedAgendaItems));
}

function renderSavedMyAgenda(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = EXPO_DATA.agenda.filter(i => savedAgendaItems.includes(i.id));

  container.innerHTML = `
    <div class="day-selector">
      <button class="day-btn" onclick="renderAgendaTimeline('${containerId}', '9')">Volver al Cronograma General</button>
      <button class="day-btn active"><i class="fa-solid fa-bookmark"></i> Mi Agenda Personalizada (${items.length})</button>
    </div>

    ${items.length ? `
      <div style="margin-bottom:20px; text-align:right;">
        <button class="btn btn-primary" onclick="window.print()"><i class="fa-solid fa-print"></i> Imprimir Mi Itinerario</button>
      </div>
      <div class="agenda-list">
        ${items.map(item => createAgendaItemHTML(item)).join('')}
      </div>
    ` : `
      <div class="glass-card" style="text-align:center; padding:60px 20px;">
        <i class="fa-regular fa-bookmark" style="font-size:3rem; color:var(--text-dim); margin-bottom:16px;"></i>
        <h3>Tu agenda está vacía</h3>
        <p style="color:var(--text-muted); max-width:400px; margin:8px auto 20px;">Explora el cronograma de actividades de ExpoJuy 2026 y presiona "+ Añadir" en las conferencias de tu interés.</p>
        <button class="btn btn-primary" onclick="renderAgendaTimeline('${containerId}', '9')">Ver Cronograma General</button>
      </div>
    `}
  `;
}

function openActivityDetail(actId) {
  const act = EXPO_DATA.agenda.find(a => a.id === actId);
  if (!act) return;

  const modal = document.getElementById('ticket-modal');
  if (!modal) return;

  const content = document.getElementById('ticket-modal-content');
  content.innerHTML = `
    <div style="text-align:left;">
      <span class="badge badge-mining" style="margin-bottom:12px;">${act.categoryName}</span>
      <h2 style="font-size:1.5rem; margin-bottom:12px;">${act.title}</h2>
      
      <div style="display:flex; gap:20px; color:var(--sector-mining); font-size:0.95rem; margin-bottom:16px;">
        <span><i class="fa-regular fa-calendar"></i> ${act.dateLabel}</span>
        <span><i class="fa-regular fa-clock"></i> ${act.time} hs</span>
      </div>

      <div style="padding:16px; background:rgba(255,255,255,0.05); border-radius:12px; margin-bottom:20px;">
        <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:8px;"><strong>Disertante / Expositores:</strong> ${act.speaker}</p>
        <p style="font-size:0.9rem; color:var(--text-muted);"><strong>Locación:</strong> ${act.location}</p>
      </div>

      <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.6; margin-bottom:24px;">${act.description}</p>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" style="flex:1;" onclick="toggleBookmarkActivity('${act.id}', this); closeTicketModal();"><i class="fa-solid fa-bookmark"></i> Guardar en Mi Agenda</button>
        <button class="btn btn-secondary" onclick="closeTicketModal()">Cerrar</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}
