document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll('.tab-btn').length > 0) {
    document.querySelectorAll('.tab-btn')[0].click();
  }
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
