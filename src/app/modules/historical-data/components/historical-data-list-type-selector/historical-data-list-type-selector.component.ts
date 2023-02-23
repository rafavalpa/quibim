import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HistoricalDataService } from '../../services/historical-data.service';

@Component({
  selector: 'app-historical-data-list-type-selector',
  templateUrl: './historical-data-list-type-selector.component.html',
  styleUrls: ['./historical-data-list-type-selector.component.scss']
})
export class HistoricalDataListTypeSelectorComponent implements OnInit {


  typeSelector:string = this.historicalDataService.typeFilter;

  constructor(private historicalDataService: HistoricalDataService) { }

  ngOnInit(): void {
  }


  toggleTypeSelector = (value:string) => {
    this.typeSelector = value;
    this.historicalDataService.typeFilter = value;
  }

}
