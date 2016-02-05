'use strict';


var sql = require('sql-template-strings');
var pg = require('pg');
var databaseUrl = process.env.DATABASE_URL;

function getAll(cb) {
    sendQuery('SELECT * FROM event', cb);
}


function sendQuery(query, callback) {
  pg.connect(databaseUrl, function(err, client, done){
    client.query(query, function(err, result) {
      done();
      callback(err, result);
    });
  });
}





module.exports = {
  // add: addEntry,
  // remove: removeEntry,
  all: getAll,
  // filter: filterEntriesByDate
};