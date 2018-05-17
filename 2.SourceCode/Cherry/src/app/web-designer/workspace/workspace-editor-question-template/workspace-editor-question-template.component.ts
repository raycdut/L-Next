import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../models/question';

@Component({
  selector: 'app-workspace-editor-question-template',
  templateUrl: './workspace-editor-question-template.component.html',
  styleUrls: ['./workspace-editor-question-template.component.css']
})
export class WorkspaceEditorQuestionTemplateComponent implements OnInit {

  @Input()
  question: any;
  constructor() { }

  ngOnInit() {
  }

}
