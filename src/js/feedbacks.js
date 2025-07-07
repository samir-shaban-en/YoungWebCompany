// js/feedback.js або js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Ініціалізація Swiper для Hero Section
    const heroSwiper = new Swiper('.hero-section .swiper', {
      // Дуже важливо: налаштування відображення слайдів
      // Для одного слайда на екрані
      slidesPerView: 1,
      spaceBetween: 0, // Проміжок між слайдами
      loop: false,     // Важливо: false, якщо хочете відключати кнопки на кінцях
  
      // Налаштування навігації (стрілок)
      navigation: {
        nextEl: '.hero-section .swiper-button-next', // Селектор для кнопки "наступний"
        prevEl: '.hero-section .swiper-button-prev', // Селектор для кнопки "попередній"
      },
  
      // Автоматично додає/видаляє клас 'swiper-button-disabled'
      // коли слайдер досягає початку/кінця, або якщо слайдів замало для прокрутки.
      // Це також допоможе, якщо у вас лише один слайд, він відключить кнопки.
      watchOverflow: true,
  
      // Опціонально: дозволяє перетягувати слайди мишкою/дотиком
      grabCursor: true,
  
      // Події Swiper для додаткового контролю (хоча watchOverflow: true вже багато робить)
      on: {
        init: function () {
          // Перевірка стану кнопок при ініціалізації
          updateHeroNavigationButtonsState(this);
        },
        slideChange: function () {
          // Перевірка стану кнопок при зміні слайда
          updateHeroNavigationButtonsState(this);
        },
        resize: function () {
          // Перевірка стану кнопок при зміні розміру вікна (адаптивність)
          updateHeroNavigationButtonsState(this);
        }
      },
    });
  
    // Функція для оновлення стану навігаційних кнопок
    // Це додатковий рівень контролю, але watchOverflow: true зазвичай робить цю роботу.
    function updateHeroNavigationButtonsState(swiperInstance) {
      const prevButton = document.querySelector('.hero-section .swiper-button-prev');
      const nextButton = document.querySelector('.hero-section .swiper-button-next');
  
      if (!prevButton || !nextButton) {
        console.warn('Hero Swiper: Navigation buttons not found.');
        return;
      }
  
      // Swiper додає клас 'swiper-button-disabled' автоматично,
      // якщо watchOverflow: true. Переконайтеся, що ваш CSS правильно
      // обробляє цей клас.
      // Якщо ви хочете свою кастомну логіку, можете використовувати:
      // if (swiperInstance.isBeginning) {
      //   prevButton.style.opacity = '0.5';
      //   prevButton.style.cursor = 'not-allowed';
      // } else {
      //   prevButton.style.opacity = '1';
      //   prevButton.style.cursor = 'pointer';
      // }
      // if (swiperInstance.isEnd) {
      //   nextButton.style.opacity = '0.5';
      //   nextButton.style.cursor = 'not-allowed';
      // } else {
      //   nextButton.style.opacity = '1';
      //   nextButton.style.cursor = 'pointer';
      // }
    }
  
    // Якщо у вас є інші слайдери, ініціалізуйте їх аналогічно
    // за їхніми унікальними селекторами (наприклад, ID)
    // const feedbackSwiper = new Swiper('#feedbackSwiper', { ... });
  });