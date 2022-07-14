import * as styles from './chat-preview.module.css';

export default `
    <li class="${styles.chat}">
        {{#if avatar}}
            <img class="${styles.avatar}" alt="{{username}} avatar" src={{avatar}} />
        {{else}}
            <img class="${styles.avatar}" alt="{{username}} avatar" src="../../assets/default-avatar.png" />
        {{/if}} 
        <div class="${styles.content}">
            <div class="${styles.top}">
                <p class="${styles.username}">{{username}}</p>
                <p class="${styles.date}">{{date}}</p>
            </div>
            <p class="${styles.message}">
            {{#if mine}}
                <span class="${styles.self}">Вы: </span>
            {{/if}}
                What's good brotherWhat's good brotherWhat's good brotherWhat's good brotherWhat's good brother. What's good brother What's good brother What's good brother What's good brother
            </p>
            <p class="${styles.count}">4</p>
        </div>
    </li>
`;