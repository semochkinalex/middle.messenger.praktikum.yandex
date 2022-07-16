import * as styles from './link.module.scss';

export default `
    <a class="${styles.link} {{className}}" href="{{anchor}}">{{text}}</a>
`;