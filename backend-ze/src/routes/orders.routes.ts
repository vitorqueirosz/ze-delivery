import { Router } from 'express';
import OrderController from '../controller/OrderController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const ordersRouter = Router();

const orderController = new OrderController();

ordersRouter.use(ensureAuthenticated);

ordersRouter.post('/', orderController.create);

ordersRouter.get('/', orderController.find);
// ordersRouter.get('/all', categoriesController.search);

export default ordersRouter;
