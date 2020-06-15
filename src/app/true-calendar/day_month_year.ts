// tslint:disable-next-line:class-name
class lorem{
   dateObj = new Date();
   month = this.dateObj.getUTCMonth() + 1;
   day = this.dateObj.getUTCDate();
   year = this.dateObj.getUTCFullYear();

   newdate = this.year + this.month  + this.day;

}
