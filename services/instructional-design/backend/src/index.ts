import { app } from './app';

const start = () => {
  app.listen(3032, () => {
    console.log('Listening on port 3032');
  });
}

start();
