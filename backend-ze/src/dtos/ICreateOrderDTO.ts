import { ProductModel } from '../schemas/Product';
import { UserModel } from '../schemas/User';

export interface ICreateOrderDTO {
  total_price: string;
  adress: string;
  user: UserModel;
  products: ProductModel[];
}
