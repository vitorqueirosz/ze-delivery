import { Router } from 'express';
import CategoriesController from '../controller/CategoriesController';

const categoriesRouter = Router();

const categoriesController = new CategoriesController();

categoriesRouter.post('/', categoriesController.create);
categoriesRouter.get('/all', categoriesController.search);

categoriesRouter.get('/', categoriesController.find);

export default categoriesRouter;
