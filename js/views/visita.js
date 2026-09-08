/* ==========================================================================
   EXPOJUY 2026 - INTERACTIVE PREDIO MAP MODULE
   ========================================================================== */

import { showToast } from '../toasts.js';

export function initInteractiveMap() {
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
