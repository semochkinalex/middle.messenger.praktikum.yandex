import Handlebars from 'handlebars';
import Template from './input.tmpl';
import Block from "../../modules/view-modules/block";

// @ts-ignore
import * as styles from "./input.module.scss";

import { IBlockProps } from "../../modules/types/types";

interface IInput extends IBlockProps {
    attributes: {
        name: string;
        value: string | number;
        type?: 'text' | 'number' | 'password' | 'email';
        placeholder: string;
        required?: boolean;
    }
}

export default class Input extends Block {
    constructor(props: IInput) {
        super('input', styles.input, props);
    }

    render() {
        return Handlebars.compile('')(this.props);
    }
}

// set component with children