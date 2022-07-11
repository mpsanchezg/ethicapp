import express from 'express';
import 'express-async-errors';
import { errorHandler, NotFoundError } from '@cygnetops/common';

import { showTaskRouter } from './routes/show-task';

const app = express();

app.set('trust proxy', true);

app.use(function(_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());

app.use(showTaskRouter);

app.all('*', async (_req, _res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
