import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HistoricalDataService } from '../../services/historical-data.service';

@Component({
  selector: 'app-historical-data-list-pagination',
  templateUrl: './historical-data-list-pagination.component.html',
  styleUrls: ['./historical-data-list-pagination.component.scss']
})
export class HistoricalDataListPaginationComponent implements OnInit {

  @Input() currentPage:number = 0;
  @Input() totalElements!:number;

  @Output() currentPageChange:EventEmitter<number> = new EventEmitter();

  constructor(
    private historicalDataService:HistoricalDataService
  ) {}

  get pageSize():number{
    return this.historicalDataService.pageSize;
  }

  ngOnInit(): void {
  }

  onPreviousPage = ():void => {
    this.currentPage > 0 ? this.currentPage-- : this.currentPage = 0;
    this.currentPageChange.next(this.currentPage);
  }

  onNextPage = ():void => {
    const maxPage =  Math.ceil((this.totalElements + this.pageSize - 1) / this.pageSize);
    this.currentPage < maxPage ? this.currentPage++ : this.currentPage = maxPage;
    this.currentPageChange.next(this.currentPage);
  }

}
