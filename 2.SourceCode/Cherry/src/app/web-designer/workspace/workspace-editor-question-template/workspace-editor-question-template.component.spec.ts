import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceEditorQuestionTemplateComponent } from './workspace-editor-question-template.component';

describe('WorkspaceEditorQuestionTemplateComponent', () => {
  let component: WorkspaceEditorQuestionTemplateComponent;
  let fixture: ComponentFixture<WorkspaceEditorQuestionTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceEditorQuestionTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceEditorQuestionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
