import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComGpQuestionTextComponent } from './com-gp-question-text.component';

describe('ComGpQuestionTextComponent', () => {
  let component: ComGpQuestionTextComponent;
  let fixture: ComponentFixture<ComGpQuestionTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComGpQuestionTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComGpQuestionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
