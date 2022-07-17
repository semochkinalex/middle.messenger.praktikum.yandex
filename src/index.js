import SignInPage from './pages/sign-in/sign-in.js';
import SignUpPage from './pages/sign-up/sign-up.js';
import ServerErrorPage from './pages/500/500.js';
import PageNotFound from './pages/404/404.js';
import Chats from './pages/chats/chats.js';
import Profile from './pages/profile/profile.js';
import ChangePassword from './pages/change-password/change-password.js';

const main = document.querySelector('.main');

const routes = {
    '/sign-in': SignInPage,
    '/sign-up': SignUpPage,
    '/500': ServerErrorPage,
    '/chats': Chats,
    '/profile': Profile,
    '/change-password': ChangePassword,
    '/': `<a href="/sign-up">signup</a>---<a href="/sign-in">signin</a>---<a href="/chats">chats</a>---<a href="/profile">profile</a>---<a href="/change-password">change password</a>---<a href="/500">server error</a>`,
}

window.onload = function(evt) {
    const path = window.location.pathname;
    console.log(path);
    if (Object.keys(routes).find((el) => el === path)) {
        main.innerHTML = routes[path];
    } else if (path == '/dist/index.html'){
        main.innerHTML = SignInPage;
    } else {
        main.innerHTML = PageNotFound;
    }
}

