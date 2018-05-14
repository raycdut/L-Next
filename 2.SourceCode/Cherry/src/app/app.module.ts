import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebDesignerComponent } from './web-designer/web-designer.component';
import { TopNavbarComponent } from './nav/top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WebDesignerComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
