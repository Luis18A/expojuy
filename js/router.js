/* ==========================================================================
   EXPOJUY 2026 - SPA ROUTER MODULE
   ========================================================================== */

import { initExhibitorsDirectory } from './views/expositores.js';
import { initAgendaSystem } from './views/agenda.js';
import { initInteractiveMap } from './views/visita.js';

export function initRouter() {
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileBtn = document.getElementById('btn-mobile-menu');

  function navigateTo(targetPath) {
    const path = (targetPath === 'la-expo' || !targetPath) ? 'home' : targetPath;
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
    const currentLang = localStorage.getItem('expojuy_lang') || localStorage.getItem('lang') || 'es';
    if (typeof window.applyTranslations === 'function') {
      window.applyTranslations(currentLang);
    } else if (typeof applyTranslations === 'function') {
      applyTranslations(currentLang);
    }

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

/**
 * Aplica el diccionario de traducción al contenido HTML visible
 */
function applyTranslations(lang) {
  const isEn = lang === 'en';

  // 1. Actualizar estado activo de los botones ES / EN en el header
  const langButtons = document.querySelectorAll('header button[type="button"]');
  langButtons.forEach(btn => {
    const text = btn.textContent.trim().toUpperCase();
    if (text === lang.toUpperCase()) {
      btn.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-[0_1px_4px_rgba(0,0,0,0.06)]');
      btn.classList.remove('text-on-surface-variant');
    } else if (text === 'ES' || text === 'EN') {
      btn.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'shadow-[0_1px_4px_rgba(0,0,0,0.06)]');
      btn.classList.add('text-on-surface-variant');
    }
  });

  // 2. Traducción Navegación Principal en Header
  const navMap = {
    'home.html': isEn ? 'The Expo' : 'La Expo',
    'b2b.html': isEn ? 'B2B Matchmaking' : 'Vinculate B2B',
    'expositores.html': isEn ? 'Exhibitors' : 'Expositores',
    'agenda.html': isEn ? 'Schedule' : 'Agenda',
    'visita.html': isEn ? 'Visit Us' : 'Visitá'
  };

  document.querySelectorAll('header nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      for (const key in navMap) {
        if (href.endsWith(key)) {
          link.textContent = navMap[key];
          break;
        }
      }
    }
  });

  // 3. Diccionario Completo de Frases (ES <-> EN)
  const dict = [
    { es: 'Comprar entradas', en: 'Buy tickets' },
    { es: 'Comprar tickets', en: 'Buy tickets' },
    { es: '9-12 OCT 2026 · CIUDAD CULTURAL', en: 'OCT 9-12, 2026 · CIUDAD CULTURAL' },
    { es: 'ACCESOS Y TICKETS DIGITALES', en: 'ACCESS & DIGITAL TICKETS' },
    { es: 'Tipos de entradas y acceso general', en: 'Ticket Types & General Access' },
    { es: 'Adquirí tu pase oficial de manera digital. Al comprar, recibirás tu credencial intransferible con código QR lista para validar en molinetes.', en: 'Purchase your official pass digitally. Upon purchase, you will receive your non-transferable QR code badge ready for validation at turnstiles.' },
    { es: 'Aviso organizativo:', en: 'Organizational Notice:' },
    { es: 'Información y precios sujetos a confirmación por el Comité Organizador. Venta anticipada disponible próximamente con beneficios bancarios locales.', en: 'Information and prices subject to confirmation by the Organizing Committee. Advance sale available soon with local banking benefits.' },
    { es: 'UNIPERSONAL', en: 'SINGLE PASS' },
    { es: '1 Día', en: '1 Day' },
    { es: 'Pase General Diario', en: 'Daily General Pass' },
    { es: 'Tarifa general en puerta', en: 'General gate rate' },
    { es: 'A Confirmar', en: 'To Be Confirmed' },
    { es: 'Precio de preventa con descuento', en: 'Discounted presale price' },
    { es: 'Acceso a pabellones comerciales', en: 'Access to commercial pavilions' },
    { es: 'Muestras culturales y espectáculos', en: 'Cultural exhibitions & shows' },
    { es: 'Ingreso libre a Patio Gastronómico', en: 'Free access to Food Court' },
    { es: 'Recibí tu acceso digital con QR en tu email.', en: 'Receive your digital QR access in your email.' },
    { es: 'Registrarme para preventa', en: 'Register for presale' },
    { es: 'RECOMENDADO - 4 DÍAS', en: 'RECOMMENDED - 4 DAYS' },
    { es: '4 Jornadas', en: '4 Days' },
    { es: 'Abono 4 Dias ExpoJuy', en: 'ExpoJuy 4-Day Pass' },
    { es: 'Abono 4 Días ExpoJuy', en: 'ExpoJuy 4-Day Pass' },
    { es: 'Ahorro del 25% anticipado', en: '25% early bird savings' },
    { es: 'Acceso ilimitado del 9 al 12 oct.', en: 'Unlimited access Oct 9-12.' },
    { es: 'Ingreso rápido por molinete exclusivo', en: 'Fast entry via exclusive turnstile' },
    { es: 'Acceso a las 4 jornadas de feria', en: 'Access to all 4 fair days' },
    { es: 'Descuentos en patio de comidas', en: 'Discounts at food court' },
    { es: 'Acceso digital intransferible con QR.', en: 'Non-transferable digital QR access.' },
    { es: 'Comprar entrada anticipada', en: 'Buy advance ticket' },
    { es: 'BONIFICADO', en: 'DISCOUNTED' },
    { es: 'Social', en: 'Social' },
    { es: 'Pase Estudiante / Jubilados', en: 'Student / Retiree Pass' },
    { es: 'Tarifa comunitaria subsidiada', en: 'Subsidized community rate' },
    { es: 'Válido con credencial física', en: 'Valid with physical ID' },
    { es: 'Acceso a pabellones educativos', en: 'Access to educational pavilions' },
    { es: 'Acreditación obligatoria en puerta', en: 'Mandatory gate accreditation' },
    { es: 'Ingreso a conferencias abiertas', en: 'Access to open lectures' },
    { es: 'Presentar DNI y carnet al ingresar.', en: 'Present ID card upon entering.' },
    { es: 'Consultar requisitos', en: 'Check requirements' },
    { es: 'CORPORATIVO', en: 'CORPORATE' },
    { es: 'B2B', en: 'B2B' },
    { es: 'Pase Profesional / Negocios', en: 'Professional / Business Pass' },
    { es: 'Acreditación comercial completa', en: 'Full commercial accreditation' },
    { es: 'Incluye directorio y coffee lounge', en: 'Includes directory & coffee lounge' },
    { es: 'Acceso prioritario a Rondas B2B', en: 'Priority access to B2B Rounds' },
    { es: 'Directorio oficial de expositores', en: 'Official exhibitor directory' },
    { es: 'Sala VIP para reuniones privadas', en: 'VIP room for private meetings' },
    { es: 'Acreditación profesional con constancia.', en: 'Professional accreditation with proof.' },
    { es: 'Acreditarme B2B', en: 'B2B Accreditation' },
    { es: 'UBICACIÓN ESTRATÉGICA', en: 'STRATEGIC LOCATION' },
    { es: 'Cómo llegar a Ciudad Cultural', en: 'How to Get to Ciudad Cultural' },
    { es: 'Ubicada en el acceso norte de la capital jujeña, con amplias vías de conectividad directa desde el aeropuerto y terminal de ómnibus.', en: 'Located at the northern entrance of Jujuy capital, with direct connectivity from the airport and bus terminal.' },
    { es: 'Abrir en Google Maps', en: 'Open in Google Maps' },
    { es: 'Referencias del Complejo', en: 'Venue References' },
    { es: 'Puntos clave dentro del predio para orientar tu visita.', en: 'Key points within the venue to guide your visit.' },
    { es: 'Pabellones Comerciales', en: 'Commercial Pavilions' },
    { es: 'Salón B2B & Conferencias', en: 'B2B & Conference Hall' },
    { es: 'Patio Gastronómico', en: 'Food Court & Gastronomy' },
    { es: 'Estacionamiento General', en: 'General Parking' },
    { es: 'Descargar Mapa del Predio (PDF)', en: 'Download Venue Map (PDF)' },
    { es: 'Mapa completo con referencias de stands, accesos y servicios.', en: 'Full map with booth references, entry points, and services.' },
    { es: 'Descargar Mapa PDF', en: 'Download PDF Map' },
    { es: 'Descargar Mapa JPG', en: 'Download JPG Map' },
    { es: 'Rondas de Negocios B2B', en: 'B2B Business Rounds' },
    { es: 'Espacio de vinculación comercial directa para empresas, emprendedores e inversores.', en: 'Direct commercial matchmaking space for companies, entrepreneurs, and investors.' },
    { es: 'Agendar Reunión B2B', en: 'Schedule B2B Meeting' },
    { es: '¿Cómo funcionan las Rondas de Negocios?', en: 'How do Business Rounds work?' },
    { es: 'Proceso ágil y estructurado para conectar oferta y demanda internacional.', en: 'Agile and structured process to connect international supply and demand.' },
    { es: '1. Registro y Perfil', en: '1. Registration & Profile' },
    { es: 'Completá el formulario con la oferta/demanda de tu empresa.', en: 'Fill out the form with your company\'s supply/demand.' },
    { es: '2. Matchmaking', en: '2. Matchmaking' },
    { es: 'El sistema inteligente cruza intereses y agendás reuniones.', en: 'The smart system matches interests and schedules meetings.' },
    { es: '3. Encuentro Presencial', en: '3. On-site Meeting' },
    { es: 'Reuniones ejecutivas de 30 minutos en el Salón B2B.', en: '30-minute executive meetings in the B2B Lounge.' },
    { es: 'Empresas Oferentes y Demandantes', en: 'Offering & Requesting Companies' },
    { es: 'Filtrá por sector o país para agendar encuentros clave.', en: 'Filter by sector or country to schedule key meetings.' },
    { es: 'Directorio de Expositores', en: 'Exhibitor Directory' },
    { es: 'Conocé las empresas, marcas e instituciones participantes de ExpoJuy 2026.', en: 'Meet participating companies, brands, and institutions at ExpoJuy 2026.' },
    { es: 'Todos los Rubros', en: 'All Sectors' },
    { es: 'Minería y Energía', en: 'Mining & Energy' },
    { es: 'Agroindustria', en: 'Agroindustry' },
    { es: 'Tecnología e Innovación', en: 'Technology & Innovation' },
    { es: 'Turismo y Comercio', en: 'Tourism & Trade' },
    { es: 'Ver Ficha Completa', en: 'View Full Profile' },
    { es: 'Agenda de Actividades', en: 'Event Schedule' },
    { es: 'Conferencias, paneles, presentaciones de productos y shows en vivo.', en: 'Lectures, panels, product launches, and live shows.' },
    { es: 'Todas las salas', en: 'All Rooms' },
    { es: 'Auditorio Principal', en: 'Main Auditorium' },
    { es: 'Salón B2B', en: 'B2B Room' },
    { es: 'Escenario Exterior', en: 'Outdoor Stage' },
    { es: 'Agregar a mi agenda', en: 'Add to my schedule' },
    { es: '17.ª Edición Multisectorial · 9 al 12 de Octubre 2026', en: '17th Multisectoral Edition · October 9-12, 2026' },
    { es: 'El punto de encuentro empresarial del Norte Argentino y la Región ZICOSUR', en: 'The business gathering point of Northern Argentina & ZICOSUR Region' },
    { es: 'ExpoJuy reúne a empresas líderes, instituciones, emprendedores y organismos del Corredor Bioceánico para potenciar oportunidades de inversión y comercio exterior.', en: 'ExpoJuy gathers leading companies, institutions, entrepreneurs, and organizations from the Bioceanic Corridor to boost investment opportunities and foreign trade.' },
    { es: 'Participá de las Rondas B2B', en: 'Join B2B Matchmaking' },
    { es: 'Ver agenda y entradas', en: 'View schedule & tickets' },
    { es: 'Registrá mi empresa', en: 'Register my company' },
    { es: 'Cómo funcionan las rondas', en: 'How matchmaking works' },
    { es: 'Reservar mi stand', en: 'Book my booth' },
    { es: 'Buscar en directorio', en: 'Search directory' },
    { es: 'Explorar por categorías', en: 'Explore by category' },
    { es: '9 al 12 Octubre 2026', en: 'October 9-12, 2026' },
    { es: '4 días de exposición multisectorial', en: '4 days of multisectoral exhibition' },
    { es: 'San Salvador de Jujuy', en: 'San Salvador de Jujuy' },
    { es: '+250 Expositores', en: '+250 Exhibitors' },
    { es: 'Empresas, PyMEs e instituciones', en: 'Companies, SMEs & institutions' },
    { es: '4 Jornadas con actividades continuas', en: '4 Days of continuous activities' },
    { es: '+40 Oradores & Paneles', en: '+40 Speakers & Panels' },
    { es: 'Auditorios y salones temáticos', en: 'Auditoriums & thematic halls' },
    { es: 'Escenario Central', en: 'Main Stage' },
    { es: 'Shows en vivo y muestras culturales', en: 'Live shows & cultural exhibitions' },
    { es: 'Qué es ExpoJuy', en: 'About ExpoJuy' },
    { es: 'Corredor Bioceánico', en: 'Bioceanic Corridor' },
    { es: 'Ecosistema productivo', en: 'Productive Ecosystem' },
    { es: 'Rondas B2B', en: 'B2B Matchmaking' },
    { es: 'Reservar stand', en: 'Book Booth' },
    { es: 'Directorio expositores', en: 'Exhibitors Directory' },
    { es: 'Agenda de actividades', en: 'Events Schedule' },
    { es: 'Entradas y Pases', en: 'Tickets & Passes' },
    { es: 'Plano del predio', en: 'Venue Map' },
    { es: 'Contacto comercial', en: 'Commercial Contact' },
    { es: 'Acreditaciones prensa', en: 'Press Accreditation' },
    { es: 'Preguntas frecuentes', en: 'FAQ' },
    { es: 'Organizadores Institucionales', en: 'Institutional Organizers' },
    { es: 'Gobierno de Jujuy', en: 'Government of Jujuy' },
    { es: 'Cámara de Comercio Exterior', en: 'Chamber of Foreign Trade' },
    { es: 'Unión Industrial de Jujuy', en: 'Industrial Union of Jujuy' },
    { es: 'Suscribite para recibir actualizaciones de la agenda y rondas de negocios.', en: 'Subscribe to receive agenda updates and B2B rounds.' },
    { es: '© 2026 ExpoJuy. Todos los derechos reservados. Contenido demostrativo para prototipo web.', en: '© 2026 ExpoJuy. All rights reserved. Demo content for web prototype.' }
  ];

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while ((node = walker.nextNode())) {
    const rawText = node.nodeValue;
    const trimmedText = rawText.trim();
    if (!trimmedText) continue;

    for (const item of dict) {
      const sourceStr = isEn ? item.es : item.en;
      const targetStr = isEn ? item.en : item.es;

      if (trimmedText === sourceStr) {
        node.nodeValue = rawText.replace(sourceStr, targetStr);
        break;
      }
    }
  }

  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    el.textContent = isEn ? el.getAttribute('data-en') : el.getAttribute('data-es');
  });

  const placeholderMap = [
    { es: 'Tu correo electrónico', en: 'Your email address' },
    { es: 'Buscar actividad, orador o tema...', en: 'Search event, speaker or topic...' },
    { es: 'Buscar por nombre de empresa, rubro, producto o número de stand...', en: 'Search by company name, sector, product or booth number...' }
  ];

  placeholderMap.forEach(item => {
    const fromPh = isEn ? item.es : item.en;
    const toPh = isEn ? item.en : item.es;
    document.querySelectorAll('input[placeholder]').forEach(input => {
      if (input.getAttribute('placeholder') === fromPh) {
        input.setAttribute('placeholder', toPh);
      }
    });
  });
}
