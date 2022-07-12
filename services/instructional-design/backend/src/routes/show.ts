import express, { Request, Response } from 'express';
import { instructionalDesigns } from '../mock/instructional-designs';

import { findInstructionalDesignById, findInstructionalDesignBySessionId } from '../utils/findInstructionalDesign';

const router = express.Router();

router.get('/api/instructional-design', async (req: Request, res: Response) => {
  const { id, sessionId } = (req.query);

  if ((id && Number(id) >= instructionalDesigns.length) || !sessionId) {
    res.status(404).send('Instructional Design not found');
  } else if (sessionId) {
    const iDesign = findInstructionalDesignBySessionId(Number(sessionId));
    console.log('I DESIGN', iDesign);

    if (iDesign) {
      const resp = { taskIds: iDesign.taskIds, tasksArrayLength: iDesign.taskIds.length };
      res.status(200).send(resp);
    } else {
      res.status(404).send('Instructional Design not found');  
    }
  } else {
    const iDesign = findInstructionalDesignById(Number(id));
    const resp = { taskIds: iDesign.taskIds, tasksArrayLength: iDesign.taskIds.length };
    res.status(200).send(resp);
  }
});

export { router as showInstructionalDesignRouter };
