import { Component, Prop, h, Element } from '@stencil/core';
import { int } from '../../../utils/translation';

@Component({
  tag: 'emp-footer-molecule',
  styleUrl: 'emp-footer.molecule.scss',
  shadow: true
})
export class EmpFooterMolecule {
  @Element() private element: HTMLElement;
  private links: { link: string; label: string }[] = [
    { link: 'www.google.com', label: 'FOOTER.COMPANY' },
    { link: 'www.google.com', label: 'FOOTER.CAREERS' }
  ];

  public componentDidLoad() {
    int.init(this.element.shadowRoot);
  }

  public render(): any {
    return [
      <div class="first-line">
        {this.links.map(link => (
          <a href={link.link} data-translate>
            {link.label}
          </a>
        ))}
      </div>,
      <div class="second-line">
        <p data-translate>FOOTER.COMPANY_ADDRESS</p>
      </div>
    ];
  }
}
