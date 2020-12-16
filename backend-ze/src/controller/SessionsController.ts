import { Request, Response } from 'express';

import UserRepository from '../repositories/UsersRepository';

import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const usersRepository = new UserRepository();
    const createUserService = new AuthenticateUserService(usersRepository);

    const user = await createUserService.execute({
      email,
      password,
    });

    return response.json(user);
  }
}

export default SessionsController;
