var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "lampuser",
  password: "Test0987"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});