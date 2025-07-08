import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  spaceBetween: 25,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.my-swiper ',
    type: 'bullets',
  },
});

window.addEventListener('DOMContentLoaded', resizeHandler);
const heroBtnRight = document.querySelector('.right');
const heroBtnLeft = document.querySelector('.left');
window.addEventListener('resize', resizeHandler);
console.log(swiper);
function resizeHandler() {
  const width = window.innerWidth;
  console.log(width);
  if (width >= 1440) {
    swiper[1].params.slidesPerView = 3;
    swiper[1].update();

    swiper[2].params.slidesPerView = 3;
    swiper[2].update();
  } else if (width >= 768) {
    swiper[1].params.slidesPerView = 2;
    swiper[1].update();

    swiper[2].params.slidesPerView = 2;
    swiper[2].update();
  } else if (width < 768) {
    swiper[1].params.slidesPerView = 1;
    swiper[1].update();

    swiper[2].params.slidesPerView = 1;
    swiper[2].update();
  }
}
