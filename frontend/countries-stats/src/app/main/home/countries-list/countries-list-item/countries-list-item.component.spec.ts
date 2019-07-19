import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesListItemComponent } from './countries-list-item.component';

describe('CountriesListItemComponent', () => {
  let component: CountriesListItemComponent;
  let fixture: ComponentFixture<CountriesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
