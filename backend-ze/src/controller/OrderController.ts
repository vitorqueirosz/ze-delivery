import { Request, Response } from 'express';
import OrderRepository from '../repositories/OrderRepository';

import ProductsRepository from '../repositories/ProductRepository';

import CreateOrderService from '../services/CreateOrderService';

class OrderController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { total_price, adress, products } = request.body;

    const user = request.user.id;

    const orderRepository = new OrderRepository();
    const productsService = new CreateOrderService(orderRepository);

    const product = await productsService.execute({
      total_price,
      adress,
      user,
      products,
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
    const _id = request.user.id;

    const ordersRepository = new OrderRepository();

    const product = await ordersRepository.findById({ _id });

    return response.json(product);
  }
}

export default OrderController;
