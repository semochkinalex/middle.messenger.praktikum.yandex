import * as styles from "./popup.module.scss";

export default `
    <section class="${styles.popup}">
        <div class="${styles.content}">
            <h3 class="${styles.title}">{{title}}</h3>
            {{> button text=button  }}
            <button class="${styles.close}"></button>
        </div>
    </section>
`;
