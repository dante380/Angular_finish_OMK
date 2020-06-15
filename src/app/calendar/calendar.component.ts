import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  private appId: string;
  private appCode: string;

  public weather: any;

  public constructor(private http: HttpClient) {
    this.appId = '2YGEhjCx87uMuy4dqt6Z8A';
    this.appCode = 'g42IG6d5L1WbERx7IYcVZFrtXPIp_QZt22pT1drej27SY9OMHiVwyZVjiuyfLMa0rBawOVApHGY0hJrrB6V4nA';
    this.weather = [];
  }

  public ngOnInit() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.getWeather(position.coords);
      });
    } else {
      console.error('The browser does not support geolocation...');
    }
  }

  public getWeather(coordinates: any) {
    // tslint:disable-next-line:max-line-length
    this.http.jsonp('https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=' + coordinates.latitude + '&longitude=' + coordinates.longitude + '&app_id=' + this.appId + '&app_code=' + this.appCode, 'jsonpCallback')
      .pipe(map(result => (result as any).dailyForecasts.forecastLocation))
      .subscribe(result => {
        this.weather = result.forecast;
      }, error => {
        console.error(error);
      });
  }



}
