import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HistoricalDataService } from '../../services/historical-data.service';
import { HistoricalDataListTypeFilterService } from './historical-data-list-type-filter.service';

@Component({
  selector: 'app-historical-data-list-type-filter',
  templateUrl: './historical-data-list-type-filter.component.html',
  styleUrls: ['./historical-data-list-type-filter.component.scss']
})
export class HistoricalDataListTypeFilterComponent implements OnInit {


  typeFilter:string = 'All';

  constructor(
    private historicalDataListTypeFilterService: HistoricalDataListTypeFilterService,
    private historicalDataService: HistoricalDataService
    ) { }

  ngOnInit(): void {
  }

  toggleTypeFilter = (value:string) => {
    this.typeFilter = value;
    this.historicalDataListTypeFilterService.typeFilter = this.typeFilter;
    this.historicalDataService.recalculateShowedHistoricalData();
  }

}
