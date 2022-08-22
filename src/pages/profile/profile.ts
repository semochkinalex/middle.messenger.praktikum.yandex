import Handlebars from "handlebars";

import SignInTemplate from "./profile.tmpl";

import * as styles from "./profile.module.scss";
import Block from "../../modules/core/block";
import { Page } from "../../modules/core/page";
import Form from "../../modules/form/form";
import { IBlockProps } from "../../modules/types/types";
import Button from "../../components/button/button";
import Link from "../../components/link/link";
import Errors from "../../components/errors/errors";
import EditInput from "../../components/edit-input/edit-input";
import { emailRegexp, firstNameRegexp, loginRegexp, phoneRegexp, secondNameRegexp } from "../../modules/helpers/regex";
import ExitButton from "../../components/exit-button/exit-button";
import AppState from "../../modules/app-state/app-state";

class ProfileBlock extends Block {
  constructor(props: IBlockProps) {
    super("main", styles.container, { styles, ...props });
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
  display_name: (value: string): string => {
    if (typeof value !== "string") return "Input must be a string.";
    if (!new RegExp(firstNameRegexp).test(value))
      return "First Name have 3-20 characters with no special symbols in cyrillic starting with a capital letter.";
    return "";
  },
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
    if (
      !new RegExp(emailRegexp).test(value)
    )
    return "Invalid email provided.";
    return "";
  },

  phone: (value: string): string => {
    if (typeof value !== "string") return "Input must be a string.";
    if (!new RegExp(phoneRegexp).test(value))
    return "Phone number is invalid.";
    return "";
  },
};

const SubmitButton = new Button({
  className: styles.save,
  text: "Cохранить изменения",
  attributes: { type: "submit", disabled: true },
});

const ErrorComponent = new Errors({
  errors: [],
});

const defaultValues = {
  login: "fennyflop",
  first_name: "Александр",
  second_name: "Сёмочкин",
  display_name: "Александр",
  email: "fennyflop@gmail.com",
  phone: "+79099673030",
};

const form = new Form(
  (values, errors) => {
    const hasErrors = Object.keys(errors).length ? true : false;

    SubmitButton.setProps({
      attributes: { type: "submit", disabled: hasErrors },
    });

    ErrorComponent.setProps({
      errors: Object.values(errors),
    });
  },
  errorMessages,
  defaultValues
);

const block = new ProfileBlock({
  events: {
    submit: (e) => form.onSubmit(e, console.log),
  },
  attributes: { noValidate: true },
  first_name: "Александр",
});

const email = new EditInput({
  events: {
    input: form.handleChange,
    focus: form.isCurrentFieldValid,
    blur: form.isCurrentFieldValid,
  },
  attributes: {
    name: "email",
    value: "fennyflop@gmail.com",
    placeholder: "Почта",
    required: true,
  },
})

const login = new EditInput({
  events: {
    input: form.handleChange,
    focus: form.isCurrentFieldValid,
    blur: form.isCurrentFieldValid,
  },
  attributes: {
    name: "login",
    value: "fennyflop",
    placeholder: "Логин",
    required: true,
  },
});

const first_name = new EditInput({
  events: {
    input: form.handleChange,
    focus: form.isCurrentFieldValid,
    blur: form.isCurrentFieldValid,
  },
  attributes: {
    name: "first_name",
    value: "Александр",
    placeholder: "Имя",
    required: true,
  },
});

const second_name = new EditInput({
  events: {
    input: form.handleChange,
    focus: form.isCurrentFieldValid,
    blur: form.isCurrentFieldValid,
  },
  attributes: {
    name: "second_name",
    value: "Сёмочкин",
    placeholder: "Фамилия",
    required: true,
  },
});

const display_name = new EditInput({
  events: {
    input: form.handleChange,
    focus: form.isCurrentFieldValid,
    blur: form.isCurrentFieldValid,
  },
  attributes: {
    name: "display_name",
    value: "Александр",
    placeholder: "Имя в чате",
    required: true,
  },
});

const phone = new EditInput({
  events: {
    input: form.handleChange,
    focus: form.isCurrentFieldValid,
    blur: form.isCurrentFieldValid,
  },
  attributes: {
    name: "phone",
    value: "+79099673030",
    placeholder: "Телефон",
    required: true,
  },
});

const appState = new AppState({});

appState.setListener(({user}) => {
  if (!user) return;

  email.setProps({ attributes: { name: "email", placeholder: "Почта", required: true, value: user?.email, } })
  login.setProps({ attributes: { name: "login", placeholder: "Логин", required: true, value: user?.login, } })
  first_name.setProps({ attributes: { name: "fist_name", placeholder: "Имя", required: true, value: user?.fist_name || 'Имя', } })
  second_name.setProps({ attributes: { name: "second_name", placeholder: "Фамилия", required: true, value: user?.second_name, } })
  display_name.setProps({ attributes: { name: "display_name", placeholder: "Имя", required: true, value: user?.display_name || 'Имя в чате', } })
  phone.setProps({ attributes: { name: "phone", placeholder: "Телефон", required: true, value: user?.phone || 'Имя', } })
})

const ProfliePage = new Page(block, {
  ".inputs": [
    email,
    login,
    first_name,
    second_name,
    display_name,
    phone,
  ],
  ".errors": ErrorComponent,
  ".links": [
    SubmitButton,
    new Link({
      text: "Изменить пароль",
      attributes: { href: "/change-password" },
    }),
  ],
  '.exit': new ExitButton(),
});

export default ProfliePage;
