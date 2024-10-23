document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.burger-menu');
    const menu = document.querySelector('.header__nav');
    const links = document.querySelectorAll('.header__nav .nav__link'); 
    const submitButton  = document.querySelector('.header__buttons'); 
  
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      document.body.classList.toggle('open');
      submitButton.classList.toggle('open');
  
      if (button.classList.contains('active')) {
        button.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');

        links.forEach((link) => link.setAttribute('tabindex', '0'));
      } else {
        button.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        links.forEach((link) => link.setAttribute('tabindex', '-1'));
      }
    });
  });
  