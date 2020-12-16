import { Document } from 'mongoose';

import { v4 } from 'uuid';

import { Brand } from '../interfaces/Brand';
import {
  AllBrandsResponse,
  IBrandRepository,
} from '../repositories/IBrandsRepository';

import { ICreateBrandDTO } from '../dtos/ICreateBrandDTO';

export interface BrandModel extends Brand, Document {}

class BrandRepository implements IBrandRepository {
  private brands: BrandModel[] = [];

  public async findAllPrestigious(): Promise<AllBrandsResponse[]> {
    const brands = this.brands.filter(brand => brand.is_prestigious === true);

    return brands;
  }

  public async findAllBrands(): Promise<AllBrandsResponse[]> {
    const brands = this.brands.filter(brand => brand.is_prestigious === false);

    return brands;
  }

  public async findBrand({
    name,
  }: {
    name: string;
  }): Promise<BrandModel | undefined> {
    const findBrand = this.brands.find(brand => brand.name === name);

    return findBrand;
  }

  public async create({
    name,
    image,
    is_prestigious,
  }: ICreateBrandDTO): Promise<BrandModel> {
    const brand = {
      _id: '',
      name: '',
      image: '',
      is_prestigious: is_prestigious || false,
    } as BrandModel;

    Object.assign(brand, { _id: v4(), name, image, is_prestigious });

    this.brands.push(brand);

    return brand;
  }
}

export default BrandRepository;
