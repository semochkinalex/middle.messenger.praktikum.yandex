import Handlebars from 'handlebars';
import ButtonTemplate from '../../components/button/button.tmpl';
import SignInPageTemplate from './sign-in.tmpl';
import styles from './sign-in.module.css';

const template = Handlebars.compile(SignInPageTemplate);

Handlebars.registerPartial('button', ButtonTemplate);

const render = template({styles});
console.log(styles);

export default render;