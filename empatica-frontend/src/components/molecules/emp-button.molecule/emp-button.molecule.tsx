import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'emp-button-molecule',
  styleUrl: 'emp-button.molecule.scss',
  shadow: true
})
export class EmpButtonMolecule {
  @Prop() public kind: string & 'primary' | 'gray' = 'primary';
  @Prop() public center: boolean = true;
  @Prop() public full: boolean = false;

  render(): any {
    const classes: { [key: string]: boolean } = {
      'emp-btn': true,
      'emp-btn--centered': this.center,
      'emp-btn--full': this.full,
      'emp-btn--primary': this.kind === 'primary',
      'emp-btn--gray': this.kind === 'gray'
    };
    return (
      <button class={classes}>
        <slot></slot>
      </button>
    );
  }
}
