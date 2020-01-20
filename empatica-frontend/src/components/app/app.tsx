import { Component, h } from '@stencil/core';
import '@stencil/router';
import { globalStore } from '../../utils/store';

@Component({
  tag: 'fl-app',
  styleUrl: 'app.scss',
  shadow: false
})
export class AppPage {
  public componentWillLoad() {
    globalStore.init();
  }

  public render(): any {
    return (
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
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
