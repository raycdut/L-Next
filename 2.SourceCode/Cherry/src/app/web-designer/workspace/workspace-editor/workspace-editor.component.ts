import { Component, OnInit, Input, Inject } from '@angular/core';
import { Question } from '../../../models/question';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-workspace-editor',
  templateUrl: './workspace-editor.component.html',
  styleUrls: ['./workspace-editor.component.css']
})
export class WorkspaceEditorComponent implements OnInit {

  questionList: any;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionList = this.questionService.GetAllQuestion();
  }

  onDragOver(event: any) {
    event.preventDefault();
    console.log('drag over!');
    event.target.style.border = '3px dotted red';
  }

  onDrop(event: any) {
    event.preventDefault();
    const controlType = event
      .dataTransfer
      .getData('text');
    console.log('drop ' + controlType);
    this.addQuestionItemToList(controlType);
    event.target.style.border = '';
  }

  onDropEnter(event: any) {
  }

  onDragLeave(event: any) {
    console.log('component leave');
    event.target.style.border = '';
  }


  checkback() {
    const a = '';
  }

  addQuestionItemToList(questionType: any) {
      this.questionService.AddQuestionItemToList(questionType ,  this.questionList);
  }

}
