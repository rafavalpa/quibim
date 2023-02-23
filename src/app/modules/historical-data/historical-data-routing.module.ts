import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricalDataListComponent } from './components/historical-data-list/historical-data-list.component';

const routes: Routes = [
  {
    path: '',
    component: HistoricalDataListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricalDataRoutingModule { }
