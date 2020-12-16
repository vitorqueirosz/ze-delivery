import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { OrderModel } from '../fakes/FakeOrderRepository';

export interface OrderResponse {
  _id: string;
  adress: string;
  total_price: string;
  time: string;
  user: {
    _id: string;
    name: string;
    age: string;
  };
  products: Array<{
    _id: string;
    name: string;
    image: string;
    price: string;
  }>;
}

export interface IOrderRepository {
  create(createProduct: ICreateOrderDTO): Promise<OrderModel>;
  findAll({ _id }: { _id: string }): Promise<OrderModel | undefined>;
  findById({ _id }: { _id: string }): Promise<OrderResponse[] | undefined>;
}
