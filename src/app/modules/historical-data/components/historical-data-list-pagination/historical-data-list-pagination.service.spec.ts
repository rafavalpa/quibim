import { TestBed } from '@angular/core/testing';

import { HistoricalDataListPaginationService } from './historical-data-list-pagination.service';

describe('HistoricalDataListPaginationService', () => {
  let service: HistoricalDataListPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalDataListPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
