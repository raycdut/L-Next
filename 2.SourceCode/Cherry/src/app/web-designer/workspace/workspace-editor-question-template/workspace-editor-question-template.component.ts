import { Component, OnInit, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { Question } from '../../../models/question';
import { AnswerType } from '../../../models/answer-type.enum';

@Component({
  selector: 'app-workspace-editor-question-template',
  templateUrl: './workspace-editor-question-template.component.html',
  styleUrls: ['./workspace-editor-question-template.component.css']
})
export class WorkspaceEditorQuestionTemplateComponent implements OnInit {

  answerType = AnswerType;
  @Input()
  question: any;


  constructor() { }

  ngOnInit() {
  }


}
