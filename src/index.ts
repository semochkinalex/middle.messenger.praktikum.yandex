// import SignInPage from "./pages/sign-in/sign-in.js";

import {Page} from './modules/page/page';

import PageNotFound from './pages/404/404';
import ServerError from './pages/500/500'

import "./vendor/styles.scss";

const routes: {[key: string]: Page} = {
    "/500": ServerError,
    "/404": PageNotFound
};
  
window.onload = function (evt) {
  const path = window.location.pathname as string;

  if (Object.keys(routes).find((el) => el === path)) {
      routes[path].render();
  } else {
      routes['/404'].render();
  }
};
