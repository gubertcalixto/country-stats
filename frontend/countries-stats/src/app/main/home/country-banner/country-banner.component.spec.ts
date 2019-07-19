import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBannerComponent } from './country-banner.component';

describe('CountryBannerComponent', () => {
  let component: CountryBannerComponent;
  let fixture: ComponentFixture<CountryBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
