import Handlebars from "handlebars";

import SignInTemplate from "./profile.tmpl";

 
import * as styles from "./profile.module.scss";
import Block from "../../modules/view-modules/block";
import { Page } from "../../modules/view-modules/page";
import Form from "../../modules/form/form";
import { IBlockProps } from "../../modules/types/types";
import Button from "../../components/button/button";
import Link from "../../components/link/link";
import Errors from "../../components/errors/errors";
import EditInput from "../../components/edit-input/edit-input";

class ProfileBlock extends Block {
    constructor(props: IBlockProps) {
        super('main', styles.container, {styles, ...props})
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
    display_name: (value: string) => {
        if (typeof value !== 'string') return "Input must be a string.";
        if (!new RegExp(/^[А-Я\_][а-яА-Я\_]{2,19}/).test(value)) return "First Name have 3-20 characters with no special symbols in cyrillic starting with a capital letter.";
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
};

const SubmitButton = new Button({className: styles.save,text: "Cохранить изменения", attributes: {type: "submit", disabled: true}})

const ErrorComponent = new Errors({
    errors: [],
});

const defaultValues = {
    login: 'fennyflop',
    first_name: "Александр",
    second_name: "Сёмочкин",
    display_name: "Александр",
    email: "fennyflop@gmail.com",
    phone: "+79099673030"
}

const form = new Form((values, errors) => {

    const hasErrors = Object.keys(errors).length ? true : false;    

    SubmitButton.setProps({
        attributes: {type: 'submit', disabled: hasErrors}    
    })

    ErrorComponent.setProps({
        errors: Object.values(errors)
    });
}, rules, defaultValues);

const block = new ProfileBlock({
    events: {
        'submit': (e) => form.onSubmit(e, console.log),
    },
    attributes: {noValidate: true},
    first_name: "Александр"
});

const ProfliePage = new Page(block, {
    '.inputs': [
        new EditInput({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'email', value: 'fennyflop@gmail.com', placeholder: 'Почта', required: true }
        }),

        new EditInput({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'login', value: 'fennyflop', placeholder: 'Логин', required: true }
        }),

        new EditInput({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'first_name', value: 'Александр', placeholder: 'Имя', required: true }
        }),
        new EditInput({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'second_name', value: 'Сёмочкин', placeholder: 'Фамилия', required: true }
        }),
        new EditInput({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'display_name', value: 'Александр', placeholder: 'Имя в чате', required: true }
        }),
        new EditInput({
            events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
            attributes: { name: 'phone', value: '+79099673030', placeholder: 'Телефон', required: true }
        }),
    ],
    '.errors': ErrorComponent,
    '.links': [SubmitButton, new Link({text: "Изменить пароль", attributes: {href: "/change-password"}})]
})

export default ProfliePage;