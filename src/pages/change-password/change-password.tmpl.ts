export default `
    <form class={{styles.form}}>
        <h1 class={{styles.title}}>Сменить пароль</h1>
        <fieldset class="{{styles.fieldset}} inputs">
        </fieldset>
        <div class="errors"></div>
        <div class="{{styles.buttons}} buttons">
        </div>
        </form>
`;
// {{> input name="old_password" placeholder="Старый пароль" type="password" }}
// {{> input name="password" placeholder="Новый пароль" type="password" }}
// {{> input name="repeat_password" placeholder="Повторите новый пароль" type="password" }}

// {{> button text="Поменять пароль"}}
// {{> link text="Вернуться в профиль" className=styles.linker anchor="/profile" }}
