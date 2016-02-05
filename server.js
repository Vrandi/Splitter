'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});
