import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'emp-i-molecule',
  styleUrl: 'emp-i.molecule.scss',
  shadow: true
})
export class EmpIMolecule {
  @Prop() public icon: string;
  @Prop() public pointer: boolean = true;
  @Prop() public hover: boolean;

  render(): any {
    const iconName = this.icon.indexOf('emp-i-') > -1 ? this.icon : `emp-i-${this.icon}`;
    return this.icon && <i class={{ [iconName]: true, pointer: this.pointer, hoverized: this.hover }}></i>;
  }
}
