import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

import AppError from '../errors/AppError';
import { CategoryModel } from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  image: string;
}

class CreateCategoriesService {
  private odmRepository: ICategoriesRepository;

  constructor(odmRepository: ICategoriesRepository) {
    this.odmRepository = odmRepository;
  }

  public async execute({ name, image }: IRequest): Promise<CategoryModel> {
    const categoryExists = await this.odmRepository.findCategory({ name });

    if (categoryExists) {
      throw new AppError('Category already exists', 400);
    }

    const category = await this.odmRepository.create({ name, image });

    return category;
  }
}

export default CreateCategoriesService;
