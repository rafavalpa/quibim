import { Component, OnInit } from '@angular/core';
import { DatesTypeFilter } from '../../interfaces/historical-data.interfaces';
import { HistoricalDataService } from '../../services/historical-data.service';

@Component({
  selector: 'app-historical-data-list-dates-filter',
  templateUrl: './historical-data-list-dates-filter.component.html',
  styleUrls: ['./historical-data-list-dates-filter.component.scss']
})
export class HistoricalDataListDatesFilterComponent implements OnInit {

  datesTypeFilter:DatesTypeFilter = this.historicalDataService.datesTypeFilter;

  constructor(private historicalDataService: HistoricalDataService) { }

  ngOnInit(): void {

  }

  onDateChange = (value:string) =>{
    this.datesTypeFilter.date = value;
    this.updateService();
  }

  onLastDateChange = (value:string) => {
    this.datesTypeFilter.lastDate = value;
    this.updateService();
  }

  toggleDatesTypeFilter = (value:string) => {
    this.datesTypeFilter.filter = value;
    this.updateService();
  }

  updateService = () =>{
    this.historicalDataService.datesTypeFilter = this.datesTypeFilter;
  }

}
