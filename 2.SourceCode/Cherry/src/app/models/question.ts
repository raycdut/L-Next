import {Answer} from './answer';

export class Question {

  constructor(public id: number, public questionText: string, public answer?: Answer) {
    this.answer = new Answer(this.id);
  }

}
