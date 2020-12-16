import { Router } from 'express';
import multer from 'multer';
import BrandsController from '../controller/BrandsController';

import uploadConfig from '../config/upload';

const upload = multer(uploadConfig);

const brandsRouter = Router();

const brandsController = new BrandsController();

brandsRouter.post('/', upload.single('image'), brandsController.create);

brandsRouter.get('/no-prestigious', brandsController.index);
brandsRouter.get('/prestigious', brandsController.search);

brandsRouter.get('/all', brandsController.find);

export default brandsRouter;
