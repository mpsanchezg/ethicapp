/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConductorWorker } from 'netflix-conductor-utilities';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const pollingConductorTask = async (url: string, apiPath: string, workerId: string, taskType: string) => {

  const worker = new ConductorWorker({
    url: url, // host
    apiPath: apiPath, // base path
    workerid: workerId,
    maxConcurrent: 2,
  });

  // start
  worker.start(taskType, (input) => {
    return Promise.resolve(input.message).then((data) => {
      console.log(data);
    });
  }, 5000);

  // stop
  setTimeout(() => {
    worker.stop();
  }, 20000);

};

export { pollingConductorTask };
