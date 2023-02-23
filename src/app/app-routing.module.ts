import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'historical-data',
    loadChildren: () => import('./modules/historical-data/historical-data.module').then(m => m.HistoricalDataModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'historical-data'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
