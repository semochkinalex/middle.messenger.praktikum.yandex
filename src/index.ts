import {Page} from './modules/core/page';

import ServerError from './pages/500/500';
import PageNotFound from './pages/404/404';
import SignInPage from './pages/sign-in/sign-in';

import "./vendor/styles.scss";
import SignUpPage from './pages/sign-up/sign-up';
import ChangePasswordPage from './pages/change-password/change-password';
import ProfliePage from './pages/profile/profile';
import ChatsPage from './pages/chats/chats';
import Route from './modules/router/route';
import Router from './modules/router/router';

const routes: {[key: string]: Page} = {
    "/500": ServerError,
    "/404": PageNotFound,
    "/sign-in": SignInPage,
    "/sign-up": SignUpPage,
    "/change-password": ChangePasswordPage,
    "/profile": ProfliePage,
    "/chats": ChatsPage,
};

const router = new Router();

for (const [path, route] of Object.entries(routes)) {
    router.use(path, route);
}

router.start();
// const x = new Route("/sign-in", SignInPage);
// window.onload = function () {
//   const path = window.location.pathname as string;

//   if (Object.keys(routes).find((el) => el === path)) {
//       routes[path].render();
//   } else {
//       routes['/404'].render();
//   }
// };
