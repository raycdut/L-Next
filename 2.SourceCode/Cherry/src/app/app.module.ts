import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebDesignerComponent } from './web-designer/web-designer.component';
import { TopNavbarComponent } from './nav/top-navbar/top-navbar.component';
import { ToolbarComponent } from './web-designer/toolbar/toolbar.component';
import { ControlSetComponent } from './web-designer/control-set/control-set.component';
import { WorkspaceComponent } from './web-designer/workspace/workspace.component';
import { PropertiesSettingComponent } from './web-designer/properties-setting/properties-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    WebDesignerComponent,
    TopNavbarComponent,
    ToolbarComponent,
    ControlSetComponent,
    WorkspaceComponent,
    PropertiesSettingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
