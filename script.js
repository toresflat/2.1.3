/* Full list (ремонт различных брендов) */
let button = document.querySelector('.more-button');
let buttonUrl = "url('/Users/travix/Desktop/EDUkate/KATA-Drops/практические_задания/2.1.3/Images/expand.svg')";
let brandBlock = document.querySelector('.brand-block');
let buttonText = document.querySelector('.button-text');
let buttonTextContent = buttonText.textContent = 'Показать все';

button.onclick = function () {
    brandBlock.classList.toggle('full-list');
    
  if(brandBlock.classList.contains('full-list') === true) {
    buttonText.textContent = 'Скрыть';
    button.style.backgroundImage = "url('/Users/travix/Desktop/EDUkate/KATA-Drops/практические_задания/2.1.3/Images/expand-reverse.svg')";
    }  else {
        buttonText.textContent = buttonTextContent;
        button.style.backgroundImage = buttonUrl;
    };
};

/* Swiper */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination', 
  },

  mousewheel: true,
  keyboard: true,

});

/* Close Aside */

 let menu = document.querySelector('.aside-menu');
            let body = document.querySelector('.body')
            let menuButton = document.querySelector('.burger-button');
            let closeButton = document.querySelector('.top__close-button');
            let screenCloseButton = document.querySelector('.screenClick-close');

            menuButton.onclick = function() {
                menu.classList.toggle('aside-menu_passive');
                menu.classList.toggle('aside-menu_active');
                body.classList.toggle('overflow-visible');
                body.classList.toggle('overflow-hidden');
            }; 

            closeButton.onclick = function() {
                menu.classList.toggle('aside-menu_passive');
                menu.classList.toggle('aside-menu_active');
                body.classList.toggle('overflow-visible');
                body.classList.toggle('overflow-hidden');
            }; 

            screenCloseButton.onclick = function() {
                menu.classList.toggle('aside-menu_passive');
                menu.classList.toggle('aside-menu_active');
                body.classList.toggle('overflow-visible');
                body.classList.toggle('overflow-hidden');
            }; 