import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@cygnetops/common';
import { Session } from '../models/session';
import { sessions } from '../mock/sessions';
// import { TicketCreatedPublisher } from '../events/publishers/ticket-created-publisher';
// import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/sessions',
  requireAuth,
  [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('description'),
    body('teacherEmail').isEmail().withMessage('Email is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, description, teacherEmail } = req.body;

    if (title && description && teacherEmail) {
      const id = sessions.length;
      const session = new Session(id, title, description, teacherEmail);
  
      res.status(201).send(session);
    } else {
      res.status(400).send('Invalid request');
    }
  }
);

export { router as createSessionRouter };
