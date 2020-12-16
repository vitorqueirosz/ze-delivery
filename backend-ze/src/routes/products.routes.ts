import { Router } from 'express';
import multer from 'multer';
import ProductController from '../controller/ProductController';

import uploadConfig from '../config/upload';

const productsRouter = Router();

const productsController = new ProductController();

const upload = multer(uploadConfig);

productsRouter.post('/', upload.single('image'), productsController.create);
productsRouter.post('/:id', productsController.index);

// productsRouter.get('/all', productsController.search);

export default productsRouter;
