import Handlebars from "handlebars";
import SignInTemplate from "./sign-up.tmpl";

import * as styles from "./sign-up.module.scss";

import Input from "../../components/input/input";
import Block from "../../modules/core/block";
import { Page } from "../../modules/core/page";
import Form from "../../modules/form/form";
import { IBlockProps, TFormValues } from "../../modules/types/types";
import Button from "../../components/button/button";
import Link from "../../components/link/link";
import Errors from "../../components/errors/errors";
import { emailRegexp, firstNameRegexp, passwordRegexp, phoneRegexp, secondNameRegexp } from "../../modules/helpers/regex";
import UserSignUpAPI from "./sign-up.api";
import Router from "../../modules/router/router";
import { getProfileData } from "../../modules/helpers/auth";

class SignUpBlock extends Block {
  constructor(props: IBlockProps) {
    super("form", styles.form, { styles, ...props });
  }

  render() {
    return Handlebars.compile(SignInTemplate)(this.props);
  }
}

const errorMessages = {


  first_name: (value: string): string => {
    if (typeof value !== "string") return "Input must be a string.";
    if (!new RegExp(firstNameRegexp).test(value))
      return "First Name have 3-20 characters with no special symbols in cyrillic starting with a capital letter.";
    return "";
  },

  second_name: (value: string): string => {
    if (typeof value !== "string") return "Input must be a string.";
    if (!new RegExp(secondNameRegexp).test(value))
      return "Second Name have 3-20 characters with no special symbols in cyrillic starting with a capital letter.";
    return "";
  },

  email: (value: string): string => {
    if (typeof value !== "string") return "Input must be a string.";
    if (!new RegExp(emailRegexp).test(value)) return "Invalid email provided.";
    return "";
  },

  phone: (value: string): string => {
    if (typeof value !== "string") return "Input must be a string.";
    if (!new RegExp(phoneRegexp).test(value))
      return "Phone number is invalid.";
    return "";
  },

  password: (value: string): string => {
    if (typeof value !== "string") return "Input must be a string.";
    if (!new RegExp(passwordRegexp).test(value))
    return "Password should have at least 8 characters, one number, one uppercase letter and one lowercase letter.";
    return "";
  },
  password_repeat: (value: string, values: TFormValues) => {
    if (typeof value !== "string") return "Input must be a string.";
    if (value !== values.password) return "Passwords should match each other";
    return "";
  },
};

const SubmitButton = new Button({
  text: "Зарегестрироваться",
  attributes: { type: "submit", disabled: true },
});

const ErrorComponent = new Errors({
  errors: [],
});

const form = new Form((values, errors) => {
  const hasErrors = Object.keys(errors).length ? true : false;

  SubmitButton.setProps({
    attributes: { type: "submit", disabled: hasErrors },
  });

  ErrorComponent.setProps({
    errors: Object.values(errors),
  });
}, errorMessages);

const api = new UserSignUpAPI();
const router = new Router();

const handleSubmit = (values: TFormValues) => {
  api.create(values.first_name as string, values.second_name as string, values.login as string, values.email as string, values.password as string, values.phone as string)
  .then((res) => {
    getProfileData();
  })
  .catch((err) => {
    console.log(err);
    ErrorComponent.setProps({
      errors: [err.reason]
    })
  })
}

const block = new SignUpBlock({
  events: {
    submit: (e) => form.onSubmit(e, handleSubmit),
  },
  attributes: { noValidate: true },
});

const SignUpPage = new Page(block, {
  ".inputs": [
    new Input({
      events: {
        input: form.handleChange,
        focus: form.isCurrentFieldValid,
        blur: form.isCurrentFieldValid,
      },
      attributes: {
        name: "email",
        value: "",
        placeholder: "Почта",
        required: true,
        type: "email",
      },
    }),
    new Input({
      events: {
        input: form.handleChange,
        focus: form.isCurrentFieldValid,
        blur: form.isCurrentFieldValid,
      },
      attributes: {
        name: "login",
        value: "",
        placeholder: "Логин",
        required: true,
      },
    }),
    new Input({
      events: {
        input: form.handleChange,
        focus: form.isCurrentFieldValid,
        blur: form.isCurrentFieldValid,
      },
      attributes: {
        name: "first_name",
        value: "",
        placeholder: "Имя",
        required: true,
      },
    }),
    new Input({
      events: {
        input: form.handleChange,
        focus: form.isCurrentFieldValid,
        blur: form.isCurrentFieldValid,
      },
      attributes: {
        name: "second_name",
        value: "",
        placeholder: "Фамилия",
        required: true,
      },
    }),
    new Input({
      events: {
        input: form.handleChange,
        focus: form.isCurrentFieldValid,
        blur: form.isCurrentFieldValid,
      },
      attributes: {
        name: "phone",
        value: "",
        placeholder: "Телефон",
        required: true,
      },
    }),
    new Input({
      events: {
        input: form.handleChange,
        focus: form.isCurrentFieldValid,
        blur: form.isCurrentFieldValid,
      },
      attributes: {
        name: "password",
        value: "",
        placeholder: "Пароль",
        type: "password",
        required: true,
      },
    }),
    new Input({
      events: {
        input: form.handleChange,
        focus: form.isCurrentFieldValid,
        blur: form.isCurrentFieldValid,
      },
      attributes: {
        name: "password_repeat",
        value: "",
        placeholder: "Повторите пароль",
        type: "password",
        required: true,
      },
    }),
  ],
  ".errors": ErrorComponent,
  ".buttons": [
    SubmitButton,
    new Link({ text: "Есть аккаунт? Войти", attributes: { href: "/sign-in" } }),
  ],
});

export default SignUpPage;
