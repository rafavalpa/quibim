import { Injectable } from '@angular/core';
import { DatesTypeFilter } from '../../interfaces/historical-data.interfaces';
import { HistoricalDataListPaginationService } from '../historical-data-list-pagination/historical-data-list-pagination.service';

@Injectable()
export class HistoricalDataListDatesFilterService {

  private _lastDate!:Date;
  private _datesTypeFilter:DatesTypeFilter  = {
    filter:'FixedDate',
    date:new Date().toISOString().split('T')[0],
    untilDate:new Date().toISOString().split('T')[0]
  };

  constructor(
    private historicalDataListPaginationService: HistoricalDataListPaginationService
  ) { }

  // DATES_FILTER
  get datesTypeFilter():DatesTypeFilter{
    return this._datesTypeFilter;
  }

  set datesTypeFilter(newDatesTypeFilter:DatesTypeFilter){
    this.historicalDataListPaginationService.currentPage = 0;
    this._datesTypeFilter = newDatesTypeFilter;
  }

  convertDateToUrl = (date:string) => {
    this._lastDate = new Date(date);
    return date.split('-')[1]+'/'+date.split('-')[2];
  }

  calculateDateUrl = (baseUrl:string):string => {
    return baseUrl + '/' + this.convertDateToUrl(this._datesTypeFilter.date);
  }

  calculateNextDayDateUrl =  (baseUrl: string):string => {
    return this.calculateOtherDayDateUrl(baseUrl, 1);
  }

  calculatePreviousDayDateUrl =  (baseUrl: string):string => {
    return this.calculateOtherDayDateUrl(baseUrl, -1);
  }

  calculateOtherDayDateUrl = (baseUrl: string, direction:number):string => {
    this._lastDate = new Date(this._lastDate);
    const otherDay = new Date(this._lastDate.setDate(this._lastDate.getDate()+direction)).toISOString().split('T')[0];
    return baseUrl + '/' + this.convertDateToUrl(otherDay);
  }

  isLimitedDate = ():boolean => {
    const from = new Date(this._datesTypeFilter.untilDate).getTime();
    const to = this._lastDate.getTime();
    return from === to;
  }

  // END TYPE_FILTER
}
