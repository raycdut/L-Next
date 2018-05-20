import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ViewChild,
  Output,
  EventEmitter,
  Renderer2
} from '@angular/core';
import {Question} from '../../../models/question';
import {AnswerType} from '../../../models/answer-type.enum';
import { QuestionService } from '../../../services/question.service';

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

  @ViewChild('AddingPlaceHolder', {read: ViewContainerRef})
  private AddingPlaceHoder: ViewContainerRef;

  constructor(private renderer: Renderer2, private questionService: QuestionService) {}

  ngOnInit() {}

  onclick() {
    this.select.emit(this.question);
  }


  onDragOver(event: any) {
    event.preventDefault();
    console.log('drag over!');
    // event.target.style.border = '3px dotted red';
    this.renderer.setProperty(this.AddingPlaceHoder, 'class', 'showPlanceHoder'); // TODO: Not working.
  }

  onDrop(event: any) {
    event.preventDefault();
    const controlType = event
      .dataTransfer
      .getData('text');

    const transData = JSON.parse( controlType);
    if (transData.isNew === true) {
    console.log('drop new question' + controlType);
    this.questionService.InsertNewQuestion(this.question, transData.method);

    } else {
      console.log('move quetion postion by drag drop');
      this.questionService.MoveQuestionPostion(transData.copiedItem, this.question);
    }

  }

  onDropEnter(event: any) {
    const controlType = event
      .dataTransfer
      .getData('text');
  }

  onDragLeave(event: any) {
    event.preventDefault();
    console.log('add question leave');
    event.target.style.border = '';
  }

  onDragStarting(event: any) {
    console.log(' start dragging existing question.');
   // event.preventDefault();
    event
      .dataTransfer
      .setData('text/plain', JSON.stringify({isNew: false, copiedItem: this.question }) );
  }

}
