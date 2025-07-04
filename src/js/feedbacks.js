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
window.addEventListener('resize', resizeHandler);

function resizeHandler() {
  const width = window.innerWidth;
  if (width < 768) {
    swiper.params.slidesPerView = 1;
    swiper.update();
  } else if (width >= 1440) {
    swiper.params.slidesPerView = 3;
    swiper.update();
  } else if (width >= 768) {
    swiper.params.slidesPerView = 2;
    swiper.update();
  }
}
