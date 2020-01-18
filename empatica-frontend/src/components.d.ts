/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Validation,
  ValidationError,
} from './utils/validator';
import {
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface EmpArticleMolecule {
    'productImage': string;
  }
  interface EmpButtonMolecule {
    'center': boolean;
    'disabled': boolean;
    'full': boolean;
    'kind': string & 'primary' | 'gray';
  }
  interface EmpFooterMolecule {}
  interface EmpIMolecule {
    'hover': boolean;
    'icon': string;
    'pointer': boolean;
  }
  interface EmpInputMolecule {
    'errors': Validation[];
    'icon': string;
    'iid': string;
    'label': string;
    'type': string & 'text' | 'password' | 'email';
    'value': string;
  }
  interface EmpListItemMolecule {
    'text': string;
  }
  interface FlApp {}
  interface HomePage {
    'history': RouterHistory;
  }
  interface LoginPage {
    'sectionTitle': string;
  }
  interface ProfilePage {
    'headerTitle': string;
    'sectionTitle': string;
  }
}

declare global {


  interface HTMLEmpArticleMoleculeElement extends Components.EmpArticleMolecule, HTMLStencilElement {}
  var HTMLEmpArticleMoleculeElement: {
    prototype: HTMLEmpArticleMoleculeElement;
    new (): HTMLEmpArticleMoleculeElement;
  };

  interface HTMLEmpButtonMoleculeElement extends Components.EmpButtonMolecule, HTMLStencilElement {}
  var HTMLEmpButtonMoleculeElement: {
    prototype: HTMLEmpButtonMoleculeElement;
    new (): HTMLEmpButtonMoleculeElement;
  };

  interface HTMLEmpFooterMoleculeElement extends Components.EmpFooterMolecule, HTMLStencilElement {}
  var HTMLEmpFooterMoleculeElement: {
    prototype: HTMLEmpFooterMoleculeElement;
    new (): HTMLEmpFooterMoleculeElement;
  };

  interface HTMLEmpIMoleculeElement extends Components.EmpIMolecule, HTMLStencilElement {}
  var HTMLEmpIMoleculeElement: {
    prototype: HTMLEmpIMoleculeElement;
    new (): HTMLEmpIMoleculeElement;
  };

  interface HTMLEmpInputMoleculeElement extends Components.EmpInputMolecule, HTMLStencilElement {}
  var HTMLEmpInputMoleculeElement: {
    prototype: HTMLEmpInputMoleculeElement;
    new (): HTMLEmpInputMoleculeElement;
  };

  interface HTMLEmpListItemMoleculeElement extends Components.EmpListItemMolecule, HTMLStencilElement {}
  var HTMLEmpListItemMoleculeElement: {
    prototype: HTMLEmpListItemMoleculeElement;
    new (): HTMLEmpListItemMoleculeElement;
  };

  interface HTMLFlAppElement extends Components.FlApp, HTMLStencilElement {}
  var HTMLFlAppElement: {
    prototype: HTMLFlAppElement;
    new (): HTMLFlAppElement;
  };

  interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {}
  var HTMLHomePageElement: {
    prototype: HTMLHomePageElement;
    new (): HTMLHomePageElement;
  };

  interface HTMLLoginPageElement extends Components.LoginPage, HTMLStencilElement {}
  var HTMLLoginPageElement: {
    prototype: HTMLLoginPageElement;
    new (): HTMLLoginPageElement;
  };

  interface HTMLProfilePageElement extends Components.ProfilePage, HTMLStencilElement {}
  var HTMLProfilePageElement: {
    prototype: HTMLProfilePageElement;
    new (): HTMLProfilePageElement;
  };
  interface HTMLElementTagNameMap {
    'emp-article-molecule': HTMLEmpArticleMoleculeElement;
    'emp-button-molecule': HTMLEmpButtonMoleculeElement;
    'emp-footer-molecule': HTMLEmpFooterMoleculeElement;
    'emp-i-molecule': HTMLEmpIMoleculeElement;
    'emp-input-molecule': HTMLEmpInputMoleculeElement;
    'emp-list-item-molecule': HTMLEmpListItemMoleculeElement;
    'fl-app': HTMLFlAppElement;
    'home-page': HTMLHomePageElement;
    'login-page': HTMLLoginPageElement;
    'profile-page': HTMLProfilePageElement;
  }
}

declare namespace LocalJSX {
  interface EmpArticleMolecule {
    'onImageClick'?: (event: CustomEvent<void>) => void;
    'productImage'?: string;
  }
  interface EmpButtonMolecule {
    'center'?: boolean;
    'disabled'?: boolean;
    'full'?: boolean;
    'kind'?: string & 'primary' | 'gray';
  }
  interface EmpFooterMolecule {}
  interface EmpIMolecule {
    'hover'?: boolean;
    'icon'?: string;
    'pointer'?: boolean;
  }
  interface EmpInputMolecule {
    'errors'?: Validation[];
    'icon'?: string;
    'iid'?: string;
    'label'?: string;
    'onEmpblur'?: (event: CustomEvent<{ value: string; valid: boolean; errors?: ValidationError }>) => void;
    'onEmpchange'?: (event: CustomEvent<{ value: string; valid: boolean; errors?: ValidationError }>) => void;
    'onEmpfocus'?: (event: CustomEvent<{ value: string; valid: boolean; errors?: ValidationError }>) => void;
    'onEmpicon'?: (event: CustomEvent<{ value: string; valid: boolean; errors?: ValidationError }>) => void;
    'onEmpkeyUp'?: (event: CustomEvent<{ value: string; valid: boolean; errors?: ValidationError }>) => void;
    'type'?: string & 'text' | 'password' | 'email';
    'value'?: string;
  }
  interface EmpListItemMolecule {
    'text'?: string;
  }
  interface FlApp {}
  interface HomePage {
    'history'?: RouterHistory;
  }
  interface LoginPage {
    'sectionTitle'?: string;
  }
  interface ProfilePage {
    'headerTitle'?: string;
    'sectionTitle'?: string;
  }

  interface IntrinsicElements {
    'emp-article-molecule': EmpArticleMolecule;
    'emp-button-molecule': EmpButtonMolecule;
    'emp-footer-molecule': EmpFooterMolecule;
    'emp-i-molecule': EmpIMolecule;
    'emp-input-molecule': EmpInputMolecule;
    'emp-list-item-molecule': EmpListItemMolecule;
    'fl-app': FlApp;
    'home-page': HomePage;
    'login-page': LoginPage;
    'profile-page': ProfilePage;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'emp-article-molecule': LocalJSX.EmpArticleMolecule & JSXBase.HTMLAttributes<HTMLEmpArticleMoleculeElement>;
      'emp-button-molecule': LocalJSX.EmpButtonMolecule & JSXBase.HTMLAttributes<HTMLEmpButtonMoleculeElement>;
      'emp-footer-molecule': LocalJSX.EmpFooterMolecule & JSXBase.HTMLAttributes<HTMLEmpFooterMoleculeElement>;
      'emp-i-molecule': LocalJSX.EmpIMolecule & JSXBase.HTMLAttributes<HTMLEmpIMoleculeElement>;
      'emp-input-molecule': LocalJSX.EmpInputMolecule & JSXBase.HTMLAttributes<HTMLEmpInputMoleculeElement>;
      'emp-list-item-molecule': LocalJSX.EmpListItemMolecule & JSXBase.HTMLAttributes<HTMLEmpListItemMoleculeElement>;
      'fl-app': LocalJSX.FlApp & JSXBase.HTMLAttributes<HTMLFlAppElement>;
      'home-page': LocalJSX.HomePage & JSXBase.HTMLAttributes<HTMLHomePageElement>;
      'login-page': LocalJSX.LoginPage & JSXBase.HTMLAttributes<HTMLLoginPageElement>;
      'profile-page': LocalJSX.ProfilePage & JSXBase.HTMLAttributes<HTMLProfilePageElement>;
    }
  }
}


