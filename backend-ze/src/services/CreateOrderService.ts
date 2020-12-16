import { OrderModel } from '../repositories/OrderRepository';
import { IOrderRepository } from '../repositories/IOrderRepository';

interface IRequest {
  total_price: string;
  adress: string;
  user: string;
  products: string[];
}

class CreateOrderService {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  public async execute({
    total_price,
    adress,
    user,
    products,
  }: IRequest): Promise<OrderModel> {
    const product = await this.orderRepository.create({
      total_price,
      adress,
      user,
      products,
    });

    return product;
  }
}

export default CreateOrderService;
