import Handlebars from 'handlebars';
import Template from './errors.tmpl';
import Block from "../../modules/view-modules/block";


import * as styles from "./errors.module.scss";

import { IBlockProps } from "../../modules/types/types";

interface IErrors extends IBlockProps {
    errors: Array<string>;
}

export default class Errors extends Block {
    constructor(props: IErrors) {
        super('ul', styles.errors, props);
    }

    render() {
        return Handlebars.compile(Template)({...this.props, styles});
    }
}

// set component with children