import { app } from './app';

const start = () => {
  app.listen(3033, () => {
    console.log('Listening on port 3033');
  });
}

start();
