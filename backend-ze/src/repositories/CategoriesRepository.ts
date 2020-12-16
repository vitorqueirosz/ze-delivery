import { Model, Document, model } from 'mongoose';

import {
  ICategoriesRepository,
  CategoriesResponse,
} from './ICategoriesRepository';

import Categories from '../schemas/Categories';
import { Category } from '../interfaces/Category';
import { ICreateCategoriesDTO } from '../dtos/ICreateCategoriesDTO';

export interface CategoryModel extends Category, Document {}

class CategoriesRepository implements ICategoriesRepository {
  private odmRepository: Model<CategoryModel>;

  constructor() {
    this.odmRepository = model<CategoryModel>('categories', Categories);
  }

  public async findById({
    _id,
  }: {
    _id: string;
  }): Promise<CategoriesResponse | undefined> {
    const category = await this.odmRepository
      .findOne({ _id })
      .populate('products');

    const categoriesResponse = {
      _id: category._id,
      name: category.name,
      image: category.image,
      products: category.products.map(p => ({
        _id: p._id,
        name: p.name,
        price: p.price,
        image: `http://192.168.0.119:3333/uploads/${p.image}`,
      })),
    };

    return categoriesResponse;
  }

  public async findAllCategories(): Promise<CategoriesResponse[]> {
    const findCategory = await this.odmRepository.find().populate('products');

    const categoriesResponse = findCategory.map(category => ({
      _id: category._id,
      name: category.name,
      image: category.image,
      products: category.products.map(p => ({
        _id: p._id,
        name: p.name,
        price: p.price,
        image: `http://192.168.0.119:3333/uploads/${p.image}`,
      })),
    }));

    return categoriesResponse;
  }

  public async findCategory({
    name,
  }: {
    name: string;
  }): Promise<CategoryModel> {
    const category = await this.odmRepository.findOne({ name });

    return category;
  }

  public async create({
    name,
    image,
  }: ICreateCategoriesDTO): Promise<CategoryModel> {
    const category = await this.odmRepository.create({ name, image });

    return category;
  }
}

export default CategoriesRepository;
