import Template from "./link.tmpl";
import Handlebars from "handlebars";
import Block from "../../modules/core/block";

import * as styles from './link.module.scss';

import { IBlockProps } from "../../modules/types/types";

export default class Link extends Block {
  constructor(props: IBlockProps) {
    super("a", styles.link, props);
  }

  render() {
    return Handlebars.compile(Template)(this.props);
  }
}
