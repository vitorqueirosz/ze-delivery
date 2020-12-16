import { ICreateCategoriesDTO } from '../dtos/ICreateCategoriesDTO';
import { CategoryModel } from './CategoriesRepository';

export interface CategoriesResponse {
  _id: string;
  name: string;
  image: string;
  products: Array<{
    _id: string;
    name: string;
    price: string;
    image: string;
  }>;
}

export interface ICategoriesRepository {
  create(createCategory: ICreateCategoriesDTO): Promise<CategoryModel>;
  findCategory({ name }: { name: string }): Promise<CategoryModel | undefined>;
  findById({ _id }: { _id: string }): Promise<CategoriesResponse | undefined>;
  findAllCategories({
    name,
  }: {
    name: string;
  }): Promise<CategoriesResponse[] | undefined>;
}
