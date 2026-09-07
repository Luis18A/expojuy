/* ExpoJuy 2026 - Interactive Vector Map Component (Ciudad Cultural) */

function renderInteractiveMap(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="map-container glass-card">
      <div class="map-controls">
        <button class="map-btn active" onclick="filterMapZone('all', this)"><i class="fa-solid fa-layer-group"></i> Ver Todo El Predio</button>
        <button class="map-btn" onclick="filterMapZone('pab-a', this)"><i class="fa-solid fa-bolt" style="color:var(--sector-mining)"></i> Pabellón A (Minería & Litio)</button>
        <button class="map-btn" onclick="filterMapZone('pab-b', this)"><i class="fa-solid fa-seedling" style="color:var(--sector-agro)"></i> Pabellón B (Agro & PyMEs)</button>
        <button class="map-btn" onclick="filterMapZone('pab-c', this)"><i class="fa-solid fa-laptop-code" style="color:var(--sector-tech)"></i> Pabellón C (Tech & Industria)</button>
        <button class="map-btn" onclick="filterMapZone('b2b-hub', this)"><i class="fa-solid fa-handshake" style="color:var(--sector-tourism)"></i> Hub B2B Sauken</button>
        <button class="map-btn" onclick="filterMapZone('gastronomia', this)"><i class="fa-solid fa-utensils"></i> Patio Gastronómico</button>
      </div>

      <div class="map-canvas-wrap">
        <svg class="interactive-svg-map" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
          <!-- Background Grid Lines -->
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
            </pattern>
            <filter id="glow-mining" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
          </defs>
          <rect width="1000" height="600" fill="#070B14" />
          <rect width="1000" height="600" fill="url(#grid)" />

          <!-- Ciudad Cultural Boundaries & Access Roads -->
          <path d="M 50,500 L 950,500 L 900,550 L 100,550 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
          <text x="500" y="530" fill="rgba(255,255,255,0.4)" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            AV. BOLIVIA - ACCESO PRINCIPAL CIUDAD CULTURAL
          </text>

          <!-- Entrance Gates -->
          <g transform="translate(180, 480)">
            <circle r="16" fill="#10B981" opacity="0.8" />
            <text x="0" y="5" fill="#FFF" font-size="10" font-weight="bold" text-anchor="middle">ACCESO 1</text>
          </g>
          <g transform="translate(820, 480)">
            <circle r="16" fill="#10B981" opacity="0.8" />
            <text x="0" y="5" fill="#FFF" font-size="10" font-weight="bold" text-anchor="middle">ACCESO 2</text>
          </g>

          <!-- Zone: Pabellón A (Minería & Transición Energética) -->
          <g class="map-zone pab-a" onclick="showMapZoneInfo('Pabellón A: Minería & Transición Energética', 'Expositores líderes en Litio, Parques Solares y Soluciones Industriales.', 'Stand A-01 al Stand A-45')">
            <rect x="100" y="100" width="240" height="180" rx="16" fill="rgba(0, 242, 254, 0.15)" stroke="#00F2FE" stroke-width="2" filter="url(#glow-mining)" />
            <text x="220" y="180" fill="#00F2FE" font-size="18" font-weight="bold" text-anchor="middle">PABELLÓN A</text>
            <text x="220" y="205" fill="#94A3B8" font-size="12" text-anchor="middle">Minería & Transición Energética</text>
            <text x="220" y="230" fill="#00F2FE" font-size="11" font-weight="bold" text-anchor="middle">45 Stands Confirmados</text>
          </g>

          <!-- Zone: Pabellón B (Agroindustria & Biotecnología) -->
          <g class="map-zone pab-b" onclick="showMapZoneInfo('Pabellón B: Agroindustria & PyMEs', 'Muestra de productores regionales, Cannava, Ledesma y sector alimentario.', 'Stand B-01 al Stand B-60')">
            <rect x="380" y="100" width="240" height="180" rx="16" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2" />
            <text x="500" y="180" fill="#10B981" font-size="18" font-weight="bold" text-anchor="middle">PABELLÓN B</text>
            <text x="500" y="205" fill="#94A3B8" font-size="12" text-anchor="middle">Agroindustria & Biotecnología</text>
            <text x="500" y="230" fill="#10B981" font-size="11" font-weight="bold" text-anchor="middle">60 Stands Confirmados</text>
          </g>

          <!-- Zone: Pabellón C (Tecnología & Conocimiento) -->
          <g class="map-zone pab-c" onclick="showMapZoneInfo('Pabellón C: Tech & Industria', 'Empresas de software, IoT minero, metalmecánica y logística.', 'Stand C-01 al Stand C-40')">
            <rect x="660" y="100" width="240" height="180" rx="16" fill="rgba(139, 92, 246, 0.15)" stroke="#8B5CF6" stroke-width="2" />
            <text x="780" y="180" fill="#8B5CF6" font-size="18" font-weight="bold" text-anchor="middle">PABELLÓN C</text>
            <text x="780" y="205" fill="#94A3B8" font-size="12" text-anchor="middle">Tech, Conocimiento e Industria</text>
            <text x="780" y="230" fill="#8B5CF6" font-size="11" font-weight="bold" text-anchor="middle">40 Stands Confirmados</text>
          </g>

          <!-- Central Outdoor Stage -->
          <g class="map-zone" onclick="showMapZoneInfo('Escenario Principal Ciudad Cultural', 'Lugar de acto inaugural, conferencias magistrales y festivales de música.', 'Capacidad: 5.000 personas')">
            <circle cx="500" cy="360" r="55" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" stroke-width="2" />
            <text x="500" y="355" fill="#FBBF24" font-size="14" font-weight="bold" text-anchor="middle">ESCENARIO</text>
            <text x="500" y="375" fill="#FBBF24" font-size="12" font-weight="bold" text-anchor="middle">PRINCIPAL</text>
          </g>

          <!-- Hub Rondas de Negocios Sauken-BRM -->
          <g class="map-zone b2b-hub" onclick="showMapZoneInfo('Carpa de Rondas B2B Sauken-BRM', 'Módulos de reuniones 1 a 1 para compradores y oferentes internacionales.', 'Salones B2B 1 al 12')">
            <rect x="100" y="320" width="180" height="110" rx="12" fill="rgba(236, 72, 153, 0.15)" stroke="#EC4899" stroke-width="2" />
            <text x="190" y="370" fill="#EC4899" font-size="15" font-weight="bold" text-anchor="middle">HUB B2B SAUKEN</text>
            <text x="190" y="390" fill="#94A3B8" font-size="11" text-anchor="middle">Rondas 1 a 1</text>
          </g>

          <!-- Patio Gastronómico & Rest Area -->
          <g class="map-zone gastronomia" onclick="showMapZoneInfo('Patio Gastronómico & Rest Area', 'Food trucks autóctonos, cervecerías artesanales jujeñas y zonas de descanso.', 'Abierto de 12:00 a 00:00 hs')">
            <rect x="720" y="320" width="180" height="110" rx="12" fill="rgba(56, 189, 248, 0.15)" stroke="#38BDF8" stroke-width="2" />
            <text x="810" y="370" fill="#38BDF8" font-size="15" font-weight="bold" text-anchor="middle">PATIO GASTRONÓMICO</text>
            <text x="810" y="390" fill="#94A3B8" font-size="11" text-anchor="middle">Food Trucks & Relax</text>
          </g>

        </svg>
      </div>

      <div id="map-zone-detail" class="glass-card" style="margin-top:20px; padding:20px; display:none;">
        <h4 id="zone-detail-title" style="color:var(--sector-mining); margin-bottom:8px;"></h4>
        <p id="zone-detail-desc" style="color:var(--text-muted); font-size:0.95rem; margin-bottom:8px;"></p>
        <span id="zone-detail-sub" class="badge badge-mining"></span>
      </div>
    </div>
  `;
}

function filterMapZone(zoneClass, btn) {
  document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const zones = document.querySelectorAll('.map-zone');
  zones.forEach(z => {
    if (zoneClass === 'all' || z.classList.contains(zoneClass)) {
      z.style.opacity = '1';
      z.style.filter = 'none';
    } else {
      z.style.opacity = '0.2';
    }
  });
}

function showMapZoneInfo(title, desc, sub) {
  const detailBox = document.getElementById('map-zone-detail');
  if (!detailBox) return;
  
  detailBox.style.display = 'block';
  document.getElementById('zone-detail-title').innerText = title;
  document.getElementById('zone-detail-desc').innerText = desc;
  document.getElementById('zone-detail-sub').innerText = sub;
}
