import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalDataRoutingModule } from './historical-data-routing.module';
import { HistoricalDataListComponent } from './components/historical-data-list/historical-data-list.component';
import { HistoricalDataDetailComponent } from './components/historical-data-detail/historical-data-detail.component';
import { HistoricalDataListFilterComponent } from './components/historical-data-list-filter/historical-data-list-filter.component';
import { HistoricalDataListVisualSelectorComponent } from './components/historical-data-list-visual-selector/historical-data-list-visual-selector.component';
import { HistoricalDataListPaginationComponent } from './components/historical-data-list-pagination/historical-data-list-pagination.component';



@NgModule({
  declarations: [
    HistoricalDataListComponent,
    HistoricalDataListFilterComponent,
    HistoricalDataListVisualSelectorComponent,
    HistoricalDataListPaginationComponent
  ],
  imports: [
    CommonModule,
    HistoricalDataRoutingModule,
  ]
})
export class HistoricalDataModule { }
