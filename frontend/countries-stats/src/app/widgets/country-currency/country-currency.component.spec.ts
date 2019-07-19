import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCurrencyComponent } from './country-currency.component';

describe('CountryCurrencyComponent', () => {
  let component: CountryCurrencyComponent;
  let fixture: ComponentFixture<CountryCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
