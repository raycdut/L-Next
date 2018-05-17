import {Component, OnInit, ViewChild, Renderer2, Inject, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import { ControlSetServiceService } from '../../services/control-set-service.service';
import { DynamicComponentHostDirective } from '../../common/directives/dynamic-component-host.directive';
import { ControlSetItemComponent } from '../../models/control-set-item-component';

@Component ({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.css']})
export class WorkspaceComponent implements OnInit {

  @ViewChild('workspaceEditor', {read: ViewContainerRef})private workspaceEditor: ViewContainerRef;
  @ViewChild('tmpTemplate')private tmpTemplate;

  @ViewChild(DynamicComponentHostDirective) dynamicComponentHostDirective: DynamicComponentHostDirective;


  // tslint:disable-next-line:typedef-whitespace
  constructor(private renderer : Renderer2,
     @Inject(DOCUMENT)private document ,
     private controlSetServiceService: ControlSetServiceService,
     private componentFactoryResolver: ComponentFactoryResolver
    ) {}

  ngOnInit() {}

  onDragOver(event: any) {
    event.preventDefault();
    console.log('drag over!');
    event.target.style.border = '3px dotted red';
  }

  onDrop(event: any) {
    event.preventDefault();
    const controlType = event
      .dataTransfer
      .getData('text');
    console.log('drop ' + controlType);
    // append element to div.

    // this is a way to add html element.
    // const tmp = '<span>' + controlType + '</span>';
    // this.tmpTemplate.nativeElement.insertAdjacentHTML('beforeend', tmp);
    this.loadComponent(controlType);

    // this.workspaceEditor.nativeElement.

    //  this.renderer.appendChild(this.workspaceEditor.nativeElement,
    //    componentRef.location.nativeElement
    //  );

    event.target.style.border = '';

  }

  onDropEnter(event: any) {
    const controlType = event
      .dataTransfer
      .getData('text');

    // load the component into a tempalte
    // this.loadComponent(controlType);
  }

  onDragLeave(event: any) {
    console.log('component leave');
    event.target.style.border = '';
  }


  loadComponent(cmpName: string) {
    const ctrl = this.controlSetServiceService.getControlByControlName(cmpName);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ctrl.component);

     const viewContainerRef = this.dynamicComponentHostDirective.viewContainerRef;
     viewContainerRef.clear();

     const componentRef = viewContainerRef.createComponent(componentFactory);
     (<ControlSetItemComponent>componentRef.instance).data = ctrl.data;

    // this.workspaceEditor.createComponent(componentFactory);

  }


}
