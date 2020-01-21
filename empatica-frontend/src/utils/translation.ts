import { globalStore } from './store';
import { spinner } from './spinner';
export class Translation {
  private currentLanguage: string = '';
  private currentJSONTranslation: { [key: string]: any } = {};

  constructor(lang: string) {
    this.language = globalStore.get('lang') || lang;
  }

  public async init(element?: HTMLElement | Document | ShadowRoot): Promise<void> {
    await this.insertTranslation(element);
  }

  private async translate(placeholder: string, values?: { [key: string]: any }): Promise<string> {
    await this.reachLanguage();
    return this.instant(placeholder, values);
  }

  public instant(placeholder: string, values?: { [key: string]: any }): string {
    let toReturn = placeholder;
    if (placeholder.indexOf('.')) {
      const objectPath: string[] = placeholder.split('.');
      let currentTranslation: any = this.currentJSONTranslation[this.currentLanguage];
      objectPath.map((path: string) => {
        currentTranslation = currentTranslation && currentTranslation[path] ? currentTranslation[path] : placeholder;
      });
      toReturn = currentTranslation;
    } else {
      toReturn = this.currentJSONTranslation[this.currentLanguage][placeholder]
        ? this.currentJSONTranslation[this.currentLanguage][placeholder]
        : placeholder;
    }
    if (values) {
      Object.keys(values).map(key => {
        const value = values[key];
        const reg = new RegExp(`{{( )?${key}( )?}}`, 'gm');
        if (reg.test(toReturn)) {
          toReturn.match(reg).map(match => {
            toReturn = toReturn.replace(new RegExp(`${match}`, 'g'), value);
          });
        }
      });
    }
    return toReturn;
  }

  private reachLanguage(): Promise<any> {
    if (!this.currentJSONTranslation[this.currentLanguage]) {
      spinner.on();
      return fetch(`../assets/i18n/${this.currentLanguage}.json`)
        .then(data => data.json())
        .then((json: { [key: string]: any }) => {
          spinner.off();
          this.currentJSONTranslation[this.currentLanguage] = json;
        });
    }
    return Promise.resolve();
  }

  private async insertTranslation(elem: any = document): Promise<void> {
    await elem.querySelectorAll('[data-translate]').forEach(async element => {
      const toReplace = element['data-translate-value'];
      const { innerHTML } = element;
      element.innerHTML = await this.translate(innerHTML, toReplace);
    });
  }

  public set language(lang: string) {
    this.currentLanguage = lang;
    this.insertTranslation();
  }

  public get language(): string {
    return this.currentLanguage;
  }
}

export const int = new Translation('en');
