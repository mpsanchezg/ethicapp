import ChoiceTask from '../models/choice-task';
import QuestionTask from '../models/question-task';

export const tasks = [
  new QuestionTask(
    0,
    'profesora@ethic.app',
    '¿como estas?',
    100
  ),
  new ChoiceTask(
    1,
    'profesora@ethic.app',
    'del 1 al 5, como te sientes?',
    ['1', '2', '3', '4', '5']
  )
];
