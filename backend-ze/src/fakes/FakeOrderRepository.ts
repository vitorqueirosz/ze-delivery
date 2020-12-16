import { Document } from 'mongoose';

import { v4 } from 'uuid';

import { Order } from '../interfaces/Order';
import { IOrderRepository } from '../repositories/IOrderRepository';

import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { ProductModel } from '../schemas/Product';

export interface OrderModel extends Order, Document {}

class FakeOrderRepository implements IOrderRepository {
  private orders: OrderModel[] = [];

  public async findAll({
    _id,
  }: {
    _id: string;
  }): Promise<OrderModel | undefined> {
    const findBrand = this.orders.find(brand => brand.user === _id);

    return findBrand;
  }

  public async findById({
    _id,
  }: {
    _id: string;
  }): Promise<OrderModel | undefined> {
    const findBrand = this.orders.find(brand => brand._id === _id);

    return findBrand;
  }

  public async create({
    adress,
    products,
    total_price,
    user,
  }: ICreateOrderDTO): Promise<OrderModel> {
    const order = {
      _id: '',
      user: '',
      total_price: '',
      adress: '',
      products: [],
    } as OrderModel;

    Object.assign(order, { _id: v4(), adress, products, total_price, user });

    this.orders.push(order);

    return order;
  }
}

export default FakeOrderRepository;
