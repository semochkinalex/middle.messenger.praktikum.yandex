import Handlebars from "handlebars";
import Template from "./button.tmpl";
import Block from "../../modules/core/block";

import * as styles from "./button.module.scss";

import { IBlockProps } from "../../modules/types/types";

export default class Button extends Block {
  constructor(props: IBlockProps) {
    super("button", `${styles.button} ${props.className}`, props);
  }

  render() {
    console.log;
    return Handlebars.compile(Template)(this.props);
  }
}
