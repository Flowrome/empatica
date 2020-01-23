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

  @State() private isOpen: boolean;

  public componentDidLoad() {
    int.init(this.element.shadowRoot);
  }

  private deleteOrder() {
    this.delete.emit(this.order.id);
  }

  public render(): any {
    const classes = {
      'emp-order': true,
      'emp-order--open': this.isOpen
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
              <emp-button-molecule kind="dark" fullOnMobile={true} onClick={() => this.deleteOrder()} data-translate>
                ORDER.DELETE
              </emp-button-molecule>
            )}
            <emp-button-molecule fullOnMobile={true} data-translate>
              ORDER.EDIT
            </emp-button-molecule>
            <emp-button-molecule fullOnMobile={true} data-translate onClick={() => (this.isOpen = !this.isOpen)}>
              ORDER.SHOW_DETAIL
            </emp-button-molecule>
          </div>
        </div>
        <div class="order-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacus et ex egestas dictum in eu eros. Sed
          iaculis, velit id imperdiet pulvinar, nulla leo malesuada metus, vitae dapibus lectus tellus nec ipsum. Donec
          a nulla dui. Cras ut nisi vitae turpis mattis posuere. Nunc rutrum lorem non mi tincidunt, in bibendum tellus
          tincidunt. Vestibulum eleifend id enim non lobortis. Vestibulum ultrices nunc enim, et rhoncus purus tempus
          at. Nunc tempus congue mauris, nec eleifend nunc tincidunt in. Mauris lacus metus, finibus eget sapien quis,
          facilisis euismod lorem. Integer neque urna, molestie vel hendrerit in, pharetra et turpis. Phasellus faucibus
          justo est, sit amet feugiat ante ullamcorper vel. Phasellus interdum egestas lorem, nec rutrum orci rutrum at.
          Proin viverra sit amet nulla a ultrices. Nulla mollis justo a felis lobortis luctus sed at ante. Nullam
          scelerisque tortor metus, at bibendum quam vestibulum ac. Integer varius interdum nisl nec pharetra. Aenean ut
          nisi suscipit neque luctus viverra et sed nibh. Ut ac ullamcorper nulla. In hac habitasse platea dictumst.
          Pellentesque eget faucibus turpis. Ut varius tempus mi, et tincidunt mi tempor quis. Suspendisse potenti.
          Maecenas blandit fermentum felis eget ultrices. Ut dictum lorem quis viverra iaculis. Suspendisse tempor leo
          vitae sem bibendum ultricies non eu urna. Ut iaculis laoreet ligula, non fringilla felis fermentum et.
          Maecenas id nulla non neque tincidunt consectetur vel id turpis. Duis ut nunc velit. Pellentesque ultrices
          aliquam risus, quis tempus enim semper eu. Duis nunc nunc, rutrum sed nisl molestie, ultrices cursus purus.
          Morbi mattis suscipit porta. Etiam ipsum ante, posuere sit amet nibh eu, dignissim feugiat magna. Nullam orci
          lorem, iaculis ullamcorper elit sed, ornare pretium sem. Sed consectetur enim at ornare tincidunt. Fusce quis
          urna lobortis, varius purus sit amet, elementum tortor. Nulla velit turpis, mattis eget facilisis volutpat,
          dignissim a dolor. Aliquam ut lacus pharetra, viverra mauris rhoncus, vehicula quam. Sed feugiat faucibus
          lacinia. In hac habitasse platea dictumst. Vivamus aliquet mattis arcu, ut posuere mi fringilla non.
          Pellentesque commodo faucibus mauris, id luctus dui mattis vitae. Ut sed dui a ipsum ultricies venenatis. Sed
          nisl sapien, convallis eu suscipit quis, tincidunt sed eros. Donec faucibus suscipit purus ac malesuada. Sed
          pellentesque at magna vitae porta. Nunc ultrices velit rhoncus, finibus lectus rhoncus, mollis nisl. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec nulla augue.
          Phasellus ac ex sed odio laoreet varius. Proin accumsan finibus quam, at lobortis orci mattis in. Sed metus
          sem, consectetur sed quam luctus, viverra consequat mauris. Etiam condimentum nisl at risus interdum egestas.
          Sed pellentesque mauris massa, sit amet dignissim neque semper at. Nam dictum vitae mauris et feugiat.
          Praesent pulvinar quis sem ac aliquam. Proin eget pretium lectus, quis pretium erat. Mauris viverra, mi ut
          elementum ultrices, leo ipsum convallis risus, non pellentesque magna augue eu nunc. Nullam ac augue
          tincidunt, tempor nunc ac, varius lectus. Vestibulum pretium velit sapien, sed iaculis dui tristique eu.
          Mauris faucibus vitae tortor at tincidunt. Sed lectus ligula, ultrices et volutpat non, pulvinar vel elit.
          Cras pulvinar tempus nunc, vitae viverra sapien dignissim non. Duis pulvinar auctor est, ac tempor mauris
          accumsan a. Cras malesuada congue felis nec malesuada. Ut volutpat eget enim eu pulvinar. Sed euismod suscipit
          dui, et lacinia massa cursus non. Nam mollis ex a lorem malesuada, ut semper quam dapibus. Pellentesque tempus
          ornare tristique. Maecenas facilisis pretium ante, eu ornare metus volutpat ac. Aenean sodales orci libero, ut
          pulvinar orci ultricies et. Duis accumsan mauris et pellentesque pulvinar. Mauris faucibus elit libero, ac
          tempor quam condimentum quis. Vestibulum pellentesque iaculis sapien, nec finibus velit efficitur eget. Aenean
          ut pharetra metus. Phasellus auctor elementum fermentum. Etiam elementum arcu eget erat posuere, ut congue leo
          dictum. Morbi lorem justo, lobortis a ex quis, lobortis pellentesque felis. Ut vitae orci sodales,
          sollicitudin nibh ac, vestibulum nunc.
        </div>
      </div>
    );
  }
}
