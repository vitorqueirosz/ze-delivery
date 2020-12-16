import { Router } from 'express';
import UserController from '../controller/UserController';
import UserAdressController from '../controller/UserAdressController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const usersController = new UserController();
const userAdressController = new UserAdressController();

usersRouter.post('/', usersController.create);

usersRouter.use(ensureAuthenticated);

usersRouter.post('/adress', userAdressController.create);
usersRouter.get('/adress', usersController.index);

export default usersRouter;
