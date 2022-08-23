import {
  IValidationProperties,
  TFormErrors,
  TFormHandler,
  TFormValues,
} from "../types/types";

export default class Form {
  private _values: TFormValues = {};
  private _errors: TFormErrors;
  private _handler: TFormHandler;

  private _errorMessages: IValidationProperties = {};

  constructor(
    handler: TFormHandler,
    errorMessages: IValidationProperties,
    defaultValues?: TFormValues
  ) {
    this._errorMessages = errorMessages;
    this._handler = handler;

    this._values = defaultValues ?? {};

    this.isCurrentFieldValid = this.isCurrentFieldValid.bind(this);
    this.isValidForm = this.isValidForm.bind(this);
    this.isValidField = this.isValidField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  public isValidField(value: string | number, name: string): boolean {
    if (!this._errorMessages[name]) return true;
    const message = this._errorMessages[name](value, this._values);

    if (!message) {
      if (this._errors) {
        delete this._errors[name];
        this._update();
      }
      return true;
    } else {
      this._errors = {
        ...this._errors,
        [name]: message,
      };
      this._update();
      return false;
    }
  }

  public isCurrentFieldValid(evt: Event): boolean {
    const target = evt.currentTarget;
    const { name, value } = target as EventTarget;
    return this.isValidField(value, name);
  }

  public isValidForm(): boolean | TFormErrors {
    let valid = true;
    for (const [input, value] of Object.entries(this._values)) {
      if (!this.isValidField(value, input)) {
        valid = false;
        break;
      }
    }

    return valid;
  }

  public handleChange(event: Event) {
    const target = event?.currentTarget;

    if (!target) return;

    this._values = {
      ...this._values,
      [target?.name]: target?.value,
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
