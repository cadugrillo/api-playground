import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatefactComponent } from './datefact/datefact.component';
import { TickerpriceComponent } from './tickerprice/tickerprice.component';
import { WforecastComponent } from './wforecast/wforecast.component';

const routes: Routes = [

  { path: 'dayfacts',component: DatefactComponent},
  { path: 'tickerprice',component: TickerpriceComponent},
  { path: 'wforecast',component: WforecastComponent},
  { path: '**', redirectTo: 'dayfacts'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
