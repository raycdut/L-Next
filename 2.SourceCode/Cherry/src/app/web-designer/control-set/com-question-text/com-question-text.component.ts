import { Component, OnInit, Input } from '@angular/core';
import { ControlSetItemComponent } from '../../../models/control-set-item-component';

@Component({
  selector: 'app-com-question-text',
  templateUrl: './com-question-text.component.html',
  styleUrls: ['./com-question-text.component.css']
})
export class ComQuestionTextComponent implements OnInit, ControlSetItemComponent {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
