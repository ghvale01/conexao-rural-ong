// MENU HAMBÚRGUER
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// MODAL
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');

if (openModalBtn && closeModalBtn && modal) {
  openModalBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

// TOAST
function showToast(message, duration = 3000) {
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, duration);
}

// Exemplo: exibir toast após 2s
setTimeout(() => showToast('Bem-vindo ao site! 🚀'), 2000);
