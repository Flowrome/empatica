export interface Validation {
  check: string & 'required' | 'email' | 'minlength' | 'maxlength' | 'min' | 'max' | 'regex';
  errorMessage: string;
  priority?: number;
  extra?: {
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
    regex?: RegExp;
  };
}

export interface ValidationError {
  [key: string]: { error: string; priority: number };
}

export class Validator {
  private _validations: Validation[];
  private _errors: ValidationError = {};

  constructor(validations: Validation[]) {
    this._validations = [
      ...validations.map(({ check, errorMessage, priority, extra }) => ({
        check: check,
        errorMessage: errorMessage,
        priority: priority || 0,
        extra: { ...extra }
      }))
    ];
  }

  public validate(value: any): boolean {
    let valid: boolean = true;
    this._validations.map(({ check, errorMessage, priority }) => {
      // console.log(check, value, this[check](value));
      if (!this[check](value) && !this._errors.check) {
        this._errors = { ...this._errors, [check]: { error: errorMessage, priority: priority } };
      } else {
        delete this._errors[check];
      }
    });
    return valid;
  }

  public get errors(): ValidationError {
    return this._errors;
  }

  public get errorMessages(): string[] {
    return Object.keys(this._errors).map(key => {
      return this._errors[key]?.error;
    });
  }

  private required(value: any): boolean {
    let valid: boolean = true;
    valid = value !== undefined && value !== null && value !== '' && value !== [] && value !== {};
    return valid;
  }

  private email(value: string): boolean {
    let valid: boolean = this.required(value);
    const emailRegex: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    valid = valid && emailRegex.test(value);
    return valid;
  }

  private minlength(value: string): boolean {
    let valid: boolean = this.required(value);
    valid = valid && value.length >= this._validations.find(({ check }) => check === 'minlength')?.extra?.minlength;
    return valid;
  }

  private maxlength(value: string): boolean {
    let valid: boolean = this.required(value);
    valid = valid && value.length <= this._validations.find(({ check }) => check === 'maxlength')?.extra?.maxlength;
    return valid;
  }

  private min(value: number): boolean {
    let valid: boolean = this.required(value);
    valid = valid && value > this._validations.find(({ check }) => check === 'min')?.extra?.min;
    return valid;
  }

  private max(value: number): boolean {
    let valid: boolean = this.required(value);
    valid = valid && value > this._validations.find(({ check }) => check === 'max')?.extra?.max;
    return valid;
  }

  private regex(value: string): boolean {
    let valid: boolean = this.required(value);
    valid = valid && this._validations.find(({ check }) => check === 'max')?.extra?.regex.test(value);
    return valid;
  }
}
