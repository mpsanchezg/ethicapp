import express, { Request, Response} from 'express';
import { WorkflowManager } from 'netflix-conductor-utilities';
///import { pollingConductorTask } from '../services/conductor-worker';

const router = express.Router();

router.post('/api/netflix-conductor', async (req: Request, res: Response) => {
  // const workflowManager = new WorkflowManager({
  //   apiEndpoint: 'http://localhost:8080/api/'
  // });

  // const workflow = await workflowManager.startWorkflow({
  //   name: req.body.workflowName,
  // });

  res.status(200).send('hola');
});

export { router as netflixConductorRouter };
