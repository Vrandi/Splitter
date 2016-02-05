'use strict';


function Controller() {
  var _this = this;
  this.request = new Request();
  this.listOfEvents = document.querySelector('.events');

  this.showCurrentItems = function() {
    _this.request.get(_this.listEvents);
  };

  this.listEvents = function(response) {
    response.forEach(function(event) { _this.addElements(event) });
  };

  this.addElements = function(event) {
    var element = template(event);
    _this.listOfEvents.innerHTML += element;
  };
}

var app = new Controller();
app.showCurrentItems();

