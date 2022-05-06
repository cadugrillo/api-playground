import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WforecastService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		  "X-RapidAPI-Key": "764ab462cbmshaff14dc3297e656p1c769fjsnfc5cc00b176f"
    })
  };

  getWeatherForecast(location: string){

    return this.httpClient.get('https://weatherapi-com.p.rapidapi.com/forecast.json?q='+location+'&days=3', this.httpOptions);
  }
}


export class Wf3Days {
  location!: Wlocation;
  current!:  Wcurrent;
  forecast!: Wforecast;
}

class Wlocation {
  name!:            string;
  region!:          string;
  country!:         string;
  lat!:             number;
  lon!:             number;
  tz_id!:           string;
  localtime_epoch!: number;
  localtime!:       string;
}

class Wcurrent {
  last_updated_epoch!: number;
  last_updated!: string;
  temp_c!: number;
  temp_f!: number;
  is_day!: number;
  condition!: Condition;
  wind_mph!: number;
  wind_kph!: number;
  wind_degree!: number;
  wind_dir!: string;
  pressure_mb!: number;
  pressure_in!: number;
  precip_mm!: number;
  precip_in!: number;
  humidity!: number;
  cloud!: number;
  feelslike_c!: number;
  feelslike_f!: number;
  vis_km!: number;
  vis_miles!: number;
  uv!: number;
  gust_mph!: number;
  gust_kph!: number;
}

class Condition {
  text!: string;
  icon!: string;
  code!: number;
}

class Wforecast {
  //forecast!: Forecastday;
  forecastday!: Fday[];
}

class Forecastday {
  forecastday!: Fday[];
}

class Fday {
  date!: string;
  date_epoch!: string;
  day!: Day;
  astro!: Astro;
  hour!: Hour[];
}

class Day {
  maxtemp_c!: number;
  maxtemp_f!: number;
  mintemp_c!: number;
  mintemp_f!: number;
  avgtemp_c!: number;
  avgtemp_f!: number;
  maxwind_mph!: number;
  maxwind_kph!: number;
  totalprecip_mm!: number;
  totalprecip_in!: number;
  avgvis_km!: number;
  avgvis_miles!: number;
  avghumidity!: number;
  daily_will_it_rain!: number;
  daily_chance_of_rain!: number;
  daily_will_it_snow!: number;
  daily_chance_of_snow!: number;
  condition!: Condition;
  uv!: number;
}

class Astro {
  sunrise!: string;
  sunset!: string;
  moonrise!: string;
  moonset!: string;
  moon_phase!: string;
  moon_illumination!: string;
}

class Hour {
  time_epoch!: number;
  time!: string;
  temp_c!: number;
  temp_f!: number;
  is_day!: number;
  condition!: Condition;
  wind_mph!: number;
  wind_kph!: number;
  wind_degree!: number;
  wind_dir!: string;
  pressure_mb!: number;
  pressure_in!: number;
  precip_mm!: number;
  precip_in!: number;
  humidity!: number;
  cloud!: number;
  feelslike_c!: number;
  feelslike_f!: number;
  windchill_c!: number;
  windchill_f!: number;
  heatindex_c!: number;
  heatindex_f!: number;
  dewpoint_c!: number;
  dewpoint_f!: number;
  will_it_rain!: number;
  chance_of_rain!: number;
  will_it_snow!: number;
  chance_of_snow!: number;
  vis_km!: number;
  vis_miles!: number;
  gust_mph!: number;
  gust_kph!: number;
  uv!: number;
}