import {Page} from './modules/core/page';

import ServerError from './pages/500/500';
import PageNotFound from './pages/404/404';
import SignInPage from './pages/sign-in/sign-in';

import "./vendor/styles.scss";
import SignUpPage from './pages/sign-up/sign-up';
import ChangePasswordPage from './pages/change-password/change-password';
import ProfliePage from './pages/profile/profile';
import ChatsPage from './pages/chats/chats';

const routes: {[key: string]: Page} = {
    "/500": ServerError,
    "/404": PageNotFound,
    "/sign-in": SignInPage,
    "/sign-up": SignUpPage,
    "/change-password": ChangePasswordPage,
    "/profile": ProfliePage,
    "/chats": ChatsPage,
};
  
window.onload = function () {
  const path = window.location.pathname as string;

  if (Object.keys(routes).find((el) => el === path)) {
      routes[path].render();
  } else {
      routes['/404'].render();
  }
};
