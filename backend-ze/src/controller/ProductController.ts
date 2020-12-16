import { Request, Response } from 'express';

import ProductsRepository from '../repositories/ProductRepository';

import CreateProductService from '../services/CreateProductService';

class ProductController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, brand_id, category_id } = request.body;

    const image = request.file.filename;

    const productsRepository = new ProductsRepository();
    const productsService = new CreateProductService(productsRepository);

    const product = await productsService.execute({
      name,
      image,
      price,
      brand_id,
      category_id,
    });

    return response.status(201).json(product);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const productsRepository = new ProductsRepository();

    const product = await productsRepository.findById(id);

    return response.json(product);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const id = request.query._id;

    const productsRepository = new ProductsRepository();

    const product = await productsRepository.findByCategory(String(id));

    return response.json(product);
  }
}

export default ProductController;
