import Handlebars from 'handlebars';
import ButtonTemplate from '../../components/button/button.tmpl';
import InputTemplate from '../../components/input/input.tmpl';
import ChangePasswordTemplate from './change-password.tmpl';
import LinkTemplate from '../../components/link/link.tmpl';
import * as styles from './change-password.module.css';

const template = Handlebars.compile(ChangePasswordTemplate);

Handlebars.registerPartial('link', LinkTemplate);
Handlebars.registerPartial('button', ButtonTemplate);
Handlebars.registerPartial('input', InputTemplate);

const render = template({styles});
// console.log(styles);

export default render;