export default class TaskAnswer {
  id: number;
  taskId: number;
  studentEmail: Array<string>;
  answer: string;
  isCollaborative: boolean;

  constructor(id: number, taskId: number, studentEmail: Array<string>, answer: string) {
    this.id = id;
    this.taskId = taskId;
    this.studentEmail = studentEmail;
    this.answer = answer;
    this.isCollaborative =  (studentEmail.length > 1) || false;
  }
}
