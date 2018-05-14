import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebDesignerComponent } from './web-designer/web-designer.component';

@NgModule({
  declarations: [
    AppComponent,
    WebDesignerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
