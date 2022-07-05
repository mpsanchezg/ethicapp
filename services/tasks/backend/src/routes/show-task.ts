import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '@cygnetops/common';

import { findTaskById } from '../utils/tasks';

const router = express.Router();

router.get(
  '/api/tasks/:id',
  validateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params

    if(id) {
      const task = findTaskById(Number(id))
      res.status(200).send(task)
    }
    else res.status(404).send('task not found');
  }
)

export { router as showTaskRouter };
