export class Translation {
  private currentLanguage: string = '';
  private currentJSONTranslation: { [key: string]: any } = {};

  constructor(lang: string) {
    this.language = lang;
  }

  public init(element?: HTMLElement | Document | ShadowRoot) {
    this.insertTranslation(element);
  }

  private async translate(placeholder: string): Promise<string> {
    await this.reachLanguage();
    let toReturn = placeholder;
    if (placeholder.indexOf('.')) {
      const objectPath: string[] = placeholder.split('.');
      let currentTranslation: any = this.currentJSONTranslation[this.currentLanguage];
      objectPath.map((path: string) => {
        currentTranslation = currentTranslation[path] ? currentTranslation[path] : placeholder;
      });
      toReturn = currentTranslation;
    } else {
      toReturn = this.currentJSONTranslation[this.currentLanguage][placeholder]
        ? this.currentJSONTranslation[this.currentLanguage][placeholder]
        : placeholder;
    }
    return toReturn;
  }

  private reachLanguage(): Promise<any> {
    if (!this.currentJSONTranslation[this.currentLanguage]) {
      return fetch(`../assets/i18n/${this.currentLanguage}.json`)
        .then(data => data.json())
        .then((json: { [key: string]: any }) => {
          this.currentJSONTranslation[this.currentLanguage] = json;
        });
    }
    return Promise.resolve();
  }

  private insertTranslation(elem: any = document) {
    elem.querySelectorAll('[data-translate]').forEach(elem => {
      const { innerHTML } = elem;
      this.translate(innerHTML).then(trad => {
        elem.innerHTML = trad;
      });
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
