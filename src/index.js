import Handlebars from 'handlebars';

import SignInPage from './pages/sign-in/sign-in.js';
console.log(SignInPage);

const main = document.querySelector('.main');

main.innerHTML = SignInPage;