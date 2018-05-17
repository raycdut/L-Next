import { AnswerType } from './answer-type.enum';
import { AnswerSource } from './answer-source';
export class Answer {

  // tslint:disable-next-line:max-line-length
  constructor(public questionId: number, public id?: number,
    public answerType?: AnswerType, public answerValue?: any,
    public answerSource?: AnswerSource[]) {}

}
