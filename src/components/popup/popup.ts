import Handlebars from "handlebars";
import Template from "./popup.tmpl";
import Block from "../../modules/core/block";

import * as styles from "./popup.module.scss";
import { IBlockProps } from "../../modules/types/types";

interface IPopup extends IBlockProps {
  isOpened: boolean;
  title: string;
}

export default class Popup extends Block {
  constructor(props: IPopup) {
    super(
      "section",
      `${styles.popup} ${props.isOpened ? "" : styles.hidden}`,
      {...props, 
        events: {'click': () => {
          this.hide();
        }}
      },
      ".close"
    );
  }
  
  showPopup() {
    this.show();
  }

  render() {
    return Handlebars.compile(Template)(this.props);
  }
}
