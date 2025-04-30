// parallax.js
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero-banner');
    let scrollPosition = window.pageYOffset;
  
    hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";
  });
  