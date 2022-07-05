import { app } from './app';

const start = async () => {
  console.log('checking workflow for merge...');
  app.listen(3033, () => {
    console.log('Listening on port 3033');
  });
};

start();
