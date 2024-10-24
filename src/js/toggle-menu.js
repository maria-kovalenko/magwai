  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.burger-menu');
    const menu = document.querySelector('.header__nav');
    const links = document.querySelectorAll('.header__nav .nav__link');

    const toggleMenu = (isActive) => {
      button.setAttribute('aria-expanded', isActive);
      menu.setAttribute('aria-hidden', !isActive);
      document.body.classList.toggle('open', isActive);
      links.forEach(link => link.setAttribute('tabindex', isActive ? '0' : '-1'));
    };
  
    button.addEventListener('click', () => {
      const isActive = button.classList.toggle('active');
      toggleMenu(isActive);
    });
  });
  

  

