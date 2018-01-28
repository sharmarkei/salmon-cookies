'use strict';

//constructor function
function Store(name, minCustomer, maxCustomer, avgSales) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSales = avgSales;
  this.hourlySales = [];
}

//prototype chain methods
Store.prototype.customerPerHour = function () {
  var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  return customers;
};

//an array of sales by the hour ranging 14 hours
Store.prototype.salesByHour = function () {
  for (var i = 0; i < 14; i++) {
    var sales = this.customerPerHour() * this.avgSales;
    this.hourlySales.push(Math.ceil(sales));
  }

  //adds the sales per hour together with the loop
  var totalSales = 0;
  for (var j = 0; j < this.hourlySales.length; j++) {
    totalSales = this.hourlySales[j] + totalSales;
  }
  this.hourlySales.push(totalSales); //pushes total to end of the array
  return this.hourlySales;
};

// the store objects pass in their arguments
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//array of the store loactions to be used in DOM building loops
var locations = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

for (var k = 0; k < locations.length; k++) {
  locations[k].salesByHour();
}

//created the table header here
function createHeader() {
  var thead = document.getElementById('thead');
  var headValues = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

  // creates the newHead to be used to build the DOM
  var newHead;

  //loops the headValues in the array above and puts them in the DOM table head
  for (var a = 0; a < headValues.length; a++) {
    newHead = document.createElement('td');
    newHead.innerHTML = headValues[a];
    thead.appendChild(newHead);
  }
}

createHeader();

//filling out the bulk of the table by looping the objects values and assigning them to a data array
var table = document.getElementById('shell');
var data = [];

for (var m = 0; m < locations.length; m++) {
  var dataList = '<td>' + locations[m].name + '</td>';
  for (var n = 0; n < 15; n++) {
    dataList = dataList + '<td>' + locations[m].hourlySales[n] + '</td>';
  }
  data.push(dataList);
}

//placing all the data collected in the data array into the DOM
var newRow;

for (var z = 0; z < data.length; z++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = data[z];
  table.appendChild(newRow);
}

function createFooter() {
  var tfoot = document.getElementById('tfoot');
  var footValues = ['<td>' + 'Totals' + '</td>'];


  var grandTotal = [];
  for (var b = 0; b < locations.length; b++) {
    grandTotal = 0;
    for (var x = 0; x < 15; x++) {
      grandTotal.push(locations[b].hourlySales[x] + grandTotal);
    }
  }
  //assembling the grand total for the table
  var grandDataList = [];
  for (var y = 0; y < 15; y++) {
    grandDataList = grandDataList + '<td>' + grandTotal[y] + '</td>';
  }
  footValues.push(grandDataList);

  //loops the headValues in the array above and puts them in the DOM table head
  var newFoot = document.createElement('tr');
  newFoot.innerHTML = footValues.join('');
  tfoot.appendChild(newFoot);
}

createFooter();