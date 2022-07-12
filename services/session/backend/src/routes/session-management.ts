import express, { Request, Response } from 'express';

import { sessions } from '../mock/sessions';
import { doConductorRequest, getWorkflowWithTasksById, completeWaitingStudentsTask } from '../services/conductor-worker';
import { findSessionById } from '../utils/findSession';

const router = express.Router();

router.post('/api/sessions/:sessionId/open', async (req: Request, res: Response) => {
  const { sessionId } = req.params;
  const { teacherEmail } = req.body;
  const workflowName = 'start_session_workflow';

  if (teacherEmail && sessionId && Number(sessionId) < sessions.length) {
    const session = findSessionById(Number(sessionId));

    if (session.state !== 'open') {
      const startWorkflowResponse = await doConductorRequest(Number(sessionId), workflowName);
      console.log('[SESSION MANAGEMENT] startWorkflowResponse', startWorkflowResponse);

      session.setWorkflowId(startWorkflowResponse);
      session.changeState('open');

      res.status(200).send({ sessionState: session.state, workflowId: session.workflowId });
    } else {
      res.status(200).send({
        sessionState: session.state,
        workflowId: session.workflowId,
        message: 'session already open',
      });
    }
    
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
    const getWorkflowResponse = (await getWorkflowWithTasksById(session.workflowId));
    console.log('[SESSION MANAGEMENT] getWorkflowResponse', getWorkflowResponse.tasks);
    session.addWorkflowTasks(getWorkflowResponse.tasks);

    const taskReferenceName = 'wait_students';
    
    // skip worfklows wait students task
    const response = (await completeWaitingStudentsTask(
      session.workflowId,
      session.workflowTasks[taskReferenceName]
      ));
    console.log('SESSION MANAGEMENT -> START SESSION', response)
    session.changeState('in-progress');

    res.status(200).send({ sessionState: session.state, conductorResponse: response });
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

    if (state === 'in-progress') {
      res.status(200).send(state);
    } else {
      res.status(204).send(state);
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
  const { studentEmail } = req.body;

  if (studentEmail && sessionId && Number(sessionId) < sessions.length) {
    const session = findSessionById(Number(sessionId));

    if (session.state === 'open') {
      session.addStudents(studentEmail);

      // front hace una suscripción para que le envíe una respuesta al student luego de que 
      // la tarea wait_students esté completa.
  
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
