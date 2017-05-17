'use strict';

var form = document.getElementById('stores_form'); //table body
var table = document.getElementById('shell');

var data =[];
// Hours that stores are open
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm','3pm','4pm','5pm', '6pm','7pm','8pm'];

// Constructor
function Store(name,minCust,maxCust,avgCookiesPerHr) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerHr = avgCookiesPerHr;
  this.cookiesPerHrArray = ['<td>' + name + '</td>'];
  // this.totalCookiesSoldArray = 0;
  // this.salesGen();
  // this.totalCookiesPerStoreDaily();
}
// Populate array of avg customers per hour
Store.prototype.custHourly = function() {
  var randomNumOfCookiesSoldPerHour =  Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;

  return randomNumOfCookiesSoldPerHour;
};

// Popultae the cookies per hour array
Store.prototype.salesGen = function () {
  var total = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.custHourly() * this.avgCookiesPerHr);
    this.cookiesPerHrArray.push('<td>' + hourlyCookies + '</td>');
    total += hourlyCookies;
  }
  this.cookiesPerHrArray.push('<td>' + total + '</td>');
};

//
Store.prototype.render = function() {
  var tableRow = document.createElement('tr');
  console.log(tableRow);
  tableRow.innerHTML = this.cookiesPerHrArray.join('');
  table.appendChild(tableRow);
};

// This will store the total number of cookies sold per store daily


// Initialize constructor
var firstPike = new Store('First and Pike', 23, 65, 6.3);
var seaAirport = new Store('SeaTac', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var storeArr = [firstPike, seaAirport, seaCenter, capHill, alki];

function renderStores() {
  for (var i = 0; i < storeArr.length; i++) {
    storeArr[i].salesGen();
    storeArr[i].render();
  }
}

renderStores();






//gather data function
function formData(event) {
  event.preventDefault();
 //looking for value attributes
  var name = parseInt(event.target.name.value);
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.taget.maxCust.value);
  var avgCookies = parseInt(event.target.avgCookiesPerHr.value);

  var sharmarke = new Store(name,minCust,maxCust);
  createTable();
  form.reset();
}

function createTable() {
  var row;
  //loop thru my data array, then
  for (var i = 0; i < data.length; i++) {
    row = document.createElement('tr');
    row.innerHTML ='<td>' + data[i].first +'</td>' +
    '<td>' + data[i].name + '</td>' +
    '<td>' + data[i].minCust + '</td>' +
    '<td>' + data[i].maxCust + '</td>' +
    '<td>' + storeArr[i].avgCookiesPerHr + '</td>';
  }
  //finds table and added new row with all the <td>'s'
  table.appendChild(row);
}

form.addEventListener('submit', formData);


// listStoreInTable = function() {
//   var container = document.createElement('table');
//   container.innerHTML = '<thead></thead>';
//   document.body.appendChild(container);
//
//   var list = document.createElement('tbody');
//   var listArr = [];
//
//   for (var i = 0; i < hours.length; i++) {
//
//     listArr.push('<td>' + hours[i] + ':' + this.cookiesPerHrArray[i] + ' cookies</td>');
//   }
//
//   var fullString = listArr.join('');
//   list.innerHTML = fullString;
//   document.body.appendChild(list);
// };



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
