import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComQuestionComponent } from './com-question.component';

describe('ComQuestionComponent', () => {
  let component: ComQuestionComponent;
  let fixture: ComponentFixture<ComQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
