import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPhonesComponent } from './country-phones.component';

describe('CountryPhonesComponent', () => {
  let component: CountryPhonesComponent;
  let fixture: ComponentFixture<CountryPhonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryPhonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
