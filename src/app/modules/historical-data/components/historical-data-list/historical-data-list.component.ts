import { Component, OnInit } from '@angular/core';
import { HistoricalDataService } from '../../services/historical-data.service';

@Component({
  selector: 'app-historical-data-list',
  templateUrl: './historical-data-list.component.html',
  styleUrls: ['./historical-data-list.component.sass'],
  providers:[ HistoricalDataService ]
})
export class HistoricalDataListComponent implements OnInit {



  constructor(
    private historicalDataService: HistoricalDataService
  ) { }

  ngOnInit(): void {
  }

}
