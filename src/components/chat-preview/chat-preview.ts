import Handlebars from 'handlebars';
import Template from './chat-preview.tmpl';
import Block from "../../modules/view-modules/block";

// @ts-ignore
import * as styles from "./chat-preview.module.scss";
import { IChatPreview } from '../../modules/types/types';

export default class ChatPreview extends Block {
    constructor(props: IChatPreview) {
        super('li', `${styles.chat} ${props.isSelected ? styles.selected : ''}`, props);
    }

    render() {
        return Handlebars.compile(Template)(this.props);
    }
}

// set component with children