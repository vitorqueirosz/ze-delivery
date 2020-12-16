import { ProductModel } from '../repositories/ProductRepository';

export interface Brand {
  name: string;
  image: string;
  is_prestigious: boolean;
  products?: ProductModel[];
  created_at?: string;
  updated_at?: string;
}
