import { ICreateBrandDTO } from '../dtos/ICreateBrandDTO';
import { BrandModel } from './BrandsRepository';

export interface AllBrandsResponse {
  _id: string;
  name: string;
  image: string;
  is_prestigious: boolean;
  products?: Array<{
    _id: string;
    name: string;
    price: string;
    image: string;
  }>;
}

export interface IBrandRepository {
  create(createBrand: ICreateBrandDTO): Promise<BrandModel>;
  findBrand({ name }: { name: string }): Promise<BrandModel | undefined>;
  findAllNoPrestigious(): Promise<AllBrandsResponse[] | undefined>;
  findAllPrestigious(): Promise<AllBrandsResponse[] | undefined>;
  findAllBrands(): Promise<AllBrandsResponse[] | undefined>;
}
