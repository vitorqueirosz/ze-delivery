import { Document } from 'mongoose';

import { v4 } from 'uuid';

import { IProductRespository } from '../repositories/IProductRepository';

import { Product } from '../interfaces/Product';

import { ICreateProductDTO } from '../dtos/ICreateProductDTO';

export interface ProductModel extends Product, Document {}

class FakeProductRepository implements IProductRespository {
  public products: ProductModel[] = [];

  public async findBrandsByCategory(): Promise<ProductModel[]> {
    const product = this.products.map(c => c);

    return product;
  }

  public async create({
    name,
    image,
    category_id,
    price,
    brand_id,
  }: ICreateProductDTO): Promise<ProductModel> {
    const product = {
      _id: '',
      name: '',
      image: '',
      category_id: '',
      price: 0,
      brand_id: '',
    } as ProductModel;

    Object.assign(product, {
      _id: v4(),
      name,
      image,
      category_id,
      price,
      brand_id,
    });

    this.products.push(product);

    return product;
  }

  public async findByName({
    name,
  }: {
    name: string;
  }): Promise<ProductModel | undefined> {
    const product = this.products.find(p => p.name === name);

    return product;
  }
}

export default FakeProductRepository;
