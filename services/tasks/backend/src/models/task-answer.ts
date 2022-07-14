export default class TaskAnswer {
  id: number;
  taskId: number;
  studentEmail: Array<string>;
  sessionId: number;
  answer: string;
  isCollaborative: boolean;

  setAnswer: Function;
  addStudents: Function;

  constructor(id: number, taskId: number, sessionId: number, studentEmail: Array<string> = []) {
    this.id = id;
    this.taskId = taskId;
    this.sessionId = sessionId;
    this.studentEmail = studentEmail;
    this.answer = '';
    this.isCollaborative =  (studentEmail.length > 1) || false;

    this.addStudents = (students: Array<string>) => {
      students.forEach((student) => {
        studentEmail.push(student);
      });
    }

    this.setAnswer = (answer: string) => {
      this.answer = answer;
    }
  }
}
