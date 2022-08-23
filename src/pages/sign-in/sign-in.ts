import Handlebars from "handlebars";

import SignInTemplate from "./sign-in.tmpl";

import * as styles from "./sign-in.module.scss";
import Input from "../../components/input/input";
import Block from "../../modules/core/block";
import { Page } from "../../modules/core/page";
import Form from "../../modules/form/form";
import { IBlockProps, TFormValues } from "../../modules/types/types";
import Button from "../../components/button/button";
import Link from "../../components/link/link";
import Errors from "../../components/errors/errors";
import { loginRegexp, passwordRegexp } from "../../modules/helpers/regex";
import UserSignInAPI from "./sign-in.api";
import Router from "../../modules/router/router";
import { getProfileData } from "../../modules/helpers/auth";

class SignInBlock extends Block {
  constructor(props: IBlockProps) {
    super("form", styles.form, { styles, ...props });
  }

  render() {
    return Handlebars.compile(SignInTemplate)(this.props);
  }
}

const errorMessages = {
   login: (value: string): string => {
     if (typeof value !== "string") return "Input must be a string.";
     if (!new RegExp(loginRegexp).test(value))
       return "Login Must have 3-20 characters with no special symbols (only '_' and '-' accepted) in latin";
     return "";
   },

  password: (value: string): string => {
    if (typeof value !== "string") return "Input must be a string.";
    if (
      !new RegExp(passwordRegexp).test(value)
    )
      return "Password should have at least 8 characters, one number, one uppercase letter and one lowercase letter.";
    return "";
  },
};

const SubmitButton = new Button({
  text: "Войти",
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

const api = new UserSignInAPI();
const router = new Router();

const handleSubmit = (values: TFormValues) => {
  api.create(values.login as string, values.password as string)
  .then(() => {
    router.go('/messenger'); 
    getProfileData();
  })
  .catch((err) => {
    console.log(err);
    ErrorComponent.setProps({
      errors: [err.reason]
    })
  })
}

const block = new SignInBlock({
  events: {
    submit: (e) => form.onSubmit(e, handleSubmit),
  },
  attributes: { noValidate: true },
});

const SignInPage = new Page(block, {
  ".inputs": [
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
        name: "password",
        value: "",
        placeholder: "Пароль",
        type: "password",
        required: true,
      },
    }),
  ],
  ".errors": ErrorComponent,
  ".buttons": [
    SubmitButton,
    new Link({ text: "Нет аккаунта?", attributes: { href: "/sign-up" } }),
  ],
});

export default SignInPage;
