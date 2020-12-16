import { Model, Document } from 'mongoose';

import Brands from '../schemas/Brands';
import { Brand } from '../interfaces/Brand';
import { AllBrandsResponse, IBrandRepository } from './IBrandsRepository';
import { ICreateBrandDTO } from '../dtos/ICreateBrandDTO';

export interface BrandModel extends Brand, Document {}

class BrandRepository implements IBrandRepository {
  private odmRepository: Model<BrandModel>;

  // constructor() {
  //   this.odmRepository = model<BrandModel>('brands', Brands);
  // }

  public async findAllBrands(): Promise<AllBrandsResponse[]> {
    const brand = await Brands.find().populate('products');

    const brandResponse = brand.map(b => ({
      _id: b._id,
      name: b.name,
      image: `http://192.168.0.119:3333/uploads/${b.image}`,
      is_prestigious: b.is_prestigious,
      products: b.products.map(p => ({
        _id: p._id,
        name: p.name,
        price: p.price,
        image: `http://192.168.0.119:3333/uploads/${p.image}`,
      })),
    }));

    return brandResponse;
  }

  public async findAllPrestigious(): Promise<AllBrandsResponse[]> {
    const brand = await Brands.find({ is_prestigious: true }).populate(
      'products',
    );

    const brandResponse = brand.map(b => ({
      _id: b._id,
      name: b.name,
      image: `http://192.168.0.119:3333/uploads/${b.image}`,
      is_prestigious: b.is_prestigious,
      products: b.products.map(p => ({
        _id: p._id,
        name: p.name,
        price: p.price,
        image: `http://192.168.0.119:3333/uploads/${p.image}`,
      })),
    }));

    return brandResponse;
  }

  public async findAllNoPrestigious(): Promise<AllBrandsResponse[]> {
    const brand = await Brands.find({ is_prestigious: false });

    const brandResponse = brand.map(b => ({
      _id: b._id,
      name: b.name,
      image: `http://192.168.0.119:3333/uploads/${b.image}`,
      is_prestigious: b.is_prestigious,
      products: b.products.map(p => ({
        _id: p._id,
        name: p.name,
        price: p.price,
        image: `http://192.168.0.119:3333/uploads/${p.image}`,
      })),
    }));
    return brandResponse;
  }

  public async findBrand({ name }: { name: string }): Promise<BrandModel> {
    const brand = await Brands.findOne({ name });

    return brand;
  }

  public async create({
    name,
    image,
    is_prestigious,
  }: ICreateBrandDTO): Promise<BrandModel> {
    const brand = await Brands.create({
      name,
      image,
      is_prestigious,
    });

    return brand;
  }
}

export default BrandRepository;
