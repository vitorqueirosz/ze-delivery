import { AdressModel } from '../schemas/Adress';

export interface User {
  name: string;
  password: string;
  email: string;
  adress: AdressModel;
  avatar?: string;
  cpf: number;
  phone: number;
  age: string;
}
