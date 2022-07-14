import express from 'express';
import 'express-async-errors';
import { errorHandler, NotFoundError } from '@cygnetops/common';
import http from 'http';
import { Server } from 'socket.io';

import { showTaskRouter } from './routes/show-task';
import { taskManagementRouter } from './routes/tasks-management';
import { taskAnswers } from './mock/task-answers';

const app = express();

const httpServer = http.createServer(app);

// agregar socket
const io = new Server(httpServer, {
  path: '/websocket'
});

app.locals.io = io;

// agregar conexión a front
// io.on('connection', () => {
// });

// agregar evento conductor-task-request
// hacer que se mande la tarea al front
io.on('conductor-task-request', (data) => {
    console.log('hi conductor', data);
});

app.set('trust proxy', true);

app.use(function(_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());

app.use(showTaskRouter);
app.use(taskManagementRouter);

app.all('*', async (_req, _res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { httpServer };
