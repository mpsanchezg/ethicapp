import express, { Request, Response } from 'express';

import { sessions } from '../mock/sessions';
import { findSessionById } from '../utils/findSession';

const router = express.Router();

const students: {id: string, name: string, email: string}[] = [];

router.post('/api/sessions/:sessionId/open', async (req: Request, res: Response) => {
  const { sessionId } = req.params;
  const { teacherEmail } = req.body;

  if (teacherEmail && sessionId && Number(sessionId) < sessions.length) {
    const session = findSessionById(Number(sessionId));
    session.changeState('open');

    res.send(session.state);
  } else if (teacherEmail && (!sessionId || Number(sessionId) >= sessions.length)) {
    res.status(400).send('Bad Request');
  } else {
    res.status(401).send('Unauthorized');
  }
});

router.post('/api/sessions/:sessionId/start', async (req: Request, res: Response) => {
  const { sessionId } = req.params;
  const { teacherEmail } = req.body;

  if (teacherEmail && sessionId && Number(sessionId) < sessions.length) {
    const session = findSessionById(Number(sessionId));
    session.changeState('starting');

    res.send(session.state);
  } else if (teacherEmail && (!sessionId || Number(sessionId) >= sessions.length)) {
    res.status(400).send('Bad Request');
  } else {
    res.status(401).send('Unauthorized');
  }
});

router.get('/api/sessions/:sessionId/state', async (req: Request, res: Response) => {
  const { sessionId } = req.params;

  if ( sessionId && Number(sessionId) < sessions.length) {
    const session = findSessionById(Number(sessionId));
    const state = session.state;

    if (state === 'starting') {
      res.status(200).send(state);
    } else {
      res.sendStatus(204).send(state);
    }
  } else {
    res.status(401).send('Unauthorized');
  }
});

router.get('/api/sessions/:sessionId/students', async (req: Request, res: Response) => {
  const { sessionId } = req.params;

  if (sessionId && Number(sessionId) < sessions.length) {
    const session = findSessionById(Number(sessionId));
    const students = session.studentEmails;

    res.status(200).send(students);
  } else {
    res.status(401).send('Unauthorized');
  }
});

router.post('/api/sessions/:sessionId/join-session', async (req: Request, res: Response) => {
  const { sessionId } = req.params;
  const { studentEmail } = req.body.student;

  if (studentEmail && sessionId && Number(sessionId) < sessions.length) {
    const session = findSessionById(Number(sessionId));
    const students = session.studentEmails;
    if (session.state === 'open') {
      students.push(studentEmail);
  
      res.status(202).send('Successful join');
    } else {
      res.status(401).send('Session is not open');
    }
  } else if (studentEmail && (sessionId || Number(sessionId) >= sessions.length)) {
    res.status(404).send('Session not found');
  } else {
    res.status(400).send('Bad request');
  }
});

export { router as startSessionRouter };
