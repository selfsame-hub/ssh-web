const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const navItems = document.querySelectorAll('.nav-item');

if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
}

const paginaAtual = window.location.pathname.split('/').pop();

navItems.forEach((item) => {
  const href = item.getAttribute('href').replace('./', '');
  
  if (href === paginaAtual) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }
});