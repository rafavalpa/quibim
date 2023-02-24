import { TestBed } from '@angular/core/testing';

import { HistoricalDataListTypeFilterService } from './historical-data-list-type-filter.service';

describe('HistoricalDataListTypeFilterService', () => {
  let service: HistoricalDataListTypeFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalDataListTypeFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
