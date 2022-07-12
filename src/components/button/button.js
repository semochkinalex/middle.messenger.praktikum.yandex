import Handlebars from "handlebars";
import template from './button.tmpl.js';

import styles from './button.module.css';

export default Button = (text) => {

    console.log(styles);
    const render = Handlebars.compile(template);

    const handleClick = () => {
        console.log('wqdqw');
    }

    return render({text, handleClick, rootClass: styles.button});
}   