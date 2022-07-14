import Handlebars from 'handlebars';
import LinkTemplate from '../../components/link/link.tmpl';
import ButtonTemplate from '../../components/button/button.tmpl';
import InputTemplate from '../../components/input/input.tmpl';
import SignUpPageTemplate from './sign-up.tmpl';
import styles from './sign-up.module.css';

const template = Handlebars.compile(SignUpPageTemplate);

Handlebars.registerPartial('button', ButtonTemplate);
Handlebars.registerPartial('link', LinkTemplate);
Handlebars.registerPartial('input', InputTemplate);

console.log('qwdqwd');
const render = template({styles});

export default render;