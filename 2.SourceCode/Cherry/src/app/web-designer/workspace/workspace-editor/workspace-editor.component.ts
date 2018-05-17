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


}
