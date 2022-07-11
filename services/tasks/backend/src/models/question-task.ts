import BaseTask from "./base-task";

export default class QuestionTask implements BaseTask {
  id: number;
  author: string;
  question: string;
  answerLimit: number;
  type: string;
  
  constructor(id: number, author: string, question: string, answerLimit: number) {
    this.id = id;
    this.author = author;
    this.question = question;
    this.answerLimit = answerLimit || 100;
    this.type = 'question-task';
  }
}
