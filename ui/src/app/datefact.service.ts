import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatefactService {
  day!   : number;
  month! : number;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
		  "X-RapidAPI-Key": "GET KEY AT RAPIDAPI.COM"
    })
  };

  getDateFact() {

    this.month = (new Date().getMonth() +1)
    this.day   = new Date().getDate()

    return this.httpClient.get('https://numbersapi.p.rapidapi.com/'+this.month+'/'+this.day+'/date?fragment=true&json=true',this.httpOptions);
  }

}

export class DateFact {
  text!:  string;
  year!:  number;
  found!: boolean;
  type!:  string;
}

