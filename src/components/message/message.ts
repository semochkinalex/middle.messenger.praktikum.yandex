import Handlebars from "handlebars";
import Template from "./message.tmpl";
import Block from "../../modules/view-modules/block";

import * as styles from "./message.module.scss";
import { IBlockProps } from "../../modules/types/types";

interface IMessage extends IBlockProps {
  isRecieved: boolean;
  message?: string;
  image?: string;
  isSeen?: boolean;
  timestamp: string;
}

export default class Message extends Block {
  constructor(props: IMessage) {
    super(
      "li",
      `${styles.message} ${props.isRecieved ? "" : styles.sent}`,
      props
    );
  }

  render() {
    return Handlebars.compile(Template)(this.props);
  }
}
