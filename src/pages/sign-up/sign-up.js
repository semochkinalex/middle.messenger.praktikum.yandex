const Handlebars = require("handlebars");
import LinkTemplate from "../../components/link/link.tmpl.js";
import ButtonTemplate from "../../components/button/button.tmpl.js";
import InputTemplate from "../../components/input/input.tmpl.js";
import SignUpPageTemplate from "./sign-up.tmpl.js";
import * as styles from "./sign-up.module.scss";

const template = Handlebars.compile(SignUpPageTemplate);

Handlebars.registerPartial("button", ButtonTemplate);
Handlebars.registerPartial("link", LinkTemplate);
Handlebars.registerPartial("input", InputTemplate);

const render = template({ styles });

export default render;
