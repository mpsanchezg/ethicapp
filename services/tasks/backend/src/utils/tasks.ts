import { tasks } from "../mock/tasks"

export const findTaskById = (id: number) => {
  return tasks[id];
}
