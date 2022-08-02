import Block from "../view-modules/block";
import { IValidationProperties, TFormErrors, TFormValues } from "../types/types";

export default class Form {
    private _values: TFormValues = {};
    private _errors: TFormErrors;

    private _rules: IValidationProperties = {};

    constructor(rules: IValidationProperties) {
        this._rules = rules;

        this.isValidForm = this.isValidForm.bind(this);
        this.isValidField = this.isValidField.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // function or regex
    public isValidField(value: string | number, name: string): boolean {
                
        const message = this._rules[name](value);

        if (!message) {
            return true;
        } else {
            this._errors = {
                [name]: message
            } 
            return false;
        }
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

    public onSubmit(evt: Event) {
        evt.preventDefault(); 
        console.log(this.isValidForm());
    }
}