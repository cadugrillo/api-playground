import { Component, OnInit } from '@angular/core';
import { TickerpriceService, Tickers } from '../tickerprice.service';

@Component({
  selector: 'app-tickerprice',
  templateUrl: './tickerprice.component.html',
  styleUrls: ['./tickerprice.component.css']
})
export class TickerpriceComponent implements OnInit {

  response!:   Tickers;
  tickers!:    string;
  tickersMod!: string

  constructor(private tickerpriceService: TickerpriceService) { }

  ngOnInit(): void {
  }

getTickerPrice() {

  this.tickersMod = this.tickers.replace(/,/g,"%2C");
  
  this.tickerpriceService.getTickerPrice(this.tickers).subscribe((data) => {
    this.response = (data as Tickers);
  });

}
}
