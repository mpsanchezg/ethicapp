import { ConductorWorker, WorkflowManager } from 'netflix-conductor-utilities';
import axios from 'axios';

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

const conductorUrl = 'http://100.97.187.67:8080/api';

const wfManager = new WorkflowManager({ apiEndpoint: conductorUrl });

const doConductorRequest = async (sessionId: number, workflowName: string) => {
  return await wfManager.startWorkflow({
    name: workflowName,
    input: { sessionId }
  }).then((response) => {
    return response;
  });
}

const getWorkflowWithTasksById = async (workflowId: string) => {
  return await axios({
    url: `${conductorUrl}/workflow/${workflowId}?includeTasks=true`,
    method: 'GET',
    responseType: 'json'
  }).then((response) => {
    return response.data;
  });
}

const completeWaitingStudentsTask = async (worfklowId: string, taskId: string) => {
  return await axios({
    method: 'post',
    url: `${conductorUrl}/tasks`,
    responseType: 'json',
    data: { 
      workflowInstanceId: worfklowId,
      taskId: taskId,
      status: 'COMPLETED'
    },    
  }).then((response) => {
    return response.data;
  });
}

export {
  pollingConductorTask,
  doConductorRequest,
  completeWaitingStudentsTask,
  getWorkflowWithTasksById
};
