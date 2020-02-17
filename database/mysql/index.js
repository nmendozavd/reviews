var mysql = require('mysql');
var Promise = require('bluebird');

var db = mysql.createConnection({
  user: 'root',
  database: 'SDC'
});

db.connect();
db.query = Promise.promisify(db.query);

module.exports = db;
