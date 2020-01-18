import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'profile-page',
  styleUrl: 'profile.page.scss',
  shadow: false
})
export class ProfilePage {
  @Prop() public headerTitle: string = <h1>profile.page HEADER</h1>;
  @Prop() public sectionTitle: string = <h2>profile.page SECTION</h2>;
  public render(): any {
    return [
      <header class="default-header">
        <div class="default-header__content container-fluid">{this.headerTitle}</div>
      </header>,
      <main class="main-container">
        <section class="page container-fluid">{this.sectionTitle}</section>
      </main>
    ];
  }
}
