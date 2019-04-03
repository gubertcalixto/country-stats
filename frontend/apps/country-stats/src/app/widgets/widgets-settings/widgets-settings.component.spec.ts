import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsSettingsComponent } from './widgets-settings.component';

describe('WidgetsSettingsComponent', () => {
  let component: WidgetsSettingsComponent;
  let fixture: ComponentFixture<WidgetsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
