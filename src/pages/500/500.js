import Handlebars from 'handlebars';
import LinkTemplate from '../../components/link/link.tmpl';
import ServerErrorPage from './500.tmpl';
import styles from './500.module.css';

const template = Handlebars.compile(ServerErrorPage);

Handlebars.registerPartial('link', LinkTemplate);

const render = template({styles});

export default render;