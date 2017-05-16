'use strict';

//
var hours = 14

function Location(name,minCust,maxCust,avgCookiesPerHr) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerHr = avgCookiesPerHr;
}

var firstPike = new Location ('First and Pike', 23, 65, 6.3);
var seaAirport = new Location ('SeaTac', 3, 24, 1.2);
var seaCenter = new Location ('Seattle Center', 11, 38, 3.7);
var capHill = new Location ('Capitol Hill', 20, 38, 2.3);
var alki = new Location ('Alki', 2, 16, 4.6);

var store = [firstPike, seaAirport, seaCenter, capHill, alki];

// Populate array of avg customers per hour
Location.prototype.custHourly = function() {
  var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  this.avgCustArr;
  return custOneHour;
}


// Number of cookies customers buys per hour
Location.prototype.cooksPerHour = function() {
  var hourlyCooksSold = [];
  for (var i = 0; i < 14; i++) {
    var sales = this.custHourly * this.avgCustArr[i];
    hourlyCooksSold.push(Math.ceil(sales));
  }

  var totalSales = 0;
  for (var j=0; j<14; j++) {
    totalSales = hourlyCooksSold[j] + totalSales
  }

  hourlyCooksSold.push(totalSales);
  return hourlyCooksSold;
};

var table = document.getElementById('shell');
var data = [];

// crating a new table row
var new_row;

for (var i=0; i < store.length; i++) {
  data.push (
    '<td>' + store +  cooksPerCust() [0] +'</td>' +
    '<td>' + store +  cooksPerCust() [1]+'</td>' +
    '<td>' + store +  cooksPerCust() [2]+'</td>' +
    '<td>' + store +  cooksPerCust() [3]+'</td>' +
    '<td>' + store +  cooksPerCust() [4]+'</td>' +
    '<td>' + store +  cooksPerCust() [5]+'</td>' +
    '<td>' + store +  cooksPerCust() [6]+'</td>' +
    '<td>' + store +  cooksPerCust() [7]+'</td>' +
    '<td>' + store +  cooksPerCust() [8]+'</td>' +
    '<td>' + store +  cooksPerCust() [9]+'</td>' +
    '<td>' + store +  cooksPerCust() [10]+'</td>' +
    '<td>' + store +  cooksPerCust() [11]+'</td>' +
    '<td>' + store +  cooksPerCust() [12]+'</td>' +
    '<td>' + store +  cooksPerCust() [13]+'</td>' +
    '<td>' + store +  cooksPerCust() [14]+'</td>'
  );
}


for (var j = 0; j < data.length; j++) {
  new_row = document.createElement('tr');
  new_row.innerHTML = data[j];
  table.appendChild(new_row);
}

Location.custHourly();
Location.cooksPerCust();

// // Populate array of avg customers per hour
// Location.prototype.custHourly = function() {
//   for (var i = 0; i < hours.length; i++) {
//     var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//     this.avgCustArr.push(custOneHour);
//   }
// }
//
// // Number of cookies customers buys per hour
// Location.prototype.cooksPerCust = function() {
//   // this.custHourly();
//   for (var j = 0; j < hours.length; j++) {
//     this.totalCooks += this.avgCustArr[j];
//   }
// }
//
// for (var i=0; i < store.length; i++) {
//   data.push (
//     '<td>' + store +  cooksPerCust() [0]+'</td>' +
//     '<td>' + store +  cooksPerCust() [1]+'</td>' +
//     '<td>' + store +  cooksPerCust() [2]+'</td>' +
//     '<td>' + store +  cooksPerCust() [3]+'</td>' +
//     '<td>' + store +  cooksPerCust() [4]+'</td>' +
//     '<td>' + store +  cooksPerCust() [5]+'</td>' +
//     '<td>' + store +  cooksPerCust() [6]+'</td>' +
//     '<td>' + store +  cooksPerCust() [7]+'</td>' +
//     '<td>' + store +  cooksPerCust() [8]+'</td>' +
//     '<td>' + store +  cooksPerCust() [9]+'</td>' +
//     '<td>' + store +  cooksPerCust() [10]+'</td>' +
//     '<td>' + store +  cooksPerCust() [11]+'</td>' +
//     '<td>' + store +  cooksPerCust() [12]+'</td>' +
//     '<td>' + store +  cooksPerCust() [13]+'</td>' +
//     '<td>' + store +  cooksPerCust() [14]+'</td>' +
//   );
// }

// Creates list and appends to the DOM
// listThings: function() {
//   var container = document.createElement('table');
//   container.innerHTML = '<h3>' + this.name + '</h3>';
//   document.body.appendChild(container);
//
//   var list = document.createElement('thead');
//   var listArr = [];
//
//   for (var i = 0; i < hours.length; i++) {
//
//     if (i < 5) {
//       listArr.push('<td>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</td>');
//     } else {
//       listArr.push('<td>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</td>');
//
//     }
//   }
//
//   listArr.push('<td>Total: ' + this.totalCooks + ' cookies</td>');
//
//   var fullString = listArr.join('');
//   list.innerHTML = fullString;
//   document.body.appendChild(list);
// }







// var firstPike = {
//   name: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesPerHr: 6.3,
//   avgCustArr: [],
//   cooksPerHourArr: [],
//   totalCooks: 0,
//
//   // Populate array of avg customers per hour
//   custHourly: function() {
//
//     for (var i = 0; i < hours.length; i++) {
//       var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//       this.avgCustArr.push(custOneHour);
//     }
//   },
//
//   // Number of cookies customers buys per hour
//   cooksPerCust: function() {
//     // this.custHourly();
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
//
//       }
//     }
//
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
//
// // SeaTac Airport
//   var seaAirport = {
//     name: 'SeaTac Airport',
//     minCust: 3,
//     maxCust: 24,
//     avgCookiesPerHr: 1.2,
//     avgCustArr: [],
//     cooksPerHourArr: [],
//     totalCooks: 0,
//
//     // Populate array of avg customers per hour
//     custHourly: function() {
//
//       for (var i = 0; i < hours.length; i++) {
//         var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//         this.avgCustArr.push(custOneHour);
//       }
//     },
//
//     // Number of cookies customers buys per hour
//     cooksPerCust: function() {
//       // this.custHourly();
//       for (var j = 0; j < hours.length; j++) {
//         this.totalCooks += this.avgCustArr[j];
//       }
//
//     },
//
//     // Creates list and appends to the DOM
//     listThings: function() {
//       var container = document.createElement('div');
//       container.innerHTML = '<h3>' + this.name + '</h3>';
//       document.body.appendChild(container);
//
//       var list = document.createElement('ul');
//       var listArr = [];
//
//       for (var i = 0; i < hours.length; i++) {
//
//         if (i < 5) {
//           listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');
//         } else {
//           listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');
//
//         }
//       }
//
//       listArr.push('<li>Total: ' + this.totalCooks + ' cookies</li>');
//
//       var fullString = listArr.join('');
//       list.innerHTML = fullString;
//       document.body.appendChild(list);
//     }
//   };
//
// seaAirport.custHourly();
// seaAirport.cooksPerCust();
// seaAirport.listThings();
//
// var seaCenter = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesPerHr: 3.7,
//   avgCustArr: [],
//   cooksPerHourArr: [],
//   totalCooks: 0,
//
//   // Populate array of avg customers per hour
//   custHourly: function() {
//
//     for (var i = 0; i < hours.length; i++) {
//       var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//       this.avgCustArr.push(custOneHour);
//     }
//   },
//
//   // Number of cookies customers buys per hour
//   cooksPerCust: function() {
//     // this.custHourly();
//     for (var j = 0; j < hours.length; j++) {
//       this.totalCooks += this.avgCustArr[j];
//     }
//
//   },
//
//   // Creates list and appends to the DOM
//   listThings: function() {
//     var container = document.createElement('div');
//     container.innerHTML = '<h3>' + this.name + '</h3>';
//     document.body.appendChild(container);
//
//     var list = document.createElement('ul');
//     var listArr = [];
//
//     for (var i = 0; i < hours.length; i++) {
//
//       if (i < 5) {
//         listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');
//       } else {
//         listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');
//
//       }
//     }
//
//     listArr.push('<li>Total: ' + this.totalCooks + ' cookies</li>');
//
//     var fullString = listArr.join('');
//     list.innerHTML = fullString;
//     document.body.appendChild(list);
//   }
// };
//
// seaCenter.custHourly();
// seaCenter.cooksPerCust();
// seaCenter.listThings();
//
// var capHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookiesPerHr: 2.3,
//   avgCustArr: [],
//   cooksPerHourArr: [],
//   totalCooks: 0,
//
//   // Populate array of avg customers per hour
//   custHourly: function() {
//
//     for (var i = 0; i < hours.length; i++) {
//       var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//       this.avgCustArr.push(custOneHour);
//     }
//   },
//
//   // Number of cookies customers buys per hour
//   cooksPerCust: function() {
//     // this.custHourly();
//     for (var j = 0; j < hours.length; j++) {
//       this.totalCooks += this.avgCustArr[j];
//     }
//
//   },
//
//   // Creates list and appends to the DOM
//   listThings: function() {
//     var container = document.createElement('div');
//     container.innerHTML = '<h3>' + this.name + '</h3>';
//     document.body.appendChild(container);
//
//     var list = document.createElement('ul');
//     var listArr = [];
//
//     for (var i = 0; i < hours.length; i++) {
//
//       if (i < 5) {
//         listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');
//       } else {
//         listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');
//
//       }
//     }
//
//     listArr.push('<li>Total: ' + this.totalCooks + ' cookies</li>');
//
//     var fullString = listArr.join('');
//     list.innerHTML = fullString;
//     document.body.appendChild(list);
//   }
// };
//
// capHill.custHourly();
// capHill.cooksPerCust();
// capHill.listThings();
//
// var alki = {
//   name: 'Alki Beach',
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesPerHr: 4.6,
//   avgCustArr: [],
//   cooksPerHourArr: [],
//   totalCooks: 0,
//
//     // Populate array of avg customers per hour
//   custHourly: function() {
//
//     for (var i = 0; i < hours.length; i++) {
//       var custOneHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
//       this.avgCustArr.push(custOneHour);
//     }
//   },
//
//     // Number of cookies customers buys per hour
//   cooksPerCust: function() {
//       // this.custHourly();
//     for (var j = 0; j < hours.length; j++) {
//       this.totalCooks += this.avgCustArr[j];
//     }
//
//   },
//
//     // Creates list and appends to the DOM
//   listThings: function() {
//     var container = document.createElement('div');
//     container.innerHTML = '<h3>' + this.name + '</h3>';
//     document.body.appendChild(container);
//
//     var list = document.createElement('ul');
//     var listArr = [];
//
//     for (var i = 0; i < hours.length; i++) {
//
//       if (i < 5) {
//         listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');
//       } else {
//         listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');
//
//       }
//     }
//
//     listArr.push('<li>Total: ' + this.totalCooks + ' cookies</li>');
//
//     var fullString = listArr.join('');
//     list.innerHTML = fullString;
//     document.body.appendChild(list);
//   }
// };
//
// alki.custHourly();
// alki.cooksPerCust();
// alki.listThings();
