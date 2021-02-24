var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(app.router);
app.use(express.static('public'));

app.set("view engine", "ejs"); 

var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'lampuser',
  password : 'Test0987',
  database : 'Haccp'

});

connection.connect();




var someVar = [];

connection.query("select * from Submitted_Forms", function(err, rows){
  if(err) {
    throw err;
  } else {
    setValue(rows);
  }
});

function setValue(value) {
  someVar = value;
  console.log(someVar);
	res.render("index", { userdata: connection });
}



connection.end();