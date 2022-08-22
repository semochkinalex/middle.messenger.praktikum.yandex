import HTTPTransport from "../api/http"
import AppState from "../app-state/app-state";
import Router from "../router/router";

const api = new HTTPTransport('https://ya-praktikum.tech/api/v2');
const appState = new AppState({});
const router = new Router();

export const getProfileData = async () => {
    return api.get('/auth/user')
    .then((res) => {

        if (res.indexOf('Cookie is not') > 0) throw new Error("Cookie not available");

        appState.set((oldState) => {
            return {...oldState, user: JSON.parse(res)};
        });
    })
    .catch((err) => {
        appState.set(() => {return {user: null}})
        return err;
    })
    .finally(() => {
        router.update();
    })
}