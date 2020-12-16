import FakeOrderRepository from '../fakes/FakeOrderRepository';

describe('CreateOrder', () => {
  it('should create a new order', async () => {
    const orderRepository = new FakeOrderRepository();

    const order = await orderRepository.create({
      adress: 'Rua dos Fieis',
      products: ['122121212'],
      total_price: '1200',
      user: '55555888',
    });

    expect(order).toHaveProperty('_id');
  });
});
