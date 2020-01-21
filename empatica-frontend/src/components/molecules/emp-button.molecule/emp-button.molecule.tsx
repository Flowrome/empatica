import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'emp-button-molecule',
  styleUrl: 'emp-button.molecule.scss',
  shadow: true
})
export class EmpButtonMolecule {
  @Prop() public kind: string & 'primary' | 'gray' | 'dark' = 'primary';
  @Prop() public center: boolean = true;
  @Prop() public full: boolean = false;
  @Prop() public disabled: boolean;

  public render(): any {
    const classes: { [key: string]: boolean } = {
      'emp-btn': true,
      'emp-btn--centered': this.center,
      'emp-btn--full': this.full,
      'emp-btn--primary': this.kind === 'primary',
      'emp-btn--gray': this.kind === 'gray',
      'emp-btn--dark': this.kind === 'dark'
    };
    return (
      <button disabled={this.disabled} class={classes}>
        <slot></slot>
      </button>
    );
  }
}
