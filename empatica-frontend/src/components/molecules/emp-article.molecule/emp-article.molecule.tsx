import { Component, Prop, h, Host, Event } from '@stencil/core';
import { EventEmitter } from '../../../../dist/types/stencil.core';

@Component({
  tag: 'emp-article-molecule',
  styleUrl: 'emp-article.molecule.scss',
  shadow: true
})
export class EmpArticleMolecule {
  @Prop() public productImage: string;
  @Event() public imageClick: EventEmitter<void>;

  public render(): any {
    return (
      <div class="article">
        <div class="description-container">
          <slot name="left"></slot>
        </div>
        <div class="product-container">
          {this.productImage && <img onClick={() => this.imageClick.emit()} src={this.productImage}></img>}
          <slot name="right"></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    );
  }
}
