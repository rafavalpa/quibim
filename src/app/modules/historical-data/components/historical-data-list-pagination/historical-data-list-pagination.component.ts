import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HistoricalDataService } from '../../services/historical-data.service';

@Component({
  selector: 'app-historical-data-list-pagination',
  templateUrl: './historical-data-list-pagination.component.html',
  styleUrls: ['./historical-data-list-pagination.component.scss']
})
export class HistoricalDataListPaginationComponent implements OnInit {



  constructor(
    private historicalDataService:HistoricalDataService
  ) {}

  get pageSize():number{
    return this.historicalDataService.pageSize;
  }

  get currentPage():number{
    return this.historicalDataService.currentPage;
  }

  ngOnInit(): void {
  }

  onPreviousPage = ():void => {
    this.historicalDataService.previousPage();
  }

  onNextPage = ():void => {
    this.historicalDataService.nextPage();
  }

}
