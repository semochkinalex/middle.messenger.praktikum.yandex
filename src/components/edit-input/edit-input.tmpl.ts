import * as styles from "./edit-input.module.scss";

export default `
        <p class="${styles.name}">{{attributes.placeholder}}</p>
        <div class="${styles.group}">
            <input class="${styles.currentValue} input" placeholder={{attributes.value}} name={{attributes.name}}>
            <button class="${styles.edit}"></button>
        </div>
`;
