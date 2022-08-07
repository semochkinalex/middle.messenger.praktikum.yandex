import Handlebars from "handlebars";
import Block from "../../modules/core/block";

import * as styles from "./input.module.scss";

import { IBlockProps } from "../../modules/types/types";

interface IInput extends IBlockProps {
  attributes: {
    name: string;
    value: string | number;
    type?: "text" | "number" | "password" | "email";
    placeholder: string;
    required?: boolean;
  };
}

export default class Input extends Block {
  constructor(props: IInput) {
    super("input", styles.input, props);
  }

  render() {
    return Handlebars.compile("")(this.props);
  }
}