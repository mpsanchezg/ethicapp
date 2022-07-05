import React, { useEffect, useState } from 'react';
import { WorkflowManager } from 'netflix-conductor-utilities';

const baseUrl = 'http://localhost:8080/api/';

const StartWorfklow = ({ workflowName }) => {
  const workflowManager = new WorkflowManager({ apiEndpoint: baseUrl });
  const [workflow, setWorkflow] = useState(null);

  useEffect( async () => {
    workflowManager.client.defaults.headers = {
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    setWorkflow = await workflowManager.startWorkflow({
      name: 'kitchensink',
    }).then(console.log(workflowName));
  }, []);

  return (
    <div>
      { workflow }
    </div>
  );
};

export default StartWorfklow;
