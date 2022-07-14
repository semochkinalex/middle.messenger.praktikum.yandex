import Handlebars from 'handlebars';

import SignInPage from './pages/sign-in/sign-in.js';
import SignUpPage from './pages/sign-up/sign-up.js';
import ServerErrorPage from './pages/500/500.js';
import PageNotFound from './pages/404/404.js';

const main = document.querySelector('.main');

main.innerHTML = PageNotFound;