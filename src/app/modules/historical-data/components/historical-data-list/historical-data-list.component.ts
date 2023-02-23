import { Component, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiResponseDataElement } from '../../interfaces/historical-data.interfaces';
import { HistoricalDataService } from '../../services/historical-data.service';
import { HistoricalDataDetailComponent } from '../historical-data-detail/historical-data-detail.component';

@Component({
  selector: 'app-historical-data-list',
  templateUrl: './historical-data-list.component.html',
  styleUrls: ['./historical-data-list.component.scss'],
  providers:[ HistoricalDataService ]
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
