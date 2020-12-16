import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { UserModel } from '../repositories/UsersRepository';

import { IUserRepository } from '../repositories/IUsersRepository';
import AppError from '../errors/AppError';

interface IRequest {
  password: string;
  email: string;
}

interface Response {
  user: UserModel;
  token: string;
}

class AuthenticateUserService {
  private usersRepository: IUserRepository;

  constructor(usersRepository: IUserRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ email, password }: IRequest): Promise<Response> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Invalid Credentials/ Email-Password', 400);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Invalid Credentials/ Email-Password', 400);
    }

    const secret = process.env.JWT_CONFIG_SECRET;

    const token = sign({}, secret, {
      subject: String(user._id),
      expiresIn: process.env.JWT_CONFIG_EXPIRES,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
