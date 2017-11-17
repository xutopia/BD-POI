import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsFilterComponent } from './results-filter.component';

describe('ResultsFilterComponent', () => {
  let component: ResultsFilterComponent;
  let fixture: ComponentFixture<ResultsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
