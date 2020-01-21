import { Component, h, Host, State } from '@stencil/core';
import '@stencil/router';
import { globalStore } from '../../utils/store';
import { spinner } from '../../utils/spinner';

@Component({
  tag: 'emp-app',
  styleUrl: 'app.scss',
  shadow: false
})
export class AppPage {
  @State() private spinner: boolean;

  constructor() {
    spinner.$state.subscribe(state => {
      this.spinner = state;
    });
  }

  public componentWillLoad() {
    globalStore.init();
    if (!globalStore.get('lang')) {
      globalStore.set('lang', 'en');
    }
  }

  public render(): any {
    return (
      <Host>
        {this.spinner && (
          <div class="spinner-container">
            <emp-spinner-molecule></emp-spinner-molecule>
          </div>
        )}
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route
              url="/"
              routeRender={() => <stencil-router-redirect url="/homepage" />}
              exact={true}
            ></stencil-route>
            <stencil-route url="/homepage" component="home-page" exact={true}></stencil-route>
            <stencil-route url="/login" component="login-page" exact={true}></stencil-route>
            <stencil-route url="/profile" component="profile-page" exact={true}></stencil-route>
            <stencil-route url="/orders" component="orders-page" exact={true}></stencil-route>
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }
}
