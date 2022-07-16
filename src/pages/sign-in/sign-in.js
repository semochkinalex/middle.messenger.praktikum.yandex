import Handlebars from 'handlebars';
import LinkTemplate from '../../components/link/link.tmpl';
import ButtonTemplate from '../../components/button/button.tmpl';
import InputTemplate from '../../components/input/input.tmpl';
import SignInPageTemplate from './sign-in.tmpl';

import * as styles from './sign-in.module.scss';

console.log(styles);

const template = Handlebars.compile(SignInPageTemplate);

Handlebars.registerPartial('button', ButtonTemplate);
Handlebars.registerPartial('link', LinkTemplate);
Handlebars.registerPartial('input', InputTemplate);

const render = template({styles});

export default render;