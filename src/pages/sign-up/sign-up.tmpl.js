export default `
    <form class={{styles.form}}>
        <h1 class={{styles.title}}>Регистрация</h1>
        <fieldset class={{styles.fieldset}}>
            {{> input placeholder="Почта" type="email" }}
            {{> input placeholder="Логин" type="text" }}
            {{> input placeholder="Имя" type="text" }}
            {{> input placeholder="Фамилия" type="text" }}
            {{> input placeholder="Телефон" type="text" }}
            {{> input placeholder="Пароль" type="password" }}
            {{> input placeholder="Пароль (ещё раз)" type="password" }}
        </fieldset>
        <div class={{styles.buttons}}>
            {{> button text="Зарегистрироваться"}}
            {{> link text="Есть Аккаунт? Войти" className=styles.linker anchor="/sign-in" }}
        </div>
    </form>
`;