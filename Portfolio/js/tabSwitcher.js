const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(button => button.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    btn.classList.add('active');
    tabPanels[index].classList.add('active');
  });
});
