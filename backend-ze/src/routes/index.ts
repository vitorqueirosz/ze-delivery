import { Router } from 'express';
import categoriesRouter from './categories.routes';
import brandsRouter from './brands.routes';
import productsRouter from './products.routes';
import ordersRouter from './orders.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/categories', categoriesRouter);
routes.use('/brands', brandsRouter);
routes.use('/products', productsRouter);
routes.use('/orders', ordersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
