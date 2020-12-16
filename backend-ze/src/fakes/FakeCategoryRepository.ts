import { Document } from 'mongoose';

import { v4 } from 'uuid';

import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

import { Category } from '../interfaces/Category';
import { ICreateCategoriesDTO } from '../dtos/ICreateCategoriesDTO';

export interface CategoryModel extends Category, Document {}

class FakeCategoryRepository implements ICategoriesRepository {
  public category: CategoryModel[] = [];

  public async findAllCategories(): Promise<CategoryModel[]> {
    const category = this.category.map(c => c);

    return category;
  }

  public async create({
    name,
    image,
  }: ICreateCategoriesDTO): Promise<CategoryModel> {
    const category = {
      _id: '',
      name: '',
      image: '',
    } as CategoryModel;

    Object.assign(category, { _id: v4(), name, image });

    this.category.push(category);

    return category;
  }

  public async findCategory({
    name,
  }: {
    name: string;
  }): Promise<CategoryModel | undefined> {
    const category = this.category.find(c => c.name === name);

    return category;
  }
}

export default FakeCategoryRepository;
