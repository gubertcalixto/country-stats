import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryVaccinationComponent } from './country-vaccination.component';

describe('CountryVaccinationComponent', () => {
  let component: CountryVaccinationComponent;
  let fixture: ComponentFixture<CountryVaccinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryVaccinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
