import { Component, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiResponseDataElement } from '../../interfaces/historical-data.interfaces';
import { HistoricalDataService } from '../../services/historical-data.service';
import { HistoricalDataDetailComponent } from '../historical-data-detail/historical-data-detail.component';
import { HistoricalDataListDatesFilterService } from '../historical-data-list-dates-filter/historical-data-list-dates-filter.service';
import { HistoricalDataListPaginationService } from '../historical-data-list-pagination/historical-data-list-pagination.service';
import { HistoricalDataListTypeFilterService } from '../historical-data-list-type-filter/historical-data-list-type-filter.service';

@Component({
  selector: 'app-historical-data-list',
  templateUrl: './historical-data-list.component.html',
  styleUrls: ['./historical-data-list.component.scss'],
  providers:[
    HistoricalDataService,
    HistoricalDataListDatesFilterService,
    HistoricalDataListPaginationService,
    HistoricalDataListTypeFilterService
  ]
})
export class HistoricalDataListComponent implements OnInit {

  showedHistoricalData!: ApiResponseDataElement[];
  visualSelector:string = 'list';
  subs:Subscription[] = [];
  @ViewChild(HistoricalDataDetailComponent) modalDetails!: HistoricalDataDetailComponent

  constructor(
    private historicalDataService: HistoricalDataService
  ) { }

  ngOnInit(): void {
    this.subs.push(this.historicalDataService.showedHistoricalData$.subscribe((response)=>{
      this.showedHistoricalData = response;
    }));
  }

  onSelectElement = (element:ApiResponseDataElement):void => {
    this.modalDetails.open(element);
  }

  ngOnDestroy(){
    this.subs.map((eachSub)=> eachSub.unsubscribe());
  }

}
