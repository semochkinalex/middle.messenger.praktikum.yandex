import Handlebars from 'handlebars';
import LinkTemplate from '../../components/link/link.tmpl';
import EditTemplate from '../../components/edit-input/edit-input.tmpl';
import ProfileTemplate from './profile.tmpl';
import * as styles from './profile.module.css';

const template = Handlebars.compile(ProfileTemplate);

Handlebars.registerPartial('link', LinkTemplate);
Handlebars.registerPartial('edit', EditTemplate);

const render = template({styles, first_name: "Alex"});

export default render;