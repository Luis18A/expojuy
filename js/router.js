/* ExpoJuy 2026 - Client URL Router & Page View Controller (Reference Design Layout) */

const routes = {
  '/': renderHomePage,
  '/la-expo': renderLaExpoPage,
  '/la-expo/sobre-expojuy-2026': renderLaExpoSobrePage,
  '/la-expo/corredor-bioceanico': renderCorredorBioceanicoPage,
  '/la-expo/sectores': renderSectoresProductivosPage,
  '/la-expo/impacto-local': renderImpactoLocalPage,
  '/rondas-de-vinculacion': renderRondasB2BPage,
  '/expositores': renderExpositoresPage,
  '/expositores/reserva-de-stand': renderReservaStandPage,
  '/expositores/manual': renderManualExpositorPage,
  '/agenda': renderAgendaPage,
  '/visita': renderVisitaPage,
  '/visita/entradas': renderEntradasPage,
  '/visita/mapa': renderMapaPage,
  '/visita/como-llegar': renderComoLlegarPage,
  '/visita/horarios-y-servicios': renderHorariosServiciosPage,
  '/preguntas-frecuentes': renderFAQPage,
  '/novedades': renderNovedadesPage,
  '/galeria': renderGaleriaPage,
  '/contacto': renderContactoPage,
  '/sponsors': renderSponsorsPage,
  '/terminos-y-privacidad': renderTerminosPage,
  '/accesibilidad': renderAccesibilidadPage
};

function navigateTo(path, event) {
  if (event) event.preventDefault();
  window.location.hash = path;
}

function handleRoute() {
  let path = window.location.hash.slice(1) || '/';
  if (!routes[path]) {
    path = '/';
  }

  document.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
    const href = link.getAttribute('onclick') || '';
    if (href.includes(`'${path}'`)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const mainContainer = document.getElementById('main-content');
  if (!mainContainer) return;

  mainContainer.className = 'view-route-container';
  
  const renderFn = routes[path] || renderHomePage;
  renderFn(mainContainer);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  setTimeout(() => {
    mainContainer.classList.add('active');
  }, 50);
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);

/* ---------------- 1. HOME VIEW (MATCHING REFERENCE DESIGN) ---------------- */
function renderHomePage(container) {
  document.title = "ExpoJuy 2026 | Conectando Países, Creando Oportunidades";
  
  container.innerHTML = `
    <!-- 1. HERO SECTION (Full Photo Banner) -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content animate-fade-in">
          <span class="badge badge-cyan" style="margin-bottom:16px; font-size:0.85rem;"><i class="fa-solid fa-location-dot"></i> CIUDAD CULTURAL · SAN SALVADOR DE JUJUY</span>
          <h1 class="hero-title">EXPOJUY 2026</h1>
          <p class="hero-subtitle">
            17ª Edición Internacional · 9 al 12 de Octubre de 2026<br>
            La Muestra Multisectorial más importante del Norte Argentino
          </p>

          <!-- Live Countdown -->
          <div class="countdown-box" style="margin-bottom:32px;">
            <div class="countdown-card" style="background:#FFF; border:1px solid #7552F2;"><div class="countdown-val" id="cd-days" style="color:#730DD9;-webkit-text-fill-color:#730DD9;">00</div><div class="countdown-lbl" style="color:#7552F2;">Días</div></div>
            <div class="countdown-card" style="background:#FFF; border:1px solid #7552F2;"><div class="countdown-val" id="cd-hours" style="color:#730DD9;-webkit-text-fill-color:#730DD9;">00</div><div class="countdown-lbl" style="color:#7552F2;">Horas</div></div>
            <div class="countdown-card" style="background:#FFF; border:1px solid #7552F2;"><div class="countdown-val" id="cd-mins" style="color:#730DD9;-webkit-text-fill-color:#730DD9;">00</div><div class="countdown-lbl" style="color:#7552F2;">Minutos</div></div>
            <div class="countdown-card" style="background:#FFF; border:1px solid #7552F2;"><div class="countdown-val" id="cd-secs" style="color:#730DD9;-webkit-text-fill-color:#730DD9;">00</div><div class="countdown-lbl" style="color:#7552F2;">Segundos</div></div>
          </div>

          <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="navigateTo('/visita/entradas', event)"><i class="fa-solid fa-ticket"></i> Registro / Entradas</button>
            <button class="btn btn-secondary" onclick="navigateTo('/visita/mapa', event)"><i class="fa-solid fa-map"></i> Ver Plano Interactivo</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. FEATURE BLOCK SECTION (2-Column "A bold headline that delivers") -->
    <section class="feature-block-section">
      <div class="container">
        <div class="grid-2" style="align-items:center;">
          <!-- Left: Illustrative Graphic -->
          <div class="feature-graphic-card white-card">
            <svg class="feature-graphic-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="url(#grad-flower)"/>
              <path d="M100 30 C130 30 150 60 150 90 C150 140 100 170 100 170 C100 170 50 140 50 90 C50 60 70 30 100 30 Z" fill="#7552F2" opacity="0.8"/>
              <circle cx="100" cy="90" r="30" fill="#29C7D9"/>
              <defs>
                <linearGradient id="grad-flower" x1="0" y1="0" x2="200" y2="200">
                  <stop offset="0%" stop-color="#A988F2"/>
                  <stop offset="100%" stop-color="#29C7D9"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <!-- Right: Text Content -->
          <div style="padding-left:12px;">
            <span class="badge badge-cyan" style="margin-bottom:12px;">PROPUESTA DE VALOR</span>
            <h2 class="section-title" style="text-align:left; font-size:2.8rem;">Conectando países, creando oportunidades</h2>
            <p style="color:var(--color-muted-text); font-size:1.1rem; line-height:1.7; margin-bottom:32px;">
              El espacio internacional de convergencia para el Litio, la Transición Energética, Agroindustria y Comercio regional en el Corredor Bioceánico Paso de Jama.
            </p>
            <div style="display:flex; gap:16px;">
              <button class="btn btn-primary" onclick="navigateTo('/rondas-de-vinculacion', event)">Rondas B2B</button>
              <button class="btn btn-secondary" onclick="navigateTo('/la-expo/sectores', event)">Explorar Sectores</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. LARGE IMPACT QUOTE SECTION -->
    <section class="container">
      <div class="impact-quote-block">
        <blockquote class="impact-quote-text">
          “Conectando países, creando oportunidades en el corazón del Corredor Bioceánico y el Triángulo del Litio.”
        </blockquote>
      </div>
    </section>

    <!-- 4. SHOWCASE GRID 4 COLUMNS -->
    <section style="padding: 60px 0;">
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-tag">SECTORES DESTACADOS</span>
          <h2 class="section-title">Ecosistema Productivo de Jujuy</h2>
        </div>

        <div class="grid-4">
          ${EXPO_DATA.sectors.slice(0, 4).map(s => `
            <div class="white-card" style="padding:28px; height:100%; display:flex; flex-direction:column;">
              <div style="width:48px; height:48px; border-radius:12px; background:rgba(117, 82, 242, 0.1); color:var(--color-primary-dark); display:flex; align-items:center; justify-content:center; font-size:1.4rem; margin-bottom:16px;">
                <i class="${s.icon}"></i>
              </div>
              <span class="badge badge-regular" style="align-self:flex-start; margin-bottom:10px;">${s.stats}</span>
              <h3 style="font-size:1.25rem; color:var(--color-primary-dark); margin-bottom:8px;">${s.name}</h3>
              <p style="color:var(--color-muted-text); font-size:0.88rem; line-height:1.5; margin-bottom:20px; flex:1;">${s.desc}</p>
              <a href="#/la-expo/sectores" class="link-read-more" onclick="navigateTo('/la-expo/sectores', event)">Leer más <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 5. FAQS SECTION (Matching Reference Layout: Title Left, Cards Right) -->
    <section style="padding: 60px 0;">
      <div class="container">
        <div class="faqs-section-grid">
          <div>
            <h2 class="faqs-main-heading">FAQS</h2>
            <p style="color:var(--color-muted-text); font-size:0.95rem; margin-top:12px;">Preguntas frecuentes sobre la exposición, acreditaciones y mapa.</p>
          </div>

          <div>
            <div class="faq-item-card">
              <div class="faq-bullet-icon">●</div>
              <div>
                <h4 style="font-size:1.1rem; color:var(--color-primary-dark); margin-bottom:6px;">¿Cuáles son las fechas y horarios de ExpoJuy 2026?</h4>
                <p style="color:var(--color-muted-text); font-size:0.9rem; line-height:1.6;">
                  ExpoJuy 2026 se realizará del 9 al 12 de Octubre de 2026 en Ciudad Cultural, San Salvador de Jujuy. Horario al público general de 15:00 a 23:00 hs.
                </p>
              </div>
            </div>

            <div class="faq-item-card">
              <div class="faq-bullet-icon">◆</div>
              <div>
                <h4 style="font-size:1.1rem; color:var(--color-primary-dark); margin-bottom:6px;">¿Cómo acreditarse a las Rondas de Negocios B2B?</h4>
                <p style="color:var(--color-muted-text); font-size:0.9rem; line-height:1.6;">
                  Las empresas pueden registrarse a través de la pestaña 'Vinculate B2B' en la plataforma de matchmaking Sauken-BRM para agendar reuniones 1 a 1.
                </p>
              </div>
            </div>

            <div class="faq-item-card">
              <div class="faq-bullet-icon">▲</div>
              <div>
                <h4 style="font-size:1.1rem; color:var(--color-primary-dark); margin-bottom:6px;">¿Cómo compro mi Pase General con Código QR?</h4>
                <p style="color:var(--color-muted-text); font-size:0.9rem; line-height:1.6;">
                  Ingresa a la sección 'Visitá > Entradas', selecciona tu tipo de entrada y completa tus datos para emitir tu Pase Digital QR instantáneo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. SPONSORS TICKER SECTION ("Drop some names with confidence") -->
    <section class="sponsors-ticker-section">
      <div class="container">
        <div class="sponsors-ticker-label">Drop some names with confidence:</div>
        <div class="sponsors-ticker">
          <div class="sponsor-logo-item">MINERA EXAR</div>
          <div class="sponsor-logo-item">SALES DE JUJUY</div>
          <div class="sponsor-logo-item">CANNAVA S.E.</div>
          <div class="sponsor-logo-item">LEDESMA S.A.</div>
          <div class="sponsor-logo-item">CFI</div>
          <div class="sponsor-logo-item">GOBIERNO DE JUJUY</div>
        </div>
      </div>
    </section>
  `;

  startCountdownTimer();
}

/* ---------------- 2. LA EXPO VIEWS (LIGHT THEME) ---------------- */
function renderLaExpoPage(container) {
  renderLaExpoSobrePage(container);
}

function renderLaExpoSobrePage(container) {
  document.title = "Sobre ExpoJuy 2026 | Definición Institucional";
  container.innerHTML = `
    <section style="padding: 120px 0 60px;">
      <div class="container">
        <span class="section-tag">INSTITUCIONAL</span>
        <h1 class="section-title" style="text-align:left; font-size:3rem;">Sobre ExpoJuy 2026</h1>
        <p class="subtitle-text" style="margin-bottom:32px;">17ª Edición de la Muestra Multisectorial del Norte Argentino.</p>

        <div class="grid-2">
          <div class="white-card" style="padding:36px;">
            <h3 style="color:var(--color-primary-dark); font-size:1.4rem; margin-bottom:12px;"><i class="fa-solid fa-bullseye" style="color:var(--color-cyan); margin-right:8px;"></i> Propósito</h3>
            <p style="color:var(--color-muted-text); line-height:1.7;">
              Organizada por la Cámara de Comercio Exterior de Jujuy, la feria reúne a líderes industriales, autoridades gubernamentales y delegaciones internacionales.
            </p>
          </div>
          <div class="white-card" style="padding:36px;">
            <h3 style="color:var(--color-primary-dark); font-size:1.4rem; margin-bottom:12px;"><i class="fa-solid fa-globe" style="color:var(--color-primary-mid); margin-right:8px;"></i> Integración Regional</h3>
            <p style="color:var(--color-muted-text); line-height:1.7;">
              Consolidamos la integración bioceánica entre el Océano Atlántico y el Océano Pacífico a través del Paso de Jama.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCorredorBioceanicoPage(container) {
  document.title = "Corredor Bioceánico | ExpoJuy 2026";
  container.innerHTML = `
    <section style="padding: 120px 0 60px;">
      <div class="container">
        <span class="section-tag">CONECTIVIDAD REGIONAL</span>
        <h1 class="section-title" style="text-align:left;">Corredor Bioceánico Paso de Jama</h1>
        <div class="white-card" style="padding:36px; margin-top:24px;">
          <h3 style="color:var(--color-primary-dark); margin-bottom:12px;">Eje Logístico del Norte Grande</h3>
          <p style="color:var(--color-muted-text); line-height:1.7;">
            Vinculación estratégica entre puertos de Chile, Argentina, Paraguay y Brasil para dinamizar las exportaciones agroindustriales y mineras.
          </p>
        </div>
      </div>
    </section>
  `;
}

function renderSectoresProductivosPage(container) {
  document.title = "Sectores Productivos | ExpoJuy 2026";
  container.innerHTML = `
    <section style="padding: 120px 0 60px;">
      <div class="container">
        <span class="section-tag">MATRIZ ECONÓMICA</span>
        <h1 class="section-title">Sectores Productivos de Jujuy</h1>
        <div class="grid-3" style="margin-top:32px;">
          ${EXPO_DATA.sectors.map(s => `
            <div class="white-card" style="padding:32px;">
              <div style="font-size:2rem; color:var(--color-primary-dark); margin-bottom:12px;"><i class="${s.icon}"></i></div>
              <h3 style="color:var(--color-primary-dark); margin-bottom:8px;">${s.name}</h3>
              <p style="color:var(--color-muted-text); font-size:0.9rem; line-height:1.6;">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderImpactoLocalPage(container) {
  document.title = "Impacto & Talento Jujeño | ExpoJuy 2026";
  container.innerHTML = `<section style="padding:120px 0 60px;"><div class="container"><h1 class="section-title">Impacto y Talento Jujeño</h1></div></section>`;
}

/* ---------------- 3. VINCULATE B2B ---------------- */
function renderRondasB2BPage(container) {
  document.title = "Vinculate B2B | Sauken-BRM ExpoJuy 2026";
  container.innerHTML = `
    <section style="padding: 120px 0 60px;">
      <div class="container">
        <div class="white-card" style="padding:48px;">
          <span class="badge badge-cyan" style="margin-bottom:12px;">SAUKEN-BRM MATCHMAKING</span>
          <h1 class="section-title" style="text-align:left;">Rondas de Vinculación B2B</h1>
          <p style="color:var(--color-muted-text); font-size:1.05rem; line-height:1.7; margin-bottom:32px;">
            Espacio de reuniones comerciales ejecutivas de 20 minutos para conectar compradores e inversores con proveedores regionales.
          </p>
          <button class="btn btn-primary" onclick="openSaukenDemoModal()"><i class="fa-solid fa-user-plus"></i> Inscribir Mi Empresa</button>
        </div>
      </div>
    </section>
  `;
}

/* ---------------- 4. EXPOSITORES ---------------- */
function renderExpositoresPage(container) {
  document.title = "Directorio de Expositores | ExpoJuy 2026";
  container.innerHTML = `
    <section style="padding: 120px 0 60px;">
      <div class="container">
        <span class="section-tag">DIRECTORIO</span>
        <h1 class="section-title">Expositores Confirmados</h1>
        <div id="exhibitors-container" style="margin-top:32px;"></div>
      </div>
    </section>
  `;
  renderExhibitorsDirectory('exhibitors-container');
}

function renderReservaStandPage(container) {
  document.title = "Quiero Exponer | Reserva de Stand ExpoJuy 2026";
  container.innerHTML = `
    <section style="padding: 120px 0 60px;">
      <div class="container" style="max-width:700px;">
        <div class="white-card" style="padding:40px;">
          <h1 class="section-title" style="text-align:left;">Reserva de Stand Comercial</h1>
          <form onsubmit="alert('Solicitud de stand enviada con éxito.'); navigateTo('/', event);">
            <div style="margin-bottom:16px;">
              <label style="font-size:0.85rem; color:var(--color-muted-text);">Nombre de la Empresa</label>
              <input type="text" required style="width:100%; padding:12px; border:1px solid #CBD5E1; border-radius:8px;" />
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;">Enviar Solicitud</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderManualExpositorPage(container) {
  container.innerHTML = `<section style="padding:120px 0 60px;"><div class="container"><h1 class="section-title">Manual del Expositor</h1></div></section>`;
}

/* ---------------- 5. AGENDA ---------------- */
function renderAgendaPage(container) {
  document.title = "Agenda de Actividades | ExpoJuy 2026";
  container.innerHTML = `
    <section style="padding: 120px 0 60px;">
      <div class="container">
        <span class="section-tag">CRONOGRAMA</span>
        <h1 class="section-title">Agenda Inteligente de Actividades</h1>
        <div id="full-agenda-container" style="margin-top:32px;"></div>
      </div>
    </section>
  `;
  renderAgendaTimeline('full-agenda-container', '9');
}

/* ---------------- 6. VISITÁ VIEWS ---------------- */
function renderVisitaPage(container) {
  renderEntradasPage(container);
}

function renderEntradasPage(container) {
  document.title = "Pase QR & Entradas | ExpoJuy 2026";
  container.innerHTML = `
    <section style="padding: 120px 0 60px;">
      <div class="container">
        <span class="section-tag">BOLETERÍA DIGITAL</span>
        <h1 class="section-title">Compra de Entradas & Pase Digital QR</h1>
        <div id="ticket-store-container" style="margin-top:32px;"></div>
      </div>
    </section>
  `;
  renderTicketStore('ticket-store-container');
}

function renderMapaPage(container) {
  document.title = "Mapa del Predio | ExpoJuy 2026";
  container.innerHTML = `
    <section style="padding: 120px 0 60px;">
      <div class="container">
        <h1 class="section-title">Plano Interactivo Ciudad Cultural</h1>
        <div id="page-map-container" style="margin-top:32px;"></div>
      </div>
    </section>
  `;
  renderInteractiveMap('page-map-container');
}

function renderComoLlegarPage(container) {
  container.innerHTML = `<section style="padding:120px 0 60px;"><div class="container"><h1 class="section-title">Cómo Llegar a Ciudad Cultural</h1></div></section>`;
}

function renderHorariosServiciosPage(container) {
  container.innerHTML = `<section style="padding:120px 0 60px;"><div class="container"><h1 class="section-title">Horarios y Servicios</h1></div></section>`;
}

function renderFAQPage(container) {
  container.innerHTML = `<section style="padding:120px 0 60px;"><div class="container"><h1 class="section-title">Preguntas Frecuentes</h1><div id="page-faq-container"></div></div></section>`;
  renderFAQList('page-faq-container');
}

/* ---------------- 7. NOVEDADES & GALERÍA ---------------- */
function renderNovedadesPage(container) {
  container.innerHTML = `<section style="padding:120px 0 60px;"><div class="container"><h1 class="section-title">Novedades & Noticias</h1></div></section>`;
}

function renderGaleriaPage(container) {
  container.innerHTML = `<section style="padding:120px 0 60px;"><div class="container"><h1 class="section-title">Galería Multimedia</h1></div></section>`;
}

/* ---------------- 8. CONTACTO & SOPORTE ---------------- */
function renderContactoPage(container) {
  container.innerHTML = `<section style="padding:120px 0 60px;"><div class="container"><h1 class="section-title">Formulario de Contacto</h1></div></section>`;
}

function renderSponsorsPage(container) {
  container.innerHTML = `<section style="padding:120px 0 60px;"><div class="container"><h1 class="section-title">Sponsors & Aliados</h1></div></section>`;
}

function renderTerminosPage(container) {
  container.innerHTML = `<section style="padding:120px 0 60px;"><div class="container"><h1>Términos y Privacidad</h1></div></section>`;
}

function renderAccesibilidadPage(container) {
  container.innerHTML = `<section style="padding:120px 0 60px;"><div class="container"><h1>Accesibilidad Digital</h1></div></section>`;
}

/* Helper Utils */
function renderFAQList(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = EXPO_DATA.faqs.map(f => `
    <div class="white-card" style="margin-bottom:16px; padding:20px;">
      <h4 style="font-size:1.05rem; margin-bottom:8px; color:var(--color-primary-dark);"><i class="fa-solid fa-circle-question" style="color:var(--color-cyan); margin-right:8px;"></i> ${f.q}</h4>
      <p style="color:var(--color-muted-text); font-size:0.9rem; line-height:1.6;">${f.a}</p>
    </div>
  `).join('');
}

function startCountdownTimer() {
  const target = new Date("2026-10-09T09:00:00-03:00").getTime();
  function update() {
    const now = new Date().getTime();
    const diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-mins');
    const sEl = document.getElementById('cd-secs');

    if (dEl) dEl.innerText = String(days).padStart(2, '0');
    if (hEl) hEl.innerText = String(hours).padStart(2, '0');
    if (mEl) mEl.innerText = String(mins).padStart(2, '0');
    if (sEl) sEl.innerText = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

function openSaukenDemoModal() {
  const modal = document.getElementById('ticket-modal');
  if (!modal) return;
  const content = document.getElementById('ticket-modal-content');
  content.innerHTML = `
    <div style="text-align:left;">
      <span class="badge badge-cyan" style="margin-bottom:12px;">SAUKEN-BRM MATCHMAKING</span>
      <h2 style="font-size:1.5rem; color:var(--color-primary-dark); margin-bottom:12px;">Acreditación Rondas B2B</h2>
      <form onsubmit="alert('Inscripción recibida con éxito.'); closeTicketModal();">
        <div style="margin-bottom:12px;">
          <label style="font-size:0.8rem; color:var(--color-muted-text);">Empresa</label>
          <input type="text" required style="width:100%; padding:10px; border:1px solid #CBD5E1; border-radius:6px;" />
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;">Completar Acreditación</button>
      </form>
    </div>
  `;
  modal.classList.add('active');
}
