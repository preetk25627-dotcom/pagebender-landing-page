const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  }));
}
const form = document.querySelector('#interest-form');
const message = document.querySelector('#form-message');
if (form && message) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    message.textContent = 'Thanks for your interest — this is a prototype, so your details have not been sent or stored.';
    form.reset();
  });
}
