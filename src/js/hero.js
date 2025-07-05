import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const heroSwiperElement = document.querySelector('.hero-slider');

  if (heroSwiperElement) {
    const heroSwiper = new Swiper(heroSwiperElement, {
      modules: [Navigation],
      loop: true, 
      slidesPerView: 1,
      spaceBetween: 10,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'swiper-button-disabled', 
      },

      on: {
        // Якщо потрібно буде додати якусь логіку на зміну слайда, то можна буде тут  // slideChange: function (swiper) {
        //   console.log('Slide changed to:', swiper.realIndex);
        // },
      },
    });
  }
});