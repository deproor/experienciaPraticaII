// Menu hambúrguer
const toggleBtn = document.querySelector('[data-nav-toggle]');
const mobileNav = document.querySelector('#mobileNav');

if (toggleBtn && mobileNav) {
  toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', mobileNav.classList.contains('is-open'));
  });
}

// Dropdown desktop
document.querySelectorAll('.nav__item--has-submenu > .nav__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = link.closest('.nav__item--has-submenu');
    parent.classList.toggle('nav__item--open');
  });
});

// Modais
document.querySelectorAll('[data-modal-open]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-modal-open');
    const modal = document.getElementById(id);
    modal?.classList.add('modal--open');
  });
});
document.querySelectorAll('[data-modal-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal?.classList.remove('modal--open');
  });
});

// Toasts simples
function showToast(message, timeout = 3000) {
  const wrap = document.querySelector('.toast');
  if (!wrap) return;
  const item = document.createElement('div');
  item.className = 'toast__item';
  item.textContent = message;
  wrap.appendChild(item);
  setTimeout(() => {
    item.remove();
  }, timeout);
}

// Form feedback demo
document.querySelectorAll('form[data-feedback]').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Formulário enviado com sucesso!');
  });
});
