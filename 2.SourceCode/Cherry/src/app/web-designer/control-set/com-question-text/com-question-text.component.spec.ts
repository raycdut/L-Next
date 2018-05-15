import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComQuestionTextComponent } from './com-question-text.component';

describe('ComQuestionTextComponent', () => {
  let component: ComQuestionTextComponent;
  let fixture: ComponentFixture<ComQuestionTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComQuestionTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComQuestionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
