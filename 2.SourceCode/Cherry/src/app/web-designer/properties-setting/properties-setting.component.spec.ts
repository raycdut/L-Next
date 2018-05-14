import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesSettingComponent } from './properties-setting.component';

describe('PropertiesSettingComponent', () => {
  let component: PropertiesSettingComponent;
  let fixture: ComponentFixture<PropertiesSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
