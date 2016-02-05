'use strict';


var sql = require('sql-template-strings');
var pg = require('pg');
var databaseUrl = process.env.DATABASE_URL;

function getAll(cb) {
  sendQuery('SELECT * FROM event', cb);
}

function addEntry(params, callback) {
  sendQuery(sql`
    INSERT INTO event (total_cost, event_name, members, date)
    VALUES (${params.total_cost}, ${params.event_name}, ${params.members}, ${params.date})
    RETURNING event_id, event_name, total_cost, members, date`,
    callback);
}

function removeEntry(id, callback) {
  sendQuery(sql`
    DELETE FROM event WHERE event_id = ${id}
    RETURNING event_id, event_name, total_cost, members, date`,
    callback);
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
  add: addEntry,
  remove: removeEntry,
  all: getAll
};