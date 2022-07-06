import express from 'express';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@cygnetops/common';

import { createSessionRouter } from './routes/new';
import { showSessionRouter } from './routes/show';
import { indexSessionRouter } from './routes/index';
import { netflixConductorRouter } from './routes/netflix-conductor';
import { startSessionRouter } from './routes/session-management';

const app = express();

app.set('trust proxy', true);

app.use(function(_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}); 

app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(indexSessionRouter);
app.use(createSessionRouter);
app.use(showSessionRouter);
app.use(netflixConductorRouter);
app.use(startSessionRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.all('*', async (_req, _res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };