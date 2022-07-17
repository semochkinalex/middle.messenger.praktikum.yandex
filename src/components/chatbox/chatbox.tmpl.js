import * as styles from './chatbox.module.css';

export default `
    <ul class="${styles.list}">
        {{#each chat.messages}}
            {{> message}}
        {{/each}}
    </ul>
`;