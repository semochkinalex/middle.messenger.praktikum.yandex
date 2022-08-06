export default `
    <main class={{styles.container}}>
        <div class={{styles.credentials}}>
            <button class={{styles.change}}>
                Поменять аватар
            </button>
            <img class={{styles.avatar}} alt="{{first_name}} avatar" src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg" />
            <p class={{styles.name}}>{{first_name}}</p>
            <button class={{styles.exit}}>Выйти</button>
        </div>
        <form class={{styles.form}}>
        <div class="inputs {{styles.inputs}}">
        </div>
        <div class="errors">
        </div>
        <div class="{{styles.links}} links">
        </div>
        </form>
        <div class={{styles.sidebar}}>
        <button class={{styles.return}}></button>
        </div>
        </main>
        `;
        // {{> popup title="Сохранить изменения" button="Сохранить"}}
        
        // {{> edit name="Почта" currentValue="pochta@gmail.ru" fieldName="email" }}
        // {{> edit name="Логин" currentValue="ivanivanov" fieldName="login" }}
        // {{> edit name="Имя" currentValue="Иван" fieldName="first_name" }}
        // {{> edit name="Фамилия" currentValue="Иванов" fieldName="second_name" }}
        // {{> edit name="Имя в чате" currentValue="Иван" fieldName="display_name" }}
        // {{> edit name="Телефон" currentValue="7(903)-967-30-30" fieldName="phone" }}