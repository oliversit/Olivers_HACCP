var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "lampuser",
  password: "Test0987",
  database: "geek"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM student", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});