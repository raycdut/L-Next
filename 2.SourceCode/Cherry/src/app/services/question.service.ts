import {Injectable} from '@angular/core';
import {Question} from '../models/question';
import { Answer } from '../models/answer';
import { AnswerType } from '../models/answer-type.enum';
import { AnswerSource } from '../models/answer-source';

@Injectable({providedIn: 'root'})
export class QuestionService {

  AddQuestionItemToList(questionType: string, questionList: Question[]) {
    const count = questionList.length;
    // tslint:disable-next-line:max-line-length
    questionList.push( new Question(count + 1,
      'question 1',
       new Answer(count + 1,  1, AnswerType.RadioButton, 'Yes', [ new AnswerSource('Yes', true), new AnswerSource('No', false)])), );
  }
  constructor() {}

  GetAllQuestion() {
    return [
      // tslint:disable-next-line:max-line-length
      new Question(1, 'question 1', new Answer(1,  1, AnswerType.RadioButton, 'Yes', [ new AnswerSource('Yes', true), new AnswerSource('No', false)])),
      // tslint:disable-next-line:max-line-length
      new Question(2, 'question 2', new Answer(2,  2, AnswerType.CheckBox, null, [new AnswerSource('A', true), new AnswerSource('B', false)]))
    ];
  }

}
