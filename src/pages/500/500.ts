const Handlebars = require("handlebars");

import ServerErrorTemplate from "./500.tmpl";

// @ts-ignore 
import * as styles from "./500.module.scss";
import Block from "../../modules/view-modules/block";
import { Page } from "../../modules/view-modules/page";
import Link from "../../components/link/link";

class ServerErrorBlock extends Block {
    constructor() {
        super('main', styles.container, {styles})
    }

    render() {
        return Handlebars.compile(ServerErrorTemplate)(this.props);
    }
}

const ServerErrorPage = new Page(new ServerErrorBlock(), {
    '.link': new Link({
        text: "Назад к чатам",

        attributes: {
            href: '/messages',
        }
    })
})

export default ServerErrorPage;