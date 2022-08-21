import { isEqual } from "../helpers/helpers";
import { IAppStateProps } from "../types/types";

export default class AppState {
    static __instance: any;

    private _state: IAppStateProps = {};

    constructor(initialState: IAppStateProps) {
        if (AppState.__instance) {
            return AppState.__instance;
        }

        this._state = this._makePropsProxy(initialState);

        AppState.__instance = this;
    }

    public set(callback: (oldState: IAppStateProps) => IAppStateProps): void {
      const newState = callback(this._state);
      if (isEqual(newState, this._state)) return;
      
      this._state = newState;
    }

    public get() {
      return this._state;
    }

    private _makePropsProxy(props: IAppStateProps) {
      const proxyProps = new Proxy(props, {
        set: (target, prop, value) => {
          if (typeof prop === "symbol") {
            throw new Error("Can't use symbols");
          }
          target[prop] = value;
          return true;
        },
        deleteProperty: function () {
          throw new Error("Permission error.");
        },
      });
      return proxyProps;
    }

}