import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignerComponent } from './web-designer.component';

describe('WebDesignerComponent', () => {
  let component: WebDesignerComponent;
  let fixture: ComponentFixture<WebDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
