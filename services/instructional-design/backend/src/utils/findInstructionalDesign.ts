import { instructionalDesigns } from "../mock/instructional-designs"

const findInstructionalDesignById = (id: number) => {
  return instructionalDesigns[id];
}

const findInstructionalDesignBySessionId = (sessionId: number) => {
  return instructionalDesigns[sessionId];
}

export { findInstructionalDesignById, findInstructionalDesignBySessionId }
