import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryEletricityComponent } from './country-eletricity.component';

describe('CountryEletricityComponent', () => {
  let component: CountryEletricityComponent;
  let fixture: ComponentFixture<CountryEletricityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryEletricityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryEletricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
