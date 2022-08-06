import Handlebars from "handlebars";
import SignInTemplate from "./sign-up.tmpl";

import * as styles from "./sign-up.module.scss";

import Input from "../../components/input/input";
import Block from "../../modules/view-modules/block";
import { Page } from "../../modules/view-modules/page";
import Form from "../../modules/form/form";
import { IBlockProps, TFormValues } from "../../modules/types/types";
import Button from "../../components/button/button";
import Link from "../../components/link/link";
import Errors from "../../components/errors/errors";

class SignUpBlock extends Block {
    constructor(props: IBlockProps) {
        super('form', styles.form, {styles, ...props})
    }

    render() {
        return Handlebars.compile(SignInTemplate)(this.props);
    }
}

const rules = {
    login: (value: string) => {

        // /^[А-Я][а-яА-Я]{2,19}/
        if (typeof value !== 'string') return "Input must be a string.";
        if (!new RegExp(/(?=.*[a-zA-Z])[a-zA-Z\_\-0-9]{2,19}/).test(value)) return "Login Must have 3-20 characters with no special symbols (only '_' and '-' accepted) in latin";
        return '';
    },
    
    first_name: (value: string) => {
        if (typeof value !== 'string') return "Input must be a string.";
        if (!new RegExp(/^[А-Я\_][а-яА-Я\_]{2,19}/).test(value)) return "First Name have 3-20 characters with no special symbols in cyrillic starting with a capital letter.";
        return '';
    },

    second_name: (value: string) => {
        if (typeof value !== 'string') return "Input must be a string.";
        if (!new RegExp(/^[А-Я][а-яА-Я]{2,19}/).test(value)) return "Second Name have 3-20 characters with no special symbols in cyrillic starting with a capital letter.";
        return '';
    },

    email: (value: string) => {
        if (typeof value !== 'string') return "Input must be a string.";
        if (!new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)) return "Invalid email provided.";
        return '';
    },

    phone: (value: string) => {
        if (typeof value !== 'string') return "Input must be a string.";
        if (!new RegExp(/^\+?\d{9,15}$/).test(value)) return "Phone number is invalid.";
        return '';
    },

    password: (value: string) => {
        if (typeof value !== 'string') return "Input must be a string.";
        if (!new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).test(value)) return "Password should have at least 8 characters, one number, one uppercase letter and one lowercase letter.";
        return '';
    },
    password_repeat: (value: string, values: TFormValues) => {
        if (typeof value !== 'string') return "Input must be a string.";
        if (value !== values.password) return "Passwords should match each other";
        return '';
    }
};

const SubmitButton = new Button({text: "Зарегестрироваться", attributes: {type: "submit", disabled: true}});

const ErrorComponent = new Errors({
    errors: [],
});

const form = new Form((values, errors) => {

    const hasErrors = Object.keys(errors).length ? true : false;    

    SubmitButton.setProps({
        attributes: {type: 'submit', disabled: hasErrors}    
    })

    ErrorComponent.setProps({
        errors: Object.values(errors)
    });
}, rules);

const block = new SignUpBlock({
    events: {
        'submit': (e) => form.onSubmit(e, console.log),
    },
    attributes: {noValidate: true}
});

const SignUpPage = new Page(block, {
    '.inputs': [
        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'email', value: '', placeholder: 'Почта', required: true, type: "email" }
        }),
        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'login', value: '', placeholder: 'Логин', required: true, }
        }),
        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'first_name', value: '', placeholder: 'Имя', required: true, }
        }),
        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'second_name', value: '', placeholder: 'Фамилия', required: true, }
        }),    
        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'phone', value: '', placeholder: 'Телефон', required: true, }
        }),    
        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'password', value: '', placeholder: 'Пароль', type: "password", required: true, }
        }),
        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'password_repeat', value: '', placeholder: 'Повторите пароль', type: "password", required: true, }
        }),
    ],
    '.errors': ErrorComponent,
    '.buttons': [SubmitButton, new Link({text: "Есть аккаунт? Войти", attributes: {href: "/sign-up"}})]
})

export default SignUpPage;