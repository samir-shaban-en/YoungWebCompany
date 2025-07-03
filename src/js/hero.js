import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const heroSwiperElement = document.querySelector('.hero-slider');
  const currentBannerTextElement = document.querySelector('.current-banner-text');

  if (heroSwiperElement) {
    const heroSwiper = new Swiper(heroSwiperElement, {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      on: {
        init: function () {
          updateBannerText(this);
        },
        slideChange: function () {
          updateBannerText(this);
        },
      },
    });

    function updateBannerText(swiperInstance) {
      const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
      const bannerContent = activeSlide.querySelector('.banner-content');

      if (bannerContent) {
        const bannerText = bannerContent.querySelector('.banner-text');
        if (bannerText && currentBannerTextElement) {
          currentBannerTextElement.textContent = bannerText.textContent;
        }
      } else if (currentBannerTextElement) {
        currentBannerTextElement.textContent = '';
      }
    }
  }
});

