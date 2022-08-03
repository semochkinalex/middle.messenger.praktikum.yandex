import * as styles from './errors.module.scss';

export default `
    <ul class="${styles.errors}">
        {{#each errors}}
            <li class="${styles.error}">{{this}}</li>
        {{/each}}
    </ul>
`;