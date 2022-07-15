import * as styles from './edit-input.module.css';

export default `
    <fieldset class="${styles.fieldset}">
        <p class="${styles.name}">{{name}}</p>
        <div class="${styles.group}">
            <p class="${styles.currentValue}">{{currentValue}}</p>
            <button class="${styles.edit}"></button>
        </div>
    </fieldset>
`;