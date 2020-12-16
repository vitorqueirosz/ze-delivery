import { ProductModel } from '../schemas/Product';
import { UserModel } from '../schemas/User';

export interface Order {
  total_price: string;
  adress: string;
  user: UserModel;
  products?: ProductModel[];
  created_at?: string;
  updated_at?: string;
}
