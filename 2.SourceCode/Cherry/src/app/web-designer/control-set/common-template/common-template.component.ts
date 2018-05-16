import {Component, OnInit, ViewChild, Renderer2, Inject, ComponentFactoryResolver, ViewContainerRef,QueryList,ViewChildren} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import { ControlSetServiceService } from '../../../services/control-set-service.service';
import { DynamicComponentHostDirective } from '../../../common/directives/dynamic-component-host.directive';
import { ControlSetItemComponent } from '../../../models/control-set-item-component';

@Component({
  selector: 'app-common-template',
  templateUrl: './common-template.component.html',
  styleUrls: ['./common-template.component.css']
})
export class CommonTemplateComponent implements OnInit {
  @ViewChild('placeHolder', {read: ViewContainerRef})
  private workspaceEditor1: ViewContainerRef;

  @ViewChildren(DynamicComponentHostDirective) 
  private dynamicComponentHostDirective: QueryList<DynamicComponentHostDirective>;

  constructor(
    private renderer : Renderer2,
     @Inject(DOCUMENT)private document ,
     private controlSetServiceService: ControlSetServiceService,
     private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

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
    this.loadComponent(controlType);
    event.target.style.border = '';
  }

  onDropEnter(event: any) {
    console.log("component enter");
  }

  onDragLeave(event: any) {
    console.log('component leave');
    event.target.style.border = '';
  }

  loadComponent(cmpName: string) {
    const ctrl = this.controlSetServiceService.getControlByControlName(cmpName);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ctrl.component);

    // const viewContainerRef = this.dynamicComponentHostDirective.last.viewContainerRef;
    //  viewContainerRef.clear();

    //  const componentRef = viewContainerRef.createComponent(componentFactory);
    //  (<ControlSetItemComponent>componentRef.instance).data = ctrl.data;


     this.workspaceEditor1.createComponent(componentFactory);

  }

}
