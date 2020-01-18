import wretch from 'wretch';
import { environment } from '@env';

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export class Apis {
  constructor() {}

  public async getUser(userId: string): Promise<UserData> {
    const userData: UserData = await wretch(`${environment.baseUrl}/users/${userId}`)
      .get()
      .json(({ id, firstName, lastName, email }) => ({
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email
      }));
    return userData;
  }

  public async login(): Promise<any> {
    const id = await wretch(`${environment.baseUrl}/login`)
      .post()
      .json(json => json.id);
    return id;
  }
}

export const apis = new Apis();
