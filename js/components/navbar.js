/* ExpoJuy 2026 - Official Header Navbar & Footer (Light Theme) */

function renderNavbarAndFooter() {
  const headerContainer = document.getElementById('header-root');
  const footerContainer = document.getElementById('footer-root');

  if (headerContainer) {
    headerContainer.innerHTML = `
      <header class="site-header" id="site-header">
        <div class="header-container">
          <!-- Official Logo Brand -->
          <a href="#/" class="brand-logo-container" onclick="navigateTo('/', event)">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="10" width="30" height="20" fill="#29C7D9" rx="3"/>
              <rect x="15" y="35" width="30" height="20" fill="#730DD9" rx="3"/>
              <path d="M52 10 H82 V55 C82 72 68 85 52 85 C36 85 22 72 22 55 H52 V10 Z" fill="#A988F2"/>
            </svg>
            <div>
              <div class="brand-logo-text">EXPOJUY<span style="color:#29C7D9; font-size:0.9rem; margin-left:4px;">2026</span></div>
              <div class="brand-logo-tagline">CONECTANDO PAÍSES · OPORTUNIDADES</div>
            </div>
          </a>

          <!-- Pill Navigation Menu -->
          <nav>
            <ul class="nav-links">
              <li class="nav-item">
                <a href="#/" class="nav-link active" onclick="navigateTo('/', event)">Inicio</a>
              </li>

              <li class="nav-item">
                <a href="#/la-expo/sobre-expojuy-2026" class="nav-link" onclick="navigateTo('/la-expo/sobre-expojuy-2026', event)">
                  La Expo <i class="fa-solid fa-chevron-down" style="font-size:0.7rem;"></i>
                </a>
                <div class="nav-dropdown">
                  <a href="#/la-expo/sobre-expojuy-2026" class="dropdown-link" onclick="navigateTo('/la-expo/sobre-expojuy-2026', event)"><i class="fa-solid fa-building-columns"></i> Sobre ExpoJuy 2026</a>
                  <a href="#/la-expo/corredor-bioceanico" class="dropdown-link" onclick="navigateTo('/la-expo/corredor-bioceanico', event)"><i class="fa-solid fa-route"></i> Corredor Bioceánico</a>
                  <a href="#/la-expo/sectores" class="dropdown-link" onclick="navigateTo('/la-expo/sectores', event)"><i class="fa-solid fa-boxes-stacked"></i> Sectores Productivos</a>
                  <a href="#/la-expo/impacto-local" class="dropdown-link" onclick="navigateTo('/la-expo/impacto-local', event)"><i class="fa-solid fa-chart-line"></i> Impacto Local</a>
                </div>
              </li>

              <li class="nav-item">
                <a href="#/rondas-de-vinculacion" class="nav-link" onclick="navigateTo('/rondas-de-vinculacion', event)"><i class="fa-solid fa-handshake"></i> Vinculate B2B</a>
              </li>

              <li class="nav-item">
                <a href="#/expositores" class="nav-link" onclick="navigateTo('/expositores', event)">
                  Expositores <i class="fa-solid fa-chevron-down" style="font-size:0.7rem;"></i>
                </a>
                <div class="nav-dropdown">
                  <a href="#/expositores" class="dropdown-link" onclick="navigateTo('/expositores', event)"><i class="fa-solid fa-list-check"></i> Directorio de Empresas</a>
                  <a href="#/expositores/reserva-de-stand" class="dropdown-link" onclick="navigateTo('/expositores/reserva-de-stand', event)"><i class="fa-solid fa-store"></i> Quiero Exponer (Reserva)</a>
                  <a href="#/expositores/manual" class="dropdown-link" onclick="navigateTo('/expositores/manual', event)"><i class="fa-solid fa-book"></i> Manual del Expositor</a>
                </div>
              </li>

              <li class="nav-item">
                <a href="#/agenda" class="nav-link" onclick="navigateTo('/agenda', event)">Agenda</a>
              </li>

              <li class="nav-item">
                <a href="#/visita/entradas" class="nav-link" onclick="navigateTo('/visita/entradas', event)">
                  Visitá <i class="fa-solid fa-chevron-down" style="font-size:0.7rem;"></i>
                </a>
                <div class="nav-dropdown">
                  <a href="#/visita/entradas" class="dropdown-link" onclick="navigateTo('/visita/entradas', event)"><i class="fa-solid fa-ticket"></i> Entradas & Pase QR</a>
                  <a href="#/visita/mapa" class="dropdown-link" onclick="navigateTo('/visita/mapa', event)"><i class="fa-solid fa-map-location-dot"></i> Mapa Interactivo</a>
                  <a href="#/visita/como-llegar" class="dropdown-link" onclick="navigateTo('/visita/como-llegar', event)"><i class="fa-solid fa-location-arrow"></i> Cómo Llegar</a>
                  <a href="#/visita/horarios-y-servicios" class="dropdown-link" onclick="navigateTo('/visita/horarios-y-servicios', event)"><i class="fa-solid fa-clock"></i> Horarios & Servicios</a>
                  <a href="#/preguntas-frecuentes" class="dropdown-link" onclick="navigateTo('/preguntas-frecuentes', event)"><i class="fa-solid fa-circle-question"></i> Preguntas Frecuentes</a>
                </div>
              </li>
            </ul>
          </nav>

          <button class="btn btn-cyan" style="padding:8px 18px; font-size:0.85rem;" onclick="navigateTo('/visita/entradas', event)">
            Registro <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </header>
    `;
  }

  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-top">
            <div>
              <div class="brand-logo-container" style="margin-bottom:16px;">
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="15" y="10" width="30" height="20" fill="#29C7D9" rx="3"/>
                  <rect x="15" y="35" width="30" height="20" fill="#730DD9" rx="3"/>
                  <path d="M52 10 H82 V55 C82 72 68 85 52 85 C36 85 22 72 22 55 H52 V10 Z" fill="#A988F2"/>
                </svg>
                <div>
                  <div style="font-family:var(--font-heading); font-weight:800; font-size:1.2rem; color:var(--color-primary-dark);">EXPOJUY 2026</div>
                  <div style="font-size:0.65rem; color:var(--color-muted-text); font-weight:700;">CONECTANDO PAÍSES · CREANDO OPORTUNIDADES</div>
                </div>
              </div>
              <p style="color:var(--color-muted-text); font-size:0.9rem; line-height:1.6; max-width:320px; margin-bottom:20px;">
                La Muestra Multisectorial más importante del Norte Argentino. Organiza Cámara de Comercio Exterior de Jujuy.
              </p>
            </div>

            <div>
              <h4 class="footer-col-title">Secciones</h4>
              <ul class="footer-links">
                <li><a href="#/la-expo/sobre-expojuy-2026" onclick="navigateTo('/la-expo/sobre-expojuy-2026', event)">Sobre ExpoJuy</a></li>
                <li><a href="#/la-expo/corredor-bioceanico" onclick="navigateTo('/la-expo/corredor-bioceanico', event)">Corredor Bioceánico</a></li>
                <li><a href="#/la-expo/sectores" onclick="navigateTo('/la-expo/sectores', event)">Sectores Productivos</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col-title">Expositores</h4>
              <ul class="footer-links">
                <li><a href="#/expositores" onclick="navigateTo('/expositores', event)">Directorio de Empresas</a></li>
                <li><a href="#/rondas-de-vinculacion" onclick="navigateTo('/rondas-de-vinculacion', event)">Rondas Sauken-BRM</a></li>
                <li><a href="#/expositores/reserva-de-stand" onclick="navigateTo('/expositores/reserva-de-stand', event)">Reserva de Stand</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col-title">Visita & Ayuda</h4>
              <ul class="footer-links">
                <li><a href="#/visita/entradas" onclick="navigateTo('/visita/entradas', event)">Entradas QR</a></li>
                <li><a href="#/visita/mapa" onclick="navigateTo('/visita/mapa', event)">Plano Predio</a></li>
                <li><a href="#/preguntas-frecuentes" onclick="navigateTo('/preguntas-frecuentes', event)">Preguntas Frecuentes</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div>&copy; 2026 ExpoJuy - Todos los derechos reservados.</div>
            <div style="display:flex; gap:20px;">
              <a href="#/terminos-y-privacidad" onclick="navigateTo('/terminos-y-privacidad', event)">Términos & Privacidad</a>
              <a href="#/accesibilidad" onclick="navigateTo('/accesibilidad', event)">Accesibilidad Digital</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
