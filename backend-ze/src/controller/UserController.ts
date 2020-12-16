import { Request, Response } from 'express';

import UserRepository from '../repositories/UsersRepository';
import AdressRepository from '../repositories/AdressRepository';

import Queue from '../lib/Queue';

import CreateUserService from '../services/CreateUserService';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, password, adress, email, cpf, phone, age } = request.body;

    const usersRepository = new UserRepository();

    const createUserService = new CreateUserService(usersRepository);

    const user = await createUserService.execute({
      name,
      password,
      adress,
      email,
      cpf,
      phone,
      age,
    });

    await Queue.add('RegistrationMail', { user });

    return response.status(201).json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const _id = request.user.id;

    const usersRepository = new UserRepository();

    const adressRepository = new AdressRepository();

    const user = await usersRepository.findById({ _id });

    return response.json(user);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const id = request.query._id;

    const usersRepository = new UserRepository();

    const product = await usersRepository.findByEmail(String(id));

    return response.json(product);
  }
}

export default UserController;
