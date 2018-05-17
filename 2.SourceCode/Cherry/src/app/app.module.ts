import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { CommonTemplateComponent } from './web-designer/control-set/common-template/common-template.component';
import { WorkspaceEditorComponent } from './web-designer/workspace/workspace-editor/workspace-editor.component';
// tslint:disable-next-line:max-line-length
import { WorkspaceEditorQuestionTemplateComponent } from './web-designer/workspace/workspace-editor-question-template/workspace-editor-question-template.component';

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
    DynamicComponentHostDirective,
    CommonTemplateComponent,
    WorkspaceEditorComponent,
    WorkspaceEditorQuestionTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    ComQuestionComponent,
    ComQuestionTextComponent,
    ComGpQuestionTextComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
