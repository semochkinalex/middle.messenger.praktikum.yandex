export default `
        <h1 class={{styles.title}}>Регистрация</h1>
        <fieldset class="{{styles.fieldset}} inputs">
        </fieldset>

        <div class="errors"></div>
        
        <div class="{{styles.buttons}} buttons"></div>        
`;
//     <form class={{styles.form}}>
//         <h1 class={{styles.title}}>Регистрация</h1>
//         <fieldset class={{styles.fieldset}}>
//             {{> input name="email" placeholder="Почта" type="email" }}
//             {{> input name="login" placeholder="Логин" type="text" }}
//             {{> input name="first_name" placeholder="Имя" type="text" }}
//             {{> input name="second_name" placeholder="Фамилия" type="text" }}
//             {{> input name="phone" placeholder="Телефон" type="text" }}
//             {{> input name="password" placeholder="Пароль" type="password" }}
//             {{> input name="password_repeat" placeholder="Пароль (ещё раз)" type="password" }}
//         </fieldset>
//         <div class={{styles.buttons}}>
//             {{> button text="Зарегистрироваться"}}
//             {{> link text="Есть Аккаунт? Войти" className=styles.linker anchor="/sign-in" }}
//         </div>
//     </form>
// `;
