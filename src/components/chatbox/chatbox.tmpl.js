import * as styles from "./chatbox.module.scss";

export default `
    <ul class="${styles.list}">
        {{#each chat.messages}}
            {{> message}}
        {{/each}}
    </ul>
`;
