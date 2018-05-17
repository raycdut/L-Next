import {Injectable} from '@angular/core';
import {Question} from '../models/question';
import { Answer } from '../models/answer';
import { AnswerType } from '../models/answer-type.enum';

@Injectable({providedIn: 'root'})
export class QuestionService {

  constructor() {}

  GetAllQuestion() {
    return [
      new Question(1, 'question 1', new Answer(1,  1, AnswerType.RadioButton, 'Yes', ['Yes', 'No'])),
      new Question(2, 'question 2', new Answer(2,  2, AnswerType.Checkbox, 'A', ['A', 'B']))
    ];
  }

}
