import Block from "../core/block";
import { Page } from "../core/page";
import { isEqual } from "../helpers/helpers";
import { IBlockProps } from "../types/types";

export default class Route {
    _page: Page;
    _pathname: string;
    _isProtected: boolean;

    constructor(pathname: string, page: Page, isProtected: boolean = false) {
        this._pathname = pathname;
        this._page = page;
        this._isProtected = isProtected;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    isProtected() {
        return this._isProtected;
    }

    getPathname() {
        return this._pathname;
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