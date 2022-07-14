import * as styles from './chat-preview.module.css';

export default `
    <li class="${styles.chat}">
        {{#if avatar}}
            <img class="${styles.avatar}" alt="{{username}} avatar" src={{avatar}} />
        {{else}}
            <img class="${styles.avatar}" alt="{{username}} avatar" src="../../assets/default-avatar.png" />
        {{/if}} 
        <div class="${styles.top}">
            <p class="${styles.username}">{{username}}</p>
            <p class="${styles.date}">{{date}}</p>
        </div>
    </li>
`;