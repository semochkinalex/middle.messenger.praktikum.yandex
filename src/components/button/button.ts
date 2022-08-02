import Handlebars from 'handlebars';
import Template from './button.tmpl';
import Block from "../../modules/view-modules/block";

// @ts-ignore
import * as styles from "./button.module.scss";

import { IBlockProps } from "../../modules/types/types";

export default class Button extends Block {
    constructor(props: IBlockProps) {
        super('button', styles.button, props)
    }

    render() {
        return Handlebars.compile(Template)(this.props);
    }
}

