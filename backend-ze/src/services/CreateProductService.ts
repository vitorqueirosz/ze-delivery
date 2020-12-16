import { IProductRepository } from '../repositories/IProductRepository';

import AppError from '../errors/AppError';
import { ProductModel } from '../repositories/ProductRepository';

interface IRequest {
  name: string;
  image: string;
  price: string;
  category_id?: string;
  brand_id?: string;
}

class CreateProductService {
  private odmRepository: IProductRepository;

  constructor(odmRepository: IProductRepository) {
    this.odmRepository = odmRepository;
  }

  public async execute({
    name,
    image,
    price,
    brand_id,
    category_id,
  }: IRequest): Promise<ProductModel> {
    const productExists = await this.odmRepository.findByName({ name });

    if (productExists) {
      throw new AppError('Category already exists', 400);
    }

    const product = await this.odmRepository.create({
      name,
      image,
      price,
      brand_id,
      category_id,
    });

    return product;
  }
}

export default CreateProductService;
