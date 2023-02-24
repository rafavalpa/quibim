import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalDataRoutingModule } from './historical-data-routing.module';
import { HistoricalDataListComponent } from './components/historical-data-list/historical-data-list.component';
import { HistoricalDataDetailComponent } from './components/historical-data-detail/historical-data-detail.component';
import { HistoricalDataListVisualSelectorComponent } from './components/historical-data-list-visual-selector/historical-data-list-visual-selector.component';
import { HistoricalDataListPaginationComponent } from './components/historical-data-list-pagination/historical-data-list-pagination.component';
import { HistoricalDataListDatesFilterComponent } from './components/historical-data-list-dates-filter/historical-data-list-dates-filter.component';
import { FormsModule } from '@angular/forms';
import { HistoricalDataListTypeFilterComponent } from './components/historical-data-list-type-filter/historical-data-list-type-filter.component';



@NgModule({
  declarations: [
    HistoricalDataListComponent,
    HistoricalDataListVisualSelectorComponent,
    HistoricalDataListPaginationComponent,
    HistoricalDataDetailComponent,
    HistoricalDataListTypeFilterComponent,
    HistoricalDataListDatesFilterComponent
  ],
  imports: [
    CommonModule,
    HistoricalDataRoutingModule,
    FormsModule
  ]
})
export class HistoricalDataModule { }
