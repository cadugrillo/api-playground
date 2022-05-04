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
  console.log(this.tickersMod);

  this.tickerpriceService.getTickerPrice(this.tickers).subscribe((data) => {
    console.log(data);
    this.response = (data as Tickers);
    console.log(this.response);
    console.log(this.response.data[0].id);
  });

}
}
