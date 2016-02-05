'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var events = require("./events.js");

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/events', function (req, res) {
  events.all(function(err, result) {
    // if (err) throw err;
    res.json(result.rows);
  });
});

app.get('/events/:id', function (req, res) {
  events.getOne(req.params.id, function(err, result) {
    // if (err) throw err;
    res.json(result.rows);
  });
});

app.post('/events', function (req, res) {
  events.add(req.body, function(err, result) {
    // if (err) throw err;
    res.json(result.rows);
  });
});

app.delete('/events/:id', function (req, res) {
  events.remove(req.params.id, function(err, result) {
    // if (err) throw err;
    res.json(result.rows);
  });
});


























app.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});
