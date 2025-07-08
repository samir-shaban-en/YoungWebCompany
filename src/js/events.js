// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// let swiper = null;

// function initSwiper() {
//   if (window.innerWidth < 1440 && !swiper) {
//     swiper = new Swiper('.swiper', {
//       modules: [Navigation, Pagination],
//       slidesPerView: 1,
//       spaceBetween: 24,
//       allowTouchMove: false,

//       navigation: {
//         nextEl: '.button-next',
//         prevEl: '.button-prev',
//       },

//       pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//       },

//       breakpoints: {
//         768: {
//           slidesPerView: 2,
//         },
//       },
//     });
//   } else if (window.innerWidth >= 1440 && swiper) {
//     swiper.destroy(true, true);
//     swiper = null;
//   }
// }

// initSwiper();

// window.addEventListener('resize', () => {
//   initSwiper();
// });
