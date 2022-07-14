export default `
    <form class={{styles.form}}>
        <h1 class={{styles.title}}>Вход</h1>
        <fieldset class={{styles.fieldset}}>
            {{> input placeholder="Логин" type="text" }}
            {{> input placeholder="Пароль" type="password" }}
        </fieldset>
        <div class={{styles.buttons}}>
            {{> button text="Авторизоваться"}}
            {{> link text="Нет Аккаунта?" className=styles.linker }}
        </div>
    </form>
`;