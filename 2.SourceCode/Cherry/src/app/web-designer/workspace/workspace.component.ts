import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-workspace', templateUrl: './workspace.component.html', styleUrls: ['./workspace.component.css']})
export class WorkspaceComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  onDragOver(event: any) {
    event.preventDefault();
    console.log('drag over!');
    event.target.style.opacity = '1';
    event.target.style.border = '3px dotted red';
  }

  onDrop(event: any)  {
    event.preventDefault();
    let data = event
      .dataTransfer
      .getData('text');
      console.log(data);
  }

  onDragLeave(event: any) {
    event.target.style.border = '';
  }
}
