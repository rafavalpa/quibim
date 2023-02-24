import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HistoricalDataService } from '../../services/historical-data.service';

@Component({
  selector: 'app-historical-data-list-type-filter',
  templateUrl: './historical-data-list-type-filter.component.html',
  styleUrls: ['./historical-data-list-type-filter.component.scss']
})
export class HistoricalDataListTypeFilterComponent implements OnInit {


  typeFilter:string = this.historicalDataService.typeFilter;

  constructor(private historicalDataService: HistoricalDataService) { }

  ngOnInit(): void {
  }


  toggleTypeFilter = (value:string) => {
    this.typeFilter = value;
    this.historicalDataService.typeFilter = value;
  }

}
