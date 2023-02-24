import { Component, OnInit } from '@angular/core';
import { DatesTypeFilter } from '../../interfaces/historical-data.interfaces';
import { HistoricalDataService } from '../../services/historical-data.service';
import { HistoricalDataListDatesFilterService } from './historical-data-list-dates-filter.service';

@Component({
  selector: 'app-historical-data-list-dates-filter',
  templateUrl: './historical-data-list-dates-filter.component.html',
  styleUrls: ['./historical-data-list-dates-filter.component.scss']
})
export class HistoricalDataListDatesFilterComponent implements OnInit {

  datesTypeFilter:DatesTypeFilter = this.historicalDataListDatesFilterService.datesTypeFilter;

  constructor(
    private historicalDataListDatesFilterService: HistoricalDataListDatesFilterService,
    private historicalDataService: HistoricalDataService
  ) { }

  ngOnInit(): void {
    this.historicalDataService.fetchBasicHistoricalData();
  }

  onDateChange = (value:string) =>{
    this.datesTypeFilter.date = value;
    this.updateService();
  }

  onUntilDateChange = (value:string) => {
    this.datesTypeFilter.untilDate = value;
    this.updateService();
  }

  toggleDatesTypeFilter = (value:string) => {
    this.datesTypeFilter.filter = value;
    this.updateService();
  }

  updateService = () =>{
    this.historicalDataListDatesFilterService.datesTypeFilter = this.datesTypeFilter;
    this.historicalDataService.fetchBasicHistoricalData();
  }

}
