import { Component, OnInit, ViewChild} from '@angular/core';
import { ApiResponse, ApiResponseData, ApiResponseDataElement } from '../../interfaces/historical-data.interfaces';
import { HistoricalDataService } from '../../services/historical-data.service';
import { HistoricalDataDetailComponent } from '../historical-data-detail/historical-data-detail.component';

@Component({
  selector: 'app-historical-data-list',
  templateUrl: './historical-data-list.component.html',
  styleUrls: ['./historical-data-list.component.scss'],
  providers:[ HistoricalDataService ]
})
export class HistoricalDataListComponent implements OnInit {

  historicalData!: ApiResponseData;
  visualSelector:string = 'list';
  currentPage:number = 0;
  @ViewChild(HistoricalDataDetailComponent) modalDetails!: HistoricalDataDetailComponent

  constructor(
    private historicalDataService: HistoricalDataService
  ) { }

  get pageSize():number{
    return this.historicalDataService.pageSize;
  }

  ngOnInit(): void {
    this.historicalDataService.getHistoricalData().subscribe((response)=>{
      this.historicalData = response;
    })
  }


  getCurrentTotal = ():number => {
    return this.historicalData.All?.length || 0;
  }

  onSelectElement = (element:ApiResponseDataElement):void => {
    this.modalDetails.open(element);
  }

}
