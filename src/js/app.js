const headerMenuButton = document.querySelector('button.header__menu');
const headerNavigation = document.querySelector('nav.nav');

headerMenuButton.addEventListener('click', () => {
  headerMenuButton.classList.toggle('header__menu_active');
  headerNavigation.classList.toggle('nav_active');
});
