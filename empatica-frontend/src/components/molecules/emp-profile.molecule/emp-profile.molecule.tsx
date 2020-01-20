import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'emp-profile-molecule',
  styleUrl: 'emp-profile.molecule.scss',
  shadow: true
})
export class EmpProfileMolecule {
  @Prop() public name: string;
  @Prop() public surname: string;
  @Prop() public profileImage: string;
  @Prop() public email: string;

  public render(): any {
    return (
      <div class="emp-profile">
        <img src={this.profileImage}></img>
        <p>{this.name}</p>
        <p>{this.surname}</p>
        <p>{this.email}</p>
      </div>
    );
  }
}
