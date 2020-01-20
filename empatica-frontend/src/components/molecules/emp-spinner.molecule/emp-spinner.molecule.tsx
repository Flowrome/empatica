import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'emp-spinner-molecule',
  styleUrl: 'emp-spinner.molecule.scss',
  shadow: true
})
export class EmpSpinnerMolecule {

  public render(): any {
    const classes = {
      spinner: true
    };
    return (
      <svg class={classes} viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
    );
  }
}
