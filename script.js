/* Full list (ремонт различных брендов) */

let container = document.querySelector('.container');
let buttonFullListArea = container.querySelector('.more-button');
let brandBlock = document.querySelector('.brand-block');
let buttonText = document.querySelector('.button-text');
let buttonTextContent = 'Показать все';


buttonFullListArea.addEventListener('click', function () {
  brandBlock.classList.toggle('full-list');
  buttonFullListArea.classList.toggle('more-button_open');

  if (brandBlock.classList.contains('full-list') === true) {
    buttonText.textContent = 'Скрыть';
  } else {
    buttonText.textContent = buttonTextContent;
  };

  return(buttonFullListArea)
});


let contentBlock = document.querySelector('.content-block');
let buttonFullTextRead = contentBlock.querySelector('.read-more-button');
let textArea = document.querySelector('.text-full');
let buttonReadNext = document.querySelector('.read-next');
let buttonReadTextContent = 'Читать далее';

buttonFullTextRead.addEventListener('click', function () {
  textArea.classList.toggle('text-full_active');
  buttonFullTextRead.classList.toggle('more-button_open');

  if (textArea.classList.contains('text-full_active') === true) {
    buttonReadNext.textContent = 'Скрыть';
  } else {
    buttonReadNext.textContent = buttonReadTextContent;
  };
})



/* Swiper */
const swiper = new Swiper('.swiper', {
  // Optional parameters


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  mousewheel: true,
  keyboard: true,


  centeredSlides: true,
  slidesPerView: 1.5,
  spaceBetween: 20,
});



/* openClose Aside-menu */

let menu = document.querySelector('.aside-menu');
let body = document.querySelector('.body')
let menuButton = document.querySelector('.burger-button');
let closeButton = document.querySelector('.top__close-button');
let screenCloseButton = document.querySelector('.screenClick-close');

let openClose = function (asidebutton) {
  asidebutton.onclick = function () {
    menu.classList.toggle('aside-menu_passive');
    body.classList.toggle('overflow-hidden');
  };
}

openClose(menuButton);
openClose(closeButton);
openClose(screenCloseButton);