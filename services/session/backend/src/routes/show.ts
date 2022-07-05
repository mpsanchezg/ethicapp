import express, { Request, Response } from 'express';

import { sessions } from '../mock/sessions';
import { findSessionById } from '../utils/findSession';

const router = express.Router();

router.get('/api/sessions/:id', async (req: Request, res: Response) => {
  const { id } = (req.params);

  if (!id || Number(id) >= sessions.length) {
    res.status(404).send('Session not found');
  } else {
    res.send(findSessionById(Number(id)));
  }
});

export { router as showSessionRouter };
