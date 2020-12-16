import { Request, Response } from 'express';

import CreateBrandsService from '../services/CreateBrandService';

import BrandsRepository from '../repositories/BrandsRepository';

class BrandsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, is_prestigious } = request.body;

    const image = request.file.filename;

    const brandsRepository = new BrandsRepository();
    const createBrandService = new CreateBrandsService(brandsRepository);

    const brand = await createBrandService.execute({
      name,
      image,
      is_prestigious,
    });

    return response.status(201).json(brand);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const brandsRepository = new BrandsRepository();

    const brand = await brandsRepository.findAllBrands();

    return response.json(brand);
  }

  public async search(request: Request, response: Response): Promise<Response> {
    const brandsRepository = new BrandsRepository();

    const brand = await brandsRepository.findAllPrestigious();

    return response.json(brand);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const brandsRepository = new BrandsRepository();

    const brands = await brandsRepository.findAllBrands();

    return response.json(brands);
  }
}

export default BrandsController;
