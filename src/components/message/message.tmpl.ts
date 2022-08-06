import * as styles from "./message.module.scss";

export default `
        {{#if message}}
            <p class="${styles.content}">{{message}}</p>
        {{else}}
            <img class="${styles.image}" alt="" src={{image}} />
        {{/if}}

        <div class="${styles.info}">
            {{#if isSeen}}
                <div class="${styles.seen}"></div>
            {{/if}}
            <p class="${styles.timestamp}">{{timestamp}}</p>
        </div>
`;
