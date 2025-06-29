ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: false,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
});

ScrollReveal().reveal('.hero-text, .hero-image', { origin: 'left', interval: 100 });
ScrollReveal().reveal('.section-header', { origin: 'top', distance: '40px' });
ScrollReveal().reveal('.about-image, .about-text', { interval: 100 });
ScrollReveal().reveal('.timeline-item', { interval: 150 });
ScrollReveal().reveal('.skills-column', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.project-card', { interval: 150, scale: 0.9 });
ScrollReveal().reveal('.contact-info, .contact-form', { origin: 'bottom', interval: 100 });
