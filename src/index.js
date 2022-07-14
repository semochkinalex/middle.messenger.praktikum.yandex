import Handlebars from 'handlebars';

import SignInPage from './pages/sign-in/sign-in.js';
import SignUpPage from './pages/sign-up/sign-up.js';
console.log(SignInPage);

const main = document.querySelector('.main');

main.innerHTML = SignUpPage;