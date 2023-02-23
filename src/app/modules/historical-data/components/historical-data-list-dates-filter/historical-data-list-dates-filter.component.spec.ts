import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDataListDatesFilterComponent } from './historical-data-list-dates-filter.component';

describe('HistoricalDataListDatesFilterComponent', () => {
  let component: HistoricalDataListDatesFilterComponent;
  let fixture: ComponentFixture<HistoricalDataListDatesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalDataListDatesFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDataListDatesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
