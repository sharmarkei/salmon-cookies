// 'use strict';
var firstandPike = {
  //Properties
  name: '1st & Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  //Array Properties
  avgCustArray: [],
  cookiesEachHourArray: [],
  totalCookies: 0, //lets us use += later
};
firstandPike.numCustHourly = function() {
  for ( var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.avgCustArray.push(singleHourCust);
  }
},
firstandPike.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalCookies += singleHourCookies;
  }
},

firstandPike.render = function() {
  var firstandPikeList = document.getElementById('firstandPikeList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesEachHourArray.length; i++) {
    var listElement4 = document.createElement('li');
    listElement4.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
    firstandPikeList.appendChild(listElement4);
  }
  var listElement1 = document.createElement('li');
  listElement1.textContent = 'Total: ' + this.totalCookies + ' cookies';
  firstandPikeList.appendChild(listElement1);
};

firstandPike.render();

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm','3pm','4pm','5pm', '6pm','7pm','8pm']
//
// var firstPike = {
//   name: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   //arrays
//   avgCusArr: [],
//   cooksPerHourArr: [],
//   totalCooks: 0,
// }; //random # of customers per hour generator
// firstPike.custHourly = function() {
//   for (i = 0; i< hours.length; i++) {
//     var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//     this.avgCusArr.push(custOneHour);
//   }
//
// }, //Cookies per Customer
// firstPike.cooksPerCust = function() {
//   this.custHourly();
//   for (i = 0; i < hours.length; i++) {
//     var cookOneHour = Math.ceil(this.avgCusArr[i] * tfihis.avgCookie);
//     this.cooksPerHourArr.push(cookOneHour);
//     this.totalCooks += cookOneHour;
//   }
// },
//
// firstPike.cooksPerCust();
//
//
//
//
//
//
//
//
// //   custPerHour: function() {
// //     var custom = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
// //     return custom;
// //   },
// //   cookiesSoldPerHour: function() {
// //     for(i = 0; i < 14; i++) {
// //       var pikePerHour = this.custPerHour(this.minCust , this.maxCust);
// //       var cookieArr = pikePerHour * this.avgCookies;
// //       this.pikePerDay.push(Math.floor(cookieArr));
// //     }
// //   }
// // }
// // firstPike.cookiesSoldPerHour();
// //
// // (firstPike.custPerHour() * firstPike.avgCookies)
//
//
//
//
// //
// // pike
//
//
// // function custPerHour(min,max) {
// //   return Math.floor(Math.random() * (max - min)) + min;
// // }
// //
// // var pikePerDay = [];
// //
// // function cookiesSoldPerHour() {
// //   for(i = 0; i < 14; i++) {
// //     var pikePerHour = custPerHour(firstPike.min , firstPike.max);
// //     pikePerDay.push(pikePerHour);
// //   }
// // }
// //
//
//
//
//
//
//
//
// var seaAirport = {
//   inCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   //arrays
//   avgCusArr: [],
//   cooksPerHourArr: [],
//   totalCooks: 0,
// }; //random # of customers per hour generator
// seaAirport.custHourly = function() {
//   for (i = 0; i< 14; i++) {
//     var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//     this.avgCusArr.push(custOneHour);
//   }
//
// }, //Cookies per Customer
// seaAirport.cooksPerCust = function() {
//   this.custHourly();
//   for (i = 0; i < 14; i++) {
//     var cookOneHour = Math.ceil(this.avgCusArr[i] * this.avgCookie);
//     this.cooksPerHourArr.push(cookOneHour);
//     this.totalCooks += cookOneHour;
//   }
// },
//
// seaAirport.cooksPerCust();
//
//
// var seaCenter = {
//   // min: 11,
//   // max: 38,
//   // avg:3.7
// };
//
// var capHill = {
//   // min: 20,
//   // max: 38,
//   // avg: 2.3
// };
//
// var alki = {
//   // min: 2,
//   // max: 16,
//   // avg: 4.6
// };
