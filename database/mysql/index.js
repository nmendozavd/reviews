var mysql = require('mysql');

var db = mysql.createConnection({
  user: 'root',
  database: 'SDC'
});

db.connect();


module.exports = db;
