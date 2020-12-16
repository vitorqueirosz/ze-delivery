import { ICreateProductDTO } from '../dtos/ICreateProductDTO';
import { ProductModel } from './ProductRepository';

export interface AllBrandsResponse {
  _id: string;
  name: string;
  image: string;
  is_prestigious: boolean;
}

export interface IProductRepository {
  create(createProduct: ICreateProductDTO): Promise<ProductModel>;
  findByName({ name }: { name: string }): Promise<ProductModel | undefined>;
  findByCategory(id: string): Promise<ProductModel[] | undefined>;
  findByBrand(): Promise<ProductModel[] | undefined>;
  findById(id: string): Promise<ProductModel | undefined>;
}
