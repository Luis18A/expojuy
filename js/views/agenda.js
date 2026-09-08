/* ==========================================================================
   EXPOJUY 2026 - AGENDA SYSTEM MODULE
   ========================================================================== */

import { showToast } from '../toasts.js';

export function initAgendaSystem() {
  const agendaTimeline = document.getElementById('agendaTimeline');
  const dayTabs = document.querySelectorAll('.day-tab');
  const savedListContainer = document.getElementById('savedAgendaList');
  const savedCounterBadge = document.getElementById('savedAgendaCounter');
  const exportBtn = document.getElementById('btn-export-agenda');

  const sampleActivities = [
    {
      id: 'act-1',
      day: 'jue',
      time: '10:00 - 11:30 hs',
      title: 'Inauguración Oficial y Conferencia: El Corredor Bioceánico',
      speaker: 'Ing. Carlos Morales · Dir. Red Productiva',
      location: 'Auditorio Principal A',
      category: 'Negocios',
      badgeClass: 'bg-primary-fixed text-on-primary-fixed',
      desc: 'Análisis geopolítico y logístico sobre la integración comercial del NOA argentino con Chile, Paraguay y Brasil.'
    },
    {
      id: 'act-2',
      day: 'jue',
      time: '12:30 - 14:00 hs',
      title: 'Minería de Litio y Transición Energética Regional',
      speaker: 'Dra. Valeria Farfán · CONICET - UNJu',
      location: 'Auditorio Principal B',
      category: 'Tecnología',
      badgeClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
      desc: 'Nuevas metodologías de extracción directa sustentable y desarrollo de cadena de valor de litio.'
    },
    {
      id: 'act-3',
      day: 'jue',
      time: '15:00 - 17:00 hs',
      title: 'Ronda Multisectorial Internacional: Sesión 1',
      speaker: 'Lic. Sofia Meyer · Corredor Bioceánico',
      location: 'Salas B2B',
      category: 'Negocios',
      badgeClass: 'bg-primary-container text-white',
      desc: 'Mesas de negocios uno a uno programadas con delegaciones compradoras del Cono Sur.'
    },
    {
      id: 'act-4',
      day: 'vie',
      time: '11:00 - 13:00 hs',
      title: 'Foro Logístico de Puertos Secos y Paso de Jama',
      speaker: 'Lic. Sofia Meyer · Corredor Bioceánico',
      location: 'Salas B2B',
      category: 'Negocios',
      badgeClass: 'bg-primary-fixed text-on-primary-fixed',
      desc: 'Facilitación aduanera unificada y optimización de flotas pesadas.'
    },
    {
      id: 'act-5',
      day: 'vie',
      time: '17:30 - 19:00 hs',
      title: 'Masterclass de Vinos de Quebrada & Cocina Andina',
      speaker: 'Asociación de Vinos de Altura',
      location: 'Patio Gourmet · Pabellón B',
      category: 'Gastronomía',
      badgeClass: 'bg-tertiary-fixed-dim text-on-tertiary-fixed-variant',
      desc: 'Cata guiada de cepas cultivadas sobre 2.500 msnm con papas andinas y quesos de cabra.'
    },
    {
      id: 'act-6',
      day: 'sab',
      time: '19:30 - 21:00 hs',
      title: 'Gala Musical de Apertura: Ensamble Autóctono de la Puna',
      speaker: 'Orquesta del Bicentenario & Artistas Locales',
      location: 'Escenario Central Exterior',
      category: 'Cultura',
      badgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
      desc: 'Fusión sinfónica con sikuris, quenas y charangos rindiendo homenaje a la música jujeña.'
    },
    {
      id: 'act-7',
      day: 'dom',
      time: '16:00 - 18:00 hs',
      title: 'Panel de Cierre: Perspectivas Económicas NOA 2027',
      speaker: 'Cámara de Comercio Exterior de Jujuy',
      location: 'Auditorio Principal A',
      category: 'Negocios',
      badgeClass: 'bg-primary-fixed text-on-primary-fixed',
      desc: 'Conclusiones y presentación de convenios firmados durante la feria ExpoJuy.'
    }
  ];

  let currentDay = 'jue';
  let savedActivities = [];

  function renderTimeline() {
    if (!agendaTimeline) return;

    const filtered = sampleActivities.filter(act => act.day === currentDay);
    if (filtered.length === 0) {
      agendaTimeline.innerHTML = `
        <div class="bg-white p-8 rounded-3xl text-center border border-outline-variant/30">
          <p class="font-ambit text-sm text-on-surface-variant">No hay actividades programadas para este día.</p>
        </div>
      `;
      return;
    }

    agendaTimeline.innerHTML = filtered.map(act => {
      const isSaved = savedActivities.some(s => s.id === act.id);
      return `
        <article class="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 hover:shadow-md transition-all flex flex-col gap-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="px-3 py-1 rounded-full font-ambit font-bold text-xs ${act.badgeClass}">${act.time}</span>
            <span class="text-xs font-ambit font-bold text-outline uppercase">${act.category}</span>
          </div>
          <div>
            <h3 class="font-ambit font-bold text-lg text-on-surface hover:text-primary-container transition-colors">${act.title}</h3>
            <p class="font-ambit text-xs text-on-surface-variant mt-1 leading-relaxed">${act.desc}</p>
          </div>
          <div class="grid grid-cols-2 gap-2 text-xs bg-surface-container-low p-2.5 rounded-xl text-on-surface-variant">
            <div class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-primary">person</span> <span class="truncate">${act.speaker}</span></div>
            <div class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-secondary">location_on</span> <span class="truncate">${act.location}</span></div>
          </div>
          <div class="pt-2 flex items-center justify-between">
            <span class="text-[11px] text-green-700 font-bold">Acceso incluido c/Entrada</span>
            <button class="px-4 py-2 rounded-full text-xs font-ambit font-bold transition-all ${isSaved ? 'bg-green-100 text-green-800' : 'bg-primary-container text-white hover:bg-secondary'} btn-save-activity" data-id="${act.id}">
              ${isSaved ? '✓ Agendado' : '+ Guardar en mi agenda'}
            </button>
          </div>
        </article>
      `;
    }).join('');

    document.querySelectorAll('.btn-save-activity').forEach(btn => {
      btn.addEventListener('click', () => {
        const actId = btn.dataset.id;
        toggleSaveActivity(actId);
      });
    });

    if (typeof window.applyTranslations === 'function') {
      window.applyTranslations(localStorage.getItem('expojuy_lang') || 'es');
    }
  }

  function toggleSaveActivity(actId) {
    const act = sampleActivities.find(a => a.id === actId);
    if (!act) return;

    const index = savedActivities.findIndex(s => s.id === actId);
    if (index > -1) {
      savedActivities.splice(index, 1);
      showToast(`Actividad removida de tu agenda`, 'info');
    } else {
      savedActivities.push(act);
      showToast(`"${act.title}" agregada a tu agenda`, 'success');
    }

    updateSavedPanel();
    renderTimeline();
  }

  function updateSavedPanel() {
    if (savedCounterBadge) savedCounterBadge.textContent = savedActivities.length;

    if (!savedListContainer) return;

    if (savedActivities.length === 0) {
      savedListContainer.innerHTML = `
        <div class="text-center py-8 text-on-surface-variant text-xs">
          <span class="material-symbols-outlined text-outline text-[32px] block mb-2">bookmark_border</span>
          No has guardado actividades aún.<br/>Explorá la agenda y presioná "+ Agendar".
        </div>
      `;
      return;
    }

    savedListContainer.innerHTML = savedActivities.map(act => `
      <div class="p-3 bg-surface-container-low rounded-xl flex items-center justify-between gap-2 border border-outline-variant/30">
        <div class="overflow-hidden">
          <p class="font-ambit font-bold text-xs text-on-surface truncate">${act.title}</p>
          <p class="text-[10px] text-on-surface-variant">${act.time} · ${act.location}</p>
        </div>
        <button class="w-7 h-7 rounded-full bg-white text-red-500 hover:bg-red-50 flex items-center justify-center shrink-0 text-xs shadow-sm btn-remove-saved" data-id="${act.id}">
          &times;
        </button>
      </div>
    `).join('');

    document.querySelectorAll('.btn-remove-saved').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleSaveActivity(btn.dataset.id);
      });
    });
  }

  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dayTabs.forEach(t => {
        t.classList.remove('bg-primary-container', 'text-white', 'shadow-sm');
        t.classList.add('text-on-surface-variant');
      });
      tab.classList.add('bg-primary-container', 'text-white', 'shadow-sm');
      tab.classList.remove('text-on-surface-variant');

      currentDay = tab.dataset.day;
      renderTimeline();
    });
  });

  document.querySelectorAll('.btn-quick-save-activity').forEach(btn => {
    btn.addEventListener('click', () => {
      const actId = btn.dataset.id;
      toggleSaveActivity(actId);
    });
  });

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      if (savedActivities.length === 0) {
        showToast('Guardá al menos una actividad antes de exportar tu agenda.', 'warning');
      } else {
        showToast(`Exportando ${savedActivities.length} actividades guardadas a formato PDF...`, 'success');
      }
    });
  }

  renderTimeline();
}
