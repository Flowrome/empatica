import { Component, Prop, h, Element, State } from '@stencil/core';
import { Order } from '../../../../dist/types/utils/apis';
import { int } from '../../../utils/translation';

@Component({
  tag: 'emp-order-item-molecule',
  styleUrl: 'emp-order-item.molecule.scss',
  shadow: true
})
export class EmpOrderItemMolecule {
  @Prop() public order: Order;
  @Element() private element: HTMLElement;

  private isOpen: boolean;

  public componentDidLoad() {
    int.init(this.element.shadowRoot);
  }

  public render(): any {
    const classes = {
      'emp-order': true,
      'emp-order--open': true
    };
    return (
      <div class={classes}>
        <div class="first-row">
          <p class="title">{this.order.ref}</p>
        </div>
        <div class="second-row">
          <div class="tracking-info">
            <p class="tracking" data-translate data-translate-value={{ value: this.order.tracking.carrier }}>
              ORDER.CARRIER
            </p>
            <p class="tracking" data-translate data-translate-value={{ value: this.order.tracking.trackingCode }}>
              ORDER.TRACKING_NO
            </p>
            <p
              class="tracking"
              data-translate
              data-translate-value={{ value: int.instant(`ORDER.STATUSES.${this.order.tracking.status}`) }}
            >
              ORDER.STATUS
            </p>
          </div>
          <div class="button-container">
            <emp-button-molecule kind="dark" data-translate>
              ORDER.DELETE
            </emp-button-molecule>
          </div>
        </div>
      </div>
    );
  }
}
