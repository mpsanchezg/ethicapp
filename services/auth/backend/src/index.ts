import { app } from './app';

const start = () => {
  app.listen(3030, () => {
    console.log('Listening on port 3030');
  });
}

start();
