export function initFonts() {
  const fonts = [
    { name: 'Inter', url: '/fonts/Inter/Inter-Regular.woff2', weight: 400, style: 'normal' },
    { name: 'Inter', url: '/fonts/Inter/Inter-SemiBold.woff2', weight: 600, style: 'normal' },
    { name: 'Inter', url: '/fonts/Inter/Inter-Bold.woff2', weight: 700, style: 'normal' }
  ];

  fonts.forEach( ( { name, url, weight, style } ) => {
    const fontFace = new FontFace( name, `url(${url})`, { weight, style } );
    fontFace.load().then( loadedFont => { document.fonts.add( loadedFont ); } );
  } );
}