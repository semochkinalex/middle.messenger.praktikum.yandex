import Handlebars from "handlebars";
import Block from "../../modules/core/block";

import * as styles from "./exit-button.module.scss";

import { IBlockProps } from "../../modules/types/types";
import Router from "../../modules/router/router";
import ExitAPI from "./exit-button.api";
import AppState from "../../modules/app-state/app-state";

const router = new Router();
const api = new ExitAPI();
const appState = new AppState({});

export default class ExitButton extends Block {
  constructor(props: IBlockProps = {}) {
    super("button", `${styles.button} ${props?.className}`, {
        ...props,
        events: {
            'click': () => {
                return api.request()
                .then(() => {
                    appState.set(() => {
                      return {user: null};
                    })

                    router.update();
                })
            }
        }
    });
  }

  render() {
    return Handlebars.compile('')(this.props);
  }
}
