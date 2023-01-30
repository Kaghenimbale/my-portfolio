const navLink = document.querySelector('.nav-link');
const menu = document.querySelector('.menu-Icon');
const close = document.querySelector('.closeIcon');
const menuOption = document.querySelectorAll('.nav-link li');

menu.addEventListener('click', () => {
  navLink.style.marginLeft = 0;
});

close.addEventListener('click', () => {
  navLink.style.marginLeft = '-1000px';
});

menuOption.forEach((list) => {
  list.addEventListener('click', () => {
    navLink.style.marginLeft = '-1000px';
  });
});
