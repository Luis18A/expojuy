/* ==========================================================================
   EXPOJUY 2026 - TOAST NOTIFICATION MODULE
   ========================================================================== */

export function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconName = 'info';
  if (type === 'success') iconName = 'check_circle';
  if (type === 'warning') iconName = 'warning';

  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px] shrink-0 text-primary-container">${iconName}</span>
    <span class="font-ambit text-xs font-semibold leading-snug">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

window.showToast = showToast;
