const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const navItems = document.querySelectorAll('.nav-item');
const screens = document.querySelectorAll('.screen');


menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});


navItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');

    const targetId = item.getAttribute('data-target');
    screens.forEach(screen => {
      screen.classList.remove('active');
      if (screen.id === targetId) {
        screen.classList.add('active');
      }
    });
  });
});
