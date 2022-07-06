import { app } from './app';

const start = async () => {
  console.log('checking workflow for merge...');
  app.listen(3031, () => {
    console.log('Listening on port 3031');
  });
};

start();
