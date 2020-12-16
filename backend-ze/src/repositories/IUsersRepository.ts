import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

import { UserModel } from '../fakes/FakeUserRepository';

export interface UserResponse {
  _id: string;
  name: string;
  email: string;
  cpf: number;
  phone: number;
  age: string;
  adress: {
    _id: string;
    street: string;
    number: string;
    state: string;
    city: string;
    neighborhood: string;
  };
}
export interface IUserRepository {
  create(createProduct: ICreateUserDTO): Promise<UserModel>;
  findByEmail(email: string): Promise<UserModel | undefined>;
  findById({ _id }: { _id: string }): Promise<UserResponse | undefined>;
}
