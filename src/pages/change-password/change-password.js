const Handlebars = require('handlebars');
import ButtonTemplate from '../../components/button/button.tmpl.js';
import InputTemplate from '../../components/input/input.tmpl.js';
import ChangePasswordTemplate from './change-password.tmpl.js';
import LinkTemplate from '../../components/link/link.tmpl.js';
import * as styles from './change-password.module.css';

const template = Handlebars.compile(ChangePasswordTemplate);

Handlebars.registerPartial('link', LinkTemplate);
Handlebars.registerPartial('button', ButtonTemplate);
Handlebars.registerPartial('input', InputTemplate);

const render = template({styles});

export default render;