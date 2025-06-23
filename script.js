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


const text = " Fullstack Developer.";

  const element = document.getElementById("typing-text");
  element.style.color=" #f6a623"
  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!isDeleting) {
      element.textContent = text.substring(0, index++);
      if (index > text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200); 
        return;
      }
    } else {
      element.textContent = text.substring(0, index--);
      if (index < 0) {
        isDeleting = false;
      }
    }
    setTimeout(typeEffect, isDeleting ? 70 : 100); 
  }

  typeEffect();