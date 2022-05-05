import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatefactComponent } from './datefact/datefact.component';
import { TickerpriceComponent } from './tickerprice/tickerprice.component';

const routes: Routes = [

  { path: 'dayfacts',component: DatefactComponent},
  { path: 'tickerprice',component: TickerpriceComponent},
  { path: '**', redirectTo: 'dayfacts'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
