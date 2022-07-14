import express, { Request, response, Response } from 'express';
import { validateRequest } from '@cygnetops/common';

import { taskAnswers } from '../mock/task-answers';
import TaskAnswer from '../models/task-answer';

const router = express.Router();

router.post(
  '/api/tasks/:taskId/create',
  validateRequest,
  async (req: Request, res: Response) => {
    const { taskId } = req.params;
    const { sessionId } = req.body;
    const io = req.app.locals.io;

    const newTaskAnswer = new TaskAnswer(taskAnswers.length, Number(taskId), Number(sessionId));

    taskAnswers.push(newTaskAnswer);

    io.emit('conductor-task-request', { task: newTaskAnswer });

    console.log('HOLAAA')
    
    res.status(201).send('ok');
    // hacer que se emita el evento 'create-task-by-conductor' o algo así
    // para que se informe a traves del socket que se creó la tarea para
    // mostrársela a los alumnos

    // PASOS:
    // 1. recibir taskId y sessionId
    // 2. crear nueva instancia de taskSession (para identificar la tarea y la sesion?)
    // 3. entregarle al front los datos de la tarea creada para que lo muestre al alumno
     
  }
);

export { router as taskManagementRouter };
