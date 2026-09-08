/* ==========================================================================
   EXPOJUY 2026 - EXHIBITORS DIRECTORY MODULE
   ========================================================================== */

import { showToast } from '../toasts.js';

export function initExhibitorsDirectory() {
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

      btn.addEventListener('click', () => {
        showToast(`Mensaje enviado al stand de ${btn.dataset.name}`, 'success');
      });
    });

    if (typeof window.applyTranslations === 'function') {
      window.applyTranslations(localStorage.getItem('expojuy_lang') || 'es');
    }
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
