// Script untuk tampilan responsif

const burgerIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');

burgerIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
});

