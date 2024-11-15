import WOW from 'wow.js';
import Swiper from 'swiper/bundle';
import { Accordion } from 'accordion';

export function initPlugins() {

  new WOW( {
    offset: 0,
    mobile: false
  } ).init();

  new Swiper( '.team__swiper', {
    slidesPerView: 1.8,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      450: {
        slidesPerView: 6,
        spaceBetween: 30,
        centeredSlides: false
      }
    }
  } );

  new Swiper( '.testimonial__top-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    freeMode: true,
    speed: 11000,
    autoplay: { delay: 0.5, disableOnInteraction: false },
    breakpoints: {
      450: {
        slidesPerView: 3.4
      }
    }
  } );

  new Swiper( '.testimonial__bottom-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    freeMode: true,
    speed: 11000,
    autoplay: { delay: 0.5, disableOnInteraction: false, reverseDirection: true },
    breakpoints: {
      450: {
        slidesPerView: 3.4
      }
    }
  } );

  new Accordion( document.querySelector( '.question__accordion' ), {
    modal: true
  } );

}