import { Component, Prop, h, State } from '@stencil/core';
import { apis } from '../../../utils/apis';
import { int } from '../../../utils/translation';
import { RouterHistory } from '@stencil/router';
import { globalStore } from '../../../utils/store';

@Component({
  tag: 'login-page',
  styleUrl: 'login.page.scss',
  shadow: false
})
export class LoginPage {
  @Prop() public history: RouterHistory;
  @Prop() public sectionTitle: string = <h2>login.page SECTION</h2>;

  @State() private username: boolean;
  @State() private password: boolean;

  constructor() {
    if (globalStore.get('user.id')) {
      this.history.push('profile');
    }
  }

  public componentDidLoad(): void {
    int.init();
  }

  private async login(): Promise<void> {
    if (!!this.username && !!this.password) {
      const id = await apis.login();
      if (id) {
        globalStore.set('user.id', id);
        this.history.push('profile');
      }
    }
  }

  public render(): any {
    return (
      <main class="main-container main-container--no-header">
        <section class="page container-fluid">
          <form>
            <emp-input-molecule
              label="LOGIN.USERNAME"
              class="mb-50 block"
              errors={[
                { check: 'required', errorMessage: 'Username is required' },
                { check: 'minlength', errorMessage: 'Username is too short', extra: { minlength: 4 } }
              ]}
              onEmpkeyUp={({ detail }) => (this.username = detail.valid)}
            ></emp-input-molecule>
            <emp-input-molecule
              label="LOGIN.PASSWORD"
              icon="eye-off"
              type="password"
              class="mb-50 block"
              errors={[
                { check: 'required', errorMessage: 'Password is required' },
                { check: 'minlength', errorMessage: 'Password is too short', extra: { minlength: 4 } }
              ]}
              onEmpkeyUp={({ detail }) => (this.password = detail.valid)}
              onEmpicon={({ target }) => {
                (target as any).icon = (target as any).icon === 'eye-off' ? 'eye' : 'eye-off';
                (target as any).type = (target as any).icon === 'eye' ? 'text' : 'password';
              }}
            ></emp-input-molecule>
            <emp-button-molecule
              disabled={!this.username || !this.password}
              data-translate
              onClick={() => this.login()}
              full={true}
            >
              LOGIN.SUBMIT
            </emp-button-molecule>
          </form>
        </section>
      </main>
    );
  }
}
