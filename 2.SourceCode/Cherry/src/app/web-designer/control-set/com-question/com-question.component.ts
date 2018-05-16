import { Component, OnInit, Input } from '@angular/core';
import { ControlSetItemComponent } from '../../../models/control-set-item-component';

@Component({
  selector: 'app-com-question',
  templateUrl: './com-question.component.html',
  styleUrls: ['./com-question.component.css']
})
export class ComQuestionComponent implements OnInit, ControlSetItemComponent {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
