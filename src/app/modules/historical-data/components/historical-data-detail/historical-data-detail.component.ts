import { Component, OnInit, Input } from '@angular/core';
import { ApiResponseDataElement } from '../../interfaces/historical-data.interfaces';

@Component({
  selector: 'app-historical-data-detail',
  templateUrl: './historical-data-detail.component.html',
  styleUrls: ['./historical-data-detail.component.scss']
})
export class HistoricalDataDetailComponent implements OnInit {

  @Input() detailInfo!: ApiResponseDataElement;
  @Input() isShowingDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  open = (element: ApiResponseDataElement):void => {
    this.detailInfo = element;
    this.isShowingDetails = true;
  }

  close = ():void => {
    this.isShowingDetails = false;
  }

  onCloseModal = ():void => {
    this.close();
  }

  onEvent(event:Event) {
    event.stopPropagation();
  }





}
