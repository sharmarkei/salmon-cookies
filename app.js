var firstPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  hours: 14,
  avgCookies: 6.3,
  pikePerDay: [],
  custPerHour: function() {
    var custom = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    return custom;
  },
  cookiesSoldPerHour: function() {
    for(i = 0; i < 14; i++) {
      var pikePerHour = this.custPerHour(this.minCust , this.maxCust);
      var cookieArr = pikePerHour * this.avgCookies;
      this.pikePerDay.push(Math.floor(cookieArr));
      // this.pikePerDay.push(cookieArr);
    }
  }
}
firstPike.cookiesSoldPerHour();

(firstPike.custPerHour() * firstPike.avgCookies)
//
// pike


// function custPerHour(min,max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
//
// var pikePerDay = [];
//
// function cookiesSoldPerHour() {
//   for(i = 0; i < 14; i++) {
//     var pikePerHour = custPerHour(firstPike.min , firstPike.max);
//     pikePerDay.push(pikePerHour);
//   }
// }
//





coo

return pikePerHour * avg;
cookiesSoldPerHour.push

function avgCookies() {
  for(i = 0; i < this.hours=1; i++) {

  }

}
avgCookies();



var seaAirport = {
  min: 3,
  max: 24,
  avg: 1.2
};

var seaCenter = {
  min: 11,
  max: 38,
  avg:3.7
};

var capHill = {
  min: 20,
  max: 38,
  avg: 2.3
};

var alki = {
  min: 2,
  max: 16,
  avg: 4.6
};
