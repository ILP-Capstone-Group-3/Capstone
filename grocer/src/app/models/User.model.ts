import { Address } from "./address.model";

export interface User{
  _id : string,
  userName: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  paymentMethods: number;
  numAttempts: number,
  date: Date,
  phoneNumber: number,
  addresses: Array<Address>
}
