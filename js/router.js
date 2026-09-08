/* ==========================================================================
   EXPOJUY 2026 - SPA ROUTER MODULE
   ========================================================================== */

import { updateDOMTranslations } from './i18n.js';
import { initExhibitorsDirectory } from './views/expositores.js';
import { initAgendaSystem } from './views/agenda.js';
import { initInteractiveMap } from './views/visita.js';

export function initRouter() {
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileBtn = document.getElementById('btn-mobile-menu');

  function navigateTo(path) {
    const targetView = document.getElementById(`view-${path}`);
    if (!targetView) return;

    // Toggle active view container
    document.querySelectorAll('.view-container').forEach(view => {
      if (view.id === `view-${path}`) {
        view.classList.add('active-view');
        view.style.display = 'block';
      } else {
        view.classList.remove('active-view');
        view.style.display = 'none';
      }
    });

    // Toggle active link in navbar
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

    // Re-apply translations
    updateDOMTranslations();

    // Trigger view initializations
    if (path === 'expositores') initExhibitorsDirectory();
    if (path === 'agenda') initAgendaSystem();
    if (path === 'visita') initInteractiveMap();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.nav-trigger');
    if (trigger) {
      const path = trigger.dataset.path || 'home';
      navigateTo(path);
    }
  });

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }

  // Initialize all view modules upfront so DOM targets are populated immediately
  initExhibitorsDirectory();
  initAgendaSystem();
  initInteractiveMap();

  // Initial navigation route check
  const initialHash = window.location.hash ? window.location.hash.replace('#', '') : 'home';
  navigateTo(initialHash);
}
