
document.addEventListener('DOMContentLoaded', function() {
  const heroSwiper = new Swiper('.hero-section .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false, 
    navigation: {
      nextEl: '.hero-section .swiper-button-next',
      prevEl: '.hero-section .swiper-button-prev',
    },
    watchOverflow: true,

    on: {
      init: function () {
        updateHeroNavigationButtons(this);
      },
      slideChange: function () {
        updateHeroNavigationButtons(this);
      },
      resize: function () { 
        updateHeroNavigationButtons(this);
      },
    },
  });

  function updateHeroNavigationButtons(swiperInstance) {
    const prevButton = document.querySelector('.hero-section .swiper-button-prev');
    const nextButton = document.querySelector('.hero-section .swiper-button-next');

    if (!prevButton || !nextButton) {
      return;
    }
  }
});