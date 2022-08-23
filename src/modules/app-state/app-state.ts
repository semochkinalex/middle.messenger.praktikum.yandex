import { isEqual } from "../helpers/helpers";
import { IAppStateProps } from "../types/types";

type callback = (state: IAppStateProps) => void;

export default class AppState {
    static __instance: any;

    private _listeners: callback[] = [];
    private _state: IAppStateProps = {};

    constructor(initialState: IAppStateProps = {}) {
        if (AppState.__instance) {
            return AppState.__instance;
        }

        this._state = initialState;

        AppState.__instance = this;
    }

    public set(callback: (oldState: IAppStateProps) => IAppStateProps): void {
      const newState = callback(this._state);
      if (isEqual(newState, this._state)) return;

      this._state = newState;
      console.log(newState);
      this._listeners.forEach((callback) => {
        callback(newState);
      })
    }

    public get() {
      return this._state;
    }

    public setListener(callback: callback) {
      this._listeners.push(callback);
    }


}