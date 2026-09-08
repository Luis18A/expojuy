/* ==========================================================================
   EXPOJUY 2026 - APPLICATION CONTROLLER & INTERACTIVITIES
   Handles SPA Router, Ticket Checkout, Stand Reservations, B2B Registration,
   Interactive Agenda, Exhibitor Filters, Interactive Map, and Toast System.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initModals();
  initTicketCheckout();
  initStandReservation();
  initB2BRegistration();
  initAgendaSystem();
  initExhibitorsDirectory();
  initInteractiveMap();
  initLanguageSwitcher();
});

/* ==========================================================================
   1. TOAST NOTIFICATION ENGINE
   ========================================================================== */
window.showToast = function(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconName = 'info';
  if (type === 'success') iconName = 'check_circle';
  if (type === 'warning') iconName = 'warning';

  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px] shrink-0 text-primary-container">${iconName}</span>
    <span class="font-ambit text-xs font-semibold leading-snug">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
};

/* ==========================================================================
   2. SPA ROUTER & NAVIGATION
   ========================================================================== */
function initRouter() {
  const navTriggers = document.querySelectorAll('.nav-trigger');
  const viewContainers = document.querySelectorAll('.view-container');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileBtn = document.getElementById('btn-mobile-menu');

  function navigateTo(path) {
    viewContainers.forEach(view => {
      if (view.id === `view-${path}`) {
        view.classList.add('active-view');
      } else {
        view.classList.remove('active-view');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.path === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    if (mobileDrawer && !mobileDrawer.classList.contains('hidden')) {
      mobileDrawer.classList.add('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const path = trigger.dataset.path || 'home';
      navigateTo(path);
    });
  });

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }

  // Hash Navigation Fallback
  if (window.location.hash) {
    const cleanHash = window.location.hash.replace('#', '');
    if (document.getElementById(`view-${cleanHash}`)) {
      navigateTo(cleanHash);
    }
  }
}

/* ==========================================================================
   3. MODAL DIALOG ENGINE
   ========================================================================== */
function initModals() {
  const backdrops = document.querySelectorAll('.modal-backdrop');
  const closeBtns = document.querySelectorAll('.modal-close');

  function closeModal(modal) {
    modal.classList.remove('active');
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) closeModal(modal);
    });
  });

  backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal(backdrop);
    });
  });

  // Video Tour Modal Trigger
  const videoTrigger = document.getElementById('btn-open-video-tour');
  const videoModal = document.getElementById('modal-video');
  if (videoTrigger && videoModal) {
    videoTrigger.addEventListener('click', () => {
      videoModal.classList.add('active');
    });
  }

  // User profile button trigger
  const userBtn = document.getElementById('btn-user-profile');
  if (userBtn) {
    userBtn.addEventListener('click', () => {
      showToast('Credencial Digital de Usuario ExpoJuy: Estado Activo', 'success');
    });
  }
}

/* ==========================================================================
   4. TICKET PURCHASE CHECKOUT & SUCCESS CARTEL
   ========================================================================== */
function initTicketCheckout() {
  const buyBtns = document.querySelectorAll('.action-buy-tickets');
  const modalTicket = document.getElementById('modal-ticket');
  const ticketOpts = document.querySelectorAll('.ticket-opt');
  const qtyMinus = document.getElementById('btn-qty-minus');
  const qtyPlus = document.getElementById('btn-qty-plus');
  const qtyEl = document.getElementById('ticket-qty');
  const totalPriceEl = document.getElementById('ticket-total-price');
  const confirmBtn = document.getElementById('btn-confirm-ticket-purchase');
  const downloadReceiptBtn = document.getElementById('btn-download-receipt');

  const stepForm = document.getElementById('ticket-step-form');
  const stepSuccess = document.getElementById('ticket-step-success');

  let selectedTicket = {
    type: 'Pase General 1 Día',
    price: 4500,
    qty: 1
  };

  buyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (stepForm && stepSuccess) {
        stepForm.classList.remove('hidden');
        stepSuccess.classList.add('hidden');
      }
      if (modalTicket) modalTicket.classList.add('active');
    });
  });

  function updateTicketSummary() {
    ticketOpts.forEach(opt => {
      if (opt.dataset.type === selectedTicket.type) {
        opt.classList.add('border-primary-container', 'bg-primary-fixed/20');
        opt.classList.remove('border-outline-variant');
      } else {
        opt.classList.remove('border-primary-container', 'bg-primary-fixed/20');
        opt.classList.add('border-outline-variant');
      }
    });

    if (qtyEl) qtyEl.textContent = selectedTicket.qty;
    const total = selectedTicket.price * selectedTicket.qty;
    if (totalPriceEl) totalPriceEl.textContent = `$${total.toLocaleString('es-AR')} ARS`;
  }

  ticketOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      selectedTicket.type = opt.dataset.type;
      selectedTicket.price = parseInt(opt.dataset.price, 10);
      updateTicketSummary();
    });
  });

  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      if (selectedTicket.qty > 1) {
        selectedTicket.qty--;
        updateTicketSummary();
      }
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      if (selectedTicket.qty < 10) {
        selectedTicket.qty++;
        updateTicketSummary();
      }
    });
  }

  // CONFIRM PURCHASE -> SHOW CARTEL COMPRA FINALIZADA
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('ticket-name');
      const emailInput = document.getElementById('ticket-email');

      const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Visitante ExpoJuy';
      const email = (emailInput && emailInput.value.trim()) ? emailInput.value.trim() : 'correo@ejemplo.com';

      // Generate random order ID
      const orderId = `EXP-${Math.floor(10000 + Math.random() * 90000)}`;
      const totalAmount = (selectedTicket.price * selectedTicket.qty).toLocaleString('es-AR');

      // Populate Success Receipt UI
      const receiptOrder = document.getElementById('receipt-order-id');
      const receiptName = document.getElementById('receipt-name');
      const receiptType = document.getElementById('receipt-type');
      const receiptQty = document.getElementById('receipt-qty');
      const receiptAmount = document.getElementById('receipt-amount');

      if (receiptOrder) receiptOrder.textContent = `N° ${orderId}`;
      if (receiptName) receiptName.textContent = name;
      if (receiptType) receiptType.textContent = selectedTicket.type;
      if (receiptQty) receiptQty.textContent = `${selectedTicket.qty} ${selectedTicket.qty === 1 ? 'entrada' : 'entradas'}`;
      if (receiptAmount) receiptAmount.textContent = `$${totalAmount} ARS`;

      // Switch Modal View to Success Banner
      stepForm.classList.add('hidden');
      stepSuccess.classList.remove('hidden');
      stepSuccess.style.display = 'flex';

      showToast(`¡Compra Finalizada Exitosamente! Código: ${orderId}`, 'success', 5000);
    });
  }

  if (downloadReceiptBtn) {
    downloadReceiptBtn.addEventListener('click', () => {
      showToast('Descargando comprobante y credencial en PDF...', 'info');
    });
  }
}

/* ==========================================================================
   5. STAND RESERVATION FORM
   ========================================================================== */
function initStandReservation() {
  const reserveBtns = document.querySelectorAll('.action-reserve-stand');
  const modalStand = document.getElementById('modal-stand');
  const formStand = document.getElementById('form-stand-reserve');

  reserveBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modalStand) modalStand.classList.add('active');
    });
  });

  if (formStand) {
    formStand.addEventListener('submit', (e) => {
      e.preventDefault();
      if (modalStand) modalStand.classList.remove('active');
      showToast('¡Solicitud de Reserva Enviada! La Gerencia Comercial se pondrá en contacto.', 'success', 4500);
      formStand.reset();
    });
  }
}

/* ==========================================================================
   6. B2B REGISTRATION FORM
   ========================================================================== */
function initB2BRegistration() {
  const b2bBtns = document.querySelectorAll('.action-register-b2b');
  const modalB2B = document.getElementById('modal-b2b');
  const formB2B = document.getElementById('form-b2b-register');

  b2bBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modalB2B) modalB2B.classList.add('active');
    });
  });

  if (formB2B) {
    formB2B.addEventListener('submit', (e) => {
      e.preventDefault();
      if (modalB2B) modalB2B.classList.remove('active');
      showToast('¡Empresa Acreditada en Rondas B2B! Te enviamos la confirmación por correo.', 'success', 4500);
      formB2B.reset();
    });
  }
}

/* ==========================================================================
   7. INTERACTIVE AGENDA SYSTEM & SAVED SCHEDULE
   ========================================================================== */
function initAgendaSystem() {
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

    // Attach listeners to dynamically generated timeline buttons
    document.querySelectorAll('.btn-save-activity').forEach(btn => {
      btn.addEventListener('click', () => {
        const actId = btn.dataset.id;
        toggleSaveActivity(actId);
      });
    });
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

  // Quick save buttons on home page preview
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

/* ==========================================================================
   8. EXHIBITOR DIRECTORY & SEARCH FILTER
   ========================================================================== */
function initExhibitorsDirectory() {
  const grid = document.getElementById('exhibitorsGrid');
  const searchInput = document.getElementById('exhibitorSearchInput');
  const categoryChips = document.querySelectorAll('.ex-chip');

  const exhibitors = [
    { name: 'Litio Solar Jujuy S.A.', sector: 'Minería', stand: 'Stand C-14 · Pabellón A', desc: 'Soluciones de almacenamiento en baterías de litio y equipamiento fotovoltaico.' },
    { name: 'Valles Andinos Bio', sector: 'Agroindustria', stand: 'Stand B-08 · Pabellón B', desc: 'Legumbres y alimentos deshidratados de alta pureza con marca Jujuy Origen.' },
    { name: 'Jujuy Tech & Cloud', sector: 'Tecnología', stand: 'Stand T-02 · Pabellón A', desc: 'Software de gestión agrícola, IoT e infraestructura de centros de cómputo en altura.' },
    { name: 'Minera Exar S.A.', sector: 'Minería', stand: 'Stand C-20 · Pabellón A', desc: 'Producción sustentable de carbonato de litio grado batería en Salar de Olaroz.' },
    { name: 'Caucharí Solar Park', sector: 'Minería', stand: 'Stand C-01 · Pabellón A', desc: 'Parque fotovoltaico a 4.000 msnm. Energía limpia para la red nacional.' },
    { name: 'Ledesma Agroindustria', sector: 'Agroindustria', stand: 'Stand B-12 · Pabellón B', desc: 'Azúcar, bioetanol, papel de caña de azúcar y frutas cítricas de exportación.' },
    { name: 'Turismo Quebrada & Puna', sector: 'Turismo', stand: 'Stand T-15 · Pabellón B', desc: 'Red de hoteles boutique sustentables y experiencias gastronómicas de altura.' },
    { name: 'Manufacturas del NOA', sector: 'Industria', stand: 'Stand I-05 · Área Exterior', desc: 'Estructuras metálicas modulares, naves industriales y carpintería de aluminio.' }
  ];

  let selectedCategory = 'all';
  let searchQuery = '';

  function renderExhibitors() {
    if (!grid) return;

    const filtered = exhibitors.filter(ex => {
      const matchCat = (selectedCategory === 'all') || (ex.sector === selectedCategory);
      const matchQuery = ex.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         ex.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ex.stand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full bg-white p-8 rounded-3xl text-center border border-outline-variant/30">
          <p class="font-ambit text-sm text-on-surface-variant">No se encontraron expositores coincidentes con tu búsqueda.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(ex => `
      <div class="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 hover:shadow-md transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-3 py-1 rounded-full bg-surface-container-low font-ambit font-bold text-xs text-primary-container">${ex.sector}</span>
            <span class="text-[11px] font-bold text-outline">${ex.stand}</span>
          </div>
          <h3 class="font-ambit font-bold text-xl text-on-surface mb-2">${ex.name}</h3>
          <p class="font-ambit text-xs text-on-surface-variant leading-relaxed mb-4">${ex.desc}</p>
        </div>
        <button class="w-full py-2.5 rounded-xl bg-surface-container hover:bg-primary-fixed text-primary font-ambit font-bold text-xs transition-colors btn-contact-exhibitor" data-name="${ex.name}">
          Contactar Stand Comercial
        </button>
      </div>
    `).join('');

    document.querySelectorAll('.btn-contact-exhibitor').forEach(btn => {
      btn.addEventListener('click', () => {
        showToast(`Mensaje enviado al stand de ${btn.dataset.name}`, 'success');
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderExhibitors();
    });
  }

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => {
        c.classList.remove('bg-primary-container', 'text-white', 'shadow-sm');
        c.classList.add('bg-surface-container-low', 'text-on-surface-variant');
      });
      chip.classList.add('bg-primary-container', 'text-white', 'shadow-sm');
      chip.classList.remove('bg-surface-container-low', 'text-on-surface-variant');

      selectedCategory = chip.dataset.category;
      renderExhibitors();
    });
  });

  renderExhibitors();
}

/* ==========================================================================
   9. INTERACTIVE PREDIO MAP
   ========================================================================== */
function initInteractiveMap() {
  const infoTitle = document.getElementById('pavilionInfoTitle');
  const infoDesc = document.getElementById('pavilionInfoDesc');

  window.selectPavilion = function(title, desc) {
    if (infoTitle) infoTitle.textContent = title;
    if (infoDesc) infoDesc.textContent = desc;
    showToast(`Seleccionado: ${title}`, 'info');
  };

  const filterBtns = document.querySelectorAll('.map-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-primary-container', 'text-white');
        b.classList.add('bg-surface-container-low', 'text-on-surface-variant');
      });
      btn.classList.add('bg-primary-container', 'text-white');
      btn.classList.remove('bg-surface-container-low', 'text-on-surface-variant');
    });
  });
}

/* ==========================================================================
   10. LANGUAGE SWITCHER
   ========================================================================== */
function initLanguageSwitcher() {
  const btnEs = document.getElementById('btn-lang-es');
  const btnEn = document.getElementById('btn-lang-en');

  if (btnEs && btnEn) {
    btnEs.addEventListener('click', () => {
      btnEs.classList.add('bg-white', 'text-primary-container', 'shadow-sm');
      btnEn.classList.remove('bg-white', 'text-primary-container', 'shadow-sm');
      showToast('Idioma activo: Español (ES)', 'info');
    });

    btnEn.addEventListener('click', () => {
      btnEn.classList.add('bg-white', 'text-primary-container', 'shadow-sm');
      btnEs.classList.remove('bg-white', 'text-primary-container', 'shadow-sm');
      showToast('Language set to English (EN)', 'info');
    });
  }

  const footerContactBtn = document.getElementById('btn-footer-contact');
  if (footerContactBtn) {
    footerContactBtn.addEventListener('click', () => {
      showToast('Consulta enviada a gerencia@expojuy.com.ar', 'success');
    });
  }
}
