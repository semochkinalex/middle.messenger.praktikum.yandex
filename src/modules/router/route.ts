import Block from "../core/block";
import { Page } from "../core/page";
import { isEqual } from "../helpers/helpers";
import { IBlockProps } from "../types/types";

export default class Route {
    _pathname: string;
    // _pageClass: Page;
    _page: Page;
    
    // _props: IPageProps;

    constructor(pathname: string, page: Page) {
        // this._page = null;
        this._pathname = pathname;
        this._page = page;
        // this._pageProps = pageProps;
        // this._block = null;
        // this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._page) {
            this._page.hide();
        }
    }

    match(pathname: string) {
        return pathname === this._pathname;
    }

    render() {
        if (this._page.isHidden === true) {
            this._page.show();
        } else {
            this._page.render();
        }
    }
}