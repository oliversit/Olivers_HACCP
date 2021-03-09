var mysql = require('mysql');
var conn = mysql.createConnection({

  host     : 'localhost',
  user     : 'lampuser',
  password : 'Test0987',
  database : 'Haccp'
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = conn;
