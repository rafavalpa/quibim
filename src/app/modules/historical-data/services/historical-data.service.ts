import { Injectable } from '@angular/core';
import { filter, map, Observable, BehaviorSubject, Subject, take } from 'rxjs';
import { ApiResponse, ApiResponseData, ApiResponseDataElement, DatesTypeFilter } from '../interfaces/historical-data.interfaces';
import { HttpClient } from '@angular/common/http';
import { HistoricalDataListDatesFilterService } from '../components/historical-data-list-dates-filter/historical-data-list-dates-filter.service';
import { HistoricalDataListPaginationService } from '../components/historical-data-list-pagination/historical-data-list-pagination.service';
import { HistoricalDataListTypeFilterService } from '../components/historical-data-list-type-filter/historical-data-list-type-filter.service';

@Injectable()
export class HistoricalDataService {

  private _baseUrl: string = "https://history.muffinlabs.com/date";
  private _historicalData$:BehaviorSubject<ApiResponseData> = new BehaviorSubject<ApiResponseData>({
    Events:[],
    Births:[],
    Deaths:[]
  });
  private _showedHistoricalData$:BehaviorSubject<ApiResponseDataElement[]> = new BehaviorSubject<ApiResponseDataElement[]>([]);

  constructor(
    private http: HttpClient,
    private historicalDataListDatesFilterService:HistoricalDataListDatesFilterService,
    private historicalDataListTypeFilterService:HistoricalDataListTypeFilterService,
    private historicalDataListPaginationService:HistoricalDataListPaginationService
  ) {}

  get showedHistoricalData$():Observable<ApiResponseDataElement[]>{
    return this._showedHistoricalData$.asObservable();
  }

  getTotalElements = ():number =>{
    return this.historicalDataListTypeFilterService.filterByType(this._historicalData$.getValue()).length;
  }

  recalculateShowedHistoricalData = () => {
    const typedData = this.historicalDataListTypeFilterService.filterByType(this._historicalData$.getValue());
    const paginatedData = this.historicalDataListPaginationService.filterByPage(typedData)
    this._showedHistoricalData$.next(paginatedData);
  }

  fetchBasicHistoricalData():void{
    const url = this.historicalDataListDatesFilterService.calculateDateUrl(this._baseUrl);
    this.http.get<ApiResponse>(url)
      .pipe(
        map((response:ApiResponse)=> response.data),
        map((data:ApiResponseData)=>
          {
            data.All = Array.prototype.concat.apply([], [data.Births, data.Deaths, data.Events])
              .sort((a,b)=> parseInt(a.year) > parseInt(b.year)  ? 1 : -1);
            return data;
          }
        )
      )
      .subscribe((currentData)=>{
        this._historicalData$.next(currentData);
        this.recalculateShowedHistoricalData();
      });
  }

  fetchNextDayHistoricalData():void{
    const url = this.historicalDataListDatesFilterService.calculateNextDayDateUrl(this._baseUrl);
    this.fetchOtherDayHistoricalData(url);
  }

  fetchPreviousDayHistoricalData():void{
    const url = this.historicalDataListDatesFilterService.calculatePreviousDayDateUrl(this._baseUrl);
    this.fetchOtherDayHistoricalData(url);
  }


  fetchOtherDayHistoricalData(url:string):void{
    this.http.get<ApiResponse>(url)
      .pipe(
        map((response:ApiResponse)=> response.data),
        map((data:ApiResponseData)=>
          {
            data.All = Array.prototype.concat.apply([], [data.Births, data.Deaths, data.Events])
              .sort((a,b)=> parseInt(a.year) > parseInt(b.year)  ? 1 : -1);
            return data;
          }
        )
      )
      .subscribe((currentData)=>{
        const lastValues = this._historicalData$.getValue();
        const mergedValues:ApiResponseData = {
          Births: lastValues.Births.concat(currentData.Births),
          Events: lastValues.Events.concat(currentData.Events),
          Deaths: lastValues.Deaths.concat(currentData.Deaths),
          All: (lastValues.All || []).concat(currentData.All || [])
        }
        this._historicalData$.next(mergedValues);
        this.recalculateShowedHistoricalData();
      });
  }

}

