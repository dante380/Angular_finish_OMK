import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-true-calendar',
  templateUrl: './true-calendar.component.html',
  styleUrls: ['./true-calendar.component.css']
})
export class TrueCalendarComponent {

  date_expression: number = Date.now();






}


// tslint:disable-next-line:class-name
class lorem{
  dateObj = new Date();
  month = this.dateObj.getUTCMonth() + 1;
  day = this.dateObj.getUTCDate();
  year = this.dateObj.getUTCFullYear();

  newdate = this.year + this.month  + this.day;

}
