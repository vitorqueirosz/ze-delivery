import 'dotenv/config';
import express, { NextFunction, Response, Request } from 'express';
// import 'express-async-errors';

import mongoose from 'mongoose';

import path from 'path';

import cors from 'cors';
import AppError from './errors/AppError';
import routes from './routes';

import uploadConfig from './config/upload';

const app = express();

app.use(express.json());

app.use(cors());
app.use(routes);

app.use('/uploads', express.static(path.join(uploadConfig.directory)));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(3333, () => console.log('SERVER IS RUNNING!'));
