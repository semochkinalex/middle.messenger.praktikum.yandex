const Handlebars = require("handlebars");

import NotFoundTemplate from "./404.tmpl";

// @ts-ignore 
import * as styles from "./404.module.scss";
import Block from "../../modules/view-modules/block";
import { Page } from "../../modules/view-modules/page";
import Link from "../../components/link/link";

class PageNotFoundBlock extends Block {
    constructor() {
        super('main', styles.container, {styles})
    }

    render() {
        return Handlebars.compile(NotFoundTemplate)(this.props);
    }
}

const PageNotFound = new Page(new PageNotFoundBlock(), {
    '.link': new Link({
        text: "Назад к чатам",

        attributes: {
            href: '/messages',
        }
    })
})

export default PageNotFound;