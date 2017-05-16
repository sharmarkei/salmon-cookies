'use strict';

//
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm','3pm','4pm','5pm', '6pm','7pm','8pm'];

//
var firstPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerHr: 6.3,
  avgCustArr: [],
  cooksPerHourArr: [],
  totalCooks: 0,

  // Populate array of avg customers per hour
  custHourly: function() {

    for (var i = 0; i < hours.length; i++) {
      var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      this.avgCustArr.push(custOneHour);
    }
  },

  // Number of cookies customers buys per hour
  cooksPerCust: function() {
    // this.custHourly();
    for (var j = 0; j < hours.length; j++) {
      this.totalCooks += this.avgCustArr[j];
    }

  },

  // Creates list and appends to the DOM
  listThings: function() {
    var container = document.createElement('div');
    container.innerHTML = '<h3>' + this.name + '</h3>';
    document.body.appendChild(container);

    var list = document.createElement('ul');
    var listArr = [];

    for (var i = 0; i < hours.length; i++) {

      if (i < 5) {
        listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');
      } else {
        listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');

      }
    }

    listArr.push('<li>Total: ' + this.totalCooks + ' cookies</li>');

    var fullString = listArr.join('');
    list.innerHTML = fullString;
    document.body.appendChild(list);
  }
};

firstPike.custHourly();
firstPike.cooksPerCust();
firstPike.listThings();







//   custPerHour: function() {
//     var custom = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
//     return custom;
//   },
//   cookiesSoldPerHour: function() {
//     for(i = 0; i < 14; i++) {
//       var pikePerHour = this.custPerHour(this.minCust , this.maxCust);
//       var cookieArr = pikePerHour * this.avgCookiesPerHrs;
//       this.pikePerDay.push(Math.floor(cookieArr));
//     }
//   }
// }
// firstPike.cookiesSoldPerHour();
//
// (firstPike.custPerHour() * firstPike.avgCookiesPerHrs)




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



//
//
//
//
// var seaAirport = {
//   name: 'SeaTac Airport'
//   minCust: 3,
//   maxCust: 24,
//   avgCookiesPerHr: 1.2,
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
//     var cookOneHour = Math.ceil(this.avgCusArr[i] * this.avgCookiesPerHr);
//     this.cooksPerHourArr.push(cookOneHour);
//     this.totalCooks += cookOneHour;
//   }
// },
//
// seaAirport.cooksPerCust();
//
//
// var seaCenter = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesPerHr: 3.7,
//   //arrays
//   avgCusArr: [],
//   cooksPerHourArr: [],
//   totalCooks: 0,
// }; //random # of customers per hour generator
// seaCenter.custHourly = function() {
//   for (i = 0; i< hours.length; i++) {
//     var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//     this.avgCusArr.push(custOneHour);
//   }
//
// }, //Cookies per Customer
// seaCenter.cooksPerCust = function() {
//   this.custHourly();
//   for (i = 0; i < hours.length; i++) {
//     var cookOneHour = Math.ceil(this.avgCusArr[i] * this.avgCookiesPerHr);
//     this.cooksPerHourArr.push(cookOneHour);
//     this.totalCooks += cookOneHour;
//   }
// },
//
// seaCenter.cooksPerCust();
//
// };
//
// var capHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookiesPerHr: 2.3,
//   //arrays
//   avgCusArr: [],
//   cooksPerHourArr: [],
//   totalCooks: 0,
// }; //random # of customers per hour generator
// capHill.custHourly = function() {
//   for (i = 0; i< hours.length; i++) {
//     var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//     this.avgCusArr.push(custOneHour);
//   }
//
// }, //Cookies per Customer
// capHill.cooksPerCust = function() {
//   this.custHourly();
//   for (i = 0; i < hours.length; i++) {
//     var cookOneHour = Math.ceil(this.avgCusArr[i] * this.avgCookiesPerHr);
//     this.cooksPerHourArr.push(cookOneHour);
//     this.totalCooks += cookOneHour;
//   }
// },
//
// capHill.cooksPerCust();
// };
//
// var alki = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesPerHr: 4.6,
//   //arrays
//   avgCusArr: [],
//   cooksPerHourArr: [],
//   totalCooks: 0,
// }; //random # of customers per hour generator
// alki.custHourly = function() {
//   for (i = 0; i< hours.length; i++) {
//     var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//     this.avgCusArr.push(custOneHour);
//   }
//
// }, //Cookies per Customer
// alki.cooksPerCust = function() {
//   this.custHourly();
//   for (i = 0; i < hours.length; i++) {
//     var cookOneHour = Math.ceil(this.avgCusArr[i] * this.avgCookiesPerHr);
//     this.cooksPerHourArr.push(cookOneHour);
//     this.totalCooks += cookOneHour;
//   }
// },
//
// alki.cooksPerCust();
// };
