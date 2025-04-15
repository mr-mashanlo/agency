import { Accordion } from "accordion";

export function initAccordion() {

  const accordions = document.querySelectorAll( '.faq-accordion' );

  if ( !accordions ) return;

  accordions.forEach( accordion => {
    new Accordion( accordion, {
      modal: true
    } );
  } );

}
