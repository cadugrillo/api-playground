import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatefactService } from './datefact.service';
import { TickerpriceService } from './tickerprice.service';
import { DatefactComponent } from './datefact/datefact.component';
import { TickerpriceComponent } from './tickerprice/tickerprice.component';

@NgModule({
  declarations: [
    AppComponent,
    DatefactComponent,
    TickerpriceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatefactService, TickerpriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
