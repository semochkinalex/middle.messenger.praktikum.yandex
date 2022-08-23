import * as styles from "./popup.module.scss";

export default `

        <div class="${styles.content}">
            <h3 class="${styles.title}">{{title}}</h3>
            <div class="children"></div>
            <button class="${styles.close} close"></button>
        </div>
`;
