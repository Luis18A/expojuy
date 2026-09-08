/* ==========================================================================
   EXPOJUY 2026 - SPA ROUTER & VIEW LOADER MODULE
   ========================================================================== */

import { updateDOMTranslations } from './i18n.js';
import { initExhibitorsDirectory } from './views/expositores.js';
import { initAgendaSystem } from './views/agenda.js';
import { initInteractiveMap } from './views/visita.js';

export function initRouter() {
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileBtn = document.getElementById('btn-mobile-menu');

  async function loadViewContent(path) {
    const targetContainer = document.getElementById(`view-${path}`);
    if (!targetContainer) return;

    // If view container is empty or needs dynamic fetch, load from views/[path].html
    if (targetContainer.children.length === 0) {
      try {
        const response = await fetch(`./views/${path}.html`);
        if (response.ok) {
          const html = await response.text();
          // Extract internal view div if present or set directly
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = html;
          const innerView = tempDiv.querySelector('.view-container') || tempDiv;
          targetContainer.innerHTML = innerView.innerHTML;
        }
      } catch (err) {
        console.warn(`View fetch for ${path} fallback to embedded static DOM.`);
      }
    }

    // Activate view
    document.querySelectorAll('.view-container').forEach(view => {
      if (view.id === `view-${path}`) {
        view.classList.add('active-view');
      } else {
        view.classList.remove('active-view');
      }
    });

    // Update active nav links
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

    // Re-apply current language translations to newly loaded DOM elements
    updateDOMTranslations();

    // Trigger view-specific dynamic logic
    if (path === 'expositores') initExhibitorsDirectory();
    if (path === 'agenda') initAgendaSystem();
    if (path === 'visita') initInteractiveMap();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.nav-trigger');
    if (trigger) {
      const path = trigger.dataset.path || 'home';
      loadViewContent(path);
    }
  });

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }

  // Hash Navigation Fallback
  if (window.location.hash) {
    const cleanHash = window.location.hash.replace('#', '');
    loadViewContent(cleanHash);
  }
}
