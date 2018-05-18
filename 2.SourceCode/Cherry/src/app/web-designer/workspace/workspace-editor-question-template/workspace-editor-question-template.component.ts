import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import {Question} from '../../../models/question';
import {AnswerType} from '../../../models/answer-type.enum';

// tslint:disable-next-line:max-line-length
@Component({selector: 'app-workspace-editor-question-template',
templateUrl: './workspace-editor-question-template.component.html',
styleUrls: ['./workspace-editor-question-template.component.css']})
export class WorkspaceEditorQuestionTemplateComponent implements OnInit {

  answerType = AnswerType;
  @Input()
  question : any;

  @Input()
  totalNum : number;

  @Output()
  select : EventEmitter < any > = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onclick() {
    this.select.emit(this.question);
  }

}
