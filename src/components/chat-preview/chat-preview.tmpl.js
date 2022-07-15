import * as styles from './chat-preview.module.css';

export default `
    {{#if isSelected}}
        <li class="${styles.chat} ${styles.selected}">
    {{else}}
        <li class="${styles.chat}">
    {{/if}}
        {{#if avatar}}
            <img class="${styles.avatar}" alt="{{username}} avatar" src={{avatar}} />
        {{else}}
            <img class="${styles.avatar}" alt="{{username}} avatar" src="../../assets/default-avatar.png" />
        {{/if}} 
        <div class="${styles.content}">
            <div class="${styles.top}">
                <p class="${styles.username}">{{username}}</p>
                <p class="${styles.date}">{{timestamp}}</p>
            </div>
            <p class="${styles.message}">
            {{#if repliedTo}}
                <span class="${styles.self}">Вы: </span>
            {{/if}}
                {{latestMessage}}
            </p>
            {{#if unreadMessagesCount}}
                <p class="${styles.count}">{{unreadMessagesCount}}</p>
            {{/if}}
        </div>
    </li>
`;