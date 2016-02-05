'use strict';

function App() {
  this.request = new Request();
  this.view = new View();
  this.controller = new Controller(request, view);
}

var app = new app();
app.controller.showCurrentItems();