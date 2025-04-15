import { initMasonry } from './masonry';
import { initSwiper } from './swiper';
import { initAccordion } from './accordion';
import { initHamburger } from './hamburger';
import { initLightbox } from './lightbox';

window.addEventListener( 'load', () => {

  initMasonry();
  initSwiper();
  initAccordion();
  initHamburger();
  initLightbox();

} );