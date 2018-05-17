import {AnswerType} from './answer-type.enum';
export class Answer {

  // tslint:disable-next-line:max-line-length
  constructor(public questionId: number, public id?: number,  public answerType?: AnswerType, public answerValue?: any, public answerSource?: string[]) {}

}
