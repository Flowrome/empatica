import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'emp-list-item-molecule',
  styleUrl: 'emp-list-item.molecule.scss',
  shadow: true
})
export class EmpListItemMolecule {
  @Prop() public text: string = 'emp-list-item-molecule';

  public render(): any {
    return <p>You are in {this.text}</p>;
  }
}
