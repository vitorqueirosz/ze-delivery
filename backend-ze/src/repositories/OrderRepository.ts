import { Document, model, Model } from 'mongoose';

import { Order } from '../interfaces/Order';
import { IOrderRepository, OrderResponse } from './IOrderRepository';

import Orders from '../schemas/Order';

import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';

export interface OrderModel extends Order, Document {}

class OrderRepository implements IOrderRepository {
  private repository: Model<OrderModel>;

  constructor() {
    this.repository = model<OrderModel>('orders', Orders);
  }

  public async findAll({
    _id,
  }: {
    _id: string;
  }): Promise<OrderModel | undefined> {
    const findBrand = this.repository.findOne(brand => brand.user === _id);

    return findBrand;
  }

  public async findById({
    _id,
  }: {
    _id: string;
  }): Promise<OrderResponse[] | undefined> {
    const findBrand = await this.repository
      .find({ user: _id })
      .populate('products')
      .populate('users');

    const orderResponse = findBrand.map(order => ({
      _id: order._id,
      adress: order.adress,
      total_price: order.total_price,
      time: order.created_at,
      user: {
        _id: order.user._id,
        name: order.user.name,
        age: order.user.age,
      },
      products: order.products.map(product => ({
        _id: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
      })),
    }));

    return orderResponse;
  }

  public async create({
    adress,
    products,
    total_price,
    user,
  }: ICreateOrderDTO): Promise<OrderModel> {
    const order = await this.repository.create({
      adress,
      products,
      total_price,
      user,
    });

    return order;
  }
}

export default OrderRepository;
