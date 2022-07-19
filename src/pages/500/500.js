const Handlebars = require('handlebars');
import LinkTemplate from '../../components/link/link.tmpl.js';
import ServerErrorPage from './500.tmpl.js';
import * as styles from './500.module.scss';

const template = Handlebars.compile(ServerErrorPage);

Handlebars.registerPartial('link', LinkTemplate);

const render = template({styles});

export default render;