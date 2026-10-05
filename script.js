const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#nav');

menuBtn?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 800) nav.style.display = 'none';
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
