import { IAdressRepository } from '../repositories/IAdressRepository';
import { AdressModel } from '../schemas/Adress';

interface IRequest {
  street: string;
  state: string;
  number: string;
  city: string;
  neighborhood: string;
  user: string;
}

class CreateUserAdressService {
  private adressRepository: IAdressRepository;

  constructor(adressRepository: IAdressRepository) {
    this.adressRepository = adressRepository;
  }

  public async execute({
    street,
    state,
    neighborhood,
    number,
    user,
    city,
  }: IRequest): Promise<AdressModel> {
    const findAdress = await this.adressRepository.findAndUpdate({
      street,
      state,
      neighborhood,
      number,
      user,
      city,
    });

    if (!findAdress) {
      const adress = await this.adressRepository.create({
        street,
        state,
        neighborhood,
        number,
        city,
        user,
      });

      return adress;
    }

    return findAdress;
  }
}

export default CreateUserAdressService;
