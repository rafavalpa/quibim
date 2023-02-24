import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HistoricalDataService } from '../../services/historical-data.service';
import { HistoricalDataListDatesFilterService } from '../historical-data-list-dates-filter/historical-data-list-dates-filter.service';
import { HistoricalDataListPaginationService } from './historical-data-list-pagination.service';

@Component({
  selector: 'app-historical-data-list-pagination',
  templateUrl: './historical-data-list-pagination.component.html',
  styleUrls: ['./historical-data-list-pagination.component.scss']
})
export class HistoricalDataListPaginationComponent implements OnInit {

  constructor(
    private historicalDataListPaginationService: HistoricalDataListPaginationService,
    private historicalDataService: HistoricalDataService,
    private historicalDataListDatesFilterService:HistoricalDataListDatesFilterService
  ) {}

  get pageSize():number{
    return this.historicalDataListPaginationService.pageSize;
  }

  get currentPage():number{
    return this.historicalDataListPaginationService.currentPage;
  }

  ngOnInit(): void {
  }

  onPreviousPage = ():void => {
    this.historicalDataListPaginationService.previousPage();
    this.historicalDataService.recalculateShowedHistoricalData();
  }

  onNextPage = ():void => {
    const totalElementsOfType = this.historicalDataService.getTotalElements();

    if(this.historicalDataListPaginationService.needToRecharge(totalElementsOfType)){
      this.manageDatesFilterRecharge();
      return;
    }
    this.historicalDataListPaginationService.nextPage(totalElementsOfType);
    this.historicalDataService.recalculateShowedHistoricalData();
  }

  manageDatesFilterRecharge = ():void => {

    switch(this.historicalDataListDatesFilterService.datesTypeFilter.filter){
      case 'FixedDate':
        break;
      case 'AfterDate':
        this.historicalDataService.fetchNextDayHistoricalData();
        this.historicalDataListPaginationService.currentPage = this.historicalDataListPaginationService.currentPage + 1;
        break;
      case 'BeforeDate':
        this.historicalDataService.fetchPreviousDayHistoricalData();
        this.historicalDataListPaginationService.currentPage = this.historicalDataListPaginationService.currentPage + 1;
        break;
      case 'BetweenDates':
        if(!this.historicalDataListDatesFilterService.isLimitedDate()){
          this.historicalDataService.fetchNextDayHistoricalData();
          this.historicalDataListPaginationService.currentPage = this.historicalDataListPaginationService.currentPage + 1;
          return
        }
        alert("Has alcanzado la fecha máxima");
        break;
    }

  }

}
