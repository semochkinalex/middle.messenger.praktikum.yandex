export default `
    <main class={{styles.container}}>
        <div class={{styles.credentials}}>
            <img class={{styles.avatar}} alt="{{first_name}} avatar" src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg" />
            <p class={{styles.name}}>{{first_name}}</p>
        </div>
        <form class={{styles.form}}>
            {{> edit name="Почта" currentValue="pochta@gmail.ru" }}
            {{> edit name="Логин" currentValue="ivanivanov" }}
            {{> edit name="Имя" currentValue="Иван" }}
            {{> edit name="Фамилия" currentValue="Иванов" }}
            {{> edit name="Имя в чате" currentValue="Иван" }}
            {{> edit name="Телефон" currentValue="7 (903) 967 30 30" }}
            <div class={{styles.buttons}}>
                <a class={{styles.link}}>Изменить данные</a>
                <a class={{styles.link}}>Изменить пароль</a>
                <button class={{styles.exit}}>Выйти</button>
            </div>
        </form>
    </main>
`;