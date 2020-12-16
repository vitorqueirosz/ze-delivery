import { Model, Document } from 'mongoose';

import { IProductRepository } from './IProductRepository';

import Products from '../schemas/Product';
import { Product } from '../interfaces/Product';

import Brands from '../schemas/Brands';

import { ICreateProductDTO } from '../dtos/ICreateProductDTO';

export interface ProductModel extends Product, Document {}

class ProductsRepository implements IProductRepository {
  private odmRepository: Model<ProductModel>;

  // constructor() {
  //   this.odmRepository = model<ProductModel>('products', Products);
  // }

  public async findByBrand(): Promise<ProductModel[]> {
    const category = await Products.find().populate('brand_id');

    return category;
  }

  public async findById(id: string): Promise<ProductModel> {
    const category = await Products.findOne({ _id: id });

    return category;
  }

  public async findByCategory(
    _id: string,
  ): Promise<ProductModel[] | undefined> {
    const category = await Products.find({ category_id: _id }).populate(
      'category_id',
    );

    return category;
  }

  public async findByName({ name }: { name: string }): Promise<ProductModel> {
    const category = await Products.findOne({ name });

    return category;
  }

  public async create({
    name,
    image,
    category_id,
    price,
    brand_id,
  }: ICreateProductDTO): Promise<ProductModel> {
    const product = await Products.create({
      name,
      image,
      category_id,
      price,
      brand_id,
    });

    // await Brands.findOneAndUpdate(
    //   { _id: brand_id },
    //   { $push: { products: product._id } },
    //   { new: true },
    // );

    return product;
  }
}

export default ProductsRepository;
