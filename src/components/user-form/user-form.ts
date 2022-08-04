const Handlebars = require("handlebars");

// @ts-ignore 
import * as styles from "./user-form.module.scss";

import Input from "../input/input";
import Block from "../../modules/view-modules/block";
import { Page } from "../../modules/view-modules/page";
import Form from "../../modules/form/form";
import { IBlockProps, IValidationProperties, TFormErrors, TFormHandler, TFormValues } from "../../modules/types/types";
import Button from "../button/button";
import Link from "../link/link";
import Errors from "../errors/errors";

interface IFormComponentProps extends IBlockProps {
    inputs: {name: string; required: boolean; type: 'text' | 'password' | 'email' | 'password'; placeholder: string}[];
    rules: IValidationProperties; 
    handler: TFormHandler;
    submitText: string;
};

export default class FormComponent extends Block {
    private _form: Form;

    private _inputs: {name: string; required: boolean; type: 'text' | 'password' | 'email' | 'password'; placeholder: string}[];
    private _inputsForRender: Input[] = [];
    private _submitButton: Button;
    private _errorComponent: Errors;
    private _handler: TFormHandler;

    constructor(props: IFormComponentProps) {
        super('form', styles.container, props);

        this._inputs = props.inputs;
        this._handler = props.handler;
        this._form = new Form(this._handleErrors, props.rules);
        this._errorComponent = new Errors({errors: []});
        this._submitButton = new Button({text: props.submitText, attributes: {type: 'submit', disabled: false}})
    }

    private _generateMarkup() {
        this._inputs.forEach((input) => {
            const {name, type, placeholder, required = true} = input;

            const generatedInput = new Input({
                attributes: { name, type, placeholder, required, value: '' },
                events: {'input': this._form.handleChange, 'focus': this._form.isCurrentFieldValid, 'blur': this._form.isCurrentFieldValid}
            });

            this._inputsForRender.push(generatedInput);
        });

    }

    _handleErrors(values: TFormValues, errors: TFormErrors) {
        const hasErrors = Object.values(errors).filter((el) => el !== '') ? true : false;

        this._submitButton.setProps({
            disabled: hasErrors,
        });

        this._errorComponent.setProps({
            errors: Object.values(errors)
        });

        this._handler(values, errors);
    }

    render() {
        return Handlebars.compile('')(this.props);
    }


}

// class SignInBlock extends Block {
//     constructor(props: IBlockProps) {
//         super('form', styles.form, {styles, ...props})
//     }

//     render() {
//         return Handlebars.compile(SignInTemplate)(this.props);
//     }
// }
// const ErrorComponent = new Errors({
//     errors: [],
// });

// const SubmitButton = new Button({text: "Войти", attributes: {type: "submit", disabled: true}});

// const form = new Form((values, errors) => {
//     ErrorComponent.setProps({
//         errors: Object.values(errors)
//     });


// }, {
//     login: (value) => {

//         // /^[А-Я][а-яА-Я]{2,19}/
//         if (typeof value !== 'string') return "Input must be a string.";
//         if (!Boolean(new RegExp(/^[А-Я][а-яА-Я]{2,19}/).test(value))) return "Must have 3-20 characters with no special symbols in cyrillic";
//         return '';
//     },

//     password: (value) => {
//         if (typeof value !== 'string') return "Input must be a string.";
//         if (!Boolean(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).test(value))) return "Password should have at least 8 characters, one number, one uppercase letter and one lowercase letter.";

//         return '';
//     }
// });

// const block = new SignInBlock({
//     events: {
//         'submit': form.onSubmit,
//     },
//     attributes: {noValidate: true}
// });



// const SignInPage = new Page(block, {
//     '.inputs': [
//         new Input({
//             events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
//             attributes: { name: 'login', value: '', placeholder: 'Логин', required: true, }
//         }),

//         new Input({
//             events: {'input': form.handleChange, 'focus': form.isCurrentFieldValid, 'blur': form.isCurrentFieldValid},
//             attributes: { name: 'password', value: '', placeholder: 'Пароль', type: "password", required: true, }
//         }),
//     ],
//     '.errors': ErrorComponent,
//     '.buttons': [SubmitButton, new Link({text: "Нет аккаунта?", attributes: {href: "/sign-up"}})]
// })

// export default SignInPage;