import { Injectable } from '@angular/core';
import { ApiResponseDataElement, DatesTypeFilter } from '../../interfaces/historical-data.interfaces';
import { HistoricalDataListPaginationService } from '../historical-data-list-pagination/historical-data-list-pagination.service';

@Injectable()
export class HistoricalDataListTypeFilterService {

  private _lastDate!:Date;
  private _typeFilter: string = 'All';

  constructor(
    private historicalDataListPaginationService:HistoricalDataListPaginationService
  ) { }

  // TYPE_FILTER
  get typeFilter():string{
    return this._typeFilter;
  }

  set typeFilter(newTypeFilter:string){
    this.historicalDataListPaginationService.currentPage = 0;
    this._typeFilter = newTypeFilter;
  }

  filterByType = (data:any):ApiResponseDataElement[] =>{
    return data[this._typeFilter];
  }
  // END TYPE_FILTER
}
