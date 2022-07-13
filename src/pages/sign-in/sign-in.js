import Handlebars from 'handlebars';
import SignInPageTemplate from './sign-in.tmpl';
import styles from './sign-in.module.css';

const template = Handlebars.compile(SignInPageTemplate);

const render = template({styles});
console.log(styles);

export default render;