'use strict';

// Hours that stores are open
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm','3pm','4pm','5pm', '6pm','7pm','8pm'];

// Constructor
function Store(name,minCust,maxCust,avgCookiesPerHr) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerHr = avgCookiesPerHr;
  this.cookiesPerHrArray = [];
  this.totalCookiesSoldArray = 0;
  this.populateCookiesPerHrArray();
  this.totalCookiesPerStoreDaily();
}

// Populate array of avg customers per hour
Store.prototype.custHourly = function() {
  var randomNumOfCookiesSoldPerHour =  Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;

  return randomNumOfCookiesSoldPerHour;
};

// Popultae the cookies per hour array
Store.prototype.populateCookiesPerHrArray = function () {

  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = this.custHourly() * this.avgCookiesPerHr;
    this.cookiesPerHrArray.push(Math.ceil(hourlyCookies));
  }
  return this.cookiesPerHrArray;
};

// This will store the total number of cookies sold per store daily
Store.prototype.totalCookiesPerStoreDaily =  function() {

  var totalSales = 0;
  for(var j = 0; j < this.cookiesPerHrArray.length; j++) {
    totalSales += this.cookiesPerHrArray[j];
  }

  this.totalCookiesSoldArray = totalSales;
  return this.totalCookiesSoldArray;
};

// Initialize constructor
var firstPike = new Store('First and Pike', 23, 65, 6.3);
var seaAirport = new Store('SeaTac', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var storeArr = [firstPike, seaAirport, seaCenter, capHill, alki];





var table = document.getElementById('shell');
var data = [];

for (var i=0, i < storeArr.length; i++) {
  data.push (
    // '<td>' + storeArr[i]. + '</td>' +
    '<td>' + storeArr[i].name + '</td>' +
    '<td>' + storeArr[i].minCust + '</td>' +
    '<td>' + storeArr[i].maxCust + '</td>' +
    '<td>' + storeArr[i].avgCookiesPerHr + '</td>'
  )
}
var new_row;

for (var j = 0; j < data.length; j++) {
  new_row = document.createElement('tr');
  new_row.innerHTML = data[j];
  table.appendChild(new_row);
}

//
//   // Populate array of avg customers per hour
//   Location.prototype.custHourly = function() {
//     for (var i = 0; i < hours.length; i++) {
//       var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//       this.avgCustArr.push(custOneHour);
//     }
//   },
//
//   // Number of cookies customers buys per hour
//   Location.prototype.cooksPerCust: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.totalCooks += this.avgCustArr[j];
//     }
//
//   },
//
//   // Creates list and appends to the DOM





//   listThings: function() {
//     var container = document.createElement('table');
//     container.innerHTML = '<h3>' + this.name + '</h3>';
//     document.body.appendChild(container);
//
//     var list = document.createElement('thead');
//     var listArr = [];
//
//     for (var i = 0; i < hours.length; i++) {
//
//       if (i < 5) {
//         listArr.push('<td>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</td>');
//       } else {
//         listArr.push('<td>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</td>');
//       }
//     }
//     listArr.push('<td>Total: ' + this.totalCooks + ' cookies</td>');
//
//     var fullString = listArr.join('');
//     list.innerHTML = fullString;
//     document.body.appendChild(list);
//   }
// };
//
// firstPike.custHourly();
// firstPike.cooksPerCust();
// firstPike.listThings();
