import wretch from 'wretch';
import { environment } from '@env';
import { spinner } from './spinner';

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
} export interface Tracking {
  carrier: string;
  trackingCode: string;
  status: string;
}

export interface Item {
  sku: string;
  name: string;
  amount: number;
}

export interface Discount {
  name: string;
  type: string;
  value: number;
}

export interface Order {
  id: number;
  ref: string;
  status: string;
  tracking?: Tracking;
  items?: Item[];
  discounts?: Discount[];
}

export interface UserOrders {
  orders: Order[];
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

  public async getUserOrders(userId: number): Promise<UserOrders> {
    spinner.on();
    const userData: UserOrders = await wretch(`${environment.baseUrl}/users/${userId}/orders`)
      .get()
      .json();
    spinner.off();
    return userData;
  }

  public async deleteUserOrder(orderId: number): Promise<void> {
    spinner.on();
    await wretch(`${environment.baseUrl}/orders/${orderId}/`)
      .delete();
    spinner.off();
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
