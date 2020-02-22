var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'SDC'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Ay dawg, connected to mysql!');
});

module.exports = db;
