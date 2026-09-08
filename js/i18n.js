/* ==========================================================================
   EXPOJUY 2026 - INTERNATIONALIZATION (i18n) TRANSLATION ENGINE
   ========================================================================== */

const translations = {
  es: {
    // Nav & Common
    nav_expo: "La Expo",
    nav_b2b: "Vinculate B2B",
    nav_expositores: "Expositores",
    nav_agenda: "Agenda",
    nav_visita: "Visitá y Mapa",
    btn_buy_tickets: "Comprar entradas",
    
    // Home View
    hero_eyebrow: "17.ª EDICIÓN MULTISECTORIAL · 9 AL 12 DE OCTUBRE DE 2026",
    hero_location: "CIUDAD CULTURAL · SAN SALVADOR DE JUJUY",
    hero_title: "Jujuy en el centro de todo.",
    hero_desc: "ExpoJuy 2026 conecta el talento, el trabajo y la capacidad productiva jujeña con oportunidades de negocio, inversión e integración regional a través del Corredor Bioceánico.",
    btn_b2b_participate: "Participá de las Rondas B2B",
    btn_view_agenda: "Ver agenda completa",
    hero_ticker_1: "Corredor Bioceánico Integrado",
    hero_ticker_2: "4 Países Confirmados (AR, CL, PY, BR)",
    hero_video_label: "Ver Recorrido 3D & Video Institucional",
    hero_venue: "Ciudad Cultural · Pabellones A, B y Exterior",

    exp_eyebrow: "Accesos Personalizados",
    exp_title: "Elegí tu experiencia en ExpoJuy 2026",
    card_pub_badge: "Público General",
    card_pub_title: "Quiero visitar",
    card_pub_desc: "Agenda de espectáculos, compra de entradas anticipadas, mapa interactivo y accesos peatonales ágiles.",
    btn_plan_visit: "Planificar mi visita",

    card_exp_badge: "Empresas & PyMEs",
    card_exp_title: "Quiero exponer",
    card_exp_desc: "Disponibilidad de stands, manual del expositor, equipamiento ferial y contacto directo con la gerencia.",
    btn_reserve_stand: "Reservar un stand",

    card_b2b_badge: "Inversores & Compradores",
    card_b2b_title: "Busco oportunidades",
    card_b2b_desc: "Conexión directa con sectores productivos, agendas bilaterales y Rondas B2B internacionales de negocios.",
    btn_enter_b2b: "Ingresar a Rondas B2B",

    metrics_eyebrow: "Trayectoria & Futuro",
    metrics_title: "La feria que conecta producción, talento y oportunidades.",
    metrics_desc: "ExpoJuy 2026 es la 17.ª edición de la feria multisectorial de Jujuy. Reúne empresas, emprendedores, instituciones y delegaciones internacionales del Corredor Bioceánico.",
    metric_1_title: "Ediciones",
    metric_1_subtitle: "Trayectoria regional consolidada",
    metric_2_title: "Países",
    metric_2_subtitle: "Integración del Corredor Bioceánico",
    metric_3_title: "Expositores",
    metric_3_subtitle: "Stands de industria, minería y agro",
    metric_4_title: "Visitantes",
    metric_4_subtitle: "Estimación de afluencia general",

    corridor_eyebrow: "Eje Geopolítico y Comercial",
    corridor_title: "Una región conectada por más que rutas.",
    corridor_desc: "El Corredor Bioceánico abre nuevas posibilidades de integración entre Argentina, Chile, Paraguay y Brasil. ExpoJuy transforma esa conexión en encuentros, proyectos y contratos.",
    btn_know_corridor: "Conocé las Rondas Bioceánicas",
    corridor_map_title: "Esquema Bioceánico Eje Capricornio",

    // B2B View
    b2b_banner_eyebrow: "Acreditación Comercial Bioceánica",
    b2b_banner_title: "Rondas de Vinculación B2B ExpoJuy 2026",
    b2b_banner_desc: "Reuniones de negocios programadas uno a uno entre empresas locales, proveedores y delegaciones compradoras de Chile, Paraguay y Brasil.",
    btn_register_company_b2b: "Inscribir mi Empresa en Rondas B2B",
    b2b_feature_1_title: "Agendamiento Pre-Evento",
    b2b_feature_1_desc: "Coordinación anticipada de perfiles de contraparte.",
    b2b_feature_2_title: "Mesas Sectoriales Exclusivas",
    b2b_feature_2_desc: "Minería, Agroindustria, Servicios y Tecnología.",
    b2b_feature_3_title: "Soporte Trilingüe",
    b2b_feature_3_desc: "Asistencia en Español, Portugués e Inglés.",
    b2b_delegations_title: "Delegaciones Internacionales Confirmadas",
    b2b_chile_desc: "Operadores portuarios, logística minera y proveedores de servicios industriales.",
    b2b_py_desc: "Sector agroganadero, biocarburantes y transporte pesado de carga internacional.",
    b2b_br_desc: "Comercio exterior, exportadores de grano y maquinarias pesadas.",
    b2b_ar_desc: "Productores de litio, biotecnología, alimentos con denominación de origen y turismo.",

    // Expositores View
    exhibitors_eyebrow: "Directorio Comercial",
    exhibitors_title: "Expositores ExpoJuy 2026",
    exhibitors_subtitle: "Explorá las empresas, marcas y organismos presentes en el predio ferial.",
    btn_reserve_space: "Reservar espacio de Stand",
    chip_all: "Todos",
    chip_mining: "Minería y Energía",
    chip_agro: "Agroindustria",
    chip_tech: "Tecnología & Software",
    chip_industry: "Industria & Logística",
    chip_tourism: "Turismo & Servicios",

    // Agenda View
    agenda_header_badge: "CRONOGRAMA OFICIAL · CIUDAD CULTURAL",
    agenda_header_title: "Agenda ExpoJuy 2026",
    agenda_header_subtitle: "Charlas magistrales, conferencias sectoriales y espectáculos en vivo.",
    agenda_period_label: "Muestra General",
    my_agenda_title: "Mi Agenda Guardada",
    my_agenda_empty: "No has guardado actividades aún.<br/>Explorá la agenda y presioná \"+ Agendar\".",
    btn_export_pdf: "Descargar Resumen en PDF",

    // Visita View
    visit_eyebrow: "Guía del Visitante",
    visit_title: "Visitá y Mapa del Predio Ferial",
    visit_subtitle: "Ubicación, accesos, transporte, horarios y distribución de pabellones en la Ciudad Cultural.",
    btn_buy_tickets_now: "Comprar entradas ahora",
    map_section_title: "Plano Interactivo del Predio Ferial",
    map_filter_all: "Ver Todo",
    map_filter_stage: "Escenario Central",
    map_prompt_title: "Hacé clic en cualquier área del plano",
    map_prompt_desc: "Seleccioná un pabellón o sector para ver detalles de stands y servicios disponibles.",
    btn_reserve_stand_here: "Reservar Stand aquí"
  },
  en: {
    // Nav & Common
    nav_expo: "The Expo",
    nav_b2b: "B2B Meetings",
    nav_expositores: "Exhibitors",
    nav_agenda: "Schedule",
    nav_visita: "Visit & Map",
    btn_buy_tickets: "Buy Tickets",

    // Home View
    hero_eyebrow: "17TH MULTISECTORIAL EDITION · OCT 9-12, 2026",
    hero_location: "CIUDAD CULTURAL · SAN SALVADOR DE JUJUY",
    hero_title: "Jujuy at the center of everything.",
    hero_desc: "ExpoJuy 2026 connects Jujuy's talent, industry, and productive capacity with business, investment, and regional integration opportunities across the Bioceanic Corridor.",
    btn_b2b_participate: "Participate in B2B Rounds",
    btn_view_agenda: "View full schedule",
    hero_ticker_1: "Integrated Bioceanic Corridor",
    hero_ticker_2: "4 Confirmed Countries (AR, CL, PY, BR)",
    hero_video_label: "Watch 3D Tour & Official Video",
    hero_venue: "Ciudad Cultural · Pavilions A, B & Outdoor Area",

    exp_eyebrow: "Tailored Access",
    exp_title: "Choose your experience at ExpoJuy 2026",
    card_pub_badge: "General Public",
    card_pub_title: "I want to visit",
    card_pub_desc: "Show schedule, advance ticket purchases, interactive map, and streamlined pedestrian entry.",
    btn_plan_visit: "Plan my visit",

    card_exp_badge: "Companies & SMEs",
    card_exp_title: "I want to exhibit",
    card_exp_desc: "Booth availability, exhibitor handbook, fair equipment, and direct commercial management contact.",
    btn_reserve_stand: "Reserve a booth",

    card_b2b_badge: "Investors & Buyers",
    card_b2b_title: "Looking for opportunities",
    card_b2b_desc: "Direct connection with productive sectors, bilateral agendas, and international B2B business rounds.",
    btn_enter_b2b: "Join B2B Rounds",

    metrics_eyebrow: "Legacy & Future",
    metrics_title: "The trade fair connecting production, talent, and opportunity.",
    metrics_desc: "ExpoJuy 2026 is the 17th edition of Jujuy's multisectorial trade fair, bringing together companies, entrepreneurs, and international delegates.",
    metric_1_title: "Editions",
    metric_1_subtitle: "Established regional history",
    metric_2_title: "Countries",
    metric_2_subtitle: "Bioceanic Corridor integration",
    metric_3_title: "Exhibitors",
    metric_3_subtitle: "Industry, mining, and agro booths",
    metric_4_title: "Visitors",
    metric_4_subtitle: "Estimated general attendance",

    corridor_eyebrow: "Geopolitical & Trade Axis",
    corridor_title: "A region connected by more than roads.",
    corridor_desc: "The Bioceanic Corridor opens new integration paths between Argentina, Chile, Paraguay, and Brazil. ExpoJuy turns connections into deals.",
    btn_know_corridor: "Discover Bioceanic Rounds",
    corridor_map_title: "Bioceanic Capricorn Axis Diagram",

    // B2B View
    b2b_banner_eyebrow: "Bioceanic Trade Accreditation",
    b2b_banner_title: "ExpoJuy 2026 B2B Business Matchmaking",
    b2b_banner_desc: "One-on-one scheduled business meetings between local companies, suppliers, and buyers from Chile, Paraguay, and Brazil.",
    btn_register_company_b2b: "Register My Company in B2B Rounds",
    b2b_feature_1_title: "Pre-Event Matchmaking",
    b2b_feature_1_desc: "Advance coordination of counterpart profiles.",
    b2b_feature_2_title: "Exclusive Sector Tables",
    b2b_feature_2_desc: "Mining, Agro-industry, Services, and Tech.",
    b2b_feature_3_title: "Trilingual Support",
    b2b_feature_3_desc: "Assistance in Spanish, Portuguese, and English.",
    b2b_delegations_title: "Confirmed International Delegations",
    b2b_chile_desc: "Port operators, mining logistics, and industrial service providers.",
    b2b_py_desc: "Agro-livestock sector, biofuels, and heavy cargo transport.",
    b2b_br_desc: "Foreign trade, grain exporters, and heavy machinery.",
    b2b_ar_desc: "Lithium producers, biotechnology, regional food brands, and tourism.",

    // Expositores View
    exhibitors_eyebrow: "Commercial Directory",
    exhibitors_title: "ExpoJuy 2026 Exhibitors",
    exhibitors_subtitle: "Explore companies, brands, and organizations present at the fairground.",
    btn_reserve_space: "Reserve Booth Space",
    chip_all: "All",
    chip_mining: "Mining & Energy",
    chip_agro: "Agro-industry",
    chip_tech: "Technology & Software",
    chip_industry: "Industry & Logistics",
    chip_tourism: "Tourism & Services",

    // Agenda View
    agenda_header_badge: "OFFICIAL SCHEDULE · CIUDAD CULTURAL",
    agenda_header_title: "ExpoJuy 2026 Schedule",
    agenda_header_subtitle: "Keynote talks, sector conferences, and live entertainment.",
    agenda_period_label: "General Exhibition",
    my_agenda_title: "My Saved Schedule",
    my_agenda_empty: "No saved activities yet.<br/>Explore the schedule and press \"+ Add to my schedule\".",
    btn_export_pdf: "Download PDF Summary",

    // Visita View
    visit_eyebrow: "Visitor Guide",
    visit_title: "Visit & Fairground Map",
    visit_subtitle: "Location, access points, transport, schedules, and pavilion layout at Ciudad Cultural.",
    btn_buy_tickets_now: "Buy Tickets Now",
    map_section_title: "Interactive Fairground Layout",
    map_filter_all: "View All",
    map_filter_stage: "Central Stage",
    map_prompt_title: "Click any area on the map",
    map_prompt_desc: "Select a pavilion or area to view booth details and available services.",
    btn_reserve_stand_here: "Reserve Booth Here"
  }
};

let currentLanguage = localStorage.getItem('expojuy_lang') || 'es';

export function getLanguage() {
  return currentLanguage;
}

export function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('expojuy_lang', lang);

  updateDOMTranslations();

  const btnEs = document.getElementById('btn-lang-es');
  const btnEn = document.getElementById('btn-lang-en');

  if (btnEs && btnEn) {
    if (lang === 'es') {
      btnEs.classList.add('bg-white', 'text-primary-container', 'shadow-sm');
      btnEn.classList.remove('bg-white', 'text-primary-container', 'shadow-sm');
    } else {
      btnEn.classList.add('bg-white', 'text-primary-container', 'shadow-sm');
      btnEs.classList.remove('bg-white', 'text-primary-container', 'shadow-sm');
    }
  }

  if (window.showToast) {
    window.showToast(lang === 'es' ? 'Idioma cambiado a Español (ES)' : 'Language set to English (EN)', 'info');
  }
}

export function updateDOMTranslations() {
  const langDict = translations[currentLanguage];
  if (!langDict) return;

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.dataset.i18n;
    if (langDict[key]) {
      // Preserve child HTML icons if present
      if (el.children.length > 0 && el.querySelector('.material-symbols-outlined')) {
        const icon = el.querySelector('.material-symbols-outlined').outerHTML;
        el.innerHTML = `${icon} <span>${langDict[key]}</span>`;
      } else {
        el.innerHTML = langDict[key];
      }
    }
  });
}

export function getText(key) {
  return translations[currentLanguage]?.[key] || key;
}
