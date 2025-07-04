import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const heroSwiperElement = document.querySelector('.hero-slider');
  const bannerTextElement = document.querySelector('.slider-banner-text');

  if (heroSwiperElement && bannerTextElement) {
    
    const updateBannerText = (swiper) => {
  
      const activeSlide = swiper.slides[swiper.realIndex];
      const textOnBanner = activeSlide.querySelector('.banner-text');
      
      if (textOnBanner) {
        bannerTextElement.textContent = textOnBanner.textContent;
      }
    };

    const heroSwiper = new Swiper(heroSwiperElement, {
      modules: [Navigation],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      on: {
        init: function (swiper) {
          updateBannerText(swiper);
        },
        slideChange: function (swiper) {
          updateBannerText(swiper);
        },
      },
    });
  }
});
