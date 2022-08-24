import Handlebars from "handlebars";
import Template from './avatar-edit.tmpl';
import Block from "../../modules/core/block";

import * as styles from "./avatar-edit.module.scss";
import { IBlockProps } from "../../modules/types/types";

interface IAvatarEdit extends IBlockProps {
    avatar: string;
    // src: string;
}

export default class AvatarEdit extends Block {
  constructor(props: IAvatarEdit) {
    super(
      "div",
      styles.container,
      props,
      ".close"
    );
  }

  render() {
    return Handlebars.compile(Template)({...this.props, styles});
  }
}
