const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  navLinks.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});