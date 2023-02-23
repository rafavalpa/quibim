import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDataListPaginationComponent } from './historical-data-list-pagination.component';

describe('HistoricalDataListPaginationComponent', () => {
  let component: HistoricalDataListPaginationComponent;
  let fixture: ComponentFixture<HistoricalDataListPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalDataListPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDataListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
