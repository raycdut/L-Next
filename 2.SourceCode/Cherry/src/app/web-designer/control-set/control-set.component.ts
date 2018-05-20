import { Component, OnInit, Type } from '@angular/core';
import { ControlType } from '../../models/controltype';
import { ControlSetServiceService } from '../../services/control-set-service.service';
import { stringify } from '@angular/compiler/src/util';

@Component({selector: 'app-control-set', templateUrl: './control-set.component.html', styleUrls: ['./control-set.component.css']})
export class ControlSetComponent implements OnInit {

  Controls: ControlType[] = [];

  constructor(private controlSetServiceService: ControlSetServiceService) {}

  ngOnInit() {
    this.Controls = this.controlSetServiceService.GetAllContolTypes();
  }
  onDragStart(evt: any) {
    // evt.preventDefault();
    const ctrlName = evt.target.innerText;
    console.log(ctrlName + ' drag start');
    evt.dataTransfer.dropEffect = 'move';
    const type = this.Controls.find(i => i.Name === ctrlName);

    evt
      .dataTransfer
      .setData('text/plain', JSON.stringify({isNew: true, method: type }) );
  }
}
