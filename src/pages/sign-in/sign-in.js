import Handlebars from 'handlebars';
import LinkTemplate from '../../components/link/link.tmpl';
import ButtonTemplate from '../../components/button/button.tmpl';
import InputTemplate from '../../components/input/input.tmpl';
import SignInPageTemplate from './sign-in.tmpl';
import styles from './sign-in.module.css';

const template = Handlebars.compile(SignInPageTemplate);

Handlebars.registerPartial('button', ButtonTemplate);
Handlebars.registerPartial('link', LinkTemplate);
Handlebars.registerPartial('input', InputTemplate);

const render = template({styles, text: "qwdqwd"});
console.log(styles);

export default render;