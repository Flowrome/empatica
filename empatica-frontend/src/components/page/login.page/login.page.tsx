import { Component, Prop, h, State } from '@stencil/core';
import { apis } from '../../../utils/apis';
import { int } from '../../../utils/translation';

@Component({
  tag: 'login-page',
  styleUrl: 'login.page.scss',
  shadow: false
})
export class LoginPage {
  @Prop() public sectionTitle: string = <h2>login.page SECTION</h2>;

  @State() private errorsUsername: string[] = [];
  @State() private errorsPassword: string[] = [];
  @State() private username: string;
  @State() private password: string;

  public componentDidLoad(): void {
    int.init();
  }

  private async login(): Promise<void> {
    if (!!this.username && !!this.password) {
      const id = await apis.login();
      console.log(id);
    }
    if (!this.username) {
      this.errorsUsername = [...this.errorsUsername, 'Username is required'];
    }
    if (!this.password) {
      this.errorsPassword = [...this.errorsPassword, 'Password is required'];
    }
  }

  public render(): any {
    return (
      <main class='main-container main-container--no-header'>
        <section class='page container-fluid'>
          <form>
            <emp-input-molecule
              label='LOGIN.USERNAME'
              class='mb-50 block'
              error={this.errorsUsername}
              onEmpkeyUp={({ detail }) => (this.username = detail)}
            ></emp-input-molecule>
            <emp-input-molecule
              label='LOGIN.PASSWORD'
              icon='eye-off'
              type='password'
              class='mb-50 block'
              error={this.errorsPassword}
              onEmpkeyUp={({ detail }) => (this.password = detail)}
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
