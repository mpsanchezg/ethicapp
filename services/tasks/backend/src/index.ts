import { httpServer } from './app';

const start = () => {
  httpServer.listen(3033, () => {
    console.log('Listening on port 3033');
  });
}

start();
