import { Document, Model } from 'mongoose';

import { User as UserInterface } from '../interfaces/User';
import User from '../schemas/User';

import { IUserRepository, UserResponse } from './IUsersRepository';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export interface UserModel extends UserInterface, Document {}

class UserRepository implements IUserRepository {
  private usersRepository: Model<UserModel>;

  // constructor() {
  //   this.usersRepository = model('users', userSchema);
  // }

  public async findByEmail(email: string): Promise<UserModel | undefined> {
    const user = User.findOne({ email });

    return user;
  }

  public async findById({
    _id,
  }: {
    _id: string;
  }): Promise<UserResponse | undefined> {
    const user = await User.findOne({ _id })
      .populate('adress')
      .sort({ created_at: 'desc' });

    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      cpf: user.cpf,
      phone: user.phone,
      age: user.age,
      adress: {
        _id: user.adress?._id,
        street: user.adress.street,
        number: user.adress.number,
        state: user.adress.state,
        city: user.adress.city,
        neighborhood: user.adress.neighborhood,
      },
    };

    return userResponse;
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
    const user = await User.create({
      name,
      password,
      adress,
      email,
      cpf,
      phone,
      age,
    });

    return user;
  }
}

export default UserRepository;
