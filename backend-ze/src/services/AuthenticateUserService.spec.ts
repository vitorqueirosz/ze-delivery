import AppError from '../errors/AppError';
import FakeUserRepository from '../fakes/FakeUserRepository';
import AuthenticateUserService from './AuthenticateUserService';

import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate a user', async () => {
    const usersRepository = new FakeUserRepository();
    const authenticateUserService = new AuthenticateUserService(
      usersRepository,
    );

    const createUserService = new CreateUserService(usersRepository);

    const user = await createUserService.execute({
      name: 'tie',
      email: 'tie@gmail.com',
      password: 'tie123123',
      adress: 'Rua dos fieis',
      cpf: 0o77050505,
      age: '18',
      phone: 7191919191,
    });

    const response = await authenticateUserService.execute({
      email: 'tie@gmail.com',
      password: 'tie123123',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not to be able to authenticate with non existin user', async () => {
    const usersRepository = new FakeUserRepository();
    const authenticateUserService = new AuthenticateUserService(
      usersRepository,
    );

    expect(
      authenticateUserService.execute({
        email: 'tie@gmail.com',
        password: 'tie123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate a user with wrong password', async () => {
    const usersRepository = new FakeUserRepository();
    const authenticateUserService = new AuthenticateUserService(
      usersRepository,
    );

    const createUserService = new CreateUserService(usersRepository);

    await createUserService.execute({
      name: 'tie',
      email: 'tie@gmail.com',
      password: 'tie123123',
      adress: 'Rua dos fieis',
      cpf: 0o77050505,
      age: '18',
      phone: 7191919191,
    });

    expect(
      authenticateUserService.execute({
        email: 'tie@gmail.com',
        password: 'tie1212',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
