import { Component, h, Listen, State, Prop } from '@stencil/core';
import { int } from '../../../utils/translation';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'home-page',
  styleUrl: 'home.page.scss',
  shadow: false
})
export class HomePage {
  @Prop() public history: RouterHistory;
  @State() private scrollTop: boolean;

  constructor() {
    this.scrollTop = !document.querySelector('html').scrollTop;
  }

  public componentDidLoad(): void {
    int.init();
  }

  private goToLogin(): void {
    this.history.push('/login');
  }

  @Listen('scroll', { target: 'window' })
  public handleScroll(): void {
    this.scrollTop = !document.querySelector('html').scrollTop;
  }

  public render(): any {
    const headerClass: { [key: string]: boolean } = {
      'default-header': true,
      'default-header--transparent': this.scrollTop,
      'default-header--sticky': true
    };
    return [
      <header class={headerClass}>
        <div class="default-header__content container-fluid">
          <img src="../assets/images/embrace_logo_header.svg"></img>
          <emp-i-molecule onClick={() => this.goToLogin()} hover={true} icon="user"></emp-i-molecule>
          <emp-i-molecule hover={true} icon="help-circle"></emp-i-molecule>
        </div>
      </header>,
      <main class="main-container main-container--no-header">
        <div class="hero-header mb-60">
          <div class="container-fluid">
            <h1 class="title mb-40" data-translate>
              HOMEPAGE.HERO.TITLE
            </h1>
            <emp-button-molecule class="mb-30" kind="gray" data-translate>
              HOMEPAGE.HERO.BUTTON_TEXT
            </emp-button-molecule>
            <p class="paragraph mb-90" data-translate>
              HOMEPAGE.HERO.PARAGRAPH
            </p>
          </div>
        </div>
        <section class="page container-fluid">
          <emp-article-molecule productImage="../assets/images/embrace_front-xhdpi.jpg">
            <div slot="left">
              <picture>
                <source srcSet="../assets/images/embrace_logo-sm.svg" media="(max-width: 991px)"></source>
                <img class="emp-logo" src="../assets/images/embrace_logo.svg"></img>
              </picture>
              <p class="subtitle mb-50" data-translate>
                HOMEPAGE.PRODUCT_SUBTITLE
              </p>
              <p class="paragraph mb-50" data-translate>
                HOMEPAGE.PRODUCT_DESCRIPTION
              </p>
            </div>
            <emp-button-molecule slot="footer" data-desktop data-translate>
              HOMEPAGE.PRODUCT_BUTTON_TEXT
            </emp-button-molecule>
            <emp-button-molecule slot="footer" data-mobile class="mt-50" full={true} data-translate>
              HOMEPAGE.PRODUCT_BUTTON_TEXT
            </emp-button-molecule>
          </emp-article-molecule>
        </section>
        <footer class="default-footer mt-50">
          <emp-footer-molecule></emp-footer-molecule>
        </footer>
      </main>
    ];
  }
}
