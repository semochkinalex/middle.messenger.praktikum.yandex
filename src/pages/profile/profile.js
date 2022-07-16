import Handlebars from 'handlebars';
import LinkTemplate from '../../components/link/link.tmpl';
import EditTemplate from '../../components/edit-input/edit-input.tmpl';
import ProfileTemplate from './profile.tmpl';
import PopupTemplate from '../../components/popup/popup.tmpl';
import ButtonTemplate from '../../components/button/button.tmpl';
import * as styles from './profile.module.scss';

const template = Handlebars.compile(ProfileTemplate);

Handlebars.registerPartial('link', LinkTemplate);
Handlebars.registerPartial('edit', EditTemplate);
Handlebars.registerPartial('popup', PopupTemplate);
Handlebars.registerPartial('button', ButtonTemplate);


const render = template({styles, first_name: "Alex"});

export default render;