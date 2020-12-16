import AppError from '../errors/AppError';
import FakeProductRepository from '../fakes/FakeProductRepository';

describe('Create Product', () => {
  it('should create a new product', async () => {
    const productRepository = new FakeProductRepository();

    const product = await productRepository.create({
      name: 'Heineken 350ml',
      image: 'heineken.jpg',
      price: 4,
      category_id: '455465445',
    });

    expect(product).toHaveProperty('_id');
    expect(product.category_id).toBe('455465445');
  });

  it('should not create a new product with same name', async () => {
    const productRepository = new FakeProductRepository();

    await productRepository.create({
      name: 'Heineken 350ml',
      image: 'heineken.jpg',
      price: 4,
      category_id: '455465445',
    });

    expect(
      productRepository.create({
        name: 'Heineken 350ml',
        image: 'heineken.jpg',
        price: 4,
        category_id: '455465445',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
