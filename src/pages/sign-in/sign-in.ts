const Handlebars = require("handlebars");


import SignInTemplate from "./sign-in.tmpl";

// @ts-ignore 
import * as styles from "./sign-in.module.scss";
import Input from "../../components/input/input";
import Block from "../../modules/view-modules/block";
import { Page } from "../../modules/view-modules/page";
import Form from "../../modules/form/form";
import { IBlockProps } from "../../modules/types/types";
import Button from "../../components/button/button";
import Link from "../../components/link/link";
import Errors from "../../components/errors/errors";
import FormComponent from "../../components/user-form/user-form";

class SignInBlock extends Block {
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
        if (!Boolean(new RegExp(/^[А-Я][а-яА-Я]{2,19}/).test(value))) return "Must have 3-20 characters with no special symbols in cyrillic";
        console.log(value);
        return '';
    },

    password: (value: string) => {
        if (typeof value !== 'string') return "Input must be a string.";
        if (!Boolean(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).test(value))) return "Password should have at least 8 characters, one number, one uppercase letter and one lowercase letter.";

        return '';
    }
};

const SubmitButton = new Button({text: "Войти", attributes: {type: "submit", disabled: true}});

const ErrorComponent = new Errors({
    errors: [],
});

const form = new Form((values, errors) => {

    const hasErrors = Object.keys(errors).length ? true : false;
    console.log(Object.keys(errors).length);

    SubmitButton.setProps({
        attributes: {type: 'submit', disabled: hasErrors}    
    })

    ErrorComponent.setProps({
        errors: Object.values(errors)
    });
}, rules);

const block = new SignInBlock({
    events: {
        'submit': form.onSubmit,
    },
    attributes: {noValidate: true}
});

const SignInPage = new Page(block, {
    '.inputs': [
        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'login', value: '', placeholder: 'Логин', required: true, }
        }),

        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'password', value: '', placeholder: 'Пароль', type: "password", required: true, }
        }),
    ],
    '.errors': ErrorComponent,
    '.buttons': [SubmitButton, new Link({text: "Нет аккаунта?", attributes: {href: "/sign-up"}})]
})

export default SignInPage;