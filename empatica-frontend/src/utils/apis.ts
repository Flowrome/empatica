import wretch from 'wretch';
import { environment } from '@env';
import { spinner } from './spinner';

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export class Apis {
  constructor() { }

  public async getUser(userId: number): Promise<UserData> {
    spinner.on();
    const userData: UserData = await wretch(`${environment.baseUrl}/users/${userId}`)
      .get()
      .json(({ id, firstName, lastName, email }) => ({
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email
      }));
    spinner.off();
    return userData;
  }

  public async login(): Promise<any> {
    spinner.on();
    const id = await wretch(`${environment.baseUrl}/login`)
      .post()
      .json(json => json.id);
    spinner.off();
    return id;
  }
}

export const apis = new Apis();
