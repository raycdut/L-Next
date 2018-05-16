import { Component, OnInit, Input ,OnDestroy} from '@angular/core';
import { ControlSetItemComponent } from '../../../models/control-set-item-component';

@Component({
  selector: 'app-com-question',
  templateUrl: './com-question.component.html',
  styleUrls: ['./com-question.component.css']
})
export class ComQuestionComponent implements OnInit, ControlSetItemComponent,OnDestroy {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(){}
}
