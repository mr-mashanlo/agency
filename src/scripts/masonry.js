import Masonry from 'masonry-layout';

export function initMasonry() {

  const masonries = document.querySelectorAll( '.masonry' );

  if ( !masonries ) return;

  masonries.forEach( masonry => {
    new Masonry( masonry, {
      itemSelector: '.masonry__item',
      columnWidth: '.masonry__item',
      percentPosition: true,
      horizontalOrder: true
    } );
  } );

}