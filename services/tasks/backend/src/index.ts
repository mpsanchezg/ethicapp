import { app } from './app';

const start = () => {
  app.listen(3034, () => {
    console.log('Listening on port 3034');
  });
}

start();
