import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebDesignerComponent } from './web-designer/web-designer.component';
import { TopNavbarComponent } from './nav/top-navbar/top-navbar.component';
import { ToolbarComponent } from './web-designer/toolbar/toolbar.component';
import { ControlSetComponent } from './web-designer/control-set/control-set.component';
import { WorkspaceComponent } from './web-designer/workspace/workspace.component';
import { PropertiesSettingComponent } from './web-designer/properties-setting/properties-setting.component';
import { ComQuestionComponent } from './web-designer/control-set/com-question/com-question.component';
import { ComQuestionTextComponent } from './web-designer/control-set/com-question-text/com-question-text.component';
import { ComGpQuestionTextComponent } from './web-designer/control-set/com-gp-question-text/com-gp-question-text.component';
import { DynamicComponentHostDirective } from './common/directives/dynamic-component-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    WebDesignerComponent,
    TopNavbarComponent,
    ToolbarComponent,
    ControlSetComponent,
    WorkspaceComponent,
    PropertiesSettingComponent,
    ComQuestionComponent,
    ComQuestionTextComponent,
    ComGpQuestionTextComponent,
    DynamicComponentHostDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    ComQuestionComponent,
    ComQuestionTextComponent,
    ComGpQuestionTextComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
