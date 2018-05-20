import {Injectable} from '@angular/core';
import {Question} from '../models/question';
import {Answer} from '../models/answer';
import {AnswerType} from '../models/answer-type.enum';
import {AnswerSource} from '../models/answer-source';

@Injectable({providedIn: 'root'})
export class QuestionService {


  private questionList;

  GetAnswerTypeByValue(value: any): AnswerType {
    let result = null;
    switch (value) {
      case 0:
        result = AnswerType.RadioButton;
        break;
      case 1:
        result = AnswerType.CheckBox;
        break;
      case 2:
        result = AnswerType.Text;
        break;
      case 3:
        result = AnswerType.None;
        break;
    }

    return result;
  }

  AddQuestionItemToList(questionType: any, questionList: Question[]) {
    const count = questionList.length;

    const atype = this.GetAnswerTypeByValue(questionType.Type);
    // tslint:disable-next-line:max-line-length
    questionList.push(new Question(count + 1, null, new Answer(count + 1, 1, atype, null, [
      new AnswerSource('Yes', true),
      new AnswerSource('No', false)
    ]))
    );
  }

  public InsertNewQuestion(locationQuesiton: any, questionType: any) {
    const indexOfQuestion = this.questionList.findIndex(item => item.id === locationQuesiton.id);
    const newQuestion = this.GenerateNewQuestion(questionType);
    this.questionList.splice(indexOfQuestion, 0, newQuestion );
  }


  MoveQuestionPostion(fromQuestion: any, targetQuestion: any): any {
      const fromIndexOfQuestion = this.questionList.findIndex(item => item.id === fromQuestion.id);
      this.questionList.splice(fromIndexOfQuestion, 1);
      const targetIndexOfQuestion = this.questionList.findIndex(item => item.id === targetQuestion.id);

      this.questionList.splice(targetIndexOfQuestion, 0, fromQuestion );
  }

  private GenerateNewQuestion(questionType: any): Question {
    const atype = this.GetAnswerTypeByValue(questionType.Type);
    const count = this.questionList.length;
    return new Question(count + 1, null, new Answer(count + 1, 1, atype, null, [
      new AnswerSource('Yes', true),
      new AnswerSource('No', false)]));
  }

  constructor() {}

  GetAllQuestion() {
    this.questionList = [
      // tslint:disable-next-line:max-line-length
      new Question(1, 'question 1', new Answer(1, 1, AnswerType.RadioButton, 'Yes', [
        new AnswerSource('Yes', true),
        new AnswerSource('No', false)
      ]), true),
      // tslint:disable-next-line:max-line-length
      new Question(2, 'question 2', new Answer(2, 2, AnswerType.CheckBox, null, [
        new AnswerSource('A', true),
        new AnswerSource('B', false)
      ]))
    ];

    return this.questionList;
  }

}
