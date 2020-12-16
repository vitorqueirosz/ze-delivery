import { Request, Response } from 'express';

import CreateCategoriesService from '../services/CreateCategoriesService';

import CategoriesRepository from '../repositories/CategoriesRepository';

class CategoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, image } = request.body;

    const categoriesRepository = new CategoriesRepository();
    const categoriesService = new CreateCategoriesService(categoriesRepository);

    const category = await categoriesService.execute({ name, image });

    return response.status(201).json(category);
  }

  public async search(request: Request, response: Response): Promise<Response> {
    const categoriesRepository = new CategoriesRepository();

    const category = await categoriesRepository.findAllCategories();

    return response.json(category);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { _id } = request.query;

    const categoriesRepository = new CategoriesRepository();

    const category = await categoriesRepository.findById({ _id: String(_id) });

    return response.json(category);
  }
}

export default CategoriesController;
