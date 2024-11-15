export function initImageObserver() {
  const imageObserver = new IntersectionObserver(
    ( entries, observer ) => {
      entries.forEach( entry => {
        if ( entry.isIntersecting ) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve( entry.target );
        }
      } );
    },
    { rootMargin: '200px 0px' }
  );

  document.querySelectorAll( 'img[data-src]' ).forEach( image => imageObserver.observe( image ) );
}