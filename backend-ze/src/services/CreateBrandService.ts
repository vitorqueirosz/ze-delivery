import { IBrandRepository } from '../repositories/IBrandsRepository';

import { BrandModel } from '../repositories/BrandsRepository';

import AppError from '../errors/AppError';

export interface IRequest {
  name: string;
  image: string;
  is_prestigious?: boolean;
}

class CreateBrandService {
  private odmRepository: IBrandRepository;

  constructor(odmRepository: IBrandRepository) {
    this.odmRepository = odmRepository;
  }

  public async execute({
    name,
    image,
    is_prestigious,
  }: IRequest): Promise<BrandModel> {
    const brandExists = await this.odmRepository.findBrand({ name });

    if (brandExists) {
      throw new AppError('Category already exists', 400);
    }

    const brand = await this.odmRepository.create({
      name,
      image,
      is_prestigious,
    });

    return brand;
  }
}

export default CreateBrandService;
