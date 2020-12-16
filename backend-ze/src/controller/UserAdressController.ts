import { Request, Response } from 'express';
import AdressRepository from '../repositories/AdressRepository';

import CreateUserAdressService from '../services/CreateUserAdressService';

class UserAdressController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { street, state, number, neighborhood, city } = request.body;
    console.log(street, state, number, neighborhood, city);

    const user = request.user.id;

    const adressRepository = new AdressRepository();
    const createUserAdressService = new CreateUserAdressService(
      adressRepository,
    );

    const adress = await createUserAdressService.execute({
      user,
      street,
      state,
      number,
      neighborhood,
      city,
    });

    return response.status(201).json(adress);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user = request.user.id;

    const adressRepository = new AdressRepository();

    const adress = await adressRepository.findAdress(user);

    return response.json(adress);
  }
}

export default UserAdressController;
