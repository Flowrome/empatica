import { Component, Prop, h, Host, Element, Event, EventEmitter, State } from '@stencil/core';
import { int } from '../../../utils/translation';

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
  @Prop() public error: string | string[] = '';

  @Event() public empchange: EventEmitter<string>;
  @Event() public empfocus: EventEmitter<string>;
  @Event() public empkeyUp: EventEmitter<string>;
  @Event() public empblur: EventEmitter<string>;
  @Event() public empicon: EventEmitter<string>;

  @Element() private element: HTMLElement;

  @State() private pristine: boolean = true;

  public componentDidLoad() {
    int.init(this.element.shadowRoot);
  }

  public componentDidUpdate() {
    int.init(this.element.shadowRoot);
  }

  private handleChange(newValue: string) {
    this.value = newValue;
    this.pristine = false;
    this.empchange.emit(this.value);
  }

  private handleFocus(newValue: string) {
    this.value = newValue;
    this.pristine = false;
    this.empfocus.emit(this.value);
  }

  private handleBlur(newValue: string) {
    this.value = newValue;
    this.pristine = false;
    this.empblur.emit(this.value);
  }

  private handleKeyUp(newValue: string) {
    this.value = newValue;
    this.pristine = false;
    this.empkeyUp.emit(this.value);
  }

  private renderError(): HTMLElement {
    let toReturn: HTMLElement = null;
    if (typeof this.error === 'string') {
      toReturn = (
        <p class='error' data-translate>
          {this.error}
        </p>
      );
    } else {
      toReturn = (
        <ul>
          {this.error.map(error => (
            <li class='error' data-translate>
              {error}
            </li>
          ))}
        </ul>
      );
    }
    return toReturn;
  }

  public render(): any {
    const classes: { [key: string]: boolean } = {
      'emp-input': true,
      'emp-input--filled': this.value.length > 0,
      'emp-input--pristine': this.pristine,
      'emp-input--error': this.error.length > 0
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
        {this.error.length > 0 && this.renderError()}
      </div>
    );
  }
}
