import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-control-set', templateUrl: './control-set.component.html', styleUrls: ['./control-set.component.css']})
export class ControlSetComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
  onDragStart(evt: any) {
    // evt.preventDefault();
    console.log('drag start');
    evt.dataTransfer.dropEffect = 'move';
    evt.dataTransfer.setData('text/plain', 'an control');
  }
}
