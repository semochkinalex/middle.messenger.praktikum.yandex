import Handlebars from "handlebars";
import ServerErrorTemplate from "./500.tmpl";

import * as styles from "./500.module.scss";
import Block from "../../modules/core/block";
import { Page } from "../../modules/core/page";
import Link from "../../components/link/link";

class ServerErrorBlock extends Block {
  constructor() {
    super("main", styles.container, { styles });
  }

  render() {
    return Handlebars.compile(ServerErrorTemplate)(this.props);
  }
}

const ServerErrorPage = new Page(new ServerErrorBlock(), {
  ".link": new Link({
    text: "Назад к чатам",

    attributes: {
      href: "/messenger",
    },
  }),
});

export default ServerErrorPage;
