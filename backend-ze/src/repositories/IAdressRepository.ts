import { ICreateAdressDTO } from '../dtos/ICreateAdressDTO';
import { AdressModel } from './AdressRepository';

export interface IRequest {
  street: string;
  state: string;
  number: string;
  city: string;
  neighborhood: string;
  user: string;
}

export interface IAdressRepository {
  create(createAdress: ICreateAdressDTO): Promise<AdressModel>;
  findAndUpdate({
    street,
    state,
    neighborhood,
    number,
    user,
    city,
  }: IRequest): Promise<AdressModel | undefined>;
  findAdress(user: string): Promise<AdressModel | undefined>;
}
