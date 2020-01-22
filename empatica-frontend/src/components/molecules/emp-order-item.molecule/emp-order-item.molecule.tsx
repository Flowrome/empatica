import { Component, Prop, h, Element, State, Event, EventEmitter } from '@stencil/core';
import { int } from '../../../utils/translation';
import { Order } from '../../../utils/apis';

@Component({
  tag: 'emp-order-item-molecule',
  styleUrl: 'emp-order-item.molecule.scss',
  shadow: true
})
export class EmpOrderItemMolecule {
  @Prop() public order: Order;
  @Event() public delete: EventEmitter<number>;
  @Element() private element: HTMLElement;

  private isOpen: boolean;

  public componentDidLoad() {
    int.init(this.element.shadowRoot);
  }

  private deleteOrder() {
    this.delete.emit(this.order.id);
  }

  public render(): any {
    const classes = {
      'emp-order': true,
      'emp-order--open': true
    };
    return (
      <div class={classes}>
        <div class="order-header">
          <div class="first-row">
            <p class="title">{this.order.ref}</p>
          </div>
          <div class="second-row">
            <div class="tracking-info">
              <p class="tracking" data-translate data-translate-value={{ value: this.order.status }}>
                ORDER.PAID
              </p>
              {!this.order.tracking && (
                <p class="tracking" data-translate>
                  ORDER.NO_VALUE
                </p>
              )}
              {this.order.tracking && this.order.tracking.carrier && (
                <p class="tracking" data-translate data-translate-value={{ value: this.order.tracking.carrier }}>
                  ORDER.CARRIER
                </p>
              )}
              {this.order.tracking && this.order.tracking.trackingCode && (
                <p class="tracking" data-translate data-translate-value={{ value: this.order.tracking.trackingCode }}>
                  ORDER.TRACKING_NO
                </p>
              )}
              {this.order.tracking && this.order.tracking.status && (
                <p
                  class="tracking"
                  data-translate
                  data-translate-value={{ value: int.instant(`ORDER.STATUSES.${this.order.tracking.status}`) }}
                >
                  ORDER.STATUS
                </p>
              )}
            </div>
          </div>
          <div class={{ 'button-container': true, 'button-container--no-first': !!this.order.tracking }}>
            {!this.order.tracking && (
              <emp-button-molecule kind="dark" onClick={() => this.deleteOrder()} data-translate>
                ORDER.DELETE
              </emp-button-molecule>
            )}
            <emp-button-molecule data-translate>ORDER.EDIT</emp-button-molecule>
            <emp-button-molecule data-translate onClick={() => (this.isOpen = !this.isOpen)}>
              ORDER.SHOW_DETAIL
            </emp-button-molecule>
          </div>
        </div>
        <div class="order-body"></div>
      </div>
    );
  }
}
