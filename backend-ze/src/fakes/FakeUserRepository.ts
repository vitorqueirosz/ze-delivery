import { Document } from 'mongoose';

import { v4 } from 'uuid';
import AppError from '../errors/AppError';

import { User } from '../interfaces/User';

import { IUserRepository } from '../repositories/IUsersRepository';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export interface UserModel extends User, Document {}

class FakeUserRepository implements IUserRepository {
  private users: UserModel[] = [];

  public async findByEmail(email: string): Promise<UserModel | undefined> {
    const findBrand = this.users.find(user => user.email === email);

    return findBrand;
  }

  public async findById({
    _id,
  }: {
    _id: string;
  }): Promise<UserModel | undefined> {
    const findBrand = this.users.find(brand => brand._id === _id);

    return findBrand;
  }

  public async create({
    name,
    password,
    adress,
    email,
    cpf,
    phone,
    age,
  }: ICreateUserDTO): Promise<UserModel> {
    const userExists = await this.findByEmail(email);

    if (userExists) {
      throw new AppError('User already exists', 400);
    }

    const user = {
      _id: '',
      name: '',
      email: '',
      password: '',
      adress: '',
      cpf: 0,
      phone: 0,
      age: '',
    } as UserModel;

    Object.assign(user, {
      _id: v4(),
      name,
      password,
      adress,
      email,
      cpf,
      phone,
      age,
    });

    this.users.push(user);

    return user;
  }
}

export default FakeUserRepository;
