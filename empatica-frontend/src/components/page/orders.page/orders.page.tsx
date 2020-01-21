import { Component, Prop, h, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { globalStore } from '../../../utils/store';
import { apis, Order } from '../../../utils/apis';

@Component({
  tag: 'orders-page',
  styleUrl: 'orders.page.scss',
  shadow: false
})
export class OrdersPage {
  @Prop() public history: RouterHistory;

  private userId: number;

  @State() private orders: Order[];

  constructor() {
    this.userId = globalStore.get('user.id');
  }

  public async componentWillLoad() {
    if (this.userId) {
      this.orders = await (await apis.getUserOrders(this.userId)).orders;
    } else {
      this.history.replace('/login');
    }
  }

  public render(): any {
    const headerClass: { [key: string]: boolean } = {
      'default-header': true,
      'default-header--sticky': true
    };
    return [
      <header class={headerClass}>
        <div class="default-header__content container-fluid">
          <img src="../assets/images/embrace_logo_header.svg"></img>
          <emp-i-molecule onClick={() => this.history.push('/profile')} hover={true} icon="user"></emp-i-molecule>
          <emp-i-molecule onClick={() => this.history.push('/homepage')} hover={true} icon="home"></emp-i-molecule>
        </div>
      </header>,
      <main class="main-container">
        <section class="page page--padded container-fluid">
          <emp-order-item-molecule order={this.orders[0]}></emp-order-item-molecule>
        </section>
      </main>
    ];
  }
}
