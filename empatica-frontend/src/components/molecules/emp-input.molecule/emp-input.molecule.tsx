import { Component, Prop, h, Host, Element, Event, EventEmitter, State } from '@stencil/core';
import { int } from '../../../utils/translation';
import { Validation, ValidationError, Validator } from '../../../utils/validator';

@Component({
  tag: 'emp-input-molecule',
  styleUrl: 'emp-input.molecule.scss',
  shadow: true
})
export class EmpInputMolecule {
  @Prop({ mutable: true }) public value: string = '';
  @Prop() public iid: string = `input-${new Date().valueOf()}`;
  @Prop() public label: string;
  @Prop() public icon: string;
  @Prop() public type: string & 'text' | 'password' | 'email' = 'text';
  @Prop() public errors: Validation[] = [];

  @Event() public empchange: EventEmitter<{ value: string; valid: boolean; errors?: ValidationError }>;
  @Event() public empfocus: EventEmitter<{ value: string; valid: boolean; errors?: ValidationError }>;
  @Event() public empkeyUp: EventEmitter<{ value: string; valid: boolean; errors?: ValidationError }>;
  @Event() public empblur: EventEmitter<{ value: string; valid: boolean; errors?: ValidationError }>;
  @Event() public empicon: EventEmitter<{ value: string; valid: boolean; errors?: ValidationError }>;

  @Element() private element: HTMLElement;

  @State() private pristine: boolean = true;
  @State() private validator: Validator = new Validator(this.errors);

  public componentDidLoad() {
    int.init(this.element.shadowRoot);
  }

  public componentDidUpdate() {
    int.init(this.element.shadowRoot);
  }

  private handleChange(newValue: string) {
    this.value = newValue;
    this.pristine = false;
    this.empchange.emit({
      value: this.value,
      valid: this.validator.validate(this.value),
      errors: this.validator.errors
    });
  }

  private handleFocus(newValue: string) {
    this.value = newValue;
    this.pristine = false;
    this.empfocus.emit({
      value: this.value,
      valid: this.validator.validate(this.value),
      errors: this.validator.errors
    });
  }

  private handleBlur(newValue: string) {
    this.value = newValue;
    this.pristine = false;
    this.empblur.emit({ value: this.value, valid: this.validator.validate(this.value), errors: this.validator.errors });
  }

  private handleKeyUp(newValue: string) {
    this.value = newValue;
    this.pristine = false;
    this.empkeyUp.emit({
      value: this.value,
      valid: this.validator.validate(this.value),
      errors: this.validator.errors
    });
  }

  public render(): any {
    const classes: { [key: string]: boolean } = {
      'emp-input': true,
      'emp-input--filled': this.value.length > 0,
      'emp-input--pristine': this.pristine,
      'emp-input--error': this.validator.errorMessages.length > 0
    };
    return (
      <div class={classes}>
        <input
          type={this.type}
          id={this.iid}
          onChange={({ target }) => this.handleChange((target as HTMLInputElement).value)}
          onFocus={({ target }) => this.handleFocus((target as HTMLInputElement).value)}
          onBlur={({ target }) => this.handleBlur((target as HTMLInputElement).value)}
          onKeyUp={({ target }) => this.handleKeyUp((target as HTMLInputElement).value)}
          value={this.value}
        />
        <label htmlFor={this.iid} data-translate>
          {this.label}
        </label>
        {this.icon && <emp-i-molecule onClick={() => this.empicon.emit()} icon={this.icon}></emp-i-molecule>}
        {Object.keys(this.validator.errors).length > 0 && (
          <ul key={Object.keys(this.validator.errors).length}>
            {Object.keys(this.validator.errors).map(key => (
              <li class="error" data-translate>
                {this.validator.errors[key]?.error}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
