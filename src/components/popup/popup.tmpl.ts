import * as styles from "./popup.module.scss";

export default `

        <form class="${styles.content} form">
            <h3 class="${styles.title}">{{title}}</h3>
                <input class="${styles.input} input" id="avatarrr" type="file" name="avatar" accept="image/*">
                <button type="submit" class="${styles.button}">Отправить</button>
            <button class="${styles.close} close"></button>
            <p class="${styles.error}">{{error}}</p>
        </form>
`;
