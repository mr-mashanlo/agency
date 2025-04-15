import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function initSwiper() {

  new Swiper('.review-swiper', {
    modules: [ Navigation, Pagination ],
    spaceBetween: 40,
    speed: 600,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  } );

}