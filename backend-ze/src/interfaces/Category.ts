import { ProductModel } from '../schemas/Product';

export interface Category {
  name: string;
  image: string;
  products?: ProductModel[];
  created_at?: string;
  updated_at?: string;
}
