import AppError from '../errors/AppError';
import FakeCategoryRepository from '../fakes/FakeCategoryRepository';
import CreateCategoryService from './CreateCategoriesService';

describe('CreateCategory', () => {
  it('it should create a new category', async () => {
    const fakeCategoryRepository = new FakeCategoryRepository();
    const createCategoryService = new CreateCategoryService(
      fakeCategoryRepository,
    );

    const category = await createCategoryService.execute({
      image: 'imagetest.jpg',
      name: 'Cervejas',
    });

    expect(category).toHaveProperty('_id');
  });

  it('it should not create a new category with same name', async () => {
    const fakeCategoryRepository = new FakeCategoryRepository();
    const createCategoryService = new CreateCategoryService(
      fakeCategoryRepository,
    );

    await createCategoryService.execute({
      image: 'imagetest.jpg',
      name: 'Cervejas',
    });

    expect(
      createCategoryService.execute({
        image: 'imagetest.jpg',
        name: 'Cervejas',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('it should return a category', async () => {
    const fakeCategoryRepository = new FakeCategoryRepository();
    const createCategoryService = new CreateCategoryService(
      fakeCategoryRepository,
    );

    await createCategoryService.execute({
      image: 'imagetest.jpg',
      name: 'Cervejas',
    });

    const category = await fakeCategoryRepository.findCategory({
      name: 'Cervejas',
    });

    expect(category?.name).toBe('Cervejas');
  });
});
