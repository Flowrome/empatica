import { Component, Prop, h } from '@stencil/core';
import { int } from '../../../utils/translation';
import { globalStore } from '../../../utils/store';
import { apis } from '../../../utils/apis';

@Component({
  tag: 'profile-page',
  styleUrl: 'profile.page.scss',
  shadow: false
})
export class ProfilePage {
  private userId: number;

  constructor() {
    this.userId = globalStore.get('user.id');
  }

  public async componentWillLoad() {
    if (this.userId) {
      const userData = await apis.getUser(this.userId);
      if (userData) {
        console.log(userData);
        globalStore.set('user.data', userData);
      }
    }
  }

  public componentDidLoad() {
    int.init();
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
        </div>
      </header>,
      <main class="main-container">
        <section class="page page--padded container-fluid">
          <ul>
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_ORDERS" iconRight="shopping-cart"></emp-list-item-molecule>
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_ADDRESS" iconRight="home"></emp-list-item-molecule>
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_PAYMENT" iconRight="credit-card"></emp-list-item-molecule>
          </ul>
          <ul class="mt-30">
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_LANGUAGE" iconRight="globe"></emp-list-item-molecule>
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_SETTINGS" iconRight="settings"></emp-list-item-molecule>
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_TC" iconRight="book"></emp-list-item-molecule>
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_INFO" iconRight="info"></emp-list-item-molecule>
          </ul>
        </section>
      </main>
    ];
  }
}
