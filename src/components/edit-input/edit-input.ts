import Handlebars from "handlebars";
import Block from "../../modules/core/block";

import * as styles from "./edit-input.module.scss";

import { IBlockProps } from "../../modules/types/types";
import editInputTmpl from "./edit-input.tmpl";

export default class EditInput extends Block {
  constructor(props: IBlockProps) {
    super("fieldset", styles.fieldset, props, ".input");
  }

  render() {
    return Handlebars.compile(editInputTmpl)(this.props);
  }
}
