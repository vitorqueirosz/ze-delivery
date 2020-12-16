import { Document } from 'mongoose';

import { Adress as AdressInterface } from '../interfaces/Adress';
import Adress from '../schemas/Adress';
import { IAdressRepository, IRequest } from './IAdressRepository';

import { ICreateAdressDTO } from '../dtos/ICreateAdressDTO';

export interface AdressModel extends AdressInterface, Document {}

class AdressRepository implements IAdressRepository {
  public async findAdress(user: string): Promise<AdressModel> {
    const adress = await Adress.findOne({ user });

    return adress;
  }

  public async findAndUpdate({
    state,
    number,
    neighborhood,
    city,
    street,
    user,
  }: IRequest): Promise<AdressModel> {
    const newAdress = { state, number, neighborhood, city, street, user };

    const updatedAdress = await Adress.findByIdAndUpdate(user, newAdress, {
      new: true,
    });

    return updatedAdress;
  }

  public async create({
    street,
    state,
    number,
    city,
    neighborhood,
    user,
  }: ICreateAdressDTO): Promise<AdressModel> {
    const adress = await Adress.create({
      street,
      state,
      number,
      city,
      neighborhood,
      user,
    });

    return adress;
  }
}

export default AdressRepository;
