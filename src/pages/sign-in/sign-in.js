// страница логина
const Handlebars = require("handlebars");
import LinkTemplate from "../../components/link/link.tmpl.js";
import ButtonTemplate from "../../components/button/button.tmpl.js";
import InputTemplate from "../../components/input/input.tmpl.js";
import SignInPageTemplate from "./sign-in.tmpl.js";

import * as styles from "./sign-in.module.scss";

const template = Handlebars.compile(SignInPageTemplate);

Handlebars.registerPartial("button", ButtonTemplate);
Handlebars.registerPartial("link", LinkTemplate);
Handlebars.registerPartial("input", InputTemplate);

const render = template({ styles });
// для страниц

export default render;
