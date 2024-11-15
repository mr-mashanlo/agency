import { initPlugins } from './plugins.js';
import { initImageObserver } from './observers.js';

window.addEventListener( 'load', () => {
  initImageObserver();
  initPlugins();
} );