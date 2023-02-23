import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-historical-data-list-visual-selector',
  templateUrl: './historical-data-list-visual-selector.component.html',
  styleUrls: ['./historical-data-list-visual-selector.component.scss']
})
export class HistoricalDataListVisualSelectorComponent implements OnInit {

  @Input() visualSelector:string = 'list';
  @Output() visualSelectorChange:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleVisualSelector = (value:string) => {
    this.visualSelector = value;
    this.visualSelectorChange.emit(value);
  }

}
