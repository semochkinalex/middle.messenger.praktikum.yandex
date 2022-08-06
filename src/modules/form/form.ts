import Block from "../view-modules/block";
import { IValidationProperties, TFormErrors, TFormHandler, TFormValues } from "../types/types";

export default class Form {
    private _values: TFormValues = {};
    private _errors: TFormErrors;
    private _handler: TFormHandler;

    private _rules: IValidationProperties = {};

    constructor(handler: TFormHandler, rules: IValidationProperties) {
        this._rules = rules;
        this._handler = handler

        this.isCurrentFieldValid = this.isCurrentFieldValid.bind(this);
        this.isValidForm = this.isValidForm.bind(this);
        this.isValidField = this.isValidField.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // function or regex
    public isValidField(value: string | number, name: string): boolean {
        if (!this._rules[name]) return true;
        const message = this._rules[name](value, this._values);
    
        if (!message) {
            console.log(message);
            delete this._errors[name]
            this._update();
            return true;
        } else {
            this._errors = {
                ...this._errors,
                [name]: message
            } 
            this._update();
            return false;
        }

    }   

    public isCurrentFieldValid(evt: Event): boolean {
        const target = evt.currentTarget;
        const {name, value} = target;
        return this.isValidField(value, name);
    }   

    public isValidForm(): boolean | TFormErrors {
        let valid = true;
        for (const [input, value] of Object.entries(this._values)) {    
            if (!this.isValidField(value, input)) {
                valid = false;
                break;
            }
        };

        return valid;
    }

    public handleChange(event: any) {
        const target = event?.currentTarget;
        if (!target || !target?.value) return;

        this._values = {
            ...this._values,
            [target.name]: target.value,
        };
    }

    public onSubmit(evt: Event, callback?: (values: TFormValues) => void) {
        evt.preventDefault(); 
        if (callback) callback(this._values);
    }

    private _update() {
        this._handler(this._values, this._errors);
    }
}