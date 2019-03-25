import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStatsSummaryComponent } from './country-stats-summary.component';

describe('CountryStatsSummaryComponent', () => {
  let component: CountryStatsSummaryComponent;
  let fixture: ComponentFixture<CountryStatsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryStatsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStatsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
