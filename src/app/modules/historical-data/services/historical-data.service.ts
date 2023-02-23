import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse, ApiResponseData, ApiResponseDataElement } from '../interfaces/historical-data.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HistoricalDataService {

  typeFilter: string = 'All';
  private baseUrl: string = "https://history.muffinlabs.com/date";
  pageSize:number = 10;

  constructor(
    private http: HttpClient
  ) { }

  getHistoricalData(): Observable<ApiResponseData> {
    return this.http.get<ApiResponse>(this.baseUrl)
      .pipe(
        map((response:ApiResponse)=> response.data),
        map((data:ApiResponseData)=>
          {
            data.All = Array.prototype.concat.apply([], [data.Births, data.Deaths, data.Events])
              .sort((a,b)=> parseInt(a.year) > parseInt(b.year)  ? 1 : -1);
            return data
          }
        )
      );
  }

}
