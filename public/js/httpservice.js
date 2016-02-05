'use strict';

function createRequest(method, url, data, callback) {
  var req = new XMLHttpRequest();
  req.open(method, url);
  req.setRequestHeader('Content-type', 'application/json');
  req.send(data && JSON.stringify(data));
  req.onreadystatechange = function() {
    if (req.readyState === 4) {
      if (req.response !== '') {
        console.log(req.response);
        var res = JSON.parse(req.response);
        callback(res);
      } else {
        callback();
      }
    }
  };
}
