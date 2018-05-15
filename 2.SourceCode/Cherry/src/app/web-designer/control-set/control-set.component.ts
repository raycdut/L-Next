import {Component, OnInit} from '@angular/core';
import { ControlType } from '../../models/controltype';

@Component({selector: 'app-control-set', templateUrl: './control-set.component.html', styleUrls: ['./control-set.component.css']})
export class ControlSetComponent implements OnInit {

  Controls: ControlType[] = [];

  constructor() {}

  ngOnInit() {
    this.Controls.push({Name: 'Question'});
    this.Controls.push({Name: 'Answer-Radio'});
    this.Controls.push({Name: 'Answer-Text'});
    this.Controls.push({Name: 'Answer-CheckBox'});
  }
  onDragStart(evt: any) {
    // evt.preventDefault();
    const ctrlName = evt.target.innerText;
    console.log(ctrlName + ' drag start');
    evt.dataTransfer.dropEffect = 'move';
    evt
      .dataTransfer
      .setData('text/plain', ctrlName);
  }
}
