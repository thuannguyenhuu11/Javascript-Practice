import { App } from './app';

// Sure that scripts called after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  //Loading Icon
  // const loader = document.querySelector('.loader');
  // loader.classList.add('loader--hidden');
  // loader.addEventListener('transitionend', () => {
  //   document.body.removeChild(loader);
  // });

  const myApp = new App();
  myApp.start();
});
