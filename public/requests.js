'use strict';

function Request() {
  this.url = 'splitter-sbox.herokuapp.com';

  this.post = function(data, cb) {
    createRequest('POST', this.url, data, cb);
  };

  this.get = function(cb) {
    createRequest('GET', this.url, null, cb);
  };

  this.del = function(id, cb) {
    var url = this.url + '/' + id;
    createRequest('DELETE', url, null, cb);
  };
}
