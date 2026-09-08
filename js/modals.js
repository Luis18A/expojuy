/* ==========================================================================
   EXPOJUY 2026 - MODALS & CHECKOUT MODULE
   ========================================================================== */

import { showToast } from './toasts.js';

export function initModals() {
  const backdrops = document.querySelectorAll('.modal-backdrop');
  const closeBtns = document.querySelectorAll('.modal-close');

  function closeModal(modal) {
    modal.classList.remove('active');
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) closeModal(modal);
    });
  });

  backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal(backdrop);
    });
  });

  // Video Tour Modal Trigger
  document.addEventListener('click', (e) => {
    const videoBtn = e.target.closest('#btn-open-video-tour');
    const videoModal = document.getElementById('modal-video');
    if (videoBtn && videoModal) {
      videoModal.classList.add('active');
    }

    // Profile Trigger
    const userBtn = e.target.closest('#btn-user-profile');
    if (userBtn) {
      showToast('Credencial Digital de Usuario ExpoJuy: Estado Activo', 'success');
    }
  });

  initTicketCheckout();
  initStandReservation();
  initB2BRegistration();
}

function initTicketCheckout() {
  const modalTicket = document.getElementById('modal-ticket');
  const qtyMinus = document.getElementById('btn-qty-minus');
  const qtyPlus = document.getElementById('btn-qty-plus');
  const qtyEl = document.getElementById('ticket-qty');
  const totalPriceEl = document.getElementById('ticket-total-price');
  const confirmBtn = document.getElementById('btn-confirm-ticket-purchase');
  const downloadReceiptBtn = document.getElementById('btn-download-receipt');

  const stepForm = document.getElementById('ticket-step-form');
  const stepSuccess = document.getElementById('ticket-step-success');

  let selectedTicket = {
    type: 'Pase General 1 Día',
    price: 4500,
    qty: 1
  };

  document.addEventListener('click', (e) => {
    if (e.target.closest('.action-buy-tickets')) {
      if (stepForm && stepSuccess) {
        stepForm.classList.remove('hidden');
        stepSuccess.classList.add('hidden');
      }
      if (modalTicket) modalTicket.classList.add('active');
    }

    const opt = e.target.closest('.ticket-opt');
    if (opt) {
      selectedTicket.type = opt.dataset.type;
      selectedTicket.price = parseInt(opt.dataset.price, 10);
      updateTicketSummary();
    }
  });

  function updateTicketSummary() {
    const ticketOpts = document.querySelectorAll('.ticket-opt');
    ticketOpts.forEach(opt => {
      if (opt.dataset.type === selectedTicket.type) {
        opt.classList.add('border-primary-container', 'bg-primary-fixed/20');
        opt.classList.remove('border-outline-variant');
      } else {
        opt.classList.remove('border-primary-container', 'bg-primary-fixed/20');
        opt.classList.add('border-outline-variant');
      }
    });

    if (qtyEl) qtyEl.textContent = selectedTicket.qty;
    const total = selectedTicket.price * selectedTicket.qty;
    if (totalPriceEl) totalPriceEl.textContent = `$${total.toLocaleString('es-AR')} ARS`;
  }

  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      if (selectedTicket.qty > 1) {
        selectedTicket.qty--;
        updateTicketSummary();
      }
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      if (selectedTicket.qty < 10) {
        selectedTicket.qty++;
        updateTicketSummary();
      }
    });
  }

  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('ticket-name');

      const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Visitante ExpoJuy';
      const orderId = `EXP-${Math.floor(10000 + Math.random() * 90000)}`;
      const totalAmount = (selectedTicket.price * selectedTicket.qty).toLocaleString('es-AR');

      const receiptOrder = document.getElementById('receipt-order-id');
      const receiptName = document.getElementById('receipt-name');
      const receiptType = document.getElementById('receipt-type');
      const receiptQty = document.getElementById('receipt-qty');
      const receiptAmount = document.getElementById('receipt-amount');

      if (receiptOrder) receiptOrder.textContent = `N° ${orderId}`;
      if (receiptName) receiptName.textContent = name;
      if (receiptType) receiptType.textContent = selectedTicket.type;
      if (receiptQty) receiptQty.textContent = `${selectedTicket.qty} ${selectedTicket.qty === 1 ? 'entrada' : 'entradas'}`;
      if (receiptAmount) receiptAmount.textContent = `$${totalAmount} ARS`;

      stepForm.classList.add('hidden');
      stepSuccess.classList.remove('hidden');
      stepSuccess.style.display = 'flex';

      showToast(`¡Compra Finalizada Exitosamente! Código: ${orderId}`, 'success', 5000);
    });
  }

  if (downloadReceiptBtn) {
    downloadReceiptBtn.addEventListener('click', () => {
      showToast('Descargando comprobante y credencial en PDF...', 'info');
    });
  }
}

function initStandReservation() {
  const modalStand = document.getElementById('modal-stand');
  const formStand = document.getElementById('form-stand-reserve');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.action-reserve-stand')) {
      if (modalStand) modalStand.classList.add('active');
    }
  });

  if (formStand) {
    formStand.addEventListener('submit', (e) => {
      e.preventDefault();
      if (modalStand) modalStand.classList.remove('active');
      showToast('¡Solicitud de Reserva Enviada! La Gerencia Comercial se pondrá en contacto.', 'success', 4500);
      formStand.reset();
    });
  }
}

function initB2BRegistration() {
  const modalB2B = document.getElementById('modal-b2b');
  const formB2B = document.getElementById('form-b2b-register');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.action-register-b2b')) {
      if (modalB2B) modalB2B.classList.add('active');
    }
  });

  if (formB2B) {
    formB2B.addEventListener('submit', (e) => {
      e.preventDefault();
      if (modalB2B) modalB2B.classList.remove('active');
      showToast('¡Empresa Acreditada en Rondas B2B! Te enviamos la confirmación por correo.', 'success', 4500);
      formB2B.reset();
    });
  }
}
