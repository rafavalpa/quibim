import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDataListTypeFilterComponent } from './historical-data-list-type-filter.component';

describe('HistoricalDataListTypeFilterComponent', () => {
  let component: HistoricalDataListTypeFilterComponent;
  let fixture: ComponentFixture<HistoricalDataListTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalDataListTypeFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDataListTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
