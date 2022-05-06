import { Component, OnInit } from '@angular/core';
import { WforecastService, Wf3Days } from '../wforecast.service';

@Component({
  selector: 'app-wforecast',
  templateUrl: './wforecast.component.html',
  styleUrls: ['./wforecast.component.css']
})
export class WforecastComponent implements OnInit {

  response!: Wf3Days;
  location!: string;
  locationMod!: string;

  constructor(private wforecastService: WforecastService) { }

  ngOnInit(): void {
  }

  getForecast() {

    this.locationMod = this.location.replace(/ /g,"%20");

    this.wforecastService.getWeatherForecast(this.locationMod).subscribe((data) => {
      this.response = (data as Wf3Days);
      console.log(this.response);
    });
  }
}
