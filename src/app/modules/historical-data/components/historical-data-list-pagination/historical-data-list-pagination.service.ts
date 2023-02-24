import { Injectable } from '@angular/core';
import { ApiResponseDataElement } from '../../interfaces/historical-data.interfaces';
import { HistoricalDataService } from '../../services/historical-data.service';

@Injectable()
export class HistoricalDataListPaginationService {

  private _pageSize:number = 10;
  private _currentPage:number = 0;

  constructor(
  ) { }

  // PAGINATION
  get pageSize():number{
    return this._pageSize;
  }

  get currentPage():number{
    return this._currentPage;
  }

  set currentPage(newCurrentPage){
    this._currentPage = newCurrentPage;
  }

  filterByPage = (data:ApiResponseDataElement[]):ApiResponseDataElement[] => {
    return data.slice(this._currentPage*10, (this._currentPage+1)*10);
  }

  previousPage = ():void =>{
    this._currentPage > 0 ? this._currentPage-- : this._currentPage = 0;
  }

  needToRecharge = (totalElementsOfType:number):boolean =>{
    const maxPage =  Math.floor(totalElementsOfType / this.pageSize);
    return this._currentPage === maxPage -1;
  }

  nextPage = (totalElementsOfType:number):void =>{
    const maxPage =  Math.floor(totalElementsOfType / this.pageSize);
    this._currentPage === maxPage ? this._currentPage = maxPage : this._currentPage++;
  }
  // END PAGINATION
}
