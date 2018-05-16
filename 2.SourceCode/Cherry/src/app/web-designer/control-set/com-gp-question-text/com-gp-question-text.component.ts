import { Component, OnInit, Input } from '@angular/core';
import { ControlSetItemComponent } from '../../../models/control-set-item-component';

@Component({
  selector: 'app-com-gp-question-text',
  templateUrl: './com-gp-question-text.component.html',
  styleUrls: ['./com-gp-question-text.component.css']
})
export class ComGpQuestionTextComponent implements OnInit, ControlSetItemComponent {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
