import BaseTask from "./base-task";

export default class ChoiceTask implements BaseTask {
  id: number;
  author: string;
  type: string;
  question: string;
  choices: Array<string>;

  constructor(id: number, author: string, question: string, choices: Array<string>) {
    this.id = id;
    this.author = author;
    this.question = question;
    this.choices = choices;
    this.type = 'choice-task';
  }
}
