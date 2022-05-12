import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TickerpriceService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
		  "X-RapidAPI-Key": "GET KEY AT RAPIDAPI.COM"
    })
  };

  getTickerPrice(tickers: string) {

    return this.httpClient.get('https://seeking-alpha.p.rapidapi.com/market/get-realtime-prices?symbols='+tickers, this.httpOptions);
  }

  getTickerValuation(ticker: string) {

    return this.httpClient.get('https://seeking-alpha.p.rapidapi.com/symbols/get-valuation?symbols='+ticker, this.httpOptions);
  }

}

export class Tickers {
  data!: Ticker[];
}

class Ticker {
  id!:         string;
  type!:       string;
  attributes!: Attributes;
  meta!:       Meta;
}

class Attributes {
  identifier!:                     string;
  name!:                           string;
  last!:                           number;
  change!:                         number;
  percentChange!:                  number;
  previousClose!:                  number;
  open!:                           number;
  high!:                           number;
  low!:                            number;
  volume!:                         number;
  dateTime!:                       string;
  quoteInfo!:                      string;
  close!:                          number;
  changeFromPreviousClose!:        number;
  percentChangeFromPreviousClose!: number;
  low52Week!:                      number;
  high52Week!:                     number;
  extendedHoursPrice!:             number;
  extendedHoursChange!:            number;
  extendedHoursPercentChange!:     number;
  extendedHoursDateTime!:          string;
  extendedHoursType!:              string;
  sourceAPI!:                      string;
  updated_at!:                     string;
}

class Meta {

}

export class Valuations {
  data!: TickerVal[];
}

class TickerVal {
  id!:         string;
  type!:       string;
  attributes!: ValAttributes;
}

class ValAttributes {
  marketCap!: number;
  totalEnterprise!: number;
  lastClosePriceEarningsRatio!: number;
  priceCf!: number;
  priceSales!: number;
  priceBook!: number;
  priceTangb!: number;
  evEbitda!: number;
  evSales!: number;
  evFcf!: number;
  cShare!: number;
  peRatioFwd!: number;
  pegRatio!: number;
  pegNongaapFy1!: number;
  peGaapFy1!: number;
  peNongaapFy1!: number;
  peNongaap!: number;
  evEbitdaFy1!: number;
  evSalesFy1!: number;
}
