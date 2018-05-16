import { Type, Component } from '@angular/core';

export class ControlSetItem {
  // this object specify the type of component to load and any data to bind to the component
  constructor(public component: Type<any>, public data: any) {}
}


