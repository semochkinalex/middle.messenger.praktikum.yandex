import Handlebars from "handlebars";

import SignInTemplate from "./change-password.tmpl";

 
import * as styles from "./change-password.module.scss";
import Input from "../../components/input/input";
import Block from "../../modules/view-modules/block";
import { Page } from "../../modules/view-modules/page";
import Form from "../../modules/form/form";
import { IBlockProps, TFormValues } from "../../modules/types/types";
import Button from "../../components/button/button";
import Link from "../../components/link/link";
import Errors from "../../components/errors/errors";

class ChangePassword extends Block {
    constructor(props: IBlockProps) {
        super('form', styles.form, {styles, ...props})
    }

    render() {
        return Handlebars.compile(SignInTemplate)(this.props);
    }
}

const rules = {
    password: (value: string) => {
        if (typeof value !== 'string') return "Input must be a string.";
        if (!new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).test(value)) return "Password should have at least 8 characters, one number, one uppercase letter and one lowercase letter.";
        return '';
    },
    password_repeat: (value: string, values: TFormValues) => {
        if (typeof value !== 'string') return "Input must be a string.";
        if (value !== values['new_password']) return "New passwords should match each other";
        return '';
    },
    new_password: (value: string) => {
        if (typeof value !== 'string') return "Input must be a string.";
        if (!new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).test(value)) return "New Password should have at least 8 characters, one number, one uppercase letter and one lowercase letter.";
        return '';
    },
};

const SubmitButton = new Button({text: "Поменять пароль", attributes: {type: "submit", disabled: true}});

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

const block = new ChangePassword({
    events: {
        'submit': (e) => form.onSubmit(e, console.log),
    },
    attributes: {noValidate: true}
});

const ChangePasswordPage = new Page(block, {
    '.inputs': [
        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'password', value: '', placeholder: 'Старый пароль', required: true, type: "password" }
        }),
        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'new_password', value: '', placeholder: 'Новый пароль', required: true, type: "password" }
        }),

        new Input({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'password_repeat', value: '', placeholder: 'Ещё раз новый пароль', type: "password", required: true, }
        }),
    ],
    '.errors': ErrorComponent,
    '.buttons': [SubmitButton, new Link({text: "Вернуться в профилть", attributes: {href: "/profile"}})]
})

export default ChangePasswordPage;