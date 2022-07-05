import express, { Request, Response } from 'express';

import { sessions } from '../mock/sessions';

const router = express.Router();

router.get('/api/sessions', async (req: Request, res: Response) => {
  res.send(sessions);

});

export { router as indexSessionRouter };
