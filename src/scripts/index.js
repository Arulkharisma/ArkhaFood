import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

import './components/footer-custom';
import './components/header-custom';

const app = new App({
  button: document.querySelector('.burger-menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
const skipToContent = document.querySelector('.skip-content');
const maincontent = document.querySelector('#mainContent');

skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  maincontent.focus();
});
