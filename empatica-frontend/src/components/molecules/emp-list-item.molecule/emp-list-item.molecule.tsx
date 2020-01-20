import { Component, Prop, h, Element } from '@stencil/core';
import { int } from '../../../utils/translation';

@Component({
  tag: 'emp-list-item-molecule',
  styleUrl: 'emp-list-item.molecule.scss',
  shadow: true
})
export class EmpListItemMolecule {
  @Prop() public text: string;
  @Prop() public iconLeft: string;
  @Prop() public iconRight: string;
  @Prop() public centeredTitle: boolean;

  @Element() private element: HTMLElement;

  public componentDidLoad() {
    int.init(this.element.shadowRoot);
  }

  public render(): any {
    return (
      <li class={{ 'emp-list': true, 'emp-list--centered': this.centeredTitle }}>
        {this.iconLeft && <emp-i-molecule icon={this.iconLeft}></emp-i-molecule>}
        {!this.iconLeft && this.centeredTitle && <div class="replace"></div>}
        {this.text && <p class={{'no-icon-left': !this.iconLeft && !this.centeredTitle}} data-translate>{this.text}</p>}
        {this.iconRight && <emp-i-molecule icon={this.iconRight}></emp-i-molecule>}
        {!this.iconRight && this.centeredTitle && <div class="replace"></div>}
      </li>
    );
  }
}
