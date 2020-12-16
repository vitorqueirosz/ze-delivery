import AppError from '../errors/AppError';
import FakeBrandRepository from '../fakes/FakeBrandRepository';
import CreateBrandService from './CreateBrandService';

describe('CreateBrand', () => {
  it('it should create a new Brand', async () => {
    const fakeBrandRepository = new FakeBrandRepository();
    const createBrandService = new CreateBrandService(fakeBrandRepository);

    const brand = await createBrandService.execute({
      image: 'brand.jpg',
      name: 'Heineken',
      is_prestigious: true,
    });

    expect(brand).toHaveProperty('_id');
  });

  it('it should new create a new Brand with same name', async () => {
    const fakeBrandRepository = new FakeBrandRepository();
    const createBrandService = new CreateBrandService(fakeBrandRepository);

    await createBrandService.execute({
      image: 'brand.jpg',
      name: 'Heineken',
      is_prestigious: true,
    });

    expect(
      createBrandService.execute({
        image: 'brand.jpg',
        name: 'Heineken',
        is_prestigious: true,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('it should return a brand with prestigious', async () => {
    const fakeBrandRepository = new FakeBrandRepository();
    const createBrandService = new CreateBrandService(fakeBrandRepository);

    await createBrandService.execute({
      image: 'brand.jpg',
      name: 'Heineken',
      is_prestigious: false,
    });

    const brand = await fakeBrandRepository.findAllBrands();

    expect(brand?.find(b => b?.is_prestigious === false)?.is_prestigious).toBe(
      false,
    );
  });
});
