import { Component, Prop, h, State } from '@stencil/core';
import { int } from '../../../utils/translation';
import { globalStore } from '../../../utils/store';
import { apis } from '../../../utils/apis';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'profile-page',
  styleUrl: 'profile.page.scss',
  shadow: false
})
export class ProfilePage {
  @Prop() public history: RouterHistory;
  private userId: number;
  private languageMap: { lang: string; label: string; selected?: boolean }[] = [
    { lang: 'it', label: 'PROFILE.LANGUAGES.ITALIAN', selected: true },
    { lang: 'en', label: 'PROFILE.LANGUAGES.ENGLISH' }
  ].map(
    lang =>
      (lang = {
        ...lang,
        selected: globalStore.get('lang') === lang.lang
      })
  );

  @State() private showLanguages: boolean = false;

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
    } else {
      this.history.replace('/login');
    }
  }

  public componentDidLoad() {
    int.init();
  }

  private logout() {
    globalStore.set('user', null);
    this.history.replace('/homepage');
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
          <emp-i-molecule onClick={() => this.history.push('/homepage')} hover={true} icon="home"></emp-i-molecule>
        </div>
      </header>,
      <main class="main-container">
        <section class="page page--padded container-fluid">
          <emp-profile-molecule
            class="block mt-30"
            profileImage="https://fakeimg.pl/64x64/"
            name={globalStore.get('user.data').firstName}
            surname={globalStore.get('user.data').lastName}
            email={globalStore.get('user.data').email}
          ></emp-profile-molecule>
          <ul class="mt-30">
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_ORDERS" iconRight="shopping-cart"></emp-list-item-molecule>
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_ADDRESS" iconRight="home"></emp-list-item-molecule>
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_PAYMENT" iconRight="credit-card"></emp-list-item-molecule>
          </ul>
          <ul class="mt-30">
            <emp-list-item-molecule
              text="PROFILE.LIST_ITEM_MY_MONITORING"
              iconRight="trending-up"
            ></emp-list-item-molecule>
          </ul>
          <ul class="mt-30">
            <emp-list-item-molecule
              onClick={() => (this.showLanguages = !this.showLanguages)}
              text="PROFILE.LIST_ITEM_LANGUAGE"
              iconRight="globe"
            ></emp-list-item-molecule>
            {this.languageMap &&
              this.showLanguages &&
              this.languageMap.map((lang, i) => (
                <emp-list-item-molecule
                  key={this.showLanguages.toString()}
                  class={{ 'lang-list': true, 'lang-list--selected': lang.selected }}
                  text={lang.label}
                  onClick={() => {
                    globalStore.set('lang', lang.lang);
                    this.languageMap = this.languageMap.map(langu => {
                      langu.selected = false;
                      return langu;
                    });
                    this.languageMap[i].selected = true;
                    this.showLanguages = false;
                    location.reload();
                  }}
                ></emp-list-item-molecule>
              ))}
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_SETTINGS" iconRight="settings"></emp-list-item-molecule>
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_TC" iconRight="book"></emp-list-item-molecule>
            <emp-list-item-molecule text="PROFILE.LIST_ITEM_INFO" iconRight="info"></emp-list-item-molecule>
          </ul>
          <ul class="mt-30">
            <emp-list-item-molecule
              onClick={() => this.logout()}
              text="PROFILE.LIST_ITEM_LOGOUT"
              iconRight="log-out"
            ></emp-list-item-molecule>
          </ul>
        </section>
        <footer class="default-footer mt-50">
          <emp-footer-molecule></emp-footer-molecule>
        </footer>
      </main>
    ];
  }
}
