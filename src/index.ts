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
import { getProfileData } from './modules/helpers/auth';

const routes: {[key: string]: [Page, boolean]} = {
    "/500": [ServerError, false],
    "/404": [PageNotFound, false],
    "/sign-in": [SignInPage, false],
    "/sign-up": [SignUpPage, false],
    "/change-password": [ChangePasswordPage, true],
    "/settings": [ProfliePage, true],
    "/messenger": [ChatsPage, true],
};

const router = new Router();

for (const [path, route] of Object.entries(routes)) {
    router.use(path, route[0], route[1]);
}

getProfileData();

router.start();