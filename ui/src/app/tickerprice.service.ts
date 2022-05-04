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
		  "X-RapidAPI-Key": "764ab462cbmshaff14dc3297e656p1c769fjsnfc5cc00b176f"
    })
  };

  getTickerPrice(tickers: string) {

    return this.httpClient.get('https://seeking-alpha.p.rapidapi.com/market/get-realtime-prices?symbols='+tickers, this.httpOptions);
  }

}

export class Tickers {
  data!: Ticker[]
}

class Ticker {
  id!:        string;
  type!:      string;
  attributes!: Atributes
  meta!:      Meta
}

class Atributes {
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

export class Meta {

}