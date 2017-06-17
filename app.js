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

// SeaTac Airport
  var seaAirport = {
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    avgCookiesPerHr: 1.2,
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

seaAirport.custHourly();
seaAirport.cooksPerCust();
seaAirport.listThings();

var seaCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookiesPerHr: 3.7,
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

seaCenter.custHourly();
seaCenter.cooksPerCust();
seaCenter.listThings();

var Alki = {
  name: 'Alki Beach',
  minCust: 2,
  maxCust: 16,
  avgCookiesPerHr: 4.6,
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

Alki.custHourly();
Alki.cooksPerCust();
Alki.listThings();
