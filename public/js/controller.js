'use strict';


function Controller(request, view) {
  var _this = this;
  this.request = request;
  this.view = view;

  this.showCurrentItems = function() {
    _this.request.get(_this.view.listEvents);
  };

}

