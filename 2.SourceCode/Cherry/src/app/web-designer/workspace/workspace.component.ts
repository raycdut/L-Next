import {Component, OnInit, ViewChild, Renderer2, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({selector: 'app-workspace', templateUrl: './workspace.component.html', styleUrls: ['./workspace.component.css']})
export class WorkspaceComponent implements OnInit {

  @ViewChild('workspaceEditor')private workspaceEditor;
  @ViewChild('tmpTemplate')private tmpTemplate;

  // tslint:disable-next-line:typedef-whitespace
  constructor(private renderer : Renderer2, @Inject(DOCUMENT)private document) {}

  ngOnInit() {}

  onDragOver(event: any) {
    event.preventDefault();
    console.log('drag over!');
    event.target.style.opacity = '1';
    event.target.style.border = '3px dotted red';
  }

  onDrop(event: any) {
    event.preventDefault();
    const controlType = event
      .dataTransfer
      .getData('text');
    console.log('drop ' + controlType);
    // append element to div.
    this
      .renderer
      .appendChild(this.workspaceEditor.nativeElement, this.tmpTemplate.nativeElement.firstChild);
  }

  onDropEnter(event: any) {
    let spanElement = new span();
    // load the component into a tempalte
  }

  onDragLeave(event: any) {
    event.target.style.border = '';
  }
}
