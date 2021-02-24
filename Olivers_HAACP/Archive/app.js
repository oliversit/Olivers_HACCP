var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

app.set("view engine", "ejs"); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(app.router);
app.use(express.static('public'));


var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'lampuser',
  password : 'Test0987',
  database : 'geek'

});

connection.connect();



//Tell Express where we keep our index.ejs
app.set("views", __dirname + "/views"); 

//Use body-parser
app.use(bodyParser.urlencoded({ extended: false })); 

var user = "Prodicode";

//Instead of sending Hello World, we render index.ejs
app.get("/Test", (req, res) => { res.render("index", { username: user }); }); 


app.listen(3000, () => { console.log("Server online on http://localhost:3000"); }); 
