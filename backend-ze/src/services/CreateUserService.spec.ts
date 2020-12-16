import AppError from '../errors/AppError';
import FakeUserRepository from '../fakes/FakeUserRepository';

describe('CreateUser', () => {
  it('should create a new user', async () => {
    const fakeUserRepository = new FakeUserRepository();

    const user = await fakeUserRepository.create({
      name: 'tie',
      email: 'tie@gmail.com',
      password: 'tie123123',
      adress: 'Rua dos fieis',
      cpf: 0o77050505,
      age: '18',
      phone: 7191919191,
    });

    expect(user).toHaveProperty('_id');
  });

  it('should create a new user with same email', async () => {
    const fakeUserRepository = new FakeUserRepository();

    await fakeUserRepository.create({
      name: 'tie',
      email: 'tie@gmail.com',
      password: 'tie123123',
      adress: 'Rua dos fieis',
      cpf: 0o77050505,
      age: '18',
      phone: 7191919191,
    });

    expect(
      fakeUserRepository.create({
        name: 'tie',
        email: 'tie@gmail.com',
        password: 'tie123123',
        adress: 'Rua dos fieis',
        cpf: 0o77050505,
        age: '18',
        phone: 7191919191,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
