import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatefactService } from './datefact.service';
import { TickerpriceService } from './tickerprice.service';
import { DatefactComponent } from './datefact/datefact.component';
import { TickerpriceComponent } from './tickerprice/tickerprice.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WforecastService } from './wforecast.service';
import { WforecastComponent } from './wforecast/wforecast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DatefactComponent,
    TickerpriceComponent,
    WforecastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [DatefactService, TickerpriceService, WforecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
