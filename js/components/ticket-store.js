/* ExpoJuy 2026 - Ticket Store & Digital Pass QR Generator */

function renderTicketStore(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="grid-3">
      <!-- General Pass -->
      <div class="ticket-card glass-card">
        <h3 style="font-size:1.4rem; margin-bottom:8px;">Pase General por Día</h3>
        <p style="color:var(--text-muted); font-size:0.85rem;">Acceso a todos los pabellones y shows</p>
        <div class="ticket-price">$ 4.500 <span style="font-size:1rem; color:var(--text-muted); font-weight:normal;">/ día</span></div>
        <ul class="ticket-features">
          <li><i class="fa-solid fa-check"></i> Ingreso a Pabellones A, B y C</li>
          <li><i class="fa-solid fa-check"></i> Acceso al Escenario Principal</li>
          <li><i class="fa-solid fa-check"></i> Patio Gastronómico & Stands</li>
          <li style="opacity:0.4;"><i class="fa-solid fa-xmark"></i> Acceso a Carpa B2B Rondas</li>
        </ul>
        <button class="btn btn-secondary" onclick="openTicketCheckout('Pase General por Día', 4500)">Comprar Pase General</button>
      </div>

      <!-- Combo 4 Días (Featured) -->
      <div class="ticket-card glass-card featured">
        <span class="ticket-badge-popular">MÁS POPULAR</span>
        <h3 style="font-size:1.4rem; margin-bottom:8px; color:var(--sector-mining);">Pase Full Expo 4 Días</h3>
        <p style="color:var(--text-muted); font-size:0.85rem;">Acceso completo los 4 días del evento</p>
        <div class="ticket-price">$ 12.000 <span style="font-size:1rem; color:var(--text-muted); font-weight:normal;">/ total</span></div>
        <ul class="ticket-features">
          <li><i class="fa-solid fa-check"></i> Acceso ilimitado del 9 al 12 Oct</li>
          <li><i class="fa-solid fa-check"></i> Ingreso rápido prioritario</li>
          <li><i class="fa-solid fa-check"></i> Acceso a todas las charlas abiertas</li>
          <li><i class="fa-solid fa-check"></i> Descuentos en Patio Gastronómico</li>
        </ul>
        <button class="btn btn-primary" onclick="openTicketCheckout('Pase Full Expo 4 Días', 12000)">Comprar Pase 4 Días</button>
      </div>

      <!-- Pase B2B Ejecutivo -->
      <div class="ticket-card glass-card">
        <h3 style="font-size:1.4rem; margin-bottom:8px; color:#FBBF24;">Pase B2B Ejecutivo</h3>
        <p style="color:var(--text-muted); font-size:0.85rem;">Para profesionales y compradores</p>
        <div class="ticket-price">$ 25.000 <span style="font-size:1rem; color:var(--text-muted); font-weight:normal;">/ credencial</span></div>
        <ul class="ticket-features">
          <li><i class="fa-solid fa-check"></i> Acceso exclusivo a Rondas Sauken-BRM</li>
          <li><i class="fa-solid fa-check"></i> Credencial Ejecutiva Digital & Física</li>
          <li><i class="fa-solid fa-check"></i> Lounge VIP & Catering B2B</li>
          <li><i class="fa-solid fa-check"></i> Directorio de Expositores con Contactos</li>
        </ul>
        <button class="btn btn-outline-gold" onclick="openTicketCheckout('Pase B2B Ejecutivo', 25000)">Solicitar Acreditación B2B</button>
      </div>
    </div>
  `;
}

function openTicketCheckout(passName, price) {
  const modal = document.getElementById('ticket-modal');
  if (!modal) return;

  const content = document.getElementById('ticket-modal-content');
  content.innerHTML = `
    <h3 style="font-size:1.5rem; margin-bottom:8px; color:var(--text-main);">Comprar / Acreditar: ${passName}</h3>
    <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:24px;">Completa tus datos para emitir el Pase Digital de Acceso con Código QR.</p>

    <form onsubmit="generateDigitalQRPass(event, '${passName}', ${price})">
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-bottom:16px;">
        <div>
          <label style="display:block; font-size:0.85rem; color:var(--text-muted); margin-bottom:6px;">Nombre y Apellido</label>
          <input type="text" id="buyer-name" required placeholder="Ej: Roberto Morales" style="width:100%; padding:12px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#FFF; outline:none;" />
        </div>
        <div>
          <label style="display:block; font-size:0.85rem; color:var(--text-muted); margin-bottom:6px;">DNI / Pasaporte</label>
          <input type="text" id="buyer-dni" required placeholder="Ej: 32.456.789" style="width:100%; padding:12px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#FFF; outline:none;" />
        </div>
      </div>

      <div style="margin-bottom:20px;">
        <label style="display:block; font-size:0.85rem; color:var(--text-muted); margin-bottom:6px;">Correo Electrónico (para envío del Pase QR)</label>
        <input type="email" id="buyer-email" required placeholder="ejemplo@empresa.com" style="width:100%; padding:12px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#FFF; outline:none;" />
      </div>

      <div style="padding:16px; background:rgba(0,242,254,0.08); border:1px solid rgba(0,242,254,0.2); border-radius:12px; margin-bottom:24px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span style="display:block; font-size:0.8rem; color:var(--text-muted);">Total a abonar</span>
          <strong style="font-size:1.4rem; color:var(--sector-mining);">$ ${price.toLocaleString('es-AR')} ARS</strong>
        </div>
        <span class="badge badge-mining"><i class="fa-solid fa-lock" style="margin-right:4px;"></i> MercadoPago / Stripe SSL</span>
      </div>

      <button type="submit" class="btn btn-primary" style="width:100%;">Confirmar y Generar Pase Digital QR</button>
    </form>
  `;

  modal.classList.add('active');
}

function generateDigitalQRPass(event, passName, price) {
  event.preventDefault();
  const name = document.getElementById('buyer-name').value;
  const dni = document.getElementById('buyer-dni').value;
  const email = document.getElementById('buyer-email').value;
  const passId = "EXPOJUY-2026-" + Math.floor(100000 + Math.random() * 900000);

  const content = document.getElementById('ticket-modal-content');
  content.innerHTML = `
    <div class="qr-ticket-pass animate-scale-in">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px; margin-bottom:16px;">
        <span style="font-family:var(--font-heading); font-weight:800; font-size:1.2rem; color:var(--sector-mining);">EXPOJUY 2026</span>
        <span class="badge badge-mining">CONFIRMADO</span>
      </div>

      <h3 style="font-size:1.3rem; margin-bottom:4px;">${passName}</h3>
      <p style="color:var(--text-muted); font-size:0.85rem;">Ciudad Cultural, San Salvador de Jujuy</p>

      <div class="qr-code-box">
        <svg viewBox="0 0 100 100" width="150" height="150">
          <!-- Vector QR Mock Code Graphic -->
          <rect x="0" y="0" width="100" height="100" fill="#FFF" />
          <rect x="10" y="10" width="25" height="25" fill="#000"/>
          <rect x="15" y="15" width="15" height="15" fill="#FFF"/>
          <rect x="18" y="18" width="9" height="9" fill="#000"/>
          
          <rect x="65" y="10" width="25" height="25" fill="#000"/>
          <rect x="70" y="15" width="15" height="15" fill="#FFF"/>
          <rect x="73" y="18" width="9" height="9" fill="#000"/>
          
          <rect x="10" y="65" width="25" height="25" fill="#000"/>
          <rect x="15" y="70" width="15" height="15" fill="#FFF"/>
          <rect x="18" y="73" width="9" height="9" fill="#000"/>

          <!-- Inner Random QR Grid Data -->
          <rect x="42" y="12" width="6" height="6" fill="#000"/>
          <rect x="50" y="20" width="6" height="6" fill="#000"/>
          <rect x="40" y="30" width="8" height="8" fill="#000"/>
          <rect x="52" y="40" width="6" height="6" fill="#000"/>
          <rect x="12" y="45" width="8" height="8" fill="#000"/>
          <rect x="25" y="42" width="6" height="6" fill="#000"/>
          <rect x="68" y="45" width="14" height="6" fill="#000"/>
          <rect x="45" y="60" width="12" height="6" fill="#000"/>
          <rect x="65" y="65" width="6" height="15" fill="#000"/>
          <rect x="75" y="72" width="12" height="12" fill="#000"/>
          <rect x="42" y="75" width="15" height="6" fill="#000"/>
        </svg>
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; text-align:left; font-size:0.85rem; background:rgba(0,0,0,0.3); padding:12px; border-radius:8px; margin-bottom:16px;">
        <div><span style="color:var(--text-muted);">Titular:</span> <strong style="display:block;">${name}</strong></div>
        <div><span style="color:var(--text-muted);">DNI:</span> <strong style="display:block;">${dni}</strong></div>
        <div><span style="color:var(--text-muted);">Código Pase:</span> <strong style="display:block; color:var(--sector-mining);">${passId}</strong></div>
        <div><span style="color:var(--text-muted);">Enviado a:</span> <strong style="display:block; text-overflow:ellipsis; overflow:hidden;">${email}</strong></div>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" style="flex:1;" onclick="alert('Descargando Pase QR en formato PDF...')"><i class="fa-solid fa-download"></i> Descargar PDF</button>
        <button class="btn btn-secondary" onclick="closeTicketModal()"><i class="fa-solid fa-xmark"></i> Cerrar</button>
      </div>
    </div>
  `;
}

function closeTicketModal() {
  const modal = document.getElementById('ticket-modal');
  if (modal) modal.classList.remove('active');
}
