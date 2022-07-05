export default class TaskAnswer {
  id: number;
  taskId: number;
  studentEmail: string;
  answer: string;
  
  constructor(id: number, taskId: number, studentEmail: string, answer: string) {
    this.id = id;
    this.taskId = taskId;
    this.studentEmail = studentEmail;
    this.answer = answer;
  }
}