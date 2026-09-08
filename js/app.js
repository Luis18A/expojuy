/* ==========================================================================
   EXPOJUY 2026 - MAIN APPLICATION ENTRY POINT
   Orchestrates SPA Router, i18n Translation Engine, Modals, and View Modules.
   ========================================================================== */

import { setLanguage, getLanguage, updateDOMTranslations } from './i18n.js';
import { initRouter } from './router.js';
import { initModals } from './modals.js';
import { showToast } from './toasts.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Engines
  initRouter();
  initModals();

  // Setup Language Switcher Listeners (Traductor de Idioma ES / EN)
  const btnEs = document.getElementById('btn-lang-es');
  const btnEn = document.getElementById('btn-lang-en');

  if (btnEs) {
    btnEs.addEventListener('click', () => {
      setLanguage('es');
    });
  }

  if (btnEn) {
    btnEn.addEventListener('click', () => {
      setLanguage('en');
    });
  }

  // Initial translation apply
  updateDOMTranslations();

  // Footer Contact Button listener
  const footerContactBtn = document.getElementById('btn-footer-contact');
  if (footerContactBtn) {
    footerContactBtn.addEventListener('click', () => {
      showToast('Consulta enviada a gerencia@expojuy.com.ar', 'success');
    });
  }
});
