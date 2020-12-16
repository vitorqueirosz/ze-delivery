import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { UserModel } from '../repositories/UsersRepository';

import { IUserRepository } from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  password: string;
  email: string;
  adress: string;
  cpf: number;
  phone: number;
  age: string;
}

interface Response {
  user: UserModel;
  token: string;
}
class CreateUserService {
  private usersRepository: IUserRepository;

  constructor(usersRepository: IUserRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({
    name,
    password,
    email,
    adress,
    cpf,
    phone,
    age,
  }: IRequest): Promise<Response> {
    const hashPassword = await hash(password, 8);

    console.log(phone);

    const user = await this.usersRepository.create({
      name,
      password: hashPassword,
      email,
      adress,
      cpf,
      phone,
      age,
    });

    const secret = process.env.JWT_CONFIG_SECRET;

    const token = sign({}, secret, {
      subject: String(user._id),
      expiresIn: process.env.JWT_CONFIG_EXPIRES,
    });

    return { user, token };
  }
}

export default CreateUserService;
