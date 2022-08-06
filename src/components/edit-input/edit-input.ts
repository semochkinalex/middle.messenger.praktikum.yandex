import Handlebars from 'handlebars';
import Template from './edit-input.tmpl';
import Block from "../../modules/view-modules/block";

// @ts-ignore
import * as styles from "./edit-input.module.scss";

import { IBlockProps } from "../../modules/types/types";
import editInputTmpl from './edit-input.tmpl';

interface IEditInput extends IBlockProps {
    name: string;
    placeholder: string;
    value: string;  
}

export default class EditInput extends Block {
    constructor(props: IBlockProps) {
        super('fieldset', styles.fieldset, props, '.input');
    }

    render() {
        return Handlebars.compile(editInputTmpl)(this.props);
    }
}

// set component with children