export default `
    <form class={{styles.form}}>
        <h1 class={{styles.title}}>Вход</h1>
        <fieldset class={{styles.fieldset}}>
            {{> input name="login" placeholder="Логин" type="text" }}
            {{> input name="password" placeholder="Пароль" type="password" }}
        </fieldset>
        <div class={{styles.buttons}}>
            {{> button text="Вход"}}
            {{> link text="Нет Аккаунта?" className=styles.linker anchor="/sign-up" }}
        </div>
    </form>
`;