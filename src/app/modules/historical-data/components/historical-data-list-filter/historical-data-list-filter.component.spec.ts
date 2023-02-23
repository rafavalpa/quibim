import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDataListFilterComponent } from './historical-data-list-filter.component';

describe('HistoricalDataListFilterComponent', () => {
  let component: HistoricalDataListFilterComponent;
  let fixture: ComponentFixture<HistoricalDataListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalDataListFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDataListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
