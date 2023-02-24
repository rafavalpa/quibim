import { TestBed } from '@angular/core/testing';

import { HistoricalDataListDatesFilterService } from './historical-data-list-dates-filter.service';

describe('HistoricalDataListDatesFilterService', () => {
  let service: HistoricalDataListDatesFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalDataListDatesFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
