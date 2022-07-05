import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '@cygnetops/common';

import verifyUser from '../utils/verify-user'

const router = express.Router();

router.post(
  '/api/auth/signin',
  [
    body('email').isEmail().withMessage('Email must be vaild'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = verifyUser(email, password);
    if (existingUser) res.status(201).send(existingUser);
    else res.status(401).send('invalid user or password');
  }
);

export { router as signInRouter };
