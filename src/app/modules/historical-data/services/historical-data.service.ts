import { Injectable } from '@angular/core';
import { filter, map, Observable, BehaviorSubject, Subject, take } from 'rxjs';
import { ApiResponse, ApiResponseData, ApiResponseDataElement, DatesTypeFilter } from '../interfaces/historical-data.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HistoricalDataService {

  private _lastDate!:Date;
  private _typeFilter: string = 'All';
  private _datesTypeFilter:DatesTypeFilter  = {
    filter:'FixedDate',
    date:new Date().toISOString().split('T')[0],
    lastDate:new Date().toISOString().split('T')[0]
  };
  private _baseUrl: string = "https://history.muffinlabs.com/date";
  private _pageSize:number = 10;
  private _currentPage:number = 0;
  private _historicalData$:BehaviorSubject<ApiResponseData> = new BehaviorSubject<ApiResponseData>({
    Events:[],
    Births:[],
    Deaths:[]
  });
  private _showedHistoricalData$:BehaviorSubject<ApiResponseDataElement[]> = new BehaviorSubject<ApiResponseDataElement[]>([]);

  constructor(
    private http: HttpClient
  ) {
    this.fetchBasicHistoricalData();
  }

  get previousHistoricalDataValue(){
    const value = (this._historicalData$.getValue() as any);
    return value;
  }

  get showedHistoricalData$():Observable<ApiResponseDataElement[]>{
    return this._showedHistoricalData$.asObservable();
  }

  // PAGINATION
  get pageSize():number{
    return this._pageSize;
  }

  get currentPage():number{
    return this._currentPage;
  }

  set currentPage(newCurrentPage){
    this._currentPage = newCurrentPage;
    this.recalculateShowedHistoricalData();
  }

  previousPage = ():void =>{
    this._currentPage > 0 ? this._currentPage-- : this._currentPage = 0;
    this.recalculateShowedHistoricalData();
  }

  nextPage = ():void =>{
    const totalElementsOfType = this.previousHistoricalDataValue[this.typeFilter].length;
    const maxPage =  Math.floor(totalElementsOfType / this.pageSize);
    if(this._currentPage === maxPage && this._datesTypeFilter.filter === 'AfterDate'){
      this._currentPage++;
      this.fetchNextDayHistoricalData();
      return;
    }
    this._currentPage < maxPage ? this._currentPage++ : this._currentPage = maxPage;
    this.recalculateShowedHistoricalData();
  }
  // END PAGINATION


  // TYPE_FILTER
  get typeFilter():string{
    return this._typeFilter;
  }

  set typeFilter(newTypeFilter:string){
    this.currentPage = 0;
    this._typeFilter = newTypeFilter;
    this.recalculateShowedHistoricalData();
  }
  // END TYPE_FILTER


  // DATES_FILTER
  get datesTypeFilter():DatesTypeFilter{
    return this._datesTypeFilter;
  }

  set datesTypeFilter(newDatesTypeFilter:DatesTypeFilter){
    this.currentPage = 0;
    this._datesTypeFilter = newDatesTypeFilter;
    this.fetchBasicHistoricalData();
  }

  convertDateToUrl = (date:string) => {
    this._lastDate = new Date(date);
    return date.split('-')[1]+'/'+date.split('-')[2];
  }

  calculateDateUrl = (date:string):string => {
    let url = this._baseUrl;
    url = url + '/' + this.convertDateToUrl(date);
    return url;
  }
  // END TYPE_FILTER

  recalculateShowedHistoricalData = () => {
    let  value = this.previousHistoricalDataValue[this.typeFilter];
    value = value.slice(this._currentPage*10, (this._currentPage+1)*10);
    this._showedHistoricalData$.next(value);
  }

  fetchBasicHistoricalData():void{
    const url = this.calculateDateUrl(this._datesTypeFilter.date);
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
    const dateObject = new Date(this._lastDate);
    this._lastDate = dateObject;
    const nextDay = new Date(dateObject.setDate(dateObject.getDate()+1)).toISOString().split('T')[0];
    const url = this.calculateDateUrl(nextDay);
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
