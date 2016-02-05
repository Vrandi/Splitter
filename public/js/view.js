'use strict';

function View() {
  this.listOfEvents = document.querySelector('.events');

  this.listEvents = function(response) {
    response.forEach(function(event) { _this.addElements(event) });
  };

  this.addElements = function(event) {
    var element = template(event);
    _this.listOfEvents.innerHTML += element;
  };
}