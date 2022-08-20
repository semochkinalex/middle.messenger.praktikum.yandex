import { Page } from "../core/page";
import Route from "./route";

export default class Router {
    static __instance: any;

    routes: Route[];
    history: History;
    _rootQuery: any;
    _currentRoute: null | Route;

    constructor() {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this._currentRoute = null;
        this.history = window.history;

        Router.__instance = this;
    }

    use(pathname: string, page: Page) {
        const route = new Route(pathname, page);
        this.routes.push(route);
      
        return this;
    }

    start() {
      // Реагируем на изменения в адресной строке и вызываем перерисовку
      window.onpopstate = event => {
          this._onRoute(event?.currentTarget?.location?.pathname);
        };
        
      this._onRoute(window.location.pathname);
    }
  
    _onRoute(pathname: string) {
      const route = this.getRoute(pathname);
      
      if (!route) {
        return this.go('/404')
      }
      if (this._currentRoute) {
        this._currentRoute.leave();
      }
      
      route.render();
      this._currentRoute = route;
    }

    go(pathname: string) {
      this.history.pushState({}, "", pathname);
      this._onRoute(pathname);
    }

    back() {
      this.history.back();
    }

    forward() {
      this.history.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}