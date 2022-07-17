const Handlebars = require('handlebars');
import LinkTemplate from '../../components/link/link.tmpl.js';
import EditTemplate from '../../components/edit-input/edit-input.tmpl.js';
import ProfileTemplate from './profile.tmpl.js';
import PopupTemplate from '../../components/popup/popup.tmpl.js';
import ButtonTemplate from '../../components/button/button.tmpl.js';
import * as styles from './profile.module.css';

const template = Handlebars.compile(ProfileTemplate);

Handlebars.registerPartial('link', LinkTemplate);
Handlebars.registerPartial('edit', EditTemplate);
Handlebars.registerPartial('popup', PopupTemplate);
Handlebars.registerPartial('button', ButtonTemplate);


const render = template({styles, first_name: "Alex"});

export default render;