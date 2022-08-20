import Handlebars from "handlebars";
import NotFoundTemplate from "./404.tmpl";

import * as styles from "./404.module.scss";
import Block from "../../modules/core/block";
import { Page } from "../../modules/core/page";
import Link from "../../components/link/link";

class PageNotFoundBlock extends Block {
  constructor() {
    super("main", styles.container, { styles });
  }

  render() {
    return Handlebars.compile(NotFoundTemplate)(this.props);
  }
}

const PageNotFound = new Page(new PageNotFoundBlock(), {
  ".link": new Link({
    text: "Назад к чатам",

    attributes: {
      href: "/chats",
    },
  }),
});

export default PageNotFound;
