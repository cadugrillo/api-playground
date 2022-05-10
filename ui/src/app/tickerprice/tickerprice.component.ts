import { Component, OnInit } from '@angular/core';
import { TickerpriceService, Tickers, Valuations } from '../tickerprice.service';

@Component({
  selector: 'app-tickerprice',
  templateUrl: './tickerprice.component.html',
  styleUrls: ['./tickerprice.component.css']
})
export class TickerpriceComponent implements OnInit {

  response!:   Tickers;
  valuation!:  Valuations;
  tickers!:    string;
  tickersMod!: string

  constructor(private tickerpriceService: TickerpriceService) { }

  ngOnInit(): void {
  }

  getTickerPrice() {

    this.tickersMod = this.tickers.replace(/,/g,"%2C");
  
    this.tickerpriceService.getTickerPrice(this.tickersMod).subscribe((data) => {
      this.response = (data as Tickers);
    });
  }

  getTickerValuation(ticker: string) {

    this.tickerpriceService.getTickerValuation(ticker).subscribe((data) => {
      this.valuation = (data as Valuations);
    });
    
  }
}
